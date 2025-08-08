import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveGame = ({ isVisible, onGameComplete }) => {
  const [gameState, setGameState] = useState('waiting'); // waiting, playing, completed
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [bugs, setBugs] = useState([]);
  const [bugsFixed, setBugsFixed] = useState(0);

  const bugTypes = [
    { id: 'syntax', icon: 'AlertTriangle', color: 'text-red-400', points: 10 },
    { id: 'logic', icon: 'Bug', color: 'text-yellow-400', points: 15 },
    { id: 'performance', icon: 'Zap', color: 'text-orange-400', points: 20 },
    { id: 'security', icon: 'Shield', color: 'text-purple-400', points: 25 }
  ];

  useEffect(() => {
    if (gameState === 'playing' && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('completed');
      onGameComplete(score);
    }
  }, [gameState, timeLeft, score, onGameComplete]);

  useEffect(() => {
    if (gameState === 'playing') {
      const interval = setInterval(() => {
        if (bugs?.length < 3) {
          const newBug = {
            id: Date.now(),
            type: bugTypes?.[Math.floor(Math.random() * bugTypes?.length)],
            x: Math.random() * 80 + 10,
            y: Math.random() * 60 + 20,
            lifetime: 5000
          };
          setBugs(prev => [...prev, newBug]);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [gameState, bugs?.length]);

  useEffect(() => {
    if (gameState === 'playing') {
      bugs?.forEach(bug => {
        const timeout = setTimeout(() => {
          setBugs(prev => prev?.filter(b => b?.id !== bug?.id));
        }, bug?.lifetime);

        return () => clearTimeout(timeout);
      });
    }
  }, [bugs, gameState]);

  const startGame = () => {
    setGameState('playing');
    setScore(0);
    setTimeLeft(30);
    setBugs([]);
    setBugsFixed(0);
  };

  const fixBug = (bugId) => {
    const bug = bugs?.find(b => b?.id === bugId);
    if (bug) {
      setScore(prev => prev + bug?.type?.points);
      setBugsFixed(prev => prev + 1);
      setBugs(prev => prev?.filter(b => b?.id !== bugId));
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
          <Icon name="Gamepad2" size={20} />
          <span>Bug Hunt Challenge</span>
        </h3>
        {gameState === 'playing' && (
          <div className="flex items-center space-x-4 text-sm">
            <div className="text-green-400">
              Score: {score}
            </div>
            <div className="text-yellow-400">
              Fixed: {bugsFixed}
            </div>
            <div className="text-red-400">
              Time: {timeLeft}s
            </div>
          </div>
        )}
      </div>
      {gameState === 'waiting' && (
        <div className="text-center py-8">
          <div className="mb-4">
            <Icon name="Target" size={48} className="mx-auto text-accent mb-4" />
            <p className="text-gray-300 mb-2">
              Help fix the bugs to unlock navigation options!
            </p>
            <p className="text-gray-400 text-sm">
              Click on the bugs as they appear. Different bugs give different points.
            </p>
          </div>
          <Button onClick={startGame} variant="default">
            Start Bug Hunt
          </Button>
        </div>
      )}
      {gameState === 'playing' && (
        <div className="relative bg-gray-800 rounded-lg h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
            {/* Code background pattern */}
            <div className="absolute inset-0 opacity-10 font-mono text-xs leading-relaxed p-4 text-gray-500">
              {`function debugCode() {\n  // Find and fix the bugs!\n  const issues = findBugs();\n  return issues.map(fix);\n}`}
            </div>
          </div>

          {bugs?.map(bug => (
            <button
              key={bug?.id}
              onClick={() => fixBug(bug?.id)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${bug?.type?.color} hover:scale-110 transition-transform animate-pulse`}
              style={{ left: `${bug?.x}%`, top: `${bug?.y}%` }}
            >
              <Icon name={bug?.type?.icon} size={24} />
            </button>
          ))}

          {bugs?.length === 0 && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <div className="text-center">
                <Icon name="Search" size={32} className="mx-auto mb-2 opacity-50" />
                <p className="text-sm">Scanning for bugs...</p>
              </div>
            </div>
          )}
        </div>
      )}
      {gameState === 'completed' && (
        <div className="text-center py-8">
          <div className="mb-4">
            <Icon name="Trophy" size={48} className="mx-auto text-yellow-400 mb-4" />
            <h4 className="text-xl font-semibold text-white mb-2">
              Challenge Complete!
            </h4>
            <p className="text-gray-300 mb-2">
              Final Score: <span className="text-green-400 font-bold">{score}</span>
            </p>
            <p className="text-gray-300 mb-4">
              Bugs Fixed: <span className="text-accent font-bold">{bugsFixed}</span>
            </p>
            <p className="text-gray-400 text-sm mb-4">
              Great job! You've unlocked the navigation options below.
            </p>
          </div>
          <Button onClick={startGame} variant="outline">
            Play Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default InteractiveGame;
import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const EasterEggs = () => {
  const [foundEggs, setFoundEggs] = useState([]);
  const [showKonamiHint, setShowKonamiHint] = useState(false);
  const [konamiSequence, setKonamiSequence] = useState([]);
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  const easterEggs = [
    {
      id: 'konami',
      name: 'Konami Code',
      description: 'The classic cheat code',
      icon: 'Gamepad2',
      hint: 'Try the famous game cheat code...',
      found: foundEggs?.includes('konami')
    },
    {
      id: 'click-logo',
      name: 'Logo Secret',
      description: 'Click the logo 10 times',
      icon: 'MousePointer',
      hint: 'Something special about the logo...',
      found: foundEggs?.includes('click-logo')
    },
    {
      id: 'developer-tools',
      name: 'Inspector Badge',
      description: 'Open developer tools',
      icon: 'Code',
      hint: 'Developers love to inspect...',
      found: foundEggs?.includes('developer-tools')
    }
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      const newSequence = [...konamiSequence, event.code]?.slice(-konamiCode?.length);
      setKonamiSequence(newSequence);

      if (newSequence?.length === konamiCode?.length && 
          newSequence?.every((key, index) => key === konamiCode?.[index])) {
        if (!foundEggs?.includes('konami')) {
          setFoundEggs(prev => [...prev, 'konami']);
          setShowSecretMessage(true);
          setTimeout(() => setShowSecretMessage(false), 5000);
        }
      }
    };

    // Check for developer tools
    const checkDevTools = () => {
      if ((window.outerHeight - window.innerHeight > 200) || 
          (window.outerWidth - window.innerWidth > 200)) {
        if (!foundEggs?.includes('developer-tools')) {
          setFoundEggs(prev => [...prev, 'developer-tools']);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', checkDevTools);
    
    // Initial check
    checkDevTools();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', checkDevTools);
    };
  }, [konamiSequence, foundEggs, konamiCode]);

  const handleLogoClick = () => {
    const clickCount = parseInt(localStorage.getItem('logoClickCount') || '0') + 1;
    localStorage.setItem('logoClickCount', clickCount?.toString());
    
    if (clickCount >= 10 && !foundEggs?.includes('click-logo')) {
      setFoundEggs(prev => [...prev, 'click-logo']);
      localStorage.removeItem('logoClickCount');
    }
  };

  const toggleKonamiHint = () => {
    setShowKonamiHint(!showKonamiHint);
  };

  return (
    <div className="space-y-4">
      {/* Secret Message */}
      {showSecretMessage && (
        <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg shadow-brand-lg animate-bounce">
          <div className="flex items-center space-x-2">
            <Icon name="Sparkles" size={20} />
            <span className="font-medium">🎉 Konami Code Activated!</span>
          </div>
          <p className="text-sm mt-1 opacity-90">
            You've unlocked the developer's secret!
          </p>
        </div>
      )}
      {/* Easter Eggs Collection */}
      <div className="bg-card rounded-lg p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Gift" size={20} className="text-accent" />
            <h3 className="text-lg font-semibold text-text-primary">
              Hidden Treasures
            </h3>
          </div>
          <div className="text-sm text-text-secondary">
            {foundEggs?.length}/{easterEggs?.length} found
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {easterEggs?.map((egg) => (
            <div
              key={egg?.id}
              className={`p-4 rounded-lg border transition-brand ${
                egg?.found 
                  ? 'border-green-300 bg-green-50' :'border-border bg-muted'
              }`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                  egg?.found ? 'bg-green-500' : 'bg-gray-400'
                }`}>
                  <Icon 
                    name={egg?.found ? 'Check' : egg?.icon} 
                    size={16} 
                    color="white" 
                  />
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium ${
                    egg?.found ? 'text-green-800' : 'text-text-primary'
                  }`}>
                    {egg?.name}
                  </h4>
                </div>
              </div>
              
              <p className={`text-sm ${
                egg?.found ? 'text-green-700' : 'text-text-secondary'
              }`}>
                {egg?.found ? egg?.description : egg?.hint}
              </p>

              {egg?.id === 'konami' && !egg?.found && (
                <button
                  onClick={toggleKonamiHint}
                  className="mt-2 text-xs text-accent hover:text-primary transition-brand"
                >
                  Need a hint?
                </button>
              )}
            </div>
          ))}
        </div>

        {showKonamiHint && (
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start space-x-2">
              <Icon name="Lightbulb" size={16} className="text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Konami Code Hint:</p>
                <p>↑ ↑ ↓ ↓ ← → ← → B A</p>
                <p className="text-xs mt-1 opacity-75">
                  Use your keyboard arrow keys, then press B and A
                </p>
              </div>
            </div>
          </div>
        )}

        {foundEggs?.length === easterEggs?.length && (
          <div className="mt-4 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Trophy" size={20} />
              <span className="font-semibold">Treasure Hunter!</span>
            </div>
            <p className="text-sm opacity-90">
              Congratulations! You've found all the hidden treasures. 
              You have a keen eye for detail! 🎉
            </p>
          </div>
        )}
      </div>
      {/* Hidden clickable logo for easter egg */}
      <div className="text-center">
        <button
          onClick={handleLogoClick}
          className="inline-flex items-center space-x-2 text-text-muted hover:text-accent transition-brand text-sm"
        >
          <Icon name="Eye" size={14} />
          <span>Keep exploring...</span>
        </button>
      </div>
    </div>
  );
};

export default EasterEggs;
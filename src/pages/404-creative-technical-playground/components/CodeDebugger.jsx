import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const CodeDebugger = ({ onBugFixed }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isDebugging, setIsDebugging] = useState(false);
  const [bugFixed, setBugFixed] = useState(false);
  const [showBug, setShowBug] = useState(true);

  const codeLines = [
    "// Looking for the missing page...",
    "function findPage(url) {",
    "  const routes = getAllRoutes();",
    "  const match = routes.find(route => {",
    "    // 🐛 BUG: This condition is always false!",
    "    return route.path === url && false;",
    "  });",
    "  ",
    "  if (!match) {",
    "    throw new Error('404: Page not found');",
    "  }",
    "  ",
    "  return match;",
    "}"
  ];

  const fixedCodeLines = [
    "// Looking for the missing page...",
    "function findPage(url) {",
    "  const routes = getAllRoutes();",
    "  const match = routes.find(route => {",
    "    // ✅ FIXED: Removed the always-false condition",
    "    return route.path === url;",
    "  });",
    "  ",
    "  if (!match) {",
    "    throw new Error('404: Page not found');",
    "  }",
    "  ",
    "  return match;",
    "}"
  ];

  useEffect(() => {
    if (isDebugging && !bugFixed) {
      const interval = setInterval(() => {
        setCurrentLine(prev => {
          if (prev >= codeLines?.length - 1) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isDebugging, bugFixed, codeLines?.length]);

  const handleFixBug = () => {
    setIsDebugging(true);
    setShowBug(false);
    
    setTimeout(() => {
      setBugFixed(true);
      setCurrentLine(0);
      onBugFixed();
    }, 3000);
  };

  const displayLines = bugFixed ? fixedCodeLines : codeLines;

  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 ml-4">debug.js</span>
        </div>
        {showBug && (
          <button
            onClick={handleFixBug}
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs transition-brand"
          >
            <Icon name="Bug" size={14} />
            <span>Fix Bug</span>
          </button>
        )}
      </div>
      <div className="space-y-1">
        {displayLines?.map((line, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 transition-all duration-300 ${
              isDebugging && index <= currentLine ? 'opacity-100' : isDebugging ?'opacity-30' : 'opacity-100'
            }`}
          >
            <span className="text-gray-500 w-6 text-right select-none">
              {index + 1}
            </span>
            <span className={`flex-1 ${
              line?.includes('🐛 BUG') ? 'text-red-400 bg-red-900/20 px-2 py-1 rounded' :
              line?.includes('✅ FIXED') ? 'text-green-400 bg-green-900/20 px-2 py-1 rounded' :
              line?.includes('//') ? 'text-gray-400' :
              line?.includes('function') || line?.includes('const') || line?.includes('return') ? 'text-blue-400' :
              line?.includes('Error') ? 'text-red-400' :
              'text-gray-300'
            }`}>
              {line}
            </span>
          </div>
        ))}
      </div>
      {bugFixed && (
        <div className="mt-4 p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
          <div className="flex items-center space-x-2 text-green-400">
            <Icon name="CheckCircle" size={16} />
            <span className="text-sm">Bug fixed! The page finder should work now.</span>
          </div>
        </div>
      )}
      {isDebugging && !bugFixed && (
        <div className="mt-4 flex items-center space-x-2 text-yellow-400">
          <div className="animate-spin">
            <Icon name="Loader2" size={16} />
          </div>
          <span className="text-sm">Debugging in progress...</span>
        </div>
      )}
    </div>
  );
};

export default CodeDebugger;
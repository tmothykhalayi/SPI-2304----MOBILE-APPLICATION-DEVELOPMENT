import { useState, useEffect } from 'react';
import Header from './Components/Header';
import FilterButtons from './Components/Filter';
import ExtensionList from './Components/Extensionlist';
import { Data } from './Data/Data';
import type { Extension, Filter, Theme} from './Types/interface';

function App() {
  const [extensions, setExtensions] = useState<Extension[]>(Data);
  const [activeFilter, setActiveFilter] = useState<Filter>('All');  // Initialize theme from localStorage with system theme support
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme) {
      return savedTheme;
    }
    // If no saved theme, check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme to document and save to localStorage
  useEffect(() => {
    const root = document.documentElement;

    // Apply the dark class based on theme preference
    root.classList.toggle(
      'dark',
      theme === 'dark' ||
      (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );

    // Save to localStorage
    if (theme) {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const handleToggleExtension = (id: string) => {
    setExtensions(prev =>
      prev.map(ext =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const activeCount = extensions.filter(ext => ext.isActive).length;
  const inactiveCount = extensions.filter(ext => !ext.isActive).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Header theme={theme} onThemeChange={setTheme} />

        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Extensions List
            </h2>
            <FilterButtons
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              activeCount={activeCount}
              inactiveCount={inactiveCount}
              totalCount={extensions.length}
            />
          </div>
        </div>

        <ExtensionList
          extensions={extensions}
          filter={activeFilter}
          onToggleExtension={handleToggleExtension}
        />
      </div>
    </div>
  );
}

export default App;
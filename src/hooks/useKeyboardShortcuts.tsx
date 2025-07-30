import { useEffect } from 'react';

interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  alt?: boolean;
  callback: (e: KeyboardEvent) => void;
  description: string;
}

export const useKeyboardShortcuts = (shortcuts: KeyboardShortcut[]) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      for (const shortcut of shortcuts) {
        const { key, ctrl = false, meta = false, shift = false, alt = false, callback } = shortcut;
        
        if (
          e.key.toLowerCase() === key.toLowerCase() &&
          e.ctrlKey === ctrl &&
          e.metaKey === meta &&
          e.shiftKey === shift &&
          e.altKey === alt
        ) {
          e.preventDefault();
          callback(e);
          break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
};

// Global shortcuts hook for the entire app
export const useGlobalShortcuts = (onSearch: () => void) => {
  const shortcuts: KeyboardShortcut[] = [
    {
      key: 'k',
      ctrl: true,
      callback: onSearch,
      description: 'Open search'
    },
    {
      key: 'k',
      meta: true, // For Mac users
      callback: onSearch,
      description: 'Open search'
    },
    {
      key: '/',
      callback: (e) => {
        // Only trigger if not in an input field
        if (!(e.target as HTMLElement).matches('input, textarea, [contenteditable]')) {
          onSearch();
        }
      },
      description: 'Quick search'
    }
  ];

  useKeyboardShortcuts(shortcuts);
};

// Playground specific shortcuts
export const usePlaygroundShortcuts = (
  onRun: () => void,
  onSave: () => void,
  onClear: () => void
) => {
  const shortcuts: KeyboardShortcut[] = [
    {
      key: 'Enter',
      ctrl: true,
      callback: onRun,
      description: 'Run prompt'
    },
    {
      key: 'Enter',
      meta: true,
      callback: onRun,
      description: 'Run prompt'
    },
    {
      key: 's',
      ctrl: true,
      callback: (e) => {
        e.preventDefault();
        onSave();
      },
      description: 'Save prompt'
    },
    {
      key: 's',
      meta: true,
      callback: (e) => {
        e.preventDefault();
        onSave();
      },
      description: 'Save prompt'
    },
    {
      key: 'Escape',
      callback: onClear,
      description: 'Clear output'
    }
  ];

  useKeyboardShortcuts(shortcuts);
};
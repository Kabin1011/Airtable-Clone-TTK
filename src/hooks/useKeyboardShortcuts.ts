import { useEffect } from 'react';

export interface KeyboardShortcut {
  key: string;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  alt?: boolean;
  description: string;
  action: () => void;
}

/**
 * Hook to register keyboard shortcuts
 * @param shortcuts - Array of keyboard shortcuts to register
 * @param enabled - Whether shortcuts are enabled (default: true)
 */
export function useKeyboardShortcuts(shortcuts: KeyboardShortcut[], enabled: boolean = true) {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input fields (except Escape)
      const target = event.target as HTMLElement;
      const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
      const isContentEditable = target.isContentEditable;

      for (const shortcut of shortcuts) {
        const matchesKey = event.key.toLowerCase() === shortcut.key.toLowerCase();

        // Check modifiers - they should match exactly
        const ctrlMatch = shortcut.ctrl ? event.ctrlKey : true;
        const metaMatch = shortcut.meta ? event.metaKey : true;
        const shiftMatch = shortcut.shift ? event.shiftKey : true;
        const altMatch = shortcut.alt ? event.altKey : true;

        // Also ensure that if the shortcut doesn't require a modifier, it's not pressed
        const noExtraCtrl = !shortcut.ctrl ? !event.ctrlKey : true;
        const noExtraMeta = !shortcut.meta ? !event.metaKey : true;
        const noExtraShift = !shortcut.shift ? !event.shiftKey : true;
        const noExtraAlt = !shortcut.alt ? !event.altKey : true;

        const matches = matchesKey && ctrlMatch && metaMatch && shiftMatch && altMatch &&
                       noExtraCtrl && noExtraMeta && noExtraShift && noExtraAlt;

        if (matches) {
          // Prevent default browser action immediately for all matches
          event.preventDefault();
          event.stopPropagation();

          // Allow Escape to work even in input fields, skip other shortcuts in inputs
          if (shortcut.key === 'Escape' || (!isInput && !isContentEditable)) {
            shortcut.action();
            break;
          }
          // If we're in an input and it's not Escape, still prevent default but don't execute
          break;
        }
      }
    };

    // Use capture phase to intercept before browser handles it
    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [shortcuts, enabled]);
}

/**
 * Format shortcut for display
 * Example: formatShortcut({ key: 'n', meta: true }) => "⌘N" or "Ctrl+N"
 */
export function formatShortcut(shortcut: Omit<KeyboardShortcut, 'description' | 'action'>): string {
  const isMac = typeof navigator !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  const parts: string[] = [];

  if (shortcut.ctrl) parts.push(isMac ? '⌃' : 'Ctrl');
  if (shortcut.alt) parts.push(isMac ? '⌥' : 'Alt');
  if (shortcut.shift) parts.push(isMac ? '⇧' : 'Shift');
  if (shortcut.meta) parts.push(isMac ? '⌘' : 'Ctrl');

  const keyDisplay = shortcut.key.length === 1 ? shortcut.key.toUpperCase() : shortcut.key;
  parts.push(keyDisplay);

  return isMac ? parts.join('') : parts.join('+');
}

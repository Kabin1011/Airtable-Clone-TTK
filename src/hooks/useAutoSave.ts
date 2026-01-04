import { useRef, useCallback, useEffect } from 'react';

interface PendingChange {
  recordId: string;
  fieldId: string;
  value: any;
}

interface UseAutoSaveOptions {
  onSave: (changes: PendingChange[]) => Promise<void>;
  delay?: number; // Delay in milliseconds (default: 30000ms = 30s)
}

/**
 * Global auto-save hook that batches multiple changes and saves them
 * after a period of inactivity (default: 30 seconds)
 * Timer pauses while any cell is being edited
 */
export function useAutoSave({ onSave, delay = 30000 }: UseAutoSaveOptions) {
  const pendingChangesRef = useRef<Map<string, PendingChange>>(new Map());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isSavingRef = useRef(false);
  const isEditingRef = useRef(false); // Track if ANY cell is being edited

  // Clear the existing timeout
  const clearTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  // Save all pending changes
  const savePendingChanges = useCallback(async () => {
    if (isSavingRef.current || pendingChangesRef.current.size === 0) {
      return;
    }

    isSavingRef.current = true;
    const changes = Array.from(pendingChangesRef.current.values());

    console.log(`Auto-saving ${changes.length} changes...`);

    try {
      await onSave(changes);
      // Clear pending changes after successful save
      pendingChangesRef.current.clear();
      console.log('Auto-save successful!');
    } catch (error) {
      console.error('Auto-save failed:', error);
      // Keep changes in queue for retry
    } finally {
      isSavingRef.current = false;
    }
  }, [onSave]);

  // Start the auto-save timer (only if not editing)
  const startTimer = useCallback(() => {
    // Don't start timer if already editing or no pending changes
    if (isEditingRef.current || pendingChangesRef.current.size === 0) {
      return;
    }

    clearTimer();
    timeoutRef.current = setTimeout(() => {
      void savePendingChanges();
    }, delay);
  }, [delay, clearTimer, savePendingChanges]);

  // Track a change (doesn't start timer, just stores the change)
  const trackChange = useCallback((recordId: string, fieldId: string, value: any) => {
    // Create unique key for this cell
    const key = `${recordId}-${fieldId}`;

    // Store the change
    pendingChangesRef.current.set(key, { recordId, fieldId, value });
  }, []);

  // Notify that editing started (pauses timer)
  const notifyEditingStart = useCallback(() => {
    isEditingRef.current = true;
    clearTimer(); // Pause the timer
  }, [clearTimer]);

  // Notify that editing ended (resumes timer)
  const notifyEditingEnd = useCallback(() => {
    isEditingRef.current = false;
    // Start timer if there are pending changes
    if (pendingChangesRef.current.size > 0) {
      startTimer();
    }
  }, [startTimer]);

  // Force save immediately (e.g., on blur or Enter)
  const forceSave = useCallback(async () => {
    clearTimer();
    await savePendingChanges();
  }, [clearTimer, savePendingChanges]);

  // Get count of pending changes
  const getPendingCount = useCallback(() => {
    return pendingChangesRef.current.size;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimer();
      // Save any pending changes on unmount
      if (pendingChangesRef.current.size > 0) {
        void savePendingChanges();
      }
    };
  }, [clearTimer, savePendingChanges]);

  return {
    trackChange,
    forceSave,
    getPendingCount,
    notifyEditingStart,
    notifyEditingEnd,
  };
}

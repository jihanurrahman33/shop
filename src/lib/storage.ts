/**
 * Safe client-side storage adapter adhering to Dependency Inversion.
 * Automatically falls back gracefully when running during SSR or in restricted environments.
 */
export interface IStorageAdapter {
  getItem<T>(key: string, defaultValue: T): T;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
}

export class LocalStorageAdapter implements IStorageAdapter {
  getItem<T>(key: string, defaultValue: T): T {
    if (typeof window === "undefined") {
      return defaultValue;
    }
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch {
      return defaultValue;
    }
  }

  setItem<T>(key: string, value: T): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Storage quota or security policy exceptions safely handled
    }
  }

  removeItem(key: string): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.removeItem(key);
    } catch {
      // Ignore
    }
  }
}

export const appStorage = new LocalStorageAdapter();

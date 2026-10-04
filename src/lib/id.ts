let sequence = 0;

// Form entry identifiers also work on plain HTTP previews on a local network.
export function createId(): string {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }
  sequence += 1;
  return `entry-${Date.now().toString(36)}-${sequence}-${Math.random().toString(36).slice(2, 9)}`;
}

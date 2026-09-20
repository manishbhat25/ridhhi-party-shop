export type DeviceTier = "high" | "low" | "reduced";

function readDeviceMemory(): number | undefined {
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  return typeof memory === "number" ? memory : undefined;
}

function saveDataEnabled(): boolean {
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean };
  }).connection;
  return Boolean(connection?.saveData);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function hasWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl"),
    );
  } catch {
    return false;
  }
}

export function getDeviceTier(): DeviceTier {
  if (typeof window === "undefined") return "high";
  if (prefersReducedMotion()) return "reduced";

  const memory = readDeviceMemory();
  const cores = navigator.hardwareConcurrency ?? 8;
  const mobile = window.matchMedia("(max-width: 768px)").matches;

  if (saveDataEnabled()) return "low";
  if (memory !== undefined && memory <= 4) return "low";
  if (mobile && cores <= 4) return "low";
  return "high";
}

export function shouldUse3D(): boolean {
  return hasWebGL() && getDeviceTier() !== "reduced";
}

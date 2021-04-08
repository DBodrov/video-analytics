export function diff<T>(a : Array<T>, b: Array<T>) {
    return JSON.stringify(a) === JSON.stringify(b)
  };
  
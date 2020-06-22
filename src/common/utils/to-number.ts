function trimInner(str: string): string {
  return str.replace(/\s/g, '');
}

export function toNumber<T>(value: T): number {
  if (typeof value === 'number') {
    return value;
  } else if (!value) {
    return 0;
  } else if (typeof value === 'boolean') {
    return Number(value);
  }
  return parseInt(trimInner(String(value)), 10);
}

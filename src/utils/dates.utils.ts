export function dayIsoString(dateString: string, beginOrEnd: 'begin' | 'end') {
  const date = new Date(dateString);
  if (beginOrEnd === 'begin') {
    date.setHours(0, 0, 0, 0);
  } else {
    date.setHours(23, 59, 59, 999);
  }
  return date.toISOString();
}

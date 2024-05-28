export function miniTypeof(val: any): string {
  if (val === null) {
    return 'null';
  }

  return Object.prototype.toString.call(val);
}
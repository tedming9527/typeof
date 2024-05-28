export function miniTypeof(val: unknown): string {

  // 原始类型判断
  if (typeof val !== 'object') {
    return typeof val;
  }

  // null 特殊判断
  if (val === null) {
    return 'null';
  }

  // 构造器类型判断
  if (val.constructor) {
    return val.constructor.name;
  }

  // 其他对象判断
  return Object.prototype.toString.call(val).match(/\[object (.+?)\]/)?.[1].toLowerCase() || '';
}
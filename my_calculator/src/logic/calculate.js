/**
 * Created by zhangxiang on 2017/11/16.
 */
import operate from './operate';
import isNumber from './isNumber';

/*
 * total:String      总数，没有结果时，输入的第一个数记为总数
 * next:String 下一个数，和总数一起计算，没有总数时，是第一个输入的数
 * operation:String  运算符  +, -, etc.
 * */
export default function calculate (obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }

    if (!obj.total && obj.next === '0' && buttonName !== '0') {
      return {next: buttonName};
    }

    //如果这是一个运算符，更新 下一个 的值
    if (obj.operation) {
      if (obj.next) {
        return {next: obj.next + buttonName};
      }
      return {next: buttonName};
    }
    //如果这不是一个运算符，更新 下一个 并且清楚其当前值
    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    }
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return {};
      }
      return {next: obj.next + '.'};
    }
    if (obj.operation) {
      return {next: '0.'};
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return {total: obj.total + '.'};
    }
    return {total: '0.'};
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    } else {
      // 就只有 = 没有运算符，就什么都不做
      return {};
    }
  }

  if (buttonName === '+/-') {
    if (obj.next) {
      return {next: (-1 * parseFloat(obj.next)).toString()};
    }
    if (obj.total) {
      return {total: (-1 * parseFloat(obj.total)).toString()};
    }
    return {};
  }
  if (obj.operation) {
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  if (!obj.next) {
    return {operation: buttonName};
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}

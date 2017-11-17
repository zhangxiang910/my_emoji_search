/**
 * Created by zhangxiang on 2017/11/16.
 */
export default function isNumber(num) {
  return !!num.match(/[0-9]+/);
  /*匹配到了就返回一个数组，双重取反为true；没有匹配到就返回null，双重取反就是false */
}

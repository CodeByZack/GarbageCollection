const food = 1;
const recycle = 2;
const bad = 3;
const other = 1;

const names = ["厨余垃圾", "可回收垃圾", "有害垃圾", "其它垃圾" ];

const desc = [
  "餐厅或居民家做饭做菜中产生的厨余.",
  "适宜回收和资源利用的，简单来说，废品站会收的.",
  "对人或自然造成直接或者潜在危害的，比如电池等.",
  "指以上三者之外的其他生活垃圾"
  ];

const rules = [
  ["投至餐厨垃圾收集容器"],
  ["卖回收站、或投至可回收物收集容器、收集点"],
  ["送有害垃圾回收站点，或投至有害垃圾收集容器"],
  ["投至其他垃圾收集容器"]
];

const colors = ["#73d173", "#c96e59", "#599ed1","#8e8e8d"];
export default {
  names,
  desc,
  rules,
  colors,
  food,recycle,bad,other
}
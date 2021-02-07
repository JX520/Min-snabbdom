"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = patch;

var _vnode = _interopRequireDefault(require("./vnode"));

var _insertElement = _interopRequireDefault(require("./insertElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* 
    1. 判断传入的第一个参数(oldVnode)是DOM节点还是虚拟节点,若是DOM节点需要包装秤虚拟节点;
    2. 若是虚拟节点则判断是否为同一节点,不是则插入新的节点，删除旧节点;
    3. 若为同一节点则进行diff比较;
    4. ;
    5. 
*/
function patch(oldVnode, newVnode) {
  // 1 
  if (oldVnode.sel === '' || oldVnode.sel === undefined) {
    // dom节点需要包装成虚拟节点
    oldVnode = (0, _vnode["default"])(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode); // console.log(oldVnode);
  } // 2


  if (oldVnode.sel === newVnode.sel && oldVnode.key === newVnode.key) {// 同一节点diff比较
  } else {
    // 不同节点暴力插删 先插再删
    var tempdom = (0, _insertElement["default"])(newVnode);
    console.log(tempdom);
    oldVnode.elm.parentNode.insertBefore(tempdom, oldVnode.elm);
  }
}
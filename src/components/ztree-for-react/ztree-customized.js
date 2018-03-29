import React, { Component } from 'react';
import ReactZtree from './ztree-for-react';
import './zTreeStyle/zTreeCustomizedStyle.less';

const nodes = [
  { name: '根节点',
    id: 0,
    children: [
      { name: '子节点1',
        id: 1 },
      { name: '子节点2',
        id: 2,
        children: [
          { name: '孙子节点', id: 3 },
        ],
      },
    ],
  },
];

export default class TreeDraggable extends Component {
  getEvents() {
    return {
      onClick: (event, treeId, treeNode) => { this.handleClick(event, treeId, treeNode); },
      onCheck: (event, treeId, treeNode) => { this.handleClick(event, treeId, treeNode); },
    };
  }
  handleClick(event, treeId, treeNode) {
    console.log(treeNode);
    console.log(this.refs.ztree.ztreeObj.getCheckedNodes());
  }
  handleCheck(event, treeId, treeNode) {
    console.log(treeNode);
  }
  log;
  className = 'dark';
  beforeDrag(treeId, treeNodes) {
    return false;
  }
  beforeRemove(treeId, treeNode) {
    className = (className === "dark" ? "":"dark");
    showLog("[ "+getTime()+" beforeRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
    return confirm("确认删除 节点 -- " + treeNode.name + " 吗？");
  }
  onRemove(e, treeId, treeNode) {
    showLog("[ "+getTime()+" onRemove ]&nbsp;&nbsp;&nbsp;&nbsp; " + treeNode.name);
  }
  beforeRename(treeId, treeNode, newName) {
    if (newName.length == 0) {
      alert("节点名称不能为空.");
      var zTree = $.fn.zTree.getZTreeObj("treeDemo");
      setTimeout(function(){zTree.editName(treeNode)}, 10);
      return false;
    }
    return true;
  }
  add(e) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
      isParent = e.isParent,
      nodes = zTree.getSelectedNodes(),
      treeNode = nodes[0];
    if (treeNode) {
      treeNode = zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, isParent:isParent, name:"new node" + (newCount++)});
    } else {
      treeNode = zTree.addNodes(null, {id:(100 + newCount), pId:0, isParent:isParent, name:"new node" + (newCount++)});
    }
    if (treeNode) {
      zTree.editName(treeNode[0]);
    } else {
      alert("叶子节点被锁定，无法增加子节点");
    }
  };
  edit() {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
      nodes = zTree.getSelectedNodes(),
      treeNode = nodes[0];
    if (nodes.length == 0) {
      alert("请先选择一个节点");
      return;
    }
    zTree.editName(treeNode);
  };
  remove(e) {
    var zTree = $.fn.zTree.getZTreeObj("treeDemo"),
      nodes = zTree.getSelectedNodes(),
      treeNode = nodes[0];
    if (nodes.length == 0) {
      alert("请先选择一个节点");
      return;
    }
    var callbackFlag = $("#callbackTrigger").attr("checked");
    zTree.removeNode(treeNode, callbackFlag);
  };
  render() {
    const zTreeProps = {
      check: {
        enable: false,
      },
      edit: {
        enable: true,
        draggable: false,
        showRemoveBtn: false,
        showRenameBtn: false,
      },
      view: {
        showIcon: false,
        showLine: false,
        expandSpeed: 0,
      },
      data: {
        keep: {
          parent: true,
          leaf: true,
        },
      },
      callback: {
        beforeDrag: this.beforeDrag,
        beforeRemove: this.beforeRemove,
        beforeRename: this.beforeRename,
        onRemove: this.onRemove,
      }
    };
    return (
      <div>
        <h3>ztree-for-react: Edited Tree</h3>
        <input value="增加父节点" type="button" onClick={this.add.bind(this, { isParent: true })} />
        <input value="增加叶子节点" type="button" />
        <input value="编辑名称" type="button" />
        <input value="删除节点" type="button" />
        <input value="清空子节点" type="button" />
        <ReactZtree nodes={nodes} events={this.getEvents()} {...zTreeProps} ref="ztree" />
      </div>
    );
  }
}

import React, { Component } from 'react';
import ReactZtree from './ztree-for-react';
import './awesomeStyle/awesome.less';

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

const check = { enable: true };

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
  render() {
    const zTreeProps = {
      check: {
        enable: true,
        radioType: 'level',
      },
      edit: {
        enable: true,
      },
    };
    return (
      <div>
        <h3>ztree-for-react: Edited Tree</h3>
        {/* ref：对组件真正实例的引用，即ReactDOM.render()返回的组件实例 */}
        {/* ref的值设为String的方式并不推荐，未来或不支持这种方式 */}
        <ReactZtree nodes={nodes} events={this.getEvents()} {...zTreeProps} ref="ztree" />
      </div>
    );
  }
}

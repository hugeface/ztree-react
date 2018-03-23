import React, { Component } from 'react';
import { connect } from 'dva';
import ReactZtree from './ztree-for-react';

const nodes = [
  { name: '父节点1',
    id: 0,
    children: [
      { name: '子节点1',
        id: 1 },
      { name: '子节点2',
        id: 2,
        children: [
          { name: '子节点3', id: 3 },
        ],
      },
    ],
  },
];
class ZTree extends Component {
  constructor(props) {
    super(props);
    this.getEvents = this.getEvents.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  getEvents() {
    return {
      onClick: (event, treeId, treeNode) => { this.handleClick(event,treeId,treeNode); },
      onCheck: (event, treeId, treeNode) => { this.handleClick(event,treeId,treeNode); },
    };
  }
  handleClick(event, treeId, treeNode) {
    console.log(treeNode);
    console.log(this.refs.ztree.ztreeObj.getCheckedNodes());
  }
  // handleCheck(event, treeId, treeNode) {
  //   console.log(treeNode);
  // }
  render() {
    return (
      <div>
        <ReactZtree nodes={nodes} events={this.getEvents()} />
      </div>
    );
  }
}

export default connect()(ZTree);

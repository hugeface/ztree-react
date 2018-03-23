import React, { Component } from 'react';
import 'ztree';

let ztreeIndex = 0;
export default class ReactZtree extends Component {
  constructor(props) {
    super(props);
    this.getTreeDom = this.getTreeDom.bind(this);
    this.getTreeObj = this.getTreeObj.bind(this);
    this.getTreeSetting = this.getTreeSetting.bind(this);
  }
  componentDidMount() {
    this.renderZtreeDom();
  }
  componentDidUpdate() {
    this.renderZtreeDom();
  }
  componentWillUnmount() {
    this.ztreeObj.destory();
  }
  getTreeObj() { return this.ztreeObj; }
  getTreeDom() {
    return $(this.refs.ztree);
  }
  getTreeSetting() {
    const props = this.props;
    return {
      treeId: props.treeId,
      treeObj: props.treeObj,
      async: props.async,
      callback: props.events,
      check: props.check,
      data: props.data,
      edit: props.edit,
      view: props.view,
    };
  }
  renderZtreeDom() {
    this.ztreeObj = $.fn.zTree.init(this.getTreeDom(), this.getTreeSetting(), this.props.nodes);
    return this.ztreeObj;
  }
  render() {
    return (
      <div className="ztree" ref="ztree" id={`ztree_${ztreeIndex++}`}>
      </div>
    );
  }
}

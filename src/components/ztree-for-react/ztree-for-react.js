import React, { Component } from 'react';
import 'ztree';

export default class ReactZtree extends Component {
  constructor(props) {
    super(props);
    this.treeId = props.setting.treeId;
  }
  componentDidMount() {
    this.renderZtreeDom();
  }
  componentDidUpdate() {
    this.renderZtreeDom();
  }
  componentWillUnmount() {
    this.ztreeObj.destroy(this.treeId);
  }
  getTreeObj() { return this.ztreeObj; }
  getTreeDom() {
    return $(this.refs.ztree);
  }
  getTreeSetting() {
    const props = this.props;
    return {
      treeId: props.setting.treeId,
      treeObj: props.setting.treeObj,
      async: props.async,
      callback: props.events,
      check: props.check,
      data: props.data,
      edit: props.edit,
      view: props.view,
    };
  }
  renderZtreeDom() {
    const ztreeObj = this.ztreeObj =
      $.fn.zTree.init(this.getTreeDom(), this.getTreeSetting(), this.props.nodes);
    return ztreeObj;
  }
  render() {
    return (
      <div id={this.treeId} className="ztree" ref="ztree" />
    );
  }
}

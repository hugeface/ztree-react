import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import Tree, { TreeNode } from 'rc-tree';
import './assets/index.less';
import './basic-tree.less';

class BasicTree extends React.Component {
  static propTypes = {
    keys: PropTypes.array,
  };
  static defaultProps = {
    keys: ['0-0-0-0'],
  };
  constructor(props) {
    super(props);
    const keys = props.keys;
    this.state = {
      defaultExpandedKeys: keys,
      defaultSelectedKeys: keys,
      defaultCheckedKeys: keys,
      switchIt: true,
    };
  }
  onExpand = (expandedKeys) => {
    console.log('onExpand', expandedKeys, arguments);
  };
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    this.selKey = info.node.props.eventKey;
  };
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };
  onEdit = () => {
    setTimeout(() => {
      console.log('current key: ', this.selKey);
    }, 0);
  };
  onDel = (e) => {
    if (!window.confirm('sure to delete?')) {
      return;
    }
    e.stopPropagation();
  };
  render() {
    const customLabel = (<span className="cus-label">
      <span>operations: </span>
      <span style={{ color: 'blue' }} onClick={this.onEdit}>Edit</span>&nbsp;
      <label onClick={(e) => e.stopPropagation()}><input type="checkbox" /> checked</label> &nbsp;
      <span style={{ color: 'red' }} onClick={this.onDel}>Delete</span>
    </span>);
    return (
      <div>
        <h3>rc-tree: Basic Tree 1</h3>
        <Tree
          className="myCls" showLine checkable defaultExpandAll
          defaultExpandedKeys={this.state.defaultExpandedKeys}
          onExpand={this.onExpand}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultCheckedKeys={this.state.defaultCheckedKeys}
          onSelect={this.onSelect} onCheck={this.onCheck}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title={customLabel} key="0-0-0">
              <TreeNode title="leaf" key="0-0-0-0" />
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="parent 1-1-0" key="0-0-1-0" disableCheckbox />
              <TreeNode title="parent 1-1-1" key="0-0-1-1" />
            </TreeNode>
            <TreeNode title="parent 1-2" key="0-0-2" disabled>
              <TreeNode title="parent 1-2-0" key="0-0-2-0" disabled />
              <TreeNode title="parent 1-2-1" key="0-0-2-1" />
            </TreeNode>
          </TreeNode>
        </Tree>

        <h3>rc-tree: Basic Tree 2</h3>
        <Tree
          className="myCls"
          showLine
          checkable
          selectable={false}
          defaultExpandAll
          onExpand={this.onExpand}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultCheckedKeys={this.state.defaultCheckedKeys}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="parent 1-1-0" key="0-0-1-0" disableCheckbox />
              <TreeNode title="parent 1-1-1" key="0-0-1-1" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </div>
    );
  }
}

export default connect()(BasicTree);

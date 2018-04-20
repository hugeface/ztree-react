import React, { Component } from 'react';
import { connect } from 'dva';
import IconButton from '../../../../../../common/iconButton/iconButton';
import OrgTree from '../orgTree/orgTree';
import styles from './deptMgt.less';

class DeptMgt extends Component {
  constructor(props) {
    super(props);
    this.addDept = this.addDept.bind(this);
  }
  closeDeptMgt = () => {
    this.props.dispatch({ type: 'memberPanel/closeDeptMgt' });
  };
  addDept = () => {
    this.refs.OrgTree.add({ isParent: true });
  };
  render() {
    const editableTree = { treeId: 'editableTree' };
    const iconStyle = { color: '#FE6653', fontSize: '.18rem' };
    const btnStyle = { marginLeft: '.05rem' };
    return (
      <div>
        <div className={styles.mask} />
        <div className={styles.panel}>
          <div className={styles.header}>
            <span className={styles.title}>管理部门</span>
            <div className={styles.tools}>
              <IconButton {...{ icon: 'iconfont icon-mtm-close', action: this.closeDeptMgt, iconStyle, btnStyle }} />
            </div>
          </div>
          <div className={styles.btns}>
            <div className={styles.button} onClick={this.addDept}>添加子部门</div>
            <div className={`${styles.button} ${styles.disable}`}>重命名</div>
            <div className={`${styles.button} ${styles.disable}`}>删除</div>
            <div className={styles.button}>调整顺序</div>
          </div>
          <div className={styles.tree_editor}>
            <OrgTree {...editableTree} ref="OrgTree" />
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(DeptMgt);

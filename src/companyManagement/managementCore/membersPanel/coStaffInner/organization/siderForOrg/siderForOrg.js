import React from 'react';
import { connect } from 'dva';
import OrgTree from '../orgTree/orgTree';
import styles from './siderForOrg.less';

const SiderForOrg = (props) => {
  const treeProps = { treeId: 'viewTree' };
  const openDeptMgt = () => {
    props.dispatch({ type: 'memberPanel/openDeptMgt' });
  };
  return (
    <div className={styles.sider}>
      <div className={styles.sider_h}><OrgTree {...treeProps} /></div>
      <div className={styles.dept_mgt}>
        <div className={styles.dept_btn} onClick={openDeptMgt}>
          <i className="iconfont icon-company icon_name" />
          <span>管理部门</span>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(SiderForOrg);

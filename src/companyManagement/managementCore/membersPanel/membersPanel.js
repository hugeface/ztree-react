import React from 'react';
import { connect } from 'dva';
import IconButton from '../../../common/iconButton/iconButton';
import DimissionInner from './dimissionInner/dimissionInner';
import CoStaffInner from './coStaffInner/coStaffInner';
import styles from './membersPanel.less';

const MembersPanel = (props) => {
  const inviteIconCss = { fontSize: '.2rem', marginRight: '.02rem' };
  const nameCss = { fontSize: '.14rem' };
  const getTabCss = (tabName) => {
    return props.memberPanel.currTab === tabName ? styles.activated : null;
  };
  const switchTab = (tabName) => {
    props.dispatch({
      type: 'memberPanel/switchTab',
      payload: { currTab: tabName },
    });
  };
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <span>成员管理</span>
        <div className={styles.invite_btn}>
          <IconButton {...{ icon: 'iconfont icon-yaoqingchengyuan', name: '邀请加入', action: null, iconStyle: inviteIconCss, nameStyle: nameCss }} />
        </div>
      </div>
      <div className={styles.tabs}>
        <span onClick={switchTab.bind(this, 'WORKING')} className={getTabCss('WORKING')}>企业成员</span>
        <span onClick={switchTab.bind(this, 'DIMISSION')} className={getTabCss('DIMISSION')}>已移除成员</span>
      </div>
      {
        props.memberPanel.currTab === 'WORKING' ? <CoStaffInner /> : <DimissionInner />
      }
    </div>
  );
};

function mapStateToProps({ dispatch, memberPanel }) {
  return { dispatch, memberPanel };
}

export default connect(mapStateToProps)(MembersPanel);

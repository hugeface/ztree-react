import React from 'react';
import { connect } from 'dva';
import styles from './coMgtContainer.less';
import CompanyPanel from './companyPanel/companyPanel';
import MembersPanel from './membersPanel/membersPanel';
import PositionPanel from './positionPanel/positionPanel';

const CoMgtContainer = (props) => {
  const getTabCss = (tabName) => {
    return props.currPage === tabName && styles.activated;
  };
  const switchTab = (tabName) => {
    props.dispatch({
      type: 'companyManagement/switchTab',
      payload: { currPage: tabName },
    });
    props.dispatch({ type: 'coStaffMgt/toDefaultState' });
  };
  return (
    <div className={styles.container}>
      <div className={styles.side_navi}>
        <div className={styles.header}>
          <i className="iconfont icon-company icon_name" />
          <span>企业名称Mock</span>
        </div>
        <div className={styles.tabs}>
          <span className={getTabCss('COMPANY')} onClick={switchTab.bind(this, 'COMPANY')}>企业概览</span>
          <span className={getTabCss('MEMBERS')} onClick={switchTab.bind(this, 'MEMBERS')}>成员管理</span>
          <span className={getTabCss('POSITIONS')} onClick={switchTab.bind(this, 'POSITIONS')}>职位管理</span>
        </div>
      </div>
      <div>
        {
          props.currPage === 'COMPANY' ? <CompanyPanel /> : (props.currPage === 'MEMBERS' ? <MembersPanel /> : <PositionPanel />)
        }
      </div>
    </div>
  );
};

function mapStateToProps({ companyManagement: { currPage }, dispatch }) {
  return { currPage, dispatch };
}

export default connect(mapStateToProps)(CoMgtContainer);

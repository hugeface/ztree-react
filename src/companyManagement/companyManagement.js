/** 备忘录UI容器 */
import React, { Component } from 'react';
import { connect } from 'dva';
import DContain from '../../routes/desktop/DContain';
import IconButton from '../common/iconButton/iconButton';
import CompanyManagementContainer from './managementCore/coMgtContainer';
import DeptMgt from './managementCore/membersPanel/coStaffInner/organization/deptMgt/deptMgt';
import PosEditor from './managementCore/membersPanel/coStaffInner/organization/posEditor/posEditor';
import styles from './companyManagement.less';

class CompanyManagement extends Component {
  closeInterface = () => {
    this.props.dispatch({
      type: 'desktop/save_isOpen',
      payload: { isOpenCompanyManagement: false },
    });
    this.props.dispatch({
      type: 'companyManagement/switchTab',
      payload: { currPage: 'COMPANY' },
    });
    this.props.dispatch({
      type: 'coStaffMgt/searchResultTrigger',
      payload: { showSearchResult: false },
    });
  }
  mimizeInterface = () => {
    this.props.dispatch({ type: 'companyManagement/minimize' });
  }
  render() {
    return (
      <div className={this.props.companyManagement.isMinimized ? styles.hideMemo : ''}>
        {
          this.props.desktop.isOpenCompanyManagement &&
          <DContain dragId="companyManagementApp" disabled={false} zIndexFristCount={this.props.desktop.zIndexFristCount}>
            <div className={styles.shadow}>
              <div className={`header ${styles.drag_area}`}>
                <span className={styles.title}>新企业后台管理</span>
                <div className={styles.tools}>
                  <IconButton {...{ icon: 'iconfont icon-mtm-minmize', action: this.mimizeInterface, iconStyle: { color: '#8298FF', fontSize: '.18rem' } }} />
                  <IconButton {...{ icon: 'iconfont icon-mtm-close', action: this.closeInterface, iconStyle: { color: '#FE6653', fontSize: '.18rem' }, btnStyle: { marginLeft: '.05rem' } }} />
                </div>
              </div>
              <CompanyManagementContainer />
              { this.props.memberPanel.isDeptMgtOpen && <DeptMgt /> }
              { this.props.memberPanel.isPosEditorOpen && <PosEditor /> }
            </div>
          </DContain>
        }
      </div>
    );
  }
}

function mapStateToProps({ desktop, companyManagement, dispatch, memberPanel }) {
  return { desktop, companyManagement, dispatch, memberPanel };
}

export default connect(mapStateToProps)(CompanyManagement);

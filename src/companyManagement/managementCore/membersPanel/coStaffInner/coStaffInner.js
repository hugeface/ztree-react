import React from 'react';
import { connect } from 'dva';
import IconButton from '../../../../common/iconButton/iconButton';
import SearchResult from './searchResult/searchResult';
import Organization from './organization/organization';
import styles from './coStaffInner.less';

const CoStaffInner = (props) => {
  const searchIconCss = { fontSize: '.32rem', cursor: 'default', marginLeft: '-.15rem' };
  const inputChangeHandler = () => {
    const input = document.querySelector('input[name=staffSearch]');
    if (input && Boolean(input.value) !== props.coStaffMgt.showSearchResult) {
      props.dispatch({
        type: 'coStaffMgt/searchResultTrigger',
        payload: { showSearchResult: Boolean(input.value) },
      });
    }
  };
  return (
    <div>
      <div className={styles.search}>
        <div>
          <IconButton {...{ icon: 'iconfont icon-mtm-search', action: null, iconStyle: searchIconCss }} />
        </div>
        <input name="staffSearch" className={styles.input} onChange={inputChangeHandler} />
      </div>
      {
        props.coStaffMgt.showSearchResult ? <SearchResult /> : <Organization />
      }
    </div>
  );
};

function mapStateToProps({ dispatch, coStaffMgt }) {
  return { dispatch, coStaffMgt };
}

export default connect(mapStateToProps)(CoStaffInner);

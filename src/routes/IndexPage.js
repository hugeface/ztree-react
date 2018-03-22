import React from 'react';
import { connect } from 'dva';
import { ToastContainer } from 'react-toastify';
import Memo from '../memo/memo';
import styles from './IndexPage.less';

function IndexPage() {
  return (
    <div>
      <div className={styles.bg} />
      <div className={styles.content}>
        <Memo />
        <ToastContainer autoClose={5000} />
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(IndexPage);

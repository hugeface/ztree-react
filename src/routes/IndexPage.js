import React from 'react';
import { connect } from 'dva';
import ReactTreeView from '../components/react-treeview';

function IndexPage() {
  return (
    <div>
      <ReactTreeView />
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(IndexPage);

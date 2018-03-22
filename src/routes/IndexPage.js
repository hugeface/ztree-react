import React from 'react';
import { connect } from 'dva';
import UnControlledReactTreeView from '../components/react-treeview/react-treeview-uncontrolled';
import ControlledReactTreeView from '../components/react-treeview/react-treeview-controlled';

function IndexPage() {
  return (
    <div>
      <UnControlledReactTreeView />
      <hr />
      <ControlledReactTreeView />
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(IndexPage);

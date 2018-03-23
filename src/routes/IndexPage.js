import React from 'react';
import { connect } from 'dva';
import UnControlledReactTreeView from '../components/react-treeview/react-treeview-uncontrolled';
import ControlledReactTreeView from '../components/react-treeview/react-treeview-controlled';
import DraggableTree from '../components/rc-tree/draggable-tree';
import BasicTree from '../components/rc-tree/basic-tree';

function IndexPage() {
  return (
    <div>
      <UnControlledReactTreeView />
      <hr />
      <ControlledReactTreeView />
      <hr />
      <DraggableTree />
      <hr />
      <BasicTree />
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(IndexPage);

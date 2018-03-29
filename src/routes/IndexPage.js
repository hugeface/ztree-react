import React from 'react';
import { connect } from 'dva';
import UnControlledReactTreeView from '../components/react-treeview/react-treeview-uncontrolled';
import ControlledReactTreeView from '../components/react-treeview/react-treeview-controlled';
import DraggableTree from '../components/rc-tree/draggable-tree';
import BasicTree from '../components/rc-tree/basic-tree';
import ZTree from '../components/ztree-for-react/ztree';
import ZTreeCustomized from '../components/ztree-for-react/ztree-customized';
import styles from './IndexPage.less';

function IndexPage() {
  return (
    <div className={styles.container}>
      {/*<UnControlledReactTreeView />*/}
      {/*<hr />*/}
      {/*<ControlledReactTreeView />*/}
      {/*<hr />*/}
      {/*<DraggableTree />*/}
      {/*<hr />*/}
      {/*<BasicTree />*/}
      {/*<hr />*/}
      {/*<ZTree />*/}
      {/*<hr />*/}
      <ZTreeCustomized />
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(IndexPage);

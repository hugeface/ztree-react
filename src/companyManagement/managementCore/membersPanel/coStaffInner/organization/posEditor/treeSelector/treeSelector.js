import React, { Component } from 'react';
import { connect } from 'dva';
import { Popover } from 'antd';
import { generateUUID } from '../../../../../../../../utils/uuid';
import OrgTree from '../../orgTree/orgTree';
import styles from './treeSelector.less';

class TreeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enableTreeSelect: false,
    };
    this.componentId = generateUUID();
    this.openTreeSelect = this.openTreeSelect.bind(this);
    this.handleTreeClick = this.handleTreeClick.bind(this);
  }
  openTreeSelect = () => {
    this.setState({ enableTreeSelect: !this.state.enableTreeSelect });
  };
  handleTreeClick = (str) => {
    const selectItemString = document.getElementById(`${this.componentId}_span`);
    const trigger = document.getElementById(`${this.componentId}_trigger`);
    console.log('Select Item: ', selectItemString);
    selectItemString.innerText = str;
    trigger.click();
  };
  render() {
    const OrgTreeProps = { handleClick: this.handleTreeClick };
    const content = (<OrgTree {...OrgTreeProps} />);
    return (
      <div id={this.componentId}>
        <Popover content={content} trigger="click" placement="bottomLeft">
          <div id={`${this.componentId}_trigger`} className={styles.sel_cnt}>
            <span id={`${this.componentId}_span`} className={styles.info_input}>123</span>
          </div>
        </Popover>
      </div>
    );
  }
}

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(TreeSelector);

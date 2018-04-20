import React, { Component } from 'react';
import { connect } from 'dva';
import IconButton from '../../../../../../common/iconButton/iconButton';
import Avatar from '../../../../../../common/avatar/avatar';
import TreeSelector from './treeSelector/treeSelector';
import styles from './posEditor.less';

class PosEditor extends Component {
  constructor(props) {
    super(props);
  }
  closePosEditor = () => {
    this.props.dispatch({ type: 'memberPanel/closePosEditor' });
  };
  addPosition = () => {
    this.props.posEditor.positions.push({ department: '123', position: '123' });
    this.props.dispatch({
      type: 'posEditor/addPosition',
      payload: { positions: this.props.posEditor.positions },
    });
  };
  render() {
    const iconStyle = { color: '#FE6653', fontSize: '.18rem' };
    const btnStyle = { marginLeft: '.05rem' };
    return (
      <div>
        <div className={styles.mask} />
        <div className={styles.panel}>
          <div className={styles.header}>
            <span className={styles.title}>编辑成员信息</span>
            <div className={styles.tools}>
              <IconButton {...{ icon: 'iconfont icon-mtm-close', action: this.closePosEditor, iconStyle, btnStyle }} />
            </div>
          </div>
          <div className={styles.basic_info}>
            <div className={styles.info_row_1}>
              <Avatar />
              <span className={styles.name}>Hello</span>
            </div>
            <div className={styles.info_row_2}>
              <span>手机</span><span className={styles.phone}>13488763827</span>
            </div>
          </div>
          <div id="positions" className={styles.positions}>
            {
              this.props.posEditor.positions.map((item, index) => {
                return (
                  <div className={styles.position} key={index}>
                    <div className={styles.pos_dept}>
                      <span className={styles.dept_text}>部门</span>
                      <div className={styles.dept_selector}>
                        <TreeSelector />
                      </div>
                    </div>
                    <div className={styles.pos_dept}>
                      <span className={styles.dept_text}>职位</span>
                      <div className={styles.dept_selector}>
                        <TreeSelector />
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
          <p className={styles.more_pos}>一人多职？<span onClick={this.addPosition}>添加职位</span></p>
          <div className={styles.confirm}>确定</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ dispatch, posEditor }) {
  return { dispatch, posEditor };
}

export default connect(mapStateToProps)(PosEditor);

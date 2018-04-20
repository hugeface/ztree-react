import React from 'react';
import { connect } from 'dva';
import IconButton from '../../../common/iconButton/iconButton';
import styles from './positionPanel.less';

const PositionPanel = () => {
  const addIconCss = { fontSize: '.14rem', marginRight: '.05rem' };
  const nameCss = { fontSize: '.14rem' };
  return (
    <div className={styles.content}>
      <div className={styles.header}>职位管理</div>
      <div className={styles.add_btn}>
        <IconButton {...{ icon: 'iconfont icon-xinjiantianjia', name: '增加职位', action: null, iconStyle: addIconCss, nameStyle: nameCss }} />
      </div>
      <div className={styles.position_list}>
        <div className={styles.list_header}>
          <ul>
            <li><span>职位</span></li>
            <li><span>人数</span></li>
            <li><span>操作</span></li>
          </ul>
        </div>
        <div className={styles.list_body}>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>13</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span className={styles.position_name}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span className={styles.position_name}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span className={styles.position_name}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span className={styles.position_name}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>1</span></li>
            <li><p><span>编辑</span><span style={{ marginLeft: '.15rem' }}>删除</span></p></li>
          </ul></li></ul>
        </div>
      </div>
    </div>
  );
};

export default connect()(PositionPanel);

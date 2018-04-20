import React from 'react';
import { connect } from 'dva';
import styles from './dimissionInner.less';

const DimissionInner = () => {
  return (
    <div>
      <div className={styles.description}>被移除的用户将不能访问企业 * 点击"启用"可以让该用户再次加入到企业 *</div>
      <div className={styles.member_list}>
        <div className={styles.list_header}>
          <ul>
            <li><span>姓名</span></li>
            <li><span>手机</span></li>
            <li><span>移除时间</span></li>
            <li><span>操作</span></li>
          </ul>
        </div>
        <div className={styles.list_body}>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>131****1111</span></li>
            <li><span>2017.12.28 02:23</span></li>
            <li><p><span>启用</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span className={styles.member_name}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
            <li><span>177****7777</span></li>
            <li><span>2017.12.28 02:23</span></li>
            <li><p><span>启用</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span>CEO</span></li>
            <li><span>131****1111</span></li>
            <li><span>2017.12.28 02:23</span></li>
            <li><p><span>启用</span></p></li>
          </ul></li></ul>
          <ul><li><ul>
            <li><span className={styles.member_name}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
            <li><span>177****7777</span></li>
            <li><span>2017.12.28 02:23</span></li>
            <li><p><span>启用</span></p></li>
          </ul></li></ul>
        </div>
      </div>
    </div>
  );
};

export default connect()(DimissionInner);

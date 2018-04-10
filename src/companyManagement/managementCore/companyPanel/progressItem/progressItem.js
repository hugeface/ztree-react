import React from 'react';
import { connect } from 'dva';
import { Progress } from 'antd';
import styles from './progressItem.less';

const ProgressItem = (props) => {
  return (
    <div className={styles.progress_item}>
      <div className={styles.progress}>
        <Progress type="circle" percent={75} gapPosition="right" width={'1rem'} showInfo={false} strokeWidth={5} />
        <div className={styles.info_value}>{props.info}</div>
        <div className={styles.info_name}>{props.infoName}</div>
      </div>
      <div className={styles.progress_info}>
        <div style={{ marginBottom: '.1rem' }}><div className={styles.total} /><span>{props.text1}</span></div>
        <div><div className={styles.expended} /><span>{props.text2}</span></div>
      </div>
      {
        props.showOtherInfo &&
        <div className={styles.moreInfo}>
          <p>账号类型：协作版</p>
          <p>到期时间：2018.12.31</p>
        </div>
      }
    </div>
  );
};

export default connect()(ProgressItem);

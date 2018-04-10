import React from 'react';
import { connect } from 'dva';
import IconButton from '../../../common/iconButton/iconButton';
import ProgressItem from './progressItem/progressItem';
import styles from './companyPanel.less';

const CompanyPanel = () => {
  const editIconCss = { fontSize: '.14rem' };
  const nameCss = { fontSize: '.12rem' };
  return (
    <div className={styles.content}>
      <div className={styles.header}>企业概览</div>
      <div className={styles.basic_info}>
        <div className={styles.info_content}>
          <p>企业名称：<span>上海派斡信息科技有限公司</span></p>
          <p>企业简称：<span>上海派斡信息</span></p>
        </div>
        <div className={styles.edit_btn}>
          <IconButton {...{ icon: 'iconfont icon-xiugai', name: '修改企业信息', action: null, iconStyle: editIconCss, nameStyle: nameCss }} />
        </div>
      </div>
      <p style={{ marginBottom: '.05rem' }}>您所在的企业正在使用meeTeam付费版</p>
      <div className={styles.panel}>
        <ProgressItem {...{ info: '80', infoName: '剩余可用', text1: '账号总数：200', text2: '已使用账号：120', showOtherInfo: true }} />
        <ProgressItem {...{ info: '1.2G', infoName: '剩余存储空间', text1: '总存储空间：5G', text2: '已使用空间：3.8G' }} />
      </div>
      <div className={styles.panel}>
        <div className={styles.member_info}>
          <p style={{ fontSize: '.36rem', color: '#478EEE', marginBottom: 0, marginTop: '.3rem' }}>38</p>
          <p style={{ fontSize: '.14rem' }}>成员数量</p>
        </div>
        <div className={styles.member_info}>
          <p style={{ fontSize: '.36rem', color: '#478EEE', marginBottom: 0, marginTop: '.3rem' }}>4</p>
          <p style={{ fontSize: '.14rem' }}>管理员数量</p>
        </div>
      </div>
      <p className={styles.built_time}>创建时间： 2017.09.21</p>
    </div>
  );
};

export default connect()(CompanyPanel);

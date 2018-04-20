import React from 'react';
import { connect } from 'dva';
import SiderForOrg from './siderForOrg/siderForOrg';
import styles from './organization.less';

const Organization = (props) => {
  const openEditPanel = () => {
    props.dispatch({ type: 'memberPanel/openPosEditor' });
  };
  return (
    <div>
      <p className={styles.description}>上海派斡信息技术科技(32人)</p>
      <div className={styles.container}>
        <SiderForOrg />
        <div className={styles.member_list}>
          <div className={styles.list_header}>
            <ul>
              <li><span>姓名</span></li>
              <li><span>部门</span></li>
              <li><span>职位</span></li>
              <li><span>操作</span></li>
            </ul>
          </div>
          <div className={styles.list_body}>
            <ul><li>
              <ul>
                <li><span className={styles.limit_length}>EE</span></li>
                <li><span className={styles.limit_length}>前端部门</span></li>
                <li><span className={styles.limit_length}>产品经理</span></li>
                <li><p><span onClick={openEditPanel}>编辑</span><span>更多</span></p></li>
              </ul>
              <ul>
                <li><span className={styles.limit_length}></span></li>
                <li><span className={styles.limit_length}>前端部门</span></li>
                <li><span className={styles.limit_length}>产品经理</span></li>
                <li><p><span></span></p></li>
              </ul>
            </li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>CCDDFF</span></li>
              <li><span className={styles.limit_length}>部门名称非常长非常长非常长非常长非常长</span></li>
              <li><span className={styles.limit_length}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
              <li><p><span>编辑</span><span>更多</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>ABCDE</span></li>
              <li><span className={styles.limit_length}>后端开发部</span></li>
              <li><span className={styles.limit_length}>后端开发工程师</span></li>
              <li><p><span>编辑</span><span>更多</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>名字非常长非常长非常长非常长非常长非常长非常长</span></li>
              <li><span className={styles.limit_length}>前端部门</span></li>
              <li><span className={styles.limit_length}>前端开发工程师</span></li>
              <li><p><span>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>EE</span></li>
              <li><span className={styles.limit_length}>前端部门</span></li>
              <li><span className={styles.limit_length}>产品经理</span></li>
              <li><p><span className={styles.limit_length}>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>CCDDFF</span></li>
              <li><span className={styles.limit_length}>部门名称非常长非常长非常长非常长非常长</span></li>
              <li><span className={styles.limit_length}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
              <li><p><span>编辑</span><span>更多</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>ABCDE</span></li>
              <li><span className={styles.limit_length}>后端开发部</span></li>
              <li><span className={styles.limit_length}>后端开发工程师</span></li>
              <li><p><span>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>名字非常长非常长非常长非常长非常长非常长非常长</span></li>
              <li><span className={styles.limit_length}>前端部门</span></li>
              <li><span className={styles.limit_length}>前端开发工程师</span></li>
              <li><p><span>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>EE</span></li>
              <li><span className={styles.limit_length}>前端部门</span></li>
              <li><span className={styles.limit_length}>产品经理</span></li>
              <li><p><span className={styles.limit_length}>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>CCDDFF</span></li>
              <li><span className={styles.limit_length}>部门名称非常长非常长非常长非常长非常长</span></li>
              <li><span className={styles.limit_length}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
              <li><p><span>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>ABCDE</span></li>
              <li><span className={styles.limit_length}>后端开发部</span></li>
              <li><span className={styles.limit_length}>后端开发工程师</span></li>
              <li><p><span>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>名字非常长非常长非常长非常长非常长非常长非常长</span></li>
              <li><span className={styles.limit_length}>前端部门</span></li>
              <li><span className={styles.limit_length}>前端开发工程师</span></li>
              <li><p><span>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>EE</span></li>
              <li><span className={styles.limit_length}>前端部门</span></li>
              <li><span className={styles.limit_length}>产品经理</span></li>
              <li><p><span className={styles.limit_length}>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>CCDDFF</span></li>
              <li><span className={styles.limit_length}>部门名称非常长非常长非常长非常长非常长</span></li>
              <li><span className={styles.limit_length}>职位名称非常长非常长非常长非常长非常长非常长非常长</span></li>
              <li><p><span>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>ABCDE</span></li>
              <li><span className={styles.limit_length}>后端开发部</span></li>
              <li><span className={styles.limit_length}>后端开发工程师</span></li>
              <li><p><span>编辑</span></p></li>
            </ul></li></ul>
            <ul><li><ul>
              <li><span className={styles.limit_length}>名字非常长非常长非常长非常长非常长非常长非常长</span></li>
              <li><span className={styles.limit_length}>前端部门</span></li>
              <li><span className={styles.limit_length}>前端开发工程师</span></li>
              <li><p><span>编辑</span></p></li>
            </ul></li></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(Organization);

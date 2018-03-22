import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      123
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps({ dispatch }) {
  return { dispatch };
}

export default connect(mapStateToProps)(IndexPage);

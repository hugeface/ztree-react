import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';


function RouterConfig({ history, app }) {
  // 首页
  const Index = dynamic({
    app,
    models: () => [
      // import('./models/example'),
    ],
    component: () => import('./routes/IndexPage'),
  });

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

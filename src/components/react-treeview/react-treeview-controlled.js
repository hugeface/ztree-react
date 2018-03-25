import React, { Component } from 'react';
import TreeView from 'react-treeview';
import styles from './react-treeview.less';

// This example data format is totally arbitrary. No data massaging is
// required and you use regular js in `render` to iterate through and
// construct your nodes.
const dataSource = [
  ['Apple', 'Orange'],
  ['Facebook', 'Google'],
  ['Celery', 'Cheeseburger'],
];

// A controlled TreeView, akin to React's controlled inputs
// (http://facebook.github.io/react/docs/forms.html#controlled-components), has
// many benefits. Among others, you can expand/collapse everything (i.e. easily
// trigger those somewhere else).
class ControlledReactTreeView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      collapsedBookkeeping: dataSource.map(() => false),
    };
    this.handleClick = this.handleClick.bind(this);
    this.collapseAll = this.collapseAll.bind(this);
  }

  handleClick(i) {
    const [...collapsedBookkeeping] = this.state.collapsedBookkeeping;
    collapsedBookkeeping[i] = !collapsedBookkeeping[i];
    this.setState({ collapsedBookkeeping });
  }

  collapseAll() {
    this.setState({
      collapsedBookkeeping: this.state.collapsedBookkeeping.map(() => true),
    });
  }

  render() {
    const collapsedBookkeeping = this.state.collapsedBookkeeping;
    return (
      <div>
        <h3>react-treeview: Controlled Tree</h3>
        <button onClick={this.collapseAll}>Collapse all</button>
        {dataSource.map((node, i) => {
          // Let's make it so that the tree also toggles when we click the
          // label. Controlled components make this effortless.
          const label =
            <span className="node" onClick={this.handleClick.bind(null, i)}>Type {i}</span>;
          return (
            <TreeView
              key={i}
              nodeLabel={label}
              collapsed={collapsedBookkeeping[i]}
              onClick={this.handleClick.bind(null, i)}
            >
              {node.map(entry => <div className="info" key={entry}>{entry}</div>)}
            </TreeView>
          );
        })}
      </div>
    );
  }
}

export default ControlledReactTreeView;

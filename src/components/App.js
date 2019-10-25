import React from 'react';
import DataForm from './DataForm';
import DataTable from './DataTable';
import Header from './Header';

export default class App extends React.Component {
  state = {
    key: 1,
    dataSource: []
  };

  handleAddData = data => {
    data.key = this.state.key;
    this.setState(prevState => {
      return {
        key: prevState.key + 1,
        dataSource: prevState.dataSource.concat([data])
      };
    });
  };

  handleDeleteData = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div>
        <Header />
        <DataForm handleAddData={this.handleAddData} />
        <DataTable dataSource={this.state.dataSource} />
      </div>
    );
  }
}

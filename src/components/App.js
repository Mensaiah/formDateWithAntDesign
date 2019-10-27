import React from 'react';
import DataTable from './DataTable';
import Header from './Header';
import DataForm from './DataForm';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DataForm />
        <DataTable />
      </div>
    );
  }
}

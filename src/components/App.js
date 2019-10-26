import React from 'react';
import DataTable from './DataTable';
import Header from './Header';
import DataformPage from './DataformPage';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <DataformPage />
        <DataTable />
      </div>
    );
  }
}

import React from 'react';
import DataForm from './DataForm';
import { connect } from 'react-redux';
import { addData } from '../actions/data';

const DataformPage = props => (
  <DataForm
    onSubmit={data => {
      props.dispatch(addData(data));
    }}
  />
);

export default connect()(DataformPage);

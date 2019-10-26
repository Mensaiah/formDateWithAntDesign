import React from 'react';
import { Table, Tag } from 'antd';
import { connect } from 'react-redux';
const DataTable = props => {
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstname',
      key: 'firstname'
    },
    {
      title: 'Last Name',
      dataIndex: 'lastname',
      key: 'lastname'
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Birthday',
      dataIndex: 'birthday',
      key: 'birthday'
    },
    {
      title: 'Hobbies',
      dataIndex: 'hobbies',
      key: 'hobbies',
      render: hobbies => (
        <span>
          {hobbies.split(',').map(hobby => {
            let color = hobby.length < 5 ? 'geekblue' : 'green';
            return (
              <Tag color={color} key={hobby}>
                {hobby.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    }
  ];

  return (
    <div className="table">
      <Table dataSource={props.data} columns={columns} bordered={true} />
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.data
});
export default connect(
  mapStateToProps,
  {}
)(DataTable);

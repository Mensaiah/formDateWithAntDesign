import React from 'react';
import { Table, Tag } from 'antd';
import { useSelector } from 'react-redux';
const DataTable = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id'
    },
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
      <Table
        dataSource={useSelector(state => state.data)}
        columns={columns}
        bordered={true}
      />
    </div>
  );
};

export default DataTable;

import React, { useState } from 'react';
import { Input, DatePicker, Button, Form, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import { addData } from '../actions/data';
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const UserForm = props => {
  const dispatch = useDispatch();
  const handleAddData = e => {
    e.preventDefault();

    props.form.validateFields((err, values) => {
      if (!err) {
        const data = {
          firstname: values.firstName,
          lastname: values.lastName,
          age: values.age,
          birthday: values.dateOfBirth.format('LL'),
          hobbies: values.hobbies
        };

        setKey(key + 1);

        data.key = key;

        dispatch(addData(data));

        props.form.setFieldsValue({
          firstName: '',
          lastName: '',
          age: '',
          hobbies: '',
          dateOfBirth: null
        });
        const alertDiv = (
          <Alert message="Data Added SuccessFully" type="success" />
        );
        setAlert(alertDiv);
        setInterval(() => {
          setAlert(undefined);
        }, 3000);
      }
    });
  };
  const [key, setKey] = useState(1);
  const [alert, setAlert] = useState(undefined);

  const { getFieldDecorator, getFieldsError } = props.form;
  return (
    <div className="container">
      <h1>Please Fill the form</h1>
      {alert}
      <Form layout="horizontal" onSubmit={handleAddData}>
        <Form.Item>
          First Name:
          {getFieldDecorator('firstName', {
            rules: [
              {
                required: true,
                message: 'Please input your First Name'
              }
            ]
          })(
            <Input
              placeholder="First Name"
              label="First Name"
              name="firstName"
            />
          )}
        </Form.Item>
        <Form.Item>
          Last Name:
          {getFieldDecorator('lastName', {
            rules: [
              {
                required: true,
                message: 'Please input your Last Name'
              }
            ]
          })(
            <Input placeholder="Last Name" label="Last Name" name="lastName" />
          )}
        </Form.Item>
        Birthday:
        {getFieldDecorator('dateOfBirth', {
          rules: [
            {
              required: true,
              message: 'Please input your Birthday'
            }
          ]
        })(
          <DatePicker
            name="dateOfBirth"
            label="Data Of Birth"
            format="DD/MM/YYYY"
          />
        )}
        <Form.Item>
          Age:
          {getFieldDecorator('age', {
            rules: [
              {
                required: true,
                message: 'Please input your Age'
              }
            ]
          })(<Input type="number" placeholder="Age" label="Age" name="age" />)}
        </Form.Item>
        <Form.Item>
          Hobbies:{' '}
          {getFieldDecorator('hobbies', {
            rules: [
              {
                required: true,
                message: 'Please input your hobbies'
              }
            ]
          })(
            <Input
              placeholder="Hobbies e.g Dancing, Swimming"
              label="Hobbies"
              name="hobbies"
            />
          )}
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          disabled={hasErrors(getFieldsError())}
          block
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

const DataForm = Form.create({ name: 'dataform' })(UserForm);

export default DataForm;

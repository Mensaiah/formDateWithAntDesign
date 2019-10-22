import React from "react";
import { Input, DatePicker, Button, Form, Alert } from "antd";
import moment from "moment";
import ReactDOM from "react-dom";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class UserForm extends React.Component {
  state = {
    alert: undefined
  };
  handleAddData = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        const data = {
          firstname: values.firstName,
          lastname: values.lastName,
          age: values.age,
          birthday: values.dateOfBirth.format("LL"),
          hobbies: [values.hobbies]
        };

        this.props.handleAddData(data);
        this.props.form.setFieldsValue({
          firstName: "",
          lastName: "",
          age: "",
          hobbies: "",
          dateOfBirth: ""
        });
        const alert = (
          <Alert message="Data Added SuccessFully" type="success" />
        );
        this.setState(() => ({ alert: alert }));
        setInterval(() => {
          this.setState(() => ({ alert: undefined }));
        }, 3000);
      }
    });
  };
  render() {
    const { getFieldDecorator, getFieldsError } = this.props.form;

    return (
      <div className="container">
        {alert}
        <h1>Please Fill the form</h1>
        {this.state.alert}

        <Form layout="horizontal" onSubmit={this.handleAddData} {...this.props}>
          <Form.Item>
            First Name:
            {getFieldDecorator("firstName", {
              rules: [
                {
                  required: true,
                  message: "Please input your First Name"
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
            {getFieldDecorator("lastName", {
              rules: [
                {
                  required: true,
                  message: "Please input your Last Name"
                }
              ]
            })(
              <Input
                placeholder="Last Name"
                label="Last Name"
                name="lastName"
              />
            )}
          </Form.Item>
          Birthday:
          {getFieldDecorator("dateOfBirth", {
            rules: [
              {
                required: true,
                message: "Please input your Birthday"
              }
            ]
          })(
            <DatePicker
              placeholder="Enter Date Of Birth"
              name="dateOfBirth"
              label="Data Of Birth"
              format="DD/MM/YYYY"
            />
          )}
          <Form.Item>
            Age:
            {getFieldDecorator("age", {
              rules: [
                {
                  required: true,
                  message: "Please input your Age"
                }
              ]
            })(
              <Input type="number" placeholder="Age" label="Age" name="age" />
            )}
          </Form.Item>
          <Form.Item>
            Hobbies:{" "}
            {getFieldDecorator("hobbies", {
              rules: [
                {
                  required: true,
                  message: "Please input your hobbies"
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
  }
}

const DataForm = Form.create({ name: "dataform" })(UserForm);

export default DataForm;

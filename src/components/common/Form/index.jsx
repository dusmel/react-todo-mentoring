import React from 'react';
import { Form, Input as SemanticInput, Button } from 'semantic-ui-react';
import { Field } from 'formik';

const capitalize = s => s.substr(0, 1).toUpperCase() + s.substr(1).toLowerCase();

const MyInput = ({ field, form: { errors, touched }, ...props }) => {
  const { name } = field;
  return (
    <Form.Input
      {...field}
      {...props}
      error={touched[name] && errors[name]}
      placeholder={capitalize(name)}
    />
  );
};

const MyInputIconed = ({ field, form: { errors, touched }, ...props }) => {
  const { name } = field;
  return (
    <Form.Field
      control={SemanticInput}
      {...field}
      {...props}
      iconPosition="left"
      error={touched[name] && errors[name]}
      placeholder={capitalize(name)}
    />
  );
};

const MyCheckbox = ({ field, form: { errors, touched }, ...props }) => {
  const { value, ...checkedField } = field;
  return <Form.Checkbox {...checkedField} {...props} defaultChecked={field.value} />;
};

const MySelect = ({ field, form: { errors, touched }, ...props }) => {
  const { value, ...checkedField } = field;
  return <Form.Select {...checkedField} {...props} defaultValue={field.value} />;
};

const MyInputFile = ({ field, form: { errors, touched, setFieldValue }, ...props }) => {
  const handleUpload = ({ currentTarget }) =>
    setFieldValue(currentTarget.name, currentTarget.files[0]);

  const { name, value } = field;
  return (
    <Form.Field error={touched[name] && errors[name]}>
      <label
        htmlFor={name}
        className="ui icon button d-inline-block"
        style={{ display: 'inline-block' }}
      >
        <i className="arrow alternate circle up outline icon" />
        Add File
      </label>
      <input
        type="file"
        {...props}
        name={name}
        defaultValue={value}
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
    </Form.Field>
  );
};

const Input = ({ ...props }) => <Field {...props} component={MyInput} />;

const InputIconed = ({ ...props }) => <Field {...props} component={MyInputIconed} />;

const Checkbox = ({ ...props }) => <Field {...props} component={MyCheckbox} />;

const Select = ({ ...props }) => <Field {...props} component={MySelect} />;

const InputFile = ({ ...props }) => <Field {...props} component={MyInputFile} />;

export { Form, Input, InputIconed, Checkbox, Select, Button, InputFile };

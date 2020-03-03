import React from 'react';
import { useSelector } from 'react-redux';
import { Button as AntButton } from 'antd';
import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import cogoToast from 'utils/notification';
import { Form, Button, Input, InputIconed } from 'components/common/Form';
import exampleFormValidations from 'helpers/form/validations/example';
import exampleFormValues from 'helpers/form/defaultValue/example';
import './index.scss';

const Example = ({ handleSubmit, isSubmitting }) => {
  const name = useSelector(({ example: { name } }) => name);

  return (
    <div className="example">
      <Form onSubmit={handleSubmit} loading={isSubmitting} className="w-50 mx-auto">
        <div className="display-4">Example Hello {name.currentName}</div>
        <Input name="email" label="Email" />
        <InputIconed name="password" label="Password" type="password" icon="lock" />
        <Input name="test" label="Testy" />
        <Button size="small" loading={isSubmitting} type="submit" content="Click Me" primary />
        <AntButton type="primary" loading={isSubmitting} htmlType="submit">
          OR ME
        </AntButton>
      </Form>
    </div>
  );
};

Example.defaultProps = {
  isSubmitting: false,
};

Example.propTypes = {
  isSubmitting: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues(defaultValues) {
    return exampleFormValues(defaultValues);
  },
  validationSchema: exampleFormValidations,
  handleSubmit(values, { setErrors, setSubmitting }) {
    setSubmitting(true);
    setTimeout(() => {
      if (values.email === 'hadadus@gmail.com') {
        cogoToast('Email already exists', 'warn');
        setErrors({ email: 'Email already exists' });
        setSubmitting(false);
      } else {
        setSubmitting(false);
        cogoToast('Email saved');
      }
    }, 2000);
  },
})(Example);

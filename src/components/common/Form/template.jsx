import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { Form, Button, Input, InputIconed, Checkbox, Select, InputFile } from '.';
import './form.css';

const gender = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 's', text: 'Female', value: 'female' },
];

function App({ values, handleChange, handleSubmit, errors, touched, isSubmitting }) {
  console.table(values);
  return (
    <div
      className="form-container"
      style={{
        width: '50%',
        margin: '5rem auto',
      }}
    >
      <Form onSubmit={handleSubmit}>
        <Input name="email" label="Email" />
        <InputIconed name="password" label="Password" type="password" icon="lock" />
        <Input name="test" label="Testy" />
        <Checkbox label="I agree to the Terms and Conditions" name="confirm" />
        <Select name="sex" label="Gender" options={gender} />

        <InputFile name="image" id="image" />
        <Button type="submit" loading={isSubmitting}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

// withFormik function takes basically an object with 3 properties { mapPropsToValues(), validationSchema: , handleSubmit() }
const Formik = withFormik({
  mapPropsToValues({ email, password, confirm, sex, test, image }) {
    return {
      email: email || '',
      password: password || '',
      confirm: confirm || true,
      sex: sex || 'male',
      test: test || '',
      image: image || '',
    };
  },
  validationSchema: yup.object().shape({
    email: yup
      .string()
      .required()
      .min(5)
      .email(),
    password: yup
      .string()
      .min(5)
      .required(),
    test: yup
      .string()
      .min(5)
      .required(),
  }),
  handleSubmit(values, { setErrors, setSubmitting }) {
    console.log(values);
    setSubmitting(true);
    setTimeout(() => {
      if (values.email === 'hadadus@gmail.com') {
        setErrors({ email: 'Email already exists' });
        setSubmitting(false);
      }
    }, 2000);
  },
})(App);
export default Formik;

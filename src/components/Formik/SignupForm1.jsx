import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
 

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};


const SignupForm1 = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      productType: '',
      acceptedTerms: false,
    },
    //validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
        productType: Yup.string()
        .oneOf(
          ['book', 'video', 'PDF-book', 'audio-book'],
          'Invalid Product Type'
          )
        .required('Required'),
      acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions.'),
    }),
    onSubmit: values => {
      console.log('form values----',values);
      //alert(JSON.stringify(values, null, 2));
      //setSubmitting(false);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <br/><br/>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        placeholder="Steven"
      />
      <br/><br/>
      {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        placeholder="Seagal"
      />
      <br/><br/>
      {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="StevenSeagal@gmail.com"
      />
      <br/><br/>
      {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="xxxxxxxx"
      />
      <br/><br/>
      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <label htmlFor="productType">Product Type</label>
      <select
        id="productType"
        name="productType"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.productType}
      >
        <option value="">Select Product Type</option>
        <option value="book">book</option>
        <option value="video">video</option>
        <option value="PDF-book">PDF-book</option>
        <option value="audio-book">audio-book</option>
      </select>
      
      <br/><br/>
      {formik.touched.productType && formik.errors.productType ? <div>{formik.errors.productType}</div> : null}

      <input
        id="acceptedTerms"
        name="acceptedTerms"
        type="checkbox"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.acceptedTerms}
      />
      <label htmlFor="acceptedTerms">I accept the terms and conditions</label>
      <br/><br/>
      {formik.touched.acceptedTerms && formik.errors.acceptedTerms ? <div>{formik.errors.acceptedTerms}</div> : null}


      <button type="submit">Submit</button>
      <br/><br/>
      <hr/>
      <br/><br/>
    </form>
  );
};

 export default SignupForm1;
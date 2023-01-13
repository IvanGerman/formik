import React from 'react';
import { useFormik } from 'formik';
 
const SignupForm1 = () => {
   // Pass the useFormik() hook initial form values and a submit function that will
   // be called when the form is submitted
   const formik = useFormik({
     initialValues: {
       email: '',
     },
     onSubmit: values => {
       //here we can send form data to server
       console.log('form values-----',values);
       alert(JSON.stringify(values, null, 2));
     },
   });
   return (
     <form onSubmit={formik.handleSubmit}>
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
         placeholder="your Email"
       />
 
       <button type="submit">Submit</button>
     </form>
   );
 };

 export default SignupForm1;
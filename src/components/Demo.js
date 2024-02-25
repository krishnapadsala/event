import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";

export const Demo = () => {
  const loginSchema = Yup.object({
    email: Yup.string().email().min(10).required("please Enter Email"),
    password: Yup.string().min(6).required("please Enter Password"),
  });

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: loginSchema,
      onSubmit: (e) => {
        console.log(e);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: "flex" }}>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
        />
      </div>
      {errors.email && touched.email ? <div>{errors.email}</div> : null}
      <div>
        <input
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
        />
      </div>
      {errors.password && touched.password ? (
        <div>{errors.password}</div>
      ) : null}
      <input type="submit" value="login" />
    </form>
  );
};

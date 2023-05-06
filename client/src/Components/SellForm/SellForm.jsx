import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./SellForm.module.css";
import Button from "../../UI/Button/Button";

function SellForm() {
  const initialValues = {
    bookName: "",
    authorName: "",
    description: "",
    image: "",
    authorAddress: "",
    contactDetails: "",
  };
  const validationSchema = Yup.object().shape({
    bookName: Yup.string().required("This field is required"),
    authorName: Yup.string().required("This field is required"),
    price: Yup.number().min(0).max(5000).required("This field is required"),
    description: Yup.string(),
    image: Yup.mixed()
      .required("This field is required")
      .test("fileSize", "File size is too large", (value) => {
        return value && value.size <= 5000000;
      })
      .test("fileType", "Only images are supported", (value) => {
        return (
          value &&
          (value.type === "image/png" ||
            value.type === "image/jpeg" ||
            value.type === "image/jpg")
        );
      }),
    authorAddress: Yup.string().required("This field is required"),
    contactDetails: Yup.string()
      .required("This field is required")
      .test("len", "Must be exactly 10 digits", (val) => {
        return val && val.length === 10;
      }),
  });

  const handleSubmit = (values) => {
    console.log("Values:", values);
  };

  return (
    <>
      <h1 className={styles.title}>Sell</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className={styles.formContainer}>
            <label className={styles.label}>
              Book Name:
              <Field className={styles.input} type="text" name="bookName" />
              {errors.bookName && touched.bookName && (
                <div className={styles.errorMsg}>{errors.bookName}</div>
              )}
            </label>
            <br />
            <label className={styles.label}>
              Author Name:
              <Field className={styles.input} type="text" name="authorName" />
              {errors.authorName && touched.authorName && (
                <div className={styles.errorMsg}>{errors.authorName}</div>
              )}
            </label>
            <br />
            <label className={styles.label}>
              Price:
              <Field className={styles.input} type="number" name="price" />
              {errors.price && touched.price && (
                <div className={styles.errorMsg}>{errors.price}</div>
              )}
            </label>
            <label className={styles.label}>
              Description:
              <Field
                className={styles.input}
                component="textarea"
                name="description"
              />
              {errors.description && touched.description && (
                <div className={styles.errorMsg}>{errors.description}</div>
              )}
            </label>
            <br />
            <label className={styles.label}>
              Upload Image:
              <input
                className={styles.input}
                type="file"
                onChange={(event) => {
                  setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              {errors.image && touched.image && (
                <div className={styles.error}>{errors.image}</div>
              )}
            </label>
            <br />
            <label className={styles.label}>
              Author Address:
              <Field
                className={styles.input}
                component="textarea"
                name="authorAddress"
              />
              {errors.authorAddress && touched.authorAddress && (
                <div className={styles.errorMsg}>{errors.authorAddress}</div>
              )}
            </label>
            <br />
            <label className={styles.label}>
              Contact Details:
              <Field
                className={styles.input}
                type="text"
                name="contactDetails"
              />
              {errors.contactDetails && touched.contactDetails && (
                <div className={styles.errorMsg}>{errors.contactDetails}</div>
              )}
            </label>
            <br />
            <Button type="submit" bg={28}>Submit</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default SellForm;

import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { Box, TextField ,Button} from "@mui/material";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    firstName: "",
    email: "",
    lastName: "",
    contact: "",
    adress1: "",
    adress2: "",
  };
  const phoneRegExp = /^\+92[0-9]{9}$/;

  const checkOutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "invalide contact number")
      .required("requierd"),
    adress1: yup.string().required("required"),
    adress2: yup.string().required("required"),
  });

  return (
    <Box m="20px">
      <Formik onSubmit={handleFormSubmit} validationSchema={checkOutSchema} initialValues={initialValues}>
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleBlur,
          handleChange,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                name="firstName"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
                {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              /> */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                value={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                name="contact"
                value={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Adress1"
                name="adress1"
                value={values.adress1}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.adress1 && !!errors.adress1}
                helperText={touched.adress1 && errors.adress1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Adress2"
                name="adress2"
                value={values.adress2}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.adress2 && !!errors.adress2}
                helperText={touched.adress2 && errors.adress2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;

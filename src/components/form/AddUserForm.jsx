import React from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../userslice/usersSlice";
import { FIELDS } from "./contants";
import InputField from "./InputField";
import { Box, Button } from "@material-ui/core";
import * as yup from "yup";
import {
  getSnackbarDetails,
  setSnackbar,
} from "../notificationSlice/snackbarSlice";
export const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  title: yup.string().required("Title is required"),
  department: yup.string().required("Department is required"),
  status: yup.bool().required("Status is required"),
});
const AddUserForm = () => {
  const snackbarDetails = useSelector(getSnackbarDetails);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const snackbarOpen = true;
  const snackbarType = "success";
  const snackbarMessage = "Successfully added a user";

  const handleSubmit = (values) => {
    const { name, title, department, status } = values || {};
    try {
      dispatch(addNewUser({ name, title, department, status })).unwrap();
      dispatch(setSnackbar({ snackbarOpen, snackbarType, snackbarMessage }));
      navigate("/");
    } catch (e) {
      console.log("failed saving user");
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      title: "",
      department: "",
      status: "",
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  const renderInput = ({ name, label, type, id, formik }) => {
    return <InputField name={name} label={label} type={type} formik={formik} />;
  };
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: 400,
        }}
      >
        <Box>
          <h2>Add User</h2>
          <div
            style={{
              marginBottom: 16,
            }}
          >
            {FIELDS.map((x) =>
              renderInput({
                name: x.name,
                label: x.label,
                type: x.type,
                id: x.id,
                status: x.status,
                formik,
              })
            )}
          </div>
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button variant="contained" color="primary" type="submit">
              Save User
            </Button>
          </Box>
        </Box>
      </form>
    </section>
  );
};

export default AddUserForm;

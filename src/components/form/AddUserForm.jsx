import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewUser } from "../userslice/usersSlice";
import { FIELDS } from "./contants";
import InputField from "./InputField";
import { Box, Button } from "@material-ui/core";
import * as yup from "yup";

export const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  title: yup.string().required("Title is required"),
  department: yup.string().required("Department is required"),
  status: yup.bool().required("Status is required"),
});

const AddUserForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { name, title, department, status } = values || {};
    try {
      dispatch(addNewUser({ name, title, department, status })).unwrap();
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
  console.log(formik.errors);
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
                status: x.user_status,
                formik,
              })
            )}
          </div>
          <Button variant="outlined" color="primary" type="submit">
            Save User
          </Button>
        </Box>
      </form>
    </section>
  );
};

export default AddUserForm;

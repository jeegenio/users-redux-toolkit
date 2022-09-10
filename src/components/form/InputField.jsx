import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";

const InputField = ({ name, label, type, id, formik }) => {
  if (type === "select") {
    return (
      <FormControl fullWidth>
        <InputLabel shrink id="demo-simple-select-placeholder-label-label">
          {label}
        </InputLabel>
        <Select
          name={name}
          labelId="demo-simple-select-required-label"
          label={label}
          id={id}
          value={formik.values[name]}
          onChange={formik.handleChange}
          error={formik.touched[name] && Boolean(formik.errors[name])}
        >
          <MenuItem value={true}>Active</MenuItem>
          <MenuItem value={false}>Inactive</MenuItem>
        </Select>
      </FormControl>
    );
  }
  return (
    <Box style={{ marginBottom: 8 }}>
      <TextField
        name={name}
        error={formik.touched[name] && Boolean(formik.errors[name])}
        label={label}
        onChange={formik.handleChange}
        value={formik.values[name]}
        id="outlined-basic"
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
      />
    </Box>
  );
};

export default InputField;

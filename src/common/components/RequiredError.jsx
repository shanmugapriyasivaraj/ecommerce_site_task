import React from "react";

const RequiredError = (props) => {
  const { name, formik } = props;
  return (
    <div>
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default RequiredError;

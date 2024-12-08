import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateForm, submitForm } from "./action";

const FormComponent = () => {
  const dispatch = useDispatch();
  const { formData, submittedData } = useSelector((state) => state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateForm(name, value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitForm());
  };

  return (
    <>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div>
            <h3>Submitted data : </h3>
            <p>Name : {submittedData.name}</p>
            <p>Email : {submittedData.email}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FormComponent;

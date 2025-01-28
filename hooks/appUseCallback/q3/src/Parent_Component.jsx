import React, { useState, useCallback } from "react";

import ChildInput from "./Child_Component";

function ParentForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  }, []);

  return (
    <div>
      <h1>Parent Form</h1>
      <ChildInput
        label="First Name"
        value={formData.firstName}
        onChange={(value) => handleInputChange("firstName", value)}
      />
      <ChildInput
        label="Last Name"
        value={formData.lastName}
        onChange={(value) => handleInputChange("lastName", value)}
      />
      <p>
        Full Name: {formData.firstName} {formData.lastName}
      </p>
    </div>
  );
}

export default ParentForm;

import React, { useReducer } from "react";
import "./App.css";

const initialState = {
  username: "",
  email: "",
  password: "",
  error: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case "update_field": {
      const { field, value } = action.payload;

      // Perform validation for the specific field
      let error = "";
      if (field === "username" && value.trim().length < 3) {
        error = "Username must be at least 3 characters.";
      }
      if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Invalid email address.";
      }
      if (field === "password" && value.length < 6) {
        error = "Password must be at least 6 characters.";
      }

      // Return updated state with potential error
      return {
        ...state,
        [field]: value,
        errors: {
          ...state.errors,
          [field]: error,
        },
      };
    }
    case "validate_form": {
      const errors = {};
      if (!state.username.trim()) {
        errors.username = "Username is required.";
      }
      if (!state.email.trim()) {
        errors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
        errors.email = "Invalid email address.";
      }
      if (!state.password) {
        errors.password = "Password is required.";
      } else if (state.password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
      }

      return {
        ...state,
        errors,
      };
    }
    case "reset_form":
      return initialState;
    default:
      throw new Error("Unknown action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "validate_form" });

    // Check if there are any errors
    if (Object.values(state.errors).some((error) => error)) {
      console.log("Form contains errors:", state.errors);
    } else {
      console.log("Form submitted successfully!", {
        username: state.username,
        email: state.email,
        password: state.password,
      });
      dispatch({ type: "reset_form" }); // Reset form after successful submission
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "update_field",
      payload: { field: name, value },
    });
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Form Validation with useReducer</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
              />
            </label>
            {state.errors.username && (
              <p style={{ color: "red" }}>{state.errors.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </label>
            {state.errors.email && (
              <p style={{ color: "red" }}>{state.errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </label>
            {state.errors.password && (
              <p style={{ color: "red" }}>{state.errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;

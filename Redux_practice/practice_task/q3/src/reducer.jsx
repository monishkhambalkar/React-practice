import { UPDATE_FORM, SUBMIT_FORM } from "./action";

const initialState = {
  formData: {
    name: "",
    email: "",
  },
  submittedData: null,
};

const fomReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
      };
    case SUBMIT_FORM:
      return { ...state, submittedData: { ...state.formData } };
    default:
      return state;
  }
};

export default fomReducer;

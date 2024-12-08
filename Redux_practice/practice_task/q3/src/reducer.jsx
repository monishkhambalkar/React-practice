import { UPDATE_FORM, SUBMIT_FORM } from "./action";

const initialState = {
  formData: {
    name: "",
    email: "",
  },
  submittedData: null,
};

const fomReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case UPDATE_FORM:
      console.log(state);
      console.log(action);
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

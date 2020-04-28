const AddKeyReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDKEY":
      return state.concat(action.payload);
    case "RESETKEY":
      return [];
    default:
      return state;
  }
};

export default AddKeyReducer;

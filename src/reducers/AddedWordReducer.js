const AddedWordReducer = (state = [], action) => {
  switch (action.type) {
    case "ADDWORD":
      return state.concat(action.payload);
    case "RESETWORD":
      return [];
    default:
      return state;
  }
};
export default AddedWordReducer;

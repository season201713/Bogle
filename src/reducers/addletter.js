const addletter = (state = "", action) => {
  switch (action.type) {
    case "ADDLETTER":
      return state + action.payload;
    case "RESETLETTER":
      return "";
    default:
      return state;
  }
};

export default addletter;

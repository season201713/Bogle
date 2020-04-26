const initialstate = {
  display: false,
  message: ""
};

const modal = (state = initialstate, action) => {
  switch (action.type) {
    case "SHOWMODAL":
      return action.payload;
    case "RESETMODAL":
      return {
        display: false,
        message: ""
      };
    default:
      return state;
  }
};
export default modal;

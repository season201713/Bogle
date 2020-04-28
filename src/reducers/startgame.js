const initialstate = {
  display: false
};

const startgame = (state = initialstate, action) => {
  switch (action.type) {
    case "StartGame":
      return action.payload;
    default:
      return state;
  }
};
export default startgame;

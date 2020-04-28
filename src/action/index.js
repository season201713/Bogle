export const addTime = () => {
  return {
    type: "ADDTIME"
  };
};

export const resetTime = () => {
  return {
    type: "RESETTIME"
  };
};
export const letters = data => {
  return {
    type: "LETTERS",
    payload: data
  };
};
export const showModal = data => {
  return {
    type: "SHOWMODAL",
    payload: data
  };
};

export const resetModal = () => {
  return {
    type: "RESETMODAL"
  };
};

export const StartGame = data => {
  return {
    type: "StartGame",
    payload: data
  };
};

export const ADDLETTER = data => {
  return {
    type: "ADDLETTER",
    payload: data
  };
};

export const RESETLETTER = () => {
  return {
    type: "RESETLETTER"
  };
};

export const ADDWORD = word => {
  return {
    type: "ADDWORD",
    payload: word
  };
};

export const RESETWORD = () => {
  return {
    type: "RESETWORD"
  };
};

export const UPDATEALERT = data => {
  return {
    type: "UPDATEALERT",
    payload: data
  };
};

export const RESETALERT = () => {
  return {
    type: "RESETALERT"
  };
};

export const INCREMENT = data => {
  return {
    type: "INCREMENT",
    payload: data
  };
};
export const RESETSCORE = () => {
  return {
    type: "RESETSCORE"
  };
};

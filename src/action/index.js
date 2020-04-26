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

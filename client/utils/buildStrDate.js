export const buildStrDate = (date) => {
  let getDate = new Date(date);
  let month = getDate.getMonth()+1;
  return getDate.getFullYear() + "-" +month + "-" + getDate.getDate();
};


export const isAuthenticated = () => {
  const sucess = localStorage.getItem("token") ? true : false;
  return sucess;
};
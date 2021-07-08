export const userSelector = (state) => state.user;
export const userSelectorID = (state) => state.user.id;
export const usernameSelector = (state) => state.user.username;
export const usernameAndID = (state) => ({
  id: state.user.id,
  username: state.user.usernaem,
});

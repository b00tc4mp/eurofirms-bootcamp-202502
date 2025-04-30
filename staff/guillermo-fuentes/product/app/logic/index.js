import { registerUser } from './registerUser';
import { loginUser } from './loginUser';
import { getUserUsername } from './getUserUsername';
import { logoutUser } from './logoutUser';
import { isUserLoggedIn } from './isUserLoggedIn';
import { getPosts } from './getPosts';
import { createPost } from './createPost';
import { editPost } from './editPost';
import { deletePost } from './deletePost';
export const logic = {
  registerUser,
  loginUser,
  getUserUsername,
  logoutUser,
  isUserLoggedIn,
  getPosts,
  createPost,
  editPost,
  deletePost,
};

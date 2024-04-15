import { Post, User } from './models';
import { connectToDb } from './utils';

// temp data
// const users = [
//   { id: 1, name: 'john' },
//   { id: 2, name: 'doe' },
// ];

// const posts = [
//   { id: 1, title: 'Post 1', body: '.........', userId: 1 },
//   { id: 2, title: 'Post 2', body: '.........', userId: 2 },
//   { id: 3, title: 'Post 3', body: '.........', userId: 3 },
//   { id: 3, title: 'Post 4', body: '.........', userId: 3 },
// ];

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();

    return posts;
  } catch (error) {
    console.log({ error });
    throw new Error('Failed to fetch posts');
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.find({ slug });

    return post;
  } catch (error) {
    console.log({ error });
    throw new Error('Failed to fetch post');
  }
};
export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);

    return user;
  } catch (error) {
    console.log({ error });
    throw new Error('Failed to fetch user');
  }
};
export const getUsers = async (id) => {
  try {
    connectToDb();
    const users = await User.find();

    return users;
  } catch (error) {
    console.log({ error });
    throw new Error('Failed to fetch users');
  }
};

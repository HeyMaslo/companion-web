import firebase from 'firebase';

const signup = async (username, password) => {
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(username, password);
};

const login = async (username, password) => {
  return await firebase.auth().signInWithEmailAndPassword(username, password);
};

const resetPasswordEmailLink = async (username) => {
  return await firebase.auth().sendPasswordResetEmail(username);
};

export { signup, login, resetPasswordEmailLink };

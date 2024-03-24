export const checkValidData = (email, password,isSignIn) => {
  // const isNameValid = /^[A-z ]+$/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  // if (!isNameValid) return "Please enter a valid Name";
  if (!isEmailValid) return "Email ID is not valid";
  if(isSignIn && !isPasswordValid) {
    return "Incorrect Email/Password"
  }
  if (!isPasswordValid) return "Password is not valid";

  return null;
};

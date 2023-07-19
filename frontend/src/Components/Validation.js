const Validation = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailIsValid = emailRegex.test(email);
  let emailErrorMessage = "";
  let passwordErrorMessage = "";

  if (!emailIsValid) {
    emailErrorMessage = "*Invalid email address";
  }

  if (password.length < 6) {
    passwordErrorMessage = "*Password must be at least 6 characters";
  } else if (!/[A-Z]/.test(password)) {
    passwordErrorMessage = "*Password must contain at least 1 uppercase letter";
  } else if (!/[a-z]/.test(password)) {
    passwordErrorMessage = "*Password must contain at least 1 lowercase letter";
  } else if (!/[0-9]/.test(password)) {
    passwordErrorMessage = "*Password must contain at least 1 number";
  } else if (!/[^A-Za-z0-9]/.test(password)) {
    passwordErrorMessage = "*Password must contain at least 1 special character";
  }

  return {
    email: emailErrorMessage,
    password: passwordErrorMessage
  };
}

export default Validation
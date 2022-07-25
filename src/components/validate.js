export const validate = (data) => {
  const error = {};

  if (!data.username.trim()) {
    error.username = "Username required";
  } else {
    delete error.username;
  }

  if (!data.position.trim()) {
    error.position = "Position required";
  } else {
    delete error.position;
  }

  if (!data.phone) {
    error.phone = "Phone required";
  } else if (data.phone.length < 10) {
    error.phone = "Is not a valid phone number";
  } else {
    delete error.phone;
  }

  if (!data.email) {
    error.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    error.email = "Email addres is invalid";
  } else {
    delete error.email;
  }

  if (!data.dob) {
    error.dob = "Date of Birthday required";
  } else {
    delete error.dob;
  }

  if (!data.id.trim()) {
    error.id = "National ID required";
  } else {
    delete error.id;
  }

  if (!data.password) {
    error.password = "Password required";
  } else if (data.password.length < 6) {
    error.password = "Password need to be 8 character or more";
  } else {
    delete error.password;
  }

  if (!data.confirmPassword) {
    error.confirmPassword = "confirm password required";
  } else if (data.confirmPassword !== data.password) {
    error.confirmPassword = "Password do not match!";
  } else {
    delete error.confirmPassword;
  }

  return error;
};

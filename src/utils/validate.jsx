export const validateAuthFormData = (email, password) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );

  const isValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/.test(
      password,
    );

  if (!isValidEmail) return "Invalid email address";
  if (!isValidPassword)
    return "Password must have at least 8 characters, one uppercase letter, one lowercase letter, one digit, and one special character";
  return null;
};

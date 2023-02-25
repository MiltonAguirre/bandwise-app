export const validateEmail = (email) => {
  //bassed on https://blog.mailtrap.io/react-native-email-validation/
  const expression = /\S+@\S+\.\S+/;
  if (!email || email.length < 6 || !expression.test(String(email)))
    return false;
  else return true;
};
//   export const validateString = string => {
//     if (!string || string.length < 3) return false;
//     return true;
//   };
//   export const validateLocation = location => {
//     const expression = /^[A-Za-z0-9Ññ ]*$/u;
//     if (!location || location.length < 3 || !expression.test(String(location)))
//       return false;
//     else return true;
//   };
//   export const validateName = name => {
//     const expression = /^[A-Za-zÑñ ]*$/u;
//     if (!name || name.length < 3 || !expression.test(String(name))) return false;
//     else return true;
//   };
//   export const validatePhone = string => {
//     if (!string || string.length < 15 || string.length > 30) return false;
//     else return true;
//   };

export const validatePassword = (pass) => {
  if (!pass || pass.length < 8) return false;
  else return true;
};
export const validatePasswords = (pass, repass) => {
  if (!pass || pass.length < 8 || pass !== repass) return false;
  else return true;
};

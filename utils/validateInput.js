export const validateInput = (data, requiredFields) => {
  const errors = {};

  requiredFields.forEach((field) => {
    if (!data[field]) {
      errors[field] = `${field} is required`;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

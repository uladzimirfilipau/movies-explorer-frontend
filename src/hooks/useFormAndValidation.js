import { useState, useCallback } from 'react';
import isEmail from 'validator/lib/isEmail';

function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const input = event.target;
    const { name, value } = input;

    if (name === 'name' && input.validity.patternMismatch) {
      input.setCustomValidity('Используйте только латиницу, кириллицу, пробел или дефис');
    } else {
      input.setCustomValidity('');
    }

    if (name === 'email') {
      if (isEmail(value)) {
        input.setCustomValidity('');
      } else {
        input.setCustomValidity('Некорректный email');
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest('form').checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid };
}

export default useFormAndValidation;

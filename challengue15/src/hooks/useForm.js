import { useState } from "react";

export const useForm = (initialState = {}) => {
  const [formState, setFormState] = useState(initialState);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const onResetForm = () => setFormState(initialState);

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  };
};

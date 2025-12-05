import { useState } from "react";

export const useValidatedNumber = (initial = "", max = 100) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = (v) => {
    if (v === "") {
      setValue("");
      setError("");
      return;
    }
    if (!/^\d+$/.test(v)) {
      setError("Only numbers allowed!");
      return;
    }
    const num = parseInt(v);
    if (num < 0) {
      setError("Only positive numbers");
      setValue("");
      return;
    }
    if (num > max) {
      setError(`Max limit: ${max}`);
      return;
    }

    setValue(num);
    setError("");
  };
  return { value, error, onChange, isValid: error === "" && value !== "" };
};

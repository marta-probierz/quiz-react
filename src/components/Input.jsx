import { useState } from "react";

import { Input } from '../styles/Input'; 

export const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div>
      <Input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
    </div>
  );
};

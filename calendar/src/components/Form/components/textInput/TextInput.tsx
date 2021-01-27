import React from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';
import { InputProps } from './TextInput.types';

export const TextInput = ({
  name,
  style,
  defaultValue,
  ...props
}: InputProps) => {
  const [field, meta] = useField(name);
  return (
    <>
      <TextField
        {...props}
        defaultValue={defaultValue}
        className={style}
        {...field}
        name={name}
      />
      {/* <input className="text-input" /> */}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

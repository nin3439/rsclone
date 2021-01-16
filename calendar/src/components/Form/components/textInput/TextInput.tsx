import React from 'react';
import {useField } from 'formik';
import { TextField } from '@material-ui/core';
import { InputProps } from './TextInput.types'


export const TextInput = ({ name, style, ...props }: InputProps) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(name);
  return (
    <>
      <TextField {...props} className={style} {...field} name={name} />
      {/* <input className="text-input" /> */}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

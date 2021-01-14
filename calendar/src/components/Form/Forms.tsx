import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { Button, Box } from '@material-ui/core';
import {
  Close,
} from '@material-ui/icons';

import { useStyles } from './materialUIStyles';
import { FormSwitch } from './components/FormSwitch/FormSwitch';


type FormProps = {
  active: Boolean;
  setValue: any,
  children?: React.FC
};
export const FormElement :React.FC<FormProps> = ({ active, setValue, children}) => {
  const classMaterial: any= useStyles()

  return (
    <Box
      className={
        active ? `${classMaterial.overlay} ${classMaterial.active}` : classMaterial.overlay
      }
      onClick={() => setValue({ modalActive: !active })}
    >
      <Box className={classMaterial.modal} onClick={e => e.stopPropagation()}>
        <Box className={classMaterial.close}>
          <Close onClick={() => setValue({ modalActive: !active })} />
        </Box>
        <Formik
          initialValues={{
            title: '',
            listGuest: '',
            location: '',
            description: '', // added for our select
            dateTimeStart: '',
            dateTimeEnd: '',
          }}
          validationSchema={Yup.object({
            title: Yup.string().max(44, 'Must be 44 characters or less'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              debugger
              setValue({
                modalActive: !active,
              });
            }, 400);
          }}
        >
          <FormSwitch />
        </Formik>
      </Box>
    </Box>
  );
};

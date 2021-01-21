import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormSwitch } from './components/FormSwitch/FormSwitch';
import { FormProps, FormValuesProps } from './Form.types';
import { Box } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useTranslation } from 'react-i18next';
import { useStyles } from './materialUIStyles';
export const FormElement: React.FC<FormProps> = ({ changeModalActive }) => {
  const { t } = useTranslation();
  const classMaterial: any = useStyles();
  return (
    <Box
      className={`${classMaterial.overlay} ${classMaterial.active}`}
      onClick={changeModalActive}
    >
      <Box className={classMaterial.modal} onClick={(e) => e.stopPropagation()}>
        <Box className={classMaterial.close}>
          <Close onClick={changeModalActive} />
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
          onSubmit={(values: FormValuesProps, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              changeModalActive();
            }, 400);
          }}
        >
          <FormSwitch t={t} />
        </Formik>
      </Box>
    </Box>
  );
};

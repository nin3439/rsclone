import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormSwitch } from './components/FormSwitch/FormSwitch';
import { FormProps, FormValuesProps } from './Form.types';
import { Box } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { useStyles } from './materialUIStyles';
import { eventType } from '../../constants/Language';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { updateEvent } from '../../redux/actions/contentAction';

export const FormElement: React.FC<FormProps> = ({
  changeModalActive,
  updateDateForm,
}) => {
  const {
    id,
    title,
    start,
    end,
    location,
    listGuest,
    typeEvents,
    description,
  } = useSelector((state: any) => state.content.dataSelectedEvents);
  const classMaterial: any = useStyles();
  const [switchParameter, setSwitch] = useState(typeEvents ?? eventType.EVENTS);

  const checkForm = (
    event: string,
    values: FormValuesProps
  ): FormValuesProps => {
    if (event === eventType.EVENTS) return values;
    let { title, description, start } = values;

    if (event === eventType.TASKS)
      return { title, description, start, end: start };
    return { title, description, start };
  };
  const dispatch = useDispatch();
  const { startDataOnClick, endDataOnClick } = useSelector(
    (state: any) => state.stateControl
  );
  return (
    <Box
      className={`${classMaterial.overlay} ${classMaterial.active}`}
      onClick={changeModalActive}
    >
      <Box className={classMaterial.modal} onClick={(e) => e.stopPropagation()}>
        <Box className={classMaterial.close}>
          <Close
            className={classMaterial.iconClose}
            color="action"
            onClick={changeModalActive}
          />
        </Box>
        <Formik
          initialValues={{
            title: '' || title,
            listGuest: '' || listGuest,
            location: '' || location,
            description: '' || description, // added for our select
            start: startDataOnClick || moment(start).format('YYYY-MM-DDTHH:mm'),
            end: endDataOnClick || moment(end).format('YYYY-MM-DDTHH:mm'),
          }}
          validationSchema={Yup.object({
            title: Yup.string().min(3, 'fggetg'),
          })}
          onSubmit={async (values: FormValuesProps, { setSubmitting }) => {
            const typeEvents = switchParameter;
            const validateForm = checkForm(switchParameter, values);
            id
              ? await dispatch(updateEvent({ typeEvents, ...validateForm }, id))
              : updateDateForm({ typeEvents, ...validateForm });
            // console.log(JSON.stringify({ typeEvents, ...values }, null, 2));
            setSubmitting(false);
            changeModalActive();
          }}
        >
          <FormSwitch
            id={id}
            switchParameter={switchParameter}
            setSwitch={setSwitch}
          />
        </Formik>
      </Box>
    </Box>
  );
};

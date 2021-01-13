import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

import EventsSchedule from '../Content/Schedule/Schedule';
import { MyTextInput } from './components/textInput/TextInput';

import { Button, makeStyles, TextField, Box } from '@material-ui/core';
import {
  AccessTime,
  Close,
  LocationOnOutlined,
  PeopleOutlineRounded,
  SubjectOutlined,
} from '@material-ui/icons';

import { useStyles } from './materialUIStyles';
import classes from './Forms.module.css';


type FormProps = {
  active: Boolean;
  setValue: (value: any) => {};
};
export const FormElement = ({ active, setValue }: FormProps) => {
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
              setValue({
                modalActive: !active,
              });
            }, 400);
          }}
        >
          <Form>
            <Box className={classMaterial.form} onClick={e => e.stopPropagation}>
              <MyTextInput
                id="standard-basic"
                style={classMaterial.inputTitle}
                name="title"
                type="text"
                placeholder="Add title"
              />
              <Box className={classMaterial                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               .categoryBox}>
                <Button color="primary">Мероприятие</Button>
                <Button color="primary">Задача</Button>
                <Button color="primary">Напоминание</Button>
              </Box>
              <Box className={classMaterial.box}>
                <AccessTime />
                <Box className={classMaterial.timeBox}>
                    <MyTextInput
                      name="dateTimeStart"
                      id="datetime-local"
                      type="datetime-local"
                      label="Start Date"
                      defaultValue={new Date()}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <MyTextInput
                      name="dateTimeEnd"
                      id="datetime-local"
                      type="datetime-local"
                      label="End Date"
                      defaultValue={new Date()}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                </Box>
              </Box>
              <Box className={classMaterial.box}>
                <PeopleOutlineRounded />
                <MyTextInput
                  id="filled-basic"
                  name="listGuest"
                  type="text"
                  style={classMaterial.input}
                  placeholder="add guests"
                />
              </Box>
              <Box className={classMaterial.box}>
                <LocationOnOutlined />
                <MyTextInput
                  id="filled-basic"
                  style={classMaterial.input}
                  name="location"
                  type="text"
                  placeholder="indicate the location"
                />
              </Box>

              <Box className={classMaterial.box}>
                <SubjectOutlined />
                <MyTextInput
                  id="filled-basic"
                  style={classMaterial.input}
                  name="description"
                  type="text"
                  placeholder="add a description or attach a file"
                />
              </Box>
              <Box className={classMaterial.buttonsForm}>
                <Button>Other parameters</Button>
                <Button
                  className={classMaterial.btnSubmit}
                  size="large"
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

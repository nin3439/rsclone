import React, { useState } from 'react';
import { Form } from 'formik';
import { FormEvents } from '../FormEvents/FormEvents';
import { FormTask } from '../formTask/FormTask';
import { FormReminders } from '../FormReminder/FormReminder';
import { TextInput } from '../textInput/TextInput';
import { Button, Box } from '@material-ui/core';
import { useStyles } from './materialUIStyles';

export const FormSwitch = () => {
  const classMaterial: any = useStyles();
  const [switchParametr, setSwitch] = useState('events')
  const changeSwitchParametr = (param :string) => {
    if(param === switchParametr) return
    setSwitch(param)
  }
  const changeForm = (switchParam: string) => {
       switch (switchParametr) {
              case 'events':
                return <FormEvents />
              case 'tasks':
                return <FormTask />
              case 'reminders':
                return <FormReminders />
              default:
                <FormEvents />
              return ;
            }
  }
  return (
    <Form>
      <Box className={classMaterial.form} onClick={e => e.stopPropagation}>
        <TextInput
          id="standard-basic"
          style={classMaterial.inputTitle}
          name="title"
          type="text"
          placeholder="Add title"
        />
        <Box className={classMaterial.categoryBox}>
          <Button
            onClick={() => {
              changeSwitchParametr('events');
            }}
            color="primary"
          >
            Event
          </Button>
          <Button
            onClick={() => {
              changeSwitchParametr('tasks');
            }}
            color="primary"
          >
            Task
          </Button>
          <Button
            onClick={() => {
              changeSwitchParametr('reminders');
            }}
            color="primary"
          >
            Reminder
          </Button>
        </Box>
        {changeForm(switchParametr)}
      </Box>
    </Form>
  );
};

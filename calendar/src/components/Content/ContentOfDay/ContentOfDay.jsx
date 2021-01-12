import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import classes from './ContentOfDay.module.css';

const MyTextInput = props => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
// And now we can use these
export const ContentOfDay = () => {
  return (
    <>
      <Formik
        initialValues={{
          title: '',
          listGuest: '',
          location: '',
          description: '', // added for our select
        }}
        validationSchema={Yup.object({
          title: Yup.string().max(44, 'Must be 44 characters or less'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className={classes.form}>
            <MyTextInput name="title" type="text" placeholder="Add title" />
            <div className={classes.categories}>
              <span className={classes.category}>Мероприятие</span>
              <span className={classes.category}>Задача</span>
              <span className={classes.category}>Напоминание</span>
            </div>
            <div className={classes.date}>
              <span className={classes.logo}>Значок времени</span>
              <div className={classes.time}>
                <div>Временной интервал</div>
                <div>Время</div>
              </div>
              <button>Добавить время</button>
            </div>
            <div className={classes.guest}>
              <span className={classes.logo}>значок гостей</span>
              <MyTextInput
                name="listGuest"
                type="text"
                placeholder="add guests"
              />
            </div>
            <div className={classes.location}>
              <span className={classes.logo}>Значок местоположения</span>
              <MyTextInput
                name="location"
                type="text"
                placeholder="indicate the location"
              />
            </div>
            <div className={classes.description}>
              <span className={classes.logo}>Значок</span>
              <MyTextInput
                name="description"
                type="text"
                placeholder="add a description or attach a file"
              />
            </div>
            <div className={classes.buttonsForm}> <button>Other parameters</button>
            <button type="submit">Save</button></div>

          </div>
        </Form>
      </Formik>
    </>
  );
};

// import classes from "./ContentOfDay.module.css";

// export const ContentOfDay = () => {
//   return <div>ContentOfDay</div>;
// };

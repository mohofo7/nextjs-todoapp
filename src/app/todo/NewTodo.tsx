"use client";

import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import '../../styles/todo.css';

async function addTodo(name: string) {
  await axios.post(`/api/todo/add`, {
    body: JSON.stringify({ name })
  });
}

const NewTodo = () => {
  const { refresh } = useRouter();
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={async values => {
        await addTodo(values.name);
        refresh();
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required()
      })}
    >
      {({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleChange,
        handleBlur,
        handleReset
      }) => (
        <Form>
          <Field
            name="name"
            placeholder="Enter todo name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.name && touched.name
                ? "text-input error"
                : "text-input"
            }
          />
          <ErrorMessage
            name="name"
            className='input-feedback'
          />

          <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default NewTodo
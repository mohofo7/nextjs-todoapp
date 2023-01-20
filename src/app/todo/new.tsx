import axios from 'axios';
import { Formik } from 'formik';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';

async function addTodo(name: string, refresh: () => void) {
  await axios.post(`/api/todo/add`, {
    method: 'POST',
    body: JSON.stringify({ name })
  });
  refresh();
}

const NewTodo = () => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={async values => {
        await addTodo(values.name, router.refresh)
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required()
      })}
    >
      {({ }) => (
        
      )}
    </Formik>
  )
}

export default NewTodo
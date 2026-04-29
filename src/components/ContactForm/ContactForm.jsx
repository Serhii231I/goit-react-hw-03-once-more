import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        id: nanoid(),
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="">Name</label>
        <Field type="text" name="name" />
        <Field type="text" name="number" />
        <button type="onSubmit">Add contact</button>
      </Form>
    </Formik>
  );
}

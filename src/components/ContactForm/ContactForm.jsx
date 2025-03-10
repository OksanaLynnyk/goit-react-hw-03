import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css'


const initialValues = {
    name: "",
    number: ""
};

const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

const ProfileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too short')
    .max(50, 'Too long'),
  number: Yup.string()
    .matches(
      phoneRegExp,
      'xxx-xxx-xx-xx'
    )
    .required('Required'),
});

const ContactForm = ({onAdd}) => {
  const handleSubmit = (values, actions) => {
    const contactObject = {
      name: values.name,
      number: values.number,
    };

    onAdd(contactObject);
    actions.resetForm();
  }

  return (
    <Formik 
      initialValues={initialValues} onSubmit={handleSubmit}
      validationSchema={ProfileValidationSchema}
    >
    <Form className={css.formWrapper}> 
        <label className={css.contactWrapper}>
          <span className={css.fieldName}>Name</span>
          <Field type="text" name="name" className={css.formInput} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </label>
        <label className={css.contactWrapper}>
          <span className={css.fieldName}>Number</span>
          <Field type="tel" name="number" className={css.formInput} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </label>
        
        <button type="submit">Add contact</button>
    </Form>
</Formik>
  )
}

export default ContactForm
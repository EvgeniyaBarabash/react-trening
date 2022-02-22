import { Formik, Form, Field } from 'formik';
import Navigation from 'components/Navigation/Navigation';
import { addPublication } from '../../servise/publicationsApi';
import { ToastContainer, toast } from 'react-toastify';

export default function AddItemToList() {
    async function handleSubmit(values, { resetForm }) {
        try {
            console.log(values)
            await addPublication(values)
            toast.success('Публикация добавлена!');
            resetForm();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Navigation />
            <ToastContainer />
            <Formik initialValues={{ name: '', avatar: '' }} onSubmit={handleSubmit}>
                {({ isSubmitting }) => (
                    <Form>
                        <Field name="name" placeholder="Enter name" />
                        <br />
                        <Field name="avatar" placeholder="Enter avatar" />
                        <br />
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Adding...' : 'Add publication'}
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};
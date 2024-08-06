import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'vee-validate';
import { useFormik } from 'formik';

const FormComponent = ({ id, validationSchema, onSubmit, children }) => {
    const formik = useFormik({
        initialValues: {},
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
        onSubmit(values, resetForm);
        },
    });


    return (
        <Form
        id={id}
        className="flex flex-col gap-5"
        onSubmit={formik.handleSubmit}
        >
        { React.Children.map(children, (child) =>
            React.cloneElement(child, { ...formik })
        ) }
        </Form>
    );
};

FormComponent.propTypes = {
    id: PropTypes.string,
    validationSchema: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default FormComponent;
import { Formik, Form, Field } from 'formik';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, { setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
  };

  return (
    <header className="Searchbar">
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="SearchForm" autoComplete="off">
            <button
              type="submit"
              className="SearchForm-button"
              disabled={isSubmitting}
            >
              <span className="SearchForm-button-label">
                <FcSearch size="42" />
              </span>
            </button>
            <Field
              type="text"
              className="SearchForm-input"
              name="search"
              placeholder="Search images and photos"
            />
          </Form>
        )}
      </Formik>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

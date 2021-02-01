import { Button, FormControl, TextField } from '@material-ui/core';
import { Formik } from 'formik';
import { observer } from 'mobx-react';
import React from 'react';
import AccessViewModel from '../viewModels/accessViewModel';

@observer
export default class ResetPasswordFormComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  data = {
    username: '',
  };

  access = AccessViewModel;

  submit = async () => {
    await this.access.resetPassword();
  };

  render() {
    return (
      <div id="signup-form-component">
        <div className="form reset-password">
          <div className="form-container">
            <h1>Forgot password? No worries!</h1>
            <p>
              Enter the email address you used when you joined and we will send
              you instructions to reset your password.
            </p>
            <Formik initialValues={this.data} onSubmit={this.submit}>
              {(formProps) => {
                const {
                  setFieldValue,
                  setFieldTouched,
                  values,
                  handleSubmit,
                } = formProps;

                const change = (name, e) => {
                  e.persist();
                  setFieldValue(name, e.target.value);
                  setFieldTouched(name, true, false);

                  this.access.user[name] = e.target.value;
                };

                return (
                  <form onSubmit={handleSubmit} className="form-input">
                    <div>
                      <FormControl fullWidth>
                        <TextField
                          name="username"
                          type="email"
                          fullWidth
                          value={values.username}
                          onChange={change.bind(null, 'username')}
                          placeholder="email"
                          className={`input-text`}
                          InputProps={{ disableUnderline: true }}
                        />
                      </FormControl>
                    </div>
                    <p>{this.access.errorMessage}</p>
                    <Button
                      type="submit"
                      disabled={
                        !this.access.user.username || this.access.loading
                      }>
                      Send a reset link
                    </Button>
                  </form>
                );
              }}
            </Formik>
          </div>
          <div className="form-bottom">
            <div className="line" />
            <p>
              Already have an account?{' '}
              <Button onClick={() => (this.access.mode = 'login')}>
                Sign in
              </Button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

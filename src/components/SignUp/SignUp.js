import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { signUpRequestUser } from '../../redux/actions/SigupAction/SignUpAction';
import { string_regex } from '../../utils/extra';
import signupBtn from 'assets/images/signup-btn.png';
import {
  CHECKBOX_TYPE,
  CONFIRM_PASSWORD,
  CONFIRM_PASSWORD_KEY,
  EMAIL,
  EMAIL_OR_PHONE,
  INVITE_CODE,
  INVITE_CODE_KEY,
  INVALID,
  IS_AGREE_TERMS_AND_CONDITION,
  NAME,
  PASSWORD,
  REQUIRED,
  SIGN_UP,
  TEXT_TYPE,
} from '../../constants';
import './signUp.scss';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      inviteCode: '',
      isAgreeTermsAndCondition: false,
      error: {
        nameErr: '',
        emailErr: '',
        passwordErr: '',
        confirmPasswordErr: '',
        isAgreeTermsAndConditionErr: '',
        inviteCodeErr: '',
      },
    };
  }

  onFormDataChange = (event) => {
    let name = '';
    let email = '';
    let password = '';
    let confirmPassword = '';
    let inviteCode = '';

    if (event.target.name === NAME.toLowerCase()) {
      name = event.target.value;
    }
    if (event.target.name === EMAIL) {
      email = event.target.value;
    }
    if (event.target.name === PASSWORD.toLowerCase()) {
      password = event.target.value;
    }
    if (event.target.name === CONFIRM_PASSWORD_KEY) {
      confirmPassword = event.target.value;
    }
    if (event.target.name === INVITE_CODE_KEY) {
      inviteCode = event.target.value;
    }
    this.setState({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      inviteCode: inviteCode,
    });
  };

  validateData = () => {
    const {
      name,
      confirmPassword,
      password,
      email,
      inviteCode,
      isAgreeTermsAndCondition,
    } = this.state;
    let error = {
      nameErr: '',
      emailErr: '',
      passwordErr: '',
      confirmPasswordErr: '',
      isAgreeTermsAndConditionErr: '',
      inviteCodeErr: '',
    };
    error = { ...this.state.error };
    if (isEmpty(name)) {
      error.nameErr = REQUIRED;
    }
    if (!!name && !string_regex.test(name)) {
      error.nameErr = INVALID;
    }
    if (isEmpty(confirmPassword)) {
      error.confirmPasswordErr = REQUIRED;
    }
    if (isEmpty(password)) {
      error.passwordErr = REQUIRED;
    }
    if (isEmpty(inviteCode)) {
      error.inviteCodeErr = REQUIRED;
    }
    if (isEmpty(email)) {
      error.emailErr = REQUIRED;
    }
    if (!isAgreeTermsAndCondition) {
      error.isAgreeTermsAndConditionErr = REQUIRED;
    }
    if (
      !!error?.isAgreeTermsAndConditionErr ||
      !!error?.emailErr ||
      !!error?.inviteCodeErr ||
      !!error?.passwordErr ||
      !!error?.confirmPasswordErr ||
      !!error?.nameErr
    ) {
      return false;
    } else {
      return true;
    }
  };

  submitSignUpForm = (e) => {
    e.preventDefault();
    const isValid = this.validateData();
    if (!isValid) {
      return;
    } else {
      // this.props.signUpRequestUser(this.state);
    }
  };

  render() {
    const {
      name,
      confirmPassword,
      email,
      error,
      inviteCode,
      isAgreeTermsAndCondition,
      password,
    } = this.state;

    return (
      <>
        <div className='signup_header pt-3'>
          <h5 className='signup_title text-center'>
            <span className=''>{SIGN_UP}</span>
          </h5>
        </div>
        <div className='modal-body mt-4'>
          <form>
            <div className='form-group row'>
              <div className='col-lg-6'>
                <label>{NAME}</label>
                <input
                  type={TEXT_TYPE}
                  name={NAME.toLowerCase()}
                  value={name}
                  className='form-control'
                  placeholder='Enter your name'
                  onChange={this.onFormDataChange}
                />
              </div>
              <div className='col-lg-6'>
                <label>{EMAIL_OR_PHONE}</label>
                <input
                  type={TEXT_TYPE}
                  name={EMAIL}
                  value={email}
                  className='form-control'
                  placeholder='Enter Email or Phone'
                  onChange={this.onFormDataChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-lg-6'>
                <label>{PASSWORD}</label>
                <input
                  type={PASSWORD.toLowerCase()}
                  name={PASSWORD.toLowerCase()}
                  value={password}
                  className='form-control'
                  placeholder='Enter Password'
                  onChange={this.onFormDataChange}
                />
              </div>
              <div className='col-lg-6'>
                <label>{CONFIRM_PASSWORD}</label>
                <input
                  type={PASSWORD.toLowerCase()}
                  name={CONFIRM_PASSWORD_KEY}
                  value={confirmPassword}
                  className='form-control'
                  placeholder='Enter Password'
                  onChange={this.onFormDataChange}
                />
              </div>
            </div>
            <div className='form-group row mb-5'>
              <div className='col-lg-6'>
                <label>{INVITE_CODE}</label>
                <input
                  type={TEXT_TYPE}
                  name={INVITE_CODE_KEY}
                  value={inviteCode}
                  className='form-control'
                  placeholder='Enter Invite Code'
                  onChange={this.onFormDataChange}
                />
              </div>
              <div className='col-lg-6'>
                <label />
                <div className='form-check'>
                  <input
                    type={CHECKBOX_TYPE}
                    name={IS_AGREE_TERMS_AND_CONDITION}
                    value={isAgreeTermsAndCondition}
                    className='form-check-input'
                    id='exampleCheck1'
                    onChange={() =>
                      this.setState({
                        isAgreeTermsAndCondition: !isAgreeTermsAndCondition,
                      })
                    }
                  />
                  <label className='form-check-label' htmlFor='exampleCheck1'>
                    By creating an account, you agree to our{' '}
                    <a className='signup_a' href='/#'>
                      Terms of use
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <div className='form-group text-center mt-4'>
              <button
                className='btn-signin my-2 my-sm-0'
                title='Sign Up'
                onClick={this.submitSignUpForm}
              >
                <img src={signupBtn} alt='Sign-up' />
              </button>
            </div>
            <div className='form-group text-center mt-4'>
              <p className='text-dark'>
                Already have an account?{' '}
                <button className='signup_a' title='Sign In'>
                  Sign In
                </button>
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default connect(null, { signUpRequestUser })(SignUp);

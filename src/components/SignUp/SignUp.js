import React, { Component } from 'react';
import signupBtn from 'assets/images/signup-btn.png';
import {
  CONFIRM_PASSWORD,
  CONFIRM_PASSWORD_KEY,
  EMAIL,
  EMAIL_OR_PHONE,
  INVITE_CODE,
  INVITE_CODE_KEY,
  IS_AGREE_TERMS_AND_CONDITION,
  NAME,
  PASSWORD,
  SIGN_UP,
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

  submitSignUpForm = () => {
    const { name, email, password, confirmPassword, inviteCode } = this.state;
  };

  render() {
    const {
      name,
      confirmPassword,
      password,
      email,
      inviteCode,
      isAgreeTermsAndCondition,
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
                  type='text'
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
                  type='text'
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
                  type='password'
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
                  type='password'
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
                  type='text'
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
                    type='checkbox'
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
              <a
                className='btn-signin my-2 my-sm-0'
                type='submit'
                title='Sign Up'
                href='/#'
                onClick={this.submitSignUpForm}
              >
                <img src={signupBtn} alt='Sign-up' />
              </a>
            </div>
            <div className='form-group text-center mt-4'>
              <p className='text-dark'>
                Already have an account?{' '}
                <a className='signup_a' href='/#' title='Sign In'>
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;

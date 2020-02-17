import React from "react";

function FormLogo(props) {
  return (
    <div className="sign-in-form-title">
      <img src="" className="img-logo" />
    </div>
  );
}

function FormInput(props) {
  return <input type={props.type} placeholder={props.placeholder} />;
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null
    };
  }

  render() {
    return (
      <div className="sign-in-form-wrapper container">
        <form className="sign-in-form">
          <FormLogo />
          <div className="form-section">
            <FormInput type="text" placeholder="Username" required />
          </div>
          <div className="form-section">
            <FormInput type="password" placeholder="Password" required />
          </div>
          <div className="form-section">
            <FormInput type="submit" value="Log in" disabled />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

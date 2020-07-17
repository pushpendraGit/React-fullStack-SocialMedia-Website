import React, { useReducer } from "react";
import { connect } from "react-redux";

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      password: "",

      confirmPassword: "",
      editMode: false,
    };
  }
  render() {
    const { user } = this.props.auth;

    const {editMode} = this.state;
    return (
      <div className="settings">
        <div className="img-container">
          <img
            src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
            alt="user-dp"
            id="user-dp"
          />
        </div>

        <div className="field">
          <div className="field-label">Email</div>
          <div className="field-value">{user.email}</div>
        </div>

        <div className="field">
          <div className="field-label">Name</div>
         {editMode ? (<input type="text" onChange = {() => this.handleChange()} value={this.state.name} /> ): (<div className="field-value">{user.name}</div>)}
        </div>


        {editMode && <div className="field">

        <div className="field-label">New Password</div>

        <input type="password" onChange = {() => this.handleChange()} value={this.state.password} /> 



        </div>}



        {editMode && <div className="field">

<div className="field-label">Confirm Password</div>

<input type="password" onChange = {() => this.handleChange()} value={this.state.confirmPassword} /> 



</div>}

<div className="btn-grp">
 
    {editMode ? (<button className="button save-btn">Save</button>) : 
    (<button className="button edit-btn">Edit Profile</button>) }

    {editMode && <div className="go-back">Go Back</div>}
</div>
      </div>


    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(Settings);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <ul className="right">
            <li>
              <a href="/auth/google">Login with GoogleOAuth</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="right">
            <li style={{margin:'0 22px 0 0'}}>
              <Payments />
            </li>
            <li style={{margin:'0 12px 0 0'}}>Credits: {this.props.auth.credits}</li>
            <li>
              <a href="/surveys/new">New Survey</a>
            </li>


            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue accent-4">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo left"
          >
            <img
              alt=""
              height={70}
              src="https://cdn.pixabay.com/photo/2013/07/12/19/33/carrier-pigeon-154970_960_720.png"
            />
          </Link>
          <Link
            className="brand-logo center hide-on-med-and-down"
            to={this.props.auth ? "/surveys" : "/"}
          >
            Pigeon
          </Link>

          {this.renderContent()}
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);

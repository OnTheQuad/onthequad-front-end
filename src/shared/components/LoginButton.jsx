'use strict';

var React = require('react');
var {Button} = require('react-bootstrap');
var config = require('../config');
var userActions = require('../UserActions');
var actions = require('../GlobalActions');
var LoginButton;

module.exports = LoginButton = React.createClass({
    goToLogin: function () {
        this.props.context.executeAction(userActions.signIn);
    },
    goToLogout: function () {
        this.props.context.executeAction(userActions.signOut);
    },
    render: function () {
        if(this.props.userModel.userID) {
            return (
                <Button onClick={this.goToLogout} className="navbar-btn btn-user">
                    <span className="glyphicon glyphicon-log-out" aria-hidden="true">
                        &nbsp;{this.props.userModel.name}
                    </span>
                </Button>
            );
        } else {
            return (
                <Button onClick={this.goToLogin} className="navbar-btn btn-user">
                    <span className="glyphicon glyphicon-log-in" aria-hidden="true"></span>
                </Button>
            );
        }
    }
});
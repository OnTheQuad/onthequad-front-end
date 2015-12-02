'use strict';

var React = require('react');
var NavCategories = require('./NavCategories');
var DesktopNavFilters = require('./DesktopNavFilters');
var DesktopNav;

module.exports = DesktopNav = React.createClass({
    render: function () {
        return (
            <div className="hidden-md hidden-sm hidden-xs">
            	<NavCategories {...this.props} />
                <DesktopNavFilters {...this.props} />
            </div>
        );
    }
});

var React = require("react");

var CheckboxInput = React.createClass({
  render: function () {
    return (
        <label>
            <input type="checkbox"
              name={this.props.name}
              checked={this.props.checked}
              onClick={this.handleChange}
              value={this.props.value} />
              {this.props.index + 1}. {this.props.label}
      </label>
    );
  },
  handleChange: function(e) {
      // Just a little preprocessing before passing upwards
      this.props.handleChange(this.props.index, e.target.checked);
  }
});
module.exports = CheckboxInput;
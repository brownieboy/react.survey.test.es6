var React = require("react");
var CheckboxInput = require("./CheckboxInput.jsx");
var CheckboxInputField = React.createClass({
    render: function() {
        var name = this.props.question.name;
        var that = this;
        var x = -1;
        var mappedInputElements = this.props.question.values.map(function(data, key) {
            x++;
            return (
              <CheckboxInput
                name={name}
                label={data.label}
                index={x}
                key={data.value}
                value={data.value}
                handleChange={that.handleFieldChange} />
            );
        });
        return (
            <div className="inputFieldWrapper">
                <p>{this.props.question.blurb}</p>
                {mappedInputElements}
            </div>
        );
    },
    handleFieldChange: function(elementIndex, elementChecked) {
        // A little more pre-processing, then pass the data upwards again
         this.props.handleFieldChange(this.props.index, elementIndex, elementChecked);
 
    }
});

module.exports = CheckboxInputField;

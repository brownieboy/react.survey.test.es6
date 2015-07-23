var React = require("react");
var CheckboxInputField = require("./CheckboxInputField.jsx");

var CheckboxInputFields = React.createClass({
    render: function() {
        var that = this;
        var x = -1;
        var mappedInputFields = this.props.questions.map(function(question, key) {
            x++;
            return (
              <CheckboxInputField
                question={question}
                index={x}
                key = {question.name}
                handleFieldChange={that.props.handleFieldChange} />
            );
        });
        return (
            <div>
                {mappedInputFields}
            </div>
        );
    }
});

 module.exports = CheckboxInputFields;
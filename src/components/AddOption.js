import React from 'react';

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('test');
    const option = e.target.elements.option.value.trim();
    if (!error) {
      e.target.elements.option.value = '';
    }
    // if function is explicitly return anything that will be errors
    const error = this.props.handleAddOption(option);
    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
      <div>
        {this.state.error && (
          <p className="add-option-error">{this.state.error}</p>
        )}
        <form className="add-option" onSubmit={this.handleSubmit} method="POST">
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

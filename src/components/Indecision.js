import React from 'react';

import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';
import AddOption from './AddOption';

export default class Indecision extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleClearPick = this.handleClearPick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // make options as state
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }

  // lifecycle method only in class base component
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => {
          return {
            options: options
          };
        });
      }
    } catch (e) {}
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmont() {
    console.log('deleted');
  }

  handlePick() {
    const index = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[index];
    this.setState(() => {
      return {
        selectedOption: option
      };
    });
  }

  handleClearPick() {
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleDeleteOption(option) {
    this.setState(prevState => {
      return {
        options: prevState.options.filter(op => op !== option)
      };
    });
  }

  handleAddOption(option) {
    if (!option) {
      return 'Enter valid value please';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This Option already exists';
    } else {
      this.setState(prevState => {
        return {
          options: prevState.options.concat(option)
          // options:prevState.options.concat([option])
        };
      });
    }
  }

  render() {
    const subtitle = 'Let Computer control your life';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearPick={this.handleClearPick}
        />
      </div>
    );
  }
}

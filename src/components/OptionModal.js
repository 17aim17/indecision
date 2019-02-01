import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      appElement={document.getElementById('app')}
      onRequestClose={props.handleClearPick}
    >
      <h3>Selected Option</h3>
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.handleClearPick}>Okay!</button>
    </Modal>
  );
};

export default OptionModal;

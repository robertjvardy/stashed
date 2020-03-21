import React, { useEffect, useRef } from "react";
import axios from "axios";
import { TextField, Button } from "@material-ui/core";
import Modal from "../../Modal/Modal";
import "./AddEquityModal.css";
import { verifyApiResponse } from "../../../utils";
import { useHistory } from "react-router-dom";

const Content = props => {
  const { tickerInput, handleAddEquity, handleFocus } = props;
  const handleKeyDown = event => {
    if (event.key == "Enter") handleAddEquity(tickerInput.current.value);
  };
  useEffect(() => {
    handleFocus();
    window.addEventListener("keydown", event => handleKeyDown(event));
  }, [tickerInput]);
  return (
    <>
      <h3>Add An Equity</h3>
      <TextField className="textField" label="Ticker" inputRef={tickerInput} />
      <Button
        id="add-button"
        variant="contained"
        color="secondary"
        onClick={() => handleAddEquity(tickerInput.current.value)}
      >
        Add
      </Button>
    </>
  );
};

const AddEquityModal = props => {
  const { addTicker, handleClose, open, setOpen } = props;
  const tickerInput = useRef(null);
  const history = useHistory();
  const handleAddEquity = async tckr => {
    const tckrUpper = tckr.toUpperCase();
    const response = await axios.get(
      "https://finnhub.io/api/v1/stock/profile",
      {
        params: {
          symbol: tckrUpper,
          token: "bpeg3mnrh5rckeckl8m0"
        }
      }
    );
    verifyApiResponse(response);
    addTicker(tckrUpper);
    // TODO this should be conditional on verifyApiResponse
    setOpen(false);
    history.replace("/");
  };
  const handleFocus = () => {
    tickerInput.current.focus();
  };
  return (
    <Modal isOpen={open} handleClose={handleClose}>
      <Content
        handleAddEquity={handleAddEquity}
        tickerInput={tickerInput}
        handleFocus={handleFocus}
      />
    </Modal>
  );
};

export default AddEquityModal;

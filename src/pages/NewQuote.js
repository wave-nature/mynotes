import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";

import useHttp from "../hooks/hooks/use-http";
import { addQuote } from "../lib/lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addNewQuoteHandler = (newQuoteData) => {
    sendRequest(newQuoteData);
  };

  return (
    <React.Fragment>
      <QuoteForm
        isLoading={status === "pending"}
        onAddQuote={addNewQuoteHandler}
      />
    </React.Fragment>
  );
};

export default NewQuote;

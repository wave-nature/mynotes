import React, { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/hooks/use-http";
import { getAllQuotes } from "../lib/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focus">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0))
    return <NoQuotesFound />;

  return (
    <React.Fragment>
      <QuoteList quotes={loadedQuotes} />
    </React.Fragment>
  );
};

export default AllQuotes;

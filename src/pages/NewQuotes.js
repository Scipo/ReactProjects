import { useHistory } from "react-router-dom";
import { useEffect } from "react";

import QuateForm from "../components/QuoteItems/QuoteForm";
import useHttp from "../components/hooks/use-http";
import { addQuote } from '../components/lib/api';

const NewQuotes = () => {
    const {sendRequest, status} = useHttp(addQuote);
    const history = useHistory();
    
    useEffect(() => {
        if (status === 'completed') {
          history.push('/quotes');
        }
      }, [status, history]);

    const addQuoteHandler = (quateData) =>{
        console.log(quateData)
        
        history.push('/quotes');
    };

    return <QuateForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />;
};

export default NewQuotes;
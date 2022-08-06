 import { useEffect } from "react";
import NoQuotesFound from "../components/QuoteItems/NoQuotesFound";
import QuoteList from "../components/QuoteItems/QuotesList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../components/hooks/use-http";
import { getAllQuotes } from "../components/lib/api";

 const DUMMY_QUOTES = [
    {id:'q1', author: 'Max', text: 'Learnig Ract is stupid'},
    {id:'q2', author:'By Huy', text:'React is fine'},
    {id:'q3', author:'Anonim', text:'React is not fine'},
];
const AllQuates = () => {
    const {sendRequest, status, data:loadedQuotes, error} = useHttp(
        getAllQuotes,
        true
    );
    useEffect(()=>{
        sendRequest();
    }, [sendRequest]);

    if(status === 'pending'){
        return(
            <div className='centered'>
            <LoadingSpinner />
          </div> 
        );
    }
    
    if(error){
        return <p className='centered focused'>{error}</p>;
    }

    if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
        return <NoQuotesFound />;
    }

    return(<QuoteList quotes={loadedQuotes}/>);
};


export default AllQuates;
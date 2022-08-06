import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/UI/HighlightedQuote';
import useHttp from '../components/hooks/use-http';
import { getSingleQuote } from '../components/lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const DUMMY_QUOTES = [
  {id:'q1', author: 'Max', text: 'Learnig Ract is stupid'},
  {id:'q2', author:'By Huy', text:'React is fine'},
  {id:'q3', author:'Anonim', text:'React is not fine'},
];

const QuoteDetail = () => {
  const match = useRouteMatch(); 
  const params = useParams();
  
  const quote = DUMMY_QUOTES.find(quate=>quate.id === params.quoteId);

  const { quoteId } = params;

  const { sendRequest, status, data: loadedQuote, error } = useHttp(
    getSingleQuote,
    true
  );

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }


  return (
    <Fragment>
    <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
    <Route path={match.path} exact>
      <div className='centered'>
        <Link className='btn--flat' to={`${match.url}/comments`}>
          Load Comments
        </Link>
      </div>
    </Route>
    <Route path={`${match.path}/comments`}>
      <Comments />
    </Route>
  </Fragment>
  );
};

export default QuoteDetail;
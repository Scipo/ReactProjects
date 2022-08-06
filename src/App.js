import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuates from './pages/AllQuates';
import QuoteDetail from './pages/QuoteDetail';
import NewQuates from './pages/NewQuotes';
import Layout from './components/navBar/Layout';
import NotFound from './pages/NoFound';


function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
          <Redirect to={'/quotes'}/>
      </Route>
      <Route path={'/quotes'} exact> 
          <AllQuates />
      </Route>
      <Route path={'/quotes/:quoteId'}>
            <QuoteDetail />
      </Route>
      <Route path={'/new-quote'}>
          <NewQuates/>
      </Route>
      <Route path={'*'}>
        <NotFound/>
      </Route>
    </Switch>
    </Layout> 
  );
}

export default App;

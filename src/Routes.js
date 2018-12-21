import React from 'react';
import {
    Router,
    Route
} from 'react-router-dom';
import Pool from './Pooling';
import Create from './Create';
import Vote from './Vote';


import createBrowserHistory from 'history/createBrowserHistory';

const customHistory = createBrowserHistory()

const MyRoutes = () => (
    <Router history={customHistory}>
        <div>
            <Route exact path="/" component={Pool} />
            <Route path="/create" component={Create} />
            <Route path="/Vote/:ind" component={Vote} />
            {/*<Route path="/contact/:username" component={Contact} />*/}
            {/*<Route component={Nothing} />*/}

        </div>
    </Router>
)

export default MyRoutes;
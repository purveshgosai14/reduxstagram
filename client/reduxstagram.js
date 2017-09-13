import React from 'react';

import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//Import Components
import Main from './components/Main';
import Single from './components/Single';

//Import react router deps
import { Router, Route, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <div>
    <Route path="/" component={Main}>
    </Route>
    <Route path="/view/:postId" component={Single}></Route>
        </div>
    </Router>
);
render(router, document.getElementById('root'));
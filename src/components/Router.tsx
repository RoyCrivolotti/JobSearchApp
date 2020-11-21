import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../pages/App';

// Import pages/layouts
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';
// import SignUp from '../pages/SignUp';

const Router = () => (
	<BrowserRouter>
		{/* <Navbar /> */}
		<Switch>
			<Route exact path='/' component={App} />
			<Route exact path='/signin' component={SignIn} />
			{/* <Route exact path='/signup' component={SignUp} /> */}
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;

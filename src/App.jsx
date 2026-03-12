// Main application component with routing
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Browse from './pages/Browse';
import Library from './pages/Library';
import Search from './pages/Search';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Router>
            <Navigation />
            <Sidebar />
            <Switch>
                <Route path="/browse" component={Browse} />
                <Route path="/library" component={Library} />
                <Route path="/search" component={Search} />
                <Route path="/" component={Browse} />
            </Switch>
        </Router>
    );
}

export default App;
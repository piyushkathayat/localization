import React, { Component } from 'react';
import Menu from './components/AppMenu';
import { Route } from 'react-router-dom';
import Products from './components/Products';
import Posts from './components/Posts';
import Admin from './components/Admin';
import Home from './components/Home';
import Switch from 'react-router-dom/Switch';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div>
                    <Switch>
                        <Route
                            path="/products"
                            render={(props) => <Products {...props} />}
                        />
                        <Route path="/posts" component={Posts} />
                        <Route path="/admin" component={Admin} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </div >
        )
    }
}

export default App;
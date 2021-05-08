import React, { Component } from 'react';
import Menu from './components/AppMenu';
import { Route, Redirect, Switch } from 'react-router-dom';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Posts from './components/Posts';
import Admin from './components/admin/Admin';
import AdminPosts from './components/admin/Post';
import Users from './components/admin/Users';
import Home from './components/Home';
import NotFound from './components/NotFound';

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
                        <Route path="/product/:id" render={(props) => <ProductDetail {...props} />} />
                        <Route path="/posts/:year?/:month?" component={Posts} />
                        <Route path="/admin/users" component={Users} />
                        <Route path="/admin/posts" component={AdminPosts} />
                        <Route path="/admin" component={Admin} />
                        <Redirect from="/admins" to="/admin" />
                        <Route path="/no-page" component={NotFound} />
                        <Route path="/" exact component={Home} />
                        <Redirect to="no-page" />
                    </Switch>
                </div>
            </div >
        )
    }
}

export default App;

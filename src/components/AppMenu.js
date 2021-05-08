import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LocaleDropdown from '../containers/LocaleDropdown';

export default class AppMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    render() {
        const { activeItem } = this.state
        return (
            <Menu size='small'>
                <Menu.Item as={Link} to="/"
                    name="Home"
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item link
                    as={Link} to="/products"
                    name='products'
                    active={activeItem === 'products'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link} to="/posts"
                    name='posts'
                    active={activeItem === 'posts'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    as={Link} to="/admin"
                    name='admin'
                    active={activeItem === 'admin'}
                    onClick={this.handleItemClick}
                />

                <Menu.Menu position='right'>
                    <LocaleDropdown />
                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

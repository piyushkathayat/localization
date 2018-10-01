import React, { Component } from 'react';
import { Button, Dropdown, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class AppMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    }

    onDropdownChange = (e, { value }) => { console.log("dropdown clicked :", value) };
    options = [
        { text: 'Deutsch', value: 'de' },
        { text: 'Italien', value: 'it' },
        { text: 'French', value: 'fn' },
        { text: 'English', value: 'en' },
    ]
    render() {
        const { activeItem } = this.state
        return (
            <Menu size='small'>
                <Menu.Item as={Link} to="/"
                    name='home'
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
                    <Dropdown item text='Language'
                        onChange={this.onDropdownChange}
                        options={this.options}>
                    </Dropdown>

                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

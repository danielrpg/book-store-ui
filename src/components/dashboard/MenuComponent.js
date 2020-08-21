import React from 'react';
import {
    Container,
    Dropdown,
    Menu,
  } from "semantic-ui-react";
import { Redirect } from 'react-router-dom';

export const MenuComponent = () => {

  const redirectTo = (path) => {
    console.log(path);
    
  }

  return (
      <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          Book Store
        </Menu.Item>
        <Menu.Item as='a'>Home</Menu.Item>

        <Dropdown item simple text='Book'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => redirectTo('add-book')}>Add New Book</Dropdown.Item>
            <Dropdown.Item>List of Books</Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
  );
}
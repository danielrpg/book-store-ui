import React from 'react';
import {
    Container,
    Header,
  } from "semantic-ui-react";
import { MenuComponent } from "../dashboard/MenuComponent";
import { FooterComponent } from "../dashboard/FooterComponent";
import { BookFormComponent } from './BookFormComponent';

export const AddBookComponent = () => {

    return (
        <>
            <MenuComponent />
                <Container text style={{ marginTop: '7em' }}>
                    <Header as='h1'>Add New Book </Header>
                    <hr />
                    <BookFormComponent />
                </Container>
            <FooterComponent />
        </>
    );
}
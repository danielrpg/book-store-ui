import React from "react";
import {
  Container,
  Header,
} from "semantic-ui-react";
import { MenuComponent } from "./MenuComponent";
import { FooterComponent } from "./FooterComponent";
import { ListBooksComponent } from "./ListBooksComponent";

export const DashboardComponent = () => {

  return (
    <>
      <MenuComponent />
      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>List of Books</Header>
        <hr />
        <ListBooksComponent />
      </Container>
      <FooterComponent />
    </>
  )
};

import React from "react";
import {
  Grid,
  Header,
  Image,
  Segment,
  Form,
  Button,
  Message,
} from "semantic-ui-react";
import logo from "./images/logo.png";

const App = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        <Image src={logo} /> Book Store
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button type="submit" color="teal" fluid size="large">
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href="/sigin">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
);

export default App;

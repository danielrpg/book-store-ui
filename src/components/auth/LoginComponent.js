import React, { useState } from "react";
import {
  Grid,
  Header,
  Image,
  Segment,
  Form,
  Button,
  Message,
} from "semantic-ui-react";
import { signin } from "../../services/LoginService";
import logo from "../../images/logo.png";

export const LoginComponent = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const loginAccess = () => {
    const user = { username, password };
    signin(user).then((data) => {
      console.log(data.data);
    });
  };

  return (
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
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              color="teal"
              fluid
              size="large"
              onClick={(e, data) => loginAccess()}
            >
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
};

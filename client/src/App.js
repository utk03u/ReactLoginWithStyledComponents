import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const ContentColor = '#676767';
const Heading = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
`;
const List = styled.li`
  display: inline;
  padding: 5px 10px;
  text-decoration: none;
`;
const ReactLink = styled(Link)`
  color: #ababab;
  text-decoration: none;
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: #488492;
    transition: 0.2s;
  }
`;
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15rem;
  @media (max-width: 1024px) {
    padding: 0 7em;
  }
  @media (max-width: 640px) {
    padding: 0 5rem;
  }
`;
const Content = styled.p`
  color: ${ContentColor};
  text-align: justify;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 1;
  @media (min-width: 1624px) {
    margin: 0 20em;
  }
`;
const FormInput = styled.input`
  margin: 10px 0;
  border-radius: 5px;
  padding: 8px;
  border-color: #eee;
  border-style: solid;
`;
const FormSubmit = styled.input`
  background: #f5543d;
  border: transparent;
  height: 3em;
  border-radius: 5px;
  color: white;
`;
const App = () => {
  return (
    <Router>
      <nav>
        <Heading>
          <List>
            <ReactLink to='/'>Home</ReactLink>
          </List>
          <List>
            <ReactLink to='/contact'>Contact</ReactLink>
          </List>
          <List>
            <ReactLink to='/Login'>Login</ReactLink>
          </List>
          <List>
            <ReactLink to='/SignUp'>Sign Up</ReactLink>
          </List>
        </Heading>
      </nav>
      <Route path='/' exact component={Home} />
      <Route path='/contact' exact component={Contact} />
      <Route path='/login' exact component={Login} />
      <Route path='/signup' exact component={SignUp} />
    </Router>
  );
};
const Home = () => {
  return (
    <Container>
      <Content>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Content>
    </Container>
  );
};
const Contact = () => {
  return <p>Contact us</p>;
};
const Login = () => {
  return <p>Login</p>;
};
class SignUp extends Component {
  state = {
    value: '',
    email: '',
    password: ''
  };
  handleSubmit = e => {
    alert('Form submitted ' + this.state.value);
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  handleChangeEmail = e => {
    this.setState({
      email: e.target.email
    });
  };
  handleChangePassword = e => {
    this.setState({
      password: e.target.password
    });
  };
  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
            placeholder='Name'
          />
          <FormInput
            type='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />
          <FormInput
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <FormInput
            type='password'
            placeholder='Re-type Password'
            value={this.state.password}
            onChange={this.handleChangePassword}
          />
          <FormSubmit type='submit' value='Submit' />
        </Form>
      </Container>
    );
  }
}
// const SignUp = () => {
//   return <p>Sign Up</p>;
// };
export default App;

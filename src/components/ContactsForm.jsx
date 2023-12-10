import { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: 20px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid black;
  border-radius: 15px;
`;

const Button = styled.button`
  padding: 5px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: lightblue;
  font-size: 16px;
`;

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
    e.target.reset();
  };

  render() {
    return (
      <Form onSubmit={this.onFormSubmit}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          onChange={this.onInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          onChange={this.onInputChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactsForm;

import styled from 'styled-components';

const Ul = styled.ul`
  list-style-type: none;
  margin-top: 20px;
  padding: 0;
  margin: 20px;
`;

const Li = styled.li`
  width: 300px;
  height: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 7px;
  border: 1px solid black;
  border-radius: 15px;
  background-color: lightblue;
`;

const ContactsList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <Ul>
      {visibleContacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </Button>
        </Li>
      ))}
    </Ul>
  );
};

export default ContactsList;

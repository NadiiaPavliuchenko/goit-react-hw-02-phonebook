import styled from 'styled-components';

const Div = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid black;
  border-radius: 15px;
`;

const Filter = props => {
  return (
    <Div>
      <label htmlFor="filter">Find contacts by name</label>
      <Input type="text" name="filter" onChange={props.onInputChange} />
    </Div>
  );
};

export default Filter;

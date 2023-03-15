import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

const getBgColor = variant => {
  switch (variant) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'blue';
    case 'bad':
      return 'red';
    default:
      return 'inherit';
  }
};

export const Item = styled.li``;

export const Btn = styled.button`
  width: 100px;
  cursor: pointer;
  padding: 5px 10px;
  background-color: white;
  text-transform: capitalize;
  border: 1px solid black;
  border-radius: 5px;
  :active {
    color: white;
    background-color: ${props => getBgColor(props.option)};
  }
`;

import styled from 'styled-components';

const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const List = styled.li`
  background-color: ${(props) => (props.active ? 'red' : 'transparent')};
  transition: all 0.3s ease;
  &:hover {
    background-color: blue;
  }
  position: relative;
  &::after {
    content: ${(props) => `${props.index + 1}`};
    position: absolute;
    top: 20px;
    right: 20px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default {
  ListContainer,
  List,
};

import styled from 'styled-components';

const sizeChooser = (type) => {
  switch (type) {
    case 'sm':
      return 6;
    case 'md':
      return 9;
    case 'lg':
      return 15;
    case 'xl':
      return 21;
    default:
      return 3;
  }
};
export const KaoSpace = styled.div`
  height: ${props => props.size && sizeChooser(props.size) || 1}px;
`;

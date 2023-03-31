import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: disc;
  width: 500px;
  padding: ${p => p.theme.space[3]}px;
`;
export const ItemData = styled.span`
  /* width: 100px; */
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
`;

export const DeleteBtn = styled.button`
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes[0]}px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  background-color: ${p => p.theme.colors.delete};
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  transform: scale(1);
  transition: transform ${p => p.theme.transitions.ease},
    box-shadow ${p => p.theme.transitions.ease};
  :hover {
    box-shadow: ${p => p.theme.shadows.hover};
  }
  :active {
    transform: scale(0.95);
  }
`;

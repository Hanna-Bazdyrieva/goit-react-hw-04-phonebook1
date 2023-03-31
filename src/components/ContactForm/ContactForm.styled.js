import styled from 'styled-components';

export const InputLabel = styled.label`
  padding: ${p => p.theme.space[2]}px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
`;
export const Input = styled.input`
  margin: ${p => p.theme.space[2]}px auto;

  width: ${p => p.theme.sizes[1]}px;
  padding: ${p => p.theme.space[2]}px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-transform: capitalize;
  line-height: 30px;
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid rgb(89 81 81);
`;

export const AddBtn = styled.button`
  margin: ${p => p.theme.space[4]}px auto;
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes[1]}px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  background-color: ${p => p.theme.colors.add};
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

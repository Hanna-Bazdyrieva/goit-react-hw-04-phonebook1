import styled from 'styled-components';

export const Input = styled.input`
  padding: ${p => p.theme.space[2]}px;
  text-align: center;
  width: ${p => p.theme.sizes[1]}px;

  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 30px;
  border-radius: ${p => p.theme.radii.normal};
  border: 1px solid rgb(89 81 81);
`;
export const Title = styled.h3`
  padding: ${p => p.theme.space[4]}px 0;
  margin: 0 auto;

  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-transform: capitalize;
`;

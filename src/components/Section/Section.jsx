import { SectionStyled, Title } from './Section.styled';
import PropTypes from 'prop-types';

function Section({ children, title }) {
  return (
    <SectionStyled>
      {title && <Title>{title}</Title>}
      {children}
    </SectionStyled>
  );
}
Section.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Section;

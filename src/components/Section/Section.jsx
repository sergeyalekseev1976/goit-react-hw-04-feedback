import PropTypes from 'prop-types';
import { Section, Title } from './Section.styled';

export const SectionBox = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

SectionBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

import PropTypes from 'prop-types';
import { Btn, List, Item } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => (
      <Item key={option}>
        <Btn
          type="button"
          option={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Btn>
      </Item>
    ))}
  </List>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

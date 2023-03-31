import { Box } from 'components/Box/Box';
import { Input, Title } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ filter, changeFilter }) => {
  return (
    <Box as="ul" mx="auto" my={2} px={6} py={4} bg="list" borderRadius="10px">
      <Title>Find contacts by name</Title>
      <Input
        name="text"
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Enter something..."
      />
    </Box>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
export default Filter;

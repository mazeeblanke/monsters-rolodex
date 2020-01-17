import React from 'react';
import PropTypes from 'prop-types';

import './search-box.component';

const SearchBox = ({ placeholder, handleChange }) => {
	return (
		<input  
			type="text" 
			onChange={handleChange}
			placeholder={placeholder} 
		/>
	);
};


SearchBox.propTypes = {
	
};


export default SearchBox;

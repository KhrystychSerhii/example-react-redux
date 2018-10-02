import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';


class SearchInput extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { onChange, value } = this.props;
		return (
			<Menu.Item>
				<Input icon='search' placeholder='Search...' onChange={onChange} value={value} />
			</Menu.Item>
		)
	}
}

export default SearchInput;
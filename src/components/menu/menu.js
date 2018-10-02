import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectClients, selectClientSelectedIndex, selectLoader } from '../../selectors';

import { getClients } from '../../actions';

import { Menu as SemanticMenu, Loader, List } from 'semantic-ui-react';
import { findIndex, isEqual } from 'lodash';

import { Client, SearchInput } from '../';

import './menu.css';

class Menu extends Component {
	state = {
		searchBy: ''
	};

	componentDidMount() {
		const { getClients } = this.props;
		getClients();
	}


	onSearchByChange = (e) => {
		this.setState({ searchBy: e.target.value });
	};

	selectClient = (client) => {
		const { clients, selectClientIndex } = this.props;
		const index = findIndex(clients, (c) => {
			return isEqual(client, c);
		});

		selectClientIndex(index);
	};

	render() {
		const { clients, selectedIndex, loader, ownProps } = this.props;

		const visibleItems = clients
			.filter((c) => {
				if (this.state.searchBy === '') return true;

				const allInfo = {...c.general, ...c.job, ...c.contact, ...c.address};
				let result = false;
				const searchBy = this.state.searchBy.toLowerCase();

				for (let key in allInfo) {
					if (key !== 'avatar') {
						result = allInfo[key].toLowerCase().indexOf(searchBy) === 0; // search by first letters
						if (result) break;
					}
				}

				return result;
			});

		return (
			<SemanticMenu fluid vertical tabular>
				{
					!loader && <SearchInput onChange={this.onSearchByChange} value={this.state.searchBy} />
				}
				{
					loader ? <Loader active /> :
					visibleItems.length > 0 ?
						visibleItems.map((c, i) => <Client key={i} client={c} onClick={this.selectClient} active={i === selectedIndex} />) :
					<div className="no-search-results">
						No search results by '{this.state.searchBy}' value
					</div>
				}
			</SemanticMenu>
		)
	}
}

const mapStateToProps = (state) => createStructuredSelector({
	clients: selectClients(),
	loader: selectLoader(),
	selectedIndex: selectClientSelectedIndex()
});
const mapDispatchToProps = dispatch => ({
	selectClientIndex: (selectedIndex) => { dispatch({type: 'SELECT_CLIENT_INDEX', selectedIndex}) },
	getClients: () => { dispatch(getClients()) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);
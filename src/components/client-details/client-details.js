import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { Segment, Grid, Image } from 'semantic-ui-react';

import { selectClientDetails } from '../../selectors';

import './client-details.css';

const Value = ({property, value}) => (
	<div className="value">
		<div className="property">{property}</div>
		<div className="value">{value}</div>
	</div>
);


class ClientDetails extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { clientDetails } = this.props;

		return (
			<Segment>
				{
					!!clientDetails &&
					<Grid>
						<Grid.Column width={4}>
							<Image className="client-image" src={clientDetails.general.avatar} />
						</Grid.Column>
						<Grid.Column width={12}>
							<Value property="Name" value={`${clientDetails.general.firstName} ${clientDetails.general.lastName}`} />
							<Value property="Job" value={`${clientDetails.job.title} at ${clientDetails.job.company}`} />
							<Value property="Phone" value={clientDetails.contact.phone} />
							<Value property="Email" value={clientDetails.contact.email} />
							<Value property="Address" value={`${clientDetails.address.country}, ${clientDetails.address.city}, ${clientDetails.address.street}, ${clientDetails.address.zipCode}`} />
						</Grid.Column>
					</Grid>
				}
			</Segment>
		)
	}
}

const mapStateToProps = state => createStructuredSelector({
	clientDetails: selectClientDetails()
});
const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ClientDetails);
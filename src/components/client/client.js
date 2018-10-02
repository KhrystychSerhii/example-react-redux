import React, { Component } from 'react';
import { Menu, Feed } from 'semantic-ui-react';

import './client.css'

class Client extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { client, active, onClick } = this.props;

		return (
			<Menu.Item name={client.name} active={active} onClick={() => onClick(client) }>
				<Feed>
					<Feed.Event>
						<Feed.Label className="client-avatar" image={client.general.avatar} />
						<Feed.Content>
							<Feed.Summary>
								<div>{client.general.firstName} {client.general.lastName}</div>
								<div>{client.job.title} at {client.job.company}</div>
							</Feed.Summary>
						</Feed.Content>
					</Feed.Event>
				</Feed>
			</Menu.Item>
		)
	}
}

export default Client;
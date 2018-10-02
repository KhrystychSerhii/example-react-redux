import React, { Component } from 'react';
import { Container, Header, Grid, Input, Segment } from 'semantic-ui-react';

// components
import { ClientDetails, Menu } from './components';

import './App.css';


class App extends Component {

	render() {
		return (
            <Container>
                <Header as='h3' textAlign="center" attached="top">
                    ReactJs Redux example
                </Header>
                <Grid>
                    <Grid.Column width={5}>
                        <Menu />
                    </Grid.Column>
                    <Grid.Column stretched width={11}>
                        <ClientDetails />
                    </Grid.Column>
                </Grid>
            </Container>
		);
	}
}

export default App;

import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { Div, CardContainer, PrimaryText } from '../styles/main'
// @ts-ignore
import { DataStore } from '@aws-amplify/datastore';
import { Person } from '../models';
import { Card, GoConer } from '../styles/Card';
interface Props {

}
interface State {
    persons: any;
}

export default class Persons extends Component<Props, State> {
    state: State = {
        persons: [],
    };
    async componentDidMount() {
        const persons = await DataStore.query(Person);
        this.setState({ persons })
    }
    render() {
        const { persons } = this.state
        console.log(persons)
        return (
            <Div>
                <div>
                    <Nav home records firestation />
                </div>
                <CardContainer>
                    {persons.map((person: any) => {
                        return (
                            <Card>
                                <h3><PrimaryText>First Name:</PrimaryText> {person.firstName}</h3>
                                <h3><PrimaryText>Last Name:</PrimaryText> {person.lastName}</h3>
                                <h3><PrimaryText>Birth Date:</PrimaryText> {person.birthDate}</h3>
                                <GoConer className="go-corner">
                                    <div className="go-arrow">
                                        →
                                    </div>
                                </GoConer>
                            </Card>
                        )
                    })}
                </CardContainer>
            </Div>
        )
    }
}

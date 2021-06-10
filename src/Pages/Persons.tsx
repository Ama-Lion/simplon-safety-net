import React, { Component } from 'react'
import PersonCard from '../Components/PersonCard'
import Nav from '../layouts/Nav'
import { Div, CardContainer } from '../styles/main'
// @ts-ignore
import { DataStore } from '@aws-amplify/datastore';
import { Person } from '../models';
interface Props {
    
}
interface State {
    persons: any;
}

export default class Persons extends Component<Props, State> {
    state: State = {
        persons: [],
    };
    async componentDidMount(){
        const models = await DataStore.query(Person);
        this.setState({persons: models})
    }
    render() {
        const {persons} = this.state
        // console.log(persons)
        return (
            <Div>
                <div>
                 <Nav home records firestation/>
                </div>
                <CardContainer>
                {persons.map((person: any) =>{
                    return (

                            <PersonCard
                                firstName={person.firstName}
                                lastName={person.lastName}
                                birthDate={person.birthDate}
                                medications={person.medications}
                                allergies={person.allergies}
                            />
                            )
                        })}
                        </CardContainer>
            </Div>
        )
    }
}

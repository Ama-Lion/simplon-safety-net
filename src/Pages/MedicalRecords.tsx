import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { CardContainer, Div, PrimaryText } from '../styles/main'
import { MedicalRecord } from '../models';
import { DataStore } from '@aws-amplify/datastore';
import { Card, GoConer } from '../styles/Card';

interface Props {

}
interface State {
    records: any,
}

export default class MedicalRecords extends Component<Props, State> {
    state: State = {
        records: [],
    }

    async componentDidMount() {
        const records = await DataStore.query(MedicalRecord);
        this.setState({ records });
    }

    render() {
        const { records } = this.state;
        console.log(records);
        return (
            <Div>
                <div>
                    <Nav persons home firestation />
                </div>
                <CardContainer>
                    {records.map((record: any) => {
                        return (
                            <Card>
                                <h3><PrimaryText>First Name:</PrimaryText> {record.firstName}</h3>
                                <h3><PrimaryText>Last Name:</PrimaryText> {record.lastName}</h3>
                                <h3><PrimaryText>Birth Date:</PrimaryText> {record.birthDate}</h3>
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

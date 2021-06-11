import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { CardContainer, Div } from '../styles/main'
import { MedicalRecord } from '../models';
import { DataStore } from '@aws-amplify/datastore';
import RecordCard from '../Components/RecordCard';

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
                            <RecordCard
                                firstName={record.firstName}
                                lastName={record.lastName}
                                birthDate={record.birthDate}
                                medications={record.medications}
                                allergies={record.allergies}
                            />
                        )
                    })}
                </CardContainer>
            </Div>
        )
    }
}

import React, { Component } from 'react'
import Nav from '../layouts/Nav'
import { CardContainer, Div, NotFoundTitle, PrimaryText } from '../styles/main'
import { MedicalRecord } from '../models';
import { DataStore } from '@aws-amplify/datastore';
import { Card, GoConer, Trash } from '../styles/Card';
import { Link } from 'react-router-dom';
import { ActionNav } from '../styles/nav';
import { AnimatedButtonStyle } from '../styles/Modal';

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
        console.log(records)
    }
    handleDelete = async (id?: any) => {
        const todelete = await DataStore.query(MedicalRecord, `${id}`);
        // @ts-ignore
        DataStore.delete(todelete);
        const records = await DataStore.query(MedicalRecord);
        this.setState({ records })
    }

    render() {
        const { records } = this.state;
        console.log(records)
        return (
            <Div>
                <div>
                    <Nav persons home firestation />
                </div>
                <ActionNav>
                    <h1>All Records</h1>
                    <AnimatedButtonStyle whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                        Add a Record
                    </AnimatedButtonStyle>
                </ActionNav>
                {records.length === 0 ?   <NotFoundTitle>Sorry no records available</NotFoundTitle>: <CardContainer>
                    
                    {records.map((record: any) => {
                        return (
                            <Card key={record.id}>
                                <Trash onClick={() => this.handleDelete(record.id)}>
                                    <img src="https://img.icons8.com/carbon-copy/35/000000/trash.png" />
                                </Trash>
                                <h3><PrimaryText>First Name:</PrimaryText> {record.firstName}</h3>
                                <h3><PrimaryText>Last Name:</PrimaryText> {record.lastName}</h3>
                                <h3><PrimaryText>Birth Date:</PrimaryText> {record.birthDate}</h3>
                                <Link to={`/medical-records/${record.id}`} >
                            <GoConer className="go-corner">
                                <div className="go-arrow">
                                    →
                                </div>
                            </GoConer>
                        </Link>
                            </Card>
                            
                        )
                    })}
                </CardContainer>  }
            </Div>
        )
    }
}

import React, { ReactElement } from 'react'
import { Card } from '../../styles/Card'
import { CardContainer, PrimaryText } from '../../styles/main'

interface Props {
    record: any;
}

export default function RecordInfoComponent({ record }: Props): ReactElement {
    return (
        <div style={{ display: 'flex', margin: "3em", flexWrap: 'wrap', justifyContent: 'center' }} >
            <div>
                {record.map((record: any) => {
                    return (
                        <Card>
                            <h1>Personal Info</h1>
                            <h3><PrimaryText>First Name:</PrimaryText> {record.firstName}</h3>
                            <h3><PrimaryText>Last Name:</PrimaryText> {record.lastName}</h3>
                            <h3><PrimaryText>Birth Date:</PrimaryText> {record.birthDate}</h3>
                        </Card>
                    )
                })}
                
            </div>
            <div>
            {record.map((record: any) => {
                    return (
                        <Card>
                        <h1>Allergies</h1>
                        <h3>
                            <ul style={{margin: "0px"}}>
                                {record.allergies.map((txt: any) => <li>{txt}</li>)}
                            </ul>
                        </h3>
                    </Card>
                    )
                })}
            </div>
            <div>
            {record.map((record: any) => {
                    return (
                        <Card>
                        <h1>Medications</h1>
                        <h3>
                            <ul style={{margin: "0px"}}>
                                {record.medications.map((txt: any) => <li>{txt}</li>)}
                            </ul>
                        </h3>
                    </Card>
                    )
                })}
            </div>
        </div>
    )
}

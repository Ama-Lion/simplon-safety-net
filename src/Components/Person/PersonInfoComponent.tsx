import React, { ReactElement } from 'react'
import { Card } from '../../styles/Card'
import { CardContainer, PrimaryText } from '../../styles/main'

interface Props {
    person: any;
    firestation: any;
    medicalRecord: any;
}

export default function PersonInfoComponent({ person, firestation, medicalRecord }: Props): ReactElement {
    return (
        <div style={{ display: 'flex', margin: "3em",  justifyContent: 'center', width: "100%"}} >
            <div>
                {person.map((person: any) => {
                    return (
                        <Card key={person.id}>
                            <h1>Personal Info</h1>
                            <h3><PrimaryText>First Name:</PrimaryText> {person.firstName}</h3>
                            <h3><PrimaryText>Last Name:</PrimaryText> {person.lastName}</h3>
                        </Card>
                    )
                })}
                {person.map((person: any) => {
                    return (
                        <Card key={person.id}>
                            <h1>Contact</h1>
                            <h3><PrimaryText>Email:</PrimaryText> {person.email}</h3>
                            <h3><PrimaryText>Phone:</PrimaryText> {person.phone}</h3>
                        </Card>
                    )
                })}
            </div>
            {/* <div> */}
                {person.map((person: any) => {
                    return (
                        <Card key={person.id}>
                            <h1>Location</h1>
                            <h3><PrimaryText>Adddress:</PrimaryText> {person.adddress}</h3>
                            <h3><PrimaryText>City:</PrimaryText> {person.city}</h3>
                            <h3><PrimaryText>Zip:</PrimaryText> {person.zip}</h3>
                        </Card>
                    )
                })}
                {firestation.map((firestation: any) => {
                    return (
                        <Card key={person.id}>
                            <h1>Firestation</h1>
                            <h3><PrimaryText>Station:</PrimaryText> {firestation.station}</h3>
                            <h3><PrimaryText>Address</PrimaryText> {firestation.address}</h3>
                        </Card>
                    )
                })}
                {medicalRecord.map((medicalRecord: any) => {
                    return (
                        <Card key={medicalRecord.id}>
                            <h1>Medical Record</h1>
                            <h3><PrimaryText>Birth Date:</PrimaryText> {medicalRecord.birthDate}</h3>
                            <h3>
                                <PrimaryText>Allergies</PrimaryText>
                                <ul>
                                    {medicalRecord.allergies.map((txt: any) => <li>{txt}</li>)}

                                </ul>
                            </h3>
                            <h3>
                                <PrimaryText>Medications</PrimaryText>
                                <ul>
                                    {medicalRecord.medications.map((txt: any) => <li>{txt}</li>)}

                                </ul>
                            </h3>
                        </Card>
                    )
                })}
            {/* </div> */}
        </div>
    )
}

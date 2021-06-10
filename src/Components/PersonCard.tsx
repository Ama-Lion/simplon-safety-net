import React, { ReactElement } from 'react'
import { Card, GoConer } from '../styles/Card'

interface Props {
    firstName: string;
    lastName: string;
    birthDate: string;
    medications: string;
    allergies: string;
}

export default function PersonCard({firstName, lastName, birthDate, medications, allergies}: Props): ReactElement {
    return (
        <Card>
                <h3>First Name {firstName}</h3>
                <h3>First Name {lastName}</h3>
                <h3>First Name {birthDate}</h3>
                <h3>First Name {medications}</h3>
                <h3>First Name {allergies}</h3>
                <GoConer className="go-corner">
                    <div className="go-arrow">
                        →
                    </div>
                </GoConer>
        </Card>
    )
}

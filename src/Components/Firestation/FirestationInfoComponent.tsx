import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Card, GoConer, Trash } from '../../styles/Card'
import { CardContainer, NotFoundTitle, PrimaryText } from '../../styles/main'

interface Props {
    persons: any;
}

export default function FirestationInfoComponent({ persons }: Props): ReactElement {
    return (
        <div style={{ display: 'flex', margin: "3em", flexWrap: 'wrap', justifyContent: 'center' }} >
                  {
                    persons.length === 0 ?   <NotFoundTitle>Sorry no Persons available available</NotFoundTitle>: 
            <CardContainer>
                {persons.map((person: any) => {
                    return (
                        <Card>
                        <Trash>
                            <img src="https://img.icons8.com/carbon-copy/35/000000/trash.png"/>
                        </Trash>
                        <h3><PrimaryText>First Name:</PrimaryText> {person.firstName}</h3>
                        <h3><PrimaryText>Last Name:</PrimaryText> {person.lastName}</h3>
                        <Link to={`/persons/${person.id}`} >
                            <GoConer className="go-corner">
                                <div className="go-arrow">
                                    →
                                </div>
                            </GoConer>
                        </Link>
                    </Card>
                    )
                })}
            </CardContainer>}
            
        </div>
    )
}

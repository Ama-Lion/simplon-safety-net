import React, { ReactElement } from 'react'
import { Link } from "react-router-dom";
import { Div } from '../styles/main';

import { Ul, ListItem } from '../styles/nav'

interface Props {
    home?: boolean;
    persons?: boolean;
    records?: boolean;
    firestation?: boolean;
}

export default function Nav({ home, persons, records, firestation }: Props): ReactElement {
    return (
        <Div>
            <Ul>
                {home && <Link to="/">
                    <li>
                        <ListItem>
                            <img src="https://img.icons8.com/cotton/70/000000/home--v2.png" />
                        </ListItem>
                    </li>
                </Link>}
                {
                    persons && <Link to="/persons">
                        <li>
                            <ListItem>
                                <img src="https://img.icons8.com/office/70/000000/crowd.png" />
                            </ListItem>
                        </li>
                    </Link>
                }
                {records && <Link to="/medical-records">
                    <li>
                        <ListItem>
                            <img src="https://img.icons8.com/dotty/70/000000/treatment-plan.png" />
                        </ListItem>
                    </li>
                </Link>}
                {firestation &&
                    <Link to="/firestations">
                        <li>
                            <ListItem>
                                <img src="https://img.icons8.com/cotton/70/000000/fire-station.png" />
                            </ListItem>
                        </li>
                    </Link>}
            </Ul>
        </Div>
    )
}


import React from 'react'

import { Ul, ListItem } from '../styles/nav'

interface Props {
    
}

export const Nav = (props: Props) => {
    return (
        <div>
            <Ul>
                <li>
                    <ListItem>
                        hello
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        hello
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        hello
                    </ListItem>
                </li>
                <li>
                    <ListItem>
                        hello
                    </ListItem>
                </li>
            </Ul>
        </div>
    )
}
import React, { ReactElement } from 'react'
import { Spinner } from '../styles/main'

interface Props {
    
}

export default function Looding({}: Props): ReactElement {
    return (
        <Spinner>
            <img src="https://i.pinimg.com/originals/e4/f4/5b/e4f45ba0bf3c96a366af88f84dbb199a.jpg" alt=""  width="400" className="rotate" />
        </Spinner>
    )
}

import React from 'react'
import './NavigationBar.css'
import { useHistory } from 'react-router-dom'
import LogoType from '../../shared/images/logotype.svg'

export const NavigationBar = () => {
    const history = useHistory()

    return (
        <div className="NavigationBarWrapper">
            <img onClick={() => history.push('/')}
            className="LogoType"
            src={LogoType} 
            alt="oops" />
            <span className="View1" onClick={() => history.push('/View1', 'hej')}>View1</span>
            <span className="View2" onClick={() => history.push('/View2', 'då')}>View2</span>
        </div>
    )
}

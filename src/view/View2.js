import React from 'react'
import { useLocation } from 'react-router-dom'

export const View2 = () => {
    const location = useLocation()

    return (
        <div>
            <h1>{location.state}</h1>
        </div>
    )
}

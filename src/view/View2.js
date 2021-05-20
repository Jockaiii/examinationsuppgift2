import React, { useState, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { APIContext } from '../shared/global/provider/APIProvider'

export const View2 = () => {
    const location = useLocation()
    const [APICall, setAPICall] = useContext(APIContext)

    const listFilms = () => {
        return APICall?.films?.map((x) => <h1>{x}</h1>)
    }

    return (
        <div>
            <h1>{location.state}</h1>
            {listFilms()}
        </div>
    )
}

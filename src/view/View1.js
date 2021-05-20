import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import StarwarsService from '../shared/api/service/StarwarsService'
import { APIContext } from '../shared/global/provider/APIProvider'
import SyncLoader from 'react-spinners/SyncLoader'

export const View1 = () => {
    const location = useLocation()
    const [character, setCharacter] = useState([])
    const [count, setCount] = useState(1)
    const [APICall, setAPICall] = useContext(APIContext)
    const [loading, setLoading] = useState(true)

    const getCharacterNameFromStarwarsAPI = async () => {
		const { data } = await StarwarsService.getStarwarsCharacter(count)
		setCharacter(data)
        setAPICall(data)
	}

    useEffect(() => {       
        setLoading(true)
		getCharacterNameFromStarwarsAPI()
	}, [count])

    useEffect(() => {
        if(APICall)
            setLoading(false)
    }, [APICall])


    const displayCharacterName = () => {
		if (character || undefined) {
			return <div>
				<h2>{(character || undefined)?.name}</h2>
			</div>
		}
	}

    const listFilms = () => {
        return character?.films?.map((x) => <h1>{x}</h1>)
    }

    return (
        <div>
            <h1> {location.state} </h1>
            <button onClick={() => setCount(count + 1)}>Select next persons featured movies</button>
            <br/><br/><SyncLoader loading={loading}/>
            {displayCharacterName()}
            {listFilms()}
        </div>
    )
}

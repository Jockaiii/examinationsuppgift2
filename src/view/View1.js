import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import StarwarsService from '../shared/api/service/StarwarsService'

export const View1 = () => {
    const location = useLocation()
    const [character, setCharacter] = useState([])
    const [count, setCount] = useState(1)

    const getCharacterNameFromStarwarsAPI = async () => {
		const { data } = await StarwarsService.getStarwarsCharacter(count)
		setCharacter(data)
	}

    useEffect(() => {
		getCharacterNameFromStarwarsAPI()
	}, [count])

    const displayCharacterName = () => {
		if (character || undefined) {
			return <div>
				<h2>{(character || undefined)?.name}</h2>
			</div>
		}
	}

    const listData = () => {
        return character.films.map((x) => <h1>{x}</h1>)
    }

    return (
        <div>
            <h1> {location.state} </h1>
            <button onClick={() => setCount(count + 1)}>Select next persons featured movies</button>
            {displayCharacterName()}
            {listData()}
        </div>
    )
}

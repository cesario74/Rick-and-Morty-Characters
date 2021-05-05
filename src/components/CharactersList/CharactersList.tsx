import React from 'react'

import { ICharacterInfo } from '../../types'
import CharacterInfo from '../CharacterInfo'

const CharactersList = (props: { characters: ICharacterInfo[] }) => {

    const {
        characters
    } = props

    return (
        <>
            {characters.map((character: ICharacterInfo, key) => (
                <CharacterInfo key={key} character={character} />
            ))}
        </>
    )
}

export default CharactersList

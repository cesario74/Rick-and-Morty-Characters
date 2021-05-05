import React, { useState } from 'react'

import { AxiosResponse } from 'axios'

import { IInfoMessage, InfoMessage, Loader } from '..'
import { rickAndMortyService } from '../../api'
import { ICharacterInfo, IRickAndMortyEpisResponse } from '../../types'

import './style.scss'

const Info = (props: { title: string, content: string | number }) => {

    const {
        title,
        content
    } = props
    return (
        <>
            { content !== '' &&
                <div>{title}: {content}</div>
            }
        </>
    )
}

const CharacterInfo = (props: { character: ICharacterInfo }) => {

    const {
        character
    } = props

    const [isInfoToShow, setIsInfoToShow] = useState<boolean>(false)

    const [loading, setLoading] = useState<boolean>(false)

    const [infoMessage, setInfoMessage] = useState<IInfoMessage>({
        severity: 'error',
        message: '',
        isOpen: false
    })

    const [characterEpis, setCharacterEpis] = useState<IRickAndMortyEpisResponse | undefined>(undefined)

    const fetchCharacterEpis = async () => {
        setLoading(true)

        try {
            if (character.episode.length) {
                let characterEpisFetched: AxiosResponse<IRickAndMortyEpisResponse> = await rickAndMortyService.getCharacterInfo(character.episode[0])
                setCharacterEpis(characterEpisFetched.data)
            }

        } catch (error: any) {
            setInfoMessage({
                severity: 'error',
                message: 'Error: Information about episodes not loaded.',
                isOpen: true,
            })
        } finally {
            setLoading(false)
        }
    }

    const showInfo = async () => {
        setIsInfoToShow(!isInfoToShow)
        if (characterEpis === undefined) {
            await fetchCharacterEpis()
        }
    }

    return (
        <>
            {loading &&
                <Loader />
            }
            <div className={'character'}>
                <div>
                    <img src={character.image} alt={character.name} />
                    <h3>{character.name}</h3>
                </div>
                <div>
                    <span className={'more-info-btn'} onClick={showInfo}>
                        {!isInfoToShow ? '+' : '-'}info
                    </span>
                    {isInfoToShow &&
                        <div className={'more-info'}>
                            <Info title={'Number of Episodes Appeared In'} content={character.episode.length} />
                            {characterEpis !== undefined &&
                                <div className={'episode-info'}>
                                    <b>First Episode</b>
                                    <Info title={'Number'} content={characterEpis.episode} />
                                    <Info title={'Title'} content={characterEpis.name} />
                                    <Info title={'Air Date'} content={characterEpis.air_date} />
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
            {infoMessage.isOpen &&
                <InfoMessage infoMessage={infoMessage} setInfoMessage={setInfoMessage} />
            }
        </>
    )
}

export default CharacterInfo

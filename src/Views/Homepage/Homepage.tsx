import React, { ChangeEvent, useEffect, useState } from 'react'

import { AxiosResponse } from "axios";

import { CharactersList, IInfoMessage, InfoMessage, Loader } from '../../components'
import { ICharacterInfo, IRickAndMortyCharsResponse } from '../../types'
import { rickAndMortyService } from '../../api';

const Homepage = (props: { itemsLimit: number }) => {

  const {
    itemsLimit
  } = props

  const [infoMessage, setInfoMessage] = useState<IInfoMessage>({
    severity: 'error',
    message: '',
    isOpen: false
  })

  const [loading, setLoading] = useState<boolean>(false)

  const [allCharacters, setAllCharacters] = useState<ICharacterInfo[]>([])
  const [filtChar, setFiltChars] = useState<ICharacterInfo[]>([])

  const [filterName, setFilterName] = useState<string>('')

  const setAndGetChar = async (nextUrl: string | null): Promise<IRickAndMortyCharsResponse> => {
    const rickAndMortyResponse: AxiosResponse<IRickAndMortyCharsResponse> = await rickAndMortyService.getCharacters(nextUrl)

    return rickAndMortyResponse.data
  }

  const fetchCharacters = async () => {
    setLoading(true)

    try {

      let charactersFetched: IRickAndMortyCharsResponse = await setAndGetChar(null)
      let allCharacters: ICharacterInfo[] = charactersFetched.results
      let totalCharacters: number = charactersFetched.results.length
      let nextUrl: string | null = charactersFetched.info.next

      while (totalCharacters < itemsLimit) {
        const nextCharacters = await setAndGetChar(nextUrl)
        allCharacters = [...allCharacters, ...nextCharacters.results]
        nextUrl = nextCharacters.info.next

        if (nextUrl === null) {
          break
        }

        totalCharacters += nextCharacters.results.length
      }

      const limitChars: ICharacterInfo[] = allCharacters.slice(0, itemsLimit)
      setAllCharacters(limitChars)
      setFiltChars(limitChars)

    } catch (error: any) {
      setInfoMessage({
        severity: 'error',
        message: 'error.message',
        isOpen: true,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    const filteredChar = allCharacters.filter(elem => (
      (elem.name).toLowerCase()).includes((e.target.value).toLowerCase())
    )
    setFilterName(e.target.value)
    setFiltChars(filteredChar)
    setLoading(false)
  }

  useEffect(() => {
    fetchCharacters()
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <input type='text' placeholder='Search by name...' value={filterName} onChange={handleChange} />
      <CharactersList characters={filtChar} />
      {loading &&
        <Loader />
      }
      {infoMessage.isOpen &&
        <InfoMessage infoMessage={infoMessage} setInfoMessage={setInfoMessage} />
      }
    </div>
  )
}

export default Homepage

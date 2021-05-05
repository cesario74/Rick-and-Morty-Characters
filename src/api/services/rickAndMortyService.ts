import axios, { AxiosResponse } from 'axios'

import { BASE_API_URL, ENDPOINTS } from '../../constants/api'

import { IRickAndMortyCharsResponse, IRickAndMortyEpisResponse } from '../../types'

export const rickAndMortyService = {
  getCharacters: async (url: string | null) => {
    try {
      const urlToRequest = url === null
        ? BASE_API_URL + ENDPOINTS.GET_CHARACTER
        : url

      const response: AxiosResponse<IRickAndMortyCharsResponse> = await axios.get(
        urlToRequest
      )

      return response
    } catch (error) {
      throw new Error('Error getting characters from Rick And Morty API!')
    }
  },
  getCharacterInfo: async (url: string) =>{
    try {
      const response: AxiosResponse<IRickAndMortyEpisResponse> = await axios.get(
        url
      )

      return response
    } catch (error) {
      throw new Error('Error getting episodes from Rick And Morty API!')
    }
  }
}

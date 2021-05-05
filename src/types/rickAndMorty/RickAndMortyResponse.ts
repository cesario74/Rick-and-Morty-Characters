export interface IRickAndMortyCharsResponse {
  info: {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
  },
  results: ICharacterInfo[]
}

export interface IRickAndMortyEpisResponse {
  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: string[],
  url: string,
  created: string
}

export interface ICharacterInfo {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: string
}
interface IMovie {
	id: number
  backdrop_path: string
	first_air_date?: Date
	release_date?: Date
	name?: string
	title?: string
	original_language: string
	overview: string
	poster_path: string
	vote_average: 8.4
}

interface MoviesState {
  movies: IMovie[]
  loading: boolean
  error: string | null
}

interface MoviesAction {
  type: string
  movies: IMovie[]
  error: string | null
}

interface SearchState {
  query: string
}

interface MovieState {
  movie: IMovie | null
}

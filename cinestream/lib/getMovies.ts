const fetchFromTMDB = async (url: URL, cacheTime?: number) => {
 url.searchParams.set('include_adult', false)
}

export const getUpcomingMovies = async () => {
    const url = new URL('https://api.themoviedb.org/3/movie/upcoming')
    const data = await fetchFromTMDB(url)

    return data.results
}
export const getTopRatedMovies = async () => {
    const url = new URL('https://api.themoviedb.org/3/movie/top_rated')
    const data = await fetchFromTMDB(url)

    return data.results
}
export const getPopularMovies = async () => {
    const url = new URL('https://api.themoviedb.org/3/movie/popular')
    const data = await fetchFromTMDB(url)

    return data.results
}
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: headers => {
			headers.set(
				'X-RapidAPI-Key',
				'02ec039cddmsh1c331edb4683bb3p1e4619jsnfb4464476e0b'
			);

			return headers;
		}
	}),
	endpoints: builder => ({
		getTopCharts: builder.query({
			query: () => '/charts/country?country_code=IN'
		}),
		getSongsByGenre: builder.query({
			query: genre => `/charts/genre-world?genre_code=${genre}`
		}),
		getSongDetails: builder.query({
			query: ({ songid }) => `/tracks/details?track_id=${songid}`
		}),
		getSongRelated: builder.query({
			query: ({ songid }) => `/tracks/related?track_id=${songid}`
		}),
		getArtistDetails: builder.query({
			query: artistid => `/artists/details?artist_id=${artistid}`
		}),
		getSongsByCountry: builder.query({
			query: countryCode => `/charts/country?country_code=${countryCode}`
		}),
		getSongsBySearch: builder.query({
			query: searchTerm =>
				`/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`
		})
	})
});

export const {
	useGetTopChartsQuery,
	useGetSongsByGenreQuery,
	useGetSongDetailsQuery,
	useGetSongRelatedQuery,
	useGetArtistDetailsQuery,
	useGetSongsByCountryQuery,
	useGetSongsBySearchQuery
} = shazamCoreApi;

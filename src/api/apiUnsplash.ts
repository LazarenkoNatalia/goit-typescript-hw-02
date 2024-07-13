import axios from 'axios'

axios.defaults.baseURL = 'https://api.unsplash.com/'
const MY_ACCESS_KEY = 'suaf2wu07XgZnK_npNXtMsloutMsoQZrhx5Kj6p9azw'

export interface PhotosType {
  id: string;
  alt_description: string ;
  likes: number;
  urls: {
    regular: string;
    small: string;
  };
  user: {
    name: string;
  };
}
export interface Response {
  results: PhotosType[];
  total_pages: number;
}

export const getPhotosApi = async (
	searchQuery: string, page: number): Promise<Response> => {
	const response = await axios.get<Response>(`/search/photos`, {
		params: {
			query: searchQuery,
			per_page: 12,
            page,
			client_id: MY_ACCESS_KEY,
			orientation	: 'landscape'
		},
	})
	
	return response.data
}
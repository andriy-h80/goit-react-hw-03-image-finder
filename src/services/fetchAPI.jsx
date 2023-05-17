const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '34772509-2b3ff3d3039847d74197d09be';

const getImages = async (imageSearchName, page = 1) => {
    const response = await fetch(
        `${BASE_URL}?q=${imageSearchName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    if (response.ok) {
        return response.json();
    }
    return await Promise.reject(
        new Error(
            `Sorry, we can't find ${this.props.imageSearchName}`
        )
    );
};

export default getImages;

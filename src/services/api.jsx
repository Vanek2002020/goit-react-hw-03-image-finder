const API_KEY = '23531219-4793e7ad626a6d166b9f03b8c';

const api = {
  async fetchImages(searchQuery, pageNumber) {
    let url = `https://pixabay.com/api/?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    console.log(url);

    return await fetch(url)
      .then(response => {
        if (response.ok) {
          // console.log(response);
          return response.json();
        }
      })
      .then(data => {
        // console.log(data.hits);

        return data;
      })
      .catch(error => console.log(error));
  },
};

export default api;

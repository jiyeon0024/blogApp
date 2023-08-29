const api = () => {
  return {
    get: async (url) => {
      return fetch("http://localhost:3000/" + url)
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => err);
    },
    post: () => {},
    put: () => {},
    delete: () => {},
  };
};

export default api();
//GET - getting data , no side effects
//POST - adding data, side effects
//PUT - editing
//DELETE - deleting data

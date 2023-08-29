const api = () => {
  return {
    get: async (url) => {
      return fetch("http://localhost:3000/" + url)
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => err);
    },
    post: async (url, data) => {
      return fetch("http://localhost:3000/" + url, {
        method: "POST",
        body: data,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .catch((err) => err);
    },
    put: () => {},
    delete: async (url) => {
      return fetch("http://localhost:3000/" + url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .catch((err) => err);
    },
  };
};

export default api();
//GET - getting data , no side effects
//POST - adding data, side effects
//PUT - editing
//DELETE - deleting data

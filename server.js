import pkg from 'json-server';
const { create, router: _router, defaults } = pkg;

const server = create();
const router = _router('./db.json'); // your db.json path here
const middlewares = defaults();
import bodyParser from 'body-parser';


server.use(middlewares);
server.use(bodyParser.json());  // Parse JSON request bodies


// Here, you can modify responses
server.use((req, res, next) => {
  if (Math.random() < 0.3) {
    // You can send custom error responses based on some logic
    if (Math.random() < 0.) {
      res.status(400).jsonp({
        error: "Bad request"
      });
      return;
    }
  }

  if (req.method === 'POST' && req.path === '/posts') {
    req.body.image = 'https://source.unsplash.com/random';
  }

  let oldJson = res.json;
  res.json = function(data) {
    oldJson.call(this, {
      status: 'success',
      data: data
    });
  }
  

  next();
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});

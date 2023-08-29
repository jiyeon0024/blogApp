import pkg from "json-server";
const { create, router: _router, defaults } = pkg;

const server = create();
const router = _router("./db.json"); // your db.json path here
const middlewares = defaults();
import bodyParser from "body-parser";

server.use(middlewares);
server.use(bodyParser.json()); // Parse JSON request bodies

// Here, you can modify responses
server.use((req, res, next) => {
  //use(): 요청과 응답의 중간(middle, 미들)에 위치하여 미들웨어 라고 부른다.
  //미들웨어는 요청과 응답을 조작하여 기능을 추가하기도 하고, 나쁜 요청을 걸러내기도 한다.,미들웨어는 req, res, next가 매개변수인 함수
  //req: 요청, res: 응답 조작 가능, next()로 다음 미들웨어로 넘어감.
  if (Math.random() < 0.3) {
    // You can send custom error responses based on some logic
    if (Math.random() < 0) {
      res.status(400).jsonp({
        //JSONP is a method for sending JSON data without worrying about cross-domain issues.
        error: "Bad request",
      });
      return;
    }
  }

  let oldJson = res.json;
  res.json = function (data) {
    oldJson.call(this, {
      status: "success",
      data: data,
    });
  };

  next();
  //The next() is a function in the Express router that, when invoked, executes the next middleware in the middleware stack.
  //If the current middleware function does not end the request-response cycle, it must call next() to pass control
  //to the next middleware function. Otherwise, the request will be left hanging.
});

server.use(router);

// * bind() 함수는 새롭게 바인딩한 함수를 만드는 함수로, 바인딩한 함수는 원본 함수 객체를 감싸는 함수로써, 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 된다.
//app.listen() method binds itself with the specified host and port(to change (programs) from one system to anoth) to bind and listen for any connections.
//If the port is not defined or 0, an arbitrary unused port will be assigned by the operating system
//that is mainly used for automated tasks like testing, etc.
server.listen(3000, () => {
  console.log("JSON Server is running on port 3000");
});

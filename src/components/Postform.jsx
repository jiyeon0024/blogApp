import React from "react";
import Button from "./Button";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function Postform() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: e.target.title.value,
      category: e.target.category.value,
      content: e.target.content.value,
      authorId: e.target.authorId.value,
      image: e.target.image.value,
    };
    let res = await api.post("posts", JSON.stringify(data));
    console.log(res);
    return navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      action=""
      className="my-20 bg-blue-200 p-5 flex flex-col max-w-[500px]"
    >
      {/* title   */}
      <label htmlFor="">titleInput </label>
      <input type="text" name="title" />
      {/* category  */}
      <label htmlFor="">category</label>
      <select name="category" id="cartegory">
        <option name="advice" value="advice">
          Advice
        </option>
        <option name="food" value="food">
          Food
        </option>
        <option name="health" value="health">
          Health
        </option>
      </select>
      <label htmlFor="">content</label>
      <input type="type" id="content" name="content" />
      <label htmlFor="">img link</label>
      <input type="text" id="imgLink" name="image" />

      <input type="hidden" name="authorId" value="1" />
      {/* author id   */}

      <Button>submit</Button>
    </form>
  );
}

export default Postform;

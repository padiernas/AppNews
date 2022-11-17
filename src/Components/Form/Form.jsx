import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");

  const sendNew = async (e) => {
    e.preventDefault();

    const dataNew = {
      id: id,
      title: title,
      description: description,
      imageUrl: imageUrl,
      date: date,
      athor: author,
    };
    const response = await axios.post("http://localhost:8000/news", {
      method: "POST",
      data: JSON.stringify(dataNew),
    });
    console.log(response)
  };
  return (
    <form onSubmit={sendNew}>
      <input
        onChange={(e) => setId(e.target.value)}
        type="text"
        placeholder="Ingrese el id"
      />
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Ingrese el titulo"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Ingrese la descripcion"
      />
      <input
        onChange={(e) => setImageUrl(e.target.value)}
        type="text"
        placeholder="Ingrese la imagen"
      />
      <input onChange={(e) => setDate(e.target.value)} type="date" />
      <input
        onChange={(e) => setAuthor(e.target.value)}
        type="text"
        placeholder="Ingrese el autor"
      />
      <input type="submit" placeholder="Enviar" />
    </form>
  );
};

export default Form;

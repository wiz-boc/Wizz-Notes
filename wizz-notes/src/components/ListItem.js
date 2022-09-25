import { Link } from "react-router-dom";
import React from "react";

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString();
};
let getTitle = (note) => {
  const title = note.body.split("\n")[0];
  //if(title.length > 45)
  return title.slice(0, 45);
};

let getContent = (note) => {
  let title = getTitle(note);
  let content = note.body.replaceAll("\n", "");
  content.replaceAll(title, "");
  if (content.length > 45) {
    content = content.slice(0, 45) + "...";
  }
  return content;
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getTime(note)}</span>
          {getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;

import React from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { useParams, Link } from "react-router-dom";
import notes from "../assets/data";

const NotePage = () => {
  let { id } = useParams();
  let note = notes.find((note) => note.id == id);

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>
      <textarea value={note?.body}></textarea>
    </div>
  );
};

export default NotePage;

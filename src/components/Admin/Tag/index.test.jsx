import React, { useState, useEffect } from "react";
import Delete from "../../../img/delete";
import "./index.scss";

function Test({ set, tags }) {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e);
  };
  const handleBlur = () => {
    const context = value.trim();
    context !== "" && set([...tags, value]);
    setValue("");
  };
  const handleDelete = (tag) => {
    const newTags = tags.filter((item) => item !== tag);
    set(newTags);
  };
  return (
    <div className="tag-wrapper">
      <div className="tags">
        {tags.map((item, index) => (
          <div className="tag-item" key={index}>
            {item}
            <div onClick={() => handleDelete(item)}>
              <Delete />
            </div>
          </div>
        ))}
      </div>
      <div className="add">
        <input
          type="text"
          onBlur={handleBlur}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Test;

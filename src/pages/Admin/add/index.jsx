import React, { useState } from "react";
import "./index.scss";
import MDEditor from "../../../utils/markdown";
import EditableTagGroup from '../../../components/Admin/Tag'
import axios from '../../../utils/axios'


function Add() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [tags, setTag] = useState([])
  const handleClick = () => {
    axios.post('/article', {title, content, topic, tags}).then(res => {
      console.log('发布成功')
    })
  };
  const handleSelectChange = (e) => {
    setTopic(e);
  };
  
  return (
    <div className='admin-add'>
      <div className="title">
        <label>标题: </label>       
        <input
          value={title}
          type='text'
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />  
      </div>
      <div className="topic">
        <label>分类:</label>
        <select
          onChange={(e) => handleSelectChange(e.target.value)}
          value={topic}
        >
          <option value="" disabled>
            未分类
          </option>
          <option value="React">React</option>
          <option value="Node">Node</option>
          <option value="CSS">CSS</option>
          <option value="JavaScripts">JavaScripts</option>
          <option value="other">其他</option>
        </select>
      </div>
      <div className="tag">
        <label htmlFor="tag">标签:</label>
         <EditableTagGroup setTag={setTag}/>
      </div>
      <div className="md">
      <MDEditor  value={content} onChange={setContent} />
      </div>
      
      <button onClick={handleClick} className='btn'>提交</button>
    </div>
  );
}

export default Add;

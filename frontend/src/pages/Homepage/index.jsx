import "./style.css";

import { useNavigate } from "@reach/router";
import { useState } from "react";
import { experimentsList } from "../../data/experiments";
import { classList, subjectList } from "../../data/list";
const initialState = {
  subject: "",
  class: "",
};
const ExperimentList = () => {
  const [state, setState] = useState({ ...initialState });
  const navigate = useNavigate();
  const handleSubjectClick = (subject) => {
    if (subject === state.subject) return setState({ ...state, subject: "" });
    setState({ ...state, subject });
  };
  const handleClassClick = (cls) => {
    if (cls === state.class) return setState({ ...state, class: "" });

    setState({ ...state, class: cls });
  };
  const handleClick = (route) => {
    navigate(`/${route}`);
  };
  return (
    <>
      <div className="experiment-list">
        <div className="section-title">
          <h2>শ্রেণি</h2>
        </div>
        <div className="item-list">
          {classList.map((item) => (
            <div
              className={state.class === item.value ? "item selected" : "item"}
              onClick={() => handleClassClick(item.value)}
              key={item.value}
            >
              <img src={item.image} alt="" srcSet="" />
              <span> {item.name}</span>
            </div>
          ))}
        </div>
        <div className="section-title">
          <h2>বিষয়</h2>
        </div>
        <div className="item-list">
          {subjectList.map((item) => (
            <div
              className={
                state.subject === item.value ? "item selected" : "item"
              }
              key={item.value}
              onClick={() => handleSubjectClick(item.value)}
            >
              <img src={item.image} alt="" srcSet="" />
              <span> {item.name}</span>
            </div>
          ))}
        </div>

        <div className="experiments">
          {experimentsList
            .filter(({ tag }) => {
              const [cls, subject] = tag.split("-");
              if (
                (state.class && !state.subject) ||
                (state.subject && !state.class)
              ) {
                return cls === state.class || state.subject === subject;
              } else if (state.class && state.subject) {
                return cls === state.class && state.subject === subject;
              } else {
                return true;
              }
            })
            .map((item) => (
              <div
                className="experiment"
                onClick={() => handleClick(item.route)}
              >
                <div className="cover">
                  <img src={item.image} alt="" />
                </div>
                <div className="info">
                  <h3 className="chapter-name">{item.title}</h3>
                  <h3 className="experiment-name">{item.name}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ExperimentList;

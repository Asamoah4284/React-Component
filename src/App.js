import { useState } from "react";
import "./App.css";
const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key: 1,
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    key: 2,
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    key: 3,
  },
];
export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  function hideContent() {
    setIsOpen((isOpen) => !isOpen);
  }
  function TabActions() {
    const [likes, setLikes] = useState(0);
    function handleLikes() {
      setLikes(likes + 1);
    }

    return (
      <div className="tab-actions">
        <button onClick={hideContent}>Hide details</button>
        <div className="hearts-counter">
          <p className="">{likes}💖</p>
          <span>
            <button onClick={handleLikes}>+</button>
          </span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Tabbed />
      <div className="tab-content">
        {isOpen && <TabbedContent content={content} />}
        <TabActions />
      </div>
    </div>
  );
}
function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeT={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeT={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeT={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeT={activeTab} onClick={setActiveTab} />
      </div>
      {/* {activeTab <= 2 ? (
        <TabbedContent content={content[activeTab]}
      ):<DifferentContent/>
    )} */}
    </div>
  );
}
function showDisplay({ num }) {
  console.log(content);
  content === "1" ? console.log("hi") : console.log("hello");
}
function Tab({ content, num }) {
  return (
    <button onClick={showDisplay} className="tab">
      Tab {num}
    </button>
  );
}

function TabbedContent({ content }) {
  return (
    <div className="tab-content">
      <h4>{content[0].summary}</h4>
      <p>{content[0].details}</p>
    </div>
  );
}

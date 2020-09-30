import React from "react";

const Accordion = ({ items }) => {
  const renderItems = items.map((item) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active">
          <i className="dropdown icon">{item.title}</i>
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      <h1>{renderItems}</h1>
    </div>
  );
};
export default Accordion;

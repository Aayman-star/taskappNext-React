import React from "react";

const List = ({ tasks }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        <ol className="list-decimal list-inside">{tasks}</ol>
      ) : (
        "No Tasks to Show yet"
      )}
    </div>
  );
};

export default List;

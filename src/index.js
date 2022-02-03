import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          name="maharshi"
          time="Yesterday at 7:00 pm"
          content="Nice Photo"
          dp="download.jpg"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          name="Sunny"
          time="Today at 1:00 pm"
          content="Super"
          dp="2.jpg"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          name="Om"
          time="Yesterday at 7:00 pm"
          content="very nice"
          dp="3.jpg"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

import React, { Component } from "react";

export class createElement extends Component {
  render() {
    console.log(React.createElement("divv", { class: "c1" }, "hello", "word"));
    // JSON
    let expectedTextButGotJSON = {
      type: "div",
      props: {
        dangerouslySetInnerHTML: {
          __html: "/* put your exploit here */",
        },
      },
    };
    let message = { text: expectedTextButGotJSON };

    return (
      <div>
        {React.createElement("fjaslkjfashf", { class: "c1" }, "hello", "word")}
        {/* <p>{message.text}</p>; */}
      </div>
    );
  }
}

export default createElement;

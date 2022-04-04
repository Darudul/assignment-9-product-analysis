import React from "react";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div className="grid-container">
      <div className="mt-5 ms-5 me-5 border border-primary rounded p-4">
        <h3 className="mb-4 text-success">
          What is the purpose of context API?
        </h3>
        <p>
          The Context API can be used to share data with multiple components,
          without having to pass data through props manually. It is more like a
          pipeline used to pass values from one end to another. Context API
          provides the easiest way for passing data through the component tree
          so that don’t need to pass props down manually at every level. Context
          API is the best replacement for Redux because it’s in-built and you
          don’t have to install dependencies for the same.Context API divide
          into three blocks: Context, Provider, Consumer. Static contextType can
          be used only for Class-based components.
        </p>
      </div>
      <div className="mt-5 ms-5 me-5 border border-primary rounded p-4">
        <h3 className="mb-4 text-success">What is semantic tag? </h3>
        <p>
          A semantic element clearly describes its meaning to both the browser
          and the developer. Elements such as header , footer and article are
          all considered semantic because they accurately describe the purpose
          of the element and the type of content that is inside them. HTML5
          semantic elements also help search engines to read the page and find
          the required information faster. Semantic elements much easier to
          read. By creating a standard semantic element, it makes it easier for
          everyone.
        </p>
      </div>

      <div className="mt-5 ms-5 me-5 border border-primary rounded p-4">
        <h3 className="mb-4 text-success">
          Differences between inline, block and inline-block?
        </h3>
        <p>
          <span className="fw-bold text-warning"> Inline:</span> <br /> The
          element doesn't start on a new line and only occupy just the width it
          require.Can't set the width or height.This one displays the element
          inline or on the same line. Inline got few property like span, a, img.
        </p>
        <p>
          <span className="fw-bold text-warning"> Inline-block:</span> <br />
          Displays an element as an inline-level block container. Can set height
          and width values. It's formatted just like the inline element,where it
          doesn't start on a new line.
        </p>
        <p>
          <span className="fw-bold text-warning"> Block:</span> <br />
          Block level element will start on a new line and occupy the full width
          available. Can set height and width values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

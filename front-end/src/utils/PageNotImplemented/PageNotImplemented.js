import React from "react";

//SCSS Tag Group: pni
export default function PageNotImplemented({ pageName }) {
  return (
    <div className="page-not-implemented" id="page-not-implemented">
      <h1 className="page-not-implemented" id="page-not-implemented">
        Sorry, the {pageName} page has not yet been implemented.
      </h1>
    </div>
  );
}

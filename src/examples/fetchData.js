import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
{
  site {
    siteMetadata {
      author
      complexData {
        age
        name
      }
      description
      person {
        age
        name
      }
      simpleData
      title
    }
  }
}
`

const FetchData = () => {
  // const {
  //     site: {
  //         siteMetadata:
  //         { title, complexData },
  //     },
  // } = (useStaticQuery(getData));

  // console.log(title);
  // console.log(complexData);

  return (
    <div></div>
  );
};

export default FetchData;
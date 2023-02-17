import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

const query = graphql`
  query {
    allFile(filter: {extension: {ne: "svg"}}) {
      nodes {
        name
        childImage: childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            transformOptions: {grayscale: true}
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
    const data = useStaticQuery(query);
    const nodes = data.allFile.nodes;
    return (
        <Wrapper>
            {nodes.map((image, index) => {
                const { name } = image;
                const pathToImage = getImage(image);
                return (
                    <article key={index} className="item">
                        <GatsbyImage
                            // image={image.childImage.gatsbyImageData}
                            image={pathToImage}
                            alt={name}
                            className="gallery-img" />
                        <p>{name}</p>
                    </article>);
            })}
            <div>
                <h1>Gallery Image Setup</h1>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    .item{
        margin-right: 1rem;
    }
    .gallery-img {
        border-radius: 1rem;
    }
`;

export default Gallery;
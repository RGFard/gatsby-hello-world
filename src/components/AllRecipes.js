import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import TagsList from "./TagsList";
import RecipesList from "./RecipesList";

const query = graphql`
{
  allContentfulRecipe(sort: {title: ASC}) {
    nodes {
      id
      title
      cookTime
      prepTime
      content {
        tags
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
}
`;

const AllRecipes = () => {
    const {
        allContentfulRecipe: { nodes: recipes }
    } = useStaticQuery(query);

    // Identical data retrieval methods
    // const data = useStaticQuery(query);
    // const recipes = data.allContentfulRecipe.nodes;

    return (
        <section className="recipes-container">
            <TagsList recipes={recipes} />
            <RecipesList recipes={recipes} />
        </section>
    );
};

export default AllRecipes;
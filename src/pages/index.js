import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const products = data.allDatoCmsProduct
  console.log(products)
  return (
    <Layout>
      <SEO title="Home" />
        <main className='grid-container'>
          {
            products.edges.map(({ node: product }) => {
              return (
                <article key={product.id} className='grid-item'>
                  <h2>{product.name}</h2>
                  <Img fluid={product.image.fluid} />
                  <p>{product.price} €</p>
                  <a 
                    href='#'
                    className='snipcart-add-item' //important pour snipcart
                    data-item-id={product.id}
                    data-item-description='Ma description...'
                    data-item-price={product.price}
                    data-item-image={product.image.url}
                    data-item-name={product.name}
                    data-item-url='/' //important, s'il y a une page par produit il faut mettre le slug

                    data-item-payment-interval={product.sub ? 'Month' : null} //  à rajouter pour gérer les abonnements
                    data-item-payment-interval-count={product.sub ? '1' : null} // à rajouter pour gérer les abonnements
                    // voir la doc pour d'autres paramètre tel quel changer la couleur, la taille etc
                  >Ajouter au panier</a>
                </article>
              )
            })
          }
        </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ProductsQuery {
      allDatoCmsProduct {
        edges {
          node {
            id
            name
            sub
            price
            image {
              url
              fluid(maxWidth: 600) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    }
`

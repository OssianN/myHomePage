import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import FadeInSection from '../components/FadeInSection'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/portfolio.scss'

const Portfolio = () => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulPortfolio {
          edges {
            node {
              description {
                description
              }
              link
              slug
              title
              desktopImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              mobileImage {
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
              order
            }
          }
        }
      }
    `
  )

  const sortPortfolio = (a, b) => {
    if (a.order < b.order) return 1
    if (a.order > b.order) return -1
    return 0
  }

  const portfolios = data.allContentfulPortfolio?.edges
  const sortedPortfolioList = portfolios?.sort(sortPortfolio)

  return (
    <Layout tabName='portfolio'>
      <div className='portfolio__container'>
        <div className='portfolio'>
          <header className='portfolio__header'>
            <h1 className='header-title--standard'>
              Here are some projects I've done.
            </h1>
          </header>
          <div className='projects__container'>
            <div className='time-pole'></div>
            <ol className='projects__ol'>
              {sortedPortfolioList?.map((project, i) => {
                return (
                  <>
                  <FadeInSection key={i} indexKey={i}>
                    <h2 className='project-box__header'>
                      {project.node.title}
                    </h2>
                    <a
                      className='project__link'
                      href={project.node.link}
                      target='_blank'
                      rel='noreferrer'>
                      <div className='project__img-container'>
                        <div
                          className={`project__img-frame--desktop ${
                            project.node.mobileImage ? '' : 'no-mobile'
                          }`}>
                          <Img
                            className='project__desktop-img'
                            fluid={project.node.desktopImage.fluid}
                            alt={project.node.title}></Img>
                        </div>
                        {project.node.mobileImage ? (
                          <div className='project__img-frame--mobile'>
                            <Img
                              className='project__mobile-img'
                              fluid={project.node.mobileImage?.fluid}
                              alt={project.node.title}></Img>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </a>
                    <p className='bread-text--standard project-box__bread-text'>
                      {project.node.description.description}
                    </p>
                  </FadeInSection>
                  <div className={`time-pole ${portfolios.length - 1 === i ? `time-pole--last` : ''}`}></div>
                  </>
                )
              })}
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio

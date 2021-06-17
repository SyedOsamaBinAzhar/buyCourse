import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import { graphql} from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"

import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"




const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
   
    <HeroSection
      img = {data.fileName.childImageSharp.fluid}
      title="I write code"
      subtitle="Learncode.abc"
      heroclass="hero-background"
    />
    <Infoblock heading="ABOUT US"/>
    <DualInfoBlock heading="OUR TEAM" img="https://images.pexels.com/photos/7639123/pexels-photo-7639123.jpeg?cs=srgb&dl=pexels-lina-lisitsyna-7639123.jpg&fm=jpg"/>
  </Layout>
)

export const query = graphql`
{
	fileName: file(relativePath: {eq : "heromain.png"}){
		childImageSharp{
				fluid(maxWidth: 400 , maxHeight: 250){
					...GatsbyImageSharpFluid_tracedSVG 
      }
    }
  }
}
`

export default IndexPage

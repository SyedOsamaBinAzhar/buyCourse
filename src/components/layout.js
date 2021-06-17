/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../components/Reuseable/Navbar"
//importing components
import Footer from "./Reuseable/Footer"

import "./bootstrap.min.css"
import "./layout.css"

const Layout = ({ children }) => (
  <div>
    <Navbar/>
    {children}
    <Footer/>
  </div>
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

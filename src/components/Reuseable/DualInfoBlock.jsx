import React from 'react'

import Heading from './Heading'
import {Link} from "gatsby"

const DualInfoBlock = ({heading,img}) => {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex alias expedita optio explicabo nostrum molestias ducimus nisi harum hic magnam obcaecati doloribus, officia,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex alias expedita optio explicabo nostrum molestias ducimus nisi harum hic magnam obcaecati doloribus, officia, dolorum aspernatur porro quibusdam sint, molestiae reiciendis. Eaque, officia qui laborum consequatur voluptatem officiis magni ipsam voluptatibus a, exercitationem animi delectus! Repudiandae exercitationem minima unde? Praesentium, nihil?</p>
                    </div>
                    <div className="col-4">
                    <div className="card bg-dark">
            < img src={img} className="card-img-top" alt="image is here" height="250px"/>
            <div className="card-body">
            <h5 className="card-title text-success">Just Click photos</h5>
            <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat corrupti autem hic earum asperiores provident dolorum itaque sit obcaecati tenetur!</p>
            <a href="#" className="btn btn-warning btn-block">{heading}</a>
            </div>
            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DualInfoBlock

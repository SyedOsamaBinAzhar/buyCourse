import React from 'react'

import Heading from './Heading'
import {Link} from "gatsby"

const Infoblock = ({heading}) => {
    return (
        <section className="bg-theme my-5 py-4">
            <Heading title={heading}/>
            <div className="row">
                <div className="col-10 col-sm-8 mx-auto text-center">
                    <p className="lead text-white mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nobis molestiae quas dolore iure voluptatem, veniam voluptatibus expedita amet consequatur numquam quidem vero facilis maxime modi quam inventore eos corporis cumque optio commodi dolores dignissimos non! Similique nesciunt consectetur officiis fuga, repudiandae nemo consequuntur, at aliquam nulla exercitationem porro, tempora rerum quae ex velit doloremque adipisci quibusdam laborum assumenda dicta?
                    </p>
                    <Link to="/about/">
                    <button className="btn btn-warning btn-lg">{heading}</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Infoblock

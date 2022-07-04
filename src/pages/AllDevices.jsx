import React from "react";
import Helmet from '../components/Helmet/Helmet'
import CommonSection from "../components/UI/common-section/CommonSection";
import {Container, Row, Col} from 'reactstrap'

import products from '../assets/fake-data/products'
import ProductCard from '../components/UI/product-card/ProductCard'

import '../styles/all-devices.css'

const AllDevices = () => {
    return <Helmet title="All-Devices">
        <CommonSection title="All Devices"/>

        <section>
            <Container>
                <Row className="mt-4">
                    <Col lg="6" md="6" sm="6">
                        <div className="search__widget d-flex align-items-center justify-content-between w-50">
                            <input type="text" placeholder="I'm looking for...."/>
                            <span><i className="ri-search-line"></i></span>
                        </div>
                    </Col>

                    <Col lg="6" md="6" sm="6" className="mb-5">
                    <div className="sorting__widget text-end">
                        <select>
                            <option>Default</option>
                            <option value="ascending">Alphabetically, A-Z</option>
                            <option value="descending">Alphabetically, Z-A</option>
                            <option value="high-price">High Price</option>
                            <option value="low-price">Low Price</option>
                        </select>
                    </div>
                    </Col>
                    
                    {
                        products.map((item)=> (
                            <Col lg="3" md="4" sm="6" key={item.id} className="mb-4">
                                {" "} 
                                <ProductCard item={item} />
                            </Col>
                            
                        ))
                    }

                </Row>
            </Container>
        </section>

    </Helmet>

};

export default AllDevices;


import React, {useState, useEffect} from "react";
import products from '../assets/fake-data/products'
import { useParams } from "react-router-dom";
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/common-section/CommonSection'
import { Container, Row, Col } from "reactstrap";

import '../styles/product-details.css'

import productImg from '../assets/images/hp4.jpg'

const DevicesDetails = () => {

    const [tab, useTab] = useState('desc')
    const {id} = useParams()

    const product = products.find(product=> product.id === id)
    const [previewImg, setPreviewImg] = useState(product.image01)

   

    return <Helmet title= "Product-details">
        <CommonSection title="product 01"/>

        <section>
            <Container className="mt-5">
                <Row>
                    <Col lg="2" md="2" >
                        <div className="product__images">
                            <div className="img__item" onClick={()=> setPreviewImg(product.image01)}>
                                <img src={product.image01} alt="" className="w-75"/>
                            </div>
                            <div className="img__item" onClick={()=> setPreviewImg(product.image02)}>
                                <img src={product.image02} alt="" className="w-75"/>
                            </div>
                            <div className="img__item" onClick={()=> setPreviewImg(product.image03)}>
                                <img src={product.image03} alt="" className="w-75"/>
                            </div>
                            
                        </div>
                    </Col>

                    <Col lg="4" md="4">
                        <div className="product__main-img">
                            <img src={previewImg} alt="" className="w-100"/>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="single__product-content">
                            <h2 className="product__title mb-2">Lorem, ipsum dolor.</h2>
                            <p className="product__price">
                                {" "}
                                Price: <span>Rp.xx</span>
                            </p>
                            
                            <p className="category mb-5">Category: <span> Smartphone</span></p>
                            <button className="addToCart__btn">Add to Cart</button>
                        </div>
                    </Col>

                    <Col lg="12" className="mt-5">
                        <div className="tabs d-flex align-items-center gap-5 py-3">
                            <h6 className="tab__active">Description</h6>
                            <h6>Review</h6>
                        </div>

                        <div className="tab__content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nisi veniam dolorem voluptatem atque illum placeat ea fugit ipsa reiciendis, quisquam soluta fuga corrupti dignissimos nostrum quae numquam maiores magni suscipit temporibus eveniet sapiente optio repudiandae ut. Velit, voluptates doloremque.</p>
                        </div>

                        <div className="tab__form">

                            <div className="tab__form mb-3">
                                <div className="review">
                                    <p className="user__name mb-0">Jhon Doe</p>
                                    <p className="user__email">jhon1@gmail.com</p>
                                    <p className="feedback__text">Great Product</p>
                                </div>

                                <div className="review">
                                    <p className="user__name mb-0">Jhon Doe</p>
                                    <p className="user__email">jhon1@gmail.com</p>
                                    <p className="feedback__text">Great Product</p>
                                </div>

                                <div className="review">
                                    <p className="user__name mb-0">Jhon Doe</p>
                                    <p className="user__email">jhon1@gmail.com</p>
                                    <p className="feedback__text">Great Product</p>
                                </div>

                            </div>
                            <form className="form">
                                <div className="form__group">
                                    <input type="text" placeholder="Enter Your Name" />
                                </div>

                                <div className="form__group">
                                    <input type="text" placeholder="Enter Your Name" />
                                </div>

                                <div className="form__group">
                                    <textarea rows={5} type="text" placeholder="Enter Your Name" />
                                </div>

                                <button type="submit" className="addToCart__btn">Submit</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>

    </Helmet>
};

export default DevicesDetails;
import React from 'react';
import ItemCard from "../components/OrderCard";
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import '../styles/tab-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductData from '../data/ProductData'
import '../styles/tab-style.css';



export default function OrderCategories() {
    return (

        <div id='screen'>
            <Container className="py-4">
                <Row className="justify-content-center">
                    <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1"  style={{ width: "28rem" }} >
                        <Tab eventKey="tab-1" title="Burgers & wraps" tabClassName='aa'>
                            <section className="py-4 container">
                                <div className="row justify-content-center">
                                    {ProductData.Burgerswraps.map((item, index) => {
                                        return (
                                            <ItemCard img={item.img}
                                             title={item.title} 
                                             desc={item.desc} 
                                             price={item.price}
                                             item={item}
                                            key={index}  />
                                        )
                                    })}
                                </div>
                            </section>

                        </Tab>

                        <Tab eventKey="tab-2" title="Buckets & Pieces" >
                            <section className="py-4 container">
                                <div className="row justify-content-center">
                                    {ProductData.BucketsPieces.map((item, index) => {
                                        return (
                                            <ItemCard img={item.img}
                                             title={item.title} 
                                             desc={item.desc} 
                                             price={item.price}
                                             item={item}
                                              key={index} />
                                        )
                                    })}
                                </div>
                            </section>
                        </Tab>

                        <Tab eventKey="tab-3" title="Snacks & Sides">
                            <section className="py-4 container">
                                <div className="row justify-content-center">
                                    {ProductData.SnacksSides.map((item, index) => {
                                        return (
                                            <ItemCard img={item.img}
                                             title={item.title} 
                                             desc={item.desc}
                                              price={item.price}
                                              item={item}
                                               key={index} />
                                        )
                                    })}
                                </div>
                            </section>

                        </Tab>

                        <Tab eventKey="tab-4" title="Beverages & Desserts" >
                            <section className="py-4 container">
                                <div className="row justify-content-center">
                                    {ProductData.BeveragesDesserts.map((item, index) => {
                                        return (
                                            <ItemCard img={item.img}
                                             title={item.title}
                                              desc={item.desc}
                                               price={item.price}
                                               item={item}
                                                key={index} />
                                        )
                                    })}
                                </div>
                            </section>
                        </Tab>
                    </Tabs>
                </Row>
            </Container>
            
          
            

        </div>
    )
}

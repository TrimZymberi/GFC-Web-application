import React from 'react';
import Itemcard from "./Itemcard";
import data from "./data";
import {Container, Row, Tabs, Tab} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './tabStyle.css';



const Home = () => {
    return(
        <>
         
    <Container className="py-4">
        <Row className="justify-content-center">
            <Tabs justify variant="pills" defaultActiveKey="tab-1" className="mb-1 p-0">
                <Tab eventKey="tab-1" title="Burgers & wraps" tabClassName='aa'>
                    <section className="py-4 container">
                        <div className="row justify-content-center">
                        {data.Burgerswraps.map((item, index) =>{
                            return(
                            <Itemcard img={item.img} title={item.title}  desc={item.desc} price={item.price} key={index} />
                            )
                        })}                
                        </div>
                    </section>                        

                </Tab>
                
                <Tab eventKey="tab-2" title="Buckets & Pieces" >
                    <section className="py-4 container">
                        <div className="row justify-content-center">
                        {data.BucketsPieces.map((item, index) =>{
                            return(
                            <Itemcard img={item.img} title={item.title}  desc={item.desc} price={item.price} key={index} />
                            )
                        })}                
                        </div>
                    </section>                      
                </Tab>
                
                <Tab eventKey="tab-3" title="Snacks & Sides">
                <section className="py-4 container">
                        <div className="row justify-content-center">
                        {data.SnacksSides.map((item, index) =>{
                            return(
                            <Itemcard img={item.img} title={item.title}  desc={item.desc} price={item.price} key={index} />
                            )
                        })}                
                        </div>
                    </section>

                </Tab>

                <Tab eventKey="tab-4" title="Beverages & Desserts" >
                <section className="py-4 container">
                        <div className="row justify-content-center">
                        {data.BeveragesDesserts.map((item, index) =>{
                            return(
                            <Itemcard img={item.img} title={item.title}  desc={item.desc} price={item.price} key={index} />
                            )
                        })}                
                        </div>
                    </section>
    

               </Tab>
              
    

                </Tabs>
            </Row>
        </Container>    
    
        </>
    );
};

export default Home; 
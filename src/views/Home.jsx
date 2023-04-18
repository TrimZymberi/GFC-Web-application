import React from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import '../styles/tab-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCategories from '../components/ProductCategories';


export default function Home() {
  return (
    <div>
      <ProductCategories />
    </div>

  )
}

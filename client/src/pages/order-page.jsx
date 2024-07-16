import React from 'react';
import Layout from "../components/layout/layout.jsx";
import InvoiceList from "../components/invoice/invoice-list.jsx";
const CartPage = () => {
    return (
        <Layout>
            <h2>Order</h2>
            <InvoiceList/> 
        </Layout>
    );
};

export default CartPage;
import React, { Component } from 'react';
import ProductControl from '../components/ProductControl';

const PRODUCT_PRICES = {
    paper: 6,
    metal: 12,
    ac: 1000,
    plastic: 7
};

const productTypes = {
    paper: 'paper',
    metal: 'metal',
    ac: 'ac',
    plastic: 'plastic',
};

class Kkart extends Component {
    state = {
        products: {
            paper: 0,
            metal: 0,
            ac: 0,
            plastic: 0
        },
        estimatedPrice: 0,
    }

    addProductHandler = (type) => {
        const oldCount = this.state.products[type];
        const newCount = oldCount + 1;
        const updatedProducts = {
            ...this.state.products
        };
        updatedProducts[type] = newCount;
        const priceAddition = PRODUCT_PRICES[type];
        const oldPrice = this.state.estimatedPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ estimatedPrice: newPrice, products: updatedProducts });
    }

    removeProductHandler = (type) => {
        const oldCount = this.state.products[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;
        const updatedProducts = {
            ...this.state.products
        };
        updatedProducts[type] = newCount;
        const priceDeduction = PRODUCT_PRICES[type];
        const oldPrice = this.state.estimatedPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({estimatedPrice: newPrice, products: updatedProducts});
    }

    render() {
        console.log(productTypes.paper);
        return (
            <>
                <h1>Hello States!</h1>
                <ProductControl
                    number={this.state.products.paper}
                    productAdded={() => this.addProductHandler(productTypes.paper)}
                    productRemoved={() => this.removeProductHandler(productTypes.paper)}
                />
                <ProductControl
                    number={this.state.products.metal}
                    productAdded={() => this.addProductHandler(productTypes.metal)}
                    productRemoved={() => this.removeProductHandler(productTypes.metal)}
                />
                <ProductControl
                    number={this.state.products.plastic}
                    productAdded={() => this.addProductHandler(productTypes.plastic)}
                    productRemoved={() => this.removeProductHandler(productTypes.plastic)}
                />
                <ProductControl
                    number={this.state.products.ac}
                    productAdded={() => this.addProductHandler(productTypes.ac)}
                    productRemoved={() => this.removeProductHandler(productTypes.ac)}
                />
                <h1>{this.state.estimatedPrice}</h1>
            </>
        );
    }
}

export default Kkart;
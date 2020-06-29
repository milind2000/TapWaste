import React, { Component } from 'react';
import { Container, Image, Row, Button } from 'react-bootstrap';


import classes from './Cart.module.css';
import ProductControl from '../components/ProductControl';


import NewsImg from '../assets/images/news.png';
import BoxImg from '../assets/images/box.png';
import BookImg from '../assets/images/study.png';
import PlasticImg from '../assets/images/plastic.png';
import AluImg from "../assets/images/pressure-cooker.png";
import AcImg from '../assets/images/air-conditioner.png';
import FridgeImg from '../assets/images/refrigerator.png';
import WashingImg from '../assets/images/notification.png';
import BatteryImg from '../assets/images/starter.png';
import EwasteImg from '../assets/images/iphone.png';
import CaseImg from '../assets/images/cpu.png';
import LcdImg from '../assets/images/lcd.png';

const PRODUCT_PRICES = {
    paper: 6,
    cardboard: 8,
    books: 5,
    plastic: 7,
    aluminium: 10,
    ac: 1000,
    fridge: 500,
    washingmachine: 700,
    battery: 100,
    ewaste: 70,
    cpu: 1200,
    lcd: 700,
};

const productTypes = {
    paper: 'paper',
    cardboard: 'cardboard',
    books: 'books',
    plastic: 'plastic',
    aluminium: 'aluminium',
    ac: 'ac',
    fridge: 'fridge',
    washingmachine: 'washingmachine',
    battery: 'battery',
    ewaste: 'ewaste',
    cpu: 'cpu',
    lcd: 'lcd'
};

class CartPage extends Component {
    state = {
        products: {
            paper: 0,
            cardboard: 0,
            books: 0,
            plastic: 0,
            aluminium: 0,
            ac: 0,
            fridge: 0,
            washingmachine: 0,
            battery: 0,
            ewaste: 0,
            cpu: 0,
            lcd: 0
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
        this.setState({ estimatedPrice: newPrice, products: updatedProducts });
    }

    render() {
        return (

            <div>
                <Container className={classes.imgForCart}>
                    <Row id="services" className="d-flex justify-content-center text-center">
                        <h2 className={classes.head}>Add what you want to sell!!</h2>
                    </Row>

                    <Row className="d-flex justify-content-center">

                        <div className="item col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>Newspaper</h5>
                            <h5>(in kg)</h5>
                            <Image src={NewsImg} />
                            <ProductControl
                                number={this.state.products.paper}
                                productAdded={() => this.addProductHandler(productTypes.paper)}
                                productRemoved={() => this.removeProductHandler(productTypes.paper)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>CardBoard</h5>
                            <h5>(in kg)</h5>
                            <Image src={BoxImg} />
                            <ProductControl
                                number={this.state.products.cardboard}
                                productAdded={() => this.addProductHandler(productTypes.cardboard)}
                                productRemoved={() => this.removeProductHandler(productTypes.cardboard)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>Books</h5>
                            <h5>(in kg)</h5>
                            <Image src={BookImg} />
                            <ProductControl
                                number={this.state.products.books}
                                productAdded={() => this.addProductHandler(productTypes.books)}
                                productRemoved={() => this.removeProductHandler(productTypes.books)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center">
                            <h5 className={classes.itemHead}>Mixed Plastic</h5>
                            <h5>(in kg)</h5>
                            <Image src={PlasticImg} />
                            <ProductControl
                                number={this.state.products.plastic}
                                productAdded={() => this.addProductHandler(productTypes.plastic)}
                                productRemoved={() => this.removeProductHandler(productTypes.plastic)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>Aluminium</h5>
                            <h5>(in kg)</h5>
                            <Image src={AluImg} />
                            <ProductControl
                                number={this.state.products.aluminium}
                                productAdded={() => this.addProductHandler(productTypes.aluminium)}
                                productRemoved={() => this.removeProductHandler(productTypes.aluminium)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>AC</h5>
                            <h5>(in units)</h5>
                            <Image src={AcImg} />
                            <ProductControl
                                number={this.state.products.ac}
                                productAdded={() => this.addProductHandler(productTypes.ac)}
                                productRemoved={() => this.removeProductHandler(productTypes.ac)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>Refrigerator</h5>
                            <h5>(in units)</h5>
                            <Image src={FridgeImg} />
                            <ProductControl
                                number={this.state.products.fridge}
                                productAdded={() => this.addProductHandler(productTypes.fridge)}
                                productRemoved={() => this.removeProductHandler(productTypes.fridge)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>Washing Machine</h5>
                            <h5>(in units)</h5>
                            <Image src={WashingImg} />
                            <ProductControl
                                number={this.state.products.washingmachine}
                                productAdded={() => this.addProductHandler(productTypes.washingmachine)}
                                productRemoved={() => this.removeProductHandler(productTypes.washingmachine)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>Battery</h5>
                            <h5>(in units)</h5>
                            <Image src={BatteryImg} />
                            <ProductControl
                                number={this.state.products.battery}
                                productAdded={() => this.addProductHandler(productTypes.battery)}
                                productRemoved={() => this.removeProductHandler(productTypes.battery)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>E-Waste</h5>
                            <h5>(in kg)</h5>
                            <Image src={EwasteImg} />
                            <ProductControl
                                number={this.state.products.ewaste}
                                productAdded={() => this.addProductHandler(productTypes.ewaste)}
                                productRemoved={() => this.removeProductHandler(productTypes.ewaste)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>CPU</h5>
                            <h5>(in units)</h5>
                            <Image src={CaseImg} />
                            <ProductControl
                                number={this.state.products.cpu}
                                productAdded={() => this.addProductHandler(productTypes.cpu)}
                                productRemoved={() => this.removeProductHandler(productTypes.cpu)}
                            />
                        </div>

                        <div className="col-lg-4 col-md-6 text-center mb-5">
                            <h5 className={classes.itemHead}>LCD-LED</h5>
                            <h5>(in units)</h5>
                            <Image src={LcdImg} />
                            <ProductControl
                                number={this.state.products.lcd}
                                productAdded={() => this.addProductHandler(productTypes.lcd)}
                                productRemoved={() => this.removeProductHandler(productTypes.lcd)}
                            />
                        </div>
                    </Row>
                    <div className="col text-center mb-5">
                        <h1>Estimated Price is: ₹ {this.state.estimatedPrice}</h1>
                    </div>

                    <div className="col text-center">
                        <Button href="#" variant="success" size="lg">Place Order</Button>
                    </div>

                </Container>
            </div>
        );
    }
}

export default CartPage;
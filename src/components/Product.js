import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart, count } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div class="ribbon">
                        <span>Vezil Store</span>
                    </div>

                    <ProductConsumer>
                        {(value) => (
                            <div
                                className="img-container p-5"
                                onClick={() => value.handleDetail(id)}
                            >
                                <h5 className="text-blue font-italic price">
                                    <span className="mr-1">$</span>
                                    {price}
                                </h5>

                                <Link to="/details">
                                    <img
                                        src={img}
                                        alt="product"
                                        className="card-img-top"
                                    />
                                </Link>
                                {inCart ? (
                                    <div className="cardCount">
                                        <div
                                            className="btn btn-black mx-1 btnCard"
                                            onClick={() => value.increment(id)}
                                        >
                                            +
                                        </div>
                                        <div>{count}</div>
                                        <div
                                            className="btn btn-black mx-1 btnCard"
                                            onClick={() => value.decrement(id)}
                                        >
                                            -
                                        </div>
                                    </div>
                                ) : (
                                    ''
                                )}
                                <button
                                    className="cart-btn"
                                    disabled={inCart}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                    {inCart ? (
                                        <p
                                            className="text-capitalize mb-0 "
                                            disabled
                                        >
                                            {' '}
                                            <i className="fas fa-check"></i>
                                            &nbsp; In Cart
                                        </p>
                                    ) : (
                                        <i className="fas fa-cart-plus">
                                            &nbsp; Add to the cart
                                        </i>
                                    )}
                                </button>
                            </div>
                        )}
                    </ProductConsumer>

                    {/*card footer*/}

                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                    </div>
                </div>
            </ProductWrapper>
        );
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};

const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 0.5s linear;
        box-shadow: -0.1em 0.1em 0.3em rgba(0, 0, 0, 0.1);
    }

    .card .ribbon {
        z-index: 1;
        width: 100px;
        height: 100px;
        overflow: hidden;
        position: absolute;
        top: -10px;
        left: -10px;
    }

    .ribbon::before,
    .ribbon::after {
        position: absolute;
        z-index: -1;
        content: '';
        display: block;
        border: 5px solid #2980b9;
        border-top-color: transparent;
        border-left-color: transparent;
    }

    .ribbon span {
        position: absolute;
        display: block;
        width: 225px;
        padding: 15px 0;
        background-color: #3498db;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        color: #fff;
        font: 700 10px/2 'Lato', sans-serif;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
        text-transform: uppercase;
        text-align: center;
        padding-left: 50px;
    }

    .ribbon::before {
        top: 0;
        right: 0;
    }
    .ribbon::after {
        bottom: 0;
        left: 0;
    }

    .ribbon span {
        right: -25px;
        top: 30px;
        transform: rotate(-45deg);
    }

    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 0.5s linear;
    }

    &:hover {
        .card {
            border: 0.04rem solid rgba(0, 0, 0, 0.2);
            box-shadow: -0.3em 0.3em 0.5em rgba(0, 0, 0, 0.2);
        }
        .card-footer {
            backgorund: rgba(247, 247, 247);
        }
    }

    .img-container {
        position: relative;
        overflow: hidden;
    }

    .card-img-top {
        transition: all 0.5s linear;
    }

    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }

    .cart-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0.2rem 0.4rem;
        background: var(--lightBlue);
        border: none;
        color: var(--mainWhite);
        font-size: 1.4rem;
        border-radius: 0.5rem 0 0 0;
        transform: translate(100%, 100%);
        transition: all 0.5s linear;
    }

    .img-container:hover .cart-btn {
        transform: translate(0, 0);
    }

    .cart-btn:hover {
        color: var(--mainBlue);
        cursor: pointer;
    }

    .price {
        position: absolute;
        top: 0;
        right: 0;
        padding: 10px;
        text-shadow: -5px 1px 12px rgba(19, 0, 128, 0.66);
    }

    .cardCount {
        position: absolute;
        bottom: 0;
        left: 0;
        background: var(--mainYellow);
        border: none;
        color: black;
        font-size: 1.4rem;
        border-radius: 0 0.5rem 0 0;
        transform: translate(100%, 100%);
        transition: all 0.5s linear;
        display: flex;
        justify-content: space-evenly;
    }

    .img-container:hover .cardCount {
        transform: translate(0, 0);
        padding: 0.2rem 0.4rem;
    }

    .cardCount div {
        padding-right: 5px;
        padding-left: 5px;
        cursor: pointer;
    }

    .cardCound btnCard {
        border: 0 !important;
    }
`;

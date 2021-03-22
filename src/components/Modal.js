import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (modalOpen) {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div
                                            id="modal"
                                            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                                        >
                                            <div
                                                className="closeButton"
                                                onClick={() => closeModal()}
                                            >
                                                x
                                            </div>

                                            <h5>item added to the card</h5>
                                            <img
                                                src={img}
                                                className="img-fluid"
                                                alt="img product"
                                            />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">
                                                price: {price} $
                                            </h5>
                                            <Link to="/">
                                                <ButtonContainer
                                                    onClick={() => closeModal()}
                                                >
                                                    <i className="fas fa-undo"></i>
                                                    &nbsp;store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer
                                                    cart
                                                    onClick={() => closeModal()}
                                                >
                                                    <i className="fas fa-shopping-cart"></i>
                                                    &nbsp;go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    #modal {
        background: var(--mainWhite);
        padding: 40px;
        border-radius: 10px;
    }

    .closeButton {
        position: absolute;
        top: 0;
        right: 0;
        color: red;
        padding-right: 10px;
        text-transform: lowercase;
        font-size: 1.5rem;
        cursor: pointer;

        &:hover {
            color: black;
        }
    }
`;

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
                    const { errorModalOpen, closeErrorModal } = value;

                    console.log({ errorModalOpen });

                    if (errorModalOpen) {
                        return (
                            <ErrorModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div
                                            id="errorModal"
                                            className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                                        >
                                            <div
                                                className="closeButton"
                                                onClick={() =>
                                                    closeErrorModal()
                                                }
                                            >
                                                x
                                            </div>
                                            <Link to="/">
                                                <ButtonContainer
                                                    onClick={() =>
                                                        closeErrorModal()
                                                    }
                                                >
                                                    <i className="fas fa-undo"></i>
                                                    &nbsp;store
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer
                                                    cart
                                                    onClick={() =>
                                                        closeErrorModal()
                                                    }
                                                >
                                                    <i className="fas fa-shopping-cart"></i>
                                                    &nbsp;go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ErrorModalContainer>
                        );
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ErrorModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #errorModal {
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

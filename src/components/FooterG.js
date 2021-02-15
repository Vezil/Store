import React, { Component } from 'react';
import styled from 'styled-components';

export default class FooterG extends Component {
    render() {
        return (
            <FooterWrapper>
                <div className="FooterG page-footer text-center p-2">
                    © 2019 Copyright: Szymon Wojaczek&nbsp;&nbsp;
                    <a href="https://github.com/Vezil/" target="_blank">
                        Github
                    </a>
                </div>
            </FooterWrapper>
        );
    }
}

const FooterWrapper = styled.nav`
    background: black;
    color: gray;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
`;

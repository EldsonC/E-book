import styled from "styled-components";

export const SubheaderStyle = styled.div `
    padding: 0px 24px;
    width: calc(100vw - 257px);
    height: 65px;

    position: absolute;
    top: 55px;
    right: 0px;

    z-index: 1000;

    display: flex;
    align-items: center;

    background-color: #28292E;

    @media screen and (max-width: 900px) {
        width: calc(100vw - 48px);
    }
`;
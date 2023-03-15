import styled from "styled-components";

export const HeaderStyle = styled.header `
    width: calc(100vw - 209px);
    height: 55px;

    display: flex;
    justify-content: space-between;

    position: absolute;
    top: 0px;
    right: 0px;
    
    background-color: #41B3B3;

    button {
        display: none;
    }

    @media screen and (max-width: 900px) {
        width: 100vw;

        button {
            width: 80px;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            background: rgb(76, 190, 190);
            border: none;
            outline: none;

            color: white;
            font-size: 11.12px;
            font-weight: 700;

            cursor: pointer;

        }
    }
`;
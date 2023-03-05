import styled from "styled-components";

export const SearchAreaStyle = styled.div `
    padding: 0px 23px;
    width: 202px;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #4CBEBE;

    input {
        height: 100%;
        border: none;
        outline: none;

        background: transparent;

        color: #ffffff;

        ::placeholder {
            font-size: 11.77px;
            font-weight: 700;

            color: #ffffff;
        }
    }
`;
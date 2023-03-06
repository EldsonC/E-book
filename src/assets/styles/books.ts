import styled from "styled-components";

export const BooksStyle = styled.div `
    padding: 38px 24px;
    width: calc(100vw - 257px);
    height: calc(100vh - 196px);

    position: absolute;
    bottom: 0px;
    right: 0px;

    overflow: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    gap: 15px;
`;
import styled from "styled-components";

export const BookDetailsStyle = styled.div `
    padding: 38px 24px;
    width: calc(100vw - 257px);
    height: calc(100vh - 196px);

    position: absolute;
    bottom: 0px;
    right: 0px;

    overflow: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .cover-bg {
        width: 100%;
        height: 300px;

        position: absolute;
        top: 0px;
        left: 0px;

        img {
            width: 100%;
            height: 100%;

            object-fit: cover;
        }
    }

    .container-left {
        z-index: 1000;
        .cover-book {
            width: 300px;
            height: 430px;

            img {
                width: 100%;
                height: 100%;

                object-fit: cover;
            }
        }
    }
`;
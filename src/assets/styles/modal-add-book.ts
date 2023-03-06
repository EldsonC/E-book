import styled from "styled-components";

export const ModalAddBookStyle = styled.div `
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1000;

    background: hsla(0, 0%, 0%, 0.65);

    animation: animationModalAddBook .5s;

    .conatiner-form {
        width: 50%;
        height: 80%;

        z-index: 2000;

        background: white;
        border-radius: 7px;

        header {
            padding: 15px 23px;
            display: flex;
            flex-direction: row-reverse;

            .btn-close {
                cursor: pointer;
            }
        }
    }

    @keyframes animationModalAddBook {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
`;
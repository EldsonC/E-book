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
        width: 600px;
        height: 400px;

        z-index: 2000;

        background: white;
        border-radius: 7px;

        display: flex;
        flex-direction: column;

        ::before {
            content: "";
            display: flex;

            position: absolute;

            width: 254px;
            height: 400px;

            background: #41B3B3;
            border-radius: 7px 0px 0px 7px;
        }

        header {
            padding: 15px 23px;
            width: calc(100% - 46px);

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .btn-close {
                cursor: pointer;
            }
        }

        form {
            padding: 0px 23px;
            width: calc(100% - 46px);
            height: 90%;

            z-index: 1000;

            display: flex;
            /* justify-content: space-between; */
            gap: 65px;

            .preview-image-cover {
                width: auto;
                input {
                    display: none;
                }
    
                label {
                    width: 205px;
                    height: 307px;
    
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    z-index: 2500;
    
                    gap: 15px;
    
                    /* border: 2px dashed #BABABA; */
    
                    cursor: pointer;
    
                    span {
                        font-size: 12px;
                        font-weight: 700;
                        color: #ffffff;
                    }
                }
            }

            .data-input-book {
                width: auto;
                display: flex;
                flex-direction: column;
                gap: 15px;

                input {
                    padding-left: 15px;
                    width: 250px;
                    height: 40px;
                    border-radius: 7px;
                    border: 1px solid grey;

                    outline-color: #41B3B3;
                    outline-width: 1px;
                }

                button {
                    height: 40px;
                    border: none;
                    outline: none;

                    background-color: #41B3B3;
                    border-radius: 7px;

                    color: white;
                    font-weight: 700;

                    cursor: pointer;
                }
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
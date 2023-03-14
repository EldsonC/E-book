import styled from "styled-components";

export const ModalAddBookStyle = styled.div `
    width: 100vw;
    height: 100vh;

    position: absolute;
    top: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2000;

    background: hsla(0, 0%, 0%, 0.65);

    animation: animationModalAddBook .5s;

    .conatiner-form {
        width: 600px;
        height: 400px;

        z-index: 1000;

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
    
                    cursor: pointer;

                    img {
                        display: none;
                        width: 205px;
                        height: 307px;

                        object-fit: cover;
                    }
    
                    span {
                        font-size: 12px;
                        font-weight: 700;
                        color: #ffffff;
                    }

                    #image_fill {
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        gap: 15px;

                    }
                }
            }

            .data-input-book {
                width: auto;
                display: flex;
                flex-direction: column;
                gap: 15px;

                input, select {
                    padding-left: 15px;
                    width: 250px;
                    height: 40px;
                    border-radius: 7px;
                    border: 1px solid grey;
                    background: transparent;

                    outline-color: #41B3B3;
                    outline-width: 1px;
                }

                select {
                    width: 100%;
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

                #btn-delete-mobile {
                    display: none;
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

    @media screen and (max-width: 900px) {
        width: 100vw;
        height: 100vh;

        position: absolute;
        top: 0px;

        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 2000;

        background: hsla(0, 0%, 0%, 0.65);

        animation: animationModalAddBook .5s;

        .conatiner-form {
            padding: 30px 0px;
            width: 100%;
            height: auto;

            z-index: 1000;

            background: white;
            border-radius: 7px;

            display: flex;
            flex-direction: column;

            ::before {
                content: "";
                display: flex;

                position: absolute;

                width: 100%;
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
                padding: 0;
                width: 100%;
                height: 90%;

                z-index: 1000;

                display: flex;
                flex-direction: column;
    
                align-items: center;
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
        
                        cursor: pointer;

                        img {
                            display: none;
                            width: 205px;
                            height: 307px;

                            object-fit: cover;
                        }
        
                        span {
                            font-size: 12px;
                            font-weight: 700;
                            color: #ffffff;
                        }

                        #image_fill {
                            display: flex;
                            flex-direction: column;
                            align-items: center;

                            gap: 15px;

                        }
                    }
                }

                .data-input-book {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 15px;

                    input, select {
                        padding-left: 15px;
                        width: 80%;
                        height: 40px;
                        border-radius: 7px;
                        border: 1px solid grey;
                        background: transparent;

                        outline-color: #41B3B3;
                        outline-width: 1px;
                    }

                    select {
                        width: 85%;
                    }

                    button {
                        width: 85%;
                        height: 40px;
                        border: none;
                        outline: none;

                        background-color: #41B3B3;
                        border-radius: 7px;

                        color: white;
                        font-weight: 700;

                        cursor: pointer;
                    }

                    #btn-delete-mobile {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: rgb(238, 28, 28);
                    }
                }

            }
        }
    }
`;
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

    .container-details {
        display: flex;
        .cover-bg {
            width: 100%;
            height: 500px;
    
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
            margin: 0 auto;
            z-index: 1000;
    
            display: flex;
            gap: 50px;
            .cover-book {
                width: 300px;
                height: 430px;
    
                img {
                    width: 100%;
                    height: 100%;
    
                    object-fit: cover;
                }
            }
    
            .container-right {
                h1 {
                    text-transform: capitalize;
                    font-size: 40px;
                    margin-bottom: 15px;
                    color: white;
                }
    
                
                .data-details {
                    margin-bottom: 30px;
                    display: flex;
                    gap: 15px;
                    
                    .container-card {
                        padding: 5px 24px;
                        
                        display: flex;
                        align-items: center;
    
                        gap: 7px;
    
                        background: hsla(0, 0%, 100%, 0.32);
                        
                        border: 1px solid white;
                        border-radius: 50px;
                        
                        cursor: pointer;
                        
                        span {
                            font-size: 12px;
                            font-weight: 500;
                            color: white;

                            text-transform: capitalize;
                        }
                    }
                }
    
                p {
                    line-height: 22px;
                    max-width: 500px;
                    color: white;
                    font-size: 16px;
                    font-weight: 400;
                }
    
                .button-container {
                    margin-top: 30px;
    
                    display: flex;
                    gap: 15px;
    
                    button {
                        padding: 7px 40px;
    
                        border-radius: 50px;
                        border: none;
                        outline: none;
    
                        color: white;
                        font-size: 13px;
                        font-weight: 700;
    
                        cursor: pointer;
                    }
    
                    #delete-btn {
                        background: #EE1C1C;
                    }
    
                    #edit-btn {
                        background: #41B3B3;
                    }
                }
            }
        }
    }

    .others-books {
        padding: 35px 23px;
        width: calc(100% - 46px);
        height: 500px;

        position: absolute;
        top: 500px;
        left: 0px;

        display: flex;
        flex-wrap: wrap;
        gap: 15px;
    }

    @media screen and (max-width: 900px){
        padding: 38px 0px;
        width: 100vw;

        .container-details {
            padding: 30px 0px;
            width: 100%;
            display: flex;

            background: black;

            background-size: cover;


            
            .cover-bg {
                width: 100%;
                height: 500px;
        
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
                margin: 0 auto;
                z-index: 1000;
        
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 50px;
                .cover-book {
                    width: 300px;
                    height: 430px;
        
                    img {
                        width: 100%;
                        height: 100%;
        
                        object-fit: cover;
                    }
                }
        
                .container-right {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    h1 {
                        max-width: 270px;
                        text-transform: capitalize;
                        font-size: 30px;
                        margin-bottom: 15px;
                        
                        color: white;
                        text-align: center;
                    }
        
                    
                    .data-details {
                        padding: 30px 15px;
                        margin-bottom: 30px;
                        display: flex;
                        justify-content: center;
                        flex-wrap: wrap;
                        gap: 15px;

                        position: relative;
                        border-radius: 20px;


                        background-size: cover;
                        
                        .container-card {

                            padding: 5px 24px;
                            
                            display: flex;
                            align-items: center;
        
                            gap: 7px;
        
                            background: hsla(0, 0%, 100%, 0.32);
                            
                            border: 1px solid white;
                            border-radius: 50px;
                            
                            cursor: pointer;
                            
                            span {
                                font-size: 12px;
                                font-weight: 500;
                                color: white;

                                text-transform: capitalize;
                            }
                        }
                    }
        
                    p {
                        line-height: 22px;
                        max-width: 400px;
                        color: white;
                        font-size: 16px;
                        font-weight: 400;

                        text-align: justify;
                    }
        
                    .button-container {
                        margin-top: 30px;
        
                        display: flex;
                        gap: 15px;
        
                        button {
                            width: 150px;
                            padding: 7px 40px;
        
                            border-radius: 50px;
                            border: none;
                            outline: none;
        
                            color: white;
                            font-size: 13px;
                            font-weight: 700;
        
                            cursor: pointer;
                        }
        
                        #delete-btn {
                            background: #EE1C1C;
                        }
        
                        #edit-btn {
                            background: #41B3B3;
                        }
                    }
                }
            }
        }

        .others-books {
            margin-top: 700px;
            padding: 35px 23px;
            width: calc(100% - 46px);
            height: 500px;

            position: absolute;
            top: 500px;
            left: 0px;

            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }
    }
    
`;
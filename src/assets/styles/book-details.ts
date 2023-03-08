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
                        }
                    }
                }
    
                p {
                    line-height: 25px;
                    max-width: 500px;
                    color: white;
                    font-size: 16px;
                    font-weight: 500;
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
`;
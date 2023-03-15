import styled from "styled-components";

export const SidebarStyle = styled.aside `
    width: 209px;
    height: 100vh;

    position: absolute;
    top: 0px;
    left: 0px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color: #17181C;

    header {
        width: 100%;
        height: 55px;

        display: flex;

        background-color: #282830;

        .menu-container {
            width: 55px;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            border-right: 1px solid #33333D;
        }

        .logo-container {
            width: 154px;
            height: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    nav {
        width: 100%;

        ul {
            width: 100%;
            display: flex;
            flex-direction: column;

            li {
                width: 100%;
                height: 55px;

                list-style: none;
                
                border-bottom: 1px solid #0F0F0F;

                .nav-button-style {
                    padding: 0px 15px;
                    height: 100%;
                    display: flex;
                    gap: 29px;
                    align-items: center;

                    text-decoration: none;

                    span {
                        color: #BDBDBD;
                        font-size: 11.77px;
                        font-weight: 700;
                    }
                }
            }
        }
    }

    button {
        width: 100%;
        height: 55px;

        border: none;
        outline: none;

        background-color: #41B3B3;

        color: white;
        font-size: 11.77px;
        font-weight: 700;

        cursor: pointer;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`;
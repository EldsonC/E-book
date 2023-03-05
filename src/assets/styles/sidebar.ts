import styled from "styled-components";

export const SidebarStyle = styled.aside `
    width: 209px;
    height: 100vh;

    position: absolute;
    top: 0px;
    left: 0px;

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
`;
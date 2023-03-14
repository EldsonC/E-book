import styled from "styled-components";

export const BookCardStyle = styled.div `

    width: 205px;
    height: 307px;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    
    .modal-card {
        width: 205px;
        height: 307px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: hsla(0, 0%, 0%, 0.65);

        animation: showModal .5s;

        button {
            width: 131px;
            height: 40px;

            border-radius: 7px;

            background-color: #41B3B3;
            border: none;
            outline: none;

            color: white;
            font-weight: 500;

            cursor: pointer;
        }
    }

    @keyframes showModal {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @media screen and (max-width: 900px) {
        width: 172px;
        height: 255px;
    }
`;
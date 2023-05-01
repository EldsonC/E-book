import styled from "styled-components";

export const BookCardStyle = styled.div `
    width: 205px;
    height: 307px;

    display: flex;
    flex-direction: column;

    background: url("https://firebasestorage.googleapis.com/v0/b/marya-4c963.appspot.com/o/image%203.png?alt=media&token=ff17a078-5517-4acf-82ac-0d2fa7303e83");
    background-size: cover;
    /* object-fit: cover; */

    cursor: pointer;

    img {
        display: none;
        width: 100%;
        height: 100%;

        object-fit: cover;
    }

    span {
        padding-left: 55px;
        max-width: 120px;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;

        text-align: center;

        color: white;
        font-weight: bold;
        font-size: 10px;
        
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
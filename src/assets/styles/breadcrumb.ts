import styled from "styled-components";

export const BreadCrumbStyle = styled.div `
    display: flex;
    gap: 13px;
    align-items: center;

    span {
        font-size: 16px;
        font-weight: 700;

        text-transform: capitalize;
    }
    #title {
        color: #ffffff;
    }

    #subtitle {
        color: #BDBDBD;
    }
`;
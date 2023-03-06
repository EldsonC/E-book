import { SubheaderStyle } from "../../assets/styles/subheader";
import { BreadCrumb } from "./breadcrumb";

export function Subheader() {
    return (
        <SubheaderStyle>
            <BreadCrumb 
                title="Book"
                subTitle="All books"
            />
        </SubheaderStyle>
    )
}
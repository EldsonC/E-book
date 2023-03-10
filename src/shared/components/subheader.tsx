import { SubheaderStyle } from "../../assets/styles/subheader";
import { BreadCrumb } from "./breadcrumb";

import { dataDetails } from "../../redux/features/detailsbookSlice";
import { useSelector } from "react-redux";

export function Subheader() {

    const bookName = useSelector(dataDetails)
    return (
        <SubheaderStyle>
            <BreadCrumb 
                title="Books"
                subTitle={bookName.name}
            />
        </SubheaderStyle>
    )
}
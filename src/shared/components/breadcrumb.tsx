import { ArrowRightIcon } from "../../assets/icons/arrowright";
import { BreadCrumbStyle } from "../../assets/styles/breadcrumb";

interface BreadCrumbProps {
    title: string;
    subTitle: string;
}

export function BreadCrumb({title, subTitle}:BreadCrumbProps) {
    return (
        <BreadCrumbStyle>
            <span id="title">{title}</span>
            <ArrowRightIcon/>
            <span id="subtitle">{subTitle}</span>
        </BreadCrumbStyle>
    )
}
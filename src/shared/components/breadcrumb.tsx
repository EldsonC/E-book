import { ArrowRightIcon } from "../../assets/icons/arrowright";

interface BreadCrumbProps {
    title: string;
    subTitle: string;
}

export function BreadCrumb({title, subTitle}:BreadCrumbProps) {
    return (
        <div>
            <span>{title}</span>
            <ArrowRightIcon/>
            <span>{subTitle}</span>
        </div>
    )
}
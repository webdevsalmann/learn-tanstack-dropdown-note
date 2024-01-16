import { ReactNode, ReactElement, createElement } from "react";

interface GenerateLoadersProps {
    count: number;
    component: ReactElement;
}

export default function GenerateSkeletons({ count, component }: GenerateLoadersProps) {
    const skeletons = [];
    for (let i = 0; i < count; i++) {
        skeletons.push(createElement(component.type, { ...component.props, key: i }));
    }
    return skeletons;
}
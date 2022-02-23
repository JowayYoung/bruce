import { ReactNode, MouseEventHandler } from 'react';

declare const ButtonTypes: string[];
declare type ButtonType = typeof ButtonTypes[number];
declare const ButtonShapes: string[];
declare type ButtonShape = typeof ButtonShapes[number];
interface IProps$1 {
    children: string | ReactNode;
    className?: string;
    disabled?: boolean;
    href?: string;
    icon?: string;
    onClick?: MouseEventHandler<HTMLElement>;
    shape?: ButtonShape;
    type?: ButtonType;
}
declare function Button({ children, className, disabled, href, icon, onClick, shape, type }: IProps$1): JSX.Element;
declare namespace Button {
    var defaultProps: {
        children: string;
        className: string;
        disabled: boolean;
        href: string;
        icon: string;
        onClick: null;
        shape: string;
        type: string;
    };
}

interface IProps {
    children: string | ReactNode;
    className?: string;
    height: number;
    icon: ReactNode;
}
declare function Empty({ children, className, height, icon }: IProps): JSX.Element;
declare namespace Empty {
    var defaultProps: {
        children: string;
        className: string;
        height: number;
        icon: null;
    };
}

export { Button, Empty };

import { ReactNode, FC, MouseEventHandler, CSSProperties, RefObject } from 'react';

type CloseWayEnum = "all" | "btn" | "mask";
interface ModalBaseType {
    children: ReactNode;
    className?: string;
    closeWay?: CloseWayEnum;
    title?: string;
}
interface ModalType extends ModalBaseType {
    handler?: ReactNode[];
    onClose?: () => void | Promise<void>;
    root?: HTMLElement;
    visible?: boolean;
}
interface ModalWrapperType extends ModalBaseType {
    handler?: ReactNode[];
    onClose?: () => void | Promise<void>;
}
type UseModalType = [
    FC<ModalWrapperType>,
    () => void,
    () => Promise<void>,
    boolean
];
declare function Modal({ children, className, closeWay, handler, onClose, root, title, visible }: ModalType): JSX.Element | null;
declare function useModal(): UseModalType;

interface ActionsheetType {
    btnText?: string;
    children: ReactNode;
    className?: string;
    closeWay?: CloseWayEnum;
    onCancel?: () => void | Promise<void>;
    onConfirm?: () => void | Promise<void>;
    title: string;
    visible?: boolean;
}
interface ActionsheetWrapperType extends ModalBaseType {
    btnText?: string;
    onCancel?: () => boolean | Promise<boolean>;
    onCancelCall?: (flag: boolean) => void | Promise<void>;
    onConfirm?: () => boolean | Promise<boolean>;
    onConfirmCall?: (flag: boolean) => void | Promise<void>;
}
type UseActionsheetType = [
    FC<ActionsheetWrapperType>,
    () => void,
    () => Promise<void>,
    boolean
];
declare function Actionsheet({ btnText, children, className, closeWay, onConfirm, onCancel, title, visible }: ActionsheetType): JSX.Element | null;
declare function useActionsheet(): UseActionsheetType;

interface AlertType extends ModalBaseType {
    btnText?: string;
    onCancel?: () => boolean | Promise<boolean>;
    onCancelCall?: (flag: boolean) => void | Promise<void>;
    onConfirm?: () => boolean | Promise<boolean>;
    onConfirmCall?: (flag: boolean) => void | Promise<void>;
}
type UseAlertType = [
    FC<AlertType>,
    () => void,
    () => Promise<void>,
    boolean
];
declare function actionAlert({ btnText, children, className, closeWay, onCancel, onCancelCall, onConfirm, onConfirmCall, title }: AlertType): Promise<void>;
declare function useAlert(): UseAlertType;

interface ButtonPropsType {
    className?: string;
    disabled?: boolean;
    href?: string;
    icon?: string;
    onClick?: MouseEventHandler<HTMLElement>;
    style?: CSSProperties;
    target?: "blank" | "self";
    text?: string;
    type?: "cancel" | "confirm";
}
declare function Button({ className, disabled, href, icon, onClick, style, target, text, type }: ButtonPropsType): JSX.Element;

interface DialogType extends ModalBaseType {
    btnTextCancel?: string;
    btnTextConfirm?: string;
    onCancel?: () => boolean | Promise<boolean>;
    onCancelCall?: (flag: boolean) => void | Promise<void>;
    onConfirm?: () => boolean | Promise<boolean>;
    onConfirmCall?: (flag: boolean) => void | Promise<void>;
}
type UseDialogType = [
    FC<DialogType>,
    () => void,
    () => Promise<void>,
    boolean
];
declare function actionDialog({ btnTextCancel, btnTextConfirm, children, className, closeWay, onCancel, onCancelCall, onConfirm, onConfirmCall, title }: DialogType): Promise<void>;
declare function useDialog(): UseDialogType;

interface EmptyType {
    className?: string;
    color?: string;
    icon?: string;
    text?: string;
    size?: number;
}
declare function Empty({ className, color, icon, text, size }: EmptyType): JSX.Element;

interface IconType {
    className?: string;
    color?: string;
    disabled?: boolean;
    disabledColor?: string;
    marginLeft?: number | "auto";
    marginRight?: number | "auto";
    onClick?: MouseEventHandler<HTMLElement>;
    rorate?: -360 | -315 | -270 | -225 | -180 | -135 | -90 | -45 | 0 | 45 | 90 | 135 | 180 | 225 | 270 | 315 | 360;
    size?: number;
    value?: string;
}
declare function Icon({ className, color, disabled, disabledColor, marginLeft, marginRight, onClick, rorate, size, value }: IconType): JSX.Element | null;

interface LoadingType {
    className?: string;
    dot?: boolean;
    text?: string;
}
type UseLoadingType = [
    FC<LoadingType>,
    () => void,
    () => Promise<void>,
    boolean
];
declare function Loading({ className, dot, text }: LoadingType): JSX.Element | null;
declare function useLoading(): UseLoadingType;

interface ShareAppType {
    icon: string;
    link: string;
    name: string;
}
interface SharesheetType {
    className?: string;
    closeWay?: CloseWayEnum;
    list: ShareAppType[];
    onCancel?: () => void | Promise<void>;
    onChange?: (app: string) => string | Promise<string>;
    onConfirm?: () => void | Promise<void>;
    text?: string;
    title?: string;
    visible: boolean;
}
interface SharesheetWrapperType {
    className?: string;
    closeWay?: CloseWayEnum;
    list: ShareAppType[];
    onCancel?: () => boolean | Promise<boolean>;
    onCancelCall?: (flag: boolean) => void | Promise<void>;
    onChange?: (app: string) => string | Promise<string>;
    onConfirm?: () => boolean | Promise<boolean>;
    onConfirmCall?: (flag: boolean) => void | Promise<void>;
    text?: string;
    title?: string;
}
type UseSharesheetType = [
    FC<SharesheetWrapperType>,
    () => void,
    () => Promise<void>,
    boolean
];
declare function Sharesheet({ className, closeWay, list, onCancel, onChange, onConfirm, text, title, visible }: SharesheetType): JSX.Element | null;
declare function useSharesheet(): UseSharesheetType;

interface ToastType {
    className?: string;
    text: string;
}
declare function Toast({ className, text }: ToastType): JSX.Element;
interface ActionToastType {
    className?: string;
    delay?: number;
    text?: string;
}
declare function actionToast({ className, delay, text }: ActionToastType): Promise<void>;

declare function useDesktop(): boolean;

interface ParamsType$1 {
    opts?: {
        root?: Element | Document | null;
        rootMargin?: string;
        threshold?: number | number[];
    };
    position?: "top" | "bottom";
    ref: RefObject<HTMLElement> | null | undefined;
}
declare function useOnCross({ opts, position, ref }: ParamsType$1): boolean;

interface ParamsType {
    height: number;
    width: number;
}
declare function useOnResize(): ParamsType;

export { Actionsheet, Button, Empty, Icon, Loading, Modal, type ShareAppType, Sharesheet, Toast, actionAlert, actionDialog, actionToast, useActionsheet, useAlert, useDesktop, useDialog, useLoading, useModal, useOnCross, useOnResize, useSharesheet };

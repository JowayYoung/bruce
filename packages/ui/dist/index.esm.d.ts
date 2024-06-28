import { MouseEventHandler, CSSProperties, ReactNode, FC, ReactElement, RefObject } from 'react';

interface ButtonType$1 {
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
declare function Button({ className, disabled, href, icon, onClick, style, target, text, type }: ButtonType$1): JSX.Element;

type CloseWayEnum = "all" | "btn" | "mask";
type ButtonType = ReactElement<typeof Button>;
interface ModalBaseType {
    children: ReactNode;
    className?: string;
    closeWay?: CloseWayEnum;
    title?: string;
}
interface ModalType extends ModalBaseType {
    handler?: ButtonType[];
    onClose?: () => void | Promise<void>;
    root?: HTMLElement;
    visible?: boolean;
}
interface ModalWrapperType extends ModalBaseType {
    handler?: ButtonType[];
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
    copyText?: string;
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
declare function actionAlert({ btnText, children, className, closeWay, copyText, onCancel, onCancelCall, onConfirm, onConfirmCall, title }: AlertType): Promise<void>;
declare function useAlert(): UseAlertType;

interface DialogType extends ModalBaseType {
    btnTextCancel?: string;
    btnTextConfirm?: string;
    copyTextCancel?: string;
    copyTextConfirm?: string;
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
declare function actionDialog({ btnTextCancel, btnTextConfirm, children, className, closeWay, copyTextCancel, copyTextConfirm, onCancel, onCancelCall, onConfirm, onConfirmCall, title }: DialogType): Promise<void>;
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
interface LoaderType extends LoadingType {
    visible?: boolean;
}
type UseLoadingType = [
    FC<LoadingType>,
    () => void,
    () => Promise<void>,
    boolean
];
declare function Loading({ className, dot, text }: LoadingType): JSX.Element | null;
declare function Loader({ className, dot, text, visible }: LoaderType): JSX.Element | null;
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
interface ActionToastType {
    className?: string;
    delay?: number;
    text?: string;
}
declare function Toast({ className, text }: ToastType): JSX.Element;
declare function actionToast({ className, delay, text }: ActionToastType): Promise<void>;

declare function useDesktop(): boolean;

interface ParamsType {
    opts?: {
        root?: Element | Document | null;
        rootMargin?: string;
        threshold?: number | number[];
    };
    position?: "top" | "bottom";
    ref: RefObject<HTMLElement> | null | undefined;
}
declare function useOnCross({ opts, position, ref }: ParamsType): boolean;

interface ReturnType {
    height: number;
    width: number;
}
declare function useOnResize(): ReturnType;

declare function LoadIcons(): Promise<boolean>;

export { type ActionToastType, Actionsheet, type ActionsheetType, type ActionsheetWrapperType, type AlertType, Button, type ButtonType$1 as ButtonType, type CloseWayEnum, type DialogType, Empty, type EmptyType, Icon, type IconType, LoadIcons, Loader, type LoaderType, Loading, type LoadingType, Modal, type ModalBaseType, type ModalType, type ModalWrapperType, type ShareAppType, Sharesheet, type SharesheetType, type SharesheetWrapperType, Toast, type ToastType, type UseActionsheetType, type UseAlertType, type UseDialogType, type UseLoadingType, type UseModalType, type UseSharesheetType, actionAlert, actionDialog, actionToast, useActionsheet, useAlert, useDesktop, useDialog, useLoading, useModal, useOnCross, useOnResize, useSharesheet };

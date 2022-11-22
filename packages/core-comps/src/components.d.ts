/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LogButton {
        "backgroundColor"?: string;
        "disable"?: boolean;
        "textColor"?: string;
    }
    interface LogIcon {
        "name": string;
    }
    interface LogInput {
        "disable"?: boolean;
        "name": string;
        "type"?: string;
    }
}
export interface LogInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLogInputElement;
}
declare global {
    interface HTMLLogButtonElement extends Components.LogButton, HTMLStencilElement {
    }
    var HTMLLogButtonElement: {
        prototype: HTMLLogButtonElement;
        new (): HTMLLogButtonElement;
    };
    interface HTMLLogIconElement extends Components.LogIcon, HTMLStencilElement {
    }
    var HTMLLogIconElement: {
        prototype: HTMLLogIconElement;
        new (): HTMLLogIconElement;
    };
    interface HTMLLogInputElement extends Components.LogInput, HTMLStencilElement {
    }
    var HTMLLogInputElement: {
        prototype: HTMLLogInputElement;
        new (): HTMLLogInputElement;
    };
    interface HTMLElementTagNameMap {
        "log-button": HTMLLogButtonElement;
        "log-icon": HTMLLogIconElement;
        "log-input": HTMLLogInputElement;
    }
}
declare namespace LocalJSX {
    interface LogButton {
        "backgroundColor"?: string;
        "disable"?: boolean;
        "textColor"?: string;
    }
    interface LogIcon {
        "name"?: string;
    }
    interface LogInput {
        "disable"?: boolean;
        "name"?: string;
        "onInputBlured"?: (event: LogInputCustomEvent<boolean>) => void;
        "onInputChanged"?: (event: LogInputCustomEvent<string>) => void;
        "onInputEntered"?: (event: LogInputCustomEvent<boolean>) => void;
        "onInputFocused"?: (event: LogInputCustomEvent<boolean>) => void;
        "type"?: string;
    }
    interface IntrinsicElements {
        "log-button": LogButton;
        "log-icon": LogIcon;
        "log-input": LogInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "log-button": LocalJSX.LogButton & JSXBase.HTMLAttributes<HTMLLogButtonElement>;
            "log-icon": LocalJSX.LogIcon & JSXBase.HTMLAttributes<HTMLLogIconElement>;
            "log-input": LocalJSX.LogInput & JSXBase.HTMLAttributes<HTMLLogInputElement>;
        }
    }
}
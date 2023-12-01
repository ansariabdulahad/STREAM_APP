import { Transition } from "@headlessui/react";

export const Fade = ({
    children,
    state = false,
    ...rest
}) => {
    const design = (
        <Transition
            {...rest}
            show={state}
            enter="transition duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            {children}
        </Transition>
    );
    return design;
}

export const Zoom = ({
    children,
    state = false,
    ...rest
}) => {
    const design = (
        <Transition
            {...rest}
            show={state}
            enter="transition duration-1000"
            enterFrom="scale-0"
            enterTo="scale-100"
            leave="transition duration-1000"
            leaveFrom="scale-100"
            leaveTo="scale-0"
        >
            {children}
        </Transition>
    );
    return design;
}

export const Expand = ({
    children,
    state = false,
    ...rest
}) => {
    const design = (
        <Transition
            {...rest}
            show={state}
            enter="transition duration-1000"
            enterFrom="scale-y-0"
            enterTo="scale-y-100"
            leave="transition duration-1000"
            leaveFrom="scale-y-100"
            leaveTo="scale-y-0"
        >
            {children}
        </Transition>
    );
    return design;
}

export const Flip = ({
    children,
    state = false,
    ...rest
}) => {
    const design = (
        <Transition
            {...rest}
            show={state}
            enter="transition duration-1000"
            enterFrom="scale-x-0"
            enterTo="scale-x-100"
            leave="transition duration-1000"
            leaveFrom="scale-x-100"
            leaveTo="scale-x-0"
        >
            {children}
        </Transition>
    );
    return design;
}
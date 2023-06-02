export enum Size {
    SMALL = 'sm',
    STANDARD = '',
    LARGE = 'lg',
    EXTRA_LARGE = 'xl',
}

export const useSize = (size:keyof typeof Size):Size => {
    return Size[size]
}
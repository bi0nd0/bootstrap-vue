export declare enum Size {
    SMALL = "sm",
    STANDARD = "",
    LARGE = "lg",
    EXTRA_LARGE = "xl"
}
export declare const useSize: (size: keyof typeof Size) => Size;

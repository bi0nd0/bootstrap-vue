declare enum SIZE {
    SMALL = "sm",
    STANDARD = "",
    LARGE = "lg",
    EXTRA_LARGE = "xl"
}
export declare const useSize: (size: SIZE, prefix?: string) => string;
export default SIZE;

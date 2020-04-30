export declare type Breakpoint = 'xs' | 'sm' | 'md' | 'lg';
declare type Breakpoints = {
    [key in Breakpoint]: number;
};
interface Numbers {
    breakpoint: Breakpoints;
    fontSize: {
        [key: string]: number;
    };
    width: {
        [key: string]: number;
    };
    unit: number;
}
export declare const numbers: Numbers;
export {};

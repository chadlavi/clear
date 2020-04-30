export declare type Themes = 'light' | 'dark';
export declare type Colors = 'background' | 'blue' | 'border' | 'error' | 'link' | 'textColor' | 'violet' | 'zebra';
export declare const colors: {
    [key in Themes]: {
        [key in Colors]: string;
    };
};

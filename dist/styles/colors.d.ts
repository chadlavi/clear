export declare type Themes = 'light' | 'dark';
export declare type Colors = 'background' | 'border' | 'error' | 'link' | 'textColor' | 'zebra';
export declare const colors: {
    [key in Themes]: {
        [key in Colors]: string;
    };
};

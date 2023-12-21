declare function print(string: any, colorArr: any, bold?: boolean, italic?: boolean): void;
declare function printE(string: any, colorArr: any, bold?: boolean, italic?: boolean): void;
declare function printWithStyles(string: any, colorArr: any, styles: any, bold?: boolean, italic?: boolean): void;
declare function input(question: any, colorArr: any, bold?: boolean, italic?: boolean): Promise<any>;
declare function beautify(string: any, colorArr: any, bold?: boolean, italic?: boolean): string;
declare const Preset: {
    new (colorArr: any): {
        colorArr: any;
        convertHexToRGB(hexColor: any): any;
        applyColors(string: any, bold?: boolean, italic?: boolean): string;
        applyColorsEscaped(string: any, bold?: boolean, italic?: boolean): string;
        print(string: any, bold?: boolean, italic?: boolean): void;
        printE(string: any, bold?: boolean, italic?: boolean): void;
        printStyled(string: any, styles: any, bold?: boolean, italic?: boolean): void;
    };
    $: {};
    beautify(string: any, colorArr: any, bold?: boolean, italic?: boolean): string;
    beautifyE(string: any, colorArr: any, bold?: boolean, italic?: boolean): string;
    input(question: any, colorArr: any, bold?: boolean, italic?: boolean): Promise<any>;
} & {
    kye_meh: string[];
    wiretap: string[];
    aquatic: string[];
    martini: string[];
    amethyst: string[];
    dance_to_forget: string[];
    instagram: string[];
    pastel: string[];
    retro: string[];
    cherryblossoms: string[];
    candy: string[];
    nelson: string[];
    kyoto: string[];
    wedding_day_blues: string[];
};

export { beautify, input, Preset as preset, print, printE, printWithStyles };

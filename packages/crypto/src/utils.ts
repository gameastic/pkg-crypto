export const textToChars = (str: string): number[] => {
    return str.split('').map((c) => c.charCodeAt(0));
};

export const byteHex = (n: number): string => {
    return ('0' + Number(n).toString(16)).substr(-2);
};

export const applySaltToChar = (code: number[], salt: string): number => {
    return textToChars(salt).reduce((a, b) => a ^ b, code[0]);
};

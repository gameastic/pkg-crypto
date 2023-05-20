import { applySaltToChar, byteHex, textToChars } from './utils';

const secretKey = 'y7#1{xILJl>^A92';

class CryptoInstance {
    public encrypt(text: string, secret = secretKey): string {
        return text
            .split('')
            .map((s: string) => textToChars(s))
            .map((c: number[]) => applySaltToChar(c, secret))
            .map((s: number) => byteHex(s))
            .join('');
    }

    public decrypt(text: string, secret = secretKey): string {
        return text
            .match(/.{1,2}/g)!
            .map((hex: string) => [parseInt(hex, 16)])
            .map((c: number[]) => applySaltToChar(c, secret))
            .map((charCode) => String.fromCharCode(charCode))
            .join('');
    }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Crypto = new CryptoInstance();

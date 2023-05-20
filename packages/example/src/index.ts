import { Crypto } from '@gameastic/crypto';

const secret = 'G;MQ)Q<S0)q[>GoHtMgIOn8<1Sn+@T';
const data = { a: 1, b: 2, c: 3 };

console.log(
    ` %c data %c   ${JSON.stringify(data)}`,
    'color: #ffc857; font-size:12px; font-weight: 900; background-color: #084c61',
    'color: #80ffdb; font-size:12px'
);

const encrypted = Crypto.encrypt(JSON.stringify(data), secret);

console.log(
    `%c encrypt %c ${encrypted}`,
    'color: #ffc857; font-size:12px; font-weight: 900; background-color: #084c61',
    'color: #80ffdb; font-size:12px'
);

const decrypted = Crypto.decrypt(encrypted, secret);

console.log(
    `%c decrypt %c ${decrypted}`,
    'color: #ffc857; font-size:12px; font-weight: 900; background-color: #084c61',
    'color: #80ffdb; font-size:12px'
);

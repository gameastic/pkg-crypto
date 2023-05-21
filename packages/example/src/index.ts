import { Crypto } from '@gameastic/crypto';

const secret = 'G;MQ)Q<S0)q[>GoHtMgIOn8<1Sn+@T';
const data = { a: 1, b: 2, c: 3 };

console.info('data', data);

const encrypted = Crypto.encrypt(JSON.stringify(data), secret);

console.info('encrypted => ', encrypted);

const decrypted = Crypto.decrypt(encrypted, secret);

console.info('decrypted => ', JSON.parse(decrypted));

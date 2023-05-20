import { Crypto } from '../src/crypto';

const data = 'Lorem Ipsum';

test('crypto with secret', () => {
    const secret = 'G;MQ)Q<S0)q[>GoHtMgIOn8<1Sn+@T';
    const encrypted = Crypto.encrypt(data, secret);
    const decrypted = Crypto.decrypt(encrypted, secret);

    expect(decrypted).toEqual(data);
});

test('crypto without secret', () => {
    const encrypted = Crypto.encrypt(data);
    const decrypted = Crypto.decrypt(encrypted);

    expect(decrypted).toEqual(data);
});

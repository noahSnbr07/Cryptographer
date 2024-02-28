import encrypt from './encrypt';

export default function decrypt(encryptedText, shift) {
    return encrypt(encryptedText, 26 - shift);
}

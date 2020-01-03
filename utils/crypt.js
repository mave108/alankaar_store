import crypto from 'crypto';

export function encrypt(text) {
    var cipher = crypto.createCipher('aes-256-cbc', 'd6F3Efeq')
    var crypted = cipher.update(JSON.stringify(text), 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

export function decrypt(text) {
    var decipher = crypto.createDecipher('aes-256-cbc', 'd6F3Efeq')
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return JSON.parse(dec);
}
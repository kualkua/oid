const crypto = require('crypto') ;

// oid('course1') => generates always same id
module.exports = function oid(str) {
    return crypto.createHash('md5').update(Buffer.from(str.toString())).digest('hex').substring(0, 24);
}

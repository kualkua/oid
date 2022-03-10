import { createHash } from 'crypto';

export default function oid(str, mongo = false) {
  if (mongo) {
    return createHash('md5')
      .update(Buffer.from(str.toString()))
      .digest('hex')
      .substring(0, 32);
  }
  const res = <any>[];
  const s = [
    ...createHash('md5')
      .update(Buffer.from(str.toString()))
      .digest('hex')
      .substring(0, 32),
  ];
  let j = 1;
  for (const i in s) {
    if (j === 9) {
      res.push(9);
    } else if (j === 13) {
      res.push(4);
    } else {
      res.push(s[i]);
    }
    if (j === 8 || j === 12 || j == 16 || j === 20) {
      res.push('-');
    }
    j++;
  }
  return res.join('');
}

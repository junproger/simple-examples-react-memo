export const uidkey = (indx: number): string => {
  const utf8 = 65;
  const sign = '#';
  const numb = indx + 1;
  const char = utf8 + indx;
  return sign + numb + String.fromCharCode(char);
};

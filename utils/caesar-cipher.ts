export function caesarCipher(text: string, shift: number, decrypt: boolean = false): string {
  return text
    .split('')
    .map(char => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        let shiftAmount = decrypt ? -shift : shift;
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + shiftAmount + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + shiftAmount + 26) % 26) + 97);
        }
      }
      return char;
    })
    .join('');
}


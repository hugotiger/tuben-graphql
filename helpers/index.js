// Separates name and location into separate strings
// Return value of location defaults to null if it isn't specified
//
// TODO: Only separate last parentheses
export function separateNameAndLocation(str) {
  let name = str;
  let location = null;

  let i = str.length - 1;
  // First check if last character is end parenthesis
  if (str[i] === ")") {
    i--;
    for (i; i >= 0; i--) {
      if (str[i] === "(") {
        name = str.substring(0, i).trim();
        location = str.substring(i + 1, str.length - 1).trim();
        break;
      }
    }
  }
  return { name, location };
}

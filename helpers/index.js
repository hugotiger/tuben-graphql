// Separates name and location into separate strings
// Return value of location defaults to null if it isn't specified
export function separateNameAndLocation(str) {
  let [name, location] = str.split("(");
  name = name.trim();
  location = location ? location.substring(0, location.length - 1) : null;
  return { name, location };
}

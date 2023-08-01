// Description
/* 
    Your task is to write a function that takes a range of Google Sheets cells as 
    a parameter, and returns an array of addresses of all cells in the specified range.

    Notes
    - Letters in addresses: from A-Z (Google Sheets should not be confused with Excel spreadsheets. 
        In Excel, the "Z" column is followed by "AA", etc. In Google Sheets, the last column is "Z")

    - The final array must be sorted by the number in each address (ascending)
    
    - The letters in the addresses must go in alphabetical order (A to Z).
        For example, if the range is "A1:C3", the function should return 
        [ "A1", "B1", "C1", "A2", "B2", "C2", "A3", "B3", "C3" ],
        not [ "B1", "A1", "C1", "C2", "B2", "A2", "A3", "C3", "B3" ] or something else.

    - If an invalid range is passed to the function, the function should return [].
        The ranges that are considered to be invalid:
        1. Those in which the first cell is further away than the second.
            Example: H7:F3
        2. Those in which two identical cells are specified.
            Example: C2:C2
            In Google Sheets you cannot find such a range, because it is considered as one cell. For this reason, such a range is invalid in this kata.
*/

// Examples
/* 
    "B1:H5":
    ["B1", "C1", "D1", "E1", "F1", "G1", "H1",
    "B2", "C2", "D2", "E2", "F2", "G2", "H2", 
    "B3", "C3", "D3", "E3", "F3", "G3", "H3", 
    "B4", "C4", "D4", "E4", "F4", "G4", "H4",
    "B5", "C5", "D5", "E5", "F5", "G5", "H5"]

    "A2:B3":
    [ "A2", "B2", "A3", "B3" ]

    "A1:A5":
    [ "A1", "A2", "A3", "A4", "A5" ]
*/

// Solution
export function getCellAddresses(range: string): string[] {
  const [[x1, y1], [x2, y2]] = range
    .split(":")
    .map((v) => [v[0].charCodeAt(0), Number(v.slice(1))]);
  if (x1 === x2 && y1 === y2) return [];
  if (y2 - y1 < 0) return [];

  const arr: string[] = [];
  for (let i = y1; i < y2 + 1; i++) {
    for (let j = x1; j < x2 + 1; j++) arr.push(String.fromCharCode(j) + i);
  }
  return arr;
}

// Manual Test
console.log(getCellAddresses("A1:A10"));
// should => ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10']

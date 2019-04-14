export default function formatTab(tabSpace: number, string1: string, string2: string): string {
  let output = string1;
  for(let i = 0; i < tabSpace - string1.length; i ++) {
    output += ' ';
  }
  return output + string2;
}
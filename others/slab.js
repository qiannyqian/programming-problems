input = [
  { text: 'One', indent: 0, type: 'ordered' },
  { text: 'Two', indent: 0, type: 'ordered' },
  { text: 'Alpha', indent: 1, type: 'bullet' },
  { text: 'Beta', indent: 1, type: 'bullet' },
  { text: 'I', indent: 2, type: 'ordered' },
  { text: 'II', indent: 2, type: 'ordered' },
  { text: 'Three', indent: 0, type: 'ordered' },
];

// Expected output: string of
// <ol>
//   <li>One</li>
//   <li>Two
//     <ul>
//       <li>Alpha</li>
//       <li>Beta
//         <ol>
//           <li>I</li>
//           <li>II</li>
//         </ol>
//       </li>
//     </ul>
//   </li>
//   <li>Three</li>
// </ol>

function inputToHtml(indent, text, type) {
  // Base case 1
  if (indent === 0) {
    return `  <li>${text}</li>` + `\n`;
  }

  // Base case 2
  if (indent === 1) {
    return `    <ul>` + `<li>${text}</li>` + `</ul>` + `\n`;
  }

  // Base case 3
  if (indent === 2 && type === 'ordered') {
    return `      <ol><li>${text}</li></ol>` + `\n`;
  }

  return inputToHtml(indent + 1, text, type); // how to trigger recursion ...
}

function deltaToHtml(input) {
  let tempArr = [];

  // List open tag
  tempArr.push('<ol>', '\n');

  input.map(({ text, indent, type }) => {
    let result = inputToHtml(indent, text, type);
    tempArr.push(result);
  });

  // List close tag
  tempArr.push('</ol>');

  console.log(tempArr.join(''));
  return tempArr.join('');
}

// if indent increases, open a list according to type
// once indent decreases, close the list

deltaToHtml(input);

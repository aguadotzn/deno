
// Deno is secure by defect. You'll need to add the flag --allow-net to compile. So, try with: deno run --allow-net ByDefectAsyncAwait.ts
const response = await fetch('https://gist.githubusercontent.com/aguadotzn/b2bfc809062b0f3e22afadf05056a78b/raw/36ca38f639e8e200fc157bc27c4d9de4ccc46da4/actors.json');
const data = await response.json();
console.log(data);



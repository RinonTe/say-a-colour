import { isValidColor } from './colors';
function logWords(results) {
	console.log(results[results.length - 1][0].transcript);
}
export function handleResult({ results }) {
    // logWords(results);
    const words = results[results.length - 1][0].transcript;
    // Lowercase everithing
    let color = words.toLowerCase();
    // Strip any spaces out
    color = color.replace(/\s/g, "");

    if (!isValidColor(color)) return;
        console.log("this is a valid color");
    // Check if it is a valid colour
    const colorSpan = document.querySelector(`.${color}`);
    colorSpan.classList.add("got"); 
    document.body.style.backgroundColor = color;
}

export function previousLetter(text, spacing) {
    text = text.trim();
    spacing = parseInt(spacing);
    let result = text.split('');

    for (let i in result) {
        let code = result[i].charCodeAt(0);

        if (result[i].match(/[a-zA-Z]/g)) {
            if (code >= 65 && code <= 90) {
                code = ((code - spacing) < 65 ? (code - spacing + 26) : (code - spacing));
            }
            else {
                code = ((code - spacing) < 97 ? (code - spacing + 26) : (code - spacing));
            }
        }

        result[i] = String.fromCharCode(code)
    }

    return result.join('');
}

export function superMixAnti(text, spacing) {
    text = text.trim();
    let result = text.split('');

    for (let i in result) {
        let code = result[i].charCodeAt(0).toString();

        code = code.slice(0, code.length - spacing.length)
        if (result[i] != ' ') result[i] = String.fromCharCode(parseInt(code))
        else result[i] = ' ';
    }

    return result.join('');
}
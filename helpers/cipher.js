export function nextLetter(text, spacing) {
    text = text.trim();
    spacing = parseInt(spacing);
    let result = text.split('');

    for (let i in result) {
        let code = result[i].charCodeAt(0);

        if (result[i].match(/[a-zA-Z]/g)) {
            if (code >= 65 && code <= 90) {
                code = ((code + spacing) > 90 ? (code + spacing - 26) : (code + spacing));
            }
            else {
                code = ((code + spacing) > 122 ? (code + spacing - 26) : (code + spacing));
            }
        }

        result[i] = String.fromCharCode(code)
    }
    
    return result.join('');
}

export function superMix(text, spaceing) {
    text = text.trim();
    let result = text.split('');

    for (let i in result) {
        let code = result[i].charCodeAt(0).toString();

        if (result[i] != ' ') result[i] = String.fromCharCode(code + spaceing)
        else result[i] = ' ';
    }

    return result.join('');
}
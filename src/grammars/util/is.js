export function isString(lexema) {
    if (lexema === undefined || lexema === '') return false;

    const firstChar = lexema[0];
    const lastChar = lexema[lexema.length - 1];
    const aspas = "'";

    if (firstChar === aspas && lastChar === aspas) return true;

    return false;
}

export function isNumber(lexema) {
    return /^[0-9]+$/.test(lexema);
}

export function isCaracter(lexema) {
    if (lexema === undefined || lexema === '') return false;

    return /^[a-zA-Z]+$/.test(lexema);
}

export function isVariable(lexema) {
    if (lexema === undefined || lexema === '') return false;

    const firstChar = lexema[0];

    if (isCaracter(String(firstChar))) return true;
    return false;
}
import antlr4 from 'antlr4';
import fs from 'fs';

import BmlLexer from './src/grammars/BmlLexer.js';
import BmlParser from './src/grammars/BmlParser.js';

const fileContent = fs.readFileSync('./programa1.bml', 'utf8');

try {
    const chars = new antlr4.InputStream(fileContent);
    const lexer = new BmlLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new BmlParser(tokens);

    parser.programa();
} catch (error) {
    console.error(error);
}
import antlr4 from 'antlr4';
import fs from 'fs';
import util from 'util';

import BmlLexer from './src/grammars/BmlLexer.js';
import BmlParser from './src/grammars/BmlParser.js';

import Visitor from './src/grammars/util/Visitor.js';

const [_, __, file] = process.argv;

try {
  const chars = new antlr4.InputStream(fs.readFileSync(file, 'utf8'));
  const lexer = new BmlLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);

  const parser = new BmlParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.programa().accept(new Visitor());

  // console.log(util.inspect(tree, { showHidden: false, depth: null, colors: true }));
} catch (error) {
  console.error(error);
} finally {
  console.log('Done!');
}
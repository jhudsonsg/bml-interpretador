import SemanticError from "./erros/SemanticError.js";
import lang from './util/lang/lang.js.js'
import { isString, isVariable } from './util/is.js';

export default class BmlSemanticAnalyzer {
  constructor(tableSymbol) {
    this.tableSymbol = tableSymbol;
    this.lang = new lang('ptbr');
  }

  verifyReservedWords(nameVariable) {
    const has = ['verdadeiro', 'falso', 'inicio', 'fim', 'definir'].indexOf(nameVariable);

    if (has !== -1) this.throwException(this.lang.get('error.is_reserved_words', { nameVariable }));
  }

  variableExists(item, msg) {
    if(this.tableSymbol.map.has(item)) this.throwException(msg);
  }

  variableNotExists(item, msg) {
    if(!this.tableSymbol.map.has(item)) this.throwException(msg);
  }

  typeValidWithExpression(type, expression) {
    if (type == 'numero') {
      expression.split(/[*|\-|+|/]/).forEach(element => {
        if (!Number(element)) {
          this.verifyReservedWords(element);
          if (isString(element)) this.throwException(this.lang.get('error.string_in_mathematical_expression', { string: element, expression }));
          else this.variableNotExists(element, this.lang.get('error.variable_not_exists', { nameVariable: element }))
        };
      });
    }

    if (type == 'texto') {
      if (!isString(expression)) {
        this.verifyReservedWords(expression);

        if (isVariable(expression)) this.variableNotExists(expression, this.lang.get('error.variable_not_exists', { nameVariable: expression }));
        else this.throwException(this.lang.get('error.not_string', { expression }));
      }
    }
  }

  throwException(msg) {
    throw new SemanticError(msg);
  }
}
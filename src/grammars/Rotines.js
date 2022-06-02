import BmlTableSymbol from './BmlTableSymbol.js';
import BmlSemanticAnalyzer from './BmlSemanticAnalyzer.js';

import lang from './util/lang/lang.js.js'

export default class Rotines {
  constructor() {
    this.bmlTableSymbol = new BmlTableSymbol();
    this.bmlSemanticAnalyzer = new BmlSemanticAnalyzer(this.bmlTableSymbol);
    this.lang = new lang('ptbr');

    this.currentVariable = null;
    this.currentTypeVariable = null;
    this.currentValue = null;
  }

  checkExistenceOfVariable(currentVariable, currentTypeVariable) {
    this.currentVariable = currentVariable;
    this.currentTypeVariable = currentTypeVariable;

    this.bmlSemanticAnalyzer.verifyReservedWords(this.currentVariable);
    this.bmlSemanticAnalyzer.variableExists(this.currentVariable, this.lang.get('error.variable_exists', { nameVariable: this.currentVariable }));
    this.bmlTableSymbol.add(this.currentVariable, { name: this.currentVariable, type: this.currentTypeVariable });
  }

  checkVariableType(expression) {
    console.log(expression);
    this.bmlSemanticAnalyzer.typeValidWithExpression(this.currentTypeVariable, expression);
  }

}
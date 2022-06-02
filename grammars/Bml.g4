grammar Bml;

@parser::header {
    import Rotines from './Rotines.js'
}

@parser::members {
    this.r = new Rotines();
}

programa        :   'inicio' listaComandos 'fim';
listaComandos   :   comando+;
comando         :   inicializacao | declaracao | atribuicao;

inicializacao   :   'definir' VARIAVEL TIPO ATRIBUICAO expresao;
declaracao      :   'definir' VARIAVEL TIPO;
atribuicao      :   VARIAVEL ATRIBUICAO expresao;

expresao        :   termo (OPERADOR termo)*;
termo           :   VARIAVEL | NUMERO | TEXTO | LOGICO;

TIPO            :   'numero' | 'texto' | 'logico';
ABRE_PARENTESE  :   '(';
FECHA_PARENTESE :   ')';
OPERADOR        :   '+' | '-' | '*' | '/';
ATRIBUICAO      :   '=';
VARIAVEL        :   [a-z] ([a-z] | [A-Z] | [0-9])*;
TEXTO          :   '\''[a-zA-Z0-9] ([a-z] | [A-Z] | ' ' | [0-9])*'\'';
NUMERO          :   [0-9] + ('.' [0-9]+)?;
LOGICO          :   'verdadeiro' | 'falso';

WS              :   (' ' | '\t' | '\n' | '\r') -> skip;
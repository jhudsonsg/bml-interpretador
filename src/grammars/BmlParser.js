// Generated from grammars/Bml.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import BmlListener from './BmlListener.js';

    import Rotines from './Rotines.js'

const serializedATN = [4,1,13,58,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,0,1,1,4,1,22,8,1,11,1,12,1,23,1,2,
1,2,1,2,3,2,29,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,
5,1,5,1,5,1,5,1,6,1,6,1,6,5,6,51,8,6,10,6,12,6,54,9,6,1,7,1,7,1,7,0,0,8,
0,2,4,6,8,10,12,14,0,1,1,0,9,12,53,0,16,1,0,0,0,2,21,1,0,0,0,4,28,1,0,0,
0,6,30,1,0,0,0,8,38,1,0,0,0,10,43,1,0,0,0,12,47,1,0,0,0,14,55,1,0,0,0,16,
17,5,1,0,0,17,18,3,2,1,0,18,19,5,2,0,0,19,1,1,0,0,0,20,22,3,4,2,0,21,20,
1,0,0,0,22,23,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,3,1,0,0,0,25,29,3,6,
3,0,26,29,3,8,4,0,27,29,3,10,5,0,28,25,1,0,0,0,28,26,1,0,0,0,28,27,1,0,0,
0,29,5,1,0,0,0,30,31,5,3,0,0,31,32,5,9,0,0,32,33,5,4,0,0,33,34,6,3,-1,0,
34,35,5,8,0,0,35,36,3,12,6,0,36,37,6,3,-1,0,37,7,1,0,0,0,38,39,5,3,0,0,39,
40,5,9,0,0,40,41,5,4,0,0,41,42,6,4,-1,0,42,9,1,0,0,0,43,44,5,9,0,0,44,45,
5,8,0,0,45,46,3,12,6,0,46,11,1,0,0,0,47,52,3,14,7,0,48,49,5,7,0,0,49,51,
3,14,7,0,50,48,1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,13,1,
0,0,0,54,52,1,0,0,0,55,56,7,0,0,0,56,15,1,0,0,0,3,23,28,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class BmlParser extends antlr4.Parser {

    static grammarFileName = "Bml.g4";
    static literalNames = [ null, "'inicio'", "'fim'", "'definir'", null, 
                            "'('", "')'", null, "'='" ];
    static symbolicNames = [ null, null, null, null, "TIPO", "ABRE_PARENTESE", 
                             "FECHA_PARENTESE", "OPERADOR", "ATRIBUICAO", 
                             "VARIAVEL", "TEXTO", "NUMERO", "LOGICO", "WS" ];
    static ruleNames = [ "programa", "listaComandos", "comando", "inicializacao", 
                         "declaracao", "atribuicao", "expresao", "termo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = BmlParser.ruleNames;
        this.literalNames = BmlParser.literalNames;
        this.symbolicNames = BmlParser.symbolicNames;

            this.r = new Rotines();

    }

    get atn() {
        return atn;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, BmlParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(BmlParser.T__0);
	        this.state = 17;
	        this.listaComandos();
	        this.state = 18;
	        this.match(BmlParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listaComandos() {
	    let localctx = new ListaComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, BmlParser.RULE_listaComandos);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 20;
	            this.comando();
	            this.state = 23; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===BmlParser.T__2 || _la===BmlParser.VARIAVEL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, BmlParser.RULE_comando);
	    try {
	        this.state = 28;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.inicializacao();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.declaracao();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 27;
	            this.atribuicao();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inicializacao() {
	    let localctx = new InicializacaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, BmlParser.RULE_inicializacao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(BmlParser.T__2);
	        this.state = 31;
	        localctx._VARIAVEL = this.match(BmlParser.VARIAVEL);
	        this.state = 32;
	        localctx._TIPO = this.match(BmlParser.TIPO);
	         this.r.checkExistenceOfVariable((localctx._VARIAVEL===null ? null : localctx._VARIAVEL.text), (localctx._TIPO===null ? null : localctx._TIPO.text)) 
	        this.state = 34;
	        this.match(BmlParser.ATRIBUICAO);
	        this.state = 35;
	        localctx._expresao = this.expresao();
	         this.r.checkVariableType((localctx._expresao===null ? null : this._input.getText(new antlr4.Interval(localctx._expresao.start,localctx._expresao.stop)))) 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracao() {
	    let localctx = new DeclaracaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, BmlParser.RULE_declaracao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.match(BmlParser.T__2);
	        this.state = 39;
	        localctx._VARIAVEL = this.match(BmlParser.VARIAVEL);
	        this.state = 40;
	        localctx._TIPO = this.match(BmlParser.TIPO);
	         this.r.checkExistenceOfVariable((localctx._VARIAVEL===null ? null : localctx._VARIAVEL.text), (localctx._TIPO===null ? null : localctx._TIPO.text)) 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atribuicao() {
	    let localctx = new AtribuicaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, BmlParser.RULE_atribuicao);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(BmlParser.VARIAVEL);
	        this.state = 44;
	        this.match(BmlParser.ATRIBUICAO);
	        this.state = 45;
	        this.expresao();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresao() {
	    let localctx = new ExpresaoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, BmlParser.RULE_expresao);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.termo();
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===BmlParser.OPERADOR) {
	            this.state = 48;
	            this.match(BmlParser.OPERADOR);
	            this.state = 49;
	            this.termo();
	            this.state = 54;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	termo() {
	    let localctx = new TermoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, BmlParser.RULE_termo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << BmlParser.VARIAVEL) | (1 << BmlParser.TEXTO) | (1 << BmlParser.NUMERO) | (1 << BmlParser.LOGICO))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

BmlParser.EOF = antlr4.Token.EOF;
BmlParser.T__0 = 1;
BmlParser.T__1 = 2;
BmlParser.T__2 = 3;
BmlParser.TIPO = 4;
BmlParser.ABRE_PARENTESE = 5;
BmlParser.FECHA_PARENTESE = 6;
BmlParser.OPERADOR = 7;
BmlParser.ATRIBUICAO = 8;
BmlParser.VARIAVEL = 9;
BmlParser.TEXTO = 10;
BmlParser.NUMERO = 11;
BmlParser.LOGICO = 12;
BmlParser.WS = 13;

BmlParser.RULE_programa = 0;
BmlParser.RULE_listaComandos = 1;
BmlParser.RULE_comando = 2;
BmlParser.RULE_inicializacao = 3;
BmlParser.RULE_declaracao = 4;
BmlParser.RULE_atribuicao = 5;
BmlParser.RULE_expresao = 6;
BmlParser.RULE_termo = 7;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BmlParser.RULE_programa;
    }

	listaComandos() {
	    return this.getTypedRuleContext(ListaComandosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class ListaComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BmlParser.RULE_listaComandos;
    }

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.enterListaComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.exitListaComandos(this);
		}
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BmlParser.RULE_comando;
    }

	inicializacao() {
	    return this.getTypedRuleContext(InicializacaoContext,0);
	};

	declaracao() {
	    return this.getTypedRuleContext(DeclaracaoContext,0);
	};

	atribuicao() {
	    return this.getTypedRuleContext(AtribuicaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.exitComando(this);
		}
	}


}



class InicializacaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BmlParser.RULE_inicializacao;
        this._VARIAVEL = null; // Token
        this._TIPO = null; // Token
        this._expresao = null; // ExpresaoContext
    }

	VARIAVEL() {
	    return this.getToken(BmlParser.VARIAVEL, 0);
	};

	TIPO() {
	    return this.getToken(BmlParser.TIPO, 0);
	};

	ATRIBUICAO() {
	    return this.getToken(BmlParser.ATRIBUICAO, 0);
	};

	expresao() {
	    return this.getTypedRuleContext(ExpresaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.enterInicializacao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.exitInicializacao(this);
		}
	}


}



class DeclaracaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BmlParser.RULE_declaracao;
        this._VARIAVEL = null; // Token
        this._TIPO = null; // Token
    }

	VARIAVEL() {
	    return this.getToken(BmlParser.VARIAVEL, 0);
	};

	TIPO() {
	    return this.getToken(BmlParser.TIPO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.enterDeclaracao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.exitDeclaracao(this);
		}
	}


}



class AtribuicaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BmlParser.RULE_atribuicao;
    }

	VARIAVEL() {
	    return this.getToken(BmlParser.VARIAVEL, 0);
	};

	ATRIBUICAO() {
	    return this.getToken(BmlParser.ATRIBUICAO, 0);
	};

	expresao() {
	    return this.getTypedRuleContext(ExpresaoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.enterAtribuicao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.exitAtribuicao(this);
		}
	}


}



class ExpresaoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BmlParser.RULE_expresao;
    }

	termo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermoContext);
	    } else {
	        return this.getTypedRuleContext(TermoContext,i);
	    }
	};

	OPERADOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(BmlParser.OPERADOR);
	    } else {
	        return this.getToken(BmlParser.OPERADOR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.enterExpresao(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.exitExpresao(this);
		}
	}


}



class TermoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = BmlParser.RULE_termo;
    }

	VARIAVEL() {
	    return this.getToken(BmlParser.VARIAVEL, 0);
	};

	NUMERO() {
	    return this.getToken(BmlParser.NUMERO, 0);
	};

	TEXTO() {
	    return this.getToken(BmlParser.TEXTO, 0);
	};

	LOGICO() {
	    return this.getToken(BmlParser.LOGICO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.enterTermo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof BmlListener ) {
	        listener.exitTermo(this);
		}
	}


}




BmlParser.ProgramaContext = ProgramaContext; 
BmlParser.ListaComandosContext = ListaComandosContext; 
BmlParser.ComandoContext = ComandoContext; 
BmlParser.InicializacaoContext = InicializacaoContext; 
BmlParser.DeclaracaoContext = DeclaracaoContext; 
BmlParser.AtribuicaoContext = AtribuicaoContext; 
BmlParser.ExpresaoContext = ExpresaoContext; 
BmlParser.TermoContext = TermoContext; 

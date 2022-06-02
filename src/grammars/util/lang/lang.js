import ptbr from './pt-br.js'

export default class Lang {
  constructor(lang) {
    this.lang = lang;
    this.langs = { ptbr }
  }

  get(key, o) {
    let msg = this.langs[this.lang];
    key.split('.').forEach(element => msg = msg[element]);
    return this.replace(msg, o);
  }

  replace(msg, o) {
    return msg.replace(/{([^{}]*)}/g, function (a, b) {
      var r = o[b];
      return typeof r === 'string' || typeof r === 'number' ? r : a;
    })
  }
}
class Utils {
  a: number;
  constructor() {
    this.a = 1;
  }
  isAndroid(): boolean {
    const adr = window.navigator.userAgent.indexOf('Android') > -1
                || window.navigator.userAgent.indexOf('Adr') > -1;
    return adr;
  }
  isIos(): boolean {
    const ios = !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return ios;
  }
}

export default  new Utils();

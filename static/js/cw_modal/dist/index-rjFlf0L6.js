import { aO as fo, aM as J, aP as ho, az as bn, aQ as j, a5 as yg } from "./main-gOxGUjNF.js";
import { e as Uu } from "./events-0FsyVRaq.js";
var Oh = {}, qi = {}, po = {};
Object.defineProperty(po, "__esModule", { value: !0 });
po.walletLogo = void 0;
const mg = (t, e) => {
  let r;
  switch (t) {
    case "standard":
      return r = e, `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
      return r = e, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
      return r = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
      return r = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
      return r = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
      return r = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
      return r = e, `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
  }
};
po.walletLogo = mg;
var go = {};
Object.defineProperty(go, "__esModule", { value: !0 });
go.LINK_API_URL = void 0;
go.LINK_API_URL = "https://www.walletlink.org";
var bo = {};
Object.defineProperty(bo, "__esModule", { value: !0 });
bo.ScopedLocalStorage = void 0;
class _g {
  constructor(e) {
    this.scope = e;
  }
  setItem(e, r) {
    localStorage.setItem(this.scopedKey(e), r);
  }
  getItem(e) {
    return localStorage.getItem(this.scopedKey(e));
  }
  removeItem(e) {
    localStorage.removeItem(this.scopedKey(e));
  }
  clear() {
    const e = this.scopedKey(""), r = [];
    for (let n = 0; n < localStorage.length; n++) {
      const i = localStorage.key(n);
      typeof i == "string" && i.startsWith(e) && r.push(i);
    }
    r.forEach((n) => localStorage.removeItem(n));
  }
  scopedKey(e) {
    return `${this.scope}:${e}`;
  }
}
bo.ScopedLocalStorage = _g;
var ei = {}, vn = {};
Object.defineProperty(vn, "__esModule", { value: !0 });
const wg = Uu;
function il(t, e, r) {
  try {
    Reflect.apply(t, e, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function Sg(t) {
  const e = t.length, r = new Array(e);
  for (let n = 0; n < e; n += 1)
    r[n] = t[n];
  return r;
}
let Eg = class extends wg.EventEmitter {
  emit(e, ...r) {
    let n = e === "error";
    const i = this._events;
    if (i !== void 0)
      n = n && i.error === void 0;
    else if (!n)
      return !1;
    if (n) {
      let o;
      if (r.length > 0 && ([o] = r), o instanceof Error)
        throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw a.context = o, a;
    }
    const s = i[e];
    if (s === void 0)
      return !1;
    if (typeof s == "function")
      il(s, this, r);
    else {
      const o = s.length, a = Sg(s);
      for (let u = 0; u < o; u += 1)
        il(a[u], this, r);
    }
    return !0;
  }
};
vn.default = Eg;
var zu = { exports: {} };
zu.exports;
(function(t) {
  (function(e, r) {
    function n(v, c) {
      if (!v)
        throw new Error(c || "Assertion failed");
    }
    function i(v, c) {
      v.super_ = c;
      var d = function() {
      };
      d.prototype = c.prototype, v.prototype = new d(), v.prototype.constructor = v;
    }
    function s(v, c, d) {
      if (s.isBN(v))
        return v;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, v !== null && ((c === "le" || c === "be") && (d = c, c = 10), this._init(v || 0, c || 10, d || "be"));
    }
    typeof e == "object" ? e.exports = s : r.BN = s, s.BN = s, s.wordSize = 26;
    var o;
    try {
      typeof window < "u" && typeof window.Buffer < "u" ? o = window.Buffer : o = fo.Buffer;
    } catch {
    }
    s.isBN = function(c) {
      return c instanceof s ? !0 : c !== null && typeof c == "object" && c.constructor.wordSize === s.wordSize && Array.isArray(c.words);
    }, s.max = function(c, d) {
      return c.cmp(d) > 0 ? c : d;
    }, s.min = function(c, d) {
      return c.cmp(d) < 0 ? c : d;
    }, s.prototype._init = function(c, d, g) {
      if (typeof c == "number")
        return this._initNumber(c, d, g);
      if (typeof c == "object")
        return this._initArray(c, d, g);
      d === "hex" && (d = 16), n(d === (d | 0) && d >= 2 && d <= 36), c = c.toString().replace(/\s+/g, "");
      var y = 0;
      c[0] === "-" && (y++, this.negative = 1), y < c.length && (d === 16 ? this._parseHex(c, y, g) : (this._parseBase(c, d, y), g === "le" && this._initArray(this.toArray(), d, g)));
    }, s.prototype._initNumber = function(c, d, g) {
      c < 0 && (this.negative = 1, c = -c), c < 67108864 ? (this.words = [c & 67108863], this.length = 1) : c < 4503599627370496 ? (this.words = [
        c & 67108863,
        c / 67108864 & 67108863
      ], this.length = 2) : (n(c < 9007199254740992), this.words = [
        c & 67108863,
        c / 67108864 & 67108863,
        1
      ], this.length = 3), g === "le" && this._initArray(this.toArray(), d, g);
    }, s.prototype._initArray = function(c, d, g) {
      if (n(typeof c.length == "number"), c.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(c.length / 3), this.words = new Array(this.length);
      for (var y = 0; y < this.length; y++)
        this.words[y] = 0;
      var _, C, k = 0;
      if (g === "be")
        for (y = c.length - 1, _ = 0; y >= 0; y -= 3)
          C = c[y] | c[y - 1] << 8 | c[y - 2] << 16, this.words[_] |= C << k & 67108863, this.words[_ + 1] = C >>> 26 - k & 67108863, k += 24, k >= 26 && (k -= 26, _++);
      else if (g === "le")
        for (y = 0, _ = 0; y < c.length; y += 3)
          C = c[y] | c[y + 1] << 8 | c[y + 2] << 16, this.words[_] |= C << k & 67108863, this.words[_ + 1] = C >>> 26 - k & 67108863, k += 24, k >= 26 && (k -= 26, _++);
      return this._strip();
    };
    function a(v, c) {
      var d = v.charCodeAt(c);
      if (d >= 48 && d <= 57)
        return d - 48;
      if (d >= 65 && d <= 70)
        return d - 55;
      if (d >= 97 && d <= 102)
        return d - 87;
      n(!1, "Invalid character in " + v);
    }
    function u(v, c, d) {
      var g = a(v, d);
      return d - 1 >= c && (g |= a(v, d - 1) << 4), g;
    }
    s.prototype._parseHex = function(c, d, g) {
      this.length = Math.ceil((c.length - d) / 6), this.words = new Array(this.length);
      for (var y = 0; y < this.length; y++)
        this.words[y] = 0;
      var _ = 0, C = 0, k;
      if (g === "be")
        for (y = c.length - 1; y >= d; y -= 2)
          k = u(c, d, y) << _, this.words[C] |= k & 67108863, _ >= 18 ? (_ -= 18, C += 1, this.words[C] |= k >>> 26) : _ += 8;
      else {
        var m = c.length - d;
        for (y = m % 2 === 0 ? d + 1 : d; y < c.length; y += 2)
          k = u(c, d, y) << _, this.words[C] |= k & 67108863, _ >= 18 ? (_ -= 18, C += 1, this.words[C] |= k >>> 26) : _ += 8;
      }
      this._strip();
    };
    function l(v, c, d, g) {
      for (var y = 0, _ = 0, C = Math.min(v.length, d), k = c; k < C; k++) {
        var m = v.charCodeAt(k) - 48;
        y *= g, m >= 49 ? _ = m - 49 + 10 : m >= 17 ? _ = m - 17 + 10 : _ = m, n(m >= 0 && _ < g, "Invalid character"), y += _;
      }
      return y;
    }
    s.prototype._parseBase = function(c, d, g) {
      this.words = [0], this.length = 1;
      for (var y = 0, _ = 1; _ <= 67108863; _ *= d)
        y++;
      y--, _ = _ / d | 0;
      for (var C = c.length - g, k = C % y, m = Math.min(C, C - k) + g, f = 0, M = g; M < m; M += y)
        f = l(c, M, M + y, d), this.imuln(_), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
      if (k !== 0) {
        var U = 1;
        for (f = l(c, M, c.length, d), M = 0; M < k; M++)
          U *= d;
        this.imuln(U), this.words[0] + f < 67108864 ? this.words[0] += f : this._iaddn(f);
      }
      this._strip();
    }, s.prototype.copy = function(c) {
      c.words = new Array(this.length);
      for (var d = 0; d < this.length; d++)
        c.words[d] = this.words[d];
      c.length = this.length, c.negative = this.negative, c.red = this.red;
    };
    function h(v, c) {
      v.words = c.words, v.length = c.length, v.negative = c.negative, v.red = c.red;
    }
    if (s.prototype._move = function(c) {
      h(c, this);
    }, s.prototype.clone = function() {
      var c = new s(null);
      return this.copy(c), c;
    }, s.prototype._expand = function(c) {
      for (; this.length < c; )
        this.words[this.length++] = 0;
      return this;
    }, s.prototype._strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, s.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, typeof Symbol < "u" && typeof Symbol.for == "function")
      try {
        s.prototype[Symbol.for("nodejs.util.inspect.custom")] = p;
      } catch {
        s.prototype.inspect = p;
      }
    else
      s.prototype.inspect = p;
    function p() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var b = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], S = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], R = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    s.prototype.toString = function(c, d) {
      c = c || 10, d = d | 0 || 1;
      var g;
      if (c === 16 || c === "hex") {
        g = "";
        for (var y = 0, _ = 0, C = 0; C < this.length; C++) {
          var k = this.words[C], m = ((k << y | _) & 16777215).toString(16);
          _ = k >>> 24 - y & 16777215, y += 2, y >= 26 && (y -= 26, C--), _ !== 0 || C !== this.length - 1 ? g = b[6 - m.length] + m + g : g = m + g;
        }
        for (_ !== 0 && (g = _.toString(16) + g); g.length % d !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      if (c === (c | 0) && c >= 2 && c <= 36) {
        var f = S[c], M = R[c];
        g = "";
        var U = this.clone();
        for (U.negative = 0; !U.isZero(); ) {
          var G = U.modrn(M).toString(c);
          U = U.idivn(M), U.isZero() ? g = G + g : g = b[f - G.length] + G + g;
        }
        for (this.isZero() && (g = "0" + g); g.length % d !== 0; )
          g = "0" + g;
        return this.negative !== 0 && (g = "-" + g), g;
      }
      n(!1, "Base should be between 2 and 36");
    }, s.prototype.toNumber = function() {
      var c = this.words[0];
      return this.length === 2 ? c += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? c += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -c : c;
    }, s.prototype.toJSON = function() {
      return this.toString(16, 2);
    }, o && (s.prototype.toBuffer = function(c, d) {
      return this.toArrayLike(o, c, d);
    }), s.prototype.toArray = function(c, d) {
      return this.toArrayLike(Array, c, d);
    };
    var L = function(c, d) {
      return c.allocUnsafe ? c.allocUnsafe(d) : new c(d);
    };
    s.prototype.toArrayLike = function(c, d, g) {
      this._strip();
      var y = this.byteLength(), _ = g || Math.max(1, y);
      n(y <= _, "byte array longer than desired length"), n(_ > 0, "Requested array length <= 0");
      var C = L(c, _), k = d === "le" ? "LE" : "BE";
      return this["_toArrayLike" + k](C, y), C;
    }, s.prototype._toArrayLikeLE = function(c, d) {
      for (var g = 0, y = 0, _ = 0, C = 0; _ < this.length; _++) {
        var k = this.words[_] << C | y;
        c[g++] = k & 255, g < c.length && (c[g++] = k >> 8 & 255), g < c.length && (c[g++] = k >> 16 & 255), C === 6 ? (g < c.length && (c[g++] = k >> 24 & 255), y = 0, C = 0) : (y = k >>> 24, C += 2);
      }
      if (g < c.length)
        for (c[g++] = y; g < c.length; )
          c[g++] = 0;
    }, s.prototype._toArrayLikeBE = function(c, d) {
      for (var g = c.length - 1, y = 0, _ = 0, C = 0; _ < this.length; _++) {
        var k = this.words[_] << C | y;
        c[g--] = k & 255, g >= 0 && (c[g--] = k >> 8 & 255), g >= 0 && (c[g--] = k >> 16 & 255), C === 6 ? (g >= 0 && (c[g--] = k >> 24 & 255), y = 0, C = 0) : (y = k >>> 24, C += 2);
      }
      if (g >= 0)
        for (c[g--] = y; g >= 0; )
          c[g--] = 0;
    }, Math.clz32 ? s.prototype._countBits = function(c) {
      return 32 - Math.clz32(c);
    } : s.prototype._countBits = function(c) {
      var d = c, g = 0;
      return d >= 4096 && (g += 13, d >>>= 13), d >= 64 && (g += 7, d >>>= 7), d >= 8 && (g += 4, d >>>= 4), d >= 2 && (g += 2, d >>>= 2), g + d;
    }, s.prototype._zeroBits = function(c) {
      if (c === 0)
        return 26;
      var d = c, g = 0;
      return d & 8191 || (g += 13, d >>>= 13), d & 127 || (g += 7, d >>>= 7), d & 15 || (g += 4, d >>>= 4), d & 3 || (g += 2, d >>>= 2), d & 1 || g++, g;
    }, s.prototype.bitLength = function() {
      var c = this.words[this.length - 1], d = this._countBits(c);
      return (this.length - 1) * 26 + d;
    };
    function O(v) {
      for (var c = new Array(v.bitLength()), d = 0; d < c.length; d++) {
        var g = d / 26 | 0, y = d % 26;
        c[d] = v.words[g] >>> y & 1;
      }
      return c;
    }
    s.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var c = 0, d = 0; d < this.length; d++) {
        var g = this._zeroBits(this.words[d]);
        if (c += g, g !== 26)
          break;
      }
      return c;
    }, s.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, s.prototype.toTwos = function(c) {
      return this.negative !== 0 ? this.abs().inotn(c).iaddn(1) : this.clone();
    }, s.prototype.fromTwos = function(c) {
      return this.testn(c - 1) ? this.notn(c).iaddn(1).ineg() : this.clone();
    }, s.prototype.isNeg = function() {
      return this.negative !== 0;
    }, s.prototype.neg = function() {
      return this.clone().ineg();
    }, s.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, s.prototype.iuor = function(c) {
      for (; this.length < c.length; )
        this.words[this.length++] = 0;
      for (var d = 0; d < c.length; d++)
        this.words[d] = this.words[d] | c.words[d];
      return this._strip();
    }, s.prototype.ior = function(c) {
      return n((this.negative | c.negative) === 0), this.iuor(c);
    }, s.prototype.or = function(c) {
      return this.length > c.length ? this.clone().ior(c) : c.clone().ior(this);
    }, s.prototype.uor = function(c) {
      return this.length > c.length ? this.clone().iuor(c) : c.clone().iuor(this);
    }, s.prototype.iuand = function(c) {
      var d;
      this.length > c.length ? d = c : d = this;
      for (var g = 0; g < d.length; g++)
        this.words[g] = this.words[g] & c.words[g];
      return this.length = d.length, this._strip();
    }, s.prototype.iand = function(c) {
      return n((this.negative | c.negative) === 0), this.iuand(c);
    }, s.prototype.and = function(c) {
      return this.length > c.length ? this.clone().iand(c) : c.clone().iand(this);
    }, s.prototype.uand = function(c) {
      return this.length > c.length ? this.clone().iuand(c) : c.clone().iuand(this);
    }, s.prototype.iuxor = function(c) {
      var d, g;
      this.length > c.length ? (d = this, g = c) : (d = c, g = this);
      for (var y = 0; y < g.length; y++)
        this.words[y] = d.words[y] ^ g.words[y];
      if (this !== d)
        for (; y < d.length; y++)
          this.words[y] = d.words[y];
      return this.length = d.length, this._strip();
    }, s.prototype.ixor = function(c) {
      return n((this.negative | c.negative) === 0), this.iuxor(c);
    }, s.prototype.xor = function(c) {
      return this.length > c.length ? this.clone().ixor(c) : c.clone().ixor(this);
    }, s.prototype.uxor = function(c) {
      return this.length > c.length ? this.clone().iuxor(c) : c.clone().iuxor(this);
    }, s.prototype.inotn = function(c) {
      n(typeof c == "number" && c >= 0);
      var d = Math.ceil(c / 26) | 0, g = c % 26;
      this._expand(d), g > 0 && d--;
      for (var y = 0; y < d; y++)
        this.words[y] = ~this.words[y] & 67108863;
      return g > 0 && (this.words[y] = ~this.words[y] & 67108863 >> 26 - g), this._strip();
    }, s.prototype.notn = function(c) {
      return this.clone().inotn(c);
    }, s.prototype.setn = function(c, d) {
      n(typeof c == "number" && c >= 0);
      var g = c / 26 | 0, y = c % 26;
      return this._expand(g + 1), d ? this.words[g] = this.words[g] | 1 << y : this.words[g] = this.words[g] & ~(1 << y), this._strip();
    }, s.prototype.iadd = function(c) {
      var d;
      if (this.negative !== 0 && c.negative === 0)
        return this.negative = 0, d = this.isub(c), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && c.negative !== 0)
        return c.negative = 0, d = this.isub(c), c.negative = 1, d._normSign();
      var g, y;
      this.length > c.length ? (g = this, y = c) : (g = c, y = this);
      for (var _ = 0, C = 0; C < y.length; C++)
        d = (g.words[C] | 0) + (y.words[C] | 0) + _, this.words[C] = d & 67108863, _ = d >>> 26;
      for (; _ !== 0 && C < g.length; C++)
        d = (g.words[C] | 0) + _, this.words[C] = d & 67108863, _ = d >>> 26;
      if (this.length = g.length, _ !== 0)
        this.words[this.length] = _, this.length++;
      else if (g !== this)
        for (; C < g.length; C++)
          this.words[C] = g.words[C];
      return this;
    }, s.prototype.add = function(c) {
      var d;
      return c.negative !== 0 && this.negative === 0 ? (c.negative = 0, d = this.sub(c), c.negative ^= 1, d) : c.negative === 0 && this.negative !== 0 ? (this.negative = 0, d = c.sub(this), this.negative = 1, d) : this.length > c.length ? this.clone().iadd(c) : c.clone().iadd(this);
    }, s.prototype.isub = function(c) {
      if (c.negative !== 0) {
        c.negative = 0;
        var d = this.iadd(c);
        return c.negative = 1, d._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(c), this.negative = 1, this._normSign();
      var g = this.cmp(c);
      if (g === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var y, _;
      g > 0 ? (y = this, _ = c) : (y = c, _ = this);
      for (var C = 0, k = 0; k < _.length; k++)
        d = (y.words[k] | 0) - (_.words[k] | 0) + C, C = d >> 26, this.words[k] = d & 67108863;
      for (; C !== 0 && k < y.length; k++)
        d = (y.words[k] | 0) + C, C = d >> 26, this.words[k] = d & 67108863;
      if (C === 0 && k < y.length && y !== this)
        for (; k < y.length; k++)
          this.words[k] = y.words[k];
      return this.length = Math.max(this.length, k), y !== this && (this.negative = 1), this._strip();
    }, s.prototype.sub = function(c) {
      return this.clone().isub(c);
    };
    function w(v, c, d) {
      d.negative = c.negative ^ v.negative;
      var g = v.length + c.length | 0;
      d.length = g, g = g - 1 | 0;
      var y = v.words[0] | 0, _ = c.words[0] | 0, C = y * _, k = C & 67108863, m = C / 67108864 | 0;
      d.words[0] = k;
      for (var f = 1; f < g; f++) {
        for (var M = m >>> 26, U = m & 67108863, G = Math.min(f, c.length - 1), A = Math.max(0, f - v.length + 1); A <= G; A++) {
          var T = f - A | 0;
          y = v.words[T] | 0, _ = c.words[A] | 0, C = y * _ + U, M += C / 67108864 | 0, U = C & 67108863;
        }
        d.words[f] = U | 0, m = M | 0;
      }
      return m !== 0 ? d.words[f] = m | 0 : d.length--, d._strip();
    }
    var I = function(c, d, g) {
      var y = c.words, _ = d.words, C = g.words, k = 0, m, f, M, U = y[0] | 0, G = U & 8191, A = U >>> 13, T = y[1] | 0, D = T & 8191, V = T >>> 13, oe = y[2] | 0, E = oe & 8191, x = oe >>> 13, W = y[3] | 0, H = W & 8191, re = W >>> 13, se = y[4] | 0, ee = se & 8191, pe = se >>> 13, Qt = y[5] | 0, Se = Qt & 8191, xe = Qt >>> 13, wr = y[6] | 0, ye = wr & 8191, me = wr >>> 13, lr = y[7] | 0, ve = lr & 8191, ge = lr >>> 13, Ct = y[8] | 0, Me = Ct & 8191, Ce = Ct >>> 13, Cn = y[9] | 0, Re = Cn & 8191, Ie = Cn >>> 13, Rn = _[0] | 0, Ae = Rn & 8191, ke = Rn >>> 13, In = _[1] | 0, Te = In & 8191, Oe = In >>> 13, An = _[2] | 0, Ne = An & 8191, Le = An >>> 13, kn = _[3] | 0, Pe = kn & 8191, $e = kn >>> 13, Tn = _[4] | 0, De = Tn & 8191, Be = Tn >>> 13, On = _[5] | 0, je = On & 8191, Fe = On >>> 13, Nn = _[6] | 0, We = Nn & 8191, He = Nn >>> 13, Ln = _[7] | 0, Ve = Ln & 8191, Ue = Ln >>> 13, Pn = _[8] | 0, ze = Pn & 8191, qe = Pn >>> 13, $n = _[9] | 0, Ge = $n & 8191, Je = $n >>> 13;
      g.negative = c.negative ^ d.negative, g.length = 19, m = Math.imul(G, Ae), f = Math.imul(G, ke), f = f + Math.imul(A, Ae) | 0, M = Math.imul(A, ke);
      var Dr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Dr >>> 26) | 0, Dr &= 67108863, m = Math.imul(D, Ae), f = Math.imul(D, ke), f = f + Math.imul(V, Ae) | 0, M = Math.imul(V, ke), m = m + Math.imul(G, Te) | 0, f = f + Math.imul(G, Oe) | 0, f = f + Math.imul(A, Te) | 0, M = M + Math.imul(A, Oe) | 0;
      var Br = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Br >>> 26) | 0, Br &= 67108863, m = Math.imul(E, Ae), f = Math.imul(E, ke), f = f + Math.imul(x, Ae) | 0, M = Math.imul(x, ke), m = m + Math.imul(D, Te) | 0, f = f + Math.imul(D, Oe) | 0, f = f + Math.imul(V, Te) | 0, M = M + Math.imul(V, Oe) | 0, m = m + Math.imul(G, Ne) | 0, f = f + Math.imul(G, Le) | 0, f = f + Math.imul(A, Ne) | 0, M = M + Math.imul(A, Le) | 0;
      var jr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (jr >>> 26) | 0, jr &= 67108863, m = Math.imul(H, Ae), f = Math.imul(H, ke), f = f + Math.imul(re, Ae) | 0, M = Math.imul(re, ke), m = m + Math.imul(E, Te) | 0, f = f + Math.imul(E, Oe) | 0, f = f + Math.imul(x, Te) | 0, M = M + Math.imul(x, Oe) | 0, m = m + Math.imul(D, Ne) | 0, f = f + Math.imul(D, Le) | 0, f = f + Math.imul(V, Ne) | 0, M = M + Math.imul(V, Le) | 0, m = m + Math.imul(G, Pe) | 0, f = f + Math.imul(G, $e) | 0, f = f + Math.imul(A, Pe) | 0, M = M + Math.imul(A, $e) | 0;
      var Fr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Fr >>> 26) | 0, Fr &= 67108863, m = Math.imul(ee, Ae), f = Math.imul(ee, ke), f = f + Math.imul(pe, Ae) | 0, M = Math.imul(pe, ke), m = m + Math.imul(H, Te) | 0, f = f + Math.imul(H, Oe) | 0, f = f + Math.imul(re, Te) | 0, M = M + Math.imul(re, Oe) | 0, m = m + Math.imul(E, Ne) | 0, f = f + Math.imul(E, Le) | 0, f = f + Math.imul(x, Ne) | 0, M = M + Math.imul(x, Le) | 0, m = m + Math.imul(D, Pe) | 0, f = f + Math.imul(D, $e) | 0, f = f + Math.imul(V, Pe) | 0, M = M + Math.imul(V, $e) | 0, m = m + Math.imul(G, De) | 0, f = f + Math.imul(G, Be) | 0, f = f + Math.imul(A, De) | 0, M = M + Math.imul(A, Be) | 0;
      var Wr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Wr >>> 26) | 0, Wr &= 67108863, m = Math.imul(Se, Ae), f = Math.imul(Se, ke), f = f + Math.imul(xe, Ae) | 0, M = Math.imul(xe, ke), m = m + Math.imul(ee, Te) | 0, f = f + Math.imul(ee, Oe) | 0, f = f + Math.imul(pe, Te) | 0, M = M + Math.imul(pe, Oe) | 0, m = m + Math.imul(H, Ne) | 0, f = f + Math.imul(H, Le) | 0, f = f + Math.imul(re, Ne) | 0, M = M + Math.imul(re, Le) | 0, m = m + Math.imul(E, Pe) | 0, f = f + Math.imul(E, $e) | 0, f = f + Math.imul(x, Pe) | 0, M = M + Math.imul(x, $e) | 0, m = m + Math.imul(D, De) | 0, f = f + Math.imul(D, Be) | 0, f = f + Math.imul(V, De) | 0, M = M + Math.imul(V, Be) | 0, m = m + Math.imul(G, je) | 0, f = f + Math.imul(G, Fe) | 0, f = f + Math.imul(A, je) | 0, M = M + Math.imul(A, Fe) | 0;
      var Hr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Hr >>> 26) | 0, Hr &= 67108863, m = Math.imul(ye, Ae), f = Math.imul(ye, ke), f = f + Math.imul(me, Ae) | 0, M = Math.imul(me, ke), m = m + Math.imul(Se, Te) | 0, f = f + Math.imul(Se, Oe) | 0, f = f + Math.imul(xe, Te) | 0, M = M + Math.imul(xe, Oe) | 0, m = m + Math.imul(ee, Ne) | 0, f = f + Math.imul(ee, Le) | 0, f = f + Math.imul(pe, Ne) | 0, M = M + Math.imul(pe, Le) | 0, m = m + Math.imul(H, Pe) | 0, f = f + Math.imul(H, $e) | 0, f = f + Math.imul(re, Pe) | 0, M = M + Math.imul(re, $e) | 0, m = m + Math.imul(E, De) | 0, f = f + Math.imul(E, Be) | 0, f = f + Math.imul(x, De) | 0, M = M + Math.imul(x, Be) | 0, m = m + Math.imul(D, je) | 0, f = f + Math.imul(D, Fe) | 0, f = f + Math.imul(V, je) | 0, M = M + Math.imul(V, Fe) | 0, m = m + Math.imul(G, We) | 0, f = f + Math.imul(G, He) | 0, f = f + Math.imul(A, We) | 0, M = M + Math.imul(A, He) | 0;
      var Vr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Vr >>> 26) | 0, Vr &= 67108863, m = Math.imul(ve, Ae), f = Math.imul(ve, ke), f = f + Math.imul(ge, Ae) | 0, M = Math.imul(ge, ke), m = m + Math.imul(ye, Te) | 0, f = f + Math.imul(ye, Oe) | 0, f = f + Math.imul(me, Te) | 0, M = M + Math.imul(me, Oe) | 0, m = m + Math.imul(Se, Ne) | 0, f = f + Math.imul(Se, Le) | 0, f = f + Math.imul(xe, Ne) | 0, M = M + Math.imul(xe, Le) | 0, m = m + Math.imul(ee, Pe) | 0, f = f + Math.imul(ee, $e) | 0, f = f + Math.imul(pe, Pe) | 0, M = M + Math.imul(pe, $e) | 0, m = m + Math.imul(H, De) | 0, f = f + Math.imul(H, Be) | 0, f = f + Math.imul(re, De) | 0, M = M + Math.imul(re, Be) | 0, m = m + Math.imul(E, je) | 0, f = f + Math.imul(E, Fe) | 0, f = f + Math.imul(x, je) | 0, M = M + Math.imul(x, Fe) | 0, m = m + Math.imul(D, We) | 0, f = f + Math.imul(D, He) | 0, f = f + Math.imul(V, We) | 0, M = M + Math.imul(V, He) | 0, m = m + Math.imul(G, Ve) | 0, f = f + Math.imul(G, Ue) | 0, f = f + Math.imul(A, Ve) | 0, M = M + Math.imul(A, Ue) | 0;
      var Ur = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Ur >>> 26) | 0, Ur &= 67108863, m = Math.imul(Me, Ae), f = Math.imul(Me, ke), f = f + Math.imul(Ce, Ae) | 0, M = Math.imul(Ce, ke), m = m + Math.imul(ve, Te) | 0, f = f + Math.imul(ve, Oe) | 0, f = f + Math.imul(ge, Te) | 0, M = M + Math.imul(ge, Oe) | 0, m = m + Math.imul(ye, Ne) | 0, f = f + Math.imul(ye, Le) | 0, f = f + Math.imul(me, Ne) | 0, M = M + Math.imul(me, Le) | 0, m = m + Math.imul(Se, Pe) | 0, f = f + Math.imul(Se, $e) | 0, f = f + Math.imul(xe, Pe) | 0, M = M + Math.imul(xe, $e) | 0, m = m + Math.imul(ee, De) | 0, f = f + Math.imul(ee, Be) | 0, f = f + Math.imul(pe, De) | 0, M = M + Math.imul(pe, Be) | 0, m = m + Math.imul(H, je) | 0, f = f + Math.imul(H, Fe) | 0, f = f + Math.imul(re, je) | 0, M = M + Math.imul(re, Fe) | 0, m = m + Math.imul(E, We) | 0, f = f + Math.imul(E, He) | 0, f = f + Math.imul(x, We) | 0, M = M + Math.imul(x, He) | 0, m = m + Math.imul(D, Ve) | 0, f = f + Math.imul(D, Ue) | 0, f = f + Math.imul(V, Ve) | 0, M = M + Math.imul(V, Ue) | 0, m = m + Math.imul(G, ze) | 0, f = f + Math.imul(G, qe) | 0, f = f + Math.imul(A, ze) | 0, M = M + Math.imul(A, qe) | 0;
      var zr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (zr >>> 26) | 0, zr &= 67108863, m = Math.imul(Re, Ae), f = Math.imul(Re, ke), f = f + Math.imul(Ie, Ae) | 0, M = Math.imul(Ie, ke), m = m + Math.imul(Me, Te) | 0, f = f + Math.imul(Me, Oe) | 0, f = f + Math.imul(Ce, Te) | 0, M = M + Math.imul(Ce, Oe) | 0, m = m + Math.imul(ve, Ne) | 0, f = f + Math.imul(ve, Le) | 0, f = f + Math.imul(ge, Ne) | 0, M = M + Math.imul(ge, Le) | 0, m = m + Math.imul(ye, Pe) | 0, f = f + Math.imul(ye, $e) | 0, f = f + Math.imul(me, Pe) | 0, M = M + Math.imul(me, $e) | 0, m = m + Math.imul(Se, De) | 0, f = f + Math.imul(Se, Be) | 0, f = f + Math.imul(xe, De) | 0, M = M + Math.imul(xe, Be) | 0, m = m + Math.imul(ee, je) | 0, f = f + Math.imul(ee, Fe) | 0, f = f + Math.imul(pe, je) | 0, M = M + Math.imul(pe, Fe) | 0, m = m + Math.imul(H, We) | 0, f = f + Math.imul(H, He) | 0, f = f + Math.imul(re, We) | 0, M = M + Math.imul(re, He) | 0, m = m + Math.imul(E, Ve) | 0, f = f + Math.imul(E, Ue) | 0, f = f + Math.imul(x, Ve) | 0, M = M + Math.imul(x, Ue) | 0, m = m + Math.imul(D, ze) | 0, f = f + Math.imul(D, qe) | 0, f = f + Math.imul(V, ze) | 0, M = M + Math.imul(V, qe) | 0, m = m + Math.imul(G, Ge) | 0, f = f + Math.imul(G, Je) | 0, f = f + Math.imul(A, Ge) | 0, M = M + Math.imul(A, Je) | 0;
      var qr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (qr >>> 26) | 0, qr &= 67108863, m = Math.imul(Re, Te), f = Math.imul(Re, Oe), f = f + Math.imul(Ie, Te) | 0, M = Math.imul(Ie, Oe), m = m + Math.imul(Me, Ne) | 0, f = f + Math.imul(Me, Le) | 0, f = f + Math.imul(Ce, Ne) | 0, M = M + Math.imul(Ce, Le) | 0, m = m + Math.imul(ve, Pe) | 0, f = f + Math.imul(ve, $e) | 0, f = f + Math.imul(ge, Pe) | 0, M = M + Math.imul(ge, $e) | 0, m = m + Math.imul(ye, De) | 0, f = f + Math.imul(ye, Be) | 0, f = f + Math.imul(me, De) | 0, M = M + Math.imul(me, Be) | 0, m = m + Math.imul(Se, je) | 0, f = f + Math.imul(Se, Fe) | 0, f = f + Math.imul(xe, je) | 0, M = M + Math.imul(xe, Fe) | 0, m = m + Math.imul(ee, We) | 0, f = f + Math.imul(ee, He) | 0, f = f + Math.imul(pe, We) | 0, M = M + Math.imul(pe, He) | 0, m = m + Math.imul(H, Ve) | 0, f = f + Math.imul(H, Ue) | 0, f = f + Math.imul(re, Ve) | 0, M = M + Math.imul(re, Ue) | 0, m = m + Math.imul(E, ze) | 0, f = f + Math.imul(E, qe) | 0, f = f + Math.imul(x, ze) | 0, M = M + Math.imul(x, qe) | 0, m = m + Math.imul(D, Ge) | 0, f = f + Math.imul(D, Je) | 0, f = f + Math.imul(V, Ge) | 0, M = M + Math.imul(V, Je) | 0;
      var Gr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Gr >>> 26) | 0, Gr &= 67108863, m = Math.imul(Re, Ne), f = Math.imul(Re, Le), f = f + Math.imul(Ie, Ne) | 0, M = Math.imul(Ie, Le), m = m + Math.imul(Me, Pe) | 0, f = f + Math.imul(Me, $e) | 0, f = f + Math.imul(Ce, Pe) | 0, M = M + Math.imul(Ce, $e) | 0, m = m + Math.imul(ve, De) | 0, f = f + Math.imul(ve, Be) | 0, f = f + Math.imul(ge, De) | 0, M = M + Math.imul(ge, Be) | 0, m = m + Math.imul(ye, je) | 0, f = f + Math.imul(ye, Fe) | 0, f = f + Math.imul(me, je) | 0, M = M + Math.imul(me, Fe) | 0, m = m + Math.imul(Se, We) | 0, f = f + Math.imul(Se, He) | 0, f = f + Math.imul(xe, We) | 0, M = M + Math.imul(xe, He) | 0, m = m + Math.imul(ee, Ve) | 0, f = f + Math.imul(ee, Ue) | 0, f = f + Math.imul(pe, Ve) | 0, M = M + Math.imul(pe, Ue) | 0, m = m + Math.imul(H, ze) | 0, f = f + Math.imul(H, qe) | 0, f = f + Math.imul(re, ze) | 0, M = M + Math.imul(re, qe) | 0, m = m + Math.imul(E, Ge) | 0, f = f + Math.imul(E, Je) | 0, f = f + Math.imul(x, Ge) | 0, M = M + Math.imul(x, Je) | 0;
      var Jr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Jr >>> 26) | 0, Jr &= 67108863, m = Math.imul(Re, Pe), f = Math.imul(Re, $e), f = f + Math.imul(Ie, Pe) | 0, M = Math.imul(Ie, $e), m = m + Math.imul(Me, De) | 0, f = f + Math.imul(Me, Be) | 0, f = f + Math.imul(Ce, De) | 0, M = M + Math.imul(Ce, Be) | 0, m = m + Math.imul(ve, je) | 0, f = f + Math.imul(ve, Fe) | 0, f = f + Math.imul(ge, je) | 0, M = M + Math.imul(ge, Fe) | 0, m = m + Math.imul(ye, We) | 0, f = f + Math.imul(ye, He) | 0, f = f + Math.imul(me, We) | 0, M = M + Math.imul(me, He) | 0, m = m + Math.imul(Se, Ve) | 0, f = f + Math.imul(Se, Ue) | 0, f = f + Math.imul(xe, Ve) | 0, M = M + Math.imul(xe, Ue) | 0, m = m + Math.imul(ee, ze) | 0, f = f + Math.imul(ee, qe) | 0, f = f + Math.imul(pe, ze) | 0, M = M + Math.imul(pe, qe) | 0, m = m + Math.imul(H, Ge) | 0, f = f + Math.imul(H, Je) | 0, f = f + Math.imul(re, Ge) | 0, M = M + Math.imul(re, Je) | 0;
      var Zr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Zr >>> 26) | 0, Zr &= 67108863, m = Math.imul(Re, De), f = Math.imul(Re, Be), f = f + Math.imul(Ie, De) | 0, M = Math.imul(Ie, Be), m = m + Math.imul(Me, je) | 0, f = f + Math.imul(Me, Fe) | 0, f = f + Math.imul(Ce, je) | 0, M = M + Math.imul(Ce, Fe) | 0, m = m + Math.imul(ve, We) | 0, f = f + Math.imul(ve, He) | 0, f = f + Math.imul(ge, We) | 0, M = M + Math.imul(ge, He) | 0, m = m + Math.imul(ye, Ve) | 0, f = f + Math.imul(ye, Ue) | 0, f = f + Math.imul(me, Ve) | 0, M = M + Math.imul(me, Ue) | 0, m = m + Math.imul(Se, ze) | 0, f = f + Math.imul(Se, qe) | 0, f = f + Math.imul(xe, ze) | 0, M = M + Math.imul(xe, qe) | 0, m = m + Math.imul(ee, Ge) | 0, f = f + Math.imul(ee, Je) | 0, f = f + Math.imul(pe, Ge) | 0, M = M + Math.imul(pe, Je) | 0;
      var Qr = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Qr >>> 26) | 0, Qr &= 67108863, m = Math.imul(Re, je), f = Math.imul(Re, Fe), f = f + Math.imul(Ie, je) | 0, M = Math.imul(Ie, Fe), m = m + Math.imul(Me, We) | 0, f = f + Math.imul(Me, He) | 0, f = f + Math.imul(Ce, We) | 0, M = M + Math.imul(Ce, He) | 0, m = m + Math.imul(ve, Ve) | 0, f = f + Math.imul(ve, Ue) | 0, f = f + Math.imul(ge, Ve) | 0, M = M + Math.imul(ge, Ue) | 0, m = m + Math.imul(ye, ze) | 0, f = f + Math.imul(ye, qe) | 0, f = f + Math.imul(me, ze) | 0, M = M + Math.imul(me, qe) | 0, m = m + Math.imul(Se, Ge) | 0, f = f + Math.imul(Se, Je) | 0, f = f + Math.imul(xe, Ge) | 0, M = M + Math.imul(xe, Je) | 0;
      var ma = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (ma >>> 26) | 0, ma &= 67108863, m = Math.imul(Re, We), f = Math.imul(Re, He), f = f + Math.imul(Ie, We) | 0, M = Math.imul(Ie, He), m = m + Math.imul(Me, Ve) | 0, f = f + Math.imul(Me, Ue) | 0, f = f + Math.imul(Ce, Ve) | 0, M = M + Math.imul(Ce, Ue) | 0, m = m + Math.imul(ve, ze) | 0, f = f + Math.imul(ve, qe) | 0, f = f + Math.imul(ge, ze) | 0, M = M + Math.imul(ge, qe) | 0, m = m + Math.imul(ye, Ge) | 0, f = f + Math.imul(ye, Je) | 0, f = f + Math.imul(me, Ge) | 0, M = M + Math.imul(me, Je) | 0;
      var _a = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (_a >>> 26) | 0, _a &= 67108863, m = Math.imul(Re, Ve), f = Math.imul(Re, Ue), f = f + Math.imul(Ie, Ve) | 0, M = Math.imul(Ie, Ue), m = m + Math.imul(Me, ze) | 0, f = f + Math.imul(Me, qe) | 0, f = f + Math.imul(Ce, ze) | 0, M = M + Math.imul(Ce, qe) | 0, m = m + Math.imul(ve, Ge) | 0, f = f + Math.imul(ve, Je) | 0, f = f + Math.imul(ge, Ge) | 0, M = M + Math.imul(ge, Je) | 0;
      var wa = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (wa >>> 26) | 0, wa &= 67108863, m = Math.imul(Re, ze), f = Math.imul(Re, qe), f = f + Math.imul(Ie, ze) | 0, M = Math.imul(Ie, qe), m = m + Math.imul(Me, Ge) | 0, f = f + Math.imul(Me, Je) | 0, f = f + Math.imul(Ce, Ge) | 0, M = M + Math.imul(Ce, Je) | 0;
      var Sa = (k + m | 0) + ((f & 8191) << 13) | 0;
      k = (M + (f >>> 13) | 0) + (Sa >>> 26) | 0, Sa &= 67108863, m = Math.imul(Re, Ge), f = Math.imul(Re, Je), f = f + Math.imul(Ie, Ge) | 0, M = Math.imul(Ie, Je);
      var Ea = (k + m | 0) + ((f & 8191) << 13) | 0;
      return k = (M + (f >>> 13) | 0) + (Ea >>> 26) | 0, Ea &= 67108863, C[0] = Dr, C[1] = Br, C[2] = jr, C[3] = Fr, C[4] = Wr, C[5] = Hr, C[6] = Vr, C[7] = Ur, C[8] = zr, C[9] = qr, C[10] = Gr, C[11] = Jr, C[12] = Zr, C[13] = Qr, C[14] = ma, C[15] = _a, C[16] = wa, C[17] = Sa, C[18] = Ea, k !== 0 && (C[19] = k, g.length++), g;
    };
    Math.imul || (I = w);
    function N(v, c, d) {
      d.negative = c.negative ^ v.negative, d.length = v.length + c.length;
      for (var g = 0, y = 0, _ = 0; _ < d.length - 1; _++) {
        var C = y;
        y = 0;
        for (var k = g & 67108863, m = Math.min(_, c.length - 1), f = Math.max(0, _ - v.length + 1); f <= m; f++) {
          var M = _ - f, U = v.words[M] | 0, G = c.words[f] | 0, A = U * G, T = A & 67108863;
          C = C + (A / 67108864 | 0) | 0, T = T + k | 0, k = T & 67108863, C = C + (T >>> 26) | 0, y += C >>> 26, C &= 67108863;
        }
        d.words[_] = k, g = C, C = y;
      }
      return g !== 0 ? d.words[_] = g : d.length--, d._strip();
    }
    function $(v, c, d) {
      return N(v, c, d);
    }
    s.prototype.mulTo = function(c, d) {
      var g, y = this.length + c.length;
      return this.length === 10 && c.length === 10 ? g = I(this, c, d) : y < 63 ? g = w(this, c, d) : y < 1024 ? g = N(this, c, d) : g = $(this, c, d), g;
    }, s.prototype.mul = function(c) {
      var d = new s(null);
      return d.words = new Array(this.length + c.length), this.mulTo(c, d);
    }, s.prototype.mulf = function(c) {
      var d = new s(null);
      return d.words = new Array(this.length + c.length), $(this, c, d);
    }, s.prototype.imul = function(c) {
      return this.clone().mulTo(c, this);
    }, s.prototype.imuln = function(c) {
      var d = c < 0;
      d && (c = -c), n(typeof c == "number"), n(c < 67108864);
      for (var g = 0, y = 0; y < this.length; y++) {
        var _ = (this.words[y] | 0) * c, C = (_ & 67108863) + (g & 67108863);
        g >>= 26, g += _ / 67108864 | 0, g += C >>> 26, this.words[y] = C & 67108863;
      }
      return g !== 0 && (this.words[y] = g, this.length++), d ? this.ineg() : this;
    }, s.prototype.muln = function(c) {
      return this.clone().imuln(c);
    }, s.prototype.sqr = function() {
      return this.mul(this);
    }, s.prototype.isqr = function() {
      return this.imul(this.clone());
    }, s.prototype.pow = function(c) {
      var d = O(c);
      if (d.length === 0)
        return new s(1);
      for (var g = this, y = 0; y < d.length && d[y] === 0; y++, g = g.sqr())
        ;
      if (++y < d.length)
        for (var _ = g.sqr(); y < d.length; y++, _ = _.sqr())
          d[y] !== 0 && (g = g.mul(_));
      return g;
    }, s.prototype.iushln = function(c) {
      n(typeof c == "number" && c >= 0);
      var d = c % 26, g = (c - d) / 26, y = 67108863 >>> 26 - d << 26 - d, _;
      if (d !== 0) {
        var C = 0;
        for (_ = 0; _ < this.length; _++) {
          var k = this.words[_] & y, m = (this.words[_] | 0) - k << d;
          this.words[_] = m | C, C = k >>> 26 - d;
        }
        C && (this.words[_] = C, this.length++);
      }
      if (g !== 0) {
        for (_ = this.length - 1; _ >= 0; _--)
          this.words[_ + g] = this.words[_];
        for (_ = 0; _ < g; _++)
          this.words[_] = 0;
        this.length += g;
      }
      return this._strip();
    }, s.prototype.ishln = function(c) {
      return n(this.negative === 0), this.iushln(c);
    }, s.prototype.iushrn = function(c, d, g) {
      n(typeof c == "number" && c >= 0);
      var y;
      d ? y = (d - d % 26) / 26 : y = 0;
      var _ = c % 26, C = Math.min((c - _) / 26, this.length), k = 67108863 ^ 67108863 >>> _ << _, m = g;
      if (y -= C, y = Math.max(0, y), m) {
        for (var f = 0; f < C; f++)
          m.words[f] = this.words[f];
        m.length = C;
      }
      if (C !== 0)
        if (this.length > C)
          for (this.length -= C, f = 0; f < this.length; f++)
            this.words[f] = this.words[f + C];
        else
          this.words[0] = 0, this.length = 1;
      var M = 0;
      for (f = this.length - 1; f >= 0 && (M !== 0 || f >= y); f--) {
        var U = this.words[f] | 0;
        this.words[f] = M << 26 - _ | U >>> _, M = U & k;
      }
      return m && M !== 0 && (m.words[m.length++] = M), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip();
    }, s.prototype.ishrn = function(c, d, g) {
      return n(this.negative === 0), this.iushrn(c, d, g);
    }, s.prototype.shln = function(c) {
      return this.clone().ishln(c);
    }, s.prototype.ushln = function(c) {
      return this.clone().iushln(c);
    }, s.prototype.shrn = function(c) {
      return this.clone().ishrn(c);
    }, s.prototype.ushrn = function(c) {
      return this.clone().iushrn(c);
    }, s.prototype.testn = function(c) {
      n(typeof c == "number" && c >= 0);
      var d = c % 26, g = (c - d) / 26, y = 1 << d;
      if (this.length <= g)
        return !1;
      var _ = this.words[g];
      return !!(_ & y);
    }, s.prototype.imaskn = function(c) {
      n(typeof c == "number" && c >= 0);
      var d = c % 26, g = (c - d) / 26;
      if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= g)
        return this;
      if (d !== 0 && g++, this.length = Math.min(g, this.length), d !== 0) {
        var y = 67108863 ^ 67108863 >>> d << d;
        this.words[this.length - 1] &= y;
      }
      return this._strip();
    }, s.prototype.maskn = function(c) {
      return this.clone().imaskn(c);
    }, s.prototype.iaddn = function(c) {
      return n(typeof c == "number"), n(c < 67108864), c < 0 ? this.isubn(-c) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= c ? (this.words[0] = c - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(c), this.negative = 1, this) : this._iaddn(c);
    }, s.prototype._iaddn = function(c) {
      this.words[0] += c;
      for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
        this.words[d] -= 67108864, d === this.length - 1 ? this.words[d + 1] = 1 : this.words[d + 1]++;
      return this.length = Math.max(this.length, d + 1), this;
    }, s.prototype.isubn = function(c) {
      if (n(typeof c == "number"), n(c < 67108864), c < 0)
        return this.iaddn(-c);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(c), this.negative = 1, this;
      if (this.words[0] -= c, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var d = 0; d < this.length && this.words[d] < 0; d++)
          this.words[d] += 67108864, this.words[d + 1] -= 1;
      return this._strip();
    }, s.prototype.addn = function(c) {
      return this.clone().iaddn(c);
    }, s.prototype.subn = function(c) {
      return this.clone().isubn(c);
    }, s.prototype.iabs = function() {
      return this.negative = 0, this;
    }, s.prototype.abs = function() {
      return this.clone().iabs();
    }, s.prototype._ishlnsubmul = function(c, d, g) {
      var y = c.length + g, _;
      this._expand(y);
      var C, k = 0;
      for (_ = 0; _ < c.length; _++) {
        C = (this.words[_ + g] | 0) + k;
        var m = (c.words[_] | 0) * d;
        C -= m & 67108863, k = (C >> 26) - (m / 67108864 | 0), this.words[_ + g] = C & 67108863;
      }
      for (; _ < this.length - g; _++)
        C = (this.words[_ + g] | 0) + k, k = C >> 26, this.words[_ + g] = C & 67108863;
      if (k === 0)
        return this._strip();
      for (n(k === -1), k = 0, _ = 0; _ < this.length; _++)
        C = -(this.words[_] | 0) + k, k = C >> 26, this.words[_] = C & 67108863;
      return this.negative = 1, this._strip();
    }, s.prototype._wordDiv = function(c, d) {
      var g = this.length - c.length, y = this.clone(), _ = c, C = _.words[_.length - 1] | 0, k = this._countBits(C);
      g = 26 - k, g !== 0 && (_ = _.ushln(g), y.iushln(g), C = _.words[_.length - 1] | 0);
      var m = y.length - _.length, f;
      if (d !== "mod") {
        f = new s(null), f.length = m + 1, f.words = new Array(f.length);
        for (var M = 0; M < f.length; M++)
          f.words[M] = 0;
      }
      var U = y.clone()._ishlnsubmul(_, 1, m);
      U.negative === 0 && (y = U, f && (f.words[m] = 1));
      for (var G = m - 1; G >= 0; G--) {
        var A = (y.words[_.length + G] | 0) * 67108864 + (y.words[_.length + G - 1] | 0);
        for (A = Math.min(A / C | 0, 67108863), y._ishlnsubmul(_, A, G); y.negative !== 0; )
          A--, y.negative = 0, y._ishlnsubmul(_, 1, G), y.isZero() || (y.negative ^= 1);
        f && (f.words[G] = A);
      }
      return f && f._strip(), y._strip(), d !== "div" && g !== 0 && y.iushrn(g), {
        div: f || null,
        mod: y
      };
    }, s.prototype.divmod = function(c, d, g) {
      if (n(!c.isZero()), this.isZero())
        return {
          div: new s(0),
          mod: new s(0)
        };
      var y, _, C;
      return this.negative !== 0 && c.negative === 0 ? (C = this.neg().divmod(c, d), d !== "mod" && (y = C.div.neg()), d !== "div" && (_ = C.mod.neg(), g && _.negative !== 0 && _.iadd(c)), {
        div: y,
        mod: _
      }) : this.negative === 0 && c.negative !== 0 ? (C = this.divmod(c.neg(), d), d !== "mod" && (y = C.div.neg()), {
        div: y,
        mod: C.mod
      }) : this.negative & c.negative ? (C = this.neg().divmod(c.neg(), d), d !== "div" && (_ = C.mod.neg(), g && _.negative !== 0 && _.isub(c)), {
        div: C.div,
        mod: _
      }) : c.length > this.length || this.cmp(c) < 0 ? {
        div: new s(0),
        mod: this
      } : c.length === 1 ? d === "div" ? {
        div: this.divn(c.words[0]),
        mod: null
      } : d === "mod" ? {
        div: null,
        mod: new s(this.modrn(c.words[0]))
      } : {
        div: this.divn(c.words[0]),
        mod: new s(this.modrn(c.words[0]))
      } : this._wordDiv(c, d);
    }, s.prototype.div = function(c) {
      return this.divmod(c, "div", !1).div;
    }, s.prototype.mod = function(c) {
      return this.divmod(c, "mod", !1).mod;
    }, s.prototype.umod = function(c) {
      return this.divmod(c, "mod", !0).mod;
    }, s.prototype.divRound = function(c) {
      var d = this.divmod(c);
      if (d.mod.isZero())
        return d.div;
      var g = d.div.negative !== 0 ? d.mod.isub(c) : d.mod, y = c.ushrn(1), _ = c.andln(1), C = g.cmp(y);
      return C < 0 || _ === 1 && C === 0 ? d.div : d.div.negative !== 0 ? d.div.isubn(1) : d.div.iaddn(1);
    }, s.prototype.modrn = function(c) {
      var d = c < 0;
      d && (c = -c), n(c <= 67108863);
      for (var g = (1 << 26) % c, y = 0, _ = this.length - 1; _ >= 0; _--)
        y = (g * y + (this.words[_] | 0)) % c;
      return d ? -y : y;
    }, s.prototype.modn = function(c) {
      return this.modrn(c);
    }, s.prototype.idivn = function(c) {
      var d = c < 0;
      d && (c = -c), n(c <= 67108863);
      for (var g = 0, y = this.length - 1; y >= 0; y--) {
        var _ = (this.words[y] | 0) + g * 67108864;
        this.words[y] = _ / c | 0, g = _ % c;
      }
      return this._strip(), d ? this.ineg() : this;
    }, s.prototype.divn = function(c) {
      return this.clone().idivn(c);
    }, s.prototype.egcd = function(c) {
      n(c.negative === 0), n(!c.isZero());
      var d = this, g = c.clone();
      d.negative !== 0 ? d = d.umod(c) : d = d.clone();
      for (var y = new s(1), _ = new s(0), C = new s(0), k = new s(1), m = 0; d.isEven() && g.isEven(); )
        d.iushrn(1), g.iushrn(1), ++m;
      for (var f = g.clone(), M = d.clone(); !d.isZero(); ) {
        for (var U = 0, G = 1; !(d.words[0] & G) && U < 26; ++U, G <<= 1)
          ;
        if (U > 0)
          for (d.iushrn(U); U-- > 0; )
            (y.isOdd() || _.isOdd()) && (y.iadd(f), _.isub(M)), y.iushrn(1), _.iushrn(1);
        for (var A = 0, T = 1; !(g.words[0] & T) && A < 26; ++A, T <<= 1)
          ;
        if (A > 0)
          for (g.iushrn(A); A-- > 0; )
            (C.isOdd() || k.isOdd()) && (C.iadd(f), k.isub(M)), C.iushrn(1), k.iushrn(1);
        d.cmp(g) >= 0 ? (d.isub(g), y.isub(C), _.isub(k)) : (g.isub(d), C.isub(y), k.isub(_));
      }
      return {
        a: C,
        b: k,
        gcd: g.iushln(m)
      };
    }, s.prototype._invmp = function(c) {
      n(c.negative === 0), n(!c.isZero());
      var d = this, g = c.clone();
      d.negative !== 0 ? d = d.umod(c) : d = d.clone();
      for (var y = new s(1), _ = new s(0), C = g.clone(); d.cmpn(1) > 0 && g.cmpn(1) > 0; ) {
        for (var k = 0, m = 1; !(d.words[0] & m) && k < 26; ++k, m <<= 1)
          ;
        if (k > 0)
          for (d.iushrn(k); k-- > 0; )
            y.isOdd() && y.iadd(C), y.iushrn(1);
        for (var f = 0, M = 1; !(g.words[0] & M) && f < 26; ++f, M <<= 1)
          ;
        if (f > 0)
          for (g.iushrn(f); f-- > 0; )
            _.isOdd() && _.iadd(C), _.iushrn(1);
        d.cmp(g) >= 0 ? (d.isub(g), y.isub(_)) : (g.isub(d), _.isub(y));
      }
      var U;
      return d.cmpn(1) === 0 ? U = y : U = _, U.cmpn(0) < 0 && U.iadd(c), U;
    }, s.prototype.gcd = function(c) {
      if (this.isZero())
        return c.abs();
      if (c.isZero())
        return this.abs();
      var d = this.clone(), g = c.clone();
      d.negative = 0, g.negative = 0;
      for (var y = 0; d.isEven() && g.isEven(); y++)
        d.iushrn(1), g.iushrn(1);
      do {
        for (; d.isEven(); )
          d.iushrn(1);
        for (; g.isEven(); )
          g.iushrn(1);
        var _ = d.cmp(g);
        if (_ < 0) {
          var C = d;
          d = g, g = C;
        } else if (_ === 0 || g.cmpn(1) === 0)
          break;
        d.isub(g);
      } while (!0);
      return g.iushln(y);
    }, s.prototype.invm = function(c) {
      return this.egcd(c).a.umod(c);
    }, s.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, s.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, s.prototype.andln = function(c) {
      return this.words[0] & c;
    }, s.prototype.bincn = function(c) {
      n(typeof c == "number");
      var d = c % 26, g = (c - d) / 26, y = 1 << d;
      if (this.length <= g)
        return this._expand(g + 1), this.words[g] |= y, this;
      for (var _ = y, C = g; _ !== 0 && C < this.length; C++) {
        var k = this.words[C] | 0;
        k += _, _ = k >>> 26, k &= 67108863, this.words[C] = k;
      }
      return _ !== 0 && (this.words[C] = _, this.length++), this;
    }, s.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, s.prototype.cmpn = function(c) {
      var d = c < 0;
      if (this.negative !== 0 && !d)
        return -1;
      if (this.negative === 0 && d)
        return 1;
      this._strip();
      var g;
      if (this.length > 1)
        g = 1;
      else {
        d && (c = -c), n(c <= 67108863, "Number is too big");
        var y = this.words[0] | 0;
        g = y === c ? 0 : y < c ? -1 : 1;
      }
      return this.negative !== 0 ? -g | 0 : g;
    }, s.prototype.cmp = function(c) {
      if (this.negative !== 0 && c.negative === 0)
        return -1;
      if (this.negative === 0 && c.negative !== 0)
        return 1;
      var d = this.ucmp(c);
      return this.negative !== 0 ? -d | 0 : d;
    }, s.prototype.ucmp = function(c) {
      if (this.length > c.length)
        return 1;
      if (this.length < c.length)
        return -1;
      for (var d = 0, g = this.length - 1; g >= 0; g--) {
        var y = this.words[g] | 0, _ = c.words[g] | 0;
        if (y !== _) {
          y < _ ? d = -1 : y > _ && (d = 1);
          break;
        }
      }
      return d;
    }, s.prototype.gtn = function(c) {
      return this.cmpn(c) === 1;
    }, s.prototype.gt = function(c) {
      return this.cmp(c) === 1;
    }, s.prototype.gten = function(c) {
      return this.cmpn(c) >= 0;
    }, s.prototype.gte = function(c) {
      return this.cmp(c) >= 0;
    }, s.prototype.ltn = function(c) {
      return this.cmpn(c) === -1;
    }, s.prototype.lt = function(c) {
      return this.cmp(c) === -1;
    }, s.prototype.lten = function(c) {
      return this.cmpn(c) <= 0;
    }, s.prototype.lte = function(c) {
      return this.cmp(c) <= 0;
    }, s.prototype.eqn = function(c) {
      return this.cmpn(c) === 0;
    }, s.prototype.eq = function(c) {
      return this.cmp(c) === 0;
    }, s.red = function(c) {
      return new K(c);
    }, s.prototype.toRed = function(c) {
      return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), c.convertTo(this)._forceRed(c);
    }, s.prototype.fromRed = function() {
      return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, s.prototype._forceRed = function(c) {
      return this.red = c, this;
    }, s.prototype.forceRed = function(c) {
      return n(!this.red, "Already a number in reduction context"), this._forceRed(c);
    }, s.prototype.redAdd = function(c) {
      return n(this.red, "redAdd works only with red numbers"), this.red.add(this, c);
    }, s.prototype.redIAdd = function(c) {
      return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, c);
    }, s.prototype.redSub = function(c) {
      return n(this.red, "redSub works only with red numbers"), this.red.sub(this, c);
    }, s.prototype.redISub = function(c) {
      return n(this.red, "redISub works only with red numbers"), this.red.isub(this, c);
    }, s.prototype.redShl = function(c) {
      return n(this.red, "redShl works only with red numbers"), this.red.shl(this, c);
    }, s.prototype.redMul = function(c) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, c), this.red.mul(this, c);
    }, s.prototype.redIMul = function(c) {
      return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, c), this.red.imul(this, c);
    }, s.prototype.redSqr = function() {
      return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, s.prototype.redISqr = function() {
      return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, s.prototype.redSqrt = function() {
      return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, s.prototype.redInvm = function() {
      return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, s.prototype.redNeg = function() {
      return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, s.prototype.redPow = function(c) {
      return n(this.red && !c.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, c);
    };
    var P = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function B(v, c) {
      this.name = v, this.p = new s(c, 16), this.n = this.p.bitLength(), this.k = new s(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    B.prototype._tmp = function() {
      var c = new s(null);
      return c.words = new Array(Math.ceil(this.n / 13)), c;
    }, B.prototype.ireduce = function(c) {
      var d = c, g;
      do
        this.split(d, this.tmp), d = this.imulK(d), d = d.iadd(this.tmp), g = d.bitLength();
      while (g > this.n);
      var y = g < this.n ? -1 : d.ucmp(this.p);
      return y === 0 ? (d.words[0] = 0, d.length = 1) : y > 0 ? d.isub(this.p) : d.strip !== void 0 ? d.strip() : d._strip(), d;
    }, B.prototype.split = function(c, d) {
      c.iushrn(this.n, 0, d);
    }, B.prototype.imulK = function(c) {
      return c.imul(this.k);
    };
    function q() {
      B.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    i(q, B), q.prototype.split = function(c, d) {
      for (var g = 4194303, y = Math.min(c.length, 9), _ = 0; _ < y; _++)
        d.words[_] = c.words[_];
      if (d.length = y, c.length <= 9) {
        c.words[0] = 0, c.length = 1;
        return;
      }
      var C = c.words[9];
      for (d.words[d.length++] = C & g, _ = 10; _ < c.length; _++) {
        var k = c.words[_] | 0;
        c.words[_ - 10] = (k & g) << 4 | C >>> 22, C = k;
      }
      C >>>= 22, c.words[_ - 10] = C, C === 0 && c.length > 10 ? c.length -= 10 : c.length -= 9;
    }, q.prototype.imulK = function(c) {
      c.words[c.length] = 0, c.words[c.length + 1] = 0, c.length += 2;
      for (var d = 0, g = 0; g < c.length; g++) {
        var y = c.words[g] | 0;
        d += y * 977, c.words[g] = d & 67108863, d = y * 64 + (d / 67108864 | 0);
      }
      return c.words[c.length - 1] === 0 && (c.length--, c.words[c.length - 1] === 0 && c.length--), c;
    };
    function z() {
      B.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    i(z, B);
    function F() {
      B.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    i(F, B);
    function Z() {
      B.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    i(Z, B), Z.prototype.imulK = function(c) {
      for (var d = 0, g = 0; g < c.length; g++) {
        var y = (c.words[g] | 0) * 19 + d, _ = y & 67108863;
        y >>>= 26, c.words[g] = _, d = y;
      }
      return d !== 0 && (c.words[c.length++] = d), c;
    }, s._prime = function(c) {
      if (P[c])
        return P[c];
      var d;
      if (c === "k256")
        d = new q();
      else if (c === "p224")
        d = new z();
      else if (c === "p192")
        d = new F();
      else if (c === "p25519")
        d = new Z();
      else
        throw new Error("Unknown prime " + c);
      return P[c] = d, d;
    };
    function K(v) {
      if (typeof v == "string") {
        var c = s._prime(v);
        this.m = c.p, this.prime = c;
      } else
        n(v.gtn(1), "modulus must be greater than 1"), this.m = v, this.prime = null;
    }
    K.prototype._verify1 = function(c) {
      n(c.negative === 0, "red works only with positives"), n(c.red, "red works only with red numbers");
    }, K.prototype._verify2 = function(c, d) {
      n((c.negative | d.negative) === 0, "red works only with positives"), n(
        c.red && c.red === d.red,
        "red works only with red numbers"
      );
    }, K.prototype.imod = function(c) {
      return this.prime ? this.prime.ireduce(c)._forceRed(this) : (h(c, c.umod(this.m)._forceRed(this)), c);
    }, K.prototype.neg = function(c) {
      return c.isZero() ? c.clone() : this.m.sub(c)._forceRed(this);
    }, K.prototype.add = function(c, d) {
      this._verify2(c, d);
      var g = c.add(d);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g._forceRed(this);
    }, K.prototype.iadd = function(c, d) {
      this._verify2(c, d);
      var g = c.iadd(d);
      return g.cmp(this.m) >= 0 && g.isub(this.m), g;
    }, K.prototype.sub = function(c, d) {
      this._verify2(c, d);
      var g = c.sub(d);
      return g.cmpn(0) < 0 && g.iadd(this.m), g._forceRed(this);
    }, K.prototype.isub = function(c, d) {
      this._verify2(c, d);
      var g = c.isub(d);
      return g.cmpn(0) < 0 && g.iadd(this.m), g;
    }, K.prototype.shl = function(c, d) {
      return this._verify1(c), this.imod(c.ushln(d));
    }, K.prototype.imul = function(c, d) {
      return this._verify2(c, d), this.imod(c.imul(d));
    }, K.prototype.mul = function(c, d) {
      return this._verify2(c, d), this.imod(c.mul(d));
    }, K.prototype.isqr = function(c) {
      return this.imul(c, c.clone());
    }, K.prototype.sqr = function(c) {
      return this.mul(c, c);
    }, K.prototype.sqrt = function(c) {
      if (c.isZero())
        return c.clone();
      var d = this.m.andln(3);
      if (n(d % 2 === 1), d === 3) {
        var g = this.m.add(new s(1)).iushrn(2);
        return this.pow(c, g);
      }
      for (var y = this.m.subn(1), _ = 0; !y.isZero() && y.andln(1) === 0; )
        _++, y.iushrn(1);
      n(!y.isZero());
      var C = new s(1).toRed(this), k = C.redNeg(), m = this.m.subn(1).iushrn(1), f = this.m.bitLength();
      for (f = new s(2 * f * f).toRed(this); this.pow(f, m).cmp(k) !== 0; )
        f.redIAdd(k);
      for (var M = this.pow(f, y), U = this.pow(c, y.addn(1).iushrn(1)), G = this.pow(c, y), A = _; G.cmp(C) !== 0; ) {
        for (var T = G, D = 0; T.cmp(C) !== 0; D++)
          T = T.redSqr();
        n(D < A);
        var V = this.pow(M, new s(1).iushln(A - D - 1));
        U = U.redMul(V), M = V.redSqr(), G = G.redMul(M), A = D;
      }
      return U;
    }, K.prototype.invm = function(c) {
      var d = c._invmp(this.m);
      return d.negative !== 0 ? (d.negative = 0, this.imod(d).redNeg()) : this.imod(d);
    }, K.prototype.pow = function(c, d) {
      if (d.isZero())
        return new s(1).toRed(this);
      if (d.cmpn(1) === 0)
        return c.clone();
      var g = 4, y = new Array(1 << g);
      y[0] = new s(1).toRed(this), y[1] = c;
      for (var _ = 2; _ < y.length; _++)
        y[_] = this.mul(y[_ - 1], c);
      var C = y[0], k = 0, m = 0, f = d.bitLength() % 26;
      for (f === 0 && (f = 26), _ = d.length - 1; _ >= 0; _--) {
        for (var M = d.words[_], U = f - 1; U >= 0; U--) {
          var G = M >> U & 1;
          if (C !== y[0] && (C = this.sqr(C)), G === 0 && k === 0) {
            m = 0;
            continue;
          }
          k <<= 1, k |= G, m++, !(m !== g && (_ !== 0 || U !== 0)) && (C = this.mul(C, y[k]), m = 0, k = 0);
        }
        f = 26;
      }
      return C;
    }, K.prototype.convertTo = function(c) {
      var d = c.umod(this.m);
      return d === c ? d.clone() : d;
    }, K.prototype.convertFrom = function(c) {
      var d = c.clone();
      return d.red = null, d;
    }, s.mont = function(c) {
      return new X(c);
    };
    function X(v) {
      K.call(this, v), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new s(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    i(X, K), X.prototype.convertTo = function(c) {
      return this.imod(c.ushln(this.shift));
    }, X.prototype.convertFrom = function(c) {
      var d = this.imod(c.mul(this.rinv));
      return d.red = null, d;
    }, X.prototype.imul = function(c, d) {
      if (c.isZero() || d.isZero())
        return c.words[0] = 0, c.length = 1, c;
      var g = c.imul(d), y = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), _ = g.isub(y).iushrn(this.shift), C = _;
      return _.cmp(this.m) >= 0 ? C = _.isub(this.m) : _.cmpn(0) < 0 && (C = _.iadd(this.m)), C._forceRed(this);
    }, X.prototype.mul = function(c, d) {
      if (c.isZero() || d.isZero())
        return new s(0)._forceRed(this);
      var g = c.mul(d), y = g.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), _ = g.isub(y).iushrn(this.shift), C = _;
      return _.cmp(this.m) >= 0 ? C = _.isub(this.m) : _.cmpn(0) < 0 && (C = _.iadd(this.m)), C._forceRed(this);
    }, X.prototype.invm = function(c) {
      var d = this.imod(c._invmp(this.m).mul(this.r2));
      return d._forceRed(this);
    };
  })(t, J);
})(zu);
var vo = zu.exports, vi = {};
Object.defineProperty(vi, "__esModule", { value: !0 });
vi.EVENTS = void 0;
vi.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var es = {}, qu = {}, kr = {}, xg = Gi;
Gi.default = Gi;
Gi.stable = Ph;
Gi.stableStringify = Ph;
var Zs = "[...]", Nh = "[Circular]", fn = [], on = [];
function Lh() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function Gi(t, e, r, n) {
  typeof n > "u" && (n = Lh()), du(t, "", 0, [], void 0, 0, n);
  var i;
  try {
    on.length === 0 ? i = JSON.stringify(t, e, r) : i = JSON.stringify(t, $h(e), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; fn.length !== 0; ) {
      var s = fn.pop();
      s.length === 4 ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2];
    }
  }
  return i;
}
function Jn(t, e, r, n) {
  var i = Object.getOwnPropertyDescriptor(n, r);
  i.get !== void 0 ? i.configurable ? (Object.defineProperty(n, r, { value: t }), fn.push([n, r, e, i])) : on.push([e, r, t]) : (n[r] = t, fn.push([n, r, e]));
}
function du(t, e, r, n, i, s, o) {
  s += 1;
  var a;
  if (typeof t == "object" && t !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === t) {
        Jn(Nh, t, e, i);
        return;
      }
    if (typeof o.depthLimit < "u" && s > o.depthLimit) {
      Jn(Zs, t, e, i);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      Jn(Zs, t, e, i);
      return;
    }
    if (n.push(t), Array.isArray(t))
      for (a = 0; a < t.length; a++)
        du(t[a], a, a, n, t, s, o);
    else {
      var u = Object.keys(t);
      for (a = 0; a < u.length; a++) {
        var l = u[a];
        du(t[l], l, a, n, t, s, o);
      }
    }
    n.pop();
  }
}
function Mg(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ph(t, e, r, n) {
  typeof n > "u" && (n = Lh());
  var i = pu(t, "", 0, [], void 0, 0, n) || t, s;
  try {
    on.length === 0 ? s = JSON.stringify(i, e, r) : s = JSON.stringify(i, $h(e), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; fn.length !== 0; ) {
      var o = fn.pop();
      o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
    }
  }
  return s;
}
function pu(t, e, r, n, i, s, o) {
  s += 1;
  var a;
  if (typeof t == "object" && t !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === t) {
        Jn(Nh, t, e, i);
        return;
      }
    try {
      if (typeof t.toJSON == "function")
        return;
    } catch {
      return;
    }
    if (typeof o.depthLimit < "u" && s > o.depthLimit) {
      Jn(Zs, t, e, i);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      Jn(Zs, t, e, i);
      return;
    }
    if (n.push(t), Array.isArray(t))
      for (a = 0; a < t.length; a++)
        pu(t[a], a, a, n, t, s, o);
    else {
      var u = {}, l = Object.keys(t).sort(Mg);
      for (a = 0; a < l.length; a++) {
        var h = l[a];
        pu(t[h], h, a, n, t, s, o), u[h] = t[h];
      }
      if (typeof i < "u")
        fn.push([i, e, t]), i[e] = u;
      else
        return u;
    }
    n.pop();
  }
}
function $h(t) {
  return t = typeof t < "u" ? t : function(e, r) {
    return r;
  }, function(e, r) {
    if (on.length > 0)
      for (var n = 0; n < on.length; n++) {
        var i = on[n];
        if (i[1] === e && i[0] === r) {
          r = i[2], on.splice(n, 1);
          break;
        }
      }
    return t.call(this, e, r);
  };
}
Object.defineProperty(kr, "__esModule", { value: !0 });
kr.EthereumProviderError = kr.EthereumRpcError = void 0;
const Cg = xg;
class Dh extends Error {
  constructor(e, r, n) {
    if (!Number.isInteger(e))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = e, n !== void 0 && (this.data = n);
  }
  /**
   * Returns a plain object with all public class properties.
   */
  serialize() {
    const e = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (e.data = this.data), this.stack && (e.stack = this.stack), e;
  }
  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   */
  toString() {
    return Cg.default(this.serialize(), Ag, 2);
  }
}
kr.EthereumRpcError = Dh;
class Rg extends Dh {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(e, r, n) {
    if (!Ig(e))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e, r, n);
  }
}
kr.EthereumProviderError = Rg;
function Ig(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
function Ag(t, e) {
  if (e !== "[Circular]")
    return e;
}
var Gu = {}, Tr = {};
Object.defineProperty(Tr, "__esModule", { value: !0 });
Tr.errorValues = Tr.errorCodes = void 0;
Tr.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
Tr.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const e = Tr, r = kr, n = e.errorCodes.rpc.internal, i = "Unspecified error message. This is a bug, please report it.", s = {
    code: n,
    message: o(n)
  };
  t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function o(b, S = i) {
    if (Number.isInteger(b)) {
      const R = b.toString();
      if (p(e.errorValues, R))
        return e.errorValues[R].message;
      if (l(b))
        return t.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return S;
  }
  t.getMessageFromCode = o;
  function a(b) {
    if (!Number.isInteger(b))
      return !1;
    const S = b.toString();
    return !!(e.errorValues[S] || l(b));
  }
  t.isValidCode = a;
  function u(b, { fallbackError: S = s, shouldIncludeStack: R = !1 } = {}) {
    var L, O;
    if (!S || !Number.isInteger(S.code) || typeof S.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (b instanceof r.EthereumRpcError)
      return b.serialize();
    const w = {};
    if (b && typeof b == "object" && !Array.isArray(b) && p(b, "code") && a(b.code)) {
      const N = b;
      w.code = N.code, N.message && typeof N.message == "string" ? (w.message = N.message, p(N, "data") && (w.data = N.data)) : (w.message = o(w.code), w.data = { originalError: h(b) });
    } else {
      w.code = S.code;
      const N = (L = b) === null || L === void 0 ? void 0 : L.message;
      w.message = N && typeof N == "string" ? N : S.message, w.data = { originalError: h(b) };
    }
    const I = (O = b) === null || O === void 0 ? void 0 : O.stack;
    return R && b && I && typeof I == "string" && (w.stack = I), w;
  }
  t.serializeError = u;
  function l(b) {
    return b >= -32099 && b <= -32e3;
  }
  function h(b) {
    return b && typeof b == "object" && !Array.isArray(b) ? Object.assign({}, b) : b;
  }
  function p(b, S) {
    return Object.prototype.hasOwnProperty.call(b, S);
  }
})(Gu);
var yo = {};
Object.defineProperty(yo, "__esModule", { value: !0 });
yo.ethErrors = void 0;
const Ju = kr, Bh = Gu, gt = Tr;
yo.ethErrors = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     */
    parse: (t) => Tt(gt.errorCodes.rpc.parse, t),
    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     */
    invalidRequest: (t) => Tt(gt.errorCodes.rpc.invalidRequest, t),
    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     */
    invalidParams: (t) => Tt(gt.errorCodes.rpc.invalidParams, t),
    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     */
    methodNotFound: (t) => Tt(gt.errorCodes.rpc.methodNotFound, t),
    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     */
    internal: (t) => Tt(gt.errorCodes.rpc.internal, t),
    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP-1474.
     */
    server: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: e } = t;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return Tt(e, t);
    },
    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     */
    invalidInput: (t) => Tt(gt.errorCodes.rpc.invalidInput, t),
    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     */
    resourceNotFound: (t) => Tt(gt.errorCodes.rpc.resourceNotFound, t),
    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     */
    resourceUnavailable: (t) => Tt(gt.errorCodes.rpc.resourceUnavailable, t),
    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     */
    transactionRejected: (t) => Tt(gt.errorCodes.rpc.transactionRejected, t),
    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     */
    methodNotSupported: (t) => Tt(gt.errorCodes.rpc.methodNotSupported, t),
    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     */
    limitExceeded: (t) => Tt(gt.errorCodes.rpc.limitExceeded, t)
  },
  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     */
    userRejectedRequest: (t) => ki(gt.errorCodes.provider.userRejectedRequest, t),
    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     */
    unauthorized: (t) => ki(gt.errorCodes.provider.unauthorized, t),
    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     */
    unsupportedMethod: (t) => ki(gt.errorCodes.provider.unsupportedMethod, t),
    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     */
    disconnected: (t) => ki(gt.errorCodes.provider.disconnected, t),
    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     */
    chainDisconnected: (t) => ki(gt.errorCodes.provider.chainDisconnected, t),
    /**
     * Get a custom Ethereum Provider error.
     */
    custom: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: e, message: r, data: n } = t;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new Ju.EthereumProviderError(e, r, n);
    }
  }
};
function Tt(t, e) {
  const [r, n] = jh(e);
  return new Ju.EthereumRpcError(t, r || Bh.getMessageFromCode(t), n);
}
function ki(t, e) {
  const [r, n] = jh(e);
  return new Ju.EthereumProviderError(t, r || Bh.getMessageFromCode(t), n);
}
function jh(t) {
  if (t) {
    if (typeof t == "string")
      return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      const { message: e, data: r } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, r];
    }
  }
  return [];
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
  const e = kr;
  Object.defineProperty(t, "EthereumRpcError", { enumerable: !0, get: function() {
    return e.EthereumRpcError;
  } }), Object.defineProperty(t, "EthereumProviderError", { enumerable: !0, get: function() {
    return e.EthereumProviderError;
  } });
  const r = Gu;
  Object.defineProperty(t, "serializeError", { enumerable: !0, get: function() {
    return r.serializeError;
  } }), Object.defineProperty(t, "getMessageFromCode", { enumerable: !0, get: function() {
    return r.getMessageFromCode;
  } });
  const n = yo;
  Object.defineProperty(t, "ethErrors", { enumerable: !0, get: function() {
    return n.ethErrors;
  } });
  const i = Tr;
  Object.defineProperty(t, "errorCodes", { enumerable: !0, get: function() {
    return i.errorCodes;
  } });
})(qu);
var Ee = {}, mo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Web3Method = void 0, function(e) {
    e.requestEthereumAccounts = "requestEthereumAccounts", e.signEthereumMessage = "signEthereumMessage", e.signEthereumTransaction = "signEthereumTransaction", e.submitEthereumTransaction = "submitEthereumTransaction", e.ethereumAddressFromSignedMessage = "ethereumAddressFromSignedMessage", e.scanQRCode = "scanQRCode", e.generic = "generic", e.childRequestEthereumAccounts = "childRequestEthereumAccounts", e.addEthereumChain = "addEthereumChain", e.switchEthereumChain = "switchEthereumChain", e.makeEthereumJSONRPCRequest = "makeEthereumJSONRPCRequest", e.watchAsset = "watchAsset", e.selectProvider = "selectProvider";
  }(t.Web3Method || (t.Web3Method = {}));
})(mo);
Object.defineProperty(Ee, "__esModule", { value: !0 });
Ee.EthereumAddressFromSignedMessageResponse = Ee.SubmitEthereumTransactionResponse = Ee.SignEthereumTransactionResponse = Ee.SignEthereumMessageResponse = Ee.isRequestEthereumAccountsResponse = Ee.SelectProviderResponse = Ee.WatchAssetReponse = Ee.RequestEthereumAccountsResponse = Ee.SwitchEthereumChainResponse = Ee.AddEthereumChainResponse = Ee.isErrorResponse = void 0;
const cr = mo;
function kg(t) {
  var e, r;
  return ((e = t) === null || e === void 0 ? void 0 : e.method) !== void 0 && ((r = t) === null || r === void 0 ? void 0 : r.errorMessage) !== void 0;
}
Ee.isErrorResponse = kg;
function Tg(t) {
  return {
    method: cr.Web3Method.addEthereumChain,
    result: t
  };
}
Ee.AddEthereumChainResponse = Tg;
function Og(t) {
  return {
    method: cr.Web3Method.switchEthereumChain,
    result: t
  };
}
Ee.SwitchEthereumChainResponse = Og;
function Ng(t) {
  return { method: cr.Web3Method.requestEthereumAccounts, result: t };
}
Ee.RequestEthereumAccountsResponse = Ng;
function Lg(t) {
  return { method: cr.Web3Method.watchAsset, result: t };
}
Ee.WatchAssetReponse = Lg;
function Pg(t) {
  return { method: cr.Web3Method.selectProvider, result: t };
}
Ee.SelectProviderResponse = Pg;
function $g(t) {
  return t && t.method === cr.Web3Method.requestEthereumAccounts;
}
Ee.isRequestEthereumAccountsResponse = $g;
function Dg(t) {
  return { method: cr.Web3Method.signEthereumMessage, result: t };
}
Ee.SignEthereumMessageResponse = Dg;
function Bg(t) {
  return { method: cr.Web3Method.signEthereumTransaction, result: t };
}
Ee.SignEthereumTransactionResponse = Bg;
function jg(t) {
  return { method: cr.Web3Method.submitEthereumTransaction, result: t };
}
Ee.SubmitEthereumTransactionResponse = jg;
function Fg(t) {
  return {
    method: cr.Web3Method.ethereumAddressFromSignedMessage,
    result: t
  };
}
Ee.EthereumAddressFromSignedMessageResponse = Fg;
var yi = {};
Object.defineProperty(yi, "__esModule", { value: !0 });
yi.LIB_VERSION = void 0;
yi.LIB_VERSION = "3.7.2";
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getErrorCode = t.serializeError = t.standardErrors = t.standardErrorMessage = t.standardErrorCodes = void 0;
  const e = qu, r = Ee, n = yi;
  t.standardErrorCodes = Object.freeze(Object.assign(Object.assign({}, e.errorCodes), { provider: Object.freeze(Object.assign(Object.assign({}, e.errorCodes.provider), { unsupportedChain: 4902 })) }));
  function i(h) {
    return h !== void 0 ? (0, e.getMessageFromCode)(h) : "Unknown error";
  }
  t.standardErrorMessage = i, t.standardErrors = Object.freeze(Object.assign(Object.assign({}, e.ethErrors), { provider: Object.freeze(Object.assign(Object.assign({}, e.ethErrors.provider), { unsupportedChain: (h = "") => e.ethErrors.provider.custom({
    code: t.standardErrorCodes.provider.unsupportedChain,
    message: `Unrecognized chain ID ${h}. Try adding the chain using wallet_addEthereumChain first.`
  }) })) }));
  function s(h, p) {
    const b = (0, e.serializeError)(o(h), {
      shouldIncludeStack: !0
    }), S = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
    S.searchParams.set("version", n.LIB_VERSION), S.searchParams.set("code", b.code.toString());
    const R = a(b.data, p);
    return R && S.searchParams.set("method", R), S.searchParams.set("message", b.message), Object.assign(Object.assign({}, b), { docUrl: S.href });
  }
  t.serializeError = s;
  function o(h) {
    return typeof h == "string" ? {
      message: h,
      code: t.standardErrorCodes.rpc.internal
    } : (0, r.isErrorResponse)(h) ? Object.assign(Object.assign({}, h), { message: h.errorMessage, code: h.errorCode, data: { method: h.method, result: h.result } }) : h;
  }
  function a(h, p) {
    var b;
    const S = (b = h) === null || b === void 0 ? void 0 : b.method;
    if (S)
      return S;
    if (p !== void 0)
      return typeof p == "string" ? p : Array.isArray(p) ? p.length > 0 ? p[0].method : void 0 : p.method;
  }
  function u(h) {
    var p;
    if (typeof h == "number")
      return h;
    if (l(h))
      return (p = h.code) !== null && p !== void 0 ? p : h.errorCode;
  }
  t.getErrorCode = u;
  function l(h) {
    return typeof h == "object" && h !== null && (typeof h.code == "number" || typeof h.errorCode == "number");
  }
})(es);
var mi = {}, Fh = { exports: {} }, gu = { exports: {} };
typeof Object.create == "function" ? gu.exports = function(e, r) {
  r && (e.super_ = r, e.prototype = Object.create(r.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }));
} : gu.exports = function(e, r) {
  if (r) {
    e.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
  }
};
var Gt = gu.exports, bu = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(t, e) {
  var r = ho, n = r.Buffer;
  function i(o, a) {
    for (var u in o)
      a[u] = o[u];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = r : (i(r, e), e.Buffer = s);
  function s(o, a, u) {
    return n(o, a, u);
  }
  s.prototype = Object.create(n.prototype), i(n, s), s.from = function(o, a, u) {
    if (typeof o == "number")
      throw new TypeError("Argument must not be a number");
    return n(o, a, u);
  }, s.alloc = function(o, a, u) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    var l = n(o);
    return a !== void 0 ? typeof u == "string" ? l.fill(a, u) : l.fill(a) : l.fill(0), l;
  }, s.allocUnsafe = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return n(o);
  }, s.allocUnsafeSlow = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(o);
  };
})(bu, bu.exports);
var Pr = bu.exports, Wh = Pr.Buffer;
function _o(t, e) {
  this._block = Wh.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0;
}
_o.prototype.update = function(t, e) {
  typeof t == "string" && (e = e || "utf8", t = Wh.from(t, e));
  for (var r = this._block, n = this._blockSize, i = t.length, s = this._len, o = 0; o < i; ) {
    for (var a = s % n, u = Math.min(i - o, n - a), l = 0; l < u; l++)
      r[a + l] = t[o + l];
    s += u, o += u, s % n === 0 && this._update(r);
  }
  return this._len += i, this;
};
_o.prototype.digest = function(t) {
  var e = this._len % this._blockSize;
  this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var r = this._len * 8;
  if (r <= 4294967295)
    this._block.writeUInt32BE(r, this._blockSize - 4);
  else {
    var n = (r & 4294967295) >>> 0, i = (r - n) / 4294967296;
    this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4);
  }
  this._update(this._block);
  var s = this._hash();
  return t ? s.toString(t) : s;
};
_o.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var _i = _o, Wg = Gt, Hh = _i, Hg = Pr.Buffer, Vg = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], Ug = new Array(80);
function ts() {
  this.init(), this._w = Ug, Hh.call(this, 64, 56);
}
Wg(ts, Hh);
ts.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function zg(t) {
  return t << 5 | t >>> 27;
}
function qg(t) {
  return t << 30 | t >>> 2;
}
function Gg(t, e, r, n) {
  return t === 0 ? e & r | ~e & n : t === 2 ? e & r | e & n | r & n : e ^ r ^ n;
}
ts.prototype._update = function(t) {
  for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, a = 0; a < 16; ++a)
    e[a] = t.readInt32BE(a * 4);
  for (; a < 80; ++a)
    e[a] = e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16];
  for (var u = 0; u < 80; ++u) {
    var l = ~~(u / 20), h = zg(r) + Gg(l, n, i, s) + o + e[u] + Vg[l] | 0;
    o = s, s = i, i = qg(n), n = r, r = h;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = o + this._e | 0;
};
ts.prototype._hash = function() {
  var t = Hg.allocUnsafe(20);
  return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
};
var Jg = ts, Zg = Gt, Vh = _i, Qg = Pr.Buffer, Yg = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], Kg = new Array(80);
function rs() {
  this.init(), this._w = Kg, Vh.call(this, 64, 56);
}
Zg(rs, Vh);
rs.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function Xg(t) {
  return t << 1 | t >>> 31;
}
function eb(t) {
  return t << 5 | t >>> 27;
}
function tb(t) {
  return t << 30 | t >>> 2;
}
function rb(t, e, r, n) {
  return t === 0 ? e & r | ~e & n : t === 2 ? e & r | e & n | r & n : e ^ r ^ n;
}
rs.prototype._update = function(t) {
  for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, a = 0; a < 16; ++a)
    e[a] = t.readInt32BE(a * 4);
  for (; a < 80; ++a)
    e[a] = Xg(e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16]);
  for (var u = 0; u < 80; ++u) {
    var l = ~~(u / 20), h = eb(r) + rb(l, n, i, s) + o + e[u] + Yg[l] | 0;
    o = s, s = i, i = tb(n), n = r, r = h;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = o + this._e | 0;
};
rs.prototype._hash = function() {
  var t = Qg.allocUnsafe(20);
  return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
};
var nb = rs, ib = Gt, Uh = _i, sb = Pr.Buffer, ob = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
], ab = new Array(64);
function ns() {
  this.init(), this._w = ab, Uh.call(this, 64, 56);
}
ib(ns, Uh);
ns.prototype.init = function() {
  return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
};
function ub(t, e, r) {
  return r ^ t & (e ^ r);
}
function cb(t, e, r) {
  return t & e | r & (t | e);
}
function lb(t) {
  return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10);
}
function fb(t) {
  return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7);
}
function hb(t) {
  return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
}
function db(t) {
  return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
}
ns.prototype._update = function(t) {
  for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, a = this._f | 0, u = this._g | 0, l = this._h | 0, h = 0; h < 16; ++h)
    e[h] = t.readInt32BE(h * 4);
  for (; h < 64; ++h)
    e[h] = db(e[h - 2]) + e[h - 7] + hb(e[h - 15]) + e[h - 16] | 0;
  for (var p = 0; p < 64; ++p) {
    var b = l + fb(o) + ub(o, a, u) + ob[p] + e[p] | 0, S = lb(r) + cb(r, n, i) | 0;
    l = u, u = a, a = o, o = s + b | 0, s = i, i = n, n = r, r = b + S | 0;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = o + this._e | 0, this._f = a + this._f | 0, this._g = u + this._g | 0, this._h = l + this._h | 0;
};
ns.prototype._hash = function() {
  var t = sb.allocUnsafe(32);
  return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t;
};
var zh = ns, pb = Gt, gb = zh, bb = _i, vb = Pr.Buffer, yb = new Array(64);
function wo() {
  this.init(), this._w = yb, bb.call(this, 64, 56);
}
pb(wo, gb);
wo.prototype.init = function() {
  return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
};
wo.prototype._hash = function() {
  var t = vb.allocUnsafe(28);
  return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t;
};
var mb = wo, _b = Gt, qh = _i, wb = Pr.Buffer, sl = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
], Sb = new Array(160);
function is() {
  this.init(), this._w = Sb, qh.call(this, 128, 112);
}
_b(is, qh);
is.prototype.init = function() {
  return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
};
function ol(t, e, r) {
  return r ^ t & (e ^ r);
}
function al(t, e, r) {
  return t & e | r & (t | e);
}
function ul(t, e) {
  return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25);
}
function cl(t, e) {
  return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23);
}
function Eb(t, e) {
  return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7;
}
function xb(t, e) {
  return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25);
}
function Mb(t, e) {
  return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6;
}
function Cb(t, e) {
  return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26);
}
function ot(t, e) {
  return t >>> 0 < e >>> 0 ? 1 : 0;
}
is.prototype._update = function(t) {
  for (var e = this._w, r = this._ah | 0, n = this._bh | 0, i = this._ch | 0, s = this._dh | 0, o = this._eh | 0, a = this._fh | 0, u = this._gh | 0, l = this._hh | 0, h = this._al | 0, p = this._bl | 0, b = this._cl | 0, S = this._dl | 0, R = this._el | 0, L = this._fl | 0, O = this._gl | 0, w = this._hl | 0, I = 0; I < 32; I += 2)
    e[I] = t.readInt32BE(I * 4), e[I + 1] = t.readInt32BE(I * 4 + 4);
  for (; I < 160; I += 2) {
    var N = e[I - 30], $ = e[I - 15 * 2 + 1], P = Eb(N, $), B = xb($, N);
    N = e[I - 2 * 2], $ = e[I - 2 * 2 + 1];
    var q = Mb(N, $), z = Cb($, N), F = e[I - 7 * 2], Z = e[I - 7 * 2 + 1], K = e[I - 16 * 2], X = e[I - 16 * 2 + 1], v = B + Z | 0, c = P + F + ot(v, B) | 0;
    v = v + z | 0, c = c + q + ot(v, z) | 0, v = v + X | 0, c = c + K + ot(v, X) | 0, e[I] = c, e[I + 1] = v;
  }
  for (var d = 0; d < 160; d += 2) {
    c = e[d], v = e[d + 1];
    var g = al(r, n, i), y = al(h, p, b), _ = ul(r, h), C = ul(h, r), k = cl(o, R), m = cl(R, o), f = sl[d], M = sl[d + 1], U = ol(o, a, u), G = ol(R, L, O), A = w + m | 0, T = l + k + ot(A, w) | 0;
    A = A + G | 0, T = T + U + ot(A, G) | 0, A = A + M | 0, T = T + f + ot(A, M) | 0, A = A + v | 0, T = T + c + ot(A, v) | 0;
    var D = C + y | 0, V = _ + g + ot(D, C) | 0;
    l = u, w = O, u = a, O = L, a = o, L = R, R = S + A | 0, o = s + T + ot(R, S) | 0, s = i, S = b, i = n, b = p, n = r, p = h, h = A + D | 0, r = T + V + ot(h, A) | 0;
  }
  this._al = this._al + h | 0, this._bl = this._bl + p | 0, this._cl = this._cl + b | 0, this._dl = this._dl + S | 0, this._el = this._el + R | 0, this._fl = this._fl + L | 0, this._gl = this._gl + O | 0, this._hl = this._hl + w | 0, this._ah = this._ah + r + ot(this._al, h) | 0, this._bh = this._bh + n + ot(this._bl, p) | 0, this._ch = this._ch + i + ot(this._cl, b) | 0, this._dh = this._dh + s + ot(this._dl, S) | 0, this._eh = this._eh + o + ot(this._el, R) | 0, this._fh = this._fh + a + ot(this._fl, L) | 0, this._gh = this._gh + u + ot(this._gl, O) | 0, this._hh = this._hh + l + ot(this._hl, w) | 0;
};
is.prototype._hash = function() {
  var t = wb.allocUnsafe(64);
  function e(r, n, i) {
    t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
  }
  return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t;
};
var Gh = is, Rb = Gt, Ib = Gh, Ab = _i, kb = Pr.Buffer, Tb = new Array(160);
function So() {
  this.init(), this._w = Tb, Ab.call(this, 128, 112);
}
Rb(So, Ib);
So.prototype.init = function() {
  return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
};
So.prototype._hash = function() {
  var t = kb.allocUnsafe(48);
  function e(r, n, i) {
    t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
  }
  return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t;
};
var Ob = So, yn = Fh.exports = function(e) {
  e = e.toLowerCase();
  var r = yn[e];
  if (!r)
    throw new Error(e + " is not supported (we accept pull requests)");
  return new r();
};
yn.sha = Jg;
yn.sha1 = nb;
yn.sha224 = mb;
yn.sha256 = zh;
yn.sha384 = Ob;
yn.sha512 = Gh;
var Nb = Fh.exports, Q = {}, Lb = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  e[r] = i;
  for (r in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var s = Object.getOwnPropertySymbols(e);
  if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(e, r);
    if (o.value !== i || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, ll = typeof Symbol < "u" && Symbol, Pb = Lb, $b = function() {
  return typeof ll != "function" || typeof Symbol != "function" || typeof ll("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : Pb();
}, fl = {
  foo: {}
}, Db = Object, Bb = function() {
  return { __proto__: fl }.foo === fl.foo && !({ __proto__: null } instanceof Db);
}, jb = "Function.prototype.bind called on incompatible ", Fb = Object.prototype.toString, Wb = Math.max, Hb = "[object Function]", hl = function(e, r) {
  for (var n = [], i = 0; i < e.length; i += 1)
    n[i] = e[i];
  for (var s = 0; s < r.length; s += 1)
    n[s + e.length] = r[s];
  return n;
}, Vb = function(e, r) {
  for (var n = [], i = r || 0, s = 0; i < e.length; i += 1, s += 1)
    n[s] = e[i];
  return n;
}, Ub = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, zb = function(e) {
  var r = this;
  if (typeof r != "function" || Fb.apply(r) !== Hb)
    throw new TypeError(jb + r);
  for (var n = Vb(arguments, 1), i, s = function() {
    if (this instanceof i) {
      var h = r.apply(
        this,
        hl(n, arguments)
      );
      return Object(h) === h ? h : this;
    }
    return r.apply(
      e,
      hl(n, arguments)
    );
  }, o = Wb(0, r.length - n.length), a = [], u = 0; u < o; u++)
    a[u] = "$" + u;
  if (i = Function("binder", "return function (" + Ub(a, ",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
    var l = function() {
    };
    l.prototype = r.prototype, i.prototype = new l(), l.prototype = null;
  }
  return i;
}, qb = zb, Zu = Function.prototype.bind || qb, Gb = Function.prototype.call, Jb = Object.prototype.hasOwnProperty, Zb = Zu, Qb = Zb.call(Gb, Jb), le, ti = SyntaxError, Jh = Function, Zn = TypeError, xa = function(t) {
  try {
    return Jh('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, cn = Object.getOwnPropertyDescriptor;
if (cn)
  try {
    cn({}, "");
  } catch {
    cn = null;
  }
var Ma = function() {
  throw new Zn();
}, Yb = cn ? function() {
  try {
    return arguments.callee, Ma;
  } catch {
    try {
      return cn(arguments, "callee").get;
    } catch {
      return Ma;
    }
  }
}() : Ma, Dn = $b(), Kb = Bb(), ct = Object.getPrototypeOf || (Kb ? function(t) {
  return t.__proto__;
} : null), Un = {}, Xb = typeof Uint8Array > "u" || !ct ? le : ct(Uint8Array), ln = {
  "%AggregateError%": typeof AggregateError > "u" ? le : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? le : ArrayBuffer,
  "%ArrayIteratorPrototype%": Dn && ct ? ct([][Symbol.iterator]()) : le,
  "%AsyncFromSyncIteratorPrototype%": le,
  "%AsyncFunction%": Un,
  "%AsyncGenerator%": Un,
  "%AsyncGeneratorFunction%": Un,
  "%AsyncIteratorPrototype%": Un,
  "%Atomics%": typeof Atomics > "u" ? le : Atomics,
  "%BigInt%": typeof BigInt > "u" ? le : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? le : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? le : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? le : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? le : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? le : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? le : FinalizationRegistry,
  "%Function%": Jh,
  "%GeneratorFunction%": Un,
  "%Int8Array%": typeof Int8Array > "u" ? le : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? le : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? le : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Dn && ct ? ct(ct([][Symbol.iterator]())) : le,
  "%JSON%": typeof JSON == "object" ? JSON : le,
  "%Map%": typeof Map > "u" ? le : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Dn || !ct ? le : ct((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? le : Promise,
  "%Proxy%": typeof Proxy > "u" ? le : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? le : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? le : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Dn || !ct ? le : ct((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? le : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Dn && ct ? ct(""[Symbol.iterator]()) : le,
  "%Symbol%": Dn ? Symbol : le,
  "%SyntaxError%": ti,
  "%ThrowTypeError%": Yb,
  "%TypedArray%": Xb,
  "%TypeError%": Zn,
  "%Uint8Array%": typeof Uint8Array > "u" ? le : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? le : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? le : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? le : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? le : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? le : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? le : WeakSet
};
if (ct)
  try {
    null.error;
  } catch (t) {
    var ev = ct(ct(t));
    ln["%Error.prototype%"] = ev;
  }
var tv = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = xa("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = xa("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = xa("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && ct && (r = ct(i.prototype));
  }
  return ln[e] = r, r;
}, dl = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, ss = Zu, Qs = Qb, rv = ss.call(Function.call, Array.prototype.concat), nv = ss.call(Function.apply, Array.prototype.splice), pl = ss.call(Function.call, String.prototype.replace), Ys = ss.call(Function.call, String.prototype.slice), iv = ss.call(Function.call, RegExp.prototype.exec), sv = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, ov = /\\(\\)?/g, av = function(e) {
  var r = Ys(e, 0, 1), n = Ys(e, -1);
  if (r === "%" && n !== "%")
    throw new ti("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new ti("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return pl(e, sv, function(s, o, a, u) {
    i[i.length] = a ? pl(u, ov, "$1") : o || s;
  }), i;
}, uv = function(e, r) {
  var n = e, i;
  if (Qs(dl, n) && (i = dl[n], n = "%" + i[0] + "%"), Qs(ln, n)) {
    var s = ln[n];
    if (s === Un && (s = tv(n)), typeof s > "u" && !r)
      throw new Zn("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: s
    };
  }
  throw new ti("intrinsic " + e + " does not exist!");
}, mn = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new Zn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new Zn('"allowMissing" argument must be a boolean');
  if (iv(/^%?[^%]*%?$/, e) === null)
    throw new ti("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = av(e), i = n.length > 0 ? n[0] : "", s = uv("%" + i + "%", r), o = s.name, a = s.value, u = !1, l = s.alias;
  l && (i = l[0], nv(n, rv([0, 1], l)));
  for (var h = 1, p = !0; h < n.length; h += 1) {
    var b = n[h], S = Ys(b, 0, 1), R = Ys(b, -1);
    if ((S === '"' || S === "'" || S === "`" || R === '"' || R === "'" || R === "`") && S !== R)
      throw new ti("property names with quotes must have matching quotes");
    if ((b === "constructor" || !p) && (u = !0), i += "." + b, o = "%" + i + "%", Qs(ln, o))
      a = ln[o];
    else if (a != null) {
      if (!(b in a)) {
        if (!r)
          throw new Zn("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (cn && h + 1 >= n.length) {
        var L = cn(a, b);
        p = !!L, p && "get" in L && !("originalValue" in L.get) ? a = L.get : a = a[b];
      } else
        p = Qs(a, b), a = a[b];
      p && !u && (ln[o] = a);
    }
  }
  return a;
}, Zh = { exports: {} }, cv = mn, vu = cv("%Object.defineProperty%", !0), yu = function() {
  if (vu)
    try {
      return vu({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
yu.hasArrayLengthDefineBug = function() {
  if (!yu())
    return null;
  try {
    return vu([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var Qh = yu, lv = mn, Hs = lv("%Object.getOwnPropertyDescriptor%", !0);
if (Hs)
  try {
    Hs([], "length");
  } catch {
    Hs = null;
  }
var Yh = Hs, fv = Qh(), Qu = mn, Di = fv && Qu("%Object.defineProperty%", !0);
if (Di)
  try {
    Di({}, "a", { value: 1 });
  } catch {
    Di = !1;
  }
var hv = Qu("%SyntaxError%"), Bn = Qu("%TypeError%"), gl = Yh, dv = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Bn("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Bn("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Bn("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Bn("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Bn("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Bn("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, s = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, u = !!gl && gl(e, r);
  if (Di)
    Di(e, r, {
      configurable: o === null && u ? u.configurable : !o,
      enumerable: i === null && u ? u.enumerable : !i,
      value: n,
      writable: s === null && u ? u.writable : !s
    });
  else if (a || !i && !s && !o)
    e[r] = n;
  else
    throw new hv("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Kh = mn, bl = dv, pv = Qh(), vl = Yh, yl = Kh("%TypeError%"), gv = Kh("%Math.floor%"), bv = function(e, r) {
  if (typeof e != "function")
    throw new yl("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || gv(r) !== r)
    throw new yl("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, s = !0;
  if ("length" in e && vl) {
    var o = vl(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (s = !1);
  }
  return (i || s || !n) && (pv ? bl(e, "length", r, !0, !0) : bl(e, "length", r)), e;
};
(function(t) {
  var e = Zu, r = mn, n = bv, i = r("%TypeError%"), s = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || e.call(o, s), u = r("%Object.defineProperty%", !0), l = r("%Math.max%");
  if (u)
    try {
      u({}, "a", { value: 1 });
    } catch {
      u = null;
    }
  t.exports = function(b) {
    if (typeof b != "function")
      throw new i("a function is required");
    var S = a(e, o, arguments);
    return n(
      S,
      1 + l(0, b.length - (arguments.length - 1)),
      !0
    );
  };
  var h = function() {
    return a(e, s, arguments);
  };
  u ? u(t.exports, "apply", { value: h }) : t.exports.apply = h;
})(Zh);
var vv = Zh.exports, Xh = mn, ed = vv, yv = ed(Xh("String.prototype.indexOf")), mv = function(e, r) {
  var n = Xh(e, !!r);
  return typeof n == "function" && yv(e, ".prototype.") > -1 ? ed(n) : n;
}, Yu = typeof Map == "function" && Map.prototype, Ca = Object.getOwnPropertyDescriptor && Yu ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, Ks = Yu && Ca && typeof Ca.get == "function" ? Ca.get : null, ml = Yu && Map.prototype.forEach, Ku = typeof Set == "function" && Set.prototype, Ra = Object.getOwnPropertyDescriptor && Ku ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, Xs = Ku && Ra && typeof Ra.get == "function" ? Ra.get : null, _l = Ku && Set.prototype.forEach, _v = typeof WeakMap == "function" && WeakMap.prototype, Bi = _v ? WeakMap.prototype.has : null, wv = typeof WeakSet == "function" && WeakSet.prototype, ji = wv ? WeakSet.prototype.has : null, Sv = typeof WeakRef == "function" && WeakRef.prototype, wl = Sv ? WeakRef.prototype.deref : null, Ev = Boolean.prototype.valueOf, xv = Object.prototype.toString, Mv = Function.prototype.toString, Cv = String.prototype.match, Xu = String.prototype.slice, Ir = String.prototype.replace, Rv = String.prototype.toUpperCase, Sl = String.prototype.toLowerCase, td = RegExp.prototype.test, El = Array.prototype.concat, nr = Array.prototype.join, Iv = Array.prototype.slice, xl = Math.floor, mu = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, Ia = Object.getOwnPropertySymbols, _u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, ri = typeof Symbol == "function" && typeof Symbol.iterator == "object", yt = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === ri || !0) ? Symbol.toStringTag : null, rd = Object.prototype.propertyIsEnumerable, Ml = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function Cl(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || td.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -xl(-t) : xl(t);
    if (n !== t) {
      var i = String(n), s = Xu.call(e, i.length + 1);
      return Ir.call(i, r, "$&_") + "." + Ir.call(Ir.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return Ir.call(e, r, "$&_");
}
var wu = fo, Rl = wu.custom, Il = id(Rl) ? Rl : null, Av = function t(e, r, n, i) {
  var s = r || {};
  if (Mr(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Mr(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = Mr(s, "customInspect") ? s.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Mr(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Mr(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return od(e, s);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var u = String(e);
    return a ? Cl(e, u) : u;
  }
  if (typeof e == "bigint") {
    var l = String(e) + "n";
    return a ? Cl(e, l) : l;
  }
  var h = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= h && h > 0 && typeof e == "object")
    return Su(e) ? "[Array]" : "[Object]";
  var p = Gv(s, n);
  if (typeof i > "u")
    i = [];
  else if (sd(i, e) >= 0)
    return "[Circular]";
  function b(v, c, d) {
    if (c && (i = Iv.call(i), i.push(c)), d) {
      var g = {
        depth: s.depth
      };
      return Mr(s, "quoteStyle") && (g.quoteStyle = s.quoteStyle), t(v, g, n + 1, i);
    }
    return t(v, s, n + 1, i);
  }
  if (typeof e == "function" && !Al(e)) {
    var S = Bv(e), R = Cs(e, b);
    return "[Function" + (S ? ": " + S : " (anonymous)") + "]" + (R.length > 0 ? " { " + nr.call(R, ", ") + " }" : "");
  }
  if (id(e)) {
    var L = ri ? Ir.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : _u.call(e);
    return typeof e == "object" && !ri ? Ti(L) : L;
  }
  if (Uv(e)) {
    for (var O = "<" + Sl.call(String(e.nodeName)), w = e.attributes || [], I = 0; I < w.length; I++)
      O += " " + w[I].name + "=" + nd(kv(w[I].value), "double", s);
    return O += ">", e.childNodes && e.childNodes.length && (O += "..."), O += "</" + Sl.call(String(e.nodeName)) + ">", O;
  }
  if (Su(e)) {
    if (e.length === 0)
      return "[]";
    var N = Cs(e, b);
    return p && !qv(N) ? "[" + Eu(N, p) + "]" : "[ " + nr.call(N, ", ") + " ]";
  }
  if (Ov(e)) {
    var $ = Cs(e, b);
    return !("cause" in Error.prototype) && "cause" in e && !rd.call(e, "cause") ? "{ [" + String(e) + "] " + nr.call(El.call("[cause]: " + b(e.cause), $), ", ") + " }" : $.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + nr.call($, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (Il && typeof e[Il] == "function" && wu)
      return wu(e, { depth: h - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (jv(e)) {
    var P = [];
    return ml && ml.call(e, function(v, c) {
      P.push(b(c, e, !0) + " => " + b(v, e));
    }), kl("Map", Ks.call(e), P, p);
  }
  if (Hv(e)) {
    var B = [];
    return _l && _l.call(e, function(v) {
      B.push(b(v, e));
    }), kl("Set", Xs.call(e), B, p);
  }
  if (Fv(e))
    return Aa("WeakMap");
  if (Vv(e))
    return Aa("WeakSet");
  if (Wv(e))
    return Aa("WeakRef");
  if (Lv(e))
    return Ti(b(Number(e)));
  if ($v(e))
    return Ti(b(mu.call(e)));
  if (Pv(e))
    return Ti(Ev.call(e));
  if (Nv(e))
    return Ti(b(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === J)
    return "{ [object globalThis] }";
  if (!Tv(e) && !Al(e)) {
    var q = Cs(e, b), z = Ml ? Ml(e) === Object.prototype : e instanceof Object || e.constructor === Object, F = e instanceof Object ? "" : "null prototype", Z = !z && yt && Object(e) === e && yt in e ? Xu.call($r(e), 8, -1) : F ? "Object" : "", K = z || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", X = K + (Z || F ? "[" + nr.call(El.call([], Z || [], F || []), ": ") + "] " : "");
    return q.length === 0 ? X + "{}" : p ? X + "{" + Eu(q, p) + "}" : X + "{ " + nr.call(q, ", ") + " }";
  }
  return String(e);
};
function nd(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function kv(t) {
  return Ir.call(String(t), /"/g, "&quot;");
}
function Su(t) {
  return $r(t) === "[object Array]" && (!yt || !(typeof t == "object" && yt in t));
}
function Tv(t) {
  return $r(t) === "[object Date]" && (!yt || !(typeof t == "object" && yt in t));
}
function Al(t) {
  return $r(t) === "[object RegExp]" && (!yt || !(typeof t == "object" && yt in t));
}
function Ov(t) {
  return $r(t) === "[object Error]" && (!yt || !(typeof t == "object" && yt in t));
}
function Nv(t) {
  return $r(t) === "[object String]" && (!yt || !(typeof t == "object" && yt in t));
}
function Lv(t) {
  return $r(t) === "[object Number]" && (!yt || !(typeof t == "object" && yt in t));
}
function Pv(t) {
  return $r(t) === "[object Boolean]" && (!yt || !(typeof t == "object" && yt in t));
}
function id(t) {
  if (ri)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !_u)
    return !1;
  try {
    return _u.call(t), !0;
  } catch {
  }
  return !1;
}
function $v(t) {
  if (!t || typeof t != "object" || !mu)
    return !1;
  try {
    return mu.call(t), !0;
  } catch {
  }
  return !1;
}
var Dv = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function Mr(t, e) {
  return Dv.call(t, e);
}
function $r(t) {
  return xv.call(t);
}
function Bv(t) {
  if (t.name)
    return t.name;
  var e = Cv.call(Mv.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function sd(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function jv(t) {
  if (!Ks || !t || typeof t != "object")
    return !1;
  try {
    Ks.call(t);
    try {
      Xs.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function Fv(t) {
  if (!Bi || !t || typeof t != "object")
    return !1;
  try {
    Bi.call(t, Bi);
    try {
      ji.call(t, ji);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function Wv(t) {
  if (!wl || !t || typeof t != "object")
    return !1;
  try {
    return wl.call(t), !0;
  } catch {
  }
  return !1;
}
function Hv(t) {
  if (!Xs || !t || typeof t != "object")
    return !1;
  try {
    Xs.call(t);
    try {
      Ks.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function Vv(t) {
  if (!ji || !t || typeof t != "object")
    return !1;
  try {
    ji.call(t, ji);
    try {
      Bi.call(t, Bi);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function Uv(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function od(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return od(Xu.call(t, 0, e.maxStringLength), e) + n;
  }
  var i = Ir.call(Ir.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, zv);
  return nd(i, "single", e);
}
function zv(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + Rv.call(e.toString(16));
}
function Ti(t) {
  return "Object(" + t + ")";
}
function Aa(t) {
  return t + " { ? }";
}
function kl(t, e, r, n) {
  var i = n ? Eu(r, n) : nr.call(r, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function qv(t) {
  for (var e = 0; e < t.length; e++)
    if (sd(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function Gv(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = nr.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: nr.call(Array(e + 1), r)
  };
}
function Eu(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + nr.call(t, "," + r) + `
` + e.prev;
}
function Cs(t, e) {
  var r = Su(t), n = [];
  if (r) {
    n.length = t.length;
    for (var i = 0; i < t.length; i++)
      n[i] = Mr(t, i) ? e(t[i], t) : "";
  }
  var s = typeof Ia == "function" ? Ia(t) : [], o;
  if (ri) {
    o = {};
    for (var a = 0; a < s.length; a++)
      o["$" + s[a]] = s[a];
  }
  for (var u in t)
    Mr(t, u) && (r && String(Number(u)) === u && u < t.length || ri && o["$" + u] instanceof Symbol || (td.call(/[^\w$]/, u) ? n.push(e(u, t) + ": " + e(t[u], t)) : n.push(u + ": " + e(t[u], t))));
  if (typeof Ia == "function")
    for (var l = 0; l < s.length; l++)
      rd.call(t, s[l]) && n.push("[" + e(s[l]) + "]: " + e(t[s[l]], t));
  return n;
}
var ec = mn, wi = mv, Jv = Av, Zv = ec("%TypeError%"), Rs = ec("%WeakMap%", !0), Is = ec("%Map%", !0), Qv = wi("WeakMap.prototype.get", !0), Yv = wi("WeakMap.prototype.set", !0), Kv = wi("WeakMap.prototype.has", !0), Xv = wi("Map.prototype.get", !0), ey = wi("Map.prototype.set", !0), ty = wi("Map.prototype.has", !0), tc = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, ry = function(t, e) {
  var r = tc(t, e);
  return r && r.value;
}, ny = function(t, e, r) {
  var n = tc(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, iy = function(t, e) {
  return !!tc(t, e);
}, sy = function() {
  var e, r, n, i = {
    assert: function(s) {
      if (!i.has(s))
        throw new Zv("Side channel does not contain " + Jv(s));
    },
    get: function(s) {
      if (Rs && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return Qv(e, s);
      } else if (Is) {
        if (r)
          return Xv(r, s);
      } else if (n)
        return ry(n, s);
    },
    has: function(s) {
      if (Rs && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return Kv(e, s);
      } else if (Is) {
        if (r)
          return ty(r, s);
      } else if (n)
        return iy(n, s);
      return !1;
    },
    set: function(s, o) {
      Rs && s && (typeof s == "object" || typeof s == "function") ? (e || (e = new Rs()), Yv(e, s, o)) : Is ? (r || (r = new Is()), ey(r, s, o)) : (n || (n = { key: {}, next: null }), ny(n, s, o));
    }
  };
  return i;
}, oy = String.prototype.replace, ay = /%20/g, ka = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, rc = {
  default: ka.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return oy.call(t, ay, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: ka.RFC1738,
  RFC3986: ka.RFC3986
}, uy = rc, Ta = Object.prototype.hasOwnProperty, en = Array.isArray, Yt = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), cy = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (en(n)) {
      for (var i = [], s = 0; s < n.length; ++s)
        typeof n[s] < "u" && i.push(n[s]);
      r.obj[r.prop] = i;
    }
  }
}, ad = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (n[i] = e[i]);
  return n;
}, ly = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (en(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !Ta.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var i = e;
  return en(e) && !en(r) && (i = ad(e, n)), en(e) && en(r) ? (r.forEach(function(s, o) {
    if (Ta.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && s && typeof s == "object" ? e[o] = t(a, s, n) : e.push(s);
    } else
      e[o] = s;
  }), e) : Object.keys(r).reduce(function(s, o) {
    var a = r[o];
    return Ta.call(s, o) ? s[o] = t(s[o], a, n) : s[o] = a, s;
  }, i);
}, fy = function(e, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, e);
}, hy = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, dy = function(e, r, n, i, s) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(h) {
      return "%26%23" + parseInt(h.slice(2), 16) + "%3B";
    });
  for (var a = "", u = 0; u < o.length; ++u) {
    var l = o.charCodeAt(u);
    if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || s === uy.RFC1738 && (l === 40 || l === 41)) {
      a += o.charAt(u);
      continue;
    }
    if (l < 128) {
      a = a + Yt[l];
      continue;
    }
    if (l < 2048) {
      a = a + (Yt[192 | l >> 6] + Yt[128 | l & 63]);
      continue;
    }
    if (l < 55296 || l >= 57344) {
      a = a + (Yt[224 | l >> 12] + Yt[128 | l >> 6 & 63] + Yt[128 | l & 63]);
      continue;
    }
    u += 1, l = 65536 + ((l & 1023) << 10 | o.charCodeAt(u) & 1023), a += Yt[240 | l >> 18] + Yt[128 | l >> 12 & 63] + Yt[128 | l >> 6 & 63] + Yt[128 | l & 63];
  }
  return a;
}, py = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var s = r[i], o = s.obj[s.prop], a = Object.keys(o), u = 0; u < a.length; ++u) {
      var l = a[u], h = o[l];
      typeof h == "object" && h !== null && n.indexOf(h) === -1 && (r.push({ obj: o, prop: l }), n.push(h));
    }
  return cy(r), e;
}, gy = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, by = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, vy = function(e, r) {
  return [].concat(e, r);
}, yy = function(e, r) {
  if (en(e)) {
    for (var n = [], i = 0; i < e.length; i += 1)
      n.push(r(e[i]));
    return n;
  }
  return r(e);
}, ud = {
  arrayToObject: ad,
  assign: fy,
  combine: vy,
  compact: py,
  decode: hy,
  encode: dy,
  isBuffer: by,
  isRegExp: gy,
  maybeMap: yy,
  merge: ly
}, cd = sy, Vs = ud, Fi = rc, my = Object.prototype.hasOwnProperty, Tl = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, dr = Array.isArray, _y = Array.prototype.push, ld = function(t, e) {
  _y.apply(t, dr(e) ? e : [e]);
}, wy = Date.prototype.toISOString, Ol = Fi.default, vt = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Vs.encode,
  encodeValuesOnly: !1,
  format: Ol,
  formatter: Fi.formatters[Ol],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return wy.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Sy = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, Oa = {}, Ey = function t(e, r, n, i, s, o, a, u, l, h, p, b, S, R, L, O) {
  for (var w = e, I = O, N = 0, $ = !1; (I = I.get(Oa)) !== void 0 && !$; ) {
    var P = I.get(e);
    if (N += 1, typeof P < "u") {
      if (P === N)
        throw new RangeError("Cyclic object value");
      $ = !0;
    }
    typeof I.get(Oa) > "u" && (N = 0);
  }
  if (typeof u == "function" ? w = u(r, w) : w instanceof Date ? w = p(w) : n === "comma" && dr(w) && (w = Vs.maybeMap(w, function(g) {
    return g instanceof Date ? p(g) : g;
  })), w === null) {
    if (s)
      return a && !R ? a(r, vt.encoder, L, "key", b) : r;
    w = "";
  }
  if (Sy(w) || Vs.isBuffer(w)) {
    if (a) {
      var B = R ? r : a(r, vt.encoder, L, "key", b);
      return [S(B) + "=" + S(a(w, vt.encoder, L, "value", b))];
    }
    return [S(r) + "=" + S(String(w))];
  }
  var q = [];
  if (typeof w > "u")
    return q;
  var z;
  if (n === "comma" && dr(w))
    R && a && (w = Vs.maybeMap(w, a)), z = [{ value: w.length > 0 ? w.join(",") || null : void 0 }];
  else if (dr(u))
    z = u;
  else {
    var F = Object.keys(w);
    z = l ? F.sort(l) : F;
  }
  for (var Z = i && dr(w) && w.length === 1 ? r + "[]" : r, K = 0; K < z.length; ++K) {
    var X = z[K], v = typeof X == "object" && typeof X.value < "u" ? X.value : w[X];
    if (!(o && v === null)) {
      var c = dr(w) ? typeof n == "function" ? n(Z, X) : Z : Z + (h ? "." + X : "[" + X + "]");
      O.set(e, N);
      var d = cd();
      d.set(Oa, O), ld(q, t(
        v,
        c,
        n,
        i,
        s,
        o,
        n === "comma" && R && dr(w) ? null : a,
        u,
        l,
        h,
        p,
        b,
        S,
        R,
        L,
        d
      ));
    }
  }
  return q;
}, xy = function(e) {
  if (!e)
    return vt;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || vt.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = Fi.default;
  if (typeof e.format < "u") {
    if (!my.call(Fi.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = Fi.formatters[n], s = vt.filter;
  return (typeof e.filter == "function" || dr(e.filter)) && (s = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : vt.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? vt.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : vt.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? vt.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : vt.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : vt.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : vt.encodeValuesOnly,
    filter: s,
    format: n,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : vt.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : vt.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : vt.strictNullHandling
  };
}, My = function(t, e) {
  var r = t, n = xy(e), i, s;
  typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : dr(n.filter) && (s = n.filter, i = s);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var a;
  e && e.arrayFormat in Tl ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var u = Tl[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var l = u === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var h = cd(), p = 0; p < i.length; ++p) {
    var b = i[p];
    n.skipNulls && r[b] === null || ld(o, Ey(
      r[b],
      b,
      u,
      l,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      h
    ));
  }
  var S = o.join(n.delimiter), R = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? R += "utf8=%26%2310003%3B&" : R += "utf8=%E2%9C%93&"), S.length > 0 ? R + S : "";
}, ni = ud, xu = Object.prototype.hasOwnProperty, Cy = Array.isArray, at = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: ni.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, Ry = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, fd = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Iy = "utf8=%26%2310003%3B", Ay = "utf8=%E2%9C%93", ky = function(e, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, s), a = -1, u, l = r.charset;
  if (r.charsetSentinel)
    for (u = 0; u < o.length; ++u)
      o[u].indexOf("utf8=") === 0 && (o[u] === Ay ? l = "utf-8" : o[u] === Iy && (l = "iso-8859-1"), a = u, u = o.length);
  for (u = 0; u < o.length; ++u)
    if (u !== a) {
      var h = o[u], p = h.indexOf("]="), b = p === -1 ? h.indexOf("=") : p + 1, S, R;
      b === -1 ? (S = r.decoder(h, at.decoder, l, "key"), R = r.strictNullHandling ? null : "") : (S = r.decoder(h.slice(0, b), at.decoder, l, "key"), R = ni.maybeMap(
        fd(h.slice(b + 1), r),
        function(L) {
          return r.decoder(L, at.decoder, l, "value");
        }
      )), R && r.interpretNumericEntities && l === "iso-8859-1" && (R = Ry(R)), h.indexOf("[]=") > -1 && (R = Cy(R) ? [R] : R), xu.call(n, S) ? n[S] = ni.combine(n[S], R) : n[S] = R;
    }
  return n;
}, Ty = function(t, e, r, n) {
  for (var i = n ? e : fd(e, r), s = t.length - 1; s >= 0; --s) {
    var o, a = t[s];
    if (a === "[]" && r.parseArrays)
      o = [].concat(i);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var u = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, l = parseInt(u, 10);
      !r.parseArrays && u === "" ? o = { 0: i } : !isNaN(l) && a !== u && String(l) === u && l >= 0 && r.parseArrays && l <= r.arrayLimit ? (o = [], o[l] = i) : u !== "__proto__" && (o[u] = i);
    }
    i = o;
  }
  return i;
}, Oy = function(e, r, n, i) {
  if (e) {
    var s = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, u = n.depth > 0 && o.exec(s), l = u ? s.slice(0, u.index) : s, h = [];
    if (l) {
      if (!n.plainObjects && xu.call(Object.prototype, l) && !n.allowPrototypes)
        return;
      h.push(l);
    }
    for (var p = 0; n.depth > 0 && (u = a.exec(s)) !== null && p < n.depth; ) {
      if (p += 1, !n.plainObjects && xu.call(Object.prototype, u[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      h.push(u[1]);
    }
    return u && h.push("[" + s.slice(u.index) + "]"), Ty(h, r, n, i);
  }
}, Ny = function(e) {
  if (!e)
    return at;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? at.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? at.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : at.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : at.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : at.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : at.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : at.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : at.decoder,
    delimiter: typeof e.delimiter == "string" || ni.isRegExp(e.delimiter) ? e.delimiter : at.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : at.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : at.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : at.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : at.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : at.strictNullHandling
  };
}, Ly = function(t, e) {
  var r = Ny(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? ky(t, r) : t, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = Object.keys(n), o = 0; o < s.length; ++o) {
    var a = s[o], u = Oy(a, n[a], r, typeof t == "string");
    i = ni.merge(i, u, r);
  }
  return r.allowSparse === !0 ? i : ni.compact(i);
}, Py = My, $y = Ly, Dy = rc, By = {
  formats: Dy,
  parse: $y,
  stringify: Py
}, os = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ProviderType = t.RegExpString = t.IntNumber = t.BigIntString = t.AddressString = t.HexString = t.OpaqueType = void 0;
  function e() {
    return (n) => n;
  }
  t.OpaqueType = e, t.HexString = e(), t.AddressString = e(), t.BigIntString = e();
  function r(n) {
    return Math.floor(n);
  }
  t.IntNumber = r, t.RegExpString = e(), function(n) {
    n.CoinbaseWallet = "CoinbaseWallet", n.MetaMask = "MetaMask", n.Unselected = "";
  }(t.ProviderType || (t.ProviderType = {}));
})(os);
var jy = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Q, "__esModule", { value: !0 });
Q.isInIFrame = Q.createQrUrl = Q.getFavicon = Q.range = Q.isBigNumber = Q.ensureParsedJSONObject = Q.ensureBN = Q.ensureRegExpString = Q.ensureIntNumber = Q.ensureBuffer = Q.ensureAddressString = Q.ensureEvenLengthHexString = Q.ensureHexString = Q.isHexString = Q.prepend0x = Q.strip0x = Q.has0xPrefix = Q.hexStringFromIntNumber = Q.intNumberFromHexString = Q.bigIntStringFromBN = Q.hexStringFromBuffer = Q.hexStringToUint8Array = Q.uint8ArrayToHex = Q.randomBytesHex = void 0;
const Cr = jy(vo), Fy = By, _n = es, Dt = os, hd = /^[0-9]*$/, dd = /^[a-f0-9]*$/;
function Wy(t) {
  return pd(crypto.getRandomValues(new Uint8Array(t)));
}
Q.randomBytesHex = Wy;
function pd(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
Q.uint8ArrayToHex = pd;
function Hy(t) {
  return new Uint8Array(t.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
Q.hexStringToUint8Array = Hy;
function Vy(t, e = !1) {
  const r = t.toString("hex");
  return (0, Dt.HexString)(e ? "0x" + r : r);
}
Q.hexStringFromBuffer = Vy;
function Uy(t) {
  return (0, Dt.BigIntString)(t.toString(10));
}
Q.bigIntStringFromBN = Uy;
function zy(t) {
  return (0, Dt.IntNumber)(new Cr.default(us(t, !1), 16).toNumber());
}
Q.intNumberFromHexString = zy;
function qy(t) {
  return (0, Dt.HexString)("0x" + new Cr.default(t).toString(16));
}
Q.hexStringFromIntNumber = qy;
function nc(t) {
  return t.startsWith("0x") || t.startsWith("0X");
}
Q.has0xPrefix = nc;
function Eo(t) {
  return nc(t) ? t.slice(2) : t;
}
Q.strip0x = Eo;
function gd(t) {
  return nc(t) ? "0x" + t.slice(2) : "0x" + t;
}
Q.prepend0x = gd;
function as(t) {
  if (typeof t != "string")
    return !1;
  const e = Eo(t).toLowerCase();
  return dd.test(e);
}
Q.isHexString = as;
function bd(t, e = !1) {
  if (typeof t == "string") {
    const r = Eo(t).toLowerCase();
    if (dd.test(r))
      return (0, Dt.HexString)(e ? "0x" + r : r);
  }
  throw _n.standardErrors.rpc.invalidParams(`"${String(t)}" is not a hexadecimal string`);
}
Q.ensureHexString = bd;
function us(t, e = !1) {
  let r = bd(t, !1);
  return r.length % 2 === 1 && (r = (0, Dt.HexString)("0" + r)), e ? (0, Dt.HexString)("0x" + r) : r;
}
Q.ensureEvenLengthHexString = us;
function Gy(t) {
  if (typeof t == "string") {
    const e = Eo(t).toLowerCase();
    if (as(e) && e.length === 40)
      return (0, Dt.AddressString)(gd(e));
  }
  throw _n.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(t)}`);
}
Q.ensureAddressString = Gy;
function Jy(t) {
  if (Buffer.isBuffer(t))
    return t;
  if (typeof t == "string")
    if (as(t)) {
      const e = us(t, !1);
      return Buffer.from(e, "hex");
    } else
      return Buffer.from(t, "utf8");
  throw _n.standardErrors.rpc.invalidParams(`Not binary data: ${String(t)}`);
}
Q.ensureBuffer = Jy;
function vd(t) {
  if (typeof t == "number" && Number.isInteger(t))
    return (0, Dt.IntNumber)(t);
  if (typeof t == "string") {
    if (hd.test(t))
      return (0, Dt.IntNumber)(Number(t));
    if (as(t))
      return (0, Dt.IntNumber)(new Cr.default(us(t, !1), 16).toNumber());
  }
  throw _n.standardErrors.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
Q.ensureIntNumber = vd;
function Zy(t) {
  if (t instanceof RegExp)
    return (0, Dt.RegExpString)(t.toString());
  throw _n.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(t)}`);
}
Q.ensureRegExpString = Zy;
function Qy(t) {
  if (t !== null && (Cr.default.isBN(t) || yd(t)))
    return new Cr.default(t.toString(10), 10);
  if (typeof t == "number")
    return new Cr.default(vd(t));
  if (typeof t == "string") {
    if (hd.test(t))
      return new Cr.default(t, 10);
    if (as(t))
      return new Cr.default(us(t, !1), 16);
  }
  throw _n.standardErrors.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
Q.ensureBN = Qy;
function Yy(t) {
  if (typeof t == "string")
    return JSON.parse(t);
  if (typeof t == "object")
    return t;
  throw _n.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(t)}`);
}
Q.ensureParsedJSONObject = Yy;
function yd(t) {
  if (t == null || typeof t.constructor != "function")
    return !1;
  const { constructor: e } = t;
  return typeof e.config == "function" && typeof e.EUCLID == "number";
}
Q.isBigNumber = yd;
function Ky(t, e) {
  return Array.from({ length: e - t }, (r, n) => t + n);
}
Q.range = Ky;
function Xy() {
  const t = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'), { protocol: e, host: r } = document.location, n = t ? t.getAttribute("href") : null;
  return !n || n.startsWith("javascript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? e + n : `${e}//${r}${n}`;
}
Q.getFavicon = Xy;
function em(t, e, r, n, i, s) {
  const o = n ? "parent-id" : "id", a = (0, Fy.stringify)({
    [o]: t,
    secret: e,
    server: r,
    v: i,
    chainId: s
  });
  return `${r}/#/link?${a}`;
}
Q.createQrUrl = em;
function tm() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
Q.isInIFrame = tm;
Object.defineProperty(mi, "__esModule", { value: !0 });
mi.Session = void 0;
const Nl = Nb, Ll = Q, Pl = "session:id", $l = "session:secret", Dl = "session:linked";
class ic {
  constructor(e, r, n, i) {
    this._storage = e, this._id = r || (0, Ll.randomBytesHex)(16), this._secret = n || (0, Ll.randomBytesHex)(32), this._key = new Nl.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!i;
  }
  static load(e) {
    const r = e.getItem(Pl), n = e.getItem(Dl), i = e.getItem($l);
    return r && i ? new ic(e, r, i, n === "1") : null;
  }
  /**
   * Takes in a session ID and returns the sha256 hash of it.
   * @param sessionId session ID
   */
  static hash(e) {
    return new Nl.sha256().update(e).digest("hex");
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(e) {
    this._linked = e, this.persistLinked();
  }
  save() {
    return this._storage.setItem(Pl, this._id), this._storage.setItem($l, this._secret), this.persistLinked(), this;
  }
  persistLinked() {
    this._storage.setItem(Dl, this._linked ? "1" : "0");
  }
}
mi.Session = ic;
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.WalletSDKRelayAbstract = qt.APP_VERSION_KEY = qt.LOCAL_STORAGE_ADDRESSES_KEY = qt.WALLET_USER_NAME_KEY = void 0;
const Bl = es;
qt.WALLET_USER_NAME_KEY = "walletUsername";
qt.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
qt.APP_VERSION_KEY = "AppVersion";
class rm {
  async makeEthereumJSONRPCRequest(e, r) {
    if (!r)
      throw new Error("Error: No jsonRpcUrl provided");
    return window.fetch(r, {
      method: "POST",
      body: JSON.stringify(e),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    }).then((n) => n.json()).then((n) => {
      if (!n)
        throw Bl.standardErrors.rpc.parse({});
      const i = n, { error: s } = i;
      if (s)
        throw (0, Bl.serializeError)(s, e.method);
      return i;
    });
  }
}
qt.WalletSDKRelayAbstract = rm;
var md = {};
const jl = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
md.p1600 = function(t) {
  for (let e = 0; e < 24; ++e) {
    const r = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], n = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], i = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], o = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], a = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], u = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], l = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], h = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49];
    let b = h ^ (i << 1 | s >>> 31), S = p ^ (s << 1 | i >>> 31);
    const R = t[0] ^ b, L = t[1] ^ S, O = t[10] ^ b, w = t[11] ^ S, I = t[20] ^ b, N = t[21] ^ S, $ = t[30] ^ b, P = t[31] ^ S, B = t[40] ^ b, q = t[41] ^ S;
    b = r ^ (o << 1 | a >>> 31), S = n ^ (a << 1 | o >>> 31);
    const z = t[2] ^ b, F = t[3] ^ S, Z = t[12] ^ b, K = t[13] ^ S, X = t[22] ^ b, v = t[23] ^ S, c = t[32] ^ b, d = t[33] ^ S, g = t[42] ^ b, y = t[43] ^ S;
    b = i ^ (u << 1 | l >>> 31), S = s ^ (l << 1 | u >>> 31);
    const _ = t[4] ^ b, C = t[5] ^ S, k = t[14] ^ b, m = t[15] ^ S, f = t[24] ^ b, M = t[25] ^ S, U = t[34] ^ b, G = t[35] ^ S, A = t[44] ^ b, T = t[45] ^ S;
    b = o ^ (h << 1 | p >>> 31), S = a ^ (p << 1 | h >>> 31);
    const D = t[6] ^ b, V = t[7] ^ S, oe = t[16] ^ b, E = t[17] ^ S, x = t[26] ^ b, W = t[27] ^ S, H = t[36] ^ b, re = t[37] ^ S, se = t[46] ^ b, ee = t[47] ^ S;
    b = u ^ (r << 1 | n >>> 31), S = l ^ (n << 1 | r >>> 31);
    const pe = t[8] ^ b, Qt = t[9] ^ S, Se = t[18] ^ b, xe = t[19] ^ S, wr = t[28] ^ b, ye = t[29] ^ S, me = t[38] ^ b, lr = t[39] ^ S, ve = t[48] ^ b, ge = t[49] ^ S, Ct = R, Me = L, Ce = w << 4 | O >>> 28, Cn = O << 4 | w >>> 28, Re = I << 3 | N >>> 29, Ie = N << 3 | I >>> 29, Rn = P << 9 | $ >>> 23, Ae = $ << 9 | P >>> 23, ke = B << 18 | q >>> 14, In = q << 18 | B >>> 14, Te = z << 1 | F >>> 31, Oe = F << 1 | z >>> 31, An = K << 12 | Z >>> 20, Ne = Z << 12 | K >>> 20, Le = X << 10 | v >>> 22, kn = v << 10 | X >>> 22, Pe = d << 13 | c >>> 19, $e = c << 13 | d >>> 19, Tn = g << 2 | y >>> 30, De = y << 2 | g >>> 30, Be = C << 30 | _ >>> 2, On = _ << 30 | C >>> 2, je = k << 6 | m >>> 26, Fe = m << 6 | k >>> 26, Nn = M << 11 | f >>> 21, We = f << 11 | M >>> 21, He = U << 15 | G >>> 17, Ln = G << 15 | U >>> 17, Ve = T << 29 | A >>> 3, Ue = A << 29 | T >>> 3, Pn = D << 28 | V >>> 4, ze = V << 28 | D >>> 4, qe = E << 23 | oe >>> 9, $n = oe << 23 | E >>> 9, Ge = x << 25 | W >>> 7, Je = W << 25 | x >>> 7, Dr = H << 21 | re >>> 11, Br = re << 21 | H >>> 11, jr = ee << 24 | se >>> 8, Fr = se << 24 | ee >>> 8, Wr = pe << 27 | Qt >>> 5, Hr = Qt << 27 | pe >>> 5, Vr = Se << 20 | xe >>> 12, Ur = xe << 20 | Se >>> 12, zr = ye << 7 | wr >>> 25, qr = wr << 7 | ye >>> 25, Gr = me << 8 | lr >>> 24, Jr = lr << 8 | me >>> 24, Zr = ve << 14 | ge >>> 18, Qr = ge << 14 | ve >>> 18;
    t[0] = Ct ^ ~An & Nn, t[1] = Me ^ ~Ne & We, t[10] = Pn ^ ~Vr & Re, t[11] = ze ^ ~Ur & Ie, t[20] = Te ^ ~je & Ge, t[21] = Oe ^ ~Fe & Je, t[30] = Wr ^ ~Ce & Le, t[31] = Hr ^ ~Cn & kn, t[40] = Be ^ ~qe & zr, t[41] = On ^ ~$n & qr, t[2] = An ^ ~Nn & Dr, t[3] = Ne ^ ~We & Br, t[12] = Vr ^ ~Re & Pe, t[13] = Ur ^ ~Ie & $e, t[22] = je ^ ~Ge & Gr, t[23] = Fe ^ ~Je & Jr, t[32] = Ce ^ ~Le & He, t[33] = Cn ^ ~kn & Ln, t[42] = qe ^ ~zr & Rn, t[43] = $n ^ ~qr & Ae, t[4] = Nn ^ ~Dr & Zr, t[5] = We ^ ~Br & Qr, t[14] = Re ^ ~Pe & Ve, t[15] = Ie ^ ~$e & Ue, t[24] = Ge ^ ~Gr & ke, t[25] = Je ^ ~Jr & In, t[34] = Le ^ ~He & jr, t[35] = kn ^ ~Ln & Fr, t[44] = zr ^ ~Rn & Tn, t[45] = qr ^ ~Ae & De, t[6] = Dr ^ ~Zr & Ct, t[7] = Br ^ ~Qr & Me, t[16] = Pe ^ ~Ve & Pn, t[17] = $e ^ ~Ue & ze, t[26] = Gr ^ ~ke & Te, t[27] = Jr ^ ~In & Oe, t[36] = He ^ ~jr & Wr, t[37] = Ln ^ ~Fr & Hr, t[46] = Rn ^ ~Tn & Be, t[47] = Ae ^ ~De & On, t[8] = Zr ^ ~Ct & An, t[9] = Qr ^ ~Me & Ne, t[18] = Ve ^ ~Pn & Vr, t[19] = Ue ^ ~ze & Ur, t[28] = ke ^ ~Te & je, t[29] = In ^ ~Oe & Fe, t[38] = jr ^ ~Wr & Ce, t[39] = Fr ^ ~Hr & Cn, t[48] = Tn ^ ~Be & qe, t[49] = De ^ ~On & $n, t[0] ^= jl[e * 2], t[1] ^= jl[e * 2 + 1];
  }
};
const eo = md;
function Si() {
  this.state = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], this.blockSize = null, this.count = 0, this.squeezing = !1;
}
Si.prototype.initialize = function(t, e) {
  for (let r = 0; r < 50; ++r)
    this.state[r] = 0;
  this.blockSize = t / 8, this.count = 0, this.squeezing = !1;
};
Si.prototype.absorb = function(t) {
  for (let e = 0; e < t.length; ++e)
    this.state[~~(this.count / 4)] ^= t[e] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (eo.p1600(this.state), this.count = 0);
};
Si.prototype.absorbLastFewBits = function(t) {
  this.state[~~(this.count / 4)] ^= t << 8 * (this.count % 4), t & 128 && this.count === this.blockSize - 1 && eo.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), eo.p1600(this.state), this.count = 0, this.squeezing = !0;
};
Si.prototype.squeeze = function(t) {
  this.squeezing || this.absorbLastFewBits(1);
  const e = Buffer.alloc(t);
  for (let r = 0; r < t; ++r)
    e[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (eo.p1600(this.state), this.count = 0);
  return e;
};
Si.prototype.copy = function(t) {
  for (let e = 0; e < 50; ++e)
    t.state[e] = this.state[e];
  t.blockSize = this.blockSize, t.count = this.count, t.squeezing = this.squeezing;
};
var nm = Si, Mu = { exports: {} }, _d = Uu.EventEmitter, Na, Fl;
function im() {
  if (Fl)
    return Na;
  Fl = 1;
  function t(R, L) {
    var O = Object.keys(R);
    if (Object.getOwnPropertySymbols) {
      var w = Object.getOwnPropertySymbols(R);
      L && (w = w.filter(function(I) {
        return Object.getOwnPropertyDescriptor(R, I).enumerable;
      })), O.push.apply(O, w);
    }
    return O;
  }
  function e(R) {
    for (var L = 1; L < arguments.length; L++) {
      var O = arguments[L] != null ? arguments[L] : {};
      L % 2 ? t(Object(O), !0).forEach(function(w) {
        r(R, w, O[w]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(R, Object.getOwnPropertyDescriptors(O)) : t(Object(O)).forEach(function(w) {
        Object.defineProperty(R, w, Object.getOwnPropertyDescriptor(O, w));
      });
    }
    return R;
  }
  function r(R, L, O) {
    return L = o(L), L in R ? Object.defineProperty(R, L, { value: O, enumerable: !0, configurable: !0, writable: !0 }) : R[L] = O, R;
  }
  function n(R, L) {
    if (!(R instanceof L))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(R, L) {
    for (var O = 0; O < L.length; O++) {
      var w = L[O];
      w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(R, o(w.key), w);
    }
  }
  function s(R, L, O) {
    return L && i(R.prototype, L), O && i(R, O), Object.defineProperty(R, "prototype", { writable: !1 }), R;
  }
  function o(R) {
    var L = a(R, "string");
    return typeof L == "symbol" ? L : String(L);
  }
  function a(R, L) {
    if (typeof R != "object" || R === null)
      return R;
    var O = R[Symbol.toPrimitive];
    if (O !== void 0) {
      var w = O.call(R, L || "default");
      if (typeof w != "object")
        return w;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (L === "string" ? String : Number)(R);
  }
  var u = ho, l = u.Buffer, h = fo, p = h.inspect, b = p && p.custom || "inspect";
  function S(R, L, O) {
    l.prototype.copy.call(R, L, O);
  }
  return Na = /* @__PURE__ */ function() {
    function R() {
      n(this, R), this.head = null, this.tail = null, this.length = 0;
    }
    return s(R, [{
      key: "push",
      value: function(O) {
        var w = {
          data: O,
          next: null
        };
        this.length > 0 ? this.tail.next = w : this.head = w, this.tail = w, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(O) {
        var w = {
          data: O,
          next: this.head
        };
        this.length === 0 && (this.tail = w), this.head = w, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var O = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, O;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(O) {
        if (this.length === 0)
          return "";
        for (var w = this.head, I = "" + w.data; w = w.next; )
          I += O + w.data;
        return I;
      }
    }, {
      key: "concat",
      value: function(O) {
        if (this.length === 0)
          return l.alloc(0);
        for (var w = l.allocUnsafe(O >>> 0), I = this.head, N = 0; I; )
          S(I.data, w, N), N += I.data.length, I = I.next;
        return w;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function(O, w) {
        var I;
        return O < this.head.data.length ? (I = this.head.data.slice(0, O), this.head.data = this.head.data.slice(O)) : O === this.head.data.length ? I = this.shift() : I = w ? this._getString(O) : this._getBuffer(O), I;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function(O) {
        var w = this.head, I = 1, N = w.data;
        for (O -= N.length; w = w.next; ) {
          var $ = w.data, P = O > $.length ? $.length : O;
          if (P === $.length ? N += $ : N += $.slice(0, O), O -= P, O === 0) {
            P === $.length ? (++I, w.next ? this.head = w.next : this.head = this.tail = null) : (this.head = w, w.data = $.slice(P));
            break;
          }
          ++I;
        }
        return this.length -= I, N;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function(O) {
        var w = l.allocUnsafe(O), I = this.head, N = 1;
        for (I.data.copy(w), O -= I.data.length; I = I.next; ) {
          var $ = I.data, P = O > $.length ? $.length : O;
          if ($.copy(w, w.length - O, 0, P), O -= P, O === 0) {
            P === $.length ? (++N, I.next ? this.head = I.next : this.head = this.tail = null) : (this.head = I, I.data = $.slice(P));
            break;
          }
          ++N;
        }
        return this.length -= N, w;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: b,
      value: function(O, w) {
        return p(this, e(e({}, w), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: !1
        }));
      }
    }]), R;
  }(), Na;
}
function sm(t, e) {
  var r = this, n = this._readableState && this._readableState.destroyed, i = this._writableState && this._writableState.destroyed;
  return n || i ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(Cu, this, t)) : process.nextTick(Cu, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(s) {
    !e && s ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(Us, r) : (r._writableState.errorEmitted = !0, process.nextTick(Wl, r, s)) : process.nextTick(Wl, r, s) : e ? (process.nextTick(Us, r), e(s)) : process.nextTick(Us, r);
  }), this);
}
function Wl(t, e) {
  Cu(t, e), Us(t);
}
function Us(t) {
  t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close");
}
function om() {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}
function Cu(t, e) {
  t.emit("error", e);
}
function am(t, e) {
  var r = t._readableState, n = t._writableState;
  r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e);
}
var wd = {
  destroy: sm,
  undestroy: om,
  errorOrDestroy: am
}, wn = {};
function um(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
var Sd = {};
function jt(t, e, r) {
  r || (r = Error);
  function n(s, o, a) {
    return typeof e == "string" ? e : e(s, o, a);
  }
  var i = /* @__PURE__ */ function(s) {
    um(o, s);
    function o(a, u, l) {
      return s.call(this, n(a, u, l)) || this;
    }
    return o;
  }(r);
  i.prototype.name = r.name, i.prototype.code = t, Sd[t] = i;
}
function Hl(t, e) {
  if (Array.isArray(t)) {
    var r = t.length;
    return t = t.map(function(n) {
      return String(n);
    }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
  } else
    return "of ".concat(e, " ").concat(String(t));
}
function cm(t, e, r) {
  return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
}
function lm(t, e, r) {
  return (r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
}
function fm(t, e, r) {
  return typeof r != "number" && (r = 0), r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1;
}
jt("ERR_INVALID_OPT_VALUE", function(t, e) {
  return 'The value "' + e + '" is invalid for option "' + t + '"';
}, TypeError);
jt("ERR_INVALID_ARG_TYPE", function(t, e, r) {
  var n;
  typeof e == "string" && cm(e, "not ") ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be";
  var i;
  if (lm(t, " argument"))
    i = "The ".concat(t, " ").concat(n, " ").concat(Hl(e, "type"));
  else {
    var s = fm(t, ".") ? "property" : "argument";
    i = 'The "'.concat(t, '" ').concat(s, " ").concat(n, " ").concat(Hl(e, "type"));
  }
  return i += ". Received type ".concat(typeof r), i;
}, TypeError);
jt("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
jt("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
  return "The " + t + " method is not implemented";
});
jt("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
jt("ERR_STREAM_DESTROYED", function(t) {
  return "Cannot call " + t + " after a stream was destroyed";
});
jt("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
jt("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
jt("ERR_STREAM_WRITE_AFTER_END", "write after end");
jt("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
jt("ERR_UNKNOWN_ENCODING", function(t) {
  return "Unknown encoding: " + t;
}, TypeError);
jt("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
wn.codes = Sd;
var hm = wn.codes.ERR_INVALID_OPT_VALUE;
function dm(t, e, r) {
  return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
}
function pm(t, e, r, n) {
  var i = dm(e, n, r);
  if (i != null) {
    if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
      var s = n ? r : "highWaterMark";
      throw new hm(s, i);
    }
    return Math.floor(i);
  }
  return t.objectMode ? 16 : 16 * 1024;
}
var Ed = {
  getHighWaterMark: pm
}, gm = bm;
function bm(t, e) {
  if (La("noDeprecation"))
    return t;
  var r = !1;
  function n() {
    if (!r) {
      if (La("throwDeprecation"))
        throw new Error(e);
      La("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0;
    }
    return t.apply(this, arguments);
  }
  return n;
}
function La(t) {
  try {
    if (!J.localStorage)
      return !1;
  } catch {
    return !1;
  }
  var e = J.localStorage[t];
  return e == null ? !1 : String(e).toLowerCase() === "true";
}
var Pa, Vl;
function xd() {
  if (Vl)
    return Pa;
  Vl = 1, Pa = z;
  function t(A) {
    var T = this;
    this.next = null, this.entry = null, this.finish = function() {
      G(T, A);
    };
  }
  var e;
  z.WritableState = B;
  var r = {
    deprecate: gm
  }, n = _d, i = ho.Buffer, s = (typeof J < "u" ? J : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function o(A) {
    return i.from(A);
  }
  function a(A) {
    return i.isBuffer(A) || A instanceof s;
  }
  var u = wd, l = Ed, h = l.getHighWaterMark, p = wn.codes, b = p.ERR_INVALID_ARG_TYPE, S = p.ERR_METHOD_NOT_IMPLEMENTED, R = p.ERR_MULTIPLE_CALLBACK, L = p.ERR_STREAM_CANNOT_PIPE, O = p.ERR_STREAM_DESTROYED, w = p.ERR_STREAM_NULL_VALUES, I = p.ERR_STREAM_WRITE_AFTER_END, N = p.ERR_UNKNOWN_ENCODING, $ = u.errorOrDestroy;
  Gt(z, n);
  function P() {
  }
  function B(A, T, D) {
    e = e || ii(), A = A || {}, typeof D != "boolean" && (D = T instanceof e), this.objectMode = !!A.objectMode, D && (this.objectMode = this.objectMode || !!A.writableObjectMode), this.highWaterMark = h(this, A, "writableHighWaterMark", D), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var V = A.decodeStrings === !1;
    this.decodeStrings = !V, this.defaultEncoding = A.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(oe) {
      g(T, oe);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = A.emitClose !== !1, this.autoDestroy = !!A.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new t(this);
  }
  B.prototype.getBuffer = function() {
    for (var T = this.bufferedRequest, D = []; T; )
      D.push(T), T = T.next;
    return D;
  }, function() {
    try {
      Object.defineProperty(B.prototype, "buffer", {
        get: r.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var q;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (q = Function.prototype[Symbol.hasInstance], Object.defineProperty(z, Symbol.hasInstance, {
    value: function(T) {
      return q.call(this, T) ? !0 : this !== z ? !1 : T && T._writableState instanceof B;
    }
  })) : q = function(T) {
    return T instanceof this;
  };
  function z(A) {
    e = e || ii();
    var T = this instanceof e;
    if (!T && !q.call(z, this))
      return new z(A);
    this._writableState = new B(A, this, T), this.writable = !0, A && (typeof A.write == "function" && (this._write = A.write), typeof A.writev == "function" && (this._writev = A.writev), typeof A.destroy == "function" && (this._destroy = A.destroy), typeof A.final == "function" && (this._final = A.final)), n.call(this);
  }
  z.prototype.pipe = function() {
    $(this, new L());
  };
  function F(A, T) {
    var D = new I();
    $(A, D), process.nextTick(T, D);
  }
  function Z(A, T, D, V) {
    var oe;
    return D === null ? oe = new w() : typeof D != "string" && !T.objectMode && (oe = new b("chunk", ["string", "Buffer"], D)), oe ? ($(A, oe), process.nextTick(V, oe), !1) : !0;
  }
  z.prototype.write = function(A, T, D) {
    var V = this._writableState, oe = !1, E = !V.objectMode && a(A);
    return E && !i.isBuffer(A) && (A = o(A)), typeof T == "function" && (D = T, T = null), E ? T = "buffer" : T || (T = V.defaultEncoding), typeof D != "function" && (D = P), V.ending ? F(this, D) : (E || Z(this, V, A, D)) && (V.pendingcb++, oe = X(this, V, E, A, T, D)), oe;
  }, z.prototype.cork = function() {
    this._writableState.corked++;
  }, z.prototype.uncork = function() {
    var A = this._writableState;
    A.corked && (A.corked--, !A.writing && !A.corked && !A.bufferProcessing && A.bufferedRequest && C(this, A));
  }, z.prototype.setDefaultEncoding = function(T) {
    if (typeof T == "string" && (T = T.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((T + "").toLowerCase()) > -1))
      throw new N(T);
    return this._writableState.defaultEncoding = T, this;
  }, Object.defineProperty(z.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function K(A, T, D) {
    return !A.objectMode && A.decodeStrings !== !1 && typeof T == "string" && (T = i.from(T, D)), T;
  }
  Object.defineProperty(z.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function X(A, T, D, V, oe, E) {
    if (!D) {
      var x = K(T, V, oe);
      V !== x && (D = !0, oe = "buffer", V = x);
    }
    var W = T.objectMode ? 1 : V.length;
    T.length += W;
    var H = T.length < T.highWaterMark;
    if (H || (T.needDrain = !0), T.writing || T.corked) {
      var re = T.lastBufferedRequest;
      T.lastBufferedRequest = {
        chunk: V,
        encoding: oe,
        isBuf: D,
        callback: E,
        next: null
      }, re ? re.next = T.lastBufferedRequest : T.bufferedRequest = T.lastBufferedRequest, T.bufferedRequestCount += 1;
    } else
      v(A, T, !1, W, V, oe, E);
    return H;
  }
  function v(A, T, D, V, oe, E, x) {
    T.writelen = V, T.writecb = x, T.writing = !0, T.sync = !0, T.destroyed ? T.onwrite(new O("write")) : D ? A._writev(oe, T.onwrite) : A._write(oe, E, T.onwrite), T.sync = !1;
  }
  function c(A, T, D, V, oe) {
    --T.pendingcb, D ? (process.nextTick(oe, V), process.nextTick(M, A, T), A._writableState.errorEmitted = !0, $(A, V)) : (oe(V), A._writableState.errorEmitted = !0, $(A, V), M(A, T));
  }
  function d(A) {
    A.writing = !1, A.writecb = null, A.length -= A.writelen, A.writelen = 0;
  }
  function g(A, T) {
    var D = A._writableState, V = D.sync, oe = D.writecb;
    if (typeof oe != "function")
      throw new R();
    if (d(D), T)
      c(A, D, V, T, oe);
    else {
      var E = k(D) || A.destroyed;
      !E && !D.corked && !D.bufferProcessing && D.bufferedRequest && C(A, D), V ? process.nextTick(y, A, D, E, oe) : y(A, D, E, oe);
    }
  }
  function y(A, T, D, V) {
    D || _(A, T), T.pendingcb--, V(), M(A, T);
  }
  function _(A, T) {
    T.length === 0 && T.needDrain && (T.needDrain = !1, A.emit("drain"));
  }
  function C(A, T) {
    T.bufferProcessing = !0;
    var D = T.bufferedRequest;
    if (A._writev && D && D.next) {
      var V = T.bufferedRequestCount, oe = new Array(V), E = T.corkedRequestsFree;
      E.entry = D;
      for (var x = 0, W = !0; D; )
        oe[x] = D, D.isBuf || (W = !1), D = D.next, x += 1;
      oe.allBuffers = W, v(A, T, !0, T.length, oe, "", E.finish), T.pendingcb++, T.lastBufferedRequest = null, E.next ? (T.corkedRequestsFree = E.next, E.next = null) : T.corkedRequestsFree = new t(T), T.bufferedRequestCount = 0;
    } else {
      for (; D; ) {
        var H = D.chunk, re = D.encoding, se = D.callback, ee = T.objectMode ? 1 : H.length;
        if (v(A, T, !1, ee, H, re, se), D = D.next, T.bufferedRequestCount--, T.writing)
          break;
      }
      D === null && (T.lastBufferedRequest = null);
    }
    T.bufferedRequest = D, T.bufferProcessing = !1;
  }
  z.prototype._write = function(A, T, D) {
    D(new S("_write()"));
  }, z.prototype._writev = null, z.prototype.end = function(A, T, D) {
    var V = this._writableState;
    return typeof A == "function" ? (D = A, A = null, T = null) : typeof T == "function" && (D = T, T = null), A != null && this.write(A, T), V.corked && (V.corked = 1, this.uncork()), V.ending || U(this, V, D), this;
  }, Object.defineProperty(z.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function k(A) {
    return A.ending && A.length === 0 && A.bufferedRequest === null && !A.finished && !A.writing;
  }
  function m(A, T) {
    A._final(function(D) {
      T.pendingcb--, D && $(A, D), T.prefinished = !0, A.emit("prefinish"), M(A, T);
    });
  }
  function f(A, T) {
    !T.prefinished && !T.finalCalled && (typeof A._final == "function" && !T.destroyed ? (T.pendingcb++, T.finalCalled = !0, process.nextTick(m, A, T)) : (T.prefinished = !0, A.emit("prefinish")));
  }
  function M(A, T) {
    var D = k(T);
    if (D && (f(A, T), T.pendingcb === 0 && (T.finished = !0, A.emit("finish"), T.autoDestroy))) {
      var V = A._readableState;
      (!V || V.autoDestroy && V.endEmitted) && A.destroy();
    }
    return D;
  }
  function U(A, T, D) {
    T.ending = !0, M(A, T), D && (T.finished ? process.nextTick(D) : A.once("finish", D)), T.ended = !0, A.writable = !1;
  }
  function G(A, T, D) {
    var V = A.entry;
    for (A.entry = null; V; ) {
      var oe = V.callback;
      T.pendingcb--, oe(D), V = V.next;
    }
    T.corkedRequestsFree.next = A;
  }
  return Object.defineProperty(z.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(T) {
      this._writableState && (this._writableState.destroyed = T);
    }
  }), z.prototype.destroy = u.destroy, z.prototype._undestroy = u.undestroy, z.prototype._destroy = function(A, T) {
    T(A);
  }, Pa;
}
var $a, Ul;
function ii() {
  if (Ul)
    return $a;
  Ul = 1;
  var t = Object.keys || function(l) {
    var h = [];
    for (var p in l)
      h.push(p);
    return h;
  };
  $a = o;
  var e = Cd(), r = xd();
  Gt(o, e);
  for (var n = t(r.prototype), i = 0; i < n.length; i++) {
    var s = n[i];
    o.prototype[s] || (o.prototype[s] = r.prototype[s]);
  }
  function o(l) {
    if (!(this instanceof o))
      return new o(l);
    e.call(this, l), r.call(this, l), this.allowHalfOpen = !0, l && (l.readable === !1 && (this.readable = !1), l.writable === !1 && (this.writable = !1), l.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", a)));
  }
  Object.defineProperty(o.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(o.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(o.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function a() {
    this._writableState.ended || process.nextTick(u, this);
  }
  function u(l) {
    l.end();
  }
  return Object.defineProperty(o.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(h) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = h, this._writableState.destroyed = h);
    }
  }), $a;
}
var Da = {}, zl;
function ql() {
  if (zl)
    return Da;
  zl = 1;
  var t = Pr.Buffer, e = t.isEncoding || function(w) {
    switch (w = "" + w, w && w.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function r(w) {
    if (!w)
      return "utf8";
    for (var I; ; )
      switch (w) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return w;
        default:
          if (I)
            return;
          w = ("" + w).toLowerCase(), I = !0;
      }
  }
  function n(w) {
    var I = r(w);
    if (typeof I != "string" && (t.isEncoding === e || !e(w)))
      throw new Error("Unknown encoding: " + w);
    return I || w;
  }
  Da.StringDecoder = i;
  function i(w) {
    this.encoding = n(w);
    var I;
    switch (this.encoding) {
      case "utf16le":
        this.text = p, this.end = b, I = 4;
        break;
      case "utf8":
        this.fillLast = u, I = 4;
        break;
      case "base64":
        this.text = S, this.end = R, I = 3;
        break;
      default:
        this.write = L, this.end = O;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = t.allocUnsafe(I);
  }
  i.prototype.write = function(w) {
    if (w.length === 0)
      return "";
    var I, N;
    if (this.lastNeed) {
      if (I = this.fillLast(w), I === void 0)
        return "";
      N = this.lastNeed, this.lastNeed = 0;
    } else
      N = 0;
    return N < w.length ? I ? I + this.text(w, N) : this.text(w, N) : I || "";
  }, i.prototype.end = h, i.prototype.text = l, i.prototype.fillLast = function(w) {
    if (this.lastNeed <= w.length)
      return w.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    w.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, w.length), this.lastNeed -= w.length;
  };
  function s(w) {
    return w <= 127 ? 0 : w >> 5 === 6 ? 2 : w >> 4 === 14 ? 3 : w >> 3 === 30 ? 4 : w >> 6 === 2 ? -1 : -2;
  }
  function o(w, I, N) {
    var $ = I.length - 1;
    if ($ < N)
      return 0;
    var P = s(I[$]);
    return P >= 0 ? (P > 0 && (w.lastNeed = P - 1), P) : --$ < N || P === -2 ? 0 : (P = s(I[$]), P >= 0 ? (P > 0 && (w.lastNeed = P - 2), P) : --$ < N || P === -2 ? 0 : (P = s(I[$]), P >= 0 ? (P > 0 && (P === 2 ? P = 0 : w.lastNeed = P - 3), P) : 0));
  }
  function a(w, I, N) {
    if ((I[0] & 192) !== 128)
      return w.lastNeed = 0, "�";
    if (w.lastNeed > 1 && I.length > 1) {
      if ((I[1] & 192) !== 128)
        return w.lastNeed = 1, "�";
      if (w.lastNeed > 2 && I.length > 2 && (I[2] & 192) !== 128)
        return w.lastNeed = 2, "�";
    }
  }
  function u(w) {
    var I = this.lastTotal - this.lastNeed, N = a(this, w);
    if (N !== void 0)
      return N;
    if (this.lastNeed <= w.length)
      return w.copy(this.lastChar, I, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    w.copy(this.lastChar, I, 0, w.length), this.lastNeed -= w.length;
  }
  function l(w, I) {
    var N = o(this, w, I);
    if (!this.lastNeed)
      return w.toString("utf8", I);
    this.lastTotal = N;
    var $ = w.length - (N - this.lastNeed);
    return w.copy(this.lastChar, 0, $), w.toString("utf8", I, $);
  }
  function h(w) {
    var I = w && w.length ? this.write(w) : "";
    return this.lastNeed ? I + "�" : I;
  }
  function p(w, I) {
    if ((w.length - I) % 2 === 0) {
      var N = w.toString("utf16le", I);
      if (N) {
        var $ = N.charCodeAt(N.length - 1);
        if ($ >= 55296 && $ <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = w[w.length - 2], this.lastChar[1] = w[w.length - 1], N.slice(0, -1);
      }
      return N;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = w[w.length - 1], w.toString("utf16le", I, w.length - 1);
  }
  function b(w) {
    var I = w && w.length ? this.write(w) : "";
    if (this.lastNeed) {
      var N = this.lastTotal - this.lastNeed;
      return I + this.lastChar.toString("utf16le", 0, N);
    }
    return I;
  }
  function S(w, I) {
    var N = (w.length - I) % 3;
    return N === 0 ? w.toString("base64", I) : (this.lastNeed = 3 - N, this.lastTotal = 3, N === 1 ? this.lastChar[0] = w[w.length - 1] : (this.lastChar[0] = w[w.length - 2], this.lastChar[1] = w[w.length - 1]), w.toString("base64", I, w.length - N));
  }
  function R(w) {
    var I = w && w.length ? this.write(w) : "";
    return this.lastNeed ? I + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : I;
  }
  function L(w) {
    return w.toString(this.encoding);
  }
  function O(w) {
    return w && w.length ? this.write(w) : "";
  }
  return Da;
}
var Gl = wn.codes.ERR_STREAM_PREMATURE_CLOSE;
function vm(t) {
  var e = !1;
  return function() {
    if (!e) {
      e = !0;
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      t.apply(this, n);
    }
  };
}
function ym() {
}
function mm(t) {
  return t.setHeader && typeof t.abort == "function";
}
function Md(t, e, r) {
  if (typeof e == "function")
    return Md(t, null, e);
  e || (e = {}), r = vm(r || ym);
  var n = e.readable || e.readable !== !1 && t.readable, i = e.writable || e.writable !== !1 && t.writable, s = function() {
    t.writable || a();
  }, o = t._writableState && t._writableState.finished, a = function() {
    i = !1, o = !0, n || r.call(t);
  }, u = t._readableState && t._readableState.endEmitted, l = function() {
    n = !1, u = !0, i || r.call(t);
  }, h = function(R) {
    r.call(t, R);
  }, p = function() {
    var R;
    if (n && !u)
      return (!t._readableState || !t._readableState.ended) && (R = new Gl()), r.call(t, R);
    if (i && !o)
      return (!t._writableState || !t._writableState.ended) && (R = new Gl()), r.call(t, R);
  }, b = function() {
    t.req.on("finish", a);
  };
  return mm(t) ? (t.on("complete", a), t.on("abort", p), t.req ? b() : t.on("request", b)) : i && !t._writableState && (t.on("end", s), t.on("close", s)), t.on("end", l), t.on("finish", a), e.error !== !1 && t.on("error", h), t.on("close", p), function() {
    t.removeListener("complete", a), t.removeListener("abort", p), t.removeListener("request", b), t.req && t.req.removeListener("finish", a), t.removeListener("end", s), t.removeListener("close", s), t.removeListener("finish", a), t.removeListener("end", l), t.removeListener("error", h), t.removeListener("close", p);
  };
}
var sc = Md, Ba, Jl;
function _m() {
  if (Jl)
    return Ba;
  Jl = 1;
  var t;
  function e(N, $, P) {
    return $ = r($), $ in N ? Object.defineProperty(N, $, { value: P, enumerable: !0, configurable: !0, writable: !0 }) : N[$] = P, N;
  }
  function r(N) {
    var $ = n(N, "string");
    return typeof $ == "symbol" ? $ : String($);
  }
  function n(N, $) {
    if (typeof N != "object" || N === null)
      return N;
    var P = N[Symbol.toPrimitive];
    if (P !== void 0) {
      var B = P.call(N, $ || "default");
      if (typeof B != "object")
        return B;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ($ === "string" ? String : Number)(N);
  }
  var i = sc, s = Symbol("lastResolve"), o = Symbol("lastReject"), a = Symbol("error"), u = Symbol("ended"), l = Symbol("lastPromise"), h = Symbol("handlePromise"), p = Symbol("stream");
  function b(N, $) {
    return {
      value: N,
      done: $
    };
  }
  function S(N) {
    var $ = N[s];
    if ($ !== null) {
      var P = N[p].read();
      P !== null && (N[l] = null, N[s] = null, N[o] = null, $(b(P, !1)));
    }
  }
  function R(N) {
    process.nextTick(S, N);
  }
  function L(N, $) {
    return function(P, B) {
      N.then(function() {
        if ($[u]) {
          P(b(void 0, !0));
          return;
        }
        $[h](P, B);
      }, B);
    };
  }
  var O = Object.getPrototypeOf(function() {
  }), w = Object.setPrototypeOf((t = {
    get stream() {
      return this[p];
    },
    next: function() {
      var $ = this, P = this[a];
      if (P !== null)
        return Promise.reject(P);
      if (this[u])
        return Promise.resolve(b(void 0, !0));
      if (this[p].destroyed)
        return new Promise(function(F, Z) {
          process.nextTick(function() {
            $[a] ? Z($[a]) : F(b(void 0, !0));
          });
        });
      var B = this[l], q;
      if (B)
        q = new Promise(L(B, this));
      else {
        var z = this[p].read();
        if (z !== null)
          return Promise.resolve(b(z, !1));
        q = new Promise(this[h]);
      }
      return this[l] = q, q;
    }
  }, e(t, Symbol.asyncIterator, function() {
    return this;
  }), e(t, "return", function() {
    var $ = this;
    return new Promise(function(P, B) {
      $[p].destroy(null, function(q) {
        if (q) {
          B(q);
          return;
        }
        P(b(void 0, !0));
      });
    });
  }), t), O), I = function($) {
    var P, B = Object.create(w, (P = {}, e(P, p, {
      value: $,
      writable: !0
    }), e(P, s, {
      value: null,
      writable: !0
    }), e(P, o, {
      value: null,
      writable: !0
    }), e(P, a, {
      value: null,
      writable: !0
    }), e(P, u, {
      value: $._readableState.endEmitted,
      writable: !0
    }), e(P, h, {
      value: function(z, F) {
        var Z = B[p].read();
        Z ? (B[l] = null, B[s] = null, B[o] = null, z(b(Z, !1))) : (B[s] = z, B[o] = F);
      },
      writable: !0
    }), P));
    return B[l] = null, i($, function(q) {
      if (q && q.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var z = B[o];
        z !== null && (B[l] = null, B[s] = null, B[o] = null, z(q)), B[a] = q;
        return;
      }
      var F = B[s];
      F !== null && (B[l] = null, B[s] = null, B[o] = null, F(b(void 0, !0))), B[u] = !0;
    }), $.on("readable", R.bind(null, B)), B;
  };
  return Ba = I, Ba;
}
var ja, Zl;
function wm() {
  return Zl || (Zl = 1, ja = function() {
    throw new Error("Readable.from is not available in the browser");
  }), ja;
}
var Fa, Ql;
function Cd() {
  if (Ql)
    return Fa;
  Ql = 1, Fa = F;
  var t;
  F.ReadableState = z, Uu.EventEmitter;
  var e = function(x, W) {
    return x.listeners(W).length;
  }, r = _d, n = ho.Buffer, i = (typeof J < "u" ? J : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function s(E) {
    return n.from(E);
  }
  function o(E) {
    return n.isBuffer(E) || E instanceof i;
  }
  var a = fo, u;
  a && a.debuglog ? u = a.debuglog("stream") : u = function() {
  };
  var l = im(), h = wd, p = Ed, b = p.getHighWaterMark, S = wn.codes, R = S.ERR_INVALID_ARG_TYPE, L = S.ERR_STREAM_PUSH_AFTER_EOF, O = S.ERR_METHOD_NOT_IMPLEMENTED, w = S.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, I, N, $;
  Gt(F, r);
  var P = h.errorOrDestroy, B = ["error", "close", "destroy", "pause", "resume"];
  function q(E, x, W) {
    if (typeof E.prependListener == "function")
      return E.prependListener(x, W);
    !E._events || !E._events[x] ? E.on(x, W) : Array.isArray(E._events[x]) ? E._events[x].unshift(W) : E._events[x] = [W, E._events[x]];
  }
  function z(E, x, W) {
    t = t || ii(), E = E || {}, typeof W != "boolean" && (W = x instanceof t), this.objectMode = !!E.objectMode, W && (this.objectMode = this.objectMode || !!E.readableObjectMode), this.highWaterMark = b(this, E, "readableHighWaterMark", W), this.buffer = new l(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = E.emitClose !== !1, this.autoDestroy = !!E.autoDestroy, this.destroyed = !1, this.defaultEncoding = E.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, E.encoding && (I || (I = ql().StringDecoder), this.decoder = new I(E.encoding), this.encoding = E.encoding);
  }
  function F(E) {
    if (t = t || ii(), !(this instanceof F))
      return new F(E);
    var x = this instanceof t;
    this._readableState = new z(E, this, x), this.readable = !0, E && (typeof E.read == "function" && (this._read = E.read), typeof E.destroy == "function" && (this._destroy = E.destroy)), r.call(this);
  }
  Object.defineProperty(F.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(x) {
      this._readableState && (this._readableState.destroyed = x);
    }
  }), F.prototype.destroy = h.destroy, F.prototype._undestroy = h.undestroy, F.prototype._destroy = function(E, x) {
    x(E);
  }, F.prototype.push = function(E, x) {
    var W = this._readableState, H;
    return W.objectMode ? H = !0 : typeof E == "string" && (x = x || W.defaultEncoding, x !== W.encoding && (E = n.from(E, x), x = ""), H = !0), Z(this, E, x, !1, H);
  }, F.prototype.unshift = function(E) {
    return Z(this, E, null, !0, !1);
  };
  function Z(E, x, W, H, re) {
    u("readableAddChunk", x);
    var se = E._readableState;
    if (x === null)
      se.reading = !1, g(E, se);
    else {
      var ee;
      if (re || (ee = X(se, x)), ee)
        P(E, ee);
      else if (se.objectMode || x && x.length > 0)
        if (typeof x != "string" && !se.objectMode && Object.getPrototypeOf(x) !== n.prototype && (x = s(x)), H)
          se.endEmitted ? P(E, new w()) : K(E, se, x, !0);
        else if (se.ended)
          P(E, new L());
        else {
          if (se.destroyed)
            return !1;
          se.reading = !1, se.decoder && !W ? (x = se.decoder.write(x), se.objectMode || x.length !== 0 ? K(E, se, x, !1) : C(E, se)) : K(E, se, x, !1);
        }
      else
        H || (se.reading = !1, C(E, se));
    }
    return !se.ended && (se.length < se.highWaterMark || se.length === 0);
  }
  function K(E, x, W, H) {
    x.flowing && x.length === 0 && !x.sync ? (x.awaitDrain = 0, E.emit("data", W)) : (x.length += x.objectMode ? 1 : W.length, H ? x.buffer.unshift(W) : x.buffer.push(W), x.needReadable && y(E)), C(E, x);
  }
  function X(E, x) {
    var W;
    return !o(x) && typeof x != "string" && x !== void 0 && !E.objectMode && (W = new R("chunk", ["string", "Buffer", "Uint8Array"], x)), W;
  }
  F.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, F.prototype.setEncoding = function(E) {
    I || (I = ql().StringDecoder);
    var x = new I(E);
    this._readableState.decoder = x, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var W = this._readableState.buffer.head, H = ""; W !== null; )
      H += x.write(W.data), W = W.next;
    return this._readableState.buffer.clear(), H !== "" && this._readableState.buffer.push(H), this._readableState.length = H.length, this;
  };
  var v = 1073741824;
  function c(E) {
    return E >= v ? E = v : (E--, E |= E >>> 1, E |= E >>> 2, E |= E >>> 4, E |= E >>> 8, E |= E >>> 16, E++), E;
  }
  function d(E, x) {
    return E <= 0 || x.length === 0 && x.ended ? 0 : x.objectMode ? 1 : E !== E ? x.flowing && x.length ? x.buffer.head.data.length : x.length : (E > x.highWaterMark && (x.highWaterMark = c(E)), E <= x.length ? E : x.ended ? x.length : (x.needReadable = !0, 0));
  }
  F.prototype.read = function(E) {
    u("read", E), E = parseInt(E, 10);
    var x = this._readableState, W = E;
    if (E !== 0 && (x.emittedReadable = !1), E === 0 && x.needReadable && ((x.highWaterMark !== 0 ? x.length >= x.highWaterMark : x.length > 0) || x.ended))
      return u("read: emitReadable", x.length, x.ended), x.length === 0 && x.ended ? D(this) : y(this), null;
    if (E = d(E, x), E === 0 && x.ended)
      return x.length === 0 && D(this), null;
    var H = x.needReadable;
    u("need readable", H), (x.length === 0 || x.length - E < x.highWaterMark) && (H = !0, u("length less than watermark", H)), x.ended || x.reading ? (H = !1, u("reading or ended", H)) : H && (u("do read"), x.reading = !0, x.sync = !0, x.length === 0 && (x.needReadable = !0), this._read(x.highWaterMark), x.sync = !1, x.reading || (E = d(W, x)));
    var re;
    return E > 0 ? re = T(E, x) : re = null, re === null ? (x.needReadable = x.length <= x.highWaterMark, E = 0) : (x.length -= E, x.awaitDrain = 0), x.length === 0 && (x.ended || (x.needReadable = !0), W !== E && x.ended && D(this)), re !== null && this.emit("data", re), re;
  };
  function g(E, x) {
    if (u("onEofChunk"), !x.ended) {
      if (x.decoder) {
        var W = x.decoder.end();
        W && W.length && (x.buffer.push(W), x.length += x.objectMode ? 1 : W.length);
      }
      x.ended = !0, x.sync ? y(E) : (x.needReadable = !1, x.emittedReadable || (x.emittedReadable = !0, _(E)));
    }
  }
  function y(E) {
    var x = E._readableState;
    u("emitReadable", x.needReadable, x.emittedReadable), x.needReadable = !1, x.emittedReadable || (u("emitReadable", x.flowing), x.emittedReadable = !0, process.nextTick(_, E));
  }
  function _(E) {
    var x = E._readableState;
    u("emitReadable_", x.destroyed, x.length, x.ended), !x.destroyed && (x.length || x.ended) && (E.emit("readable"), x.emittedReadable = !1), x.needReadable = !x.flowing && !x.ended && x.length <= x.highWaterMark, A(E);
  }
  function C(E, x) {
    x.readingMore || (x.readingMore = !0, process.nextTick(k, E, x));
  }
  function k(E, x) {
    for (; !x.reading && !x.ended && (x.length < x.highWaterMark || x.flowing && x.length === 0); ) {
      var W = x.length;
      if (u("maybeReadMore read 0"), E.read(0), W === x.length)
        break;
    }
    x.readingMore = !1;
  }
  F.prototype._read = function(E) {
    P(this, new O("_read()"));
  }, F.prototype.pipe = function(E, x) {
    var W = this, H = this._readableState;
    switch (H.pipesCount) {
      case 0:
        H.pipes = E;
        break;
      case 1:
        H.pipes = [H.pipes, E];
        break;
      default:
        H.pipes.push(E);
        break;
    }
    H.pipesCount += 1, u("pipe count=%d opts=%j", H.pipesCount, x);
    var re = (!x || x.end !== !1) && E !== process.stdout && E !== process.stderr, se = re ? pe : ve;
    H.endEmitted ? process.nextTick(se) : W.once("end", se), E.on("unpipe", ee);
    function ee(ge, Ct) {
      u("onunpipe"), ge === W && Ct && Ct.hasUnpiped === !1 && (Ct.hasUnpiped = !0, xe());
    }
    function pe() {
      u("onend"), E.end();
    }
    var Qt = m(W);
    E.on("drain", Qt);
    var Se = !1;
    function xe() {
      u("cleanup"), E.removeListener("close", me), E.removeListener("finish", lr), E.removeListener("drain", Qt), E.removeListener("error", ye), E.removeListener("unpipe", ee), W.removeListener("end", pe), W.removeListener("end", ve), W.removeListener("data", wr), Se = !0, H.awaitDrain && (!E._writableState || E._writableState.needDrain) && Qt();
    }
    W.on("data", wr);
    function wr(ge) {
      u("ondata");
      var Ct = E.write(ge);
      u("dest.write", Ct), Ct === !1 && ((H.pipesCount === 1 && H.pipes === E || H.pipesCount > 1 && oe(H.pipes, E) !== -1) && !Se && (u("false write response, pause", H.awaitDrain), H.awaitDrain++), W.pause());
    }
    function ye(ge) {
      u("onerror", ge), ve(), E.removeListener("error", ye), e(E, "error") === 0 && P(E, ge);
    }
    q(E, "error", ye);
    function me() {
      E.removeListener("finish", lr), ve();
    }
    E.once("close", me);
    function lr() {
      u("onfinish"), E.removeListener("close", me), ve();
    }
    E.once("finish", lr);
    function ve() {
      u("unpipe"), W.unpipe(E);
    }
    return E.emit("pipe", W), H.flowing || (u("pipe resume"), W.resume()), E;
  };
  function m(E) {
    return function() {
      var W = E._readableState;
      u("pipeOnDrain", W.awaitDrain), W.awaitDrain && W.awaitDrain--, W.awaitDrain === 0 && e(E, "data") && (W.flowing = !0, A(E));
    };
  }
  F.prototype.unpipe = function(E) {
    var x = this._readableState, W = {
      hasUnpiped: !1
    };
    if (x.pipesCount === 0)
      return this;
    if (x.pipesCount === 1)
      return E && E !== x.pipes ? this : (E || (E = x.pipes), x.pipes = null, x.pipesCount = 0, x.flowing = !1, E && E.emit("unpipe", this, W), this);
    if (!E) {
      var H = x.pipes, re = x.pipesCount;
      x.pipes = null, x.pipesCount = 0, x.flowing = !1;
      for (var se = 0; se < re; se++)
        H[se].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    var ee = oe(x.pipes, E);
    return ee === -1 ? this : (x.pipes.splice(ee, 1), x.pipesCount -= 1, x.pipesCount === 1 && (x.pipes = x.pipes[0]), E.emit("unpipe", this, W), this);
  }, F.prototype.on = function(E, x) {
    var W = r.prototype.on.call(this, E, x), H = this._readableState;
    return E === "data" ? (H.readableListening = this.listenerCount("readable") > 0, H.flowing !== !1 && this.resume()) : E === "readable" && !H.endEmitted && !H.readableListening && (H.readableListening = H.needReadable = !0, H.flowing = !1, H.emittedReadable = !1, u("on readable", H.length, H.reading), H.length ? y(this) : H.reading || process.nextTick(M, this)), W;
  }, F.prototype.addListener = F.prototype.on, F.prototype.removeListener = function(E, x) {
    var W = r.prototype.removeListener.call(this, E, x);
    return E === "readable" && process.nextTick(f, this), W;
  }, F.prototype.removeAllListeners = function(E) {
    var x = r.prototype.removeAllListeners.apply(this, arguments);
    return (E === "readable" || E === void 0) && process.nextTick(f, this), x;
  };
  function f(E) {
    var x = E._readableState;
    x.readableListening = E.listenerCount("readable") > 0, x.resumeScheduled && !x.paused ? x.flowing = !0 : E.listenerCount("data") > 0 && E.resume();
  }
  function M(E) {
    u("readable nexttick read 0"), E.read(0);
  }
  F.prototype.resume = function() {
    var E = this._readableState;
    return E.flowing || (u("resume"), E.flowing = !E.readableListening, U(this, E)), E.paused = !1, this;
  };
  function U(E, x) {
    x.resumeScheduled || (x.resumeScheduled = !0, process.nextTick(G, E, x));
  }
  function G(E, x) {
    u("resume", x.reading), x.reading || E.read(0), x.resumeScheduled = !1, E.emit("resume"), A(E), x.flowing && !x.reading && E.read(0);
  }
  F.prototype.pause = function() {
    return u("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (u("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function A(E) {
    var x = E._readableState;
    for (u("flow", x.flowing); x.flowing && E.read() !== null; )
      ;
  }
  F.prototype.wrap = function(E) {
    var x = this, W = this._readableState, H = !1;
    E.on("end", function() {
      if (u("wrapped end"), W.decoder && !W.ended) {
        var ee = W.decoder.end();
        ee && ee.length && x.push(ee);
      }
      x.push(null);
    }), E.on("data", function(ee) {
      if (u("wrapped data"), W.decoder && (ee = W.decoder.write(ee)), !(W.objectMode && ee == null) && !(!W.objectMode && (!ee || !ee.length))) {
        var pe = x.push(ee);
        pe || (H = !0, E.pause());
      }
    });
    for (var re in E)
      this[re] === void 0 && typeof E[re] == "function" && (this[re] = /* @__PURE__ */ function(pe) {
        return function() {
          return E[pe].apply(E, arguments);
        };
      }(re));
    for (var se = 0; se < B.length; se++)
      E.on(B[se], this.emit.bind(this, B[se]));
    return this._read = function(ee) {
      u("wrapped _read", ee), H && (H = !1, E.resume());
    }, this;
  }, typeof Symbol == "function" && (F.prototype[Symbol.asyncIterator] = function() {
    return N === void 0 && (N = _m()), N(this);
  }), Object.defineProperty(F.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(F.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(F.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(x) {
      this._readableState && (this._readableState.flowing = x);
    }
  }), F._fromList = T, Object.defineProperty(F.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function T(E, x) {
    if (x.length === 0)
      return null;
    var W;
    return x.objectMode ? W = x.buffer.shift() : !E || E >= x.length ? (x.decoder ? W = x.buffer.join("") : x.buffer.length === 1 ? W = x.buffer.first() : W = x.buffer.concat(x.length), x.buffer.clear()) : W = x.buffer.consume(E, x.decoder), W;
  }
  function D(E) {
    var x = E._readableState;
    u("endReadable", x.endEmitted), x.endEmitted || (x.ended = !0, process.nextTick(V, x, E));
  }
  function V(E, x) {
    if (u("endReadableNT", E.endEmitted, E.length), !E.endEmitted && E.length === 0 && (E.endEmitted = !0, x.readable = !1, x.emit("end"), E.autoDestroy)) {
      var W = x._writableState;
      (!W || W.autoDestroy && W.finished) && x.destroy();
    }
  }
  typeof Symbol == "function" && (F.from = function(E, x) {
    return $ === void 0 && ($ = wm()), $(F, E, x);
  });
  function oe(E, x) {
    for (var W = 0, H = E.length; W < H; W++)
      if (E[W] === x)
        return W;
    return -1;
  }
  return Fa;
}
var Rd = vr, xo = wn.codes, Sm = xo.ERR_METHOD_NOT_IMPLEMENTED, Em = xo.ERR_MULTIPLE_CALLBACK, xm = xo.ERR_TRANSFORM_ALREADY_TRANSFORMING, Mm = xo.ERR_TRANSFORM_WITH_LENGTH_0, Mo = ii();
Gt(vr, Mo);
function Cm(t, e) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null)
    return this.emit("error", new Em());
  r.writechunk = null, r.writecb = null, e != null && this.push(e), n(t);
  var i = this._readableState;
  i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}
function vr(t) {
  if (!(this instanceof vr))
    return new vr(t);
  Mo.call(this, t), this._transformState = {
    afterTransform: Cm.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", Rm);
}
function Rm() {
  var t = this;
  typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(e, r) {
    Yl(t, e, r);
  }) : Yl(this, null, null);
}
vr.prototype.push = function(t, e) {
  return this._transformState.needTransform = !1, Mo.prototype.push.call(this, t, e);
};
vr.prototype._transform = function(t, e, r) {
  r(new Sm("_transform()"));
};
vr.prototype._write = function(t, e, r) {
  var n = this._transformState;
  if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
    var i = this._readableState;
    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }
};
vr.prototype._read = function(t) {
  var e = this._transformState;
  e.writechunk !== null && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
};
vr.prototype._destroy = function(t, e) {
  Mo.prototype._destroy.call(this, t, function(r) {
    e(r);
  });
};
function Yl(t, e, r) {
  if (e)
    return t.emit("error", e);
  if (r != null && t.push(r), t._writableState.length)
    throw new Mm();
  if (t._transformState.transforming)
    throw new xm();
  return t.push(null);
}
var Im = Ji, Id = Rd;
Gt(Ji, Id);
function Ji(t) {
  if (!(this instanceof Ji))
    return new Ji(t);
  Id.call(this, t);
}
Ji.prototype._transform = function(t, e, r) {
  r(null, t);
};
var Wa;
function Am(t) {
  var e = !1;
  return function() {
    e || (e = !0, t.apply(void 0, arguments));
  };
}
var Ad = wn.codes, km = Ad.ERR_MISSING_ARGS, Tm = Ad.ERR_STREAM_DESTROYED;
function Kl(t) {
  if (t)
    throw t;
}
function Om(t) {
  return t.setHeader && typeof t.abort == "function";
}
function Nm(t, e, r, n) {
  n = Am(n);
  var i = !1;
  t.on("close", function() {
    i = !0;
  }), Wa === void 0 && (Wa = sc), Wa(t, {
    readable: e,
    writable: r
  }, function(o) {
    if (o)
      return n(o);
    i = !0, n();
  });
  var s = !1;
  return function(o) {
    if (!i && !s) {
      if (s = !0, Om(t))
        return t.abort();
      if (typeof t.destroy == "function")
        return t.destroy();
      n(o || new Tm("pipe"));
    }
  };
}
function Xl(t) {
  t();
}
function Lm(t, e) {
  return t.pipe(e);
}
function Pm(t) {
  return !t.length || typeof t[t.length - 1] != "function" ? Kl : t.pop();
}
function $m() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var n = Pm(e);
  if (Array.isArray(e[0]) && (e = e[0]), e.length < 2)
    throw new km("streams");
  var i, s = e.map(function(o, a) {
    var u = a < e.length - 1, l = a > 0;
    return Nm(o, u, l, function(h) {
      i || (i = h), h && s.forEach(Xl), !u && (s.forEach(Xl), n(i));
    });
  });
  return e.reduce(Lm);
}
var Dm = $m;
(function(t, e) {
  e = t.exports = Cd(), e.Stream = e, e.Readable = e, e.Writable = xd(), e.Duplex = ii(), e.Transform = Rd, e.PassThrough = Im, e.finished = sc, e.pipeline = Dm;
})(Mu, Mu.exports);
var kd = Mu.exports;
const { Transform: Bm } = kd;
var jm = (t) => class Td extends Bm {
  constructor(r, n, i, s, o) {
    super(o), this._rate = r, this._capacity = n, this._delimitedSuffix = i, this._hashBitLength = s, this._options = o, this._state = new t(), this._state.initialize(r, n), this._finalized = !1;
  }
  _transform(r, n, i) {
    let s = null;
    try {
      this.update(r, n);
    } catch (o) {
      s = o;
    }
    i(s);
  }
  _flush(r) {
    let n = null;
    try {
      this.push(this.digest());
    } catch (i) {
      n = i;
    }
    r(n);
  }
  update(r, n) {
    if (!Buffer.isBuffer(r) && typeof r != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Digest already called");
    return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
  }
  digest(r) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
    let n = this._state.squeeze(this._hashBitLength / 8);
    return r !== void 0 && (n = n.toString(r)), this._resetState(), n;
  }
  // remove result from memory
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  // because sometimes we need hash right now and little later
  _clone() {
    const r = new Td(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const { Transform: Fm } = kd;
var Wm = (t) => class Od extends Fm {
  constructor(r, n, i, s) {
    super(s), this._rate = r, this._capacity = n, this._delimitedSuffix = i, this._options = s, this._state = new t(), this._state.initialize(r, n), this._finalized = !1;
  }
  _transform(r, n, i) {
    let s = null;
    try {
      this.update(r, n);
    } catch (o) {
      s = o;
    }
    i(s);
  }
  _flush() {
  }
  _read(r) {
    this.push(this.squeeze(r));
  }
  update(r, n) {
    if (!Buffer.isBuffer(r) && typeof r != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Squeeze already called");
    return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
  }
  squeeze(r, n) {
    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
    let i = this._state.squeeze(r);
    return n !== void 0 && (i = i.toString(n)), i;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const r = new Od(this._rate, this._capacity, this._delimitedSuffix, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const Hm = jm, Vm = Wm;
var Um = function(t) {
  const e = Hm(t), r = Vm(t);
  return function(n, i) {
    switch (typeof n == "string" ? n.toLowerCase() : n) {
      case "keccak224":
        return new e(1152, 448, null, 224, i);
      case "keccak256":
        return new e(1088, 512, null, 256, i);
      case "keccak384":
        return new e(832, 768, null, 384, i);
      case "keccak512":
        return new e(576, 1024, null, 512, i);
      case "sha3-224":
        return new e(1152, 448, 6, 224, i);
      case "sha3-256":
        return new e(1088, 512, 6, 256, i);
      case "sha3-384":
        return new e(832, 768, 6, 384, i);
      case "sha3-512":
        return new e(576, 1024, 6, 512, i);
      case "shake128":
        return new r(1344, 256, 31, i);
      case "shake256":
        return new r(1088, 512, 31, i);
      default:
        throw new Error("Invald algorithm: " + n);
    }
  };
}, zm = Um(nm);
const qm = zm, Gm = vo;
function Nd(t) {
  return Buffer.allocUnsafe(t).fill(0);
}
function Ld(t, e, r) {
  const n = Nd(e);
  return t = Co(t), r ? t.length < e ? (t.copy(n), n) : t.slice(0, e) : t.length < e ? (t.copy(n, e - t.length), n) : t.slice(-e);
}
function Jm(t, e) {
  return Ld(t, e, !0);
}
function Co(t) {
  if (!Buffer.isBuffer(t))
    if (Array.isArray(t))
      t = Buffer.from(t);
    else if (typeof t == "string")
      Pd(t) ? t = Buffer.from(Ym($d(t)), "hex") : t = Buffer.from(t);
    else if (typeof t == "number")
      t = intToBuffer(t);
    else if (t == null)
      t = Buffer.allocUnsafe(0);
    else if (Gm.isBN(t))
      t = t.toArrayLike(Buffer);
    else if (t.toArray)
      t = Buffer.from(t.toArray());
    else
      throw new Error("invalid type");
  return t;
}
function Zm(t) {
  return t = Co(t), "0x" + t.toString("hex");
}
function Qm(t, e) {
  return t = Co(t), e || (e = 256), qm("keccak" + e).update(t).digest();
}
function Ym(t) {
  return t.length % 2 ? "0" + t : t;
}
function Pd(t) {
  return typeof t == "string" && t.match(/^0x[0-9A-Fa-f]*$/);
}
function $d(t) {
  return typeof t == "string" && t.startsWith("0x") ? t.slice(2) : t;
}
var Dd = {
  zeros: Nd,
  setLength: Ld,
  setLengthRight: Jm,
  isHexString: Pd,
  stripHexPrefix: $d,
  toBuffer: Co,
  bufferToHex: Zm,
  keccak: Qm
};
const hn = Dd, an = vo;
function Bd(t) {
  return t.startsWith("int[") ? "int256" + t.slice(3) : t === "int" ? "int256" : t.startsWith("uint[") ? "uint256" + t.slice(4) : t === "uint" ? "uint256" : t.startsWith("fixed[") ? "fixed128x128" + t.slice(5) : t === "fixed" ? "fixed128x128" : t.startsWith("ufixed[") ? "ufixed128x128" + t.slice(6) : t === "ufixed" ? "ufixed128x128" : t;
}
function Qn(t) {
  return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
}
function ef(t) {
  var e = /^\D+(\d+)x(\d+)$/.exec(t);
  return [parseInt(e[1], 10), parseInt(e[2], 10)];
}
function jd(t) {
  var e = t.match(/(.*)\[(.*?)\]$/);
  return e ? e[2] === "" ? "dynamic" : parseInt(e[2], 10) : null;
}
function tn(t) {
  var e = typeof t;
  if (e === "string")
    return hn.isHexString(t) ? new an(hn.stripHexPrefix(t), 16) : new an(t, 10);
  if (e === "number")
    return new an(t);
  if (t.toArray)
    return t;
  throw new Error("Argument is not a number");
}
function tr(t, e) {
  var r, n, i, s;
  if (t === "address")
    return tr("uint160", tn(e));
  if (t === "bool")
    return tr("uint8", e ? 1 : 0);
  if (t === "string")
    return tr("bytes", new Buffer(e, "utf8"));
  if (Xm(t)) {
    if (typeof e.length > "u")
      throw new Error("Not an array?");
    if (r = jd(t), r !== "dynamic" && r !== 0 && e.length > r)
      throw new Error("Elements exceed array size: " + r);
    i = [], t = t.slice(0, t.lastIndexOf("[")), typeof e == "string" && (e = JSON.parse(e));
    for (s in e)
      i.push(tr(t, e[s]));
    if (r === "dynamic") {
      var o = tr("uint256", e.length);
      i.unshift(o);
    }
    return Buffer.concat(i);
  } else {
    if (t === "bytes")
      return e = new Buffer(e), i = Buffer.concat([tr("uint256", e.length), e]), e.length % 32 !== 0 && (i = Buffer.concat([i, hn.zeros(32 - e.length % 32)])), i;
    if (t.startsWith("bytes")) {
      if (r = Qn(t), r < 1 || r > 32)
        throw new Error("Invalid bytes<N> width: " + r);
      return hn.setLengthRight(e, 32);
    } else if (t.startsWith("uint")) {
      if (r = Qn(t), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid uint<N> width: " + r);
      if (n = tn(e), n.bitLength() > r)
        throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
      if (n < 0)
        throw new Error("Supplied uint is negative");
      return n.toArrayLike(Buffer, "be", 32);
    } else if (t.startsWith("int")) {
      if (r = Qn(t), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid int<N> width: " + r);
      if (n = tn(e), n.bitLength() > r)
        throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
      return n.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (t.startsWith("ufixed")) {
      if (r = ef(t), n = tn(e), n < 0)
        throw new Error("Supplied ufixed is negative");
      return tr("uint256", n.mul(new an(2).pow(new an(r[1]))));
    } else if (t.startsWith("fixed"))
      return r = ef(t), tr("int256", tn(e).mul(new an(2).pow(new an(r[1]))));
  }
  throw new Error("Unsupported or invalid type: " + t);
}
function Km(t) {
  return t === "string" || t === "bytes" || jd(t) === "dynamic";
}
function Xm(t) {
  return t.lastIndexOf("]") === t.length - 1;
}
function e1(t, e) {
  var r = [], n = [], i = 32 * t.length;
  for (var s in t) {
    var o = Bd(t[s]), a = e[s], u = tr(o, a);
    Km(o) ? (r.push(tr("uint256", i)), n.push(u), i += u.length) : r.push(u);
  }
  return Buffer.concat(r.concat(n));
}
function Fd(t, e) {
  if (t.length !== e.length)
    throw new Error("Number of types are not matching the values");
  for (var r, n, i = [], s = 0; s < t.length; s++) {
    var o = Bd(t[s]), a = e[s];
    if (o === "bytes")
      i.push(a);
    else if (o === "string")
      i.push(new Buffer(a, "utf8"));
    else if (o === "bool")
      i.push(new Buffer(a ? "01" : "00", "hex"));
    else if (o === "address")
      i.push(hn.setLength(a, 20));
    else if (o.startsWith("bytes")) {
      if (r = Qn(o), r < 1 || r > 32)
        throw new Error("Invalid bytes<N> width: " + r);
      i.push(hn.setLengthRight(a, r));
    } else if (o.startsWith("uint")) {
      if (r = Qn(o), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid uint<N> width: " + r);
      if (n = tn(a), n.bitLength() > r)
        throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
      i.push(n.toArrayLike(Buffer, "be", r / 8));
    } else if (o.startsWith("int")) {
      if (r = Qn(o), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid int<N> width: " + r);
      if (n = tn(a), n.bitLength() > r)
        throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
      i.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8));
    } else
      throw new Error("Unsupported or invalid type: " + o);
  }
  return Buffer.concat(i);
}
function t1(t, e) {
  return hn.keccak(Fd(t, e));
}
var r1 = {
  rawEncode: e1,
  solidityPack: Fd,
  soliditySHA3: t1
};
const Vt = Dd, Wi = r1, Wd = {
  type: "object",
  properties: {
    types: {
      type: "object",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" }
          },
          required: ["name", "type"]
        }
      }
    },
    primaryType: { type: "string" },
    domain: { type: "object" },
    message: { type: "object" }
  },
  required: ["types", "primaryType", "domain", "message"]
}, Ha = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData(t, e, r, n = !0) {
    const i = ["bytes32"], s = [this.hashType(t, r)];
    if (n) {
      const o = (a, u, l) => {
        if (r[u] !== void 0)
          return ["bytes32", l == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : Vt.keccak(this.encodeData(u, l, r, n))];
        if (l === void 0)
          throw new Error(`missing value for field ${a} of type ${u}`);
        if (u === "bytes")
          return ["bytes32", Vt.keccak(l)];
        if (u === "string")
          return typeof l == "string" && (l = Buffer.from(l, "utf8")), ["bytes32", Vt.keccak(l)];
        if (u.lastIndexOf("]") === u.length - 1) {
          const h = u.slice(0, u.lastIndexOf("[")), p = l.map((b) => o(a, h, b));
          return ["bytes32", Vt.keccak(Wi.rawEncode(
            p.map(([b]) => b),
            p.map(([, b]) => b)
          ))];
        }
        return [u, l];
      };
      for (const a of r[t]) {
        const [u, l] = o(a.name, a.type, e[a.name]);
        i.push(u), s.push(l);
      }
    } else
      for (const o of r[t]) {
        let a = e[o.name];
        if (a !== void 0)
          if (o.type === "bytes")
            i.push("bytes32"), a = Vt.keccak(a), s.push(a);
          else if (o.type === "string")
            i.push("bytes32"), typeof a == "string" && (a = Buffer.from(a, "utf8")), a = Vt.keccak(a), s.push(a);
          else if (r[o.type] !== void 0)
            i.push("bytes32"), a = Vt.keccak(this.encodeData(o.type, a, r, n)), s.push(a);
          else {
            if (o.type.lastIndexOf("]") === o.type.length - 1)
              throw new Error("Arrays currently unimplemented in encodeData");
            i.push(o.type), s.push(a);
          }
      }
    return Wi.rawEncode(i, s);
  },
  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType(t, e) {
    let r = "", n = this.findTypeDependencies(t, e).filter((i) => i !== t);
    n = [t].concat(n.sort());
    for (const i of n) {
      if (!e[i])
        throw new Error("No type definition specified: " + i);
      r += i + "(" + e[i].map(({ name: o, type: a }) => a + " " + o).join(",") + ")";
    }
    return r;
  },
  /**
   * Finds all types within a type defintion object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies(t, e, r = []) {
    if (t = t.match(/^\w*/)[0], r.includes(t) || e[t] === void 0)
      return r;
    r.push(t);
    for (const n of e[t])
      for (const i of this.findTypeDependencies(n.type, e, r))
        !r.includes(i) && r.push(i);
    return r;
  },
  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct(t, e, r, n = !0) {
    return Vt.keccak(this.encodeData(t, e, r, n));
  },
  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType(t, e) {
    return Vt.keccak(this.encodeType(t, e));
  },
  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData(t) {
    const e = {};
    for (const r in Wd.properties)
      t[r] && (e[r] = t[r]);
    return e.types && (e.types = Object.assign({ EIP712Domain: [] }, e.types)), e;
  },
  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash(t, e = !0) {
    const r = this.sanitizeData(t), n = [Buffer.from("1901", "hex")];
    return n.push(this.hashStruct("EIP712Domain", r.domain, r.types, e)), r.primaryType !== "EIP712Domain" && n.push(this.hashStruct(r.primaryType, r.message, r.types, e)), Vt.keccak(Buffer.concat(n));
  }
};
var n1 = {
  TYPED_MESSAGE_SCHEMA: Wd,
  TypedDataUtils: Ha,
  hashForSignTypedDataLegacy: function(t) {
    return i1(t.data);
  },
  hashForSignTypedData_v3: function(t) {
    return Ha.hash(t.data, !1);
  },
  hashForSignTypedData_v4: function(t) {
    return Ha.hash(t.data);
  }
};
function i1(t) {
  const e = new Error("Expect argument to be non-empty array");
  if (typeof t != "object" || !t.length)
    throw e;
  const r = t.map(function(s) {
    return s.type === "bytes" ? Vt.toBuffer(s.value) : s.value;
  }), n = t.map(function(s) {
    return s.type;
  }), i = t.map(function(s) {
    if (!s.name)
      throw e;
    return s.type + " " + s.name;
  });
  return Wi.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      Wi.soliditySHA3(new Array(t.length).fill("string"), i),
      Wi.soliditySHA3(n, r)
    ]
  );
}
var si = {};
Object.defineProperty(si, "__esModule", { value: !0 });
si.filterFromParam = si.FilterPolyfill = void 0;
const zn = os, mt = Q, s1 = 5 * 60 * 1e3, rn = {
  jsonrpc: "2.0",
  id: 0
};
class o1 {
  constructor(e) {
    this.logFilters = /* @__PURE__ */ new Map(), this.blockFilters = /* @__PURE__ */ new Set(), this.pendingTransactionFilters = /* @__PURE__ */ new Set(), this.cursors = /* @__PURE__ */ new Map(), this.timeouts = /* @__PURE__ */ new Map(), this.nextFilterId = (0, zn.IntNumber)(1), this.provider = e;
  }
  async newFilter(e) {
    const r = Hd(e), n = this.makeFilterId(), i = await this.setInitialCursorPosition(n, r.fromBlock);
    return console.log(`Installing new log filter(${n}):`, r, "initial cursor position:", i), this.logFilters.set(n, r), this.setFilterTimeout(n), (0, mt.hexStringFromIntNumber)(n);
  }
  async newBlockFilter() {
    const e = this.makeFilterId(), r = await this.setInitialCursorPosition(e, "latest");
    return console.log(`Installing new block filter (${e}) with initial cursor position:`, r), this.blockFilters.add(e), this.setFilterTimeout(e), (0, mt.hexStringFromIntNumber)(e);
  }
  async newPendingTransactionFilter() {
    const e = this.makeFilterId(), r = await this.setInitialCursorPosition(e, "latest");
    return console.log(`Installing new block filter (${e}) with initial cursor position:`, r), this.pendingTransactionFilters.add(e), this.setFilterTimeout(e), (0, mt.hexStringFromIntNumber)(e);
  }
  uninstallFilter(e) {
    const r = (0, mt.intNumberFromHexString)(e);
    return console.log(`Uninstalling filter (${r})`), this.deleteFilter(r), !0;
  }
  getFilterChanges(e) {
    const r = (0, mt.intNumberFromHexString)(e);
    return this.timeouts.has(r) && this.setFilterTimeout(r), this.logFilters.has(r) ? this.getLogFilterChanges(r) : this.blockFilters.has(r) ? this.getBlockFilterChanges(r) : this.pendingTransactionFilters.has(r) ? this.getPendingTransactionFilterChanges(r) : Promise.resolve(As());
  }
  async getFilterLogs(e) {
    const r = (0, mt.intNumberFromHexString)(e), n = this.logFilters.get(r);
    return n ? this.sendAsyncPromise(Object.assign(Object.assign({}, rn), { method: "eth_getLogs", params: [tf(n)] })) : As();
  }
  makeFilterId() {
    return (0, zn.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(e) {
    return new Promise((r, n) => {
      this.provider.sendAsync(e, (i, s) => {
        if (i)
          return n(i);
        if (Array.isArray(s) || s == null)
          return n(new Error(`unexpected response received: ${JSON.stringify(s)}`));
        r(s);
      });
    });
  }
  deleteFilter(e) {
    console.log(`Deleting filter (${e})`), this.logFilters.delete(e), this.blockFilters.delete(e), this.pendingTransactionFilters.delete(e), this.cursors.delete(e), this.timeouts.delete(e);
  }
  async getLogFilterChanges(e) {
    const r = this.logFilters.get(e), n = this.cursors.get(e);
    if (!n || !r)
      return As();
    const i = await this.getCurrentBlockHeight(), s = r.toBlock === "latest" ? i : r.toBlock;
    if (n > i || n > r.toBlock)
      return ks();
    console.log(`Fetching logs from ${n} to ${s} for filter ${e}`);
    const o = await this.sendAsyncPromise(Object.assign(Object.assign({}, rn), { method: "eth_getLogs", params: [
      tf(Object.assign(Object.assign({}, r), { fromBlock: n, toBlock: s }))
    ] }));
    if (Array.isArray(o.result)) {
      const a = o.result.map((l) => (0, mt.intNumberFromHexString)(l.blockNumber || "0x0")), u = Math.max(...a);
      if (u && u > n) {
        const l = (0, zn.IntNumber)(u + 1);
        console.log(`Moving cursor position for filter (${e}) from ${n} to ${l}`), this.cursors.set(e, l);
      }
    }
    return o;
  }
  async getBlockFilterChanges(e) {
    const r = this.cursors.get(e);
    if (!r)
      return As();
    const n = await this.getCurrentBlockHeight();
    if (r > n)
      return ks();
    console.log(`Fetching blocks from ${r} to ${n} for filter (${e})`);
    const i = (await Promise.all(
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      (0, mt.range)(r, n + 1).map((o) => this.getBlockHashByNumber((0, zn.IntNumber)(o)))
    )).filter((o) => !!o), s = (0, zn.IntNumber)(r + i.length);
    return console.log(`Moving cursor position for filter (${e}) from ${r} to ${s}`), this.cursors.set(e, s), Object.assign(Object.assign({}, rn), { result: i });
  }
  async getPendingTransactionFilterChanges(e) {
    return Promise.resolve(ks());
  }
  async setInitialCursorPosition(e, r) {
    const n = await this.getCurrentBlockHeight(), i = typeof r == "number" && r > n ? r : n;
    return this.cursors.set(e, i), i;
  }
  setFilterTimeout(e) {
    const r = this.timeouts.get(e);
    r && window.clearTimeout(r);
    const n = window.setTimeout(() => {
      console.log(`Filter (${e}) timed out`), this.deleteFilter(e);
    }, s1);
    this.timeouts.set(e, n);
  }
  async getCurrentBlockHeight() {
    const { result: e } = await this.sendAsyncPromise(Object.assign(Object.assign({}, rn), { method: "eth_blockNumber", params: [] }));
    return (0, mt.intNumberFromHexString)((0, mt.ensureHexString)(e));
  }
  async getBlockHashByNumber(e) {
    const r = await this.sendAsyncPromise(Object.assign(Object.assign({}, rn), { method: "eth_getBlockByNumber", params: [(0, mt.hexStringFromIntNumber)(e), !1] }));
    return r.result && typeof r.result.hash == "string" ? (0, mt.ensureHexString)(r.result.hash) : null;
  }
}
si.FilterPolyfill = o1;
function Hd(t) {
  return {
    fromBlock: rf(t.fromBlock),
    toBlock: rf(t.toBlock),
    addresses: t.address === void 0 ? null : Array.isArray(t.address) ? t.address : [t.address],
    topics: t.topics || []
  };
}
si.filterFromParam = Hd;
function tf(t) {
  const e = {
    fromBlock: nf(t.fromBlock),
    toBlock: nf(t.toBlock),
    topics: t.topics
  };
  return t.addresses !== null && (e.address = t.addresses), e;
}
function rf(t) {
  if (t === void 0 || t === "latest" || t === "pending")
    return "latest";
  if (t === "earliest")
    return (0, zn.IntNumber)(0);
  if ((0, mt.isHexString)(t))
    return (0, mt.intNumberFromHexString)(t);
  throw new Error(`Invalid block option: ${String(t)}`);
}
function nf(t) {
  return t === "latest" ? t : (0, mt.hexStringFromIntNumber)(t);
}
function As() {
  return Object.assign(Object.assign({}, rn), { error: { code: -32e3, message: "filter not found" } });
}
function ks() {
  return Object.assign(Object.assign({}, rn), { result: [] });
}
var Vd = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.JSONRPCMethod = void 0, function(e) {
    e.eth_accounts = "eth_accounts", e.eth_coinbase = "eth_coinbase", e.net_version = "net_version", e.eth_chainId = "eth_chainId", e.eth_uninstallFilter = "eth_uninstallFilter", e.eth_requestAccounts = "eth_requestAccounts", e.eth_sign = "eth_sign", e.eth_ecRecover = "eth_ecRecover", e.personal_sign = "personal_sign", e.personal_ecRecover = "personal_ecRecover", e.eth_signTransaction = "eth_signTransaction", e.eth_sendRawTransaction = "eth_sendRawTransaction", e.eth_sendTransaction = "eth_sendTransaction", e.eth_signTypedData_v1 = "eth_signTypedData_v1", e.eth_signTypedData_v2 = "eth_signTypedData_v2", e.eth_signTypedData_v3 = "eth_signTypedData_v3", e.eth_signTypedData_v4 = "eth_signTypedData_v4", e.eth_signTypedData = "eth_signTypedData", e.cbWallet_arbitrary = "walletlink_arbitrary", e.wallet_addEthereumChain = "wallet_addEthereumChain", e.wallet_switchEthereumChain = "wallet_switchEthereumChain", e.wallet_watchAsset = "wallet_watchAsset", e.eth_subscribe = "eth_subscribe", e.eth_unsubscribe = "eth_unsubscribe", e.eth_newFilter = "eth_newFilter", e.eth_newBlockFilter = "eth_newBlockFilter", e.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter", e.eth_getFilterChanges = "eth_getFilterChanges", e.eth_getFilterLogs = "eth_getFilterLogs";
  }(t.JSONRPCMethod || (t.JSONRPCMethod = {}));
})(Vd);
var Ro = {}, Ud = {}, Io = {}, oc = a1;
function a1(t) {
  t = t || {};
  var e = t.max || Number.MAX_SAFE_INTEGER, r = typeof t.start < "u" ? t.start : Math.floor(Math.random() * e);
  return function() {
    return r = r % e, r++;
  };
}
const sf = (t, e) => function() {
  const r = e.promiseModule, n = new Array(arguments.length);
  for (let i = 0; i < arguments.length; i++)
    n[i] = arguments[i];
  return new r((i, s) => {
    e.errorFirst ? n.push(function(o, a) {
      if (e.multiArgs) {
        const u = new Array(arguments.length - 1);
        for (let l = 1; l < arguments.length; l++)
          u[l - 1] = arguments[l];
        o ? (u.unshift(o), s(u)) : i(u);
      } else
        o ? s(o) : i(a);
    }) : n.push(function(o) {
      if (e.multiArgs) {
        const a = new Array(arguments.length - 1);
        for (let u = 0; u < arguments.length; u++)
          a[u] = arguments[u];
        i(a);
      } else
        i(o);
    }), t.apply(this, n);
  });
};
var u1 = (t, e) => {
  e = Object.assign({
    exclude: [/.+(Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise
  }, e);
  const r = (i) => {
    const s = (o) => typeof o == "string" ? i === o : o.test(i);
    return e.include ? e.include.some(s) : !e.exclude.some(s);
  };
  let n;
  typeof t == "function" ? n = function() {
    return e.excludeMain ? t.apply(this, arguments) : sf(t, e).apply(this, arguments);
  } : n = Object.create(Object.getPrototypeOf(t));
  for (const i in t) {
    const s = t[i];
    n[i] = typeof s == "function" && r(i) ? sf(s, e) : s;
  }
  return n;
}, cs = {}, c1 = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(cs, "__esModule", { value: !0 });
cs.BaseBlockTracker = void 0;
const l1 = c1(vn), f1 = 1e3, h1 = (t, e) => t + e, of = ["sync", "latest"];
class d1 extends l1.default {
  constructor(e) {
    super(), this._blockResetDuration = e.blockResetDuration || 20 * f1, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents();
  }
  async destroy() {
    this._cancelBlockResetTimeout(), await this._maybeEnd(), super.removeAllListeners();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock ? this._currentBlock : await new Promise((r) => this.once("latest", r));
  }
  // dont allow module consumer to remove our internal event listeners
  removeAllListeners(e) {
    return e ? super.removeAllListeners(e) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener(), this;
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(e) {
    of.includes(e) && this._maybeStart();
  }
  _onRemoveListener() {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  async _maybeStart() {
    this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), await this._start(), this.emit("_started"));
  }
  async _maybeEnd() {
    this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), await this._end(), this.emit("_ended"));
  }
  _getBlockTrackerEventCount() {
    return of.map((e) => this.listenerCount(e)).reduce(h1);
  }
  _newPotentialLatest(e) {
    const r = this._currentBlock;
    r && af(e) <= af(r) || this._setCurrentBlock(e);
  }
  _setCurrentBlock(e) {
    const r = this._currentBlock;
    this._currentBlock = e, this.emit("latest", e), this.emit("sync", { oldBlock: r, newBlock: e });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref();
  }
  _cancelBlockResetTimeout() {
    this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
}
cs.BaseBlockTracker = d1;
function af(t) {
  return Number.parseInt(t, 16);
}
var zd = {}, qd = {}, pt = {};
class Gd extends TypeError {
  constructor(e, r) {
    let n;
    const { message: i, explanation: s, ...o } = e, { path: a } = e, u = a.length === 0 ? i : `At path: ${a.join(".")} -- ${i}`;
    super(s ?? u), s != null && (this.cause = u), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => n ?? (n = [e, ...r()]);
  }
}
function p1(t) {
  return Bt(t) && typeof t[Symbol.iterator] == "function";
}
function Bt(t) {
  return typeof t == "object" && t != null;
}
function uf(t) {
  if (Object.prototype.toString.call(t) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
function st(t) {
  return typeof t == "symbol" ? t.toString() : typeof t == "string" ? JSON.stringify(t) : `${t}`;
}
function g1(t) {
  const { done: e, value: r } = t.next();
  return e ? void 0 : r;
}
function b1(t, e, r, n) {
  if (t === !0)
    return;
  t === !1 ? t = {} : typeof t == "string" && (t = { message: t });
  const { path: i, branch: s } = e, { type: o } = r, { refinement: a, message: u = `Expected a value of type \`${o}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${st(n)}\`` } = t;
  return {
    value: n,
    type: o,
    refinement: a,
    key: i[i.length - 1],
    path: i,
    branch: s,
    ...t,
    message: u
  };
}
function* Ru(t, e, r, n) {
  p1(t) || (t = [t]);
  for (const i of t) {
    const s = b1(i, e, r, n);
    s && (yield s);
  }
}
function* ac(t, e, r = {}) {
  const { path: n = [], branch: i = [t], coerce: s = !1, mask: o = !1 } = r, a = { path: n, branch: i };
  if (s && (t = e.coercer(t, a), o && e.type !== "type" && Bt(e.schema) && Bt(t) && !Array.isArray(t)))
    for (const l in t)
      e.schema[l] === void 0 && delete t[l];
  let u = "valid";
  for (const l of e.validator(t, a))
    l.explanation = r.message, u = "not_valid", yield [l, void 0];
  for (let [l, h, p] of e.entries(t, a)) {
    const b = ac(h, p, {
      path: l === void 0 ? n : [...n, l],
      branch: l === void 0 ? i : [...i, h],
      coerce: s,
      mask: o,
      message: r.message
    });
    for (const S of b)
      S[0] ? (u = S[0].refinement != null ? "not_refined" : "not_valid", yield [S[0], void 0]) : s && (h = S[1], l === void 0 ? t = h : t instanceof Map ? t.set(l, h) : t instanceof Set ? t.add(h) : Bt(t) && (h !== void 0 || l in t) && (t[l] = h));
  }
  if (u !== "not_valid")
    for (const l of e.refiner(t, a))
      l.explanation = r.message, u = "not_refined", yield [l, void 0];
  u === "valid" && (yield [void 0, t]);
}
class rt {
  constructor(e) {
    const { type: r, schema: n, validator: i, refiner: s, coercer: o = (u) => u, entries: a = function* () {
    } } = e;
    this.type = r, this.schema = n, this.entries = a, this.coercer = o, i ? this.validator = (u, l) => {
      const h = i(u, l);
      return Ru(h, l, this, u);
    } : this.validator = () => [], s ? this.refiner = (u, l) => {
      const h = s(u, l);
      return Ru(h, l, this, u);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(e, r) {
    return Jd(e, this, r);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(e, r) {
    return Zd(e, this, r);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(e) {
    return uc(e, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(e, r) {
    return Qd(e, this, r);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(e, r = {}) {
    return Ei(e, this, r);
  }
}
function Jd(t, e, r) {
  const n = Ei(t, e, { message: r });
  if (n[0])
    throw n[0];
}
function Zd(t, e, r) {
  const n = Ei(t, e, { coerce: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function Qd(t, e, r) {
  const n = Ei(t, e, { coerce: !0, mask: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function uc(t, e) {
  return !Ei(t, e)[0];
}
function Ei(t, e, r = {}) {
  const n = ac(t, e, r), i = g1(n);
  return i[0] ? [new Gd(i[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, i[1]];
}
function v1(...t) {
  const e = t[0].type === "type", r = t.map((i) => i.schema), n = Object.assign({}, ...r);
  return e ? lc(n) : ls(n);
}
function Mt(t, e) {
  return new rt({ type: t, schema: null, validator: e });
}
function y1(t, e) {
  return new rt({
    ...t,
    refiner: (r, n) => r === void 0 || t.refiner(r, n),
    validator(r, n) {
      return r === void 0 ? !0 : (e(r, n), t.validator(r, n));
    }
  });
}
function m1(t) {
  return new rt({
    type: "dynamic",
    schema: null,
    *entries(e, r) {
      yield* t(e, r).entries(e, r);
    },
    validator(e, r) {
      return t(e, r).validator(e, r);
    },
    coercer(e, r) {
      return t(e, r).coercer(e, r);
    },
    refiner(e, r) {
      return t(e, r).refiner(e, r);
    }
  });
}
function _1(t) {
  let e;
  return new rt({
    type: "lazy",
    schema: null,
    *entries(r, n) {
      e ?? (e = t()), yield* e.entries(r, n);
    },
    validator(r, n) {
      return e ?? (e = t()), e.validator(r, n);
    },
    coercer(r, n) {
      return e ?? (e = t()), e.coercer(r, n);
    },
    refiner(r, n) {
      return e ?? (e = t()), e.refiner(r, n);
    }
  });
}
function w1(t, e) {
  const { schema: r } = t, n = { ...r };
  for (const i of e)
    delete n[i];
  switch (t.type) {
    case "type":
      return lc(n);
    default:
      return ls(n);
  }
}
function S1(t) {
  const e = t instanceof rt ? { ...t.schema } : { ...t };
  for (const r in e)
    e[r] = Yd(e[r]);
  return ls(e);
}
function E1(t, e) {
  const { schema: r } = t, n = {};
  for (const i of e)
    n[i] = r[i];
  return ls(n);
}
function x1(t, e) {
  return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), Mt(t, e);
}
function M1() {
  return Mt("any", () => !0);
}
function C1(t) {
  return new rt({
    type: "array",
    schema: t,
    *entries(e) {
      if (t && Array.isArray(e))
        for (const [r, n] of e.entries())
          yield [r, n, t];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || `Expected an array value, but received: ${st(e)}`;
    }
  });
}
function R1() {
  return Mt("bigint", (t) => typeof t == "bigint");
}
function I1() {
  return Mt("boolean", (t) => typeof t == "boolean");
}
function A1() {
  return Mt("date", (t) => t instanceof Date && !isNaN(t.getTime()) || `Expected a valid \`Date\` object, but received: ${st(t)}`);
}
function k1(t) {
  const e = {}, r = t.map((n) => st(n)).join();
  for (const n of t)
    e[n] = n;
  return new rt({
    type: "enums",
    schema: e,
    validator(n) {
      return t.includes(n) || `Expected one of \`${r}\`, but received: ${st(n)}`;
    }
  });
}
function T1() {
  return Mt("func", (t) => typeof t == "function" || `Expected a function, but received: ${st(t)}`);
}
function O1(t) {
  return Mt("instance", (e) => e instanceof t || `Expected a \`${t.name}\` instance, but received: ${st(e)}`);
}
function N1() {
  return Mt("integer", (t) => typeof t == "number" && !isNaN(t) && Number.isInteger(t) || `Expected an integer, but received: ${st(t)}`);
}
function L1(t) {
  return new rt({
    type: "intersection",
    schema: null,
    *entries(e, r) {
      for (const n of t)
        yield* n.entries(e, r);
    },
    *validator(e, r) {
      for (const n of t)
        yield* n.validator(e, r);
    },
    *refiner(e, r) {
      for (const n of t)
        yield* n.refiner(e, r);
    }
  });
}
function P1(t) {
  const e = st(t), r = typeof t;
  return new rt({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? t : null,
    validator(n) {
      return n === t || `Expected the literal \`${e}\`, but received: ${st(n)}`;
    }
  });
}
function $1(t, e) {
  return new rt({
    type: "map",
    schema: null,
    *entries(r) {
      if (t && e && r instanceof Map)
        for (const [n, i] of r.entries())
          yield [n, n, t], yield [n, i, e];
    },
    coercer(r) {
      return r instanceof Map ? new Map(r) : r;
    },
    validator(r) {
      return r instanceof Map || `Expected a \`Map\` object, but received: ${st(r)}`;
    }
  });
}
function cc() {
  return Mt("never", () => !1);
}
function D1(t) {
  return new rt({
    ...t,
    validator: (e, r) => e === null || t.validator(e, r),
    refiner: (e, r) => e === null || t.refiner(e, r)
  });
}
function B1() {
  return Mt("number", (t) => typeof t == "number" && !isNaN(t) || `Expected a number, but received: ${st(t)}`);
}
function ls(t) {
  const e = t ? Object.keys(t) : [], r = cc();
  return new rt({
    type: "object",
    schema: t || null,
    *entries(n) {
      if (t && Bt(n)) {
        const i = new Set(Object.keys(n));
        for (const s of e)
          i.delete(s), yield [s, n[s], t[s]];
        for (const s of i)
          yield [s, n[s], r];
      }
    },
    validator(n) {
      return Bt(n) || `Expected an object, but received: ${st(n)}`;
    },
    coercer(n) {
      return Bt(n) ? { ...n } : n;
    }
  });
}
function Yd(t) {
  return new rt({
    ...t,
    validator: (e, r) => e === void 0 || t.validator(e, r),
    refiner: (e, r) => e === void 0 || t.refiner(e, r)
  });
}
function j1(t, e) {
  return new rt({
    type: "record",
    schema: null,
    *entries(r) {
      if (Bt(r))
        for (const n in r) {
          const i = r[n];
          yield [n, n, t], yield [n, i, e];
        }
    },
    validator(r) {
      return Bt(r) || `Expected an object, but received: ${st(r)}`;
    }
  });
}
function F1() {
  return Mt("regexp", (t) => t instanceof RegExp);
}
function W1(t) {
  return new rt({
    type: "set",
    schema: null,
    *entries(e) {
      if (t && e instanceof Set)
        for (const r of e)
          yield [r, r, t];
    },
    coercer(e) {
      return e instanceof Set ? new Set(e) : e;
    },
    validator(e) {
      return e instanceof Set || `Expected a \`Set\` object, but received: ${st(e)}`;
    }
  });
}
function Kd() {
  return Mt("string", (t) => typeof t == "string" || `Expected a string, but received: ${st(t)}`);
}
function H1(t) {
  const e = cc();
  return new rt({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(t.length, r.length);
        for (let i = 0; i < n; i++)
          yield [i, r[i], t[i] || e];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${st(r)}`;
    }
  });
}
function lc(t) {
  const e = Object.keys(t);
  return new rt({
    type: "type",
    schema: t,
    *entries(r) {
      if (Bt(r))
        for (const n of e)
          yield [n, r[n], t[n]];
    },
    validator(r) {
      return Bt(r) || `Expected an object, but received: ${st(r)}`;
    },
    coercer(r) {
      return Bt(r) ? { ...r } : r;
    }
  });
}
function V1(t) {
  const e = t.map((r) => r.type).join(" | ");
  return new rt({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of t) {
        const [i, s] = n.validate(r, { coerce: !0 });
        if (!i)
          return s;
      }
      return r;
    },
    validator(r, n) {
      const i = [];
      for (const s of t) {
        const [...o] = ac(r, s, n), [a] = o;
        if (a[0])
          for (const [u] of o)
            u && i.push(u);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${e}\`, but received: ${st(r)}`,
        ...i
      ];
    }
  });
}
function Xd() {
  return Mt("unknown", () => !0);
}
function fc(t, e, r) {
  return new rt({
    ...t,
    coercer: (n, i) => uc(n, e) ? t.coercer(r(n, i), i) : t.coercer(n, i)
  });
}
function U1(t, e, r = {}) {
  return fc(t, Xd(), (n) => {
    const i = typeof e == "function" ? e() : e;
    if (n === void 0)
      return i;
    if (!r.strict && uf(n) && uf(i)) {
      const s = { ...n };
      let o = !1;
      for (const a in i)
        s[a] === void 0 && (s[a] = i[a], o = !0);
      if (o)
        return s;
    }
    return n;
  });
}
function z1(t) {
  return fc(t, Kd(), (e) => e.trim());
}
function q1(t) {
  return Sn(t, "empty", (e) => {
    const r = ep(e);
    return r === 0 || `Expected an empty ${t.type} but received one with a size of \`${r}\``;
  });
}
function ep(t) {
  return t instanceof Map || t instanceof Set ? t.size : t.length;
}
function G1(t, e, r = {}) {
  const { exclusive: n } = r;
  return Sn(t, "max", (i) => n ? i < e : i <= e || `Expected a ${t.type} less than ${n ? "" : "or equal to "}${e} but received \`${i}\``);
}
function J1(t, e, r = {}) {
  const { exclusive: n } = r;
  return Sn(t, "min", (i) => n ? i > e : i >= e || `Expected a ${t.type} greater than ${n ? "" : "or equal to "}${e} but received \`${i}\``);
}
function Z1(t) {
  return Sn(t, "nonempty", (e) => ep(e) > 0 || `Expected a nonempty ${t.type} but received an empty one`);
}
function Q1(t, e) {
  return Sn(t, "pattern", (r) => e.test(r) || `Expected a ${t.type} matching \`/${e.source}/\` but received "${r}"`);
}
function Y1(t, e, r = e) {
  const n = `Expected a ${t.type}`, i = e === r ? `of \`${e}\`` : `between \`${e}\` and \`${r}\``;
  return Sn(t, "size", (s) => {
    if (typeof s == "number" || s instanceof Date)
      return e <= s && s <= r || `${n} ${i} but received \`${s}\``;
    if (s instanceof Map || s instanceof Set) {
      const { size: o } = s;
      return e <= o && o <= r || `${n} with a size ${i} but received one with a size of \`${o}\``;
    } else {
      const { length: o } = s;
      return e <= o && o <= r || `${n} with a length ${i} but received one with a length of \`${o}\``;
    }
  });
}
function Sn(t, e, r) {
  return new rt({
    ...t,
    *refiner(n, i) {
      yield* t.refiner(n, i);
      const s = r(n, i), o = Ru(s, i, t, n);
      for (const a of o)
        yield { ...a, refinement: e };
    }
  });
}
const K1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Struct: rt,
  StructError: Gd,
  any: M1,
  array: C1,
  assert: Jd,
  assign: v1,
  bigint: R1,
  boolean: I1,
  coerce: fc,
  create: Zd,
  date: A1,
  defaulted: U1,
  define: Mt,
  deprecated: y1,
  dynamic: m1,
  empty: q1,
  enums: k1,
  func: T1,
  instance: O1,
  integer: N1,
  intersection: L1,
  is: uc,
  lazy: _1,
  literal: P1,
  map: $1,
  mask: Qd,
  max: G1,
  min: J1,
  never: cc,
  nonempty: Z1,
  nullable: D1,
  number: B1,
  object: ls,
  omit: w1,
  optional: Yd,
  partial: S1,
  pattern: Q1,
  pick: E1,
  record: j1,
  refine: Sn,
  regexp: F1,
  set: W1,
  size: Y1,
  string: Kd,
  struct: x1,
  trimmed: z1,
  tuple: H1,
  type: lc,
  union: V1,
  unknown: Xd,
  validate: Ei
}, Symbol.toStringTag, { value: "Module" })), En = /* @__PURE__ */ bn(K1);
Object.defineProperty(pt, "__esModule", { value: !0 });
pt.assertExhaustive = pt.assertStruct = pt.assert = pt.AssertionError = void 0;
const X1 = En;
function e_(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function t_(t) {
  var e, r;
  return typeof ((r = (e = t == null ? void 0 : t.prototype) === null || e === void 0 ? void 0 : e.constructor) === null || r === void 0 ? void 0 : r.name) == "string";
}
function r_(t) {
  const e = e_(t) ? t.message : String(t);
  return e.endsWith(".") ? e.slice(0, -1) : e;
}
function tp(t, e) {
  return t_(t) ? new t({
    message: e
  }) : t({
    message: e
  });
}
class hc extends Error {
  constructor(e) {
    super(e.message), this.code = "ERR_ASSERTION";
  }
}
pt.AssertionError = hc;
function n_(t, e = "Assertion failed.", r = hc) {
  if (!t)
    throw e instanceof Error ? e : tp(r, e);
}
pt.assert = n_;
function i_(t, e, r = "Assertion failed", n = hc) {
  try {
    (0, X1.assert)(t, e);
  } catch (i) {
    throw tp(n, `${r}: ${r_(i)}.`);
  }
}
pt.assertStruct = i_;
function s_(t) {
  throw new Error("Invalid branch reached. Should be detected during compilation.");
}
pt.assertExhaustive = s_;
var fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
fs.base64 = void 0;
const o_ = En, a_ = pt, u_ = (t, e = {}) => {
  var r, n;
  const i = (r = e.paddingRequired) !== null && r !== void 0 ? r : !1, s = (n = e.characterSet) !== null && n !== void 0 ? n : "base64";
  let o;
  s === "base64" ? o = String.raw`[A-Za-z0-9+\/]` : ((0, a_.assert)(s === "base64url"), o = String.raw`[-_A-Za-z0-9]`);
  let a;
  return i ? a = new RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`, "u") : a = new RegExp(`^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`, "u"), (0, o_.pattern)(t, a);
};
fs.base64 = u_;
var he = {}, hs = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.remove0x = t.add0x = t.assertIsStrictHexString = t.assertIsHexString = t.isStrictHexString = t.isHexString = t.StrictHexStruct = t.HexStruct = void 0;
  const e = En, r = pt;
  t.HexStruct = (0, e.pattern)((0, e.string)(), /^(?:0x)?[0-9a-f]+$/iu), t.StrictHexStruct = (0, e.pattern)((0, e.string)(), /^0x[0-9a-f]+$/iu);
  function n(l) {
    return (0, e.is)(l, t.HexStruct);
  }
  t.isHexString = n;
  function i(l) {
    return (0, e.is)(l, t.StrictHexStruct);
  }
  t.isStrictHexString = i;
  function s(l) {
    (0, r.assert)(n(l), "Value must be a hexadecimal string.");
  }
  t.assertIsHexString = s;
  function o(l) {
    (0, r.assert)(i(l), 'Value must be a hexadecimal string, starting with "0x".');
  }
  t.assertIsStrictHexString = o;
  function a(l) {
    return l.startsWith("0x") ? l : l.startsWith("0X") ? `0x${l.substring(2)}` : `0x${l}`;
  }
  t.add0x = a;
  function u(l) {
    return l.startsWith("0x") || l.startsWith("0X") ? l.substring(2) : l;
  }
  t.remove0x = u;
})(hs);
Object.defineProperty(he, "__esModule", { value: !0 });
he.createDataView = he.concatBytes = he.valueToBytes = he.stringToBytes = he.numberToBytes = he.signedBigIntToBytes = he.bigIntToBytes = he.hexToBytes = he.bytesToString = he.bytesToNumber = he.bytesToSignedBigInt = he.bytesToBigInt = he.bytesToHex = he.assertIsBytes = he.isBytes = void 0;
const It = pt, Iu = hs, cf = 48, lf = 58, ff = 87;
function c_() {
  const t = [];
  return () => {
    if (t.length === 0)
      for (let e = 0; e < 256; e++)
        t.push(e.toString(16).padStart(2, "0"));
    return t;
  };
}
const l_ = c_();
function dc(t) {
  return t instanceof Uint8Array;
}
he.isBytes = dc;
function xi(t) {
  (0, It.assert)(dc(t), "Value must be a Uint8Array.");
}
he.assertIsBytes = xi;
function rp(t) {
  if (xi(t), t.length === 0)
    return "0x";
  const e = l_(), r = new Array(t.length);
  for (let n = 0; n < t.length; n++)
    r[n] = e[t[n]];
  return (0, Iu.add0x)(r.join(""));
}
he.bytesToHex = rp;
function np(t) {
  xi(t);
  const e = rp(t);
  return BigInt(e);
}
he.bytesToBigInt = np;
function f_(t) {
  xi(t);
  let e = BigInt(0);
  for (const r of t)
    e = (e << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(t.length * 8, e);
}
he.bytesToSignedBigInt = f_;
function h_(t) {
  xi(t);
  const e = np(t);
  return (0, It.assert)(e <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(e);
}
he.bytesToNumber = h_;
function d_(t) {
  return xi(t), new TextDecoder().decode(t);
}
he.bytesToString = d_;
function Ao(t) {
  var e;
  if (((e = t == null ? void 0 : t.toLowerCase) === null || e === void 0 ? void 0 : e.call(t)) === "0x")
    return new Uint8Array();
  (0, Iu.assertIsHexString)(t);
  const r = (0, Iu.remove0x)(t).toLowerCase(), n = r.length % 2 === 0 ? r : `0${r}`, i = new Uint8Array(n.length / 2);
  for (let s = 0; s < i.length; s++) {
    const o = n.charCodeAt(s * 2), a = n.charCodeAt(s * 2 + 1), u = o - (o < lf ? cf : ff), l = a - (a < lf ? cf : ff);
    i[s] = u * 16 + l;
  }
  return i;
}
he.hexToBytes = Ao;
function ip(t) {
  (0, It.assert)(typeof t == "bigint", "Value must be a bigint."), (0, It.assert)(t >= BigInt(0), "Value must be a non-negative bigint.");
  const e = t.toString(16);
  return Ao(e);
}
he.bigIntToBytes = ip;
function p_(t, e) {
  (0, It.assert)(e > 0);
  const r = t >> BigInt(31);
  return !((~t & r) + (t & ~r) >> BigInt(e * 8 + -1));
}
function g_(t, e) {
  (0, It.assert)(typeof t == "bigint", "Value must be a bigint."), (0, It.assert)(typeof e == "number", "Byte length must be a number."), (0, It.assert)(e > 0, "Byte length must be greater than 0."), (0, It.assert)(p_(t, e), "Byte length is too small to represent the given value.");
  let r = t;
  const n = new Uint8Array(e);
  for (let i = 0; i < n.length; i++)
    n[i] = Number(BigInt.asUintN(8, r)), r >>= BigInt(8);
  return n.reverse();
}
he.signedBigIntToBytes = g_;
function sp(t) {
  (0, It.assert)(typeof t == "number", "Value must be a number."), (0, It.assert)(t >= 0, "Value must be a non-negative number."), (0, It.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `bigIntToBytes` instead.");
  const e = t.toString(16);
  return Ao(e);
}
he.numberToBytes = sp;
function op(t) {
  return (0, It.assert)(typeof t == "string", "Value must be a string."), new TextEncoder().encode(t);
}
he.stringToBytes = op;
function ap(t) {
  if (typeof t == "bigint")
    return ip(t);
  if (typeof t == "number")
    return sp(t);
  if (typeof t == "string")
    return t.startsWith("0x") ? Ao(t) : op(t);
  if (dc(t))
    return t;
  throw new TypeError(`Unsupported value type: "${typeof t}".`);
}
he.valueToBytes = ap;
function b_(t) {
  const e = new Array(t.length);
  let r = 0;
  for (let i = 0; i < t.length; i++) {
    const s = ap(t[i]);
    e[i] = s, r += s.length;
  }
  const n = new Uint8Array(r);
  for (let i = 0, s = 0; i < e.length; i++)
    n.set(e[i], s), s += e[i].length;
  return n;
}
he.concatBytes = b_;
function v_(t) {
  if (typeof Buffer < "u" && t instanceof Buffer) {
    const e = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
    return new DataView(e);
  }
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
he.createDataView = v_;
var ko = {};
Object.defineProperty(ko, "__esModule", { value: !0 });
ko.ChecksumStruct = void 0;
const hf = En, y_ = fs;
ko.ChecksumStruct = (0, hf.size)((0, y_.base64)((0, hf.string)(), { paddingRequired: !0 }), 44, 44);
var sr = {};
Object.defineProperty(sr, "__esModule", { value: !0 });
sr.createHex = sr.createBytes = sr.createBigInt = sr.createNumber = void 0;
const Ye = En, m_ = pt, up = he, To = hs, cp = (0, Ye.union)([(0, Ye.number)(), (0, Ye.bigint)(), (0, Ye.string)(), To.StrictHexStruct]), __ = (0, Ye.coerce)((0, Ye.number)(), cp, Number), w_ = (0, Ye.coerce)((0, Ye.bigint)(), cp, BigInt);
(0, Ye.union)([To.StrictHexStruct, (0, Ye.instance)(Uint8Array)]);
const S_ = (0, Ye.coerce)((0, Ye.instance)(Uint8Array), (0, Ye.union)([To.StrictHexStruct]), up.hexToBytes), E_ = (0, Ye.coerce)(To.StrictHexStruct, (0, Ye.instance)(Uint8Array), up.bytesToHex);
function x_(t) {
  try {
    const e = (0, Ye.create)(t, __);
    return (0, m_.assert)(Number.isFinite(e), `Expected a number-like value, got "${t}".`), e;
  } catch (e) {
    throw e instanceof Ye.StructError ? new Error(`Expected a number-like value, got "${t}".`) : e;
  }
}
sr.createNumber = x_;
function M_(t) {
  try {
    return (0, Ye.create)(t, w_);
  } catch (e) {
    throw e instanceof Ye.StructError ? new Error(`Expected a number-like value, got "${String(e.value)}".`) : e;
  }
}
sr.createBigInt = M_;
function C_(t) {
  if (typeof t == "string" && t.toLowerCase() === "0x")
    return new Uint8Array();
  try {
    return (0, Ye.create)(t, S_);
  } catch (e) {
    throw e instanceof Ye.StructError ? new Error(`Expected a bytes-like value, got "${String(e.value)}".`) : e;
  }
}
sr.createBytes = C_;
function R_(t) {
  if (t instanceof Uint8Array && t.length === 0 || typeof t == "string" && t.toLowerCase() === "0x")
    return "0x";
  try {
    return (0, Ye.create)(t, E_);
  } catch (e) {
    throw e instanceof Ye.StructError ? new Error(`Expected a bytes-like value, got "${String(e.value)}".`) : e;
  }
}
sr.createHex = R_;
var oi = {}, lp = J && J.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, _t = J && J.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Wt, Kt;
Object.defineProperty(oi, "__esModule", { value: !0 });
oi.FrozenSet = oi.FrozenMap = void 0;
class pc {
  constructor(e) {
    Wt.set(this, void 0), lp(this, Wt, new Map(e), "f"), Object.freeze(this);
  }
  get size() {
    return _t(this, Wt, "f").size;
  }
  [(Wt = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return _t(this, Wt, "f")[Symbol.iterator]();
  }
  entries() {
    return _t(this, Wt, "f").entries();
  }
  forEach(e, r) {
    return _t(this, Wt, "f").forEach((n, i, s) => e.call(r, n, i, this));
  }
  get(e) {
    return _t(this, Wt, "f").get(e);
  }
  has(e) {
    return _t(this, Wt, "f").has(e);
  }
  keys() {
    return _t(this, Wt, "f").keys();
  }
  values() {
    return _t(this, Wt, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([e, r]) => `${String(e)} => ${String(r)}`).join(", ")} ` : ""}}`;
  }
}
oi.FrozenMap = pc;
class gc {
  constructor(e) {
    Kt.set(this, void 0), lp(this, Kt, new Set(e), "f"), Object.freeze(this);
  }
  get size() {
    return _t(this, Kt, "f").size;
  }
  [(Kt = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return _t(this, Kt, "f")[Symbol.iterator]();
  }
  entries() {
    return _t(this, Kt, "f").entries();
  }
  forEach(e, r) {
    return _t(this, Kt, "f").forEach((n, i, s) => e.call(r, n, i, this));
  }
  has(e) {
    return _t(this, Kt, "f").has(e);
  }
  keys() {
    return _t(this, Kt, "f").keys();
  }
  values() {
    return _t(this, Kt, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((e) => String(e)).join(", ")} ` : ""}}`;
  }
}
oi.FrozenSet = gc;
Object.freeze(pc);
Object.freeze(pc.prototype);
Object.freeze(gc);
Object.freeze(gc.prototype);
var fp = {}, bc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.calculateNumberSize = t.calculateStringSize = t.isASCII = t.isPlainObject = t.ESCAPE_CHARACTERS_REGEXP = t.JsonSize = t.hasProperty = t.isObject = t.isNullOrUndefined = t.isNonEmptyArray = void 0;
  function e(l) {
    return Array.isArray(l) && l.length > 0;
  }
  t.isNonEmptyArray = e;
  function r(l) {
    return l == null;
  }
  t.isNullOrUndefined = r;
  function n(l) {
    return !!l && typeof l == "object" && !Array.isArray(l);
  }
  t.isObject = n;
  const i = (l, h) => Object.hasOwnProperty.call(l, h);
  t.hasProperty = i, function(l) {
    l[l.Null = 4] = "Null", l[l.Comma = 1] = "Comma", l[l.Wrapper = 1] = "Wrapper", l[l.True = 4] = "True", l[l.False = 5] = "False", l[l.Quote = 1] = "Quote", l[l.Colon = 1] = "Colon", l[l.Date = 24] = "Date";
  }(t.JsonSize || (t.JsonSize = {})), t.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
  function s(l) {
    if (typeof l != "object" || l === null)
      return !1;
    try {
      let h = l;
      for (; Object.getPrototypeOf(h) !== null; )
        h = Object.getPrototypeOf(h);
      return Object.getPrototypeOf(l) === h;
    } catch {
      return !1;
    }
  }
  t.isPlainObject = s;
  function o(l) {
    return l.charCodeAt(0) <= 127;
  }
  t.isASCII = o;
  function a(l) {
    var h;
    return l.split("").reduce((b, S) => o(S) ? b + 1 : b + 2, 0) + ((h = l.match(t.ESCAPE_CHARACTERS_REGEXP)) !== null && h !== void 0 ? h : []).length;
  }
  t.calculateStringSize = a;
  function u(l) {
    return l.toString().length;
  }
  t.calculateNumberSize = u;
})(bc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.validateJsonAndGetSize = t.getJsonRpcIdValidator = t.assertIsJsonRpcError = t.isJsonRpcError = t.assertIsJsonRpcFailure = t.isJsonRpcFailure = t.assertIsJsonRpcSuccess = t.isJsonRpcSuccess = t.assertIsJsonRpcResponse = t.isJsonRpcResponse = t.assertIsPendingJsonRpcResponse = t.isPendingJsonRpcResponse = t.JsonRpcResponseStruct = t.JsonRpcFailureStruct = t.JsonRpcSuccessStruct = t.PendingJsonRpcResponseStruct = t.assertIsJsonRpcRequest = t.isJsonRpcRequest = t.assertIsJsonRpcNotification = t.isJsonRpcNotification = t.JsonRpcNotificationStruct = t.JsonRpcRequestStruct = t.JsonRpcParamsStruct = t.JsonRpcErrorStruct = t.JsonRpcIdStruct = t.JsonRpcVersionStruct = t.jsonrpc2 = t.isValidJson = t.JsonStruct = void 0;
  const e = En, r = pt, n = bc;
  t.JsonStruct = (0, e.define)("Json", (P) => {
    const [B] = $(P, !0);
    return B ? !0 : "Expected a valid JSON-serializable value";
  });
  function i(P) {
    return (0, e.is)(P, t.JsonStruct);
  }
  t.isValidJson = i, t.jsonrpc2 = "2.0", t.JsonRpcVersionStruct = (0, e.literal)(t.jsonrpc2), t.JsonRpcIdStruct = (0, e.nullable)((0, e.union)([(0, e.number)(), (0, e.string)()])), t.JsonRpcErrorStruct = (0, e.object)({
    code: (0, e.integer)(),
    message: (0, e.string)(),
    data: (0, e.optional)(t.JsonStruct),
    stack: (0, e.optional)((0, e.string)())
  }), t.JsonRpcParamsStruct = (0, e.optional)((0, e.union)([(0, e.record)((0, e.string)(), t.JsonStruct), (0, e.array)(t.JsonStruct)])), t.JsonRpcRequestStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    method: (0, e.string)(),
    params: t.JsonRpcParamsStruct
  }), t.JsonRpcNotificationStruct = (0, e.omit)(t.JsonRpcRequestStruct, ["id"]);
  function s(P) {
    return (0, e.is)(P, t.JsonRpcNotificationStruct);
  }
  t.isJsonRpcNotification = s;
  function o(P, B) {
    (0, r.assertStruct)(P, t.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", B);
  }
  t.assertIsJsonRpcNotification = o;
  function a(P) {
    return (0, e.is)(P, t.JsonRpcRequestStruct);
  }
  t.isJsonRpcRequest = a;
  function u(P, B) {
    (0, r.assertStruct)(P, t.JsonRpcRequestStruct, "Invalid JSON-RPC request", B);
  }
  t.assertIsJsonRpcRequest = u, t.PendingJsonRpcResponseStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    result: (0, e.optional)((0, e.unknown)()),
    error: (0, e.optional)(t.JsonRpcErrorStruct)
  }), t.JsonRpcSuccessStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    result: t.JsonStruct
  }), t.JsonRpcFailureStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    error: t.JsonRpcErrorStruct
  }), t.JsonRpcResponseStruct = (0, e.union)([
    t.JsonRpcSuccessStruct,
    t.JsonRpcFailureStruct
  ]);
  function l(P) {
    return (0, e.is)(P, t.PendingJsonRpcResponseStruct);
  }
  t.isPendingJsonRpcResponse = l;
  function h(P, B) {
    (0, r.assertStruct)(P, t.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", B);
  }
  t.assertIsPendingJsonRpcResponse = h;
  function p(P) {
    return (0, e.is)(P, t.JsonRpcResponseStruct);
  }
  t.isJsonRpcResponse = p;
  function b(P, B) {
    (0, r.assertStruct)(P, t.JsonRpcResponseStruct, "Invalid JSON-RPC response", B);
  }
  t.assertIsJsonRpcResponse = b;
  function S(P) {
    return (0, e.is)(P, t.JsonRpcSuccessStruct);
  }
  t.isJsonRpcSuccess = S;
  function R(P, B) {
    (0, r.assertStruct)(P, t.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", B);
  }
  t.assertIsJsonRpcSuccess = R;
  function L(P) {
    return (0, e.is)(P, t.JsonRpcFailureStruct);
  }
  t.isJsonRpcFailure = L;
  function O(P, B) {
    (0, r.assertStruct)(P, t.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", B);
  }
  t.assertIsJsonRpcFailure = O;
  function w(P) {
    return (0, e.is)(P, t.JsonRpcErrorStruct);
  }
  t.isJsonRpcError = w;
  function I(P, B) {
    (0, r.assertStruct)(P, t.JsonRpcErrorStruct, "Invalid JSON-RPC error", B);
  }
  t.assertIsJsonRpcError = I;
  function N(P) {
    const { permitEmptyString: B, permitFractions: q, permitNull: z } = Object.assign({ permitEmptyString: !0, permitFractions: !1, permitNull: !0 }, P);
    return (Z) => !!(typeof Z == "number" && (q || Number.isInteger(Z)) || typeof Z == "string" && (B || Z.length > 0) || z && Z === null);
  }
  t.getJsonRpcIdValidator = N;
  function $(P, B = !1) {
    const q = /* @__PURE__ */ new Set();
    function z(F, Z) {
      if (F === void 0)
        return [!1, 0];
      if (F === null)
        return [!0, Z ? 0 : n.JsonSize.Null];
      const K = typeof F;
      try {
        if (K === "function")
          return [!1, 0];
        if (K === "string" || F instanceof String)
          return [
            !0,
            Z ? 0 : (0, n.calculateStringSize)(F) + n.JsonSize.Quote * 2
          ];
        if (K === "boolean" || F instanceof Boolean)
          return Z ? [!0, 0] : [!0, F == !0 ? n.JsonSize.True : n.JsonSize.False];
        if (K === "number" || F instanceof Number)
          return Z ? [!0, 0] : [!0, (0, n.calculateNumberSize)(F)];
        if (F instanceof Date)
          return Z ? [!0, 0] : [
            !0,
            // Note: Invalid dates will serialize to null
            isNaN(F.getDate()) ? n.JsonSize.Null : n.JsonSize.Date + n.JsonSize.Quote * 2
          ];
      } catch {
        return [!1, 0];
      }
      if (!(0, n.isPlainObject)(F) && !Array.isArray(F))
        return [!1, 0];
      if (q.has(F))
        return [!1, 0];
      q.add(F);
      try {
        return [
          !0,
          Object.entries(F).reduce(
            (X, [v, c], d, g) => {
              let [y, _] = z(c, Z);
              if (!y)
                throw new Error("JSON validation did not pass. Validation process stopped.");
              if (q.delete(F), Z)
                return 0;
              const C = Array.isArray(F) ? 0 : v.length + n.JsonSize.Comma + n.JsonSize.Colon * 2, k = d < g.length - 1 ? n.JsonSize.Comma : 0;
              return X + C + _ + k;
            },
            // Starts at 2 because the serialized JSON string data (plain text)
            // will minimally contain {}/[]
            Z ? 0 : n.JsonSize.Wrapper * 2
          )
        ];
      } catch {
        return [!1, 0];
      }
    }
    return z(P, B);
  }
  t.validateJsonAndGetSize = $;
})(fp);
var ai = {}, Au = { exports: {} }, Va, df;
function I_() {
  if (df)
    return Va;
  df = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  Va = function(h, p) {
    p = p || {};
    var b = typeof h;
    if (b === "string" && h.length > 0)
      return o(h);
    if (b === "number" && isFinite(h))
      return p.long ? u(h) : a(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function o(h) {
    if (h = String(h), !(h.length > 100)) {
      var p = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        h
      );
      if (p) {
        var b = parseFloat(p[1]), S = (p[2] || "ms").toLowerCase();
        switch (S) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return b * s;
          case "weeks":
          case "week":
          case "w":
            return b * i;
          case "days":
          case "day":
          case "d":
            return b * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return b * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return b * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return b * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function a(h) {
    var p = Math.abs(h);
    return p >= n ? Math.round(h / n) + "d" : p >= r ? Math.round(h / r) + "h" : p >= e ? Math.round(h / e) + "m" : p >= t ? Math.round(h / t) + "s" : h + "ms";
  }
  function u(h) {
    var p = Math.abs(h);
    return p >= n ? l(h, p, n, "day") : p >= r ? l(h, p, r, "hour") : p >= e ? l(h, p, e, "minute") : p >= t ? l(h, p, t, "second") : h + " ms";
  }
  function l(h, p, b, S) {
    var R = p >= b * 1.5;
    return Math.round(h / b) + " " + S + (R ? "s" : "");
  }
  return Va;
}
function A_(t) {
  r.debug = r, r.default = r, r.coerce = u, r.disable = s, r.enable = i, r.enabled = o, r.humanize = I_(), r.destroy = l, Object.keys(t).forEach((h) => {
    r[h] = t[h];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(h) {
    let p = 0;
    for (let b = 0; b < h.length; b++)
      p = (p << 5) - p + h.charCodeAt(b), p |= 0;
    return r.colors[Math.abs(p) % r.colors.length];
  }
  r.selectColor = e;
  function r(h) {
    let p, b = null, S, R;
    function L(...O) {
      if (!L.enabled)
        return;
      const w = L, I = Number(/* @__PURE__ */ new Date()), N = I - (p || I);
      w.diff = N, w.prev = p, w.curr = I, p = I, O[0] = r.coerce(O[0]), typeof O[0] != "string" && O.unshift("%O");
      let $ = 0;
      O[0] = O[0].replace(/%([a-zA-Z%])/g, (B, q) => {
        if (B === "%%")
          return "%";
        $++;
        const z = r.formatters[q];
        if (typeof z == "function") {
          const F = O[$];
          B = z.call(w, F), O.splice($, 1), $--;
        }
        return B;
      }), r.formatArgs.call(w, O), (w.log || r.log).apply(w, O);
    }
    return L.namespace = h, L.useColors = r.useColors(), L.color = r.selectColor(h), L.extend = n, L.destroy = r.destroy, Object.defineProperty(L, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => b !== null ? b : (S !== r.namespaces && (S = r.namespaces, R = r.enabled(h)), R),
      set: (O) => {
        b = O;
      }
    }), typeof r.init == "function" && r.init(L), L;
  }
  function n(h, p) {
    const b = r(this.namespace + (typeof p > "u" ? ":" : p) + h);
    return b.log = this.log, b;
  }
  function i(h) {
    r.save(h), r.namespaces = h, r.names = [], r.skips = [];
    let p;
    const b = (typeof h == "string" ? h : "").split(/[\s,]+/), S = b.length;
    for (p = 0; p < S; p++)
      b[p] && (h = b[p].replace(/\*/g, ".*?"), h[0] === "-" ? r.skips.push(new RegExp("^" + h.slice(1) + "$")) : r.names.push(new RegExp("^" + h + "$")));
  }
  function s() {
    const h = [
      ...r.names.map(a),
      ...r.skips.map(a).map((p) => "-" + p)
    ].join(",");
    return r.enable(""), h;
  }
  function o(h) {
    if (h[h.length - 1] === "*")
      return !0;
    let p, b;
    for (p = 0, b = r.skips.length; p < b; p++)
      if (r.skips[p].test(h))
        return !1;
    for (p = 0, b = r.names.length; p < b; p++)
      if (r.names[p].test(h))
        return !0;
    return !1;
  }
  function a(h) {
    return h.toString().substring(2, h.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function u(h) {
    return h instanceof Error ? h.stack || h.message : h;
  }
  function l() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var k_ = A_;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = o(), e.destroy = /* @__PURE__ */ (() => {
    let u = !1;
    return () => {
      u || (u = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(u) {
    if (u[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + u[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const l = "color: " + this.color;
    u.splice(1, 0, l, "color: inherit");
    let h = 0, p = 0;
    u[0].replace(/%[a-zA-Z%]/g, (b) => {
      b !== "%%" && (h++, b === "%c" && (p = h));
    }), u.splice(p, 0, l);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(u) {
    try {
      u ? e.storage.setItem("debug", u) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let u;
    try {
      u = e.storage.getItem("debug");
    } catch {
    }
    return !u && typeof process < "u" && "env" in process && (u = process.env.DEBUG), u;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = k_(e);
  const { formatters: a } = t.exports;
  a.j = function(u) {
    try {
      return JSON.stringify(u);
    } catch (l) {
      return "[UnexpectedJSONParseError]: " + l.message;
    }
  };
})(Au, Au.exports);
var T_ = Au.exports, O_ = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ai, "__esModule", { value: !0 });
ai.createModuleLogger = ai.createProjectLogger = void 0;
const N_ = O_(T_), L_ = (0, N_.default)("metamask");
function P_(t) {
  return L_.extend(t);
}
ai.createProjectLogger = P_;
function $_(t, e) {
  return t.extend(e);
}
ai.createModuleLogger = $_;
var or = {};
Object.defineProperty(or, "__esModule", { value: !0 });
or.hexToBigInt = or.hexToNumber = or.bigIntToHex = or.numberToHex = void 0;
const Yn = pt, Zi = hs, D_ = (t) => ((0, Yn.assert)(typeof t == "number", "Value must be a number."), (0, Yn.assert)(t >= 0, "Value must be a non-negative number."), (0, Yn.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, Zi.add0x)(t.toString(16)));
or.numberToHex = D_;
const B_ = (t) => ((0, Yn.assert)(typeof t == "bigint", "Value must be a bigint."), (0, Yn.assert)(t >= 0, "Value must be a non-negative bigint."), (0, Zi.add0x)(t.toString(16)));
or.bigIntToHex = B_;
const j_ = (t) => {
  (0, Zi.assertIsHexString)(t);
  const e = parseInt(t, 16);
  return (0, Yn.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `hexToBigInt` instead."), e;
};
or.hexToNumber = j_;
const F_ = (t) => ((0, Zi.assertIsHexString)(t), BigInt((0, Zi.add0x)(t)));
or.hexToBigInt = F_;
var hp = {};
Object.defineProperty(hp, "__esModule", { value: !0 });
var dp = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.timeSince = t.inMilliseconds = t.Duration = void 0, function(s) {
    s[s.Millisecond = 1] = "Millisecond", s[s.Second = 1e3] = "Second", s[s.Minute = 6e4] = "Minute", s[s.Hour = 36e5] = "Hour", s[s.Day = 864e5] = "Day", s[s.Week = 6048e5] = "Week", s[s.Year = 31536e6] = "Year";
  }(t.Duration || (t.Duration = {}));
  const e = (s) => Number.isInteger(s) && s >= 0, r = (s, o) => {
    if (!e(s))
      throw new Error(`"${o}" must be a non-negative integer. Received: "${s}".`);
  };
  function n(s, o) {
    return r(s, "count"), s * o;
  }
  t.inMilliseconds = n;
  function i(s) {
    return r(s, "timestamp"), Date.now() - s;
  }
  t.timeSince = i;
})(dp);
var pp = {}, ku = { exports: {} };
const W_ = "2.0.0", gp = 256, H_ = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, V_ = 16, U_ = gp - 6, z_ = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var Oo = {
  MAX_LENGTH: gp,
  MAX_SAFE_COMPONENT_LENGTH: V_,
  MAX_SAFE_BUILD_LENGTH: U_,
  MAX_SAFE_INTEGER: H_,
  RELEASE_TYPES: z_,
  SEMVER_SPEC_VERSION: W_,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const q_ = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {
};
var No = q_;
(function(t, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: n,
    MAX_LENGTH: i
  } = Oo, s = No;
  e = t.exports = {};
  const o = e.re = [], a = e.safeRe = [], u = e.src = [], l = e.t = {};
  let h = 0;
  const p = "[a-zA-Z0-9-]", b = [
    ["\\s", 1],
    ["\\d", i],
    [p, n]
  ], S = (L) => {
    for (const [O, w] of b)
      L = L.split(`${O}*`).join(`${O}{0,${w}}`).split(`${O}+`).join(`${O}{1,${w}}`);
    return L;
  }, R = (L, O, w) => {
    const I = S(O), N = h++;
    s(L, N, O), l[L] = N, u[N] = O, o[N] = new RegExp(O, w ? "g" : void 0), a[N] = new RegExp(I, w ? "g" : void 0);
  };
  R("NUMERICIDENTIFIER", "0|[1-9]\\d*"), R("NUMERICIDENTIFIERLOOSE", "\\d+"), R("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${p}*`), R("MAINVERSION", `(${u[l.NUMERICIDENTIFIER]})\\.(${u[l.NUMERICIDENTIFIER]})\\.(${u[l.NUMERICIDENTIFIER]})`), R("MAINVERSIONLOOSE", `(${u[l.NUMERICIDENTIFIERLOOSE]})\\.(${u[l.NUMERICIDENTIFIERLOOSE]})\\.(${u[l.NUMERICIDENTIFIERLOOSE]})`), R("PRERELEASEIDENTIFIER", `(?:${u[l.NUMERICIDENTIFIER]}|${u[l.NONNUMERICIDENTIFIER]})`), R("PRERELEASEIDENTIFIERLOOSE", `(?:${u[l.NUMERICIDENTIFIERLOOSE]}|${u[l.NONNUMERICIDENTIFIER]})`), R("PRERELEASE", `(?:-(${u[l.PRERELEASEIDENTIFIER]}(?:\\.${u[l.PRERELEASEIDENTIFIER]})*))`), R("PRERELEASELOOSE", `(?:-?(${u[l.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[l.PRERELEASEIDENTIFIERLOOSE]})*))`), R("BUILDIDENTIFIER", `${p}+`), R("BUILD", `(?:\\+(${u[l.BUILDIDENTIFIER]}(?:\\.${u[l.BUILDIDENTIFIER]})*))`), R("FULLPLAIN", `v?${u[l.MAINVERSION]}${u[l.PRERELEASE]}?${u[l.BUILD]}?`), R("FULL", `^${u[l.FULLPLAIN]}$`), R("LOOSEPLAIN", `[v=\\s]*${u[l.MAINVERSIONLOOSE]}${u[l.PRERELEASELOOSE]}?${u[l.BUILD]}?`), R("LOOSE", `^${u[l.LOOSEPLAIN]}$`), R("GTLT", "((?:<|>)?=?)"), R("XRANGEIDENTIFIERLOOSE", `${u[l.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), R("XRANGEIDENTIFIER", `${u[l.NUMERICIDENTIFIER]}|x|X|\\*`), R("XRANGEPLAIN", `[v=\\s]*(${u[l.XRANGEIDENTIFIER]})(?:\\.(${u[l.XRANGEIDENTIFIER]})(?:\\.(${u[l.XRANGEIDENTIFIER]})(?:${u[l.PRERELEASE]})?${u[l.BUILD]}?)?)?`), R("XRANGEPLAINLOOSE", `[v=\\s]*(${u[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[l.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[l.XRANGEIDENTIFIERLOOSE]})(?:${u[l.PRERELEASELOOSE]})?${u[l.BUILD]}?)?)?`), R("XRANGE", `^${u[l.GTLT]}\\s*${u[l.XRANGEPLAIN]}$`), R("XRANGELOOSE", `^${u[l.GTLT]}\\s*${u[l.XRANGEPLAINLOOSE]}$`), R("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`), R("COERCERTL", u[l.COERCE], !0), R("LONETILDE", "(?:~>?)"), R("TILDETRIM", `(\\s*)${u[l.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", R("TILDE", `^${u[l.LONETILDE]}${u[l.XRANGEPLAIN]}$`), R("TILDELOOSE", `^${u[l.LONETILDE]}${u[l.XRANGEPLAINLOOSE]}$`), R("LONECARET", "(?:\\^)"), R("CARETTRIM", `(\\s*)${u[l.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", R("CARET", `^${u[l.LONECARET]}${u[l.XRANGEPLAIN]}$`), R("CARETLOOSE", `^${u[l.LONECARET]}${u[l.XRANGEPLAINLOOSE]}$`), R("COMPARATORLOOSE", `^${u[l.GTLT]}\\s*(${u[l.LOOSEPLAIN]})$|^$`), R("COMPARATOR", `^${u[l.GTLT]}\\s*(${u[l.FULLPLAIN]})$|^$`), R("COMPARATORTRIM", `(\\s*)${u[l.GTLT]}\\s*(${u[l.LOOSEPLAIN]}|${u[l.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", R("HYPHENRANGE", `^\\s*(${u[l.XRANGEPLAIN]})\\s+-\\s+(${u[l.XRANGEPLAIN]})\\s*$`), R("HYPHENRANGELOOSE", `^\\s*(${u[l.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[l.XRANGEPLAINLOOSE]})\\s*$`), R("STAR", "(<|>)?=?\\s*\\*"), R("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), R("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(ku, ku.exports);
var ds = ku.exports;
const G_ = Object.freeze({ loose: !0 }), J_ = Object.freeze({}), Z_ = (t) => t ? typeof t != "object" ? G_ : t : J_;
var vc = Z_;
const pf = /^[0-9]+$/, bp = (t, e) => {
  const r = pf.test(t), n = pf.test(e);
  return r && n && (t = +t, e = +e), t === e ? 0 : r && !n ? -1 : n && !r ? 1 : t < e ? -1 : 1;
}, Q_ = (t, e) => bp(e, t);
var vp = {
  compareIdentifiers: bp,
  rcompareIdentifiers: Q_
};
const Ts = No, { MAX_LENGTH: gf, MAX_SAFE_INTEGER: Os } = Oo, { safeRe: bf, t: vf } = ds, Y_ = vc, { compareIdentifiers: jn } = vp;
let K_ = class er {
  constructor(e, r) {
    if (r = Y_(r), e instanceof er) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > gf)
      throw new TypeError(
        `version is longer than ${gf} characters`
      );
    Ts("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const n = e.trim().match(r.loose ? bf[vf.LOOSE] : bf[vf.FULL]);
    if (!n)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Os || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Os || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Os || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map((i) => {
      if (/^[0-9]+$/.test(i)) {
        const s = +i;
        if (s >= 0 && s < Os)
          return s;
      }
      return i;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (Ts("SemVer.compare", this.version, this.options, e), !(e instanceof er)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new er(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof er || (e = new er(e, this.options)), jn(this.major, e.major) || jn(this.minor, e.minor) || jn(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof er || (e = new er(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let r = 0;
    do {
      const n = this.prerelease[r], i = e.prerelease[r];
      if (Ts("prerelease compare", r, n, i), n === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === i)
        continue;
      return jn(n, i);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof er || (e = new er(e, this.options));
    let r = 0;
    do {
      const n = this.build[r], i = e.build[r];
      if (Ts("prerelease compare", r, n, i), n === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === i)
        continue;
      return jn(n, i);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, r, n) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const i = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [i];
        else {
          let s = this.prerelease.length;
          for (; --s >= 0; )
            typeof this.prerelease[s] == "number" && (this.prerelease[s]++, s = -2);
          if (s === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(i);
          }
        }
        if (r) {
          let s = [r, i];
          n === !1 && (s = [r]), jn(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = s) : this.prerelease = s;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var Et = K_;
const yf = Et, X_ = (t, e, r = !1) => {
  if (t instanceof yf)
    return t;
  try {
    return new yf(t, e);
  } catch (n) {
    if (!r)
      return null;
    throw n;
  }
};
var Mi = X_;
const ew = Mi, tw = (t, e) => {
  const r = ew(t, e);
  return r ? r.version : null;
};
var rw = tw;
const nw = Mi, iw = (t, e) => {
  const r = nw(t.trim().replace(/^[=v]+/, ""), e);
  return r ? r.version : null;
};
var sw = iw;
const mf = Et, ow = (t, e, r, n, i) => {
  typeof r == "string" && (i = n, n = r, r = void 0);
  try {
    return new mf(
      t instanceof mf ? t.version : t,
      r
    ).inc(e, n, i).version;
  } catch {
    return null;
  }
};
var aw = ow;
const _f = Mi, uw = (t, e) => {
  const r = _f(t, null, !0), n = _f(e, null, !0), i = r.compare(n);
  if (i === 0)
    return null;
  const s = i > 0, o = s ? r : n, a = s ? n : r, u = !!o.prerelease.length;
  if (!!a.prerelease.length && !u)
    return !a.patch && !a.minor ? "major" : o.patch ? "patch" : o.minor ? "minor" : "major";
  const h = u ? "pre" : "";
  return r.major !== n.major ? h + "major" : r.minor !== n.minor ? h + "minor" : r.patch !== n.patch ? h + "patch" : "prerelease";
};
var cw = uw;
const lw = Et, fw = (t, e) => new lw(t, e).major;
var hw = fw;
const dw = Et, pw = (t, e) => new dw(t, e).minor;
var gw = pw;
const bw = Et, vw = (t, e) => new bw(t, e).patch;
var yw = vw;
const mw = Mi, _w = (t, e) => {
  const r = mw(t, e);
  return r && r.prerelease.length ? r.prerelease : null;
};
var ww = _w;
const wf = Et, Sw = (t, e, r) => new wf(t, r).compare(new wf(e, r));
var Jt = Sw;
const Ew = Jt, xw = (t, e, r) => Ew(e, t, r);
var Mw = xw;
const Cw = Jt, Rw = (t, e) => Cw(t, e, !0);
var Iw = Rw;
const Sf = Et, Aw = (t, e, r) => {
  const n = new Sf(t, r), i = new Sf(e, r);
  return n.compare(i) || n.compareBuild(i);
};
var yc = Aw;
const kw = yc, Tw = (t, e) => t.sort((r, n) => kw(r, n, e));
var Ow = Tw;
const Nw = yc, Lw = (t, e) => t.sort((r, n) => Nw(n, r, e));
var Pw = Lw;
const $w = Jt, Dw = (t, e, r) => $w(t, e, r) > 0;
var Lo = Dw;
const Bw = Jt, jw = (t, e, r) => Bw(t, e, r) < 0;
var mc = jw;
const Fw = Jt, Ww = (t, e, r) => Fw(t, e, r) === 0;
var yp = Ww;
const Hw = Jt, Vw = (t, e, r) => Hw(t, e, r) !== 0;
var mp = Vw;
const Uw = Jt, zw = (t, e, r) => Uw(t, e, r) >= 0;
var _c = zw;
const qw = Jt, Gw = (t, e, r) => qw(t, e, r) <= 0;
var wc = Gw;
const Jw = yp, Zw = mp, Qw = Lo, Yw = _c, Kw = mc, Xw = wc, e2 = (t, e, r, n) => {
  switch (e) {
    case "===":
      return typeof t == "object" && (t = t.version), typeof r == "object" && (r = r.version), t === r;
    case "!==":
      return typeof t == "object" && (t = t.version), typeof r == "object" && (r = r.version), t !== r;
    case "":
    case "=":
    case "==":
      return Jw(t, r, n);
    case "!=":
      return Zw(t, r, n);
    case ">":
      return Qw(t, r, n);
    case ">=":
      return Yw(t, r, n);
    case "<":
      return Kw(t, r, n);
    case "<=":
      return Xw(t, r, n);
    default:
      throw new TypeError(`Invalid operator: ${e}`);
  }
};
var _p = e2;
const t2 = Et, r2 = Mi, { safeRe: Ns, t: Ls } = ds, n2 = (t, e) => {
  if (t instanceof t2)
    return t;
  if (typeof t == "number" && (t = String(t)), typeof t != "string")
    return null;
  e = e || {};
  let r = null;
  if (!e.rtl)
    r = t.match(Ns[Ls.COERCE]);
  else {
    let n;
    for (; (n = Ns[Ls.COERCERTL].exec(t)) && (!r || r.index + r[0].length !== t.length); )
      (!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), Ns[Ls.COERCERTL].lastIndex = n.index + n[1].length + n[2].length;
    Ns[Ls.COERCERTL].lastIndex = -1;
  }
  return r === null ? null : r2(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, e);
};
var i2 = n2, Ua, Ef;
function s2() {
  return Ef || (Ef = 1, Ua = function(t) {
    t.prototype[Symbol.iterator] = function* () {
      for (let e = this.head; e; e = e.next)
        yield e.value;
    };
  }), Ua;
}
var o2 = de;
de.Node = dn;
de.create = de;
function de(t) {
  var e = this;
  if (e instanceof de || (e = new de()), e.tail = null, e.head = null, e.length = 0, t && typeof t.forEach == "function")
    t.forEach(function(i) {
      e.push(i);
    });
  else if (arguments.length > 0)
    for (var r = 0, n = arguments.length; r < n; r++)
      e.push(arguments[r]);
  return e;
}
de.prototype.removeNode = function(t) {
  if (t.list !== this)
    throw new Error("removing node which does not belong to this list");
  var e = t.next, r = t.prev;
  return e && (e.prev = r), r && (r.next = e), t === this.head && (this.head = e), t === this.tail && (this.tail = r), t.list.length--, t.next = null, t.prev = null, t.list = null, e;
};
de.prototype.unshiftNode = function(t) {
  if (t !== this.head) {
    t.list && t.list.removeNode(t);
    var e = this.head;
    t.list = this, t.next = e, e && (e.prev = t), this.head = t, this.tail || (this.tail = t), this.length++;
  }
};
de.prototype.pushNode = function(t) {
  if (t !== this.tail) {
    t.list && t.list.removeNode(t);
    var e = this.tail;
    t.list = this, t.prev = e, e && (e.next = t), this.tail = t, this.head || (this.head = t), this.length++;
  }
};
de.prototype.push = function() {
  for (var t = 0, e = arguments.length; t < e; t++)
    u2(this, arguments[t]);
  return this.length;
};
de.prototype.unshift = function() {
  for (var t = 0, e = arguments.length; t < e; t++)
    c2(this, arguments[t]);
  return this.length;
};
de.prototype.pop = function() {
  if (this.tail) {
    var t = this.tail.value;
    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, t;
  }
};
de.prototype.shift = function() {
  if (this.head) {
    var t = this.head.value;
    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, t;
  }
};
de.prototype.forEach = function(t, e) {
  e = e || this;
  for (var r = this.head, n = 0; r !== null; n++)
    t.call(e, r.value, n, this), r = r.next;
};
de.prototype.forEachReverse = function(t, e) {
  e = e || this;
  for (var r = this.tail, n = this.length - 1; r !== null; n--)
    t.call(e, r.value, n, this), r = r.prev;
};
de.prototype.get = function(t) {
  for (var e = 0, r = this.head; r !== null && e < t; e++)
    r = r.next;
  if (e === t && r !== null)
    return r.value;
};
de.prototype.getReverse = function(t) {
  for (var e = 0, r = this.tail; r !== null && e < t; e++)
    r = r.prev;
  if (e === t && r !== null)
    return r.value;
};
de.prototype.map = function(t, e) {
  e = e || this;
  for (var r = new de(), n = this.head; n !== null; )
    r.push(t.call(e, n.value, this)), n = n.next;
  return r;
};
de.prototype.mapReverse = function(t, e) {
  e = e || this;
  for (var r = new de(), n = this.tail; n !== null; )
    r.push(t.call(e, n.value, this)), n = n.prev;
  return r;
};
de.prototype.reduce = function(t, e) {
  var r, n = this.head;
  if (arguments.length > 1)
    r = e;
  else if (this.head)
    n = this.head.next, r = this.head.value;
  else
    throw new TypeError("Reduce of empty list with no initial value");
  for (var i = 0; n !== null; i++)
    r = t(r, n.value, i), n = n.next;
  return r;
};
de.prototype.reduceReverse = function(t, e) {
  var r, n = this.tail;
  if (arguments.length > 1)
    r = e;
  else if (this.tail)
    n = this.tail.prev, r = this.tail.value;
  else
    throw new TypeError("Reduce of empty list with no initial value");
  for (var i = this.length - 1; n !== null; i--)
    r = t(r, n.value, i), n = n.prev;
  return r;
};
de.prototype.toArray = function() {
  for (var t = new Array(this.length), e = 0, r = this.head; r !== null; e++)
    t[e] = r.value, r = r.next;
  return t;
};
de.prototype.toArrayReverse = function() {
  for (var t = new Array(this.length), e = 0, r = this.tail; r !== null; e++)
    t[e] = r.value, r = r.prev;
  return t;
};
de.prototype.slice = function(t, e) {
  e = e || this.length, e < 0 && (e += this.length), t = t || 0, t < 0 && (t += this.length);
  var r = new de();
  if (e < t || e < 0)
    return r;
  t < 0 && (t = 0), e > this.length && (e = this.length);
  for (var n = 0, i = this.head; i !== null && n < t; n++)
    i = i.next;
  for (; i !== null && n < e; n++, i = i.next)
    r.push(i.value);
  return r;
};
de.prototype.sliceReverse = function(t, e) {
  e = e || this.length, e < 0 && (e += this.length), t = t || 0, t < 0 && (t += this.length);
  var r = new de();
  if (e < t || e < 0)
    return r;
  t < 0 && (t = 0), e > this.length && (e = this.length);
  for (var n = this.length, i = this.tail; i !== null && n > e; n--)
    i = i.prev;
  for (; i !== null && n > t; n--, i = i.prev)
    r.push(i.value);
  return r;
};
de.prototype.splice = function(t, e, ...r) {
  t > this.length && (t = this.length - 1), t < 0 && (t = this.length + t);
  for (var n = 0, i = this.head; i !== null && n < t; n++)
    i = i.next;
  for (var s = [], n = 0; i && n < e; n++)
    s.push(i.value), i = this.removeNode(i);
  i === null && (i = this.tail), i !== this.head && i !== this.tail && (i = i.prev);
  for (var n = 0; n < r.length; n++)
    i = a2(this, i, r[n]);
  return s;
};
de.prototype.reverse = function() {
  for (var t = this.head, e = this.tail, r = t; r !== null; r = r.prev) {
    var n = r.prev;
    r.prev = r.next, r.next = n;
  }
  return this.head = e, this.tail = t, this;
};
function a2(t, e, r) {
  var n = e === t.head ? new dn(r, null, e, t) : new dn(r, e, e.next, t);
  return n.next === null && (t.tail = n), n.prev === null && (t.head = n), t.length++, n;
}
function u2(t, e) {
  t.tail = new dn(e, t.tail, null, t), t.head || (t.head = t.tail), t.length++;
}
function c2(t, e) {
  t.head = new dn(e, null, t.head, t), t.tail || (t.tail = t.head), t.length++;
}
function dn(t, e, r, n) {
  if (!(this instanceof dn))
    return new dn(t, e, r, n);
  this.list = n, this.value = t, e ? (e.next = this, this.prev = e) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null;
}
try {
  s2()(de);
} catch {
}
const l2 = o2, nn = Symbol("max"), pr = Symbol("length"), Fn = Symbol("lengthCalculator"), Hi = Symbol("allowStale"), un = Symbol("maxAge"), fr = Symbol("dispose"), xf = Symbol("noDisposeOnSet"), ut = Symbol("lruList"), Ut = Symbol("cache"), wp = Symbol("updateAgeOnGet"), za = () => 1;
class f2 {
  constructor(e) {
    if (typeof e == "number" && (e = { max: e }), e || (e = {}), e.max && (typeof e.max != "number" || e.max < 0))
      throw new TypeError("max must be a non-negative number");
    this[nn] = e.max || 1 / 0;
    const r = e.length || za;
    if (this[Fn] = typeof r != "function" ? za : r, this[Hi] = e.stale || !1, e.maxAge && typeof e.maxAge != "number")
      throw new TypeError("maxAge must be a number");
    this[un] = e.maxAge || 0, this[fr] = e.dispose, this[xf] = e.noDisposeOnSet || !1, this[wp] = e.updateAgeOnGet || !1, this.reset();
  }
  // resize the cache when the max changes.
  set max(e) {
    if (typeof e != "number" || e < 0)
      throw new TypeError("max must be a non-negative number");
    this[nn] = e || 1 / 0, Oi(this);
  }
  get max() {
    return this[nn];
  }
  set allowStale(e) {
    this[Hi] = !!e;
  }
  get allowStale() {
    return this[Hi];
  }
  set maxAge(e) {
    if (typeof e != "number")
      throw new TypeError("maxAge must be a non-negative number");
    this[un] = e, Oi(this);
  }
  get maxAge() {
    return this[un];
  }
  // resize the cache when the lengthCalculator changes.
  set lengthCalculator(e) {
    typeof e != "function" && (e = za), e !== this[Fn] && (this[Fn] = e, this[pr] = 0, this[ut].forEach((r) => {
      r.length = this[Fn](r.value, r.key), this[pr] += r.length;
    })), Oi(this);
  }
  get lengthCalculator() {
    return this[Fn];
  }
  get length() {
    return this[pr];
  }
  get itemCount() {
    return this[ut].length;
  }
  rforEach(e, r) {
    r = r || this;
    for (let n = this[ut].tail; n !== null; ) {
      const i = n.prev;
      Mf(this, e, n, r), n = i;
    }
  }
  forEach(e, r) {
    r = r || this;
    for (let n = this[ut].head; n !== null; ) {
      const i = n.next;
      Mf(this, e, n, r), n = i;
    }
  }
  keys() {
    return this[ut].toArray().map((e) => e.key);
  }
  values() {
    return this[ut].toArray().map((e) => e.value);
  }
  reset() {
    this[fr] && this[ut] && this[ut].length && this[ut].forEach((e) => this[fr](e.key, e.value)), this[Ut] = /* @__PURE__ */ new Map(), this[ut] = new l2(), this[pr] = 0;
  }
  dump() {
    return this[ut].map((e) => to(this, e) ? !1 : {
      k: e.key,
      v: e.value,
      e: e.now + (e.maxAge || 0)
    }).toArray().filter((e) => e);
  }
  dumpLru() {
    return this[ut];
  }
  set(e, r, n) {
    if (n = n || this[un], n && typeof n != "number")
      throw new TypeError("maxAge must be a number");
    const i = n ? Date.now() : 0, s = this[Fn](r, e);
    if (this[Ut].has(e)) {
      if (s > this[nn])
        return Kn(this, this[Ut].get(e)), !1;
      const u = this[Ut].get(e).value;
      return this[fr] && (this[xf] || this[fr](e, u.value)), u.now = i, u.maxAge = n, u.value = r, this[pr] += s - u.length, u.length = s, this.get(e), Oi(this), !0;
    }
    const o = new h2(e, r, s, i, n);
    return o.length > this[nn] ? (this[fr] && this[fr](e, r), !1) : (this[pr] += o.length, this[ut].unshift(o), this[Ut].set(e, this[ut].head), Oi(this), !0);
  }
  has(e) {
    if (!this[Ut].has(e))
      return !1;
    const r = this[Ut].get(e).value;
    return !to(this, r);
  }
  get(e) {
    return qa(this, e, !0);
  }
  peek(e) {
    return qa(this, e, !1);
  }
  pop() {
    const e = this[ut].tail;
    return e ? (Kn(this, e), e.value) : null;
  }
  del(e) {
    Kn(this, this[Ut].get(e));
  }
  load(e) {
    this.reset();
    const r = Date.now();
    for (let n = e.length - 1; n >= 0; n--) {
      const i = e[n], s = i.e || 0;
      if (s === 0)
        this.set(i.k, i.v);
      else {
        const o = s - r;
        o > 0 && this.set(i.k, i.v, o);
      }
    }
  }
  prune() {
    this[Ut].forEach((e, r) => qa(this, r, !1));
  }
}
const qa = (t, e, r) => {
  const n = t[Ut].get(e);
  if (n) {
    const i = n.value;
    if (to(t, i)) {
      if (Kn(t, n), !t[Hi])
        return;
    } else
      r && (t[wp] && (n.value.now = Date.now()), t[ut].unshiftNode(n));
    return i.value;
  }
}, to = (t, e) => {
  if (!e || !e.maxAge && !t[un])
    return !1;
  const r = Date.now() - e.now;
  return e.maxAge ? r > e.maxAge : t[un] && r > t[un];
}, Oi = (t) => {
  if (t[pr] > t[nn])
    for (let e = t[ut].tail; t[pr] > t[nn] && e !== null; ) {
      const r = e.prev;
      Kn(t, e), e = r;
    }
}, Kn = (t, e) => {
  if (e) {
    const r = e.value;
    t[fr] && t[fr](r.key, r.value), t[pr] -= r.length, t[Ut].delete(r.key), t[ut].removeNode(e);
  }
};
class h2 {
  constructor(e, r, n, i, s) {
    this.key = e, this.value = r, this.length = n, this.now = i, this.maxAge = s || 0;
  }
}
const Mf = (t, e, r, n) => {
  let i = r.value;
  to(t, i) && (Kn(t, r), t[Hi] || (i = void 0)), i && e.call(n, i.value, i.key, t);
};
var d2 = f2, Ga, Cf;
function Zt() {
  if (Cf)
    return Ga;
  Cf = 1;
  class t {
    constructor(c, d) {
      if (d = n(d), c instanceof t)
        return c.loose === !!d.loose && c.includePrerelease === !!d.includePrerelease ? c : new t(c.raw, d);
      if (c instanceof i)
        return this.raw = c.value, this.set = [[c]], this.format(), this;
      if (this.options = d, this.loose = !!d.loose, this.includePrerelease = !!d.includePrerelease, this.raw = c.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map((g) => this.parseRange(g.trim())).filter((g) => g.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const g = this.set[0];
        if (this.set = this.set.filter((y) => !R(y[0])), this.set.length === 0)
          this.set = [g];
        else if (this.set.length > 1) {
          for (const y of this.set)
            if (y.length === 1 && L(y[0])) {
              this.set = [y];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return this.range = this.set.map((c) => c.join(" ").trim()).join("||").trim(), this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(c) {
      const g = ((this.options.includePrerelease && b) | (this.options.loose && S)) + ":" + c, y = r.get(g);
      if (y)
        return y;
      const _ = this.options.loose, C = _ ? a[u.HYPHENRANGELOOSE] : a[u.HYPHENRANGE];
      c = c.replace(C, K(this.options.includePrerelease)), s("hyphen replace", c), c = c.replace(a[u.COMPARATORTRIM], l), s("comparator trim", c), c = c.replace(a[u.TILDETRIM], h), s("tilde trim", c), c = c.replace(a[u.CARETTRIM], p), s("caret trim", c);
      let k = c.split(" ").map((U) => w(U, this.options)).join(" ").split(/\s+/).map((U) => Z(U, this.options));
      _ && (k = k.filter((U) => (s("loose invalid filter", U, this.options), !!U.match(a[u.COMPARATORLOOSE])))), s("range list", k);
      const m = /* @__PURE__ */ new Map(), f = k.map((U) => new i(U, this.options));
      for (const U of f) {
        if (R(U))
          return [U];
        m.set(U.value, U);
      }
      m.size > 1 && m.has("") && m.delete("");
      const M = [...m.values()];
      return r.set(g, M), M;
    }
    intersects(c, d) {
      if (!(c instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((g) => O(g, d) && c.set.some((y) => O(y, d) && g.every((_) => y.every((C) => _.intersects(C, d)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(c) {
      if (!c)
        return !1;
      if (typeof c == "string")
        try {
          c = new o(c, this.options);
        } catch {
          return !1;
        }
      for (let d = 0; d < this.set.length; d++)
        if (X(this.set[d], c, this.options))
          return !0;
      return !1;
    }
  }
  Ga = t;
  const e = d2, r = new e({ max: 1e3 }), n = vc, i = Po(), s = No, o = Et, {
    safeRe: a,
    t: u,
    comparatorTrimReplace: l,
    tildeTrimReplace: h,
    caretTrimReplace: p
  } = ds, { FLAG_INCLUDE_PRERELEASE: b, FLAG_LOOSE: S } = Oo, R = (v) => v.value === "<0.0.0-0", L = (v) => v.value === "", O = (v, c) => {
    let d = !0;
    const g = v.slice();
    let y = g.pop();
    for (; d && g.length; )
      d = g.every((_) => y.intersects(_, c)), y = g.pop();
    return d;
  }, w = (v, c) => (s("comp", v, c), v = P(v, c), s("caret", v), v = N(v, c), s("tildes", v), v = q(v, c), s("xrange", v), v = F(v, c), s("stars", v), v), I = (v) => !v || v.toLowerCase() === "x" || v === "*", N = (v, c) => v.trim().split(/\s+/).map((d) => $(d, c)).join(" "), $ = (v, c) => {
    const d = c.loose ? a[u.TILDELOOSE] : a[u.TILDE];
    return v.replace(d, (g, y, _, C, k) => {
      s("tilde", v, g, y, _, C, k);
      let m;
      return I(y) ? m = "" : I(_) ? m = `>=${y}.0.0 <${+y + 1}.0.0-0` : I(C) ? m = `>=${y}.${_}.0 <${y}.${+_ + 1}.0-0` : k ? (s("replaceTilde pr", k), m = `>=${y}.${_}.${C}-${k} <${y}.${+_ + 1}.0-0`) : m = `>=${y}.${_}.${C} <${y}.${+_ + 1}.0-0`, s("tilde return", m), m;
    });
  }, P = (v, c) => v.trim().split(/\s+/).map((d) => B(d, c)).join(" "), B = (v, c) => {
    s("caret", v, c);
    const d = c.loose ? a[u.CARETLOOSE] : a[u.CARET], g = c.includePrerelease ? "-0" : "";
    return v.replace(d, (y, _, C, k, m) => {
      s("caret", v, y, _, C, k, m);
      let f;
      return I(_) ? f = "" : I(C) ? f = `>=${_}.0.0${g} <${+_ + 1}.0.0-0` : I(k) ? _ === "0" ? f = `>=${_}.${C}.0${g} <${_}.${+C + 1}.0-0` : f = `>=${_}.${C}.0${g} <${+_ + 1}.0.0-0` : m ? (s("replaceCaret pr", m), _ === "0" ? C === "0" ? f = `>=${_}.${C}.${k}-${m} <${_}.${C}.${+k + 1}-0` : f = `>=${_}.${C}.${k}-${m} <${_}.${+C + 1}.0-0` : f = `>=${_}.${C}.${k}-${m} <${+_ + 1}.0.0-0`) : (s("no pr"), _ === "0" ? C === "0" ? f = `>=${_}.${C}.${k}${g} <${_}.${C}.${+k + 1}-0` : f = `>=${_}.${C}.${k}${g} <${_}.${+C + 1}.0-0` : f = `>=${_}.${C}.${k} <${+_ + 1}.0.0-0`), s("caret return", f), f;
    });
  }, q = (v, c) => (s("replaceXRanges", v, c), v.split(/\s+/).map((d) => z(d, c)).join(" ")), z = (v, c) => {
    v = v.trim();
    const d = c.loose ? a[u.XRANGELOOSE] : a[u.XRANGE];
    return v.replace(d, (g, y, _, C, k, m) => {
      s("xRange", v, g, y, _, C, k, m);
      const f = I(_), M = f || I(C), U = M || I(k), G = U;
      return y === "=" && G && (y = ""), m = c.includePrerelease ? "-0" : "", f ? y === ">" || y === "<" ? g = "<0.0.0-0" : g = "*" : y && G ? (M && (C = 0), k = 0, y === ">" ? (y = ">=", M ? (_ = +_ + 1, C = 0, k = 0) : (C = +C + 1, k = 0)) : y === "<=" && (y = "<", M ? _ = +_ + 1 : C = +C + 1), y === "<" && (m = "-0"), g = `${y + _}.${C}.${k}${m}`) : M ? g = `>=${_}.0.0${m} <${+_ + 1}.0.0-0` : U && (g = `>=${_}.${C}.0${m} <${_}.${+C + 1}.0-0`), s("xRange return", g), g;
    });
  }, F = (v, c) => (s("replaceStars", v, c), v.trim().replace(a[u.STAR], "")), Z = (v, c) => (s("replaceGTE0", v, c), v.trim().replace(a[c.includePrerelease ? u.GTE0PRE : u.GTE0], "")), K = (v) => (c, d, g, y, _, C, k, m, f, M, U, G, A) => (I(g) ? d = "" : I(y) ? d = `>=${g}.0.0${v ? "-0" : ""}` : I(_) ? d = `>=${g}.${y}.0${v ? "-0" : ""}` : C ? d = `>=${d}` : d = `>=${d}${v ? "-0" : ""}`, I(f) ? m = "" : I(M) ? m = `<${+f + 1}.0.0-0` : I(U) ? m = `<${f}.${+M + 1}.0-0` : G ? m = `<=${f}.${M}.${U}-${G}` : v ? m = `<${f}.${M}.${+U + 1}-0` : m = `<=${m}`, `${d} ${m}`.trim()), X = (v, c, d) => {
    for (let g = 0; g < v.length; g++)
      if (!v[g].test(c))
        return !1;
    if (c.prerelease.length && !d.includePrerelease) {
      for (let g = 0; g < v.length; g++)
        if (s(v[g].semver), v[g].semver !== i.ANY && v[g].semver.prerelease.length > 0) {
          const y = v[g].semver;
          if (y.major === c.major && y.minor === c.minor && y.patch === c.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return Ga;
}
var Ja, Rf;
function Po() {
  if (Rf)
    return Ja;
  Rf = 1;
  const t = Symbol("SemVer ANY");
  class e {
    static get ANY() {
      return t;
    }
    constructor(h, p) {
      if (p = r(p), h instanceof e) {
        if (h.loose === !!p.loose)
          return h;
        h = h.value;
      }
      h = h.trim().split(/\s+/).join(" "), o("comparator", h, p), this.options = p, this.loose = !!p.loose, this.parse(h), this.semver === t ? this.value = "" : this.value = this.operator + this.semver.version, o("comp", this);
    }
    parse(h) {
      const p = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR], b = h.match(p);
      if (!b)
        throw new TypeError(`Invalid comparator: ${h}`);
      this.operator = b[1] !== void 0 ? b[1] : "", this.operator === "=" && (this.operator = ""), b[2] ? this.semver = new a(b[2], this.options.loose) : this.semver = t;
    }
    toString() {
      return this.value;
    }
    test(h) {
      if (o("Comparator.test", h, this.options.loose), this.semver === t || h === t)
        return !0;
      if (typeof h == "string")
        try {
          h = new a(h, this.options);
        } catch {
          return !1;
        }
      return s(h, this.operator, this.semver, this.options);
    }
    intersects(h, p) {
      if (!(h instanceof e))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new u(h.value, p).test(this.value) : h.operator === "" ? h.value === "" ? !0 : new u(this.value, p).test(h.semver) : (p = r(p), p.includePrerelease && (this.value === "<0.0.0-0" || h.value === "<0.0.0-0") || !p.includePrerelease && (this.value.startsWith("<0.0.0") || h.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && h.operator.startsWith(">") || this.operator.startsWith("<") && h.operator.startsWith("<") || this.semver.version === h.semver.version && this.operator.includes("=") && h.operator.includes("=") || s(this.semver, "<", h.semver, p) && this.operator.startsWith(">") && h.operator.startsWith("<") || s(this.semver, ">", h.semver, p) && this.operator.startsWith("<") && h.operator.startsWith(">")));
    }
  }
  Ja = e;
  const r = vc, { safeRe: n, t: i } = ds, s = _p, o = No, a = Et, u = Zt();
  return Ja;
}
const p2 = Zt(), g2 = (t, e, r) => {
  try {
    e = new p2(e, r);
  } catch {
    return !1;
  }
  return e.test(t);
};
var $o = g2;
const b2 = Zt(), v2 = (t, e) => new b2(t, e).set.map((r) => r.map((n) => n.value).join(" ").trim().split(" "));
var y2 = v2;
const m2 = Et, _2 = Zt(), w2 = (t, e, r) => {
  let n = null, i = null, s = null;
  try {
    s = new _2(e, r);
  } catch {
    return null;
  }
  return t.forEach((o) => {
    s.test(o) && (!n || i.compare(o) === -1) && (n = o, i = new m2(n, r));
  }), n;
};
var S2 = w2;
const E2 = Et, x2 = Zt(), M2 = (t, e, r) => {
  let n = null, i = null, s = null;
  try {
    s = new x2(e, r);
  } catch {
    return null;
  }
  return t.forEach((o) => {
    s.test(o) && (!n || i.compare(o) === 1) && (n = o, i = new E2(n, r));
  }), n;
};
var C2 = M2;
const Za = Et, R2 = Zt(), If = Lo, I2 = (t, e) => {
  t = new R2(t, e);
  let r = new Za("0.0.0");
  if (t.test(r) || (r = new Za("0.0.0-0"), t.test(r)))
    return r;
  r = null;
  for (let n = 0; n < t.set.length; ++n) {
    const i = t.set[n];
    let s = null;
    i.forEach((o) => {
      const a = new Za(o.semver.version);
      switch (o.operator) {
        case ">":
          a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
        case "":
        case ">=":
          (!s || If(a, s)) && (s = a);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${o.operator}`);
      }
    }), s && (!r || If(r, s)) && (r = s);
  }
  return r && t.test(r) ? r : null;
};
var A2 = I2;
const k2 = Zt(), T2 = (t, e) => {
  try {
    return new k2(t, e).range || "*";
  } catch {
    return null;
  }
};
var O2 = T2;
const N2 = Et, Sp = Po(), { ANY: L2 } = Sp, P2 = Zt(), $2 = $o, Af = Lo, kf = mc, D2 = wc, B2 = _c, j2 = (t, e, r, n) => {
  t = new N2(t, n), e = new P2(e, n);
  let i, s, o, a, u;
  switch (r) {
    case ">":
      i = Af, s = D2, o = kf, a = ">", u = ">=";
      break;
    case "<":
      i = kf, s = B2, o = Af, a = "<", u = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if ($2(t, e, n))
    return !1;
  for (let l = 0; l < e.set.length; ++l) {
    const h = e.set[l];
    let p = null, b = null;
    if (h.forEach((S) => {
      S.semver === L2 && (S = new Sp(">=0.0.0")), p = p || S, b = b || S, i(S.semver, p.semver, n) ? p = S : o(S.semver, b.semver, n) && (b = S);
    }), p.operator === a || p.operator === u || (!b.operator || b.operator === a) && s(t, b.semver))
      return !1;
    if (b.operator === u && o(t, b.semver))
      return !1;
  }
  return !0;
};
var Sc = j2;
const F2 = Sc, W2 = (t, e, r) => F2(t, e, ">", r);
var H2 = W2;
const V2 = Sc, U2 = (t, e, r) => V2(t, e, "<", r);
var z2 = U2;
const Tf = Zt(), q2 = (t, e, r) => (t = new Tf(t, r), e = new Tf(e, r), t.intersects(e, r));
var G2 = q2;
const J2 = $o, Z2 = Jt;
var Q2 = (t, e, r) => {
  const n = [];
  let i = null, s = null;
  const o = t.sort((h, p) => Z2(h, p, r));
  for (const h of o)
    J2(h, e, r) ? (s = h, i || (i = h)) : (s && n.push([i, s]), s = null, i = null);
  i && n.push([i, null]);
  const a = [];
  for (const [h, p] of n)
    h === p ? a.push(h) : !p && h === o[0] ? a.push("*") : p ? h === o[0] ? a.push(`<=${p}`) : a.push(`${h} - ${p}`) : a.push(`>=${h}`);
  const u = a.join(" || "), l = typeof e.raw == "string" ? e.raw : String(e);
  return u.length < l.length ? u : e;
};
const Of = Zt(), Ec = Po(), { ANY: Qa } = Ec, Ni = $o, xc = Jt, Y2 = (t, e, r = {}) => {
  if (t === e)
    return !0;
  t = new Of(t, r), e = new Of(e, r);
  let n = !1;
  e:
    for (const i of t.set) {
      for (const s of e.set) {
        const o = X2(i, s, r);
        if (n = n || o !== null, o)
          continue e;
      }
      if (n)
        return !1;
    }
  return !0;
}, K2 = [new Ec(">=0.0.0-0")], Nf = [new Ec(">=0.0.0")], X2 = (t, e, r) => {
  if (t === e)
    return !0;
  if (t.length === 1 && t[0].semver === Qa) {
    if (e.length === 1 && e[0].semver === Qa)
      return !0;
    r.includePrerelease ? t = K2 : t = Nf;
  }
  if (e.length === 1 && e[0].semver === Qa) {
    if (r.includePrerelease)
      return !0;
    e = Nf;
  }
  const n = /* @__PURE__ */ new Set();
  let i, s;
  for (const S of t)
    S.operator === ">" || S.operator === ">=" ? i = Lf(i, S, r) : S.operator === "<" || S.operator === "<=" ? s = Pf(s, S, r) : n.add(S.semver);
  if (n.size > 1)
    return null;
  let o;
  if (i && s) {
    if (o = xc(i.semver, s.semver, r), o > 0)
      return null;
    if (o === 0 && (i.operator !== ">=" || s.operator !== "<="))
      return null;
  }
  for (const S of n) {
    if (i && !Ni(S, String(i), r) || s && !Ni(S, String(s), r))
      return null;
    for (const R of e)
      if (!Ni(S, String(R), r))
        return !1;
    return !0;
  }
  let a, u, l, h, p = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1, b = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
  p && p.prerelease.length === 1 && s.operator === "<" && p.prerelease[0] === 0 && (p = !1);
  for (const S of e) {
    if (h = h || S.operator === ">" || S.operator === ">=", l = l || S.operator === "<" || S.operator === "<=", i) {
      if (b && S.semver.prerelease && S.semver.prerelease.length && S.semver.major === b.major && S.semver.minor === b.minor && S.semver.patch === b.patch && (b = !1), S.operator === ">" || S.operator === ">=") {
        if (a = Lf(i, S, r), a === S && a !== i)
          return !1;
      } else if (i.operator === ">=" && !Ni(i.semver, String(S), r))
        return !1;
    }
    if (s) {
      if (p && S.semver.prerelease && S.semver.prerelease.length && S.semver.major === p.major && S.semver.minor === p.minor && S.semver.patch === p.patch && (p = !1), S.operator === "<" || S.operator === "<=") {
        if (u = Pf(s, S, r), u === S && u !== s)
          return !1;
      } else if (s.operator === "<=" && !Ni(s.semver, String(S), r))
        return !1;
    }
    if (!S.operator && (s || i) && o !== 0)
      return !1;
  }
  return !(i && l && !s && o !== 0 || s && h && !i && o !== 0 || b || p);
}, Lf = (t, e, r) => {
  if (!t)
    return e;
  const n = xc(t.semver, e.semver, r);
  return n > 0 ? t : n < 0 || e.operator === ">" && t.operator === ">=" ? e : t;
}, Pf = (t, e, r) => {
  if (!t)
    return e;
  const n = xc(t.semver, e.semver, r);
  return n < 0 ? t : n > 0 || e.operator === "<" && t.operator === "<=" ? e : t;
};
var eS = Y2;
const Ya = ds, $f = Oo, tS = Et, Df = vp, rS = Mi, nS = rw, iS = sw, sS = aw, oS = cw, aS = hw, uS = gw, cS = yw, lS = ww, fS = Jt, hS = Mw, dS = Iw, pS = yc, gS = Ow, bS = Pw, vS = Lo, yS = mc, mS = yp, _S = mp, wS = _c, SS = wc, ES = _p, xS = i2, MS = Po(), CS = Zt(), RS = $o, IS = y2, AS = S2, kS = C2, TS = A2, OS = O2, NS = Sc, LS = H2, PS = z2, $S = G2, DS = Q2, BS = eS;
var jS = {
  parse: rS,
  valid: nS,
  clean: iS,
  inc: sS,
  diff: oS,
  major: aS,
  minor: uS,
  patch: cS,
  prerelease: lS,
  compare: fS,
  rcompare: hS,
  compareLoose: dS,
  compareBuild: pS,
  sort: gS,
  rsort: bS,
  gt: vS,
  lt: yS,
  eq: mS,
  neq: _S,
  gte: wS,
  lte: SS,
  cmp: ES,
  coerce: xS,
  Comparator: MS,
  Range: CS,
  satisfies: RS,
  toComparators: IS,
  maxSatisfying: AS,
  minSatisfying: kS,
  minVersion: TS,
  validRange: OS,
  outside: NS,
  gtr: LS,
  ltr: PS,
  intersects: $S,
  simplifyRange: DS,
  subset: BS,
  SemVer: tS,
  re: Ya.re,
  src: Ya.src,
  tokens: Ya.t,
  SEMVER_SPEC_VERSION: $f.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: $f.RELEASE_TYPES,
  compareIdentifiers: Df.compareIdentifiers,
  rcompareIdentifiers: Df.rcompareIdentifiers
};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.satisfiesVersionRange = t.gtRange = t.gtVersion = t.assertIsSemVerRange = t.assertIsSemVerVersion = t.isValidSemVerRange = t.isValidSemVerVersion = t.VersionRangeStruct = t.VersionStruct = void 0;
  const e = jS, r = En, n = pt;
  t.VersionStruct = (0, r.refine)((0, r.string)(), "Version", (p) => (0, e.valid)(p) === null ? `Expected SemVer version, got "${p}"` : !0), t.VersionRangeStruct = (0, r.refine)((0, r.string)(), "Version range", (p) => (0, e.validRange)(p) === null ? `Expected SemVer range, got "${p}"` : !0);
  function i(p) {
    return (0, r.is)(p, t.VersionStruct);
  }
  t.isValidSemVerVersion = i;
  function s(p) {
    return (0, r.is)(p, t.VersionRangeStruct);
  }
  t.isValidSemVerRange = s;
  function o(p) {
    (0, n.assertStruct)(p, t.VersionStruct);
  }
  t.assertIsSemVerVersion = o;
  function a(p) {
    (0, n.assertStruct)(p, t.VersionRangeStruct);
  }
  t.assertIsSemVerRange = a;
  function u(p, b) {
    return (0, e.gt)(p, b);
  }
  t.gtVersion = u;
  function l(p, b) {
    return (0, e.gtr)(p, b);
  }
  t.gtRange = l;
  function h(p, b) {
    return (0, e.satisfies)(p, b, {
      includePrerelease: !0
    });
  }
  t.satisfiesVersionRange = h;
})(pp);
(function(t) {
  var e = J && J.__createBinding || (Object.create ? function(n, i, s, o) {
    o === void 0 && (o = s);
    var a = Object.getOwnPropertyDescriptor(i, s);
    (!a || ("get" in a ? !i.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return i[s];
    } }), Object.defineProperty(n, o, a);
  } : function(n, i, s, o) {
    o === void 0 && (o = s), n[o] = i[s];
  }), r = J && J.__exportStar || function(n, i) {
    for (var s in n)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, n, s);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(pt, t), r(fs, t), r(he, t), r(ko, t), r(sr, t), r(oi, t), r(hs, t), r(fp, t), r(ai, t), r(bc, t), r(or, t), r(hp, t), r(dp, t), r(pp, t);
})(qd);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createModuleLogger = t.projectLogger = void 0;
  const e = qd;
  Object.defineProperty(t, "createModuleLogger", { enumerable: !0, get: function() {
    return e.createModuleLogger;
  } }), t.projectLogger = (0, e.createProjectLogger)("eth-block-tracker");
})(zd);
var Ep = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Io, "__esModule", { value: !0 });
Io.PollingBlockTracker = void 0;
const FS = Ep(oc), WS = Ep(u1), HS = cs, Bf = zd, jf = (0, Bf.createModuleLogger)(Bf.projectLogger, "polling-block-tracker"), VS = (0, FS.default)(), US = 1e3;
class zS extends HS.BaseBlockTracker {
  constructor(e = {}) {
    var r;
    if (!e.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    super({
      blockResetDuration: (r = e.blockResetDuration) !== null && r !== void 0 ? r : e.pollingInterval
    }), this._provider = e.provider, this._pollingInterval = e.pollingInterval || 20 * US, this._retryTimeout = e.retryTimeout || this._pollingInterval / 10, this._keepEventLoopActive = e.keepEventLoopActive === void 0 ? !0 : e.keepEventLoopActive, this._setSkipCacheFlag = e.setSkipCacheFlag || !1;
  }
  // trigger block polling
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  async _start() {
    this._synchronize();
  }
  async _end() {
  }
  async _synchronize() {
    for (var e; this._isRunning; )
      try {
        await this._updateLatestBlock();
        const r = Ff(this._pollingInterval, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await r;
      } catch (r) {
        const n = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(e = r.stack) !== null && e !== void 0 ? e : r}`);
        try {
          this.emit("error", n);
        } catch {
          console.error(n);
        }
        const i = Ff(this._retryTimeout, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await i;
      }
  }
  async _updateLatestBlock() {
    const e = await this._fetchLatestBlock();
    this._newPotentialLatest(e);
  }
  async _fetchLatestBlock() {
    const e = {
      jsonrpc: "2.0",
      id: VS(),
      method: "eth_blockNumber",
      params: []
    };
    this._setSkipCacheFlag && (e.skipCache = !0), jf("Making request", e);
    const r = await (0, WS.default)((n) => this._provider.sendAsync(e, n))();
    if (jf("Got response", r), r.error)
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
    return r.result;
  }
}
Io.PollingBlockTracker = zS;
function Ff(t, e) {
  return new Promise((r) => {
    const n = setTimeout(r, t);
    n.unref && e && n.unref();
  });
}
var Do = {}, qS = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Do, "__esModule", { value: !0 });
Do.SubscribeBlockTracker = void 0;
const GS = qS(oc), JS = cs, ZS = (0, GS.default)();
class QS extends JS.BaseBlockTracker {
  constructor(e = {}) {
    if (!e.provider)
      throw new Error("SubscribeBlockTracker - no provider specified.");
    super(e), this._provider = e.provider, this._subscriptionId = null;
  }
  async checkForLatestBlock() {
    return await this.getLatestBlock();
  }
  async _start() {
    if (this._subscriptionId === void 0 || this._subscriptionId === null)
      try {
        const e = await this._call("eth_blockNumber");
        this._subscriptionId = await this._call("eth_subscribe", "newHeads"), this._provider.on("data", this._handleSubData.bind(this)), this._newPotentialLatest(e);
      } catch (e) {
        this.emit("error", e);
      }
  }
  async _end() {
    if (this._subscriptionId !== null && this._subscriptionId !== void 0)
      try {
        await this._call("eth_unsubscribe", this._subscriptionId), this._subscriptionId = null;
      } catch (e) {
        this.emit("error", e);
      }
  }
  _call(e, ...r) {
    return new Promise((n, i) => {
      this._provider.sendAsync({
        id: ZS(),
        method: e,
        params: r,
        jsonrpc: "2.0"
      }, (s, o) => {
        s ? i(s) : n(o.result);
      });
    });
  }
  _handleSubData(e, r) {
    var n;
    r.method === "eth_subscription" && ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) === this._subscriptionId && this._newPotentialLatest(r.params.result.number);
  }
}
Do.SubscribeBlockTracker = QS;
var xp = {};
Object.defineProperty(xp, "__esModule", { value: !0 });
(function(t) {
  var e = J && J.__createBinding || (Object.create ? function(n, i, s, o) {
    o === void 0 && (o = s), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[s];
    } });
  } : function(n, i, s, o) {
    o === void 0 && (o = s), n[o] = i[s];
  }), r = J && J.__exportStar || function(n, i) {
    for (var s in n)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, n, s);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(Io, t), r(Do, t), r(xp, t);
})(Ud);
var Mc = {}, Bo = {}, ps = {};
Object.defineProperty(ps, "__esModule", { value: !0 });
ps.getUniqueId = void 0;
const Mp = 4294967295;
let Ka = Math.floor(Math.random() * Mp);
function YS() {
  return Ka = (Ka + 1) % Mp, Ka;
}
ps.getUniqueId = YS;
Object.defineProperty(Bo, "__esModule", { value: !0 });
Bo.createIdRemapMiddleware = void 0;
const KS = ps;
function XS() {
  return (t, e, r, n) => {
    const i = t.id, s = KS.getUniqueId();
    t.id = s, e.id = s, r((o) => {
      t.id = i, e.id = i, o();
    });
  };
}
Bo.createIdRemapMiddleware = XS;
var jo = {};
Object.defineProperty(jo, "__esModule", { value: !0 });
jo.createAsyncMiddleware = void 0;
function eE(t) {
  return async (e, r, n, i) => {
    let s;
    const o = new Promise((h) => {
      s = h;
    });
    let a = null, u = !1;
    const l = async () => {
      u = !0, n((h) => {
        a = h, s();
      }), await o;
    };
    try {
      await t(e, r, l), u ? (await o, a(null)) : i(null);
    } catch (h) {
      a ? a(h) : i(h);
    }
  };
}
jo.createAsyncMiddleware = eE;
var Fo = {};
Object.defineProperty(Fo, "__esModule", { value: !0 });
Fo.createScaffoldMiddleware = void 0;
function tE(t) {
  return (e, r, n, i) => {
    const s = t[e.method];
    return s === void 0 ? n() : typeof s == "function" ? s(e, r, n, i) : (r.result = s, i());
  };
}
Fo.createScaffoldMiddleware = tE;
var gs = {}, rE = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(gs, "__esModule", { value: !0 });
gs.JsonRpcEngine = void 0;
const nE = rE(vn), Ot = qu;
class hr extends nE.default {
  constructor() {
    super(), this._middleware = [];
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push(e) {
    this._middleware.push(e);
  }
  handle(e, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(e) ? r ? this._handleBatch(e, r) : this._handleBatch(e) : r ? this._handle(e, r) : this._promiseHandle(e);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware() {
    return async (e, r, n, i) => {
      try {
        const [s, o, a] = await hr._runAllMiddleware(e, r, this._middleware);
        return o ? (await hr._runReturnHandlers(a), i(s)) : n(async (u) => {
          try {
            await hr._runReturnHandlers(a);
          } catch (l) {
            return u(l);
          }
          return u();
        });
      } catch (s) {
        return i(s);
      }
    };
  }
  async _handleBatch(e, r) {
    try {
      const n = await Promise.all(
        // 1. Begin executing each request in the order received
        e.map(this._promiseHandle.bind(this))
      );
      return r ? r(null, n) : n;
    } catch (n) {
      if (r)
        return r(n);
      throw n;
    }
  }
  /**
   * A promise-wrapped _handle.
   */
  _promiseHandle(e) {
    return new Promise((r) => {
      this._handle(e, (n, i) => {
        r(i);
      });
    });
  }
  /**
   * Ensures that the request object is valid, processes it, and passes any
   * error and the response object to the given callback.
   *
   * Does not reject.
   */
  async _handle(e, r) {
    if (!e || Array.isArray(e) || typeof e != "object") {
      const o = new Ot.EthereumRpcError(Ot.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof e}`, { request: e });
      return r(o, { id: void 0, jsonrpc: "2.0", error: o });
    }
    if (typeof e.method != "string") {
      const o = new Ot.EthereumRpcError(Ot.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof e.method}`, { request: e });
      return r(o, { id: e.id, jsonrpc: "2.0", error: o });
    }
    const n = Object.assign({}, e), i = {
      id: n.id,
      jsonrpc: n.jsonrpc
    };
    let s = null;
    try {
      await this._processRequest(n, i);
    } catch (o) {
      s = o;
    }
    return s && (delete i.result, i.error || (i.error = Ot.serializeError(s))), r(s, i);
  }
  /**
   * For the given request and response, runs all middleware and their return
   * handlers, if any, and ensures that internal request processing semantics
   * are satisfied.
   */
  async _processRequest(e, r) {
    const [n, i, s] = await hr._runAllMiddleware(e, r, this._middleware);
    if (hr._checkForCompletion(e, r, i), await hr._runReturnHandlers(s), n)
      throw n;
  }
  /**
   * Serially executes the given stack of middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * a boolean indicating whether the request was completed, and an array of
   * middleware-defined return handlers.
   */
  static async _runAllMiddleware(e, r, n) {
    const i = [];
    let s = null, o = !1;
    for (const a of n)
      if ([s, o] = await hr._runMiddleware(e, r, a, i), o)
        break;
    return [s, o, i.reverse()];
  }
  /**
   * Runs an individual middleware.
   *
   * @returns An array of any error encountered during middleware exection,
   * and a boolean indicating whether the request should end.
   */
  static _runMiddleware(e, r, n, i) {
    return new Promise((s) => {
      const o = (u) => {
        const l = u || r.error;
        l && (r.error = Ot.serializeError(l)), s([l, !0]);
      }, a = (u) => {
        r.error ? o(r.error) : (u && (typeof u != "function" && o(new Ot.EthereumRpcError(Ot.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof u}" for request:
${Xa(e)}`, { request: e })), i.push(u)), s([null, !1]));
      };
      try {
        n(e, r, a, o);
      } catch (u) {
        o(u);
      }
    });
  }
  /**
   * Serially executes array of return handlers. The request and response are
   * assumed to be in their scope.
   */
  static async _runReturnHandlers(e) {
    for (const r of e)
      await new Promise((n, i) => {
        r((s) => s ? i(s) : n());
      });
  }
  /**
   * Throws an error if the response has neither a result nor an error, or if
   * the "isComplete" flag is falsy.
   */
  static _checkForCompletion(e, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new Ot.EthereumRpcError(Ot.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${Xa(e)}`, { request: e });
    if (!n)
      throw new Ot.EthereumRpcError(Ot.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${Xa(e)}`, { request: e });
  }
}
gs.JsonRpcEngine = hr;
function Xa(t) {
  return JSON.stringify(t, null, 2);
}
var Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
Wo.mergeMiddleware = void 0;
const iE = gs;
function sE(t) {
  const e = new iE.JsonRpcEngine();
  return t.forEach((r) => e.push(r)), e.asMiddleware();
}
Wo.mergeMiddleware = sE;
(function(t) {
  var e = J && J.__createBinding || (Object.create ? function(n, i, s, o) {
    o === void 0 && (o = s), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[s];
    } });
  } : function(n, i, s, o) {
    o === void 0 && (o = s), n[o] = i[s];
  }), r = J && J.__exportStar || function(n, i) {
    for (var s in n)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, n, s);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(Bo, t), r(jo, t), r(Fo, t), r(ps, t), r(gs, t), r(Wo, t);
})(Mc);
var Cp = {}, Cc = {}, Tu = function(t, e) {
  return Tu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, Tu(t, e);
};
function Rp(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Tu(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var ro = function() {
  return ro = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, ro.apply(this, arguments);
};
function Ip(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function Ap(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, r, s) : o(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}
function kp(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function oE(t, e, r, n, i, s) {
  function o(w) {
    if (w !== void 0 && typeof w != "function")
      throw new TypeError("Function expected");
    return w;
  }
  for (var a = n.kind, u = a === "getter" ? "get" : a === "setter" ? "set" : "value", l = !e && t ? n.static ? t : t.prototype : null, h = e || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), p, b = !1, S = r.length - 1; S >= 0; S--) {
    var R = {};
    for (var L in n)
      R[L] = L === "access" ? {} : n[L];
    for (var L in n.access)
      R.access[L] = n.access[L];
    R.addInitializer = function(w) {
      if (b)
        throw new TypeError("Cannot add initializers after decoration has completed");
      s.push(o(w || null));
    };
    var O = (0, r[S])(a === "accessor" ? { get: h.get, set: h.set } : h[u], R);
    if (a === "accessor") {
      if (O === void 0)
        continue;
      if (O === null || typeof O != "object")
        throw new TypeError("Object expected");
      (p = o(O.get)) && (h.get = p), (p = o(O.set)) && (h.set = p), (p = o(O.init)) && i.unshift(p);
    } else
      (p = o(O)) && (a === "field" ? i.unshift(p) : h[u] = p);
  }
  l && Object.defineProperty(l, n.name, h), b = !0;
}
function aE(t, e, r) {
  for (var n = arguments.length > 2, i = 0; i < e.length; i++)
    r = n ? e[i].call(t, r) : e[i].call(t);
  return n ? r : void 0;
}
function uE(t) {
  return typeof t == "symbol" ? t : "".concat(t);
}
function cE(t, e, r) {
  return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", { configurable: !0, value: r ? "".concat(r, " ", e) : e });
}
function Tp(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function Op(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(h) {
      try {
        l(n.next(h));
      } catch (p) {
        o(p);
      }
    }
    function u(h) {
      try {
        l(n.throw(h));
      } catch (p) {
        o(p);
      }
    }
    function l(h) {
      h.done ? s(h.value) : i(h.value).then(a, u);
    }
    l((n = n.apply(t, e || [])).next());
  });
}
function Np(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(l) {
    return function(h) {
      return u([l, h]);
    };
  }
  function u(l) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (s = l[0] & 2 ? i.return : l[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, l[1])).done)
          return s;
        switch (i = 0, s && (l = [l[0] & 2, s.value]), l[0]) {
          case 0:
          case 1:
            s = l;
            break;
          case 4:
            return r.label++, { value: l[1], done: !1 };
          case 5:
            r.label++, i = l[1], l = [0];
            continue;
          case 7:
            l = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (l[0] === 6 || l[0] === 2)) {
              r = 0;
              continue;
            }
            if (l[0] === 3 && (!s || l[1] > s[0] && l[1] < s[3])) {
              r.label = l[1];
              break;
            }
            if (l[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = l;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(l);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        l = e.call(t, r);
      } catch (h) {
        l = [6, h], i = 0;
      } finally {
        n = s = 0;
      }
    if (l[0] & 5)
      throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var Ho = Object.create ? function(t, e, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(e, r);
  (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return e[r];
  } }), Object.defineProperty(t, n, i);
} : function(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
};
function Lp(t, e) {
  for (var r in t)
    r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && Ho(e, t, r);
}
function no(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Rc(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function Pp() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(Rc(arguments[e]));
  return t;
}
function $p() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function Dp(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function ui(t) {
  return this instanceof ui ? (this.v = t, this) : new ui(t);
}
function Bp(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(b) {
    n[b] && (i[b] = function(S) {
      return new Promise(function(R, L) {
        s.push([b, S, R, L]) > 1 || a(b, S);
      });
    });
  }
  function a(b, S) {
    try {
      u(n[b](S));
    } catch (R) {
      p(s[0][3], R);
    }
  }
  function u(b) {
    b.value instanceof ui ? Promise.resolve(b.value.v).then(l, h) : p(s[0][2], b);
  }
  function l(b) {
    a("next", b);
  }
  function h(b) {
    a("throw", b);
  }
  function p(b, S) {
    b(S), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function jp(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(i, s) {
    e[i] = t[i] ? function(o) {
      return (r = !r) ? { value: ui(t[i](o)), done: !1 } : s ? s(o) : o;
    } : s;
  }
}
function Fp(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof no == "function" ? no(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = t[s] && function(o) {
      return new Promise(function(a, u) {
        o = t[s](o), i(a, u, o.done, o.value);
      });
    };
  }
  function i(s, o, a, u) {
    Promise.resolve(u).then(function(l) {
      s({ value: l, done: a });
    }, o);
  }
}
function Wp(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var lE = Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
};
function Hp(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && Ho(e, t, r);
  return lE(e, t), e;
}
function Vp(t) {
  return t && t.__esModule ? t : { default: t };
}
function Up(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}
function zp(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}
function qp(t, e) {
  if (e === null || typeof e != "object" && typeof e != "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == "function" ? e === t : t.has(e);
}
function Gp(t, e, r) {
  if (e != null) {
    if (typeof e != "object" && typeof e != "function")
      throw new TypeError("Object expected.");
    var n;
    if (r) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      n = e[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      n = e[Symbol.dispose];
    }
    if (typeof n != "function")
      throw new TypeError("Object not disposable.");
    t.stack.push({ value: e, dispose: n, async: r });
  } else
    r && t.stack.push({ async: !0 });
  return e;
}
var fE = typeof SuppressedError == "function" ? SuppressedError : function(t, e, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = t, n.suppressed = e, n;
};
function Jp(t) {
  function e(n) {
    t.error = t.hasError ? new fE(n, t.error, "An error was suppressed during disposal.") : n, t.hasError = !0;
  }
  function r() {
    for (; t.stack.length; ) {
      var n = t.stack.pop();
      try {
        var i = n.dispose && n.dispose.call(n.value);
        if (n.async)
          return Promise.resolve(i).then(r, function(s) {
            return e(s), r();
          });
      } catch (s) {
        e(s);
      }
    }
    if (t.hasError)
      throw t.error;
  }
  return r();
}
const hE = {
  __extends: Rp,
  __assign: ro,
  __rest: Ip,
  __decorate: Ap,
  __param: kp,
  __metadata: Tp,
  __awaiter: Op,
  __generator: Np,
  __createBinding: Ho,
  __exportStar: Lp,
  __values: no,
  __read: Rc,
  __spread: Pp,
  __spreadArrays: $p,
  __spreadArray: Dp,
  __await: ui,
  __asyncGenerator: Bp,
  __asyncDelegator: jp,
  __asyncValues: Fp,
  __makeTemplateObject: Wp,
  __importStar: Hp,
  __importDefault: Vp,
  __classPrivateFieldGet: Up,
  __classPrivateFieldSet: zp,
  __classPrivateFieldIn: qp,
  __addDisposableResource: Gp,
  __disposeResources: Jp
}, dE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: Gp,
  get __assign() {
    return ro;
  },
  __asyncDelegator: jp,
  __asyncGenerator: Bp,
  __asyncValues: Fp,
  __await: ui,
  __awaiter: Op,
  __classPrivateFieldGet: Up,
  __classPrivateFieldIn: qp,
  __classPrivateFieldSet: zp,
  __createBinding: Ho,
  __decorate: Ap,
  __disposeResources: Jp,
  __esDecorate: oE,
  __exportStar: Lp,
  __extends: Rp,
  __generator: Np,
  __importDefault: Vp,
  __importStar: Hp,
  __makeTemplateObject: Wp,
  __metadata: Tp,
  __param: kp,
  __propKey: uE,
  __read: Rc,
  __rest: Ip,
  __runInitializers: aE,
  __setFunctionName: cE,
  __spread: Pp,
  __spreadArray: Dp,
  __spreadArrays: $p,
  __values: no,
  default: hE
}, Symbol.toStringTag, { value: "Module" })), Ic = /* @__PURE__ */ bn(dE);
var Vo = {};
Object.defineProperty(Vo, "__esModule", { value: !0 });
var Wf = Ic, pE = (
  /** @class */
  function() {
    function t(e) {
      if (this._maxConcurrency = e, this._queue = [], e <= 0)
        throw new Error("semaphore must be initialized to a positive value");
      this._value = e;
    }
    return t.prototype.acquire = function() {
      var e = this, r = this.isLocked(), n = new Promise(function(i) {
        return e._queue.push(i);
      });
      return r || this._dispatch(), n;
    }, t.prototype.runExclusive = function(e) {
      return Wf.__awaiter(this, void 0, void 0, function() {
        var r, n, i;
        return Wf.__generator(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this.acquire()];
            case 1:
              r = s.sent(), n = r[0], i = r[1], s.label = 2;
            case 2:
              return s.trys.push([2, , 4, 5]), [4, e(n)];
            case 3:
              return [2, s.sent()];
            case 4:
              return i(), [
                7
                /*endfinally*/
              ];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.isLocked = function() {
      return this._value <= 0;
    }, t.prototype.release = function() {
      if (this._maxConcurrency > 1)
        throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
      if (this._currentReleaser) {
        var e = this._currentReleaser;
        this._currentReleaser = void 0, e();
      }
    }, t.prototype._dispatch = function() {
      var e = this, r = this._queue.shift();
      if (r) {
        var n = !1;
        this._currentReleaser = function() {
          n || (n = !0, e._value++, e._dispatch());
        }, r([this._value--, this._currentReleaser]);
      }
    }, t;
  }()
);
Vo.default = pE;
Object.defineProperty(Cc, "__esModule", { value: !0 });
var Hf = Ic, gE = Vo, bE = (
  /** @class */
  function() {
    function t() {
      this._semaphore = new gE.default(1);
    }
    return t.prototype.acquire = function() {
      return Hf.__awaiter(this, void 0, void 0, function() {
        var e, r;
        return Hf.__generator(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this._semaphore.acquire()];
            case 1:
              return e = n.sent(), r = e[1], [2, r];
          }
        });
      });
    }, t.prototype.runExclusive = function(e) {
      return this._semaphore.runExclusive(function() {
        return e();
      });
    }, t.prototype.isLocked = function() {
      return this._semaphore.isLocked();
    }, t.prototype.release = function() {
      this._semaphore.release();
    }, t;
  }()
);
Cc.default = bE;
var Uo = {};
Object.defineProperty(Uo, "__esModule", { value: !0 });
Uo.withTimeout = void 0;
var Ps = Ic;
function vE(t, e, r) {
  var n = this;
  return r === void 0 && (r = new Error("timeout")), {
    acquire: function() {
      return new Promise(function(i, s) {
        return Ps.__awaiter(n, void 0, void 0, function() {
          var o, a, u;
          return Ps.__generator(this, function(l) {
            switch (l.label) {
              case 0:
                return o = !1, setTimeout(function() {
                  o = !0, s(r);
                }, e), [4, t.acquire()];
              case 1:
                return a = l.sent(), o ? (u = Array.isArray(a) ? a[1] : a, u()) : i(a), [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
    },
    runExclusive: function(i) {
      return Ps.__awaiter(this, void 0, void 0, function() {
        var s, o;
        return Ps.__generator(this, function(a) {
          switch (a.label) {
            case 0:
              s = function() {
              }, a.label = 1;
            case 1:
              return a.trys.push([1, , 7, 8]), [4, this.acquire()];
            case 2:
              return o = a.sent(), Array.isArray(o) ? (s = o[1], [4, i(o[0])]) : [3, 4];
            case 3:
              return [2, a.sent()];
            case 4:
              return s = o, [4, i()];
            case 5:
              return [2, a.sent()];
            case 6:
              return [3, 8];
            case 7:
              return s(), [
                7
                /*endfinally*/
              ];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    },
    release: function() {
      t.release();
    },
    isLocked: function() {
      return t.isLocked();
    }
  };
}
Uo.withTimeout = vE;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.withTimeout = t.Semaphore = t.Mutex = void 0;
  var e = Cc;
  Object.defineProperty(t, "Mutex", { enumerable: !0, get: function() {
    return e.default;
  } });
  var r = Vo;
  Object.defineProperty(t, "Semaphore", { enumerable: !0, get: function() {
    return r.default;
  } });
  var n = Uo;
  Object.defineProperty(t, "withTimeout", { enumerable: !0, get: function() {
    return n.withTimeout;
  } });
})(Cp);
var yE = _E, mE = Object.prototype.hasOwnProperty;
function _E() {
  for (var t = {}, e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      mE.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
const wE = yE, SE = oc();
var EE = ie;
function ie(t) {
  const e = this;
  e.currentProvider = t;
}
ie.prototype.getBalance = bs(2, "eth_getBalance");
ie.prototype.getCode = bs(2, "eth_getCode");
ie.prototype.getTransactionCount = bs(2, "eth_getTransactionCount");
ie.prototype.getStorageAt = bs(3, "eth_getStorageAt");
ie.prototype.call = bs(2, "eth_call");
ie.prototype.protocolVersion = ce("eth_protocolVersion");
ie.prototype.syncing = ce("eth_syncing");
ie.prototype.coinbase = ce("eth_coinbase");
ie.prototype.mining = ce("eth_mining");
ie.prototype.hashrate = ce("eth_hashrate");
ie.prototype.gasPrice = ce("eth_gasPrice");
ie.prototype.accounts = ce("eth_accounts");
ie.prototype.blockNumber = ce("eth_blockNumber");
ie.prototype.getBlockTransactionCountByHash = ce("eth_getBlockTransactionCountByHash");
ie.prototype.getBlockTransactionCountByNumber = ce("eth_getBlockTransactionCountByNumber");
ie.prototype.getUncleCountByBlockHash = ce("eth_getUncleCountByBlockHash");
ie.prototype.getUncleCountByBlockNumber = ce("eth_getUncleCountByBlockNumber");
ie.prototype.sign = ce("eth_sign");
ie.prototype.sendTransaction = ce("eth_sendTransaction");
ie.prototype.sendRawTransaction = ce("eth_sendRawTransaction");
ie.prototype.estimateGas = ce("eth_estimateGas");
ie.prototype.getBlockByHash = ce("eth_getBlockByHash");
ie.prototype.getBlockByNumber = ce("eth_getBlockByNumber");
ie.prototype.getTransactionByHash = ce("eth_getTransactionByHash");
ie.prototype.getTransactionByBlockHashAndIndex = ce("eth_getTransactionByBlockHashAndIndex");
ie.prototype.getTransactionByBlockNumberAndIndex = ce("eth_getTransactionByBlockNumberAndIndex");
ie.prototype.getTransactionReceipt = ce("eth_getTransactionReceipt");
ie.prototype.getUncleByBlockHashAndIndex = ce("eth_getUncleByBlockHashAndIndex");
ie.prototype.getUncleByBlockNumberAndIndex = ce("eth_getUncleByBlockNumberAndIndex");
ie.prototype.getCompilers = ce("eth_getCompilers");
ie.prototype.compileLLL = ce("eth_compileLLL");
ie.prototype.compileSolidity = ce("eth_compileSolidity");
ie.prototype.compileSerpent = ce("eth_compileSerpent");
ie.prototype.newFilter = ce("eth_newFilter");
ie.prototype.newBlockFilter = ce("eth_newBlockFilter");
ie.prototype.newPendingTransactionFilter = ce("eth_newPendingTransactionFilter");
ie.prototype.uninstallFilter = ce("eth_uninstallFilter");
ie.prototype.getFilterChanges = ce("eth_getFilterChanges");
ie.prototype.getFilterLogs = ce("eth_getFilterLogs");
ie.prototype.getLogs = ce("eth_getLogs");
ie.prototype.getWork = ce("eth_getWork");
ie.prototype.submitWork = ce("eth_submitWork");
ie.prototype.submitHashrate = ce("eth_submitHashrate");
ie.prototype.sendAsync = function(t, e) {
  this.currentProvider.sendAsync(xE(t), function(n, i) {
    if (!n && i.error && (n = new Error("EthQuery - RPC Error - " + i.error.message)), n)
      return e(n);
    e(null, i.result);
  });
};
function ce(t) {
  return function() {
    const e = this;
    var r = [].slice.call(arguments), n = r.pop();
    e.sendAsync({
      method: t,
      params: r
    }, n);
  };
}
function bs(t, e) {
  return function() {
    const r = this;
    var n = [].slice.call(arguments), i = n.pop();
    n.length < t && n.push("latest"), r.sendAsync({
      method: e,
      params: n
    }, i);
  };
}
function xE(t) {
  return wE({
    // defaults
    id: SE(),
    jsonrpc: "2.0",
    params: []
    // user-specified
  }, t);
}
const Vf = (t, e, r, n) => function(...i) {
  const s = e.promiseModule;
  return new s((o, a) => {
    e.multiArgs ? i.push((...l) => {
      e.errorFirst ? l[0] ? a(l) : (l.shift(), o(l)) : o(l);
    }) : e.errorFirst ? i.push((l, h) => {
      l ? a(l) : o(h);
    }) : i.push(o), Reflect.apply(t, this === r ? n : this, i);
  });
}, Uf = /* @__PURE__ */ new WeakMap();
var ME = (t, e) => {
  e = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise,
    ...e
  };
  const r = typeof t;
  if (!(t !== null && (r === "object" || r === "function")))
    throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${t === null ? "null" : r}\``);
  const n = (o, a) => {
    let u = Uf.get(o);
    if (u || (u = {}, Uf.set(o, u)), a in u)
      return u[a];
    const l = (R) => typeof R == "string" || typeof a == "symbol" ? a === R : R.test(a), h = Reflect.getOwnPropertyDescriptor(o, a), p = h === void 0 || h.writable || h.configurable, S = (e.include ? e.include.some(l) : !e.exclude.some(l)) && p;
    return u[a] = S, S;
  }, i = /* @__PURE__ */ new WeakMap(), s = new Proxy(t, {
    apply(o, a, u) {
      const l = i.get(o);
      if (l)
        return Reflect.apply(l, a, u);
      const h = e.excludeMain ? o : Vf(o, e, s, o);
      return i.set(o, h), Reflect.apply(h, a, u);
    },
    get(o, a) {
      const u = o[a];
      if (!n(o, a) || u === Function.prototype[a])
        return u;
      const l = i.get(u);
      if (l)
        return l;
      if (typeof u == "function") {
        const h = Vf(u, e, s, o);
        return i.set(u, h), h;
      }
      return u;
    }
  });
  return s;
};
const CE = vn.default;
let RE = class extends CE {
  constructor() {
    super(), this.updates = [];
  }
  async initialize() {
  }
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(e) {
    this.updates = this.updates.concat(e), e.forEach((r) => this.emit("update", r));
  }
  addInitialResults(e) {
  }
  getChangesAndClear() {
    const e = this.updates;
    return this.updates = [], e;
  }
};
var Ac = RE;
const IE = Ac;
let AE = class extends IE {
  constructor() {
    super(), this.allResults = [];
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(e) {
    this.allResults = this.allResults.concat(e), super.addResults(e);
  }
  addInitialResults(e) {
    this.allResults = this.allResults.concat(e), super.addInitialResults(e);
  }
  getAllResults() {
    return this.allResults;
  }
};
var kE = AE, vs = {
  minBlockRef: TE,
  maxBlockRef: OE,
  sortBlockRefs: kc,
  bnToHex: NE,
  blockRefIsNumber: LE,
  hexToInt: io,
  incrementHexInt: PE,
  intToHex: Zp,
  unsafeRandomBytes: $E
};
function TE(...t) {
  return kc(t)[0];
}
function OE(...t) {
  const e = kc(t);
  return e[e.length - 1];
}
function kc(t) {
  return t.sort((e, r) => e === "latest" || r === "earliest" ? 1 : r === "latest" || e === "earliest" ? -1 : io(e) - io(r));
}
function NE(t) {
  return "0x" + t.toString(16);
}
function LE(t) {
  return t && !["earliest", "latest", "pending"].includes(t);
}
function io(t) {
  return t == null ? t : Number.parseInt(t, 16);
}
function PE(t) {
  if (t == null)
    return t;
  const e = io(t);
  return Zp(e + 1);
}
function Zp(t) {
  if (t == null)
    return t;
  let e = t.toString(16);
  return e.length % 2 && (e = "0" + e), "0x" + e;
}
function $E(t) {
  let e = "0x";
  for (let r = 0; r < t; r++)
    e += zf(), e += zf();
  return e;
}
function zf() {
  return Math.floor(Math.random() * 16).toString(16);
}
const DE = EE, BE = ME, jE = kE, { bnToHex: oI, hexToInt: $s, incrementHexInt: FE, minBlockRef: WE, blockRefIsNumber: HE } = vs;
let VE = class extends jE {
  constructor({ provider: e, params: r }) {
    super(), this.type = "log", this.ethQuery = new DE(e), this.params = Object.assign({
      fromBlock: "latest",
      toBlock: "latest",
      address: void 0,
      topics: []
    }, r), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map((n) => n.toLowerCase()));
  }
  async initialize({ currentBlock: e }) {
    let r = this.params.fromBlock;
    ["latest", "pending"].includes(r) && (r = e), r === "earliest" && (r = "0x0"), this.params.fromBlock = r;
    const n = WE(this.params.toBlock, e), i = Object.assign({}, this.params, { toBlock: n }), s = await this._fetchLogs(i);
    this.addInitialResults(s);
  }
  async update({ oldBlock: e, newBlock: r }) {
    const n = r;
    let i;
    e ? i = FE(e) : i = r;
    const s = Object.assign({}, this.params, { fromBlock: i, toBlock: n }), a = (await this._fetchLogs(s)).filter((u) => this.matchLog(u));
    this.addResults(a);
  }
  async _fetchLogs(e) {
    return await BE((n) => this.ethQuery.getLogs(e, n))();
  }
  matchLog(e) {
    if ($s(this.params.fromBlock) >= $s(e.blockNumber) || HE(this.params.toBlock) && $s(this.params.toBlock) <= $s(e.blockNumber))
      return !1;
    const r = e.address && e.address.toLowerCase();
    return this.params.address && r && !this.params.address.includes(r) ? !1 : this.params.topics.every((i, s) => {
      let o = e.topics[s];
      if (!o)
        return !1;
      o = o.toLowerCase();
      let a = Array.isArray(i) ? i : [i];
      return a.includes(null) ? !0 : (a = a.map((h) => h.toLowerCase()), a.includes(o));
    });
  }
};
var UE = VE, Tc = zE;
async function zE({ provider: t, fromBlock: e, toBlock: r }) {
  e || (e = r);
  const n = qf(e), s = qf(r) - n + 1, o = Array(s).fill().map((u, l) => n + l).map(qE);
  return await Promise.all(
    o.map((u) => JE(t, "eth_getBlockByNumber", [u, !1]))
  );
}
function qf(t) {
  return t == null ? t : Number.parseInt(t, 16);
}
function qE(t) {
  return t == null ? t : "0x" + t.toString(16);
}
function GE(t, e) {
  return new Promise((r, n) => {
    t.sendAsync(e, (i, s) => {
      i ? n(i) : s.error ? n(s.error) : s.result ? r(s.result) : n(new Error("Result was empty"));
    });
  });
}
async function JE(t, e, r) {
  for (let n = 0; n < 3; n++)
    try {
      return await GE(t, {
        id: 1,
        jsonrpc: "2.0",
        method: e,
        params: r
      });
    } catch (i) {
      console.error(
        `provider.sendAsync failed: ${i.stack || i.message || i}`
      );
    }
  throw new Error(`Block not found for params: ${JSON.stringify(r)}`);
}
const ZE = Ac, QE = Tc, { incrementHexInt: YE } = vs;
let KE = class extends ZE {
  constructor({ provider: e, params: r }) {
    super(), this.type = "block", this.provider = e;
  }
  async update({ oldBlock: e, newBlock: r }) {
    const n = r, i = YE(e), o = (await QE({ provider: this.provider, fromBlock: i, toBlock: n })).map((a) => a.hash);
    this.addResults(o);
  }
};
var XE = KE;
const e3 = Ac, t3 = Tc, { incrementHexInt: r3 } = vs;
let n3 = class extends e3 {
  constructor({ provider: e }) {
    super(), this.type = "tx", this.provider = e;
  }
  async update({ oldBlock: e }) {
    const r = e, n = r3(e), i = await t3({ provider: this.provider, fromBlock: n, toBlock: r }), s = [];
    for (const o of i)
      s.push(...o.transactions);
    this.addResults(s);
  }
};
var i3 = n3;
const s3 = Cp.Mutex, { createAsyncMiddleware: o3, createScaffoldMiddleware: a3 } = Mc, u3 = UE, c3 = XE, l3 = i3, { intToHex: Qp, hexToInt: eu } = vs;
var f3 = h3;
function h3({ blockTracker: t, provider: e }) {
  let r = 0, n = {};
  const i = new s3(), s = d3({ mutex: i }), o = a3({
    // install filters
    eth_newFilter: s(tu(u)),
    eth_newBlockFilter: s(tu(l)),
    eth_newPendingTransactionFilter: s(tu(h)),
    // uninstall filters
    eth_uninstallFilter: s(zs(S)),
    // checking filter changes
    eth_getFilterChanges: s(zs(p)),
    eth_getFilterLogs: s(zs(b))
  }), a = async ({ oldBlock: I, newBlock: N }) => {
    if (n.length === 0)
      return;
    const $ = await i.acquire();
    try {
      await Promise.all(Wn(n).map(async (P) => {
        try {
          await P.update({ oldBlock: I, newBlock: N });
        } catch (B) {
          console.error(B);
        }
      }));
    } catch (P) {
      console.error(P);
    }
    $();
  };
  return o.newLogFilter = u, o.newBlockFilter = l, o.newPendingTransactionFilter = h, o.uninstallFilter = S, o.getFilterChanges = p, o.getFilterLogs = b, o.destroy = () => {
    O();
  }, o;
  async function u(I) {
    const N = new u3({ provider: e, params: I });
    return await R(N), N;
  }
  async function l() {
    const I = new c3({ provider: e });
    return await R(I), I;
  }
  async function h() {
    const I = new l3({ provider: e });
    return await R(I), I;
  }
  async function p(I) {
    const N = eu(I), $ = n[N];
    if (!$)
      throw new Error(`No filter for index "${N}"`);
    return $.getChangesAndClear();
  }
  async function b(I) {
    const N = eu(I), $ = n[N];
    if (!$)
      throw new Error(`No filter for index "${N}"`);
    let P = [];
    return $.type === "log" && (P = $.getAllResults()), P;
  }
  async function S(I) {
    const N = eu(I), P = !!n[N];
    return P && await L(N), P;
  }
  async function R(I) {
    const N = Wn(n).length, $ = await t.getLatestBlock();
    await I.initialize({ currentBlock: $ }), r++, n[r] = I, I.id = r, I.idHex = Qp(r);
    const P = Wn(n).length;
    return w({ prevFilterCount: N, newFilterCount: P }), r;
  }
  async function L(I) {
    const N = Wn(n).length;
    delete n[I];
    const $ = Wn(n).length;
    w({ prevFilterCount: N, newFilterCount: $ });
  }
  async function O() {
    const I = Wn(n).length;
    n = {}, w({ prevFilterCount: I, newFilterCount: 0 });
  }
  function w({ prevFilterCount: I, newFilterCount: N }) {
    if (I === 0 && N > 0) {
      t.on("sync", a);
      return;
    }
    if (I > 0 && N === 0) {
      t.removeListener("sync", a);
      return;
    }
  }
}
function tu(t) {
  return zs(async (...e) => {
    const r = await t(...e);
    return Qp(r.id);
  });
}
function zs(t) {
  return o3(async (e, r) => {
    const n = await t.apply(null, e.params);
    r.result = n;
  });
}
function d3({ mutex: t }) {
  return (e) => async (r, n, i, s) => {
    (await t.acquire())(), e(r, n, i, s);
  };
}
function Wn(t, e) {
  const r = [];
  for (let n in t)
    r.push(t[n]);
  return r;
}
const p3 = vn.default, { createAsyncMiddleware: Gf, createScaffoldMiddleware: g3 } = Mc, b3 = f3, { unsafeRandomBytes: v3, incrementHexInt: y3 } = vs, m3 = Tc;
var _3 = w3;
function w3({ blockTracker: t, provider: e }) {
  const r = {}, n = b3({ blockTracker: t, provider: e });
  let i = !1;
  const s = new p3(), o = g3({
    eth_subscribe: Gf(a),
    eth_unsubscribe: Gf(u)
  });
  return o.destroy = h, { events: s, middleware: o };
  async function a(p, b) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const S = p.params[0], R = v3(16);
    let L;
    switch (S) {
      case "newHeads":
        L = O({ subId: R });
        break;
      case "logs":
        const I = p.params[1], N = await n.newLogFilter(I);
        L = w({ subId: R, filter: N });
        break;
      default:
        throw new Error(`SubscriptionManager - unsupported subscription type "${S}"`);
    }
    r[R] = L, b.result = R;
    return;
    function O({ subId: I }) {
      const N = {
        type: S,
        destroy: async () => {
          t.removeListener("sync", N.update);
        },
        update: async ({ oldBlock: $, newBlock: P }) => {
          const B = P, q = y3($);
          (await m3({ provider: e, fromBlock: q, toBlock: B })).map(S3).filter((Z) => Z !== null).forEach((Z) => {
            l(I, Z);
          });
        }
      };
      return t.on("sync", N.update), N;
    }
    function w({ subId: I, filter: N }) {
      return N.on("update", (P) => l(I, P)), {
        type: S,
        destroy: async () => await n.uninstallFilter(N.idHex)
      };
    }
  }
  async function u(p, b) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const S = p.params[0], R = r[S];
    if (!R) {
      b.result = !1;
      return;
    }
    delete r[S], await R.destroy(), b.result = !0;
  }
  function l(p, b) {
    s.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: {
        subscription: p,
        result: b
      }
    });
  }
  function h() {
    s.removeAllListeners();
    for (const p in r)
      r[p].destroy(), delete r[p];
    i = !0;
  }
}
function S3(t) {
  return t == null ? null : {
    hash: t.hash,
    parentHash: t.parentHash,
    sha3Uncles: t.sha3Uncles,
    miner: t.miner,
    stateRoot: t.stateRoot,
    transactionsRoot: t.transactionsRoot,
    receiptsRoot: t.receiptsRoot,
    logsBloom: t.logsBloom,
    difficulty: t.difficulty,
    number: t.number,
    gasLimit: t.gasLimit,
    gasUsed: t.gasUsed,
    nonce: t.nonce,
    mixHash: t.mixHash,
    timestamp: t.timestamp,
    extraData: t.extraData
  };
}
Object.defineProperty(Ro, "__esModule", { value: !0 });
Ro.SubscriptionManager = void 0;
const E3 = Ud, x3 = _3, Jf = () => {
};
class M3 {
  constructor(e) {
    const r = new E3.PollingBlockTracker({
      provider: e,
      pollingInterval: 15e3,
      setSkipCacheFlag: !0
    }), { events: n, middleware: i } = x3({
      blockTracker: r,
      provider: e
    });
    this.events = n, this.subscriptionMiddleware = i;
  }
  async handleRequest(e) {
    const r = {};
    return await this.subscriptionMiddleware(e, r, Jf, Jf), r;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
Ro.SubscriptionManager = M3;
var Oc = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ei, "__esModule", { value: !0 });
ei.CoinbaseWalletProvider = void 0;
const C3 = Oc(vn), R3 = Oc(vo), ru = vi, _e = es, Zf = mi, Qf = qt, nu = mo, I3 = Ee, ae = Q, iu = Oc(n1), A3 = si, be = Vd, k3 = Ro, Yf = "DefaultChainId", Kf = "DefaultJsonRpcUrl";
class T3 extends C3.default {
  constructor(e) {
    var r, n;
    super(), this._filterPolyfill = new A3.FilterPolyfill(this), this._subscriptionManager = new k3.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = e.chainId, this._jsonRpcUrlFromOpts = e.jsonRpcUrl, this._overrideIsMetaMask = e.overrideIsMetaMask, this._relayProvider = e.relayProvider, this._storage = e.storage, this._relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this.isCoinbaseBrowser = (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, this.qrUrl = e.qrUrl;
    const i = this.getChainId(), s = (0, ae.prepend0x)(i.toString(16));
    this.emit("connect", { chainIdStr: s });
    const o = this._storage.getItem(Qf.LOCAL_STORAGE_ADDRESSES_KEY);
    if (o) {
      const a = o.split(" ");
      a[0] !== "" && (this._addresses = a.map((u) => (0, ae.ensureAddressString)(u)), this.emit("accountsChanged", a));
    }
    this._subscriptionManager.events.on("notification", (a) => {
      this.emit("message", {
        type: a.method,
        data: a.params
      });
    }), this._isAuthorized() && this.initializeRelay(), window.addEventListener("message", (a) => {
      var u;
      if (!(a.origin !== location.origin || a.source !== window) && a.data.type === "walletLinkMessage") {
        if (a.data.data.action === "dappChainSwitched") {
          const l = a.data.data.chainId, h = (u = a.data.data.jsonRpcUrl) !== null && u !== void 0 ? u : this.jsonRpcUrl;
          this.updateProviderInfo(h, Number(l));
        }
        a.data.data.action === "addressChanged" && this._setAddresses([a.data.data.address]);
      }
    });
  }
  /** @deprecated Use `.request({ method: 'eth_accounts' })` instead. */
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  /** @deprecated Use the chain ID. If you still need the network ID, use `.request({ method: 'net_version' })`. */
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  /** @deprecated Use `.request({ method: 'eth_chainId' })` instead. */
  get chainId() {
    return (0, ae.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return !0;
  }
  /**
   * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
   * true for this method.
   */
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return !0;
  }
  isConnected() {
    return !0;
  }
  get jsonRpcUrl() {
    var e;
    return (e = this._storage.getItem(Kf)) !== null && e !== void 0 ? e : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(e) {
    this._storage.setItem(Kf, e);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = !1;
  }
  setProviderInfo(e, r) {
    this.isCoinbaseBrowser || (this._chainIdFromOpts = r, this._jsonRpcUrlFromOpts = e), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(e, r) {
    this.jsonRpcUrl = e;
    const n = this.getChainId();
    this._storage.setItem(Yf, r.toString(10)), ((0, ae.ensureIntNumber)(r) !== n || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0);
  }
  async watchAsset(e, r, n, i, s, o) {
    return !!(await (await this.initializeRelay()).watchAsset(e, r, n, i, s, o == null ? void 0 : o.toString()).promise).result;
  }
  async addEthereumChain(e, r, n, i, s, o) {
    var a, u;
    if ((0, ae.ensureIntNumber)(e) === this.getChainId())
      return !1;
    const l = await this.initializeRelay(), h = l.inlineAddEthereumChain(e.toString());
    !this._isAuthorized() && !h && await l.requestEthereumAccounts().promise;
    const p = await l.addEthereumChain(e.toString(), r, s, n, i, o).promise;
    return ((a = p.result) === null || a === void 0 ? void 0 : a.isApproved) === !0 && this.updateProviderInfo(r[0], e), ((u = p.result) === null || u === void 0 ? void 0 : u.isApproved) === !0;
  }
  async switchEthereumChain(e) {
    const n = await (await this.initializeRelay()).switchEthereumChain(e.toString(10), this.selectedAddress || void 0).promise;
    if ((0, I3.isErrorResponse)(n) && n.errorCode)
      throw n.errorCode === _e.standardErrorCodes.provider.unsupportedChain ? _e.standardErrors.provider.unsupportedChain(e) : _e.standardErrors.provider.custom({
        message: n.errorMessage,
        code: n.errorCode
      });
    const i = n.result;
    i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, e);
  }
  setAppInfo(e, r) {
    this.initializeRelay().then((n) => n.setAppInfo(e, r));
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    var e;
    return (e = this.diagnostic) === null || e === void 0 || e.log(ru.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::enable",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Zf.Session.hash(this._relay.session.id) : void 0
    }), this._isAuthorized() ? [...this._addresses] : await this.send(be.JSONRPCMethod.eth_requestAccounts);
  }
  async close() {
    (await this.initializeRelay()).resetAndReload();
  }
  send(e, r) {
    try {
      const n = this._send(e, r);
      if (n instanceof Promise)
        return n.catch((i) => {
          throw (0, _e.serializeError)(i, e);
        });
    } catch (n) {
      throw (0, _e.serializeError)(n, e);
    }
  }
  _send(e, r) {
    if (typeof e == "string") {
      const i = e, s = Array.isArray(r) ? r : r !== void 0 ? [r] : [], o = {
        jsonrpc: "2.0",
        id: 0,
        method: i,
        params: s
      };
      return this._sendRequestAsync(o).then((a) => a.result);
    }
    if (typeof r == "function") {
      const i = e, s = r;
      return this._sendAsync(i, s);
    }
    if (Array.isArray(e))
      return e.map((s) => this._sendRequest(s));
    const n = e;
    return this._sendRequest(n);
  }
  async sendAsync(e, r) {
    try {
      return this._sendAsync(e, r).catch((n) => {
        throw (0, _e.serializeError)(n, e);
      });
    } catch (n) {
      return Promise.reject((0, _e.serializeError)(n, e));
    }
  }
  async _sendAsync(e, r) {
    if (typeof r != "function")
      throw new Error("callback is required");
    if (Array.isArray(e)) {
      const i = r;
      this._sendMultipleRequestsAsync(e).then((s) => i(null, s)).catch((s) => i(s, null));
      return;
    }
    const n = r;
    return this._sendRequestAsync(e).then((i) => n(null, i)).catch((i) => n(i, null));
  }
  async request(e) {
    try {
      return this._request(e).catch((r) => {
        throw (0, _e.serializeError)(r, e.method);
      });
    } catch (r) {
      return Promise.reject((0, _e.serializeError)(r, e.method));
    }
  }
  async _request(e) {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw _e.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: e
      });
    const { method: r, params: n } = e;
    if (typeof r != "string" || r.length === 0)
      throw _e.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: e
      });
    if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
      throw _e.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: e
      });
    const i = n === void 0 ? [] : n, s = this._relayEventManager.makeRequestId();
    return (await this._sendRequestAsync({
      method: r,
      params: i,
      jsonrpc: "2.0",
      id: s
    })).result;
  }
  async scanQRCode(e) {
    var r;
    const i = await (await this.initializeRelay()).scanQRCode((0, ae.ensureRegExpString)(e)).promise;
    if (typeof i.result != "string")
      throw (0, _e.serializeError)((r = i.errorMessage) !== null && r !== void 0 ? r : "result was not a string", nu.Web3Method.scanQRCode);
    return i.result;
  }
  async genericRequest(e, r) {
    var n;
    const s = await (await this.initializeRelay()).genericRequest(e, r).promise;
    if (typeof s.result != "string")
      throw (0, _e.serializeError)((n = s.errorMessage) !== null && n !== void 0 ? n : "result was not a string", nu.Web3Method.generic);
    return s.result;
  }
  async selectProvider(e) {
    var r;
    const i = await (await this.initializeRelay()).selectProvider(e).promise;
    if (typeof i.result != "string")
      throw (0, _e.serializeError)((r = i.errorMessage) !== null && r !== void 0 ? r : "result was not a string", nu.Web3Method.selectProvider);
    return i.result;
  }
  supportsSubscriptions() {
    return !1;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return !0;
  }
  _sendRequest(e) {
    const r = {
      jsonrpc: "2.0",
      id: e.id
    }, { method: n } = e;
    if (r.result = this._handleSynchronousMethods(e), r.result === void 0)
      throw new Error(`Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`);
    return r;
  }
  _setAddresses(e, r) {
    if (!Array.isArray(e))
      throw new Error("addresses is not an array");
    const n = e.map((i) => (0, ae.ensureAddressString)(i));
    JSON.stringify(n) !== JSON.stringify(this._addresses) && (this._addresses = n, this.emit("accountsChanged", this._addresses), this._storage.setItem(Qf.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
  }
  _sendRequestAsync(e) {
    return new Promise((r, n) => {
      try {
        const i = this._handleSynchronousMethods(e);
        if (i !== void 0)
          return r({
            jsonrpc: "2.0",
            id: e.id,
            result: i
          });
        const s = this._handleAsynchronousFilterMethods(e);
        if (s !== void 0) {
          s.then((a) => r(Object.assign(Object.assign({}, a), { id: e.id }))).catch((a) => n(a));
          return;
        }
        const o = this._handleSubscriptionMethods(e);
        if (o !== void 0) {
          o.then((a) => r({
            jsonrpc: "2.0",
            id: e.id,
            result: a.result
          })).catch((a) => n(a));
          return;
        }
      } catch (i) {
        return n(i);
      }
      this._handleAsynchronousMethods(e).then((i) => i && r(Object.assign(Object.assign({}, i), { id: e.id }))).catch((i) => n(i));
    });
  }
  _sendMultipleRequestsAsync(e) {
    return Promise.all(e.map((r) => this._sendRequestAsync(r)));
  }
  _handleSynchronousMethods(e) {
    const { method: r } = e, n = e.params || [];
    switch (r) {
      case be.JSONRPCMethod.eth_accounts:
        return this._eth_accounts();
      case be.JSONRPCMethod.eth_coinbase:
        return this._eth_coinbase();
      case be.JSONRPCMethod.eth_uninstallFilter:
        return this._eth_uninstallFilter(n);
      case be.JSONRPCMethod.net_version:
        return this._net_version();
      case be.JSONRPCMethod.eth_chainId:
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(e) {
    const { method: r } = e, n = e.params || [];
    switch (r) {
      case be.JSONRPCMethod.eth_requestAccounts:
        return this._eth_requestAccounts();
      case be.JSONRPCMethod.eth_sign:
        return this._eth_sign(n);
      case be.JSONRPCMethod.eth_ecRecover:
        return this._eth_ecRecover(n);
      case be.JSONRPCMethod.personal_sign:
        return this._personal_sign(n);
      case be.JSONRPCMethod.personal_ecRecover:
        return this._personal_ecRecover(n);
      case be.JSONRPCMethod.eth_signTransaction:
        return this._eth_signTransaction(n);
      case be.JSONRPCMethod.eth_sendRawTransaction:
        return this._eth_sendRawTransaction(n);
      case be.JSONRPCMethod.eth_sendTransaction:
        return this._eth_sendTransaction(n);
      case be.JSONRPCMethod.eth_signTypedData_v1:
        return this._eth_signTypedData_v1(n);
      case be.JSONRPCMethod.eth_signTypedData_v2:
        return this._throwUnsupportedMethodError();
      case be.JSONRPCMethod.eth_signTypedData_v3:
        return this._eth_signTypedData_v3(n);
      case be.JSONRPCMethod.eth_signTypedData_v4:
      case be.JSONRPCMethod.eth_signTypedData:
        return this._eth_signTypedData_v4(n);
      case be.JSONRPCMethod.cbWallet_arbitrary:
        return this._cbwallet_arbitrary(n);
      case be.JSONRPCMethod.wallet_addEthereumChain:
        return this._wallet_addEthereumChain(n);
      case be.JSONRPCMethod.wallet_switchEthereumChain:
        return this._wallet_switchEthereumChain(n);
      case be.JSONRPCMethod.wallet_watchAsset:
        return this._wallet_watchAsset(n);
    }
    return (await this.initializeRelay()).makeEthereumJSONRPCRequest(e, this.jsonRpcUrl);
  }
  _handleAsynchronousFilterMethods(e) {
    const { method: r } = e, n = e.params || [];
    switch (r) {
      case be.JSONRPCMethod.eth_newFilter:
        return this._eth_newFilter(n);
      case be.JSONRPCMethod.eth_newBlockFilter:
        return this._eth_newBlockFilter();
      case be.JSONRPCMethod.eth_newPendingTransactionFilter:
        return this._eth_newPendingTransactionFilter();
      case be.JSONRPCMethod.eth_getFilterChanges:
        return this._eth_getFilterChanges(n);
      case be.JSONRPCMethod.eth_getFilterLogs:
        return this._eth_getFilterLogs(n);
    }
  }
  _handleSubscriptionMethods(e) {
    switch (e.method) {
      case be.JSONRPCMethod.eth_subscribe:
      case be.JSONRPCMethod.eth_unsubscribe:
        return this._subscriptionManager.handleRequest(e);
    }
  }
  _isKnownAddress(e) {
    try {
      const r = (0, ae.ensureAddressString)(e);
      return this._addresses.map((i) => (0, ae.ensureAddressString)(i)).includes(r);
    } catch {
    }
    return !1;
  }
  _ensureKnownAddress(e) {
    var r;
    if (!this._isKnownAddress(e))
      throw (r = this.diagnostic) === null || r === void 0 || r.log(ru.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), new Error("Unknown Ethereum address");
  }
  _prepareTransactionParams(e) {
    const r = e.from ? (0, ae.ensureAddressString)(e.from) : this.selectedAddress;
    if (!r)
      throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(r);
    const n = e.to ? (0, ae.ensureAddressString)(e.to) : null, i = e.value != null ? (0, ae.ensureBN)(e.value) : new R3.default(0), s = e.data ? (0, ae.ensureBuffer)(e.data) : Buffer.alloc(0), o = e.nonce != null ? (0, ae.ensureIntNumber)(e.nonce) : null, a = e.gasPrice != null ? (0, ae.ensureBN)(e.gasPrice) : null, u = e.maxFeePerGas != null ? (0, ae.ensureBN)(e.maxFeePerGas) : null, l = e.maxPriorityFeePerGas != null ? (0, ae.ensureBN)(e.maxPriorityFeePerGas) : null, h = e.gas != null ? (0, ae.ensureBN)(e.gas) : null, p = this.getChainId();
    return {
      fromAddress: r,
      toAddress: n,
      weiValue: i,
      data: s,
      nonce: o,
      gasPriceInWei: a,
      maxFeePerGas: u,
      maxPriorityFeePerGas: l,
      gasLimit: h,
      chainId: p
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized())
      throw _e.standardErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw _e.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(e, r, n, i) {
    this._ensureKnownAddress(r);
    try {
      return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).signEthereumMessage(e, r, n, i).promise).result };
    } catch (s) {
      throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? _e.standardErrors.provider.userRejectedRequest("User denied message signature") : s;
    }
  }
  async _ethereumAddressFromSignedMessage(e, r, n) {
    return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).ethereumAddressFromSignedMessage(e, r, n).promise).result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, ae.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const e = this._storage.getItem(Yf);
    if (!e)
      return (0, ae.ensureIntNumber)(this._chainIdFromOpts);
    const r = parseInt(e, 10);
    return (0, ae.ensureIntNumber)(r);
  }
  async _eth_requestAccounts() {
    var e;
    if ((e = this.diagnostic) === null || e === void 0 || e.log(ru.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::_eth_requestAccounts",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Zf.Session.hash(this._relay.session.id) : void 0
    }), this._isAuthorized())
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses
      });
    let r;
    try {
      r = await (await this.initializeRelay()).requestEthereumAccounts().promise;
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? _e.standardErrors.provider.userRejectedRequest("User denied account authorization") : n;
    }
    if (!r.result)
      throw new Error("accounts received is empty");
    return this._setAddresses(r.result), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), { jsonrpc: "2.0", id: 0, result: this._addresses };
  }
  _eth_sign(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureAddressString)(e[0]), n = (0, ae.ensureBuffer)(e[1]);
    return this._signEthereumMessage(n, r, !1);
  }
  _eth_ecRecover(e) {
    const r = (0, ae.ensureBuffer)(e[0]), n = (0, ae.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !1);
  }
  _personal_sign(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureBuffer)(e[0]), n = (0, ae.ensureAddressString)(e[1]);
    return this._signEthereumMessage(r, n, !0);
  }
  _personal_ecRecover(e) {
    const r = (0, ae.ensureBuffer)(e[0]), n = (0, ae.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !0);
  }
  async _eth_signTransaction(e) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(e[0] || {});
    try {
      return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).signEthereumTransaction(r).promise).result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? _e.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_sendRawTransaction(e) {
    const r = (0, ae.ensureBuffer)(e[0]);
    return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).submitEthereumTransaction(r, this.getChainId()).promise).result };
  }
  async _eth_sendTransaction(e) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(e[0] || {});
    try {
      return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).signAndSubmitEthereumTransaction(r).promise).result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? _e.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_signTypedData_v1(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureParsedJSONObject)(e[0]), n = (0, ae.ensureAddressString)(e[1]);
    this._ensureKnownAddress(n);
    const i = iu.default.hashForSignTypedDataLegacy({ data: r }), s = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(i, n, !1, s);
  }
  async _eth_signTypedData_v3(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureAddressString)(e[0]), n = (0, ae.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(r);
    const i = iu.default.hashForSignTypedData_v3({ data: n }), s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  async _eth_signTypedData_v4(e) {
    this._requireAuthorization();
    const r = (0, ae.ensureAddressString)(e[0]), n = (0, ae.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(r);
    const i = iu.default.hashForSignTypedData_v4({ data: n }), s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  /** @deprecated */
  async _cbwallet_arbitrary(e) {
    const r = e[0], n = e[1];
    if (typeof n != "string")
      throw new Error("parameter must be a string");
    if (typeof r != "object" || r === null)
      throw new Error("parameter must be an object");
    return { jsonrpc: "2.0", id: 0, result: await this.genericRequest(r, n) };
  }
  async _wallet_addEthereumChain(e) {
    var r, n, i, s;
    const o = e[0];
    if (((r = o.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" }
      };
    if (!o.chainName || o.chainName.trim() === "")
      throw _e.standardErrors.rpc.invalidParams("chainName is a required field");
    if (!o.nativeCurrency)
      throw _e.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
    const a = parseInt(o.chainId, 16);
    return await this.addEthereumChain(a, (n = o.rpcUrls) !== null && n !== void 0 ? n : [], (i = o.blockExplorerUrls) !== null && i !== void 0 ? i : [], o.chainName, (s = o.iconUrls) !== null && s !== void 0 ? s : [], o.nativeCurrency) ? { jsonrpc: "2.0", id: 0, result: null } : {
      jsonrpc: "2.0",
      id: 0,
      error: { code: 2, message: "unable to add ethereum chain" }
    };
  }
  async _wallet_switchEthereumChain(e) {
    const r = e[0];
    return await this.switchEthereumChain(parseInt(r.chainId, 16)), { jsonrpc: "2.0", id: 0, result: null };
  }
  async _wallet_watchAsset(e) {
    const r = Array.isArray(e) ? e[0] : e;
    if (!r.type)
      throw _e.standardErrors.rpc.invalidParams("Type is required");
    if ((r == null ? void 0 : r.type) !== "ERC20")
      throw _e.standardErrors.rpc.invalidParams(`Asset of type '${r.type}' is not supported`);
    if (!(r != null && r.options))
      throw _e.standardErrors.rpc.invalidParams("Options are required");
    if (!(r != null && r.options.address))
      throw _e.standardErrors.rpc.invalidParams("Address is required");
    const n = this.getChainId(), { address: i, symbol: s, image: o, decimals: a } = r.options;
    return { jsonrpc: "2.0", id: 0, result: await this.watchAsset(r.type, i, s, a, o, n) };
  }
  _eth_uninstallFilter(e) {
    const r = (0, ae.ensureHexString)(e[0]);
    return this._filterPolyfill.uninstallFilter(r);
  }
  async _eth_newFilter(e) {
    const r = e[0];
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newFilter(r) };
  }
  async _eth_newBlockFilter() {
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newBlockFilter() };
  }
  async _eth_newPendingTransactionFilter() {
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newPendingTransactionFilter() };
  }
  _eth_getFilterChanges(e) {
    const r = (0, ae.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterChanges(r);
  }
  _eth_getFilterLogs(e) {
    const r = (0, ae.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterLogs(r);
  }
  initializeRelay() {
    return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then((e) => (e.setAccountsCallback((r, n) => this._setAddresses(r, n)), e.setChainCallback((r, n) => {
      this.updateProviderInfo(n, parseInt(r, 10));
    }), e.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = e, e));
  }
}
ei.CoinbaseWalletProvider = T3;
var zo = {}, qo = {}, ys, ne, Yp, Kp, sn, Xf, Xp, Ou, e0, Qi = {}, t0 = [], O3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Go = Array.isArray;
function gr(t, e) {
  for (var r in e)
    t[r] = e[r];
  return t;
}
function r0(t) {
  var e = t.parentNode;
  e && e.removeChild(t);
}
function Nu(t, e, r) {
  var n, i, s, o = {};
  for (s in e)
    s == "key" ? n = e[s] : s == "ref" ? i = e[s] : o[s] = e[s];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ys.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null)
    for (s in t.defaultProps)
      o[s] === void 0 && (o[s] = t.defaultProps[s]);
  return Vi(t, o, n, i, null);
}
function Vi(t, e, r, n, i) {
  var s = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++Yp, __i: -1, __u: 0 };
  return i == null && ne.vnode != null && ne.vnode(s), s;
}
function N3() {
  return { current: null };
}
function ms(t) {
  return t.children;
}
function Ui(t, e) {
  this.props = t, this.context = e;
}
function ci(t, e) {
  if (e == null)
    return t.__ ? ci(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++)
    if ((r = t.__k[e]) != null && r.__e != null)
      return r.__e;
  return typeof t.type == "function" ? ci(t) : null;
}
function n0(t) {
  var e, r;
  if ((t = t.__) != null && t.__c != null) {
    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) {
        t.__e = t.__c.base = r.__e;
        break;
      }
    return n0(t);
  }
}
function Lu(t) {
  (!t.__d && (t.__d = !0) && sn.push(t) && !so.__r++ || Xf !== ne.debounceRendering) && ((Xf = ne.debounceRendering) || Xp)(so);
}
function so() {
  var t, e, r, n, i, s, o, a, u;
  for (sn.sort(Ou); t = sn.shift(); )
    t.__d && (e = sn.length, n = void 0, s = (i = (r = t).__v).__e, a = [], u = [], (o = r.__P) && ((n = gr({}, i)).__v = i.__v + 1, ne.vnode && ne.vnode(n), Nc(o, n, i, r.__n, o.ownerSVGElement !== void 0, 32 & i.__u ? [s] : null, a, s ?? ci(i), !!(32 & i.__u), u), n.__.__k[n.__i] = n, a0(a, n, u), n.__e != s && n0(n)), sn.length > e && sn.sort(Ou));
  so.__r = 0;
}
function i0(t, e, r, n, i, s, o, a, u, l, h) {
  var p, b, S, R, L, O = n && n.__k || t0, w = e.length;
  for (r.__d = u, L3(r, e, O), u = r.__d, p = 0; p < w; p++)
    (S = r.__k[p]) != null && typeof S != "boolean" && typeof S != "function" && (b = S.__i === -1 ? Qi : O[S.__i] || Qi, S.__i = p, Nc(t, S, b, i, s, o, a, u, l, h), R = S.__e, S.ref && b.ref != S.ref && (b.ref && Lc(b.ref, null, S), h.push(S.ref, S.__c || R, S)), L == null && R != null && (L = R), 65536 & S.__u || b.__k === S.__k ? u = s0(S, u, t) : typeof S.type == "function" && S.__d !== void 0 ? u = S.__d : R && (u = R.nextSibling), S.__d = void 0, S.__u &= -196609);
  r.__d = u, r.__e = L;
}
function L3(t, e, r) {
  var n, i, s, o, a, u = e.length, l = r.length, h = l, p = 0;
  for (t.__k = [], n = 0; n < u; n++)
    (i = t.__k[n] = (i = e[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? Vi(null, i, null, null, i) : Go(i) ? Vi(ms, { children: i }, null, null, null) : i.__b > 0 ? Vi(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = t, i.__b = t.__b + 1, a = P3(i, r, o = n + p, h), i.__i = a, s = null, a !== -1 && (h--, (s = r[a]) && (s.__u |= 131072)), s == null || s.__v === null ? (a == -1 && p--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a === o + 1 ? p++ : a > o ? h > u - o ? p += a - o : p-- : p = a < o && a == o - 1 ? a - o : 0, a !== n + p && (i.__u |= 65536))) : (s = r[n]) && s.key == null && s.__e && (s.__e == t.__d && (t.__d = ci(s)), Pu(s, s, !1), r[n] = null, h--);
  if (h)
    for (n = 0; n < l; n++)
      (s = r[n]) != null && !(131072 & s.__u) && (s.__e == t.__d && (t.__d = ci(s)), Pu(s, s));
}
function s0(t, e, r) {
  var n, i;
  if (typeof t.type == "function") {
    for (n = t.__k, i = 0; n && i < n.length; i++)
      n[i] && (n[i].__ = t, e = s0(n[i], e, r));
    return e;
  }
  return t.__e != e && (r.insertBefore(t.__e, e || null), e = t.__e), e && e.nextSibling;
}
function o0(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (Go(t) ? t.some(function(r) {
    o0(r, e);
  }) : e.push(t)), e;
}
function P3(t, e, r, n) {
  var i = t.key, s = t.type, o = r - 1, a = r + 1, u = e[r];
  if (u === null || u && i == u.key && s === u.type)
    return r;
  if (n > (u != null && !(131072 & u.__u) ? 1 : 0))
    for (; o >= 0 || a < e.length; ) {
      if (o >= 0) {
        if ((u = e[o]) && !(131072 & u.__u) && i == u.key && s === u.type)
          return o;
        o--;
      }
      if (a < e.length) {
        if ((u = e[a]) && !(131072 & u.__u) && i == u.key && s === u.type)
          return a;
        a++;
      }
    }
  return -1;
}
function eh(t, e, r) {
  e[0] === "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || O3.test(e) ? r : r + "px";
}
function Ds(t, e, r, n, i) {
  var s;
  e:
    if (e === "style")
      if (typeof r == "string")
        t.style.cssText = r;
      else {
        if (typeof n == "string" && (t.style.cssText = n = ""), n)
          for (e in n)
            r && e in r || eh(t.style, e, "");
        if (r)
          for (e in r)
            n && r[e] === n[e] || eh(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      s = e !== (e = e.replace(/(PointerCapture)$|Capture$/, "$1")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + s] = r, r ? n ? r.u = n.u : (r.u = Date.now(), t.addEventListener(e, s ? rh : th, s)) : t.removeEventListener(e, s ? rh : th, s);
    else {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e !== "role" && e in t)
        try {
          t[e] = r ?? "";
          break e;
        } catch {
        }
      typeof r == "function" || (r == null || r === !1 && e[4] !== "-" ? t.removeAttribute(e) : t.setAttribute(e, r));
    }
}
function th(t) {
  var e = this.l[t.type + !1];
  if (t.t) {
    if (t.t <= e.u)
      return;
  } else
    t.t = Date.now();
  return e(ne.event ? ne.event(t) : t);
}
function rh(t) {
  return this.l[t.type + !0](ne.event ? ne.event(t) : t);
}
function Nc(t, e, r, n, i, s, o, a, u, l) {
  var h, p, b, S, R, L, O, w, I, N, $, P, B, q, z, F = e.type;
  if (e.constructor !== void 0)
    return null;
  128 & r.__u && (u = !!(32 & r.__u), s = [a = e.__e = r.__e]), (h = ne.__b) && h(e);
  e:
    if (typeof F == "function")
      try {
        if (w = e.props, I = (h = F.contextType) && n[h.__c], N = h ? I ? I.props.value : h.__ : n, r.__c ? O = (p = e.__c = r.__c).__ = p.__E : ("prototype" in F && F.prototype.render ? e.__c = p = new F(w, N) : (e.__c = p = new Ui(w, N), p.constructor = F, p.render = D3), I && I.sub(p), p.props = w, p.state || (p.state = {}), p.context = N, p.__n = n, b = p.__d = !0, p.__h = [], p._sb = []), p.__s == null && (p.__s = p.state), F.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = gr({}, p.__s)), gr(p.__s, F.getDerivedStateFromProps(w, p.__s))), S = p.props, R = p.state, p.__v = e, b)
          F.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), p.componentDidMount != null && p.__h.push(p.componentDidMount);
        else {
          if (F.getDerivedStateFromProps == null && w !== S && p.componentWillReceiveProps != null && p.componentWillReceiveProps(w, N), !p.__e && (p.shouldComponentUpdate != null && p.shouldComponentUpdate(w, p.__s, N) === !1 || e.__v === r.__v)) {
            for (e.__v !== r.__v && (p.props = w, p.state = p.__s, p.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.forEach(function(Z) {
              Z && (Z.__ = e);
            }), $ = 0; $ < p._sb.length; $++)
              p.__h.push(p._sb[$]);
            p._sb = [], p.__h.length && o.push(p);
            break e;
          }
          p.componentWillUpdate != null && p.componentWillUpdate(w, p.__s, N), p.componentDidUpdate != null && p.__h.push(function() {
            p.componentDidUpdate(S, R, L);
          });
        }
        if (p.context = N, p.props = w, p.__P = t, p.__e = !1, P = ne.__r, B = 0, "prototype" in F && F.prototype.render) {
          for (p.state = p.__s, p.__d = !1, P && P(e), h = p.render(p.props, p.state, p.context), q = 0; q < p._sb.length; q++)
            p.__h.push(p._sb[q]);
          p._sb = [];
        } else
          do
            p.__d = !1, P && P(e), h = p.render(p.props, p.state, p.context), p.state = p.__s;
          while (p.__d && ++B < 25);
        p.state = p.__s, p.getChildContext != null && (n = gr(gr({}, n), p.getChildContext())), b || p.getSnapshotBeforeUpdate == null || (L = p.getSnapshotBeforeUpdate(S, R)), i0(t, Go(z = h != null && h.type === ms && h.key == null ? h.props.children : h) ? z : [z], e, r, n, i, s, o, a, u, l), p.base = e.__e, e.__u &= -161, p.__h.length && o.push(p), O && (p.__E = p.__ = null);
      } catch (Z) {
        e.__v = null, u || s != null ? (e.__e = a, e.__u |= u ? 160 : 32, s[s.indexOf(a)] = null) : (e.__e = r.__e, e.__k = r.__k), ne.__e(Z, e, r);
      }
    else
      s == null && e.__v === r.__v ? (e.__k = r.__k, e.__e = r.__e) : e.__e = $3(r.__e, e, r, n, i, s, o, u, l);
  (h = ne.diffed) && h(e);
}
function a0(t, e, r) {
  e.__d = void 0;
  for (var n = 0; n < r.length; n++)
    Lc(r[n], r[++n], r[++n]);
  ne.__c && ne.__c(e, t), t.some(function(i) {
    try {
      t = i.__h, i.__h = [], t.some(function(s) {
        s.call(i);
      });
    } catch (s) {
      ne.__e(s, i.__v);
    }
  });
}
function $3(t, e, r, n, i, s, o, a, u) {
  var l, h, p, b, S, R, L, O = r.props, w = e.props, I = e.type;
  if (I === "svg" && (i = !0), s != null) {
    for (l = 0; l < s.length; l++)
      if ((S = s[l]) && "setAttribute" in S == !!I && (I ? S.localName === I : S.nodeType === 3)) {
        t = S, s[l] = null;
        break;
      }
  }
  if (t == null) {
    if (I === null)
      return document.createTextNode(w);
    t = i ? document.createElementNS("http://www.w3.org/2000/svg", I) : document.createElement(I, w.is && w), s = null, a = !1;
  }
  if (I === null)
    O === w || a && t.data === w || (t.data = w);
  else {
    if (s = s && ys.call(t.childNodes), O = r.props || Qi, !a && s != null)
      for (O = {}, l = 0; l < t.attributes.length; l++)
        O[(S = t.attributes[l]).name] = S.value;
    for (l in O)
      S = O[l], l == "children" || (l == "dangerouslySetInnerHTML" ? p = S : l === "key" || l in w || Ds(t, l, null, S, i));
    for (l in w)
      S = w[l], l == "children" ? b = S : l == "dangerouslySetInnerHTML" ? h = S : l == "value" ? R = S : l == "checked" ? L = S : l === "key" || a && typeof S != "function" || O[l] === S || Ds(t, l, S, O[l], i);
    if (h)
      a || p && (h.__html === p.__html || h.__html === t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (p && (t.innerHTML = ""), i0(t, Go(b) ? b : [b], e, r, n, i && I !== "foreignObject", s, o, s ? s[0] : r.__k && ci(r, 0), a, u), s != null)
      for (l = s.length; l--; )
        s[l] != null && r0(s[l]);
    a || (l = "value", R !== void 0 && (R !== t[l] || I === "progress" && !R || I === "option" && R !== O[l]) && Ds(t, l, R, O[l], !1), l = "checked", L !== void 0 && L !== t[l] && Ds(t, l, L, O[l], !1));
  }
  return t;
}
function Lc(t, e, r) {
  try {
    typeof t == "function" ? t(e) : t.current = e;
  } catch (n) {
    ne.__e(n, r);
  }
}
function Pu(t, e, r) {
  var n, i;
  if (ne.unmount && ne.unmount(t), (n = t.ref) && (n.current && n.current !== t.__e || Lc(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (s) {
        ne.__e(s, e);
      }
    n.base = n.__P = null, t.__c = void 0;
  }
  if (n = t.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Pu(n[i], e, r || typeof t.type != "function");
  r || t.__e == null || r0(t.__e), t.__ = t.__e = t.__d = void 0;
}
function D3(t, e, r) {
  return this.constructor(t, r);
}
function u0(t, e, r) {
  var n, i, s, o;
  ne.__ && ne.__(t, e), i = (n = typeof r == "function") ? null : r && r.__k || e.__k, s = [], o = [], Nc(e, t = (!n && r || e).__k = Nu(ms, null, [t]), i || Qi, Qi, e.ownerSVGElement !== void 0, !n && r ? [r] : i ? null : e.firstChild ? ys.call(e.childNodes) : null, s, !n && r ? r : i ? i.__e : e.firstChild, n, o), a0(s, t, o);
}
function c0(t, e) {
  u0(t, e, c0);
}
function B3(t, e, r) {
  var n, i, s, o, a = gr({}, t.props);
  for (s in t.type && t.type.defaultProps && (o = t.type.defaultProps), e)
    s == "key" ? n = e[s] : s == "ref" ? i = e[s] : a[s] = e[s] === void 0 && o !== void 0 ? o[s] : e[s];
  return arguments.length > 2 && (a.children = arguments.length > 3 ? ys.call(arguments, 2) : r), Vi(t.type, a, n || t.key, i || t.ref, null);
}
function j3(t, e) {
  var r = { __c: e = "__cC" + e0++, __: t, Consumer: function(n, i) {
    return n.children(i);
  }, Provider: function(n) {
    var i, s;
    return this.getChildContext || (i = [], (s = {})[e] = this, this.getChildContext = function() {
      return s;
    }, this.shouldComponentUpdate = function(o) {
      this.props.value !== o.value && i.some(function(a) {
        a.__e = !0, Lu(a);
      });
    }, this.sub = function(o) {
      i.push(o);
      var a = o.componentWillUnmount;
      o.componentWillUnmount = function() {
        i.splice(i.indexOf(o), 1), a && a.call(o);
      };
    }), n.children;
  } };
  return r.Provider.__ = r.Consumer.contextType = r;
}
ys = t0.slice, ne = { __e: function(t, e, r, n) {
  for (var i, s, o; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((s = i.constructor) && s.getDerivedStateFromError != null && (i.setState(s.getDerivedStateFromError(t)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(t, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        t = a;
      }
  throw t;
} }, Yp = 0, Kp = function(t) {
  return t != null && t.constructor == null;
}, Ui.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s !== this.state ? this.__s : this.__s = gr({}, this.state), typeof t == "function" && (t = t(gr({}, r), this.props)), t && gr(r, t), t != null && this.__v && (e && this._sb.push(e), Lu(this));
}, Ui.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Lu(this));
}, Ui.prototype.render = ms, sn = [], Xp = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ou = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, so.__r = 0, e0 = 0;
const F3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Component: Ui,
  Fragment: ms,
  cloneElement: B3,
  createContext: j3,
  createElement: Nu,
  createRef: N3,
  h: Nu,
  hydrate: c0,
  get isValidElement() {
    return Kp;
  },
  get options() {
    return ne;
  },
  render: u0,
  toChildArray: o0
}, Symbol.toStringTag, { value: "Module" })), kt = /* @__PURE__ */ bn(F3);
function li(t) {
  return typeof t == "function";
}
var nh = !1, Lt = {
  Promise: void 0,
  set useDeprecatedSynchronousErrorHandling(t) {
    if (t) {
      var e = /* @__PURE__ */ new Error();
      "" + e.stack;
    }
    nh = t;
  },
  get useDeprecatedSynchronousErrorHandling() {
    return nh;
  }
};
function qn(t) {
  setTimeout(function() {
    throw t;
  }, 0);
}
var oo = {
  closed: !0,
  next: function(t) {
  },
  error: function(t) {
    if (Lt.useDeprecatedSynchronousErrorHandling)
      throw t;
    qn(t);
  },
  complete: function() {
  }
}, wt = /* @__PURE__ */ function() {
  return Array.isArray || function(t) {
    return t && typeof t.length == "number";
  };
}();
function Pc(t) {
  return t !== null && typeof t == "object";
}
var W3 = /* @__PURE__ */ function() {
  function t(e) {
    return Error.call(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(r, n) {
      return n + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e, this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), zi = W3, Ke = /* @__PURE__ */ function() {
  function t(e) {
    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e);
  }
  return t.prototype.unsubscribe = function() {
    var e;
    if (!this.closed) {
      var r = this, n = r._parentOrParents, i = r._ctorUnsubscribe, s = r._unsubscribe, o = r._subscriptions;
      if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t)
        n.remove(this);
      else if (n !== null)
        for (var a = 0; a < n.length; ++a) {
          var u = n[a];
          u.remove(this);
        }
      if (li(s)) {
        i && (this._unsubscribe = void 0);
        try {
          s.call(this);
        } catch (p) {
          e = p instanceof zi ? ih(p.errors) : [p];
        }
      }
      if (wt(o))
        for (var a = -1, l = o.length; ++a < l; ) {
          var h = o[a];
          if (Pc(h))
            try {
              h.unsubscribe();
            } catch (b) {
              e = e || [], b instanceof zi ? e = e.concat(ih(b.errors)) : e.push(b);
            }
        }
      if (e)
        throw new zi(e);
    }
  }, t.prototype.add = function(e) {
    var r = e;
    if (!e)
      return t.EMPTY;
    switch (typeof e) {
      case "function":
        r = new t(e);
      case "object":
        if (r === this || r.closed || typeof r.unsubscribe != "function")
          return r;
        if (this.closed)
          return r.unsubscribe(), r;
        if (!(r instanceof t)) {
          var n = r;
          r = new t(), r._subscriptions = [n];
        }
        break;
      default:
        throw new Error("unrecognized teardown " + e + " added to Subscription.");
    }
    var i = r._parentOrParents;
    if (i === null)
      r._parentOrParents = this;
    else if (i instanceof t) {
      if (i === this)
        return r;
      r._parentOrParents = [i, this];
    } else if (i.indexOf(this) === -1)
      i.push(this);
    else
      return r;
    var s = this._subscriptions;
    return s === null ? this._subscriptions = [r] : s.push(r), r;
  }, t.prototype.remove = function(e) {
    var r = this._subscriptions;
    if (r) {
      var n = r.indexOf(e);
      n !== -1 && r.splice(n, 1);
    }
  }, t.EMPTY = function(e) {
    return e.closed = !0, e;
  }(new t()), t;
}();
function ih(t) {
  return t.reduce(function(e, r) {
    return e.concat(r instanceof zi ? r.errors : r);
  }, []);
}
var ao = /* @__PURE__ */ function() {
  return typeof Symbol == "function" ? /* @__PURE__ */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* @__PURE__ */ Math.random();
}(), Y = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this;
    switch (s.syncErrorValue = null, s.syncErrorThrown = !1, s.syncErrorThrowable = !1, s.isStopped = !1, arguments.length) {
      case 0:
        s.destination = oo;
        break;
      case 1:
        if (!r) {
          s.destination = oo;
          break;
        }
        if (typeof r == "object") {
          r instanceof e ? (s.syncErrorThrowable = r.syncErrorThrowable, s.destination = r, r.add(s)) : (s.syncErrorThrowable = !0, s.destination = new sh(s, r));
          break;
        }
      default:
        s.syncErrorThrowable = !0, s.destination = new sh(s, r, n, i);
        break;
    }
    return s;
  }
  return e.prototype[ao] = function() {
    return this;
  }, e.create = function(r, n, i) {
    var s = new e(r, n, i);
    return s.syncErrorThrowable = !1, s;
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this));
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    this.destination.error(r), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.destination.complete(), this.unsubscribe();
  }, e.prototype._unsubscribeAndRecycle = function() {
    var r = this._parentOrParents;
    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = r, this;
  }, e;
}(Ke), sh = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s) {
    var o = t.call(this) || this;
    o._parentSubscriber = r;
    var a, u = o;
    return li(n) ? a = n : n && (a = n.next, i = n.error, s = n.complete, n !== oo && (u = Object.create(n), li(u.unsubscribe) && o.add(u.unsubscribe.bind(u)), u.unsubscribe = o.unsubscribe.bind(o))), o._context = u, o._next = a, o._error = i, o._complete = s, o;
  }
  return e.prototype.next = function(r) {
    if (!this.isStopped && this._next) {
      var n = this._parentSubscriber;
      !Lt.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? this.__tryOrUnsub(this._next, r) : this.__tryOrSetError(n, this._next, r) && this.unsubscribe();
    }
  }, e.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = this._parentSubscriber, i = Lt.useDeprecatedSynchronousErrorHandling;
      if (this._error)
        !i || !n.syncErrorThrowable ? (this.__tryOrUnsub(this._error, r), this.unsubscribe()) : (this.__tryOrSetError(n, this._error, r), this.unsubscribe());
      else if (n.syncErrorThrowable)
        i ? (n.syncErrorValue = r, n.syncErrorThrown = !0) : qn(r), this.unsubscribe();
      else {
        if (this.unsubscribe(), i)
          throw r;
        qn(r);
      }
    }
  }, e.prototype.complete = function() {
    var r = this;
    if (!this.isStopped) {
      var n = this._parentSubscriber;
      if (this._complete) {
        var i = function() {
          return r._complete.call(r._context);
        };
        !Lt.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? (this.__tryOrUnsub(i), this.unsubscribe()) : (this.__tryOrSetError(n, i), this.unsubscribe());
      } else
        this.unsubscribe();
    }
  }, e.prototype.__tryOrUnsub = function(r, n) {
    try {
      r.call(this._context, n);
    } catch (i) {
      if (this.unsubscribe(), Lt.useDeprecatedSynchronousErrorHandling)
        throw i;
      qn(i);
    }
  }, e.prototype.__tryOrSetError = function(r, n, i) {
    if (!Lt.useDeprecatedSynchronousErrorHandling)
      throw new Error("bad call");
    try {
      n.call(this._context, i);
    } catch (s) {
      return Lt.useDeprecatedSynchronousErrorHandling ? (r.syncErrorValue = s, r.syncErrorThrown = !0, !0) : (qn(s), !0);
    }
    return !1;
  }, e.prototype._unsubscribe = function() {
    var r = this._parentSubscriber;
    this._context = null, this._parentSubscriber = null, r.unsubscribe();
  }, e;
}(Y);
function $c(t) {
  for (; t; ) {
    var e = t, r = e.closed, n = e.destination, i = e.isStopped;
    if (r || i)
      return !1;
    n && n instanceof Y ? t = n : t = null;
  }
  return !0;
}
function H3(t, e, r) {
  if (t) {
    if (t instanceof Y)
      return t;
    if (t[ao])
      return t[ao]();
  }
  return !t && !e && !r ? new Y(oo) : new Y(t, e, r);
}
var Ci = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function Or(t) {
  return t;
}
function $u() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return l0(t);
}
function l0(t) {
  return t.length === 0 ? Or : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
var ue = /* @__PURE__ */ function() {
  function t(e) {
    this._isScalar = !1, e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var i = this.operator, s = H3(e, r, n);
    if (i ? s.add(i.call(s, this.source)) : s.add(this.source || Lt.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), Lt.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown))
      throw s.syncErrorValue;
    return s;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      Lt.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = r), $c(e) ? e.error(r) : console.warn(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = oh(r), new r(function(i, s) {
      var o;
      o = n.subscribe(function(a) {
        try {
          e(a);
        } catch (u) {
          s(u), o && o.unsubscribe();
        }
      }, s, i);
    });
  }, t.prototype._subscribe = function(e) {
    var r = this.source;
    return r && r.subscribe(e);
  }, t.prototype[Ci] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return e.length === 0 ? this : l0(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = oh(e), new e(function(n, i) {
      var s;
      r.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return i(o);
      }, function() {
        return n(s);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function oh(t) {
  if (t || (t = Lt.Promise || Promise), !t)
    throw new Error("no Promise impl found");
  return t;
}
var V3 = /* @__PURE__ */ function() {
  function t() {
    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), Rr = V3, f0 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.subject = r, i.subscriber = n, i.closed = !1, i;
  }
  return e.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = !0;
      var r = this.subject, n = r.observers;
      if (this.subject = null, !(!n || n.length === 0 || r.isStopped || r.closed)) {
        var i = n.indexOf(this.subscriber);
        i !== -1 && n.splice(i, 1);
      }
    }
  }, e;
}(Ke), h0 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.destination = r, n;
  }
  return e;
}(Y), ft = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    var r = t.call(this) || this;
    return r.observers = [], r.closed = !1, r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return e.prototype[ao] = function() {
    return new h0(this);
  }, e.prototype.lift = function(r) {
    var n = new ah(this, this);
    return n.operator = r, n;
  }, e.prototype.next = function(r) {
    if (this.closed)
      throw new Rr();
    if (!this.isStopped)
      for (var n = this.observers, i = n.length, s = n.slice(), o = 0; o < i; o++)
        s[o].next(r);
  }, e.prototype.error = function(r) {
    if (this.closed)
      throw new Rr();
    this.hasError = !0, this.thrownError = r, this.isStopped = !0;
    for (var n = this.observers, i = n.length, s = n.slice(), o = 0; o < i; o++)
      s[o].error(r);
    this.observers.length = 0;
  }, e.prototype.complete = function() {
    if (this.closed)
      throw new Rr();
    this.isStopped = !0;
    for (var r = this.observers, n = r.length, i = r.slice(), s = 0; s < n; s++)
      i[s].complete();
    this.observers.length = 0;
  }, e.prototype.unsubscribe = function() {
    this.isStopped = !0, this.closed = !0, this.observers = null;
  }, e.prototype._trySubscribe = function(r) {
    if (this.closed)
      throw new Rr();
    return t.prototype._trySubscribe.call(this, r);
  }, e.prototype._subscribe = function(r) {
    if (this.closed)
      throw new Rr();
    return this.hasError ? (r.error(this.thrownError), Ke.EMPTY) : this.isStopped ? (r.complete(), Ke.EMPTY) : (this.observers.push(r), new f0(this, r));
  }, e.prototype.asObservable = function() {
    var r = new ue();
    return r.source = this, r;
  }, e.create = function(r, n) {
    return new ah(r, n);
  }, e;
}(ue), ah = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.destination = r, i.source = n, i;
  }
  return e.prototype.next = function(r) {
    var n = this.destination;
    n && n.next && n.next(r);
  }, e.prototype.error = function(r) {
    var n = this.destination;
    n && n.error && this.destination.error(r);
  }, e.prototype.complete = function() {
    var r = this.destination;
    r && r.complete && this.destination.complete();
  }, e.prototype._subscribe = function(r) {
    var n = this.source;
    return n ? this.source.subscribe(r) : Ke.EMPTY;
  }, e;
}(ft);
function Dc() {
  return function(e) {
    return e.lift(new U3(e));
  };
}
var U3 = /* @__PURE__ */ function() {
  function t(e) {
    this.connectable = e;
  }
  return t.prototype.call = function(e, r) {
    var n = this.connectable;
    n._refCount++;
    var i = new z3(e, n), s = r.subscribe(i);
    return i.closed || (i.connection = n.connect()), s;
  }, t;
}(), z3 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.connectable = n, i;
  }
  return e.prototype._unsubscribe = function() {
    var r = this.connectable;
    if (!r) {
      this.connection = null;
      return;
    }
    this.connectable = null;
    var n = r._refCount;
    if (n <= 0) {
      this.connection = null;
      return;
    }
    if (r._refCount = n - 1, n > 1) {
      this.connection = null;
      return;
    }
    var i = this.connection, s = r._connection;
    this.connection = null, s && (!i || s === i) && s.unsubscribe();
  }, e;
}(Y), d0 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.source = r, i.subjectFactory = n, i._refCount = 0, i._isComplete = !1, i;
  }
  return e.prototype._subscribe = function(r) {
    return this.getSubject().subscribe(r);
  }, e.prototype.getSubject = function() {
    var r = this._subject;
    return (!r || r.isStopped) && (this._subject = this.subjectFactory()), this._subject;
  }, e.prototype.connect = function() {
    var r = this._connection;
    return r || (this._isComplete = !1, r = this._connection = new Ke(), r.add(this.source.subscribe(new G3(this.getSubject(), this))), r.closed && (this._connection = null, r = Ke.EMPTY)), r;
  }, e.prototype.refCount = function() {
    return Dc()(this);
  }, e;
}(ue), q3 = /* @__PURE__ */ function() {
  var t = d0.prototype;
  return {
    operator: { value: null },
    _refCount: { value: 0, writable: !0 },
    _subject: { value: null, writable: !0 },
    _connection: { value: null, writable: !0 },
    _subscribe: { value: t._subscribe },
    _isComplete: { value: t._isComplete, writable: !0 },
    getSubject: { value: t.getSubject },
    connect: { value: t.connect },
    refCount: { value: t.refCount }
  };
}(), G3 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.connectable = n, i;
  }
  return e.prototype._error = function(r) {
    this._unsubscribe(), t.prototype._error.call(this, r);
  }, e.prototype._complete = function() {
    this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    var r = this.connectable;
    if (r) {
      this.connectable = null;
      var n = r._connection;
      r._refCount = 0, r._subject = null, r._connection = null, n && n.unsubscribe();
    }
  }, e;
}(h0);
function J3(t, e, r, n) {
  return function(i) {
    return i.lift(new Z3(t, e, r, n));
  };
}
var Z3 = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.keySelector = e, this.elementSelector = r, this.durationSelector = n, this.subjectSelector = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Q3(e, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  }, t;
}(), Q3 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    return a.keySelector = n, a.elementSelector = i, a.durationSelector = s, a.subjectSelector = o, a.groups = null, a.attemptedToUnsubscribe = !1, a.count = 0, a;
  }
  return e.prototype._next = function(r) {
    var n;
    try {
      n = this.keySelector(r);
    } catch (i) {
      this.error(i);
      return;
    }
    this._group(r, n);
  }, e.prototype._group = function(r, n) {
    var i = this.groups;
    i || (i = this.groups = /* @__PURE__ */ new Map());
    var s = i.get(n), o;
    if (this.elementSelector)
      try {
        o = this.elementSelector(r);
      } catch (l) {
        this.error(l);
      }
    else
      o = r;
    if (!s) {
      s = this.subjectSelector ? this.subjectSelector() : new ft(), i.set(n, s);
      var a = new Du(n, s, this);
      if (this.destination.next(a), this.durationSelector) {
        var u = void 0;
        try {
          u = this.durationSelector(new Du(n, s));
        } catch (l) {
          this.error(l);
          return;
        }
        this.add(u.subscribe(new Y3(n, s, this)));
      }
    }
    s.closed || s.next(o);
  }, e.prototype._error = function(r) {
    var n = this.groups;
    n && (n.forEach(function(i, s) {
      i.error(r);
    }), n.clear()), this.destination.error(r);
  }, e.prototype._complete = function() {
    var r = this.groups;
    r && (r.forEach(function(n, i) {
      n.complete();
    }), r.clear()), this.destination.complete();
  }, e.prototype.removeGroup = function(r) {
    this.groups.delete(r);
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.attemptedToUnsubscribe = !0, this.count === 0 && t.prototype.unsubscribe.call(this));
  }, e;
}(Y), Y3 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, n) || this;
    return s.key = r, s.group = n, s.parent = i, s;
  }
  return e.prototype._next = function(r) {
    this.complete();
  }, e.prototype._unsubscribe = function() {
    var r = this, n = r.parent, i = r.key;
    this.key = this.parent = null, n && n.removeGroup(i);
  }, e;
}(Y), Du = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this;
    return s.key = r, s.groupSubject = n, s.refCountSubscription = i, s;
  }
  return e.prototype._subscribe = function(r) {
    var n = new Ke(), i = this, s = i.refCountSubscription, o = i.groupSubject;
    return s && !s.closed && n.add(new K3(s)), n.add(o.subscribe(r)), n;
  }, e;
}(ue), K3 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.parent = r, r.count++, n;
  }
  return e.prototype.unsubscribe = function() {
    var r = this.parent;
    !r.closed && !this.closed && (t.prototype.unsubscribe.call(this), r.count -= 1, r.count === 0 && r.attemptedToUnsubscribe && r.unsubscribe());
  }, e;
}(Ke), p0 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n._value = r, n;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype._subscribe = function(r) {
    var n = t.prototype._subscribe.call(this, r);
    return n && !n.closed && r.next(this._value), n;
  }, e.prototype.getValue = function() {
    if (this.hasError)
      throw this.thrownError;
    if (this.closed)
      throw new Rr();
    return this._value;
  }, e.prototype.next = function(r) {
    t.prototype.next.call(this, this._value = r);
  }, e;
}(ft), X3 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(r, n) {
    return this;
  }, e;
}(Ke), _s = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i.pending = !1, i;
  }
  return e.prototype.schedule = function(r, n) {
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = r;
    var i = this.id, s = this.scheduler;
    return i != null && (this.id = this.recycleAsyncId(s, i, n)), this.pending = !0, this.delay = n, this.id = this.id || this.requestAsyncId(s, this.id, n), this;
  }, e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), setInterval(r.flush.bind(r, this), i);
  }, e.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i !== null && this.delay === i && this.pending === !1)
      return n;
    clearInterval(n);
  }, e.prototype.execute = function(r, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(r, n);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(r, n) {
    var i = !1, s = void 0;
    try {
      this.work(r);
    } catch (o) {
      i = !0, s = !!o && o || new Error(o);
    }
    if (i)
      return this.unsubscribe(), s;
  }, e.prototype._unsubscribe = function() {
    var r = this.id, n = this.scheduler, i = n.actions, s = i.indexOf(this);
    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, s !== -1 && i.splice(s, 1), r != null && (this.id = this.recycleAsyncId(n, r, null)), this.delay = null;
  }, e;
}(X3), e4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return e.prototype.schedule = function(r, n) {
    return n === void 0 && (n = 0), n > 0 ? t.prototype.schedule.call(this, r, n) : (this.delay = n, this.state = r, this.scheduler.flush(this), this);
  }, e.prototype.execute = function(r, n) {
    return n > 0 || this.closed ? t.prototype.execute.call(this, r, n) : this._execute(r, n);
  }, e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0 ? t.prototype.requestAsyncId.call(this, r, n, i) : r.flush(this);
  }, e;
}(_s), Bu = /* @__PURE__ */ function() {
  function t(e, r) {
    r === void 0 && (r = t.now), this.SchedulerAction = e, this.now = r;
  }
  return t.prototype.schedule = function(e, r, n) {
    return r === void 0 && (r = 0), new this.SchedulerAction(this, e).schedule(n, r);
  }, t.now = function() {
    return Date.now();
  }, t;
}(), ws = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    n === void 0 && (n = Bu.now);
    var i = t.call(this, r, function() {
      return e.delegate && e.delegate !== i ? e.delegate.now() : n();
    }) || this;
    return i.actions = [], i.active = !1, i.scheduled = void 0, i;
  }
  return e.prototype.schedule = function(r, n, i) {
    return n === void 0 && (n = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(r, n, i) : t.prototype.schedule.call(this, r, n, i);
  }, e.prototype.flush = function(r) {
    var n = this.actions;
    if (this.active) {
      n.push(r);
      return;
    }
    var i;
    this.active = !0;
    do
      if (i = r.execute(r.state, r.delay))
        break;
    while (r = n.shift());
    if (this.active = !1, i) {
      for (; r = n.shift(); )
        r.unsubscribe();
      throw i;
    }
  }, e;
}(Bu), t4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(ws), g0 = /* @__PURE__ */ new t4(e4), b0 = g0, fi = /* @__PURE__ */ new ue(function(t) {
  return t.complete();
});
function Ri(t) {
  return t ? r4(t) : fi;
}
function r4(t) {
  return new ue(function(e) {
    return t.schedule(function() {
      return e.complete();
    });
  });
}
function At(t) {
  return t && typeof t.schedule == "function";
}
var v0 = function(t) {
  return function(e) {
    for (var r = 0, n = t.length; r < n && !e.closed; r++)
      e.next(t[r]);
    e.complete();
  };
};
function Bc(t, e) {
  return new ue(function(r) {
    var n = new Ke(), i = 0;
    return n.add(e.schedule(function() {
      if (i === t.length) {
        r.complete();
        return;
      }
      r.next(t[i++]), r.closed || n.add(this.schedule());
    })), n;
  });
}
function Ss(t, e) {
  return e ? Bc(t, e) : new ue(v0(t));
}
function Jo() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = t[t.length - 1];
  return At(r) ? (t.pop(), Bc(t, r)) : Ss(t);
}
function jc(t, e) {
  return e ? new ue(function(r) {
    return e.schedule(n4, 0, { error: t, subscriber: r });
  }) : new ue(function(r) {
    return r.error(t);
  });
}
function n4(t) {
  var e = t.error, r = t.subscriber;
  r.error(e);
}
var ju;
ju || (ju = {});
var br = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.kind = e, this.value = r, this.error = n, this.hasValue = e === "N";
  }
  return t.prototype.observe = function(e) {
    switch (this.kind) {
      case "N":
        return e.next && e.next(this.value);
      case "E":
        return e.error && e.error(this.error);
      case "C":
        return e.complete && e.complete();
    }
  }, t.prototype.do = function(e, r, n) {
    var i = this.kind;
    switch (i) {
      case "N":
        return e && e(this.value);
      case "E":
        return r && r(this.error);
      case "C":
        return n && n();
    }
  }, t.prototype.accept = function(e, r, n) {
    return e && typeof e.next == "function" ? this.observe(e) : this.do(e, r, n);
  }, t.prototype.toObservable = function() {
    var e = this.kind;
    switch (e) {
      case "N":
        return Jo(this.value);
      case "E":
        return jc(this.error);
      case "C":
        return Ri();
    }
    throw new Error("unexpected notification kind value");
  }, t.createNext = function(e) {
    return typeof e < "u" ? new t("N", e) : t.undefinedValueNotification;
  }, t.createError = function(e) {
    return new t("E", void 0, e);
  }, t.createComplete = function() {
    return t.completeNotification;
  }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t;
}();
function i4(t, e) {
  return e === void 0 && (e = 0), function(n) {
    return n.lift(new s4(t, e));
  };
}
var s4 = /* @__PURE__ */ function() {
  function t(e, r) {
    r === void 0 && (r = 0), this.scheduler = e, this.delay = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new y0(e, this.scheduler, this.delay));
  }, t;
}(), y0 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    i === void 0 && (i = 0);
    var s = t.call(this, r) || this;
    return s.scheduler = n, s.delay = i, s;
  }
  return e.dispatch = function(r) {
    var n = r.notification, i = r.destination;
    n.observe(i), this.unsubscribe();
  }, e.prototype.scheduleMessage = function(r) {
    var n = this.destination;
    n.add(this.scheduler.schedule(e.dispatch, this.delay, new o4(r, this.destination)));
  }, e.prototype._next = function(r) {
    this.scheduleMessage(br.createNext(r));
  }, e.prototype._error = function(r) {
    this.scheduleMessage(br.createError(r)), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.scheduleMessage(br.createComplete()), this.unsubscribe();
  }, e;
}(Y), o4 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.notification = e, this.destination = r;
  }
  return t;
}(), Fc = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    r === void 0 && (r = Number.POSITIVE_INFINITY), n === void 0 && (n = Number.POSITIVE_INFINITY);
    var s = t.call(this) || this;
    return s.scheduler = i, s._events = [], s._infiniteTimeWindow = !1, s._bufferSize = r < 1 ? 1 : r, s._windowTime = n < 1 ? 1 : n, n === Number.POSITIVE_INFINITY ? (s._infiniteTimeWindow = !0, s.next = s.nextInfiniteTimeWindow) : s.next = s.nextTimeWindow, s;
  }
  return e.prototype.nextInfiniteTimeWindow = function(r) {
    if (!this.isStopped) {
      var n = this._events;
      n.push(r), n.length > this._bufferSize && n.shift();
    }
    t.prototype.next.call(this, r);
  }, e.prototype.nextTimeWindow = function(r) {
    this.isStopped || (this._events.push(new a4(this._getNow(), r)), this._trimBufferThenGetEvents()), t.prototype.next.call(this, r);
  }, e.prototype._subscribe = function(r) {
    var n = this._infiniteTimeWindow, i = n ? this._events : this._trimBufferThenGetEvents(), s = this.scheduler, o = i.length, a;
    if (this.closed)
      throw new Rr();
    if (this.isStopped || this.hasError ? a = Ke.EMPTY : (this.observers.push(r), a = new f0(this, r)), s && r.add(r = new y0(r, s)), n)
      for (var u = 0; u < o && !r.closed; u++)
        r.next(i[u]);
    else
      for (var u = 0; u < o && !r.closed; u++)
        r.next(i[u].value);
    return this.hasError ? r.error(this.thrownError) : this.isStopped && r.complete(), a;
  }, e.prototype._getNow = function() {
    return (this.scheduler || b0).now();
  }, e.prototype._trimBufferThenGetEvents = function() {
    for (var r = this._getNow(), n = this._bufferSize, i = this._windowTime, s = this._events, o = s.length, a = 0; a < o && !(r - s[a].time < i); )
      a++;
    return o > n && (a = Math.max(a, o - n)), a > 0 && s.splice(0, a), s;
  }, e;
}(ft), a4 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.time = e, this.value = r;
  }
  return t;
}(), Ii = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.value = null, r.hasNext = !1, r.hasCompleted = !1, r;
  }
  return e.prototype._subscribe = function(r) {
    return this.hasError ? (r.error(this.thrownError), Ke.EMPTY) : this.hasCompleted && this.hasNext ? (r.next(this.value), r.complete(), Ke.EMPTY) : t.prototype._subscribe.call(this, r);
  }, e.prototype.next = function(r) {
    this.hasCompleted || (this.value = r, this.hasNext = !0);
  }, e.prototype.error = function(r) {
    this.hasCompleted || t.prototype.error.call(this, r);
  }, e.prototype.complete = function() {
    this.hasCompleted = !0, this.hasNext && t.prototype.next.call(this, this.value), t.prototype.complete.call(this);
  }, e;
}(ft), u4 = 1, c4 = /* @__PURE__ */ function() {
  return /* @__PURE__ */ Promise.resolve();
}(), Fu = {};
function uh(t) {
  return t in Fu ? (delete Fu[t], !0) : !1;
}
var ch = {
  setImmediate: function(t) {
    var e = u4++;
    return Fu[e] = !0, c4.then(function() {
      return uh(e) && t();
    }), e;
  },
  clearImmediate: function(t) {
    uh(t);
  }
}, l4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? t.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r.scheduled || (r.scheduled = ch.setImmediate(r.flush.bind(r, null))));
  }, e.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0)
      return t.prototype.recycleAsyncId.call(this, r, n, i);
    r.actions.length === 0 && (ch.clearImmediate(n), r.scheduled = void 0);
  }, e;
}(_s), f4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.flush = function(r) {
    this.active = !0, this.scheduled = void 0;
    var n = this.actions, i, s = -1, o = n.length;
    r = r || n.shift();
    do
      if (i = r.execute(r.state, r.delay))
        break;
    while (++s < o && (r = n.shift()));
    if (this.active = !1, i) {
      for (; ++s < o && (r = n.shift()); )
        r.unsubscribe();
      throw i;
    }
  }, e;
}(ws), m0 = /* @__PURE__ */ new f4(l4), qs = m0, _0 = /* @__PURE__ */ new ws(_s), St = _0, h4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? t.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r.scheduled || (r.scheduled = requestAnimationFrame(function() {
      return r.flush(null);
    })));
  }, e.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0)
      return t.prototype.recycleAsyncId.call(this, r, n, i);
    r.actions.length === 0 && (cancelAnimationFrame(n), r.scheduled = void 0);
  }, e;
}(_s), d4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.flush = function(r) {
    this.active = !0, this.scheduled = void 0;
    var n = this.actions, i, s = -1, o = n.length;
    r = r || n.shift();
    do
      if (i = r.execute(r.state, r.delay))
        break;
    while (++s < o && (r = n.shift()));
    if (this.active = !1, i) {
      for (; ++s < o && (r = n.shift()); )
        r.unsubscribe();
      throw i;
    }
  }, e;
}(ws), w0 = /* @__PURE__ */ new d4(h4), p4 = w0, g4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    r === void 0 && (r = S0), n === void 0 && (n = Number.POSITIVE_INFINITY);
    var i = t.call(this, r, function() {
      return i.frame;
    }) || this;
    return i.maxFrames = n, i.frame = 0, i.index = -1, i;
  }
  return e.prototype.flush = function() {
    for (var r = this, n = r.actions, i = r.maxFrames, s, o; (o = n[0]) && o.delay <= i && (n.shift(), this.frame = o.delay, !(s = o.execute(o.state, o.delay))); )
      ;
    if (s) {
      for (; o = n.shift(); )
        o.unsubscribe();
      throw s;
    }
  }, e.frameTimeFactor = 10, e;
}(ws), S0 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    i === void 0 && (i = r.index += 1);
    var s = t.call(this, r, n) || this;
    return s.scheduler = r, s.work = n, s.index = i, s.active = !0, s.index = r.index = i, s;
  }
  return e.prototype.schedule = function(r, n) {
    if (n === void 0 && (n = 0), !this.id)
      return t.prototype.schedule.call(this, r, n);
    this.active = !1;
    var i = new e(this.scheduler, this.work);
    return this.add(i), i.schedule(r, n);
  }, e.prototype.requestAsyncId = function(r, n, i) {
    i === void 0 && (i = 0), this.delay = r.frame + i;
    var s = r.actions;
    return s.push(this), s.sort(e.sortActions), !0;
  }, e.prototype.recycleAsyncId = function(r, n, i) {
  }, e.prototype._execute = function(r, n) {
    if (this.active === !0)
      return t.prototype._execute.call(this, r, n);
  }, e.sortActions = function(r, n) {
    return r.delay === n.delay ? r.index === n.index ? 0 : r.index > n.index ? 1 : -1 : r.delay > n.delay ? 1 : -1;
  }, e;
}(_s);
function rr() {
}
function b4(t) {
  return !!t && (t instanceof ue || typeof t.lift == "function" && typeof t.subscribe == "function");
}
var v4 = /* @__PURE__ */ function() {
  function t() {
    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), hi = v4, y4 = /* @__PURE__ */ function() {
  function t() {
    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), Es = y4, m4 = /* @__PURE__ */ function() {
  function t() {
    return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), E0 = m4;
function Ft(t, e) {
  return function(n) {
    if (typeof t != "function")
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    return n.lift(new _4(t, e));
  };
}
var _4 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.project = e, this.thisArg = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new w4(e, this.project, this.thisArg));
  }, t;
}(), w4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.project = n, s.count = 0, s.thisArg = i || s, s;
  }
  return e.prototype._next = function(r) {
    var n;
    try {
      n = this.project.call(this.thisArg, r, this.count++);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(n);
  }, e;
}(Y);
function x0(t, e, r) {
  if (e)
    if (At(e))
      r = e;
    else
      return function() {
        for (var n = [], i = 0; i < arguments.length; i++)
          n[i] = arguments[i];
        return x0(t, r).apply(void 0, n).pipe(Ft(function(s) {
          return wt(s) ? e.apply(void 0, s) : e(s);
        }));
      };
  return function() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    var s = this, o, a = {
      context: s,
      subject: o,
      callbackFunc: t,
      scheduler: r
    };
    return new ue(function(u) {
      if (r) {
        var h = {
          args: n,
          subscriber: u,
          params: a
        };
        return r.schedule(S4, 0, h);
      } else {
        if (!o) {
          o = new Ii();
          var l = function() {
            for (var p = [], b = 0; b < arguments.length; b++)
              p[b] = arguments[b];
            o.next(p.length <= 1 ? p[0] : p), o.complete();
          };
          try {
            t.apply(s, n.concat([l]));
          } catch (p) {
            $c(o) ? o.error(p) : console.warn(p);
          }
        }
        return o.subscribe(u);
      }
    });
  };
}
function S4(t) {
  var e = this, r = t.args, n = t.subscriber, i = t.params, s = i.callbackFunc, o = i.context, a = i.scheduler, u = i.subject;
  if (!u) {
    u = i.subject = new Ii();
    var l = function() {
      for (var h = [], p = 0; p < arguments.length; p++)
        h[p] = arguments[p];
      var b = h.length <= 1 ? h[0] : h;
      e.add(a.schedule(E4, 0, { value: b, subject: u }));
    };
    try {
      s.apply(o, r.concat([l]));
    } catch (h) {
      u.error(h);
    }
  }
  this.add(u.subscribe(n));
}
function E4(t) {
  var e = t.value, r = t.subject;
  r.next(e), r.complete();
}
function M0(t, e, r) {
  if (e)
    if (At(e))
      r = e;
    else
      return function() {
        for (var n = [], i = 0; i < arguments.length; i++)
          n[i] = arguments[i];
        return M0(t, r).apply(void 0, n).pipe(Ft(function(s) {
          return wt(s) ? e.apply(void 0, s) : e(s);
        }));
      };
  return function() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    var s = {
      subject: void 0,
      args: n,
      callbackFunc: t,
      scheduler: r,
      context: this
    };
    return new ue(function(o) {
      var a = s.context, u = s.subject;
      if (r)
        return r.schedule(x4, 0, { params: s, subscriber: o, context: a });
      if (!u) {
        u = s.subject = new Ii();
        var l = function() {
          for (var h = [], p = 0; p < arguments.length; p++)
            h[p] = arguments[p];
          var b = h.shift();
          if (b) {
            u.error(b);
            return;
          }
          u.next(h.length <= 1 ? h[0] : h), u.complete();
        };
        try {
          t.apply(a, n.concat([l]));
        } catch (h) {
          $c(u) ? u.error(h) : console.warn(h);
        }
      }
      return u.subscribe(o);
    });
  };
}
function x4(t) {
  var e = this, r = t.params, n = t.subscriber, i = t.context, s = r.callbackFunc, o = r.args, a = r.scheduler, u = r.subject;
  if (!u) {
    u = r.subject = new Ii();
    var l = function() {
      for (var h = [], p = 0; p < arguments.length; p++)
        h[p] = arguments[p];
      var b = h.shift();
      if (b)
        e.add(a.schedule(lh, 0, { err: b, subject: u }));
      else {
        var S = h.length <= 1 ? h[0] : h;
        e.add(a.schedule(M4, 0, { value: S, subject: u }));
      }
    };
    try {
      s.apply(i, o.concat([l]));
    } catch (h) {
      this.add(a.schedule(lh, 0, { err: h, subject: u }));
    }
  }
  this.add(u.subscribe(n));
}
function M4(t) {
  var e = t.value, r = t.subject;
  r.next(e), r.complete();
}
function lh(t) {
  var e = t.err, r = t.subject;
  r.error(e);
}
var xn = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.notifyNext = function(r, n, i, s, o) {
    this.destination.next(n);
  }, e.prototype.notifyError = function(r, n) {
    this.destination.error(r);
  }, e.prototype.notifyComplete = function(r) {
    this.destination.complete();
  }, e;
}(Y), C4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this;
    return s.parent = r, s.outerValue = n, s.outerIndex = i, s.index = 0, s;
  }
  return e.prototype._next = function(r) {
    this.parent.notifyNext(this.outerValue, r, this.outerIndex, this.index++, this);
  }, e.prototype._error = function(r) {
    this.parent.notifyError(r, this), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.parent.notifyComplete(this), this.unsubscribe();
  }, e;
}(Y), R4 = function(t) {
  return function(e) {
    return t.then(function(r) {
      e.closed || (e.next(r), e.complete());
    }, function(r) {
      return e.error(r);
    }).then(null, qn), e;
  };
};
function I4() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Nr = /* @__PURE__ */ I4(), A4 = function(t) {
  return function(e) {
    var r = t[Nr]();
    do {
      var n = void 0;
      try {
        n = r.next();
      } catch (i) {
        return e.error(i), e;
      }
      if (n.done) {
        e.complete();
        break;
      }
      if (e.next(n.value), e.closed)
        break;
    } while (!0);
    return typeof r.return == "function" && e.add(function() {
      r.return && r.return();
    }), e;
  };
}, k4 = function(t) {
  return function(e) {
    var r = t[Ci]();
    if (typeof r.subscribe != "function")
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    return r.subscribe(e);
  };
}, C0 = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function R0(t) {
  return !!t && typeof t.subscribe != "function" && typeof t.then == "function";
}
var Yi = function(t) {
  if (t && typeof t[Ci] == "function")
    return k4(t);
  if (C0(t))
    return v0(t);
  if (R0(t))
    return R4(t);
  if (t && typeof t[Nr] == "function")
    return A4(t);
  var e = Pc(t) ? "an invalid object" : "'" + t + "'", r = "You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
  throw new TypeError(r);
};
function yr(t, e, r, n, i) {
  if (i === void 0 && (i = new C4(t, r, n)), !i.closed)
    return e instanceof ue ? e.subscribe(i) : Yi(e)(i);
}
var fh = {};
function T4() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = void 0, n = void 0;
  return At(t[t.length - 1]) && (n = t.pop()), typeof t[t.length - 1] == "function" && (r = t.pop()), t.length === 1 && wt(t[0]) && (t = t[0]), Ss(t, n).lift(new Wc(r));
}
var Wc = /* @__PURE__ */ function() {
  function t(e) {
    this.resultSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new O4(e, this.resultSelector));
  }, t;
}(), O4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.resultSelector = n, i.active = 0, i.values = [], i.observables = [], i;
  }
  return e.prototype._next = function(r) {
    this.values.push(fh), this.observables.push(r);
  }, e.prototype._complete = function() {
    var r = this.observables, n = r.length;
    if (n === 0)
      this.destination.complete();
    else {
      this.active = n, this.toRespond = n;
      for (var i = 0; i < n; i++) {
        var s = r[i];
        this.add(yr(this, s, void 0, i));
      }
    }
  }, e.prototype.notifyComplete = function(r) {
    (this.active -= 1) === 0 && this.destination.complete();
  }, e.prototype.notifyNext = function(r, n, i) {
    var s = this.values, o = s[i], a = this.toRespond ? o === fh ? --this.toRespond : this.toRespond : 0;
    s[i] = n, a === 0 && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()));
  }, e.prototype._tryResultSelector = function(r) {
    var n;
    try {
      n = this.resultSelector.apply(this, r);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(n);
  }, e;
}(xn);
function N4(t, e) {
  return new ue(function(r) {
    var n = new Ke();
    return n.add(e.schedule(function() {
      var i = t[Ci]();
      n.add(i.subscribe({
        next: function(s) {
          n.add(e.schedule(function() {
            return r.next(s);
          }));
        },
        error: function(s) {
          n.add(e.schedule(function() {
            return r.error(s);
          }));
        },
        complete: function() {
          n.add(e.schedule(function() {
            return r.complete();
          }));
        }
      }));
    })), n;
  });
}
function L4(t, e) {
  return new ue(function(r) {
    var n = new Ke();
    return n.add(e.schedule(function() {
      return t.then(function(i) {
        n.add(e.schedule(function() {
          r.next(i), n.add(e.schedule(function() {
            return r.complete();
          }));
        }));
      }, function(i) {
        n.add(e.schedule(function() {
          return r.error(i);
        }));
      });
    })), n;
  });
}
function P4(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new ue(function(r) {
    var n = new Ke(), i;
    return n.add(function() {
      i && typeof i.return == "function" && i.return();
    }), n.add(e.schedule(function() {
      i = t[Nr](), n.add(e.schedule(function() {
        if (!r.closed) {
          var s, o;
          try {
            var a = i.next();
            s = a.value, o = a.done;
          } catch (u) {
            r.error(u);
            return;
          }
          o ? r.complete() : (r.next(s), this.schedule());
        }
      }));
    })), n;
  });
}
function $4(t) {
  return t && typeof t[Ci] == "function";
}
function D4(t) {
  return t && typeof t[Nr] == "function";
}
function I0(t, e) {
  if (t != null) {
    if ($4(t))
      return N4(t, e);
    if (R0(t))
      return L4(t, e);
    if (C0(t))
      return Bc(t, e);
    if (D4(t) || typeof t == "string")
      return P4(t, e);
  }
  throw new TypeError((t !== null && typeof t || t) + " is not observable");
}
function _r(t, e) {
  return e ? I0(t, e) : t instanceof ue ? t : new ue(Yi(t));
}
var Xe = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.parent = r, n;
  }
  return e.prototype._next = function(r) {
    this.parent.notifyNext(r);
  }, e.prototype._error = function(r) {
    this.parent.notifyError(r), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.parent.notifyComplete(), this.unsubscribe();
  }, e;
}(Y), et = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.notifyNext = function(r) {
    this.destination.next(r);
  }, e.prototype.notifyError = function(r) {
    this.destination.error(r);
  }, e.prototype.notifyComplete = function() {
    this.destination.complete();
  }, e;
}(Y);
function tt(t, e) {
  if (!e.closed) {
    if (t instanceof ue)
      return t.subscribe(e);
    var r;
    try {
      r = Yi(t)(e);
    } catch (n) {
      e.error(n);
    }
    return r;
  }
}
function pn(t, e, r) {
  return r === void 0 && (r = Number.POSITIVE_INFINITY), typeof e == "function" ? function(n) {
    return n.pipe(pn(function(i, s) {
      return _r(t(i, s)).pipe(Ft(function(o, a) {
        return e(i, o, s, a);
      }));
    }, r));
  } : (typeof e == "number" && (r = e), function(n) {
    return n.lift(new B4(t, r));
  });
}
var B4 = /* @__PURE__ */ function() {
  function t(e, r) {
    r === void 0 && (r = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new j4(e, this.project, this.concurrent));
  }, t;
}(), j4 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    i === void 0 && (i = Number.POSITIVE_INFINITY);
    var s = t.call(this, r) || this;
    return s.project = n, s.concurrent = i, s.hasCompleted = !1, s.buffer = [], s.active = 0, s.index = 0, s;
  }
  return e.prototype._next = function(r) {
    this.active < this.concurrent ? this._tryNext(r) : this.buffer.push(r);
  }, e.prototype._tryNext = function(r) {
    var n, i = this.index++;
    try {
      n = this.project(r, i);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this.active++, this._innerSub(n);
  }, e.prototype._innerSub = function(r) {
    var n = new Xe(this), i = this.destination;
    i.add(n);
    var s = tt(r, n);
    s !== n && i.add(s);
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && this.destination.complete(), this.unsubscribe();
  }, e.prototype.notifyNext = function(r) {
    this.destination.next(r);
  }, e.prototype.notifyComplete = function() {
    var r = this.buffer;
    this.active--, r.length > 0 ? this._next(r.shift()) : this.active === 0 && this.hasCompleted && this.destination.complete();
  }, e;
}(et), F4 = pn;
function Hc(t) {
  return t === void 0 && (t = Number.POSITIVE_INFINITY), pn(Or, t);
}
function A0() {
  return Hc(1);
}
function Ki() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return A0()(Jo.apply(void 0, t));
}
function Vc(t) {
  return new ue(function(e) {
    var r;
    try {
      r = t();
    } catch (i) {
      e.error(i);
      return;
    }
    var n = r ? _r(r) : Ri();
    return n.subscribe(e);
  });
}
function W4() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  if (t.length === 1) {
    var r = t[0];
    if (wt(r))
      return Bs(r, null);
    if (Pc(r) && Object.getPrototypeOf(r) === Object.prototype) {
      var n = Object.keys(r);
      return Bs(n.map(function(s) {
        return r[s];
      }), n);
    }
  }
  if (typeof t[t.length - 1] == "function") {
    var i = t.pop();
    return t = t.length === 1 && wt(t[0]) ? t[0] : t, Bs(t, null).pipe(Ft(function(s) {
      return i.apply(void 0, s);
    }));
  }
  return Bs(t, null);
}
function Bs(t, e) {
  return new ue(function(r) {
    var n = t.length;
    if (n === 0) {
      r.complete();
      return;
    }
    for (var i = new Array(n), s = 0, o = 0, a = function(l) {
      var h = _r(t[l]), p = !1;
      r.add(h.subscribe({
        next: function(b) {
          p || (p = !0, o++), i[l] = b;
        },
        error: function(b) {
          return r.error(b);
        },
        complete: function() {
          s++, (s === n || !p) && (o === n && r.next(e ? e.reduce(function(b, S, R) {
            return b[S] = i[R], b;
          }, {}) : i), r.complete());
        }
      }));
    }, u = 0; u < n; u++)
      a(u);
  });
}
function k0(t, e, r, n) {
  return li(r) && (n = r, r = void 0), n ? k0(t, e, r).pipe(Ft(function(i) {
    return wt(i) ? n.apply(void 0, i) : n(i);
  })) : new ue(function(i) {
    function s(o) {
      arguments.length > 1 ? i.next(Array.prototype.slice.call(arguments)) : i.next(o);
    }
    T0(t, e, s, i, r);
  });
}
function T0(t, e, r, n, i) {
  var s;
  if (U4(t)) {
    var o = t;
    t.addEventListener(e, r, i), s = function() {
      return o.removeEventListener(e, r, i);
    };
  } else if (V4(t)) {
    var a = t;
    t.on(e, r), s = function() {
      return a.off(e, r);
    };
  } else if (H4(t)) {
    var u = t;
    t.addListener(e, r), s = function() {
      return u.removeListener(e, r);
    };
  } else if (t && t.length)
    for (var l = 0, h = t.length; l < h; l++)
      T0(t[l], e, r, n, i);
  else
    throw new TypeError("Invalid event target");
  n.add(s);
}
function H4(t) {
  return t && typeof t.addListener == "function" && typeof t.removeListener == "function";
}
function V4(t) {
  return t && typeof t.on == "function" && typeof t.off == "function";
}
function U4(t) {
  return t && typeof t.addEventListener == "function" && typeof t.removeEventListener == "function";
}
function O0(t, e, r) {
  return r ? O0(t, e).pipe(Ft(function(n) {
    return wt(n) ? r.apply(void 0, n) : r(n);
  })) : new ue(function(n) {
    var i = function() {
      for (var o = [], a = 0; a < arguments.length; a++)
        o[a] = arguments[a];
      return n.next(o.length === 1 ? o[0] : o);
    }, s;
    try {
      s = t(i);
    } catch (o) {
      n.error(o);
      return;
    }
    if (li(e))
      return function() {
        return e(i, s);
      };
  });
}
function z4(t, e, r, n, i) {
  var s, o;
  if (arguments.length == 1) {
    var a = t;
    o = a.initialState, e = a.condition, r = a.iterate, s = a.resultSelector || Or, i = a.scheduler;
  } else
    n === void 0 || At(n) ? (o = t, s = Or, i = n) : (o = t, s = n);
  return new ue(function(u) {
    var l = o;
    if (i)
      return i.schedule(q4, 0, {
        subscriber: u,
        iterate: r,
        condition: e,
        resultSelector: s,
        state: l
      });
    do {
      if (e) {
        var h = void 0;
        try {
          h = e(l);
        } catch (b) {
          u.error(b);
          return;
        }
        if (!h) {
          u.complete();
          break;
        }
      }
      var p = void 0;
      try {
        p = s(l);
      } catch (b) {
        u.error(b);
        return;
      }
      if (u.next(p), u.closed)
        break;
      try {
        l = r(l);
      } catch (b) {
        u.error(b);
        return;
      }
    } while (!0);
  });
}
function q4(t) {
  var e = t.subscriber, r = t.condition;
  if (!e.closed) {
    if (t.needIterate)
      try {
        t.state = t.iterate(t.state);
      } catch (s) {
        e.error(s);
        return;
      }
    else
      t.needIterate = !0;
    if (r) {
      var n = void 0;
      try {
        n = r(t.state);
      } catch (s) {
        e.error(s);
        return;
      }
      if (!n) {
        e.complete();
        return;
      }
      if (e.closed)
        return;
    }
    var i;
    try {
      i = t.resultSelector(t.state);
    } catch (s) {
      e.error(s);
      return;
    }
    if (!e.closed && (e.next(i), !e.closed))
      return this.schedule(t);
  }
}
function G4(t, e, r) {
  return e === void 0 && (e = fi), r === void 0 && (r = fi), Vc(function() {
    return t() ? e : r;
  });
}
function di(t) {
  return !wt(t) && t - parseFloat(t) + 1 >= 0;
}
function J4(t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = St), (!di(t) || t < 0) && (t = 0), (!e || typeof e.schedule != "function") && (e = St), new ue(function(r) {
    return r.add(e.schedule(Z4, t, { subscriber: r, counter: 0, period: t })), r;
  });
}
function Z4(t) {
  var e = t.subscriber, r = t.counter, n = t.period;
  e.next(r), this.schedule({ subscriber: e, counter: r + 1, period: n }, n);
}
function N0() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = Number.POSITIVE_INFINITY, n = null, i = t[t.length - 1];
  return At(i) ? (n = t.pop(), t.length > 1 && typeof t[t.length - 1] == "number" && (r = t.pop())) : typeof i == "number" && (r = t.pop()), n === null && t.length === 1 && t[0] instanceof ue ? t[0] : Hc(r)(Ss(t, n));
}
var L0 = /* @__PURE__ */ new ue(rr);
function Q4() {
  return L0;
}
function Wu() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  if (t.length === 0)
    return fi;
  var r = t[0], n = t.slice(1);
  return t.length === 1 && wt(r) ? Wu.apply(void 0, r) : new ue(function(i) {
    var s = function() {
      return i.add(Wu.apply(void 0, n).subscribe(i));
    };
    return _r(r).subscribe({
      next: function(o) {
        i.next(o);
      },
      error: s,
      complete: s
    });
  });
}
function Y4(t, e) {
  return e ? new ue(function(r) {
    var n = Object.keys(t), i = new Ke();
    return i.add(e.schedule(K4, 0, { keys: n, index: 0, subscriber: r, subscription: i, obj: t })), i;
  }) : new ue(function(r) {
    for (var n = Object.keys(t), i = 0; i < n.length && !r.closed; i++) {
      var s = n[i];
      t.hasOwnProperty(s) && r.next([s, t[s]]);
    }
    r.complete();
  });
}
function K4(t) {
  var e = t.keys, r = t.index, n = t.subscriber, i = t.subscription, s = t.obj;
  if (!n.closed)
    if (r < e.length) {
      var o = e[r];
      n.next([o, s[o]]), i.add(this.schedule({ keys: e, index: r + 1, subscriber: n, subscription: i, obj: s }));
    } else
      n.complete();
}
function P0(t, e) {
  function r() {
    return !r.pred.apply(r.thisArg, arguments);
  }
  return r.pred = t, r.thisArg = e, r;
}
function Lr(t, e) {
  return function(n) {
    return n.lift(new X4(t, e));
  };
}
var X4 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.predicate = e, this.thisArg = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new e5(e, this.predicate, this.thisArg));
  }, t;
}(), e5 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.predicate = n, s.thisArg = i, s.count = 0, s;
  }
  return e.prototype._next = function(r) {
    var n;
    try {
      n = this.predicate.call(this.thisArg, r, this.count++);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    n && this.destination.next(r);
  }, e;
}(Y);
function t5(t, e, r) {
  return [
    Lr(e, r)(new ue(Yi(t))),
    Lr(P0(e, r))(new ue(Yi(t)))
  ];
}
function $0() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  if (t.length === 1)
    if (wt(t[0]))
      t = t[0];
    else
      return t[0];
  return Ss(t, void 0).lift(new r5());
}
var r5 = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new n5(e));
  }, t;
}(), n5 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.hasFirst = !1, n.observables = [], n.subscriptions = [], n;
  }
  return e.prototype._next = function(r) {
    this.observables.push(r);
  }, e.prototype._complete = function() {
    var r = this.observables, n = r.length;
    if (n === 0)
      this.destination.complete();
    else {
      for (var i = 0; i < n && !this.hasFirst; i++) {
        var s = r[i], o = yr(this, s, void 0, i);
        this.subscriptions && this.subscriptions.push(o), this.add(o);
      }
      this.observables = null;
    }
  }, e.prototype.notifyNext = function(r, n, i) {
    if (!this.hasFirst) {
      this.hasFirst = !0;
      for (var s = 0; s < this.subscriptions.length; s++)
        if (s !== i) {
          var o = this.subscriptions[s];
          o.unsubscribe(), this.remove(o);
        }
      this.subscriptions = null;
    }
    this.destination.next(n);
  }, e;
}(xn);
function i5(t, e, r) {
  return t === void 0 && (t = 0), new ue(function(n) {
    e === void 0 && (e = t, t = 0);
    var i = 0, s = t;
    if (r)
      return r.schedule(s5, 0, {
        index: i,
        count: e,
        start: t,
        subscriber: n
      });
    do {
      if (i++ >= e) {
        n.complete();
        break;
      }
      if (n.next(s++), n.closed)
        break;
    } while (!0);
  });
}
function s5(t) {
  var e = t.start, r = t.index, n = t.count, i = t.subscriber;
  if (r >= n) {
    i.complete();
    return;
  }
  i.next(e), !i.closed && (t.index = r + 1, t.start = e + 1, this.schedule(t));
}
function D0(t, e, r) {
  t === void 0 && (t = 0);
  var n = -1;
  return di(e) ? n = Number(e) < 1 && 1 || Number(e) : At(e) && (r = e), At(r) || (r = St), new ue(function(i) {
    var s = di(t) ? t : +t - r.now();
    return r.schedule(o5, s, {
      index: 0,
      period: n,
      subscriber: i
    });
  });
}
function o5(t) {
  var e = t.index, r = t.period, n = t.subscriber;
  if (n.next(e), !n.closed) {
    if (r === -1)
      return n.complete();
    t.index = e + 1, this.schedule(t, r);
  }
}
function a5(t, e) {
  return new ue(function(r) {
    var n;
    try {
      n = t();
    } catch (a) {
      r.error(a);
      return;
    }
    var i;
    try {
      i = e(n);
    } catch (a) {
      r.error(a);
      return;
    }
    var s = i ? _r(i) : fi, o = s.subscribe(r);
    return function() {
      o.unsubscribe(), n && n.unsubscribe();
    };
  });
}
function B0() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = t[t.length - 1];
  return typeof r == "function" && t.pop(), Ss(t, void 0).lift(new j0(r));
}
var j0 = /* @__PURE__ */ function() {
  function t(e) {
    this.resultSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new u5(e, this.resultSelector));
  }, t;
}(), u5 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.resultSelector = n, s.iterators = [], s.active = 0, s.resultSelector = typeof n == "function" ? n : void 0, s;
  }
  return e.prototype._next = function(r) {
    var n = this.iterators;
    wt(r) ? n.push(new l5(r)) : typeof r[Nr] == "function" ? n.push(new c5(r[Nr]())) : n.push(new f5(this.destination, this, r));
  }, e.prototype._complete = function() {
    var r = this.iterators, n = r.length;
    if (this.unsubscribe(), n === 0) {
      this.destination.complete();
      return;
    }
    this.active = n;
    for (var i = 0; i < n; i++) {
      var s = r[i];
      if (s.stillUnsubscribed) {
        var o = this.destination;
        o.add(s.subscribe());
      } else
        this.active--;
    }
  }, e.prototype.notifyInactive = function() {
    this.active--, this.active === 0 && this.destination.complete();
  }, e.prototype.checkIterators = function() {
    for (var r = this.iterators, n = r.length, i = this.destination, s = 0; s < n; s++) {
      var o = r[s];
      if (typeof o.hasValue == "function" && !o.hasValue())
        return;
    }
    for (var a = !1, u = [], s = 0; s < n; s++) {
      var o = r[s], l = o.next();
      if (o.hasCompleted() && (a = !0), l.done) {
        i.complete();
        return;
      }
      u.push(l.value);
    }
    this.resultSelector ? this._tryresultSelector(u) : i.next(u), a && i.complete();
  }, e.prototype._tryresultSelector = function(r) {
    var n;
    try {
      n = this.resultSelector.apply(this, r);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(n);
  }, e;
}(Y), c5 = /* @__PURE__ */ function() {
  function t(e) {
    this.iterator = e, this.nextResult = e.next();
  }
  return t.prototype.hasValue = function() {
    return !0;
  }, t.prototype.next = function() {
    var e = this.nextResult;
    return this.nextResult = this.iterator.next(), e;
  }, t.prototype.hasCompleted = function() {
    var e = this.nextResult;
    return !!(e && e.done);
  }, t;
}(), l5 = /* @__PURE__ */ function() {
  function t(e) {
    this.array = e, this.index = 0, this.length = 0, this.length = e.length;
  }
  return t.prototype[Nr] = function() {
    return this;
  }, t.prototype.next = function(e) {
    var r = this.index++, n = this.array;
    return r < this.length ? { value: n[r], done: !1 } : { value: null, done: !0 };
  }, t.prototype.hasValue = function() {
    return this.array.length > this.index;
  }, t.prototype.hasCompleted = function() {
    return this.array.length === this.index;
  }, t;
}(), f5 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.parent = n, s.observable = i, s.stillUnsubscribed = !0, s.buffer = [], s.isComplete = !1, s;
  }
  return e.prototype[Nr] = function() {
    return this;
  }, e.prototype.next = function() {
    var r = this.buffer;
    return r.length === 0 && this.isComplete ? { value: null, done: !0 } : { value: r.shift(), done: !1 };
  }, e.prototype.hasValue = function() {
    return this.buffer.length > 0;
  }, e.prototype.hasCompleted = function() {
    return this.buffer.length === 0 && this.isComplete;
  }, e.prototype.notifyComplete = function() {
    this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete();
  }, e.prototype.notifyNext = function(r) {
    this.buffer.push(r), this.parent.checkIterators();
  }, e.prototype.subscribe = function() {
    return tt(this.observable, new Xe(this));
  }, e;
}(et);
const h5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArgumentOutOfRangeError: hi,
  AsyncSubject: Ii,
  BehaviorSubject: p0,
  ConnectableObservable: d0,
  EMPTY: fi,
  EmptyError: Es,
  GroupedObservable: Du,
  NEVER: L0,
  Notification: br,
  get NotificationKind() {
    return ju;
  },
  ObjectUnsubscribedError: Rr,
  Observable: ue,
  ReplaySubject: Fc,
  Scheduler: Bu,
  Subject: ft,
  Subscriber: Y,
  Subscription: Ke,
  TimeoutError: E0,
  UnsubscriptionError: zi,
  VirtualAction: S0,
  VirtualTimeScheduler: g4,
  animationFrame: p4,
  animationFrameScheduler: w0,
  asap: qs,
  asapScheduler: m0,
  async: St,
  asyncScheduler: _0,
  bindCallback: x0,
  bindNodeCallback: M0,
  combineLatest: T4,
  concat: Ki,
  config: Lt,
  defer: Vc,
  empty: Ri,
  forkJoin: W4,
  from: _r,
  fromEvent: k0,
  fromEventPattern: O0,
  generate: z4,
  identity: Or,
  iif: G4,
  interval: J4,
  isObservable: b4,
  merge: N0,
  never: Q4,
  noop: rr,
  observable: Ci,
  of: Jo,
  onErrorResumeNext: Wu,
  pairs: Y4,
  partition: t5,
  pipe: $u,
  queue: b0,
  queueScheduler: g0,
  race: $0,
  range: i5,
  scheduled: I0,
  throwError: jc,
  timer: D0,
  using: a5,
  zip: B0
}, Symbol.toStringTag, { value: "Module" })), Zo = /* @__PURE__ */ bn(h5);
var Qo = {};
function F0(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (r = F0(t[e])) && (n && (n += " "), n += r);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function hh() {
  for (var t, e, r = 0, n = ""; r < arguments.length; )
    (t = arguments[r++]) && (e = F0(t)) && (n && (n += " "), n += e);
  return n;
}
const d5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: hh,
  default: hh
}, Symbol.toStringTag, { value: "Module" })), Yo = /* @__PURE__ */ bn(d5);
var mr, we, su, dh, pi = 0, W0 = [], Gs = [], ph = ne.__b, gh = ne.__r, bh = ne.diffed, vh = ne.__c, yh = ne.unmount;
function Mn(t, e) {
  ne.__h && ne.__h(we, t, pi || e), pi = 0;
  var r = we.__H || (we.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({ __V: Gs }), r.__[t];
}
function H0(t) {
  return pi = 1, V0(z0, t);
}
function V0(t, e, r) {
  var n = Mn(mr++, 2);
  if (n.t = t, !n.__c && (n.__ = [r ? r(e) : z0(void 0, e), function(a) {
    var u = n.__N ? n.__N[0] : n.__[0], l = n.t(u, a);
    u !== l && (n.__N = [l, n.__[1]], n.__c.setState({}));
  }], n.__c = we, !we.u)) {
    var i = function(a, u, l) {
      if (!n.__c.__H)
        return !0;
      var h = n.__c.__H.__.filter(function(b) {
        return b.__c;
      });
      if (h.every(function(b) {
        return !b.__N;
      }))
        return !s || s.call(this, a, u, l);
      var p = !1;
      return h.forEach(function(b) {
        if (b.__N) {
          var S = b.__[0];
          b.__ = b.__N, b.__N = void 0, S !== b.__[0] && (p = !0);
        }
      }), !(!p && n.__c.props === a) && (!s || s.call(this, a, u, l));
    };
    we.u = !0;
    var s = we.shouldComponentUpdate, o = we.componentWillUpdate;
    we.componentWillUpdate = function(a, u, l) {
      if (this.__e) {
        var h = s;
        s = void 0, i(a, u, l), s = h;
      }
      o && o.call(this, a, u, l);
    }, we.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function p5(t, e) {
  var r = Mn(mr++, 3);
  !ne.__s && zc(r.__H, e) && (r.__ = t, r.i = e, we.__H.__h.push(r));
}
function U0(t, e) {
  var r = Mn(mr++, 4);
  !ne.__s && zc(r.__H, e) && (r.__ = t, r.i = e, we.__h.push(r));
}
function g5(t) {
  return pi = 5, Uc(function() {
    return { current: t };
  }, []);
}
function b5(t, e, r) {
  pi = 6, U0(function() {
    return typeof t == "function" ? (t(e()), function() {
      return t(null);
    }) : t ? (t.current = e(), function() {
      return t.current = null;
    }) : void 0;
  }, r == null ? r : r.concat(t));
}
function Uc(t, e) {
  var r = Mn(mr++, 7);
  return zc(r.__H, e) ? (r.__V = t(), r.i = e, r.__h = t, r.__V) : r.__;
}
function v5(t, e) {
  return pi = 8, Uc(function() {
    return t;
  }, e);
}
function y5(t) {
  var e = we.context[t.__c], r = Mn(mr++, 9);
  return r.c = t, e ? (r.__ == null && (r.__ = !0, e.sub(we)), e.props.value) : t.__;
}
function m5(t, e) {
  ne.useDebugValue && ne.useDebugValue(e ? e(t) : t);
}
function _5(t) {
  var e = Mn(mr++, 10), r = H0();
  return e.__ = t, we.componentDidCatch || (we.componentDidCatch = function(n, i) {
    e.__ && e.__(n, i), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function w5() {
  var t = Mn(mr++, 11);
  if (!t.__) {
    for (var e = we.__v; e !== null && !e.__m && e.__ !== null; )
      e = e.__;
    var r = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + r[0] + "-" + r[1]++;
  }
  return t.__;
}
function S5() {
  for (var t; t = W0.shift(); )
    if (t.__P && t.__H)
      try {
        t.__H.__h.forEach(Js), t.__H.__h.forEach(Hu), t.__H.__h = [];
      } catch (e) {
        t.__H.__h = [], ne.__e(e, t.__v);
      }
}
ne.__b = function(t) {
  we = null, ph && ph(t);
}, ne.__r = function(t) {
  gh && gh(t), mr = 0;
  var e = (we = t.__c).__H;
  e && (su === we ? (e.__h = [], we.__h = [], e.__.forEach(function(r) {
    r.__N && (r.__ = r.__N), r.__V = Gs, r.__N = r.i = void 0;
  })) : (e.__h.forEach(Js), e.__h.forEach(Hu), e.__h = [], mr = 0)), su = we;
}, ne.diffed = function(t) {
  bh && bh(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (W0.push(e) !== 1 && dh === ne.requestAnimationFrame || ((dh = ne.requestAnimationFrame) || E5)(S5)), e.__H.__.forEach(function(r) {
    r.i && (r.__H = r.i), r.__V !== Gs && (r.__ = r.__V), r.i = void 0, r.__V = Gs;
  })), su = we = null;
}, ne.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.forEach(Js), r.__h = r.__h.filter(function(n) {
        return !n.__ || Hu(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], ne.__e(n, r.__v);
    }
  }), vh && vh(t, e);
}, ne.unmount = function(t) {
  yh && yh(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.forEach(function(n) {
    try {
      Js(n);
    } catch (i) {
      e = i;
    }
  }), r.__H = void 0, e && ne.__e(e, r.__v));
};
var mh = typeof requestAnimationFrame == "function";
function E5(t) {
  var e, r = function() {
    clearTimeout(n), mh && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 100);
  mh && (e = requestAnimationFrame(r));
}
function Js(t) {
  var e = we, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), we = e;
}
function Hu(t) {
  var e = we;
  t.__c = t.__(), we = e;
}
function zc(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function z0(t, e) {
  return typeof e == "function" ? e(t) : e;
}
const x5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useCallback: v5,
  useContext: y5,
  useDebugValue: m5,
  useEffect: p5,
  useErrorBoundary: _5,
  useId: w5,
  useImperativeHandle: b5,
  useLayoutEffect: U0,
  useMemo: Uc,
  useReducer: V0,
  useRef: g5,
  useState: H0
}, Symbol.toStringTag, { value: "Module" })), xs = /* @__PURE__ */ bn(x5);
var ar = {}, Ko = {};
Object.defineProperty(Ko, "__esModule", { value: !0 });
Ko.CloseIcon = void 0;
const _h = kt;
function M5(t) {
  return (0, _h.h)(
    "svg",
    Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, _h.h)("path", { d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z" })
  );
}
Ko.CloseIcon = M5;
var qc = {};
Object.defineProperty(qc, "__esModule", { value: !0 });
qc.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
var Gc = {};
Object.defineProperty(Gc, "__esModule", { value: !0 });
Gc.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==";
var Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
Xo.QRCodeIcon = void 0;
const Xt = kt;
function C5(t) {
  return (0, Xt.h)(
    "svg",
    Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Xt.h)("path", { d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z" }),
    (0, Xt.h)("path", { d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z" }),
    (0, Xt.h)("path", { d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z" }),
    (0, Xt.h)("path", { d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z" }),
    (0, Xt.h)("path", { d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z" }),
    (0, Xt.h)("path", { d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z" }),
    (0, Xt.h)("path", { d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z" }),
    (0, Xt.h)("path", { d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z" }),
    (0, Xt.h)("path", { d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z" })
  );
}
Xo.QRCodeIcon = C5;
var Jc = {};
Object.defineProperty(Jc, "__esModule", { value: !0 });
const R5 = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>
        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>
    </svg>
`;
Jc.default = R5;
var Zc = {};
Object.defineProperty(Zc, "__esModule", { value: !0 });
Zc.default = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>
    </svg>
`;
var ea = {};
Object.defineProperty(ea, "__esModule", { value: !0 });
ea.StatusDotIcon = void 0;
const wh = kt;
function I5(t) {
  return (0, wh.h)(
    "svg",
    Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, wh.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z" })
  );
}
ea.StatusDotIcon = I5;
var ta = {};
function q0(t) {
  this.mode = Rt.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
  for (var e = 0, r = this.data.length; e < r; e++) {
    var n = [], i = this.data.charCodeAt(e);
    i > 65536 ? (n[0] = 240 | (i & 1835008) >>> 18, n[1] = 128 | (i & 258048) >>> 12, n[2] = 128 | (i & 4032) >>> 6, n[3] = 128 | i & 63) : i > 2048 ? (n[0] = 224 | (i & 61440) >>> 12, n[1] = 128 | (i & 4032) >>> 6, n[2] = 128 | i & 63) : i > 128 ? (n[0] = 192 | (i & 1984) >>> 6, n[1] = 128 | i & 63) : n[0] = i, this.parsedData.push(n);
  }
  this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
}
q0.prototype = {
  getLength: function(t) {
    return this.parsedData.length;
  },
  write: function(t) {
    for (var e = 0, r = this.parsedData.length; e < r; e++)
      t.put(this.parsedData[e], 8);
  }
};
function ur(t, e) {
  this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
}
ur.prototype = { addData: function(t) {
  var e = new q0(t);
  this.dataList.push(e), this.dataCache = null;
}, isDark: function(t, e) {
  if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
    throw new Error(t + "," + e);
  return this.modules[t][e];
}, getModuleCount: function() {
  return this.moduleCount;
}, make: function() {
  this.makeImpl(!1, this.getBestMaskPattern());
}, makeImpl: function(t, e) {
  this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
  for (var r = 0; r < this.moduleCount; r++) {
    this.modules[r] = new Array(this.moduleCount);
    for (var n = 0; n < this.moduleCount; n++)
      this.modules[r][n] = null;
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), this.dataCache == null && (this.dataCache = ur.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
}, setupPositionProbePattern: function(t, e) {
  for (var r = -1; r <= 7; r++)
    if (!(t + r <= -1 || this.moduleCount <= t + r))
      for (var n = -1; n <= 7; n++)
        e + n <= -1 || this.moduleCount <= e + n || (0 <= r && r <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[t + r][e + n] = !0 : this.modules[t + r][e + n] = !1);
}, getBestMaskPattern: function() {
  for (var t = 0, e = 0, r = 0; r < 8; r++) {
    this.makeImpl(!0, r);
    var n = Qe.getLostPoint(this);
    (r == 0 || t > n) && (t = n, e = r);
  }
  return e;
}, createMovieClip: function(t, e, r) {
  var n = t.createEmptyMovieClip(e, r), i = 1;
  this.make();
  for (var s = 0; s < this.modules.length; s++)
    for (var o = s * i, a = 0; a < this.modules[s].length; a++) {
      var u = a * i, l = this.modules[s][a];
      l && (n.beginFill(0, 100), n.moveTo(u, o), n.lineTo(u + i, o), n.lineTo(u + i, o + i), n.lineTo(u, o + i), n.endFill());
    }
  return n;
}, setupTimingPattern: function() {
  for (var t = 8; t < this.moduleCount - 8; t++)
    this.modules[t][6] == null && (this.modules[t][6] = t % 2 == 0);
  for (var e = 8; e < this.moduleCount - 8; e++)
    this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
}, setupPositionAdjustPattern: function() {
  for (var t = Qe.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
    for (var r = 0; r < t.length; r++) {
      var n = t[e], i = t[r];
      if (this.modules[n][i] == null)
        for (var s = -2; s <= 2; s++)
          for (var o = -2; o <= 2; o++)
            s == -2 || s == 2 || o == -2 || o == 2 || s == 0 && o == 0 ? this.modules[n + s][i + o] = !0 : this.modules[n + s][i + o] = !1;
    }
}, setupTypeNumber: function(t) {
  for (var e = Qe.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
    var n = !t && (e >> r & 1) == 1;
    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n;
  }
  for (var r = 0; r < 18; r++) {
    var n = !t && (e >> r & 1) == 1;
    this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
  }
}, setupTypeInfo: function(t, e) {
  for (var r = this.errorCorrectLevel << 3 | e, n = Qe.getBCHTypeInfo(r), i = 0; i < 15; i++) {
    var s = !t && (n >> i & 1) == 1;
    i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s;
  }
  for (var i = 0; i < 15; i++) {
    var s = !t && (n >> i & 1) == 1;
    i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s;
  }
  this.modules[this.moduleCount - 8][8] = !t;
}, mapData: function(t, e) {
  for (var r = -1, n = this.moduleCount - 1, i = 7, s = 0, o = this.moduleCount - 1; o > 0; o -= 2)
    for (o == 6 && o--; ; ) {
      for (var a = 0; a < 2; a++)
        if (this.modules[n][o - a] == null) {
          var u = !1;
          s < t.length && (u = (t[s] >>> i & 1) == 1);
          var l = Qe.getMask(e, n, o - a);
          l && (u = !u), this.modules[n][o - a] = u, i--, i == -1 && (s++, i = 7);
        }
      if (n += r, n < 0 || this.moduleCount <= n) {
        n -= r, r = -r;
        break;
      }
    }
} };
ur.PAD0 = 236;
ur.PAD1 = 17;
ur.createData = function(t, e, r) {
  for (var n = ir.getRSBlocks(t, e), i = new G0(), s = 0; s < r.length; s++) {
    var o = r[s];
    i.put(o.mode, 4), i.put(o.getLength(), Qe.getLengthInBits(o.mode, t)), o.write(i);
  }
  for (var a = 0, s = 0; s < n.length; s++)
    a += n[s].dataCount;
  if (i.getLengthInBits() > a * 8)
    throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + a * 8 + ")");
  for (i.getLengthInBits() + 4 <= a * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
    i.putBit(!1);
  for (; !(i.getLengthInBits() >= a * 8 || (i.put(ur.PAD0, 8), i.getLengthInBits() >= a * 8)); )
    i.put(ur.PAD1, 8);
  return ur.createBytes(i, n);
};
ur.createBytes = function(t, e) {
  for (var r = 0, n = 0, i = 0, s = new Array(e.length), o = new Array(e.length), a = 0; a < e.length; a++) {
    var u = e[a].dataCount, l = e[a].totalCount - u;
    n = Math.max(n, u), i = Math.max(i, l), s[a] = new Array(u);
    for (var h = 0; h < s[a].length; h++)
      s[a][h] = 255 & t.buffer[h + r];
    r += u;
    var p = Qe.getErrorCorrectPolynomial(l), b = new Xn(s[a], p.getLength() - 1), S = b.mod(p);
    o[a] = new Array(p.getLength() - 1);
    for (var h = 0; h < o[a].length; h++) {
      var R = h + S.getLength() - o[a].length;
      o[a][h] = R >= 0 ? S.get(R) : 0;
    }
  }
  for (var L = 0, h = 0; h < e.length; h++)
    L += e[h].totalCount;
  for (var O = new Array(L), w = 0, h = 0; h < n; h++)
    for (var a = 0; a < e.length; a++)
      h < s[a].length && (O[w++] = s[a][h]);
  for (var h = 0; h < i; h++)
    for (var a = 0; a < e.length; a++)
      h < o[a].length && (O[w++] = o[a][h]);
  return O;
};
var Rt = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, Ar = { L: 1, M: 0, Q: 3, H: 2 }, Sr = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, Qe = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(t) {
  for (var e = t << 10; Qe.getBCHDigit(e) - Qe.getBCHDigit(Qe.G15) >= 0; )
    e ^= Qe.G15 << Qe.getBCHDigit(e) - Qe.getBCHDigit(Qe.G15);
  return (t << 10 | e) ^ Qe.G15_MASK;
}, getBCHTypeNumber: function(t) {
  for (var e = t << 12; Qe.getBCHDigit(e) - Qe.getBCHDigit(Qe.G18) >= 0; )
    e ^= Qe.G18 << Qe.getBCHDigit(e) - Qe.getBCHDigit(Qe.G18);
  return t << 12 | e;
}, getBCHDigit: function(t) {
  for (var e = 0; t != 0; )
    e++, t >>>= 1;
  return e;
}, getPatternPosition: function(t) {
  return Qe.PATTERN_POSITION_TABLE[t - 1];
}, getMask: function(t, e, r) {
  switch (t) {
    case Sr.PATTERN000:
      return (e + r) % 2 == 0;
    case Sr.PATTERN001:
      return e % 2 == 0;
    case Sr.PATTERN010:
      return r % 3 == 0;
    case Sr.PATTERN011:
      return (e + r) % 3 == 0;
    case Sr.PATTERN100:
      return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
    case Sr.PATTERN101:
      return e * r % 2 + e * r % 3 == 0;
    case Sr.PATTERN110:
      return (e * r % 2 + e * r % 3) % 2 == 0;
    case Sr.PATTERN111:
      return (e * r % 3 + (e + r) % 2) % 2 == 0;
    default:
      throw new Error("bad maskPattern:" + t);
  }
}, getErrorCorrectPolynomial: function(t) {
  for (var e = new Xn([1], 0), r = 0; r < t; r++)
    e = e.multiply(new Xn([1, lt.gexp(r)], 0));
  return e;
}, getLengthInBits: function(t, e) {
  if (1 <= e && e < 10)
    switch (t) {
      case Rt.MODE_NUMBER:
        return 10;
      case Rt.MODE_ALPHA_NUM:
        return 9;
      case Rt.MODE_8BIT_BYTE:
        return 8;
      case Rt.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + t);
    }
  else if (e < 27)
    switch (t) {
      case Rt.MODE_NUMBER:
        return 12;
      case Rt.MODE_ALPHA_NUM:
        return 11;
      case Rt.MODE_8BIT_BYTE:
        return 16;
      case Rt.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + t);
    }
  else if (e < 41)
    switch (t) {
      case Rt.MODE_NUMBER:
        return 14;
      case Rt.MODE_ALPHA_NUM:
        return 13;
      case Rt.MODE_8BIT_BYTE:
        return 16;
      case Rt.MODE_KANJI:
        return 12;
      default:
        throw new Error("mode:" + t);
    }
  else
    throw new Error("type:" + e);
}, getLostPoint: function(t) {
  for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++)
    for (var i = 0; i < e; i++) {
      for (var s = 0, o = t.isDark(n, i), a = -1; a <= 1; a++)
        if (!(n + a < 0 || e <= n + a))
          for (var u = -1; u <= 1; u++)
            i + u < 0 || e <= i + u || a == 0 && u == 0 || o == t.isDark(n + a, i + u) && s++;
      s > 5 && (r += 3 + s - 5);
    }
  for (var n = 0; n < e - 1; n++)
    for (var i = 0; i < e - 1; i++) {
      var l = 0;
      t.isDark(n, i) && l++, t.isDark(n + 1, i) && l++, t.isDark(n, i + 1) && l++, t.isDark(n + 1, i + 1) && l++, (l == 0 || l == 4) && (r += 3);
    }
  for (var n = 0; n < e; n++)
    for (var i = 0; i < e - 6; i++)
      t.isDark(n, i) && !t.isDark(n, i + 1) && t.isDark(n, i + 2) && t.isDark(n, i + 3) && t.isDark(n, i + 4) && !t.isDark(n, i + 5) && t.isDark(n, i + 6) && (r += 40);
  for (var i = 0; i < e; i++)
    for (var n = 0; n < e - 6; n++)
      t.isDark(n, i) && !t.isDark(n + 1, i) && t.isDark(n + 2, i) && t.isDark(n + 3, i) && t.isDark(n + 4, i) && !t.isDark(n + 5, i) && t.isDark(n + 6, i) && (r += 40);
  for (var h = 0, i = 0; i < e; i++)
    for (var n = 0; n < e; n++)
      t.isDark(n, i) && h++;
  var p = Math.abs(100 * h / e / e - 50) / 5;
  return r += p * 10, r;
} }, lt = { glog: function(t) {
  if (t < 1)
    throw new Error("glog(" + t + ")");
  return lt.LOG_TABLE[t];
}, gexp: function(t) {
  for (; t < 0; )
    t += 255;
  for (; t >= 256; )
    t -= 255;
  return lt.EXP_TABLE[t];
}, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
for (var dt = 0; dt < 8; dt++)
  lt.EXP_TABLE[dt] = 1 << dt;
for (var dt = 8; dt < 256; dt++)
  lt.EXP_TABLE[dt] = lt.EXP_TABLE[dt - 4] ^ lt.EXP_TABLE[dt - 5] ^ lt.EXP_TABLE[dt - 6] ^ lt.EXP_TABLE[dt - 8];
for (var dt = 0; dt < 255; dt++)
  lt.LOG_TABLE[lt.EXP_TABLE[dt]] = dt;
function Xn(t, e) {
  if (t.length == null)
    throw new Error(t.length + "/" + e);
  for (var r = 0; r < t.length && t[r] == 0; )
    r++;
  this.num = new Array(t.length - r + e);
  for (var n = 0; n < t.length - r; n++)
    this.num[n] = t[n + r];
}
Xn.prototype = { get: function(t) {
  return this.num[t];
}, getLength: function() {
  return this.num.length;
}, multiply: function(t) {
  for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
    for (var n = 0; n < t.getLength(); n++)
      e[r + n] ^= lt.gexp(lt.glog(this.get(r)) + lt.glog(t.get(n)));
  return new Xn(e, 0);
}, mod: function(t) {
  if (this.getLength() - t.getLength() < 0)
    return this;
  for (var e = lt.glog(this.get(0)) - lt.glog(t.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
    r[n] = this.get(n);
  for (var n = 0; n < t.getLength(); n++)
    r[n] ^= lt.gexp(lt.glog(t.get(n)) + e);
  return new Xn(r, 0).mod(t);
} };
function ir(t, e) {
  this.totalCount = t, this.dataCount = e;
}
ir.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
ir.getRSBlocks = function(t, e) {
  var r = ir.getRsBlockTable(t, e);
  if (r == null)
    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
  for (var n = r.length / 3, i = [], s = 0; s < n; s++)
    for (var o = r[s * 3 + 0], a = r[s * 3 + 1], u = r[s * 3 + 2], l = 0; l < o; l++)
      i.push(new ir(a, u));
  return i;
};
ir.getRsBlockTable = function(t, e) {
  switch (e) {
    case Ar.L:
      return ir.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
    case Ar.M:
      return ir.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
    case Ar.Q:
      return ir.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
    case Ar.H:
      return ir.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
    default:
      return;
  }
};
function G0() {
  this.buffer = [], this.length = 0;
}
G0.prototype = { get: function(t) {
  var e = Math.floor(t / 8);
  return (this.buffer[e] >>> 7 - t % 8 & 1) == 1;
}, put: function(t, e) {
  for (var r = 0; r < e; r++)
    this.putBit((t >>> e - r - 1 & 1) == 1);
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(t) {
  var e = Math.floor(this.length / 8);
  this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
} };
var ou = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function J0(t) {
  if (this.options = {
    padding: 4,
    width: 256,
    height: 256,
    typeNumber: 4,
    color: "#000000",
    background: "#ffffff",
    ecl: "M",
    image: {
      svg: "",
      width: 0,
      height: 0
    }
  }, typeof t == "string" && (t = {
    content: t
  }), t)
    for (var e in t)
      this.options[e] = t[e];
  if (typeof this.options.content != "string")
    throw new Error("Expected 'content' as string!");
  if (this.options.content.length === 0)
    throw new Error("Expected 'content' to be non-empty!");
  if (!(this.options.padding >= 0))
    throw new Error("Expected 'padding' value to be non-negative!");
  if (!(this.options.width > 0) || !(this.options.height > 0))
    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
  function r(u) {
    switch (u) {
      case "L":
        return Ar.L;
      case "M":
        return Ar.M;
      case "Q":
        return Ar.Q;
      case "H":
        return Ar.H;
      default:
        throw new Error("Unknwon error correction level: " + u);
    }
  }
  function n(u, l) {
    for (var h = i(u), p = 1, b = 0, S = 0, R = ou.length; S <= R; S++) {
      var L = ou[S];
      if (!L)
        throw new Error("Content too long: expected " + b + " but got " + h);
      switch (l) {
        case "L":
          b = L[0];
          break;
        case "M":
          b = L[1];
          break;
        case "Q":
          b = L[2];
          break;
        case "H":
          b = L[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + l);
      }
      if (h <= b)
        break;
      p++;
    }
    if (p > ou.length)
      throw new Error("Content too long");
    return p;
  }
  function i(u) {
    var l = encodeURI(u).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return l.length + (l.length != u ? 3 : 0);
  }
  var s = this.options.content, o = n(s, this.options.ecl), a = r(this.options.ecl);
  this.qrcode = new ur(o, a), this.qrcode.addData(s), this.qrcode.make();
}
J0.prototype.svg = function(t) {
  var e = this.options || {}, r = this.qrcode.modules;
  typeof t > "u" && (t = { container: e.container || "svg" });
  for (var n = typeof e.pretty < "u" ? !!e.pretty : !0, i = n ? "  " : "", s = n ? `\r
` : "", o = e.width, a = e.height, u = r.length, l = o / (u + 2 * e.padding), h = a / (u + 2 * e.padding), p = typeof e.join < "u" ? !!e.join : !1, b = typeof e.swap < "u" ? !!e.swap : !1, S = typeof e.xmlDeclaration < "u" ? !!e.xmlDeclaration : !0, R = typeof e.predefined < "u" ? !!e.predefined : !1, L = R ? i + '<defs><path id="qrmodule" d="M0 0 h' + h + " v" + l + ' H0 z" style="fill:' + e.color + ';shape-rendering:crispEdges;" /></defs>' + s : "", O = i + '<rect x="0" y="0" width="' + o + '" height="' + a + '" style="fill:' + e.background + ';shape-rendering:crispEdges;"/>' + s, w = "", I = "", N = 0; N < u; N++)
    for (var $ = 0; $ < u; $++) {
      var P = r[$][N];
      if (P) {
        var B = $ * l + e.padding * l, q = N * h + e.padding * h;
        if (b) {
          var z = B;
          B = q, q = z;
        }
        if (p) {
          var F = l + B, Z = h + q;
          B = Number.isInteger(B) ? Number(B) : B.toFixed(2), q = Number.isInteger(q) ? Number(q) : q.toFixed(2), F = Number.isInteger(F) ? Number(F) : F.toFixed(2), Z = Number.isInteger(Z) ? Number(Z) : Z.toFixed(2), I += "M" + B + "," + q + " V" + Z + " H" + F + " V" + q + " H" + B + " Z ";
        } else
          R ? w += i + '<use x="' + B.toString() + '" y="' + q.toString() + '" href="#qrmodule" />' + s : w += i + '<rect x="' + B.toString() + '" y="' + q.toString() + '" width="' + l + '" height="' + h + '" style="fill:' + e.color + ';shape-rendering:crispEdges;"/>' + s;
      }
    }
  p && (w = i + '<path x="0" y="0" style="fill:' + e.color + ';shape-rendering:crispEdges;" d="' + I + '" />');
  let K = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const v = o * this.options.image.width / 100, c = a * this.options.image.height / 100, d = o / 2 - v / 2, g = a / 2 - c / 2;
    K += `<svg x="${d}" y="${g}" width="${v}" height="${c}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`, K += this.options.image.svg + s, K += "</svg>";
  }
  var X = "";
  switch (t.container) {
    case "svg":
      S && (X += '<?xml version="1.0" standalone="yes"?>' + s), X += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + a + '">' + s, X += L + O + w, X += K, X += "</svg>";
      break;
    case "svg-viewbox":
      S && (X += '<?xml version="1.0" standalone="yes"?>' + s), X += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + a + '">' + s, X += L + O + w, X += K, X += "</svg>";
      break;
    case "g":
      X += '<g width="' + o + '" height="' + a + '">' + s, X += L + O + w, X += K, X += "</g>";
      break;
    default:
      X += (L + O + w + K).replace(/^\s+/, "");
      break;
  }
  return X;
};
var A5 = J0, k5 = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ta, "__esModule", { value: !0 });
ta.QRCode = void 0;
const T5 = kt, Sh = xs, O5 = k5(A5), N5 = (t) => {
  const [e, r] = (0, Sh.useState)("");
  return (0, Sh.useEffect)(() => {
    var n, i;
    const s = new O5.default({
      content: t.content,
      background: t.bgColor || "#ffffff",
      color: t.fgColor || "#000000",
      container: "svg",
      ecl: "M",
      width: (n = t.width) !== null && n !== void 0 ? n : 256,
      height: (i = t.height) !== null && i !== void 0 ? i : 256,
      padding: 0,
      image: t.image
    }), o = Buffer.from(s.svg(), "utf8").toString("base64");
    r(`data:image/svg+xml;base64,${o}`);
  }), e ? (0, T5.h)("img", { src: e, alt: "QR Code" }) : null;
};
ta.QRCode = N5;
var ra = {}, Qc = {};
Object.defineProperty(Qc, "__esModule", { value: !0 });
Qc.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var L5 = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ra, "__esModule", { value: !0 });
ra.Spinner = void 0;
const js = kt, P5 = L5(Qc), $5 = (t) => {
  var e;
  const r = (e = t.size) !== null && e !== void 0 ? e : 64, n = t.color || "#000";
  return (0, js.h)(
    "div",
    { class: "-cbwsdk-spinner" },
    (0, js.h)("style", null, P5.default),
    (0, js.h)(
      "svg",
      { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", style: { width: r, height: r } },
      (0, js.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: n } })
    )
  );
};
ra.Spinner = $5;
var Yc = {};
Object.defineProperty(Yc, "__esModule", { value: !0 });
Yc.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var Ai = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ar, "__esModule", { value: !0 });
ar.CoinbaseAppSteps = ar.CoinbaseWalletSteps = ar.ConnectItem = ar.ConnectContent = void 0;
const $t = Ai(Yo), te = kt, Eh = xs, D5 = Q, B5 = yi, j5 = Ko, F5 = Ai(qc), W5 = Ai(Gc), Z0 = Xo, H5 = Ai(Jc), V5 = Ai(Zc), U5 = ea, z5 = ta, q5 = ra, G5 = Ai(Yc), xh = {
  "coinbase-wallet-app": {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    icon: W5.default,
    steps: Y0
  },
  "coinbase-app": {
    title: "Coinbase app",
    description: "Connect with your Coinbase account",
    icon: F5.default,
    steps: K0
  }
}, J5 = (t) => {
  switch (t) {
    case "coinbase-app":
      return H5.default;
    case "coinbase-wallet-app":
    default:
      return V5.default;
  }
}, Vu = (t) => t === "light" ? "#FFFFFF" : "#0A0B0D";
function Z5(t) {
  const { theme: e } = t, [r, n] = (0, Eh.useState)("coinbase-wallet-app"), i = (0, Eh.useCallback)((l) => {
    n(l);
  }, []), s = (0, D5.createQrUrl)(t.sessionId, t.sessionSecret, t.linkAPIUrl, t.isParentConnection, t.version, t.chainId), o = xh[r];
  if (!r)
    return null;
  const a = o.steps, u = r === "coinbase-app";
  return (0, te.h)(
    "div",
    { "data-testid": "connect-content", class: (0, $t.default)("-cbwsdk-connect-content", e) },
    (0, te.h)("style", null, G5.default),
    (0, te.h)(
      "div",
      { class: "-cbwsdk-connect-content-header" },
      (0, te.h)("h2", { class: (0, $t.default)("-cbwsdk-connect-content-heading", e) }, "Scan to connect with one of our mobile apps"),
      t.onCancel && (0, te.h)(
        "button",
        { type: "button", class: "-cbwsdk-cancel-button", onClick: t.onCancel },
        (0, te.h)(j5.CloseIcon, { fill: e === "light" ? "#0A0B0D" : "#FFFFFF" })
      )
    ),
    (0, te.h)(
      "div",
      { class: "-cbwsdk-connect-content-layout" },
      (0, te.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-left" },
        (0, te.h)("div", null, Object.entries(xh).map(([l, h]) => (0, te.h)(Q0, { key: l, title: h.title, description: h.description, icon: h.icon, selected: r === l, onClick: () => i(l), theme: e }))),
        u && (0, te.h)(
          "div",
          { class: (0, $t.default)("-cbwsdk-connect-content-update-app", e) },
          "Don’t see a ",
          (0, te.h)("strong", null, "Scan"),
          " option? Update your Coinbase app to the latest version and try again."
        )
      ),
      (0, te.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-right" },
        (0, te.h)(
          "div",
          { class: "-cbwsdk-connect-content-qr-wrapper" },
          (0, te.h)(z5.QRCode, { content: s, width: 200, height: 200, fgColor: "#000", bgColor: "transparent", image: {
            svg: J5(r),
            width: 25,
            height: 25
          } }),
          (0, te.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: B5.LIB_VERSION }),
          (0, te.h)("input", { type: "hidden", value: s })
        ),
        (0, te.h)(a, { theme: e }),
        !t.isConnected && (0, te.h)(
          "div",
          { "data-testid": "connecting-spinner", class: (0, $t.default)("-cbwsdk-connect-content-qr-connecting", e) },
          (0, te.h)(q5.Spinner, { size: 36, color: e === "dark" ? "#FFF" : "#000" }),
          (0, te.h)("p", null, "Connecting...")
        )
      )
    )
  );
}
ar.ConnectContent = Z5;
function Q0({ title: t, description: e, icon: r, selected: n, theme: i, onClick: s }) {
  return (0, te.h)(
    "div",
    { onClick: s, class: (0, $t.default)("-cbwsdk-connect-item", i, { selected: n }) },
    (0, te.h)(
      "div",
      null,
      (0, te.h)("img", { src: r, alt: t })
    ),
    (0, te.h)(
      "div",
      { class: "-cbwsdk-connect-item-copy-wrapper" },
      (0, te.h)("h3", { class: "-cbwsdk-connect-item-title" }, t),
      (0, te.h)("p", { class: "-cbwsdk-connect-item-description" }, e)
    )
  );
}
ar.ConnectItem = Q0;
function Y0({ theme: t }) {
  return (0, te.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, te.h)(
      "li",
      { class: (0, $t.default)("-cbwsdk-wallet-steps-item", t) },
      (0, te.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")
    ),
    (0, te.h)(
      "li",
      { class: (0, $t.default)("-cbwsdk-wallet-steps-item", t) },
      (0, te.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, te.h)(
          "span",
          null,
          "Tap ",
          (0, te.h)("strong", null, "Scan"),
          " "
        ),
        (0, te.h)(
          "span",
          { class: (0, $t.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t) },
          (0, te.h)(Z0.QRCodeIcon, { fill: Vu(t) })
        )
      )
    )
  );
}
ar.CoinbaseWalletSteps = Y0;
function K0({ theme: t }) {
  return (0, te.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, te.h)(
      "li",
      { class: (0, $t.default)("-cbwsdk-wallet-steps-item", t) },
      (0, te.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase app")
    ),
    (0, te.h)(
      "li",
      { class: (0, $t.default)("-cbwsdk-wallet-steps-item", t) },
      (0, te.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, te.h)(
          "span",
          null,
          "Tap ",
          (0, te.h)("strong", null, "More")
        ),
        (0, te.h)(
          "span",
          { class: (0, $t.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t) },
          (0, te.h)(U5.StatusDotIcon, { fill: Vu(t) })
        ),
        (0, te.h)(
          "span",
          { class: "-cbwsdk-wallet-steps-pad-left" },
          "then ",
          (0, te.h)("strong", null, "Scan")
        ),
        (0, te.h)(
          "span",
          { class: (0, $t.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t) },
          (0, te.h)(Z0.QRCodeIcon, { fill: Vu(t) })
        )
      )
    )
  );
}
ar.CoinbaseAppSteps = K0;
var na = {}, ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.ArrowLeftIcon = void 0;
const Mh = kt;
function Q5(t) {
  return (0, Mh.h)(
    "svg",
    Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Mh.h)("path", { d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z" })
  );
}
ia.ArrowLeftIcon = Q5;
var sa = {};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.LaptopIcon = void 0;
const au = kt;
function Y5(t) {
  return (0, au.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, au.h)("path", { d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z" }),
    (0, au.h)("path", { d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z" })
  );
}
sa.LaptopIcon = Y5;
var oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.SafeIcon = void 0;
const Ch = kt;
function K5(t) {
  return (0, Ch.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Ch.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z" })
  );
}
oa.SafeIcon = K5;
var Kc = {};
Object.defineProperty(Kc, "__esModule", { value: !0 });
Kc.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var X0 = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(na, "__esModule", { value: !0 });
na.TryExtensionContent = void 0;
const Yr = X0(Yo), nt = kt, uu = xs, X5 = ia, ex = sa, tx = oa, rx = X0(Kc);
function nx({ theme: t }) {
  const [e, r] = (0, uu.useState)(!1), n = (0, uu.useCallback)(() => {
    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
  }, []), i = (0, uu.useCallback)(() => {
    e ? window.location.reload() : (n(), r(!0));
  }, [n, e]);
  return (0, nt.h)(
    "div",
    { class: (0, Yr.default)("-cbwsdk-try-extension", t) },
    (0, nt.h)("style", null, rx.default),
    (0, nt.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, nt.h)("h3", { class: (0, Yr.default)("-cbwsdk-try-extension-heading", t) }, "Or try the Coinbase Wallet browser extension"),
      (0, nt.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, nt.h)("button", { class: (0, Yr.default)("-cbwsdk-try-extension-cta", t), onClick: i }, e ? "Refresh" : "Install"),
        (0, nt.h)("div", null, !e && (0, nt.h)(X5.ArrowLeftIcon, { class: "-cbwsdk-try-extension-cta-icon", fill: t === "light" ? "#0052FF" : "#588AF5" }))
      )
    ),
    (0, nt.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, nt.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, nt.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, nt.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, nt.h)(
              "span",
              { class: (0, Yr.default)("-cbwsdk-try-extension-list-item-icon", t) },
              (0, nt.h)(ex.LaptopIcon, { fill: t === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, nt.h)("div", { class: (0, Yr.default)("-cbwsdk-try-extension-list-item-copy", t) }, "Connect with dapps with just one click on your desktop browser")
        ),
        (0, nt.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, nt.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, nt.h)(
              "span",
              { class: (0, Yr.default)("-cbwsdk-try-extension-list-item-icon", t) },
              (0, nt.h)(tx.SafeIcon, { fill: t === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, nt.h)("div", { class: (0, Yr.default)("-cbwsdk-try-extension-list-item-copy", t) }, "Add an additional layer of security by using a supported Ledger hardware wallet")
        )
      )
    )
  );
}
na.TryExtensionContent = nx;
var Xc = {};
Object.defineProperty(Xc, "__esModule", { value: !0 });
Xc.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var eg = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Qo, "__esModule", { value: !0 });
Qo.ConnectDialog = void 0;
const cu = eg(Yo), Kr = kt, lu = xs, ix = ar, sx = na, ox = eg(Xc), ax = (t) => {
  const { isOpen: e, darkMode: r } = t, [n, i] = (0, lu.useState)(!e), [s, o] = (0, lu.useState)(!e);
  (0, lu.useEffect)(() => {
    const u = [
      window.setTimeout(() => {
        o(!e);
      }, 10)
    ];
    return e ? i(!1) : u.push(window.setTimeout(() => {
      i(!0);
    }, 360)), () => {
      u.forEach(window.clearTimeout);
    };
  }, [t.isOpen]);
  const a = r ? "dark" : "light";
  return (0, Kr.h)(
    "div",
    { class: (0, cu.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden") },
    (0, Kr.h)("style", null, ox.default),
    (0, Kr.h)("div", { class: (0, cu.default)("-cbwsdk-connect-dialog-backdrop", a, s && "-cbwsdk-connect-dialog-backdrop-hidden") }),
    (0, Kr.h)(
      "div",
      { class: "-cbwsdk-connect-dialog" },
      (0, Kr.h)(
        "div",
        { class: (0, cu.default)("-cbwsdk-connect-dialog-box", s && "-cbwsdk-connect-dialog-box-hidden") },
        t.connectDisabled ? null : (0, Kr.h)(ix.ConnectContent, { theme: a, version: t.version, sessionId: t.sessionId, sessionSecret: t.sessionSecret, linkAPIUrl: t.linkAPIUrl, isConnected: t.isConnected, isParentConnection: t.isParentConnection, chainId: t.chainId, onCancel: t.onCancel }),
        (0, Kr.h)(sx.TryExtensionContent, { theme: a })
      )
    )
  );
};
Qo.ConnectDialog = ax;
Object.defineProperty(qo, "__esModule", { value: !0 });
qo.LinkFlow = void 0;
const fu = kt, Rh = Zo, ux = Qo;
class cx {
  constructor(e) {
    this.extensionUI$ = new Rh.BehaviorSubject({}), this.subscriptions = new Rh.Subscription(), this.isConnected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = e.darkMode, this.version = e.version, this.sessionId = e.sessionId, this.sessionSecret = e.sessionSecret, this.linkAPIUrl = e.linkAPIUrl, this.isParentConnection = e.isParentConnection, this.connected$ = e.connected$, this.chainId$ = e.chainId$;
  }
  attach(e) {
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", e.appendChild(this.root), this.render(), this.subscriptions.add(this.connected$.subscribe((r) => {
      this.isConnected !== r && (this.isConnected = r, this.render());
    })), this.subscriptions.add(this.chainId$.subscribe((r) => {
      this.chainId !== r && (this.chainId = r, this.render());
    }));
  }
  detach() {
    var e;
    this.root && (this.subscriptions.unsubscribe(), (0, fu.render)(null, this.root), (e = this.root.parentElement) === null || e === void 0 || e.removeChild(this.root));
  }
  setConnectDisabled(e) {
    this.connectDisabled = e;
  }
  open(e) {
    this.isOpen = !0, this.onCancel = e.onCancel, this.render();
  }
  close() {
    this.isOpen = !1, this.onCancel = null, this.render();
  }
  render() {
    if (!this.root)
      return;
    const e = this.extensionUI$.subscribe(() => {
      this.root && (0, fu.render)((0, fu.h)(ux.ConnectDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, linkAPIUrl: this.linkAPIUrl, isOpen: this.isOpen, isConnected: this.isConnected, isParentConnection: this.isParentConnection, chainId: this.chainId, onCancel: this.onCancel, connectDisabled: this.connectDisabled }), this.root);
    });
    this.subscriptions.add(e);
  }
}
qo.LinkFlow = cx;
var tg = {}, el = {};
Object.defineProperty(el, "__esModule", { value: !0 });
el.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(t) {
  var e = J && J.__importDefault || function(p) {
    return p && p.__esModule ? p : { default: p };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
  const r = e(Yo), n = kt, i = xs, s = e(el), o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  function a(p) {
    switch (p) {
      case "coinbase-app":
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+";
      case "coinbase-wallet-app":
      default:
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+";
    }
  }
  class u {
    constructor(b) {
      this.items = /* @__PURE__ */ new Map(), this.nextItemKey = 0, this.root = null, this.darkMode = b.darkMode;
    }
    attach(b) {
      this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", b.appendChild(this.root), this.render();
    }
    presentItem(b) {
      const S = this.nextItemKey++;
      return this.items.set(S, b), this.render(), () => {
        this.items.delete(S), this.render();
      };
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root && (0, n.render)((0, n.h)(
        "div",
        null,
        (0, n.h)(t.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([b, S]) => (0, n.h)(t.SnackbarInstance, Object.assign({}, S, { key: b }))))
      ), this.root);
    }
  }
  t.Snackbar = u;
  const l = (p) => (0, n.h)(
    "div",
    { class: (0, r.default)("-cbwsdk-snackbar-container") },
    (0, n.h)("style", null, s.default),
    (0, n.h)("div", { class: "-cbwsdk-snackbar" }, p.children)
  );
  t.SnackbarContainer = l;
  const h = ({ autoExpand: p, message: b, menuItems: S, appSrc: R }) => {
    const [L, O] = (0, i.useState)(!0), [w, I] = (0, i.useState)(p ?? !1);
    (0, i.useEffect)(() => {
      const $ = [
        window.setTimeout(() => {
          O(!1);
        }, 1),
        window.setTimeout(() => {
          I(!0);
        }, 1e4)
      ];
      return () => {
        $.forEach(window.clearTimeout);
      };
    });
    const N = () => {
      I(!w);
    };
    return (0, n.h)(
      "div",
      { class: (0, r.default)("-cbwsdk-snackbar-instance", L && "-cbwsdk-snackbar-instance-hidden", w && "-cbwsdk-snackbar-instance-expanded") },
      (0, n.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: N },
        (0, n.h)("img", { src: a(R), class: "-cbwsdk-snackbar-instance-header-cblogo" }),
        (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, b),
        (0, n.h)(
          "div",
          { class: "-gear-container" },
          !w && (0, n.h)(
            "svg",
            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, n.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
          ),
          (0, n.h)("img", { src: o, class: "-gear-icon", title: "Expand" })
        )
      ),
      S && S.length > 0 && (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, S.map(($, P) => (0, n.h)(
        "div",
        { class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item", $.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: $.onClick, key: P },
        (0, n.h)(
          "svg",
          { width: $.svgWidth, height: $.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, n.h)("path", { "fill-rule": $.defaultFillRule, "clip-rule": $.defaultClipRule, d: $.path, fill: "#AAAAAA" })
        ),
        (0, n.h)("span", { class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item-info", $.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, $.info)
      )))
    );
  };
  t.SnackbarInstance = h;
})(tg);
var aa = {}, tl = {};
Object.defineProperty(tl, "__esModule", { value: !0 });
tl.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var lx = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.injectCssReset = void 0;
const fx = lx(tl);
function hx() {
  const t = document.createElement("style");
  t.type = "text/css", t.appendChild(document.createTextNode(fx.default)), document.documentElement.appendChild(t);
}
aa.injectCssReset = hx;
Object.defineProperty(zo, "__esModule", { value: !0 });
zo.WalletSDKUI = void 0;
const dx = qo, px = tg, gx = aa;
class bx {
  constructor(e) {
    this.standalone = null, this.attached = !1, this.appSrc = null, this.snackbar = new px.Snackbar({
      darkMode: e.darkMode
    }), this.linkFlow = new dx.LinkFlow({
      darkMode: e.darkMode,
      version: e.version,
      sessionId: e.session.id,
      sessionSecret: e.session.secret,
      linkAPIUrl: e.linkAPIUrl,
      connected$: e.connected$,
      chainId$: e.chainId$,
      isParentConnection: !1
    });
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const e = document.documentElement, r = document.createElement("div");
    r.className = "-cbwsdk-css-reset", e.appendChild(r), this.linkFlow.attach(r), this.snackbar.attach(r), this.attached = !0, (0, gx.injectCssReset)();
  }
  setConnectDisabled(e) {
    this.linkFlow.setConnectDisabled(e);
  }
  /* istanbul ignore next */
  addEthereumChain(e) {
  }
  /* istanbul ignore next */
  watchAsset(e) {
  }
  /* istanbul ignore next */
  switchEthereumChain(e) {
  }
  requestEthereumAccounts(e) {
    this.linkFlow.open({ onCancel: e.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  /* istanbul ignore next */
  signEthereumMessage(e) {
  }
  /* istanbul ignore next */
  signEthereumTransaction(e) {
  }
  /* istanbul ignore next */
  submitEthereumTransaction(e) {
  }
  /* istanbul ignore next */
  ethereumAddressFromSignedMessage(e) {
  }
  showConnecting(e) {
    let r;
    return e.isUnlinkedErrorState ? r = {
      autoExpand: !0,
      message: "Connection lost",
      appSrc: this.appSrc,
      menuItems: [
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    } : r = {
      message: "Confirm on phone",
      appSrc: this.appSrc,
      menuItems: [
        {
          isRed: !0,
          info: "Cancel transaction",
          svgWidth: "11",
          svgHeight: "11",
          path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
          defaultFillRule: "inherit",
          defaultClipRule: "inherit",
          onClick: e.onCancel
        },
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    }, this.snackbar.presentItem(r);
  }
  /* istanbul ignore next */
  setAppSrc(e) {
    this.appSrc = e;
  }
  /* istanbul ignore next */
  reloadUI() {
    document.location.reload();
  }
  /* istanbul ignore next */
  inlineAccountsResponse() {
    return !1;
  }
  /* istanbul ignore next */
  inlineAddEthereumChain(e) {
    return !1;
  }
  /* istanbul ignore next */
  inlineWatchAsset() {
    return !1;
  }
  /* istanbul ignore next */
  inlineSwitchEthereumChain() {
    return !1;
  }
  /* istanbul ignore next */
  setStandalone(e) {
    this.standalone = e;
  }
  /* istanbul ignore next */
  isStandalone() {
    var e;
    return (e = this.standalone) !== null && e !== void 0 ? e : !1;
  }
}
zo.WalletSDKUI = bx;
var ua = {}, ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
var Gn;
(function(t) {
  t.typeOfFunction = "function", t.boolTrue = !0;
})(Gn || (Gn = {}));
function rg(t, e, r) {
  if (!r || typeof r.value !== Gn.typeOfFunction)
    throw new TypeError("Only methods can be decorated with @bind. <" + e + "> is not a method!");
  return {
    configurable: Gn.boolTrue,
    get: function() {
      var n = r.value.bind(this);
      return Object.defineProperty(this, e, {
        value: n,
        configurable: Gn.boolTrue,
        writable: Gn.boolTrue
      }), n;
    }
  };
}
ca.bind = rg;
ca.default = rg;
function ng(t) {
  return function(r) {
    return r.lift(new vx(t));
  };
}
var vx = /* @__PURE__ */ function() {
  function t(e) {
    this.durationSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new yx(e, this.durationSelector));
  }, t;
}(), yx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.durationSelector = n, i.hasValue = !1, i;
  }
  return e.prototype._next = function(r) {
    if (this.value = r, this.hasValue = !0, !this.throttled) {
      var n = void 0;
      try {
        var i = this.durationSelector;
        n = i(r);
      } catch (o) {
        return this.destination.error(o);
      }
      var s = tt(n, new Xe(this));
      !s || s.closed ? this.clearThrottle() : this.add(this.throttled = s);
    }
  }, e.prototype.clearThrottle = function() {
    var r = this, n = r.value, i = r.hasValue, s = r.throttled;
    s && (this.remove(s), this.throttled = void 0, s.unsubscribe()), i && (this.value = void 0, this.hasValue = !1, this.destination.next(n));
  }, e.prototype.notifyNext = function() {
    this.clearThrottle();
  }, e.prototype.notifyComplete = function() {
    this.clearThrottle();
  }, e;
}(et);
function mx(t, e) {
  return e === void 0 && (e = St), ng(function() {
    return D0(t, e);
  });
}
function _x(t) {
  return function(r) {
    return r.lift(new wx(t));
  };
}
var wx = /* @__PURE__ */ function() {
  function t(e) {
    this.closingNotifier = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Sx(e, this.closingNotifier));
  }, t;
}(), Sx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.buffer = [], i.add(tt(n, new Xe(i))), i;
  }
  return e.prototype._next = function(r) {
    this.buffer.push(r);
  }, e.prototype.notifyNext = function() {
    var r = this.buffer;
    this.buffer = [], this.destination.next(r);
  }, e;
}(et);
function Ex(t, e) {
  return e === void 0 && (e = null), function(n) {
    return n.lift(new xx(t, e));
  };
}
var xx = /* @__PURE__ */ function() {
  function t(e, r) {
    this.bufferSize = e, this.startBufferEvery = r, !r || e === r ? this.subscriberClass = Mx : this.subscriberClass = Cx;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new this.subscriberClass(e, this.bufferSize, this.startBufferEvery));
  }, t;
}(), Mx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.bufferSize = n, i.buffer = [], i;
  }
  return e.prototype._next = function(r) {
    var n = this.buffer;
    n.push(r), n.length == this.bufferSize && (this.destination.next(n), this.buffer = []);
  }, e.prototype._complete = function() {
    var r = this.buffer;
    r.length > 0 && this.destination.next(r), t.prototype._complete.call(this);
  }, e;
}(Y), Cx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.bufferSize = n, s.startBufferEvery = i, s.buffers = [], s.count = 0, s;
  }
  return e.prototype._next = function(r) {
    var n = this, i = n.bufferSize, s = n.startBufferEvery, o = n.buffers, a = n.count;
    this.count++, a % s === 0 && o.push([]);
    for (var u = o.length; u--; ) {
      var l = o[u];
      l.push(r), l.length === i && (o.splice(u, 1), this.destination.next(l));
    }
  }, e.prototype._complete = function() {
    for (var r = this, n = r.buffers, i = r.destination; n.length > 0; ) {
      var s = n.shift();
      s.length > 0 && i.next(s);
    }
    t.prototype._complete.call(this);
  }, e;
}(Y);
function Rx(t) {
  var e = arguments.length, r = St;
  At(arguments[arguments.length - 1]) && (r = arguments[arguments.length - 1], e--);
  var n = null;
  e >= 2 && (n = arguments[1]);
  var i = Number.POSITIVE_INFINITY;
  return e >= 3 && (i = arguments[2]), function(o) {
    return o.lift(new Ix(t, n, i, r));
  };
}
var Ix = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.bufferTimeSpan = e, this.bufferCreationInterval = r, this.maxBufferSize = n, this.scheduler = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new kx(e, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
  }, t;
}(), Ax = /* @__PURE__ */ function() {
  function t() {
    this.buffer = [];
  }
  return t;
}(), kx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    a.bufferTimeSpan = n, a.bufferCreationInterval = i, a.maxBufferSize = s, a.scheduler = o, a.contexts = [];
    var u = a.openContext();
    if (a.timespanOnly = i == null || i < 0, a.timespanOnly) {
      var l = { subscriber: a, context: u, bufferTimeSpan: n };
      a.add(u.closeAction = o.schedule(Ih, n, l));
    } else {
      var h = { subscriber: a, context: u }, p = { bufferTimeSpan: n, bufferCreationInterval: i, subscriber: a, scheduler: o };
      a.add(u.closeAction = o.schedule(ig, n, h)), a.add(o.schedule(Tx, i, p));
    }
    return a;
  }
  return e.prototype._next = function(r) {
    for (var n = this.contexts, i = n.length, s, o = 0; o < i; o++) {
      var a = n[o], u = a.buffer;
      u.push(r), u.length == this.maxBufferSize && (s = a);
    }
    s && this.onBufferFull(s);
  }, e.prototype._error = function(r) {
    this.contexts.length = 0, t.prototype._error.call(this, r);
  }, e.prototype._complete = function() {
    for (var r = this, n = r.contexts, i = r.destination; n.length > 0; ) {
      var s = n.shift();
      i.next(s.buffer);
    }
    t.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    this.contexts = null;
  }, e.prototype.onBufferFull = function(r) {
    this.closeContext(r);
    var n = r.closeAction;
    if (n.unsubscribe(), this.remove(n), !this.closed && this.timespanOnly) {
      r = this.openContext();
      var i = this.bufferTimeSpan, s = { subscriber: this, context: r, bufferTimeSpan: i };
      this.add(r.closeAction = this.scheduler.schedule(Ih, i, s));
    }
  }, e.prototype.openContext = function() {
    var r = new Ax();
    return this.contexts.push(r), r;
  }, e.prototype.closeContext = function(r) {
    this.destination.next(r.buffer);
    var n = this.contexts, i = n ? n.indexOf(r) : -1;
    i >= 0 && n.splice(n.indexOf(r), 1);
  }, e;
}(Y);
function Ih(t) {
  var e = t.subscriber, r = t.context;
  r && e.closeContext(r), e.closed || (t.context = e.openContext(), t.context.closeAction = this.schedule(t, t.bufferTimeSpan));
}
function Tx(t) {
  var e = t.bufferCreationInterval, r = t.bufferTimeSpan, n = t.subscriber, i = t.scheduler, s = n.openContext(), o = this;
  n.closed || (n.add(s.closeAction = i.schedule(ig, r, { subscriber: n, context: s })), o.schedule(t, e));
}
function ig(t) {
  var e = t.subscriber, r = t.context;
  e.closeContext(r);
}
function Ox(t, e) {
  return function(n) {
    return n.lift(new Nx(t, e));
  };
}
var Nx = /* @__PURE__ */ function() {
  function t(e, r) {
    this.openings = e, this.closingSelector = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Lx(e, this.openings, this.closingSelector));
  }, t;
}(), Lx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.closingSelector = i, s.contexts = [], s.add(yr(s, n)), s;
  }
  return e.prototype._next = function(r) {
    for (var n = this.contexts, i = n.length, s = 0; s < i; s++)
      n[s].buffer.push(r);
  }, e.prototype._error = function(r) {
    for (var n = this.contexts; n.length > 0; ) {
      var i = n.shift();
      i.subscription.unsubscribe(), i.buffer = null, i.subscription = null;
    }
    this.contexts = null, t.prototype._error.call(this, r);
  }, e.prototype._complete = function() {
    for (var r = this.contexts; r.length > 0; ) {
      var n = r.shift();
      this.destination.next(n.buffer), n.subscription.unsubscribe(), n.buffer = null, n.subscription = null;
    }
    this.contexts = null, t.prototype._complete.call(this);
  }, e.prototype.notifyNext = function(r, n) {
    r ? this.closeBuffer(r) : this.openBuffer(n);
  }, e.prototype.notifyComplete = function(r) {
    this.closeBuffer(r.context);
  }, e.prototype.openBuffer = function(r) {
    try {
      var n = this.closingSelector, i = n.call(this, r);
      i && this.trySubscribe(i);
    } catch (s) {
      this._error(s);
    }
  }, e.prototype.closeBuffer = function(r) {
    var n = this.contexts;
    if (n && r) {
      var i = r.buffer, s = r.subscription;
      this.destination.next(i), n.splice(n.indexOf(r), 1), this.remove(s), s.unsubscribe();
    }
  }, e.prototype.trySubscribe = function(r) {
    var n = this.contexts, i = [], s = new Ke(), o = { buffer: i, subscription: s };
    n.push(o);
    var a = yr(this, r, o);
    !a || a.closed ? this.closeBuffer(o) : (a.context = o, this.add(a), s.add(a));
  }, e;
}(xn);
function Px(t) {
  return function(e) {
    return e.lift(new $x(t));
  };
}
var $x = /* @__PURE__ */ function() {
  function t(e) {
    this.closingSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Dx(e, this.closingSelector));
  }, t;
}(), Dx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.closingSelector = n, i.subscribing = !1, i.openBuffer(), i;
  }
  return e.prototype._next = function(r) {
    this.buffer.push(r);
  }, e.prototype._complete = function() {
    var r = this.buffer;
    r && this.destination.next(r), t.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    this.buffer = void 0, this.subscribing = !1;
  }, e.prototype.notifyNext = function() {
    this.openBuffer();
  }, e.prototype.notifyComplete = function() {
    this.subscribing ? this.complete() : this.openBuffer();
  }, e.prototype.openBuffer = function() {
    var r = this.closingSubscription;
    r && (this.remove(r), r.unsubscribe());
    var n = this.buffer;
    this.buffer && this.destination.next(n), this.buffer = [];
    var i;
    try {
      var s = this.closingSelector;
      i = s();
    } catch (o) {
      return this.error(o);
    }
    r = new Ke(), this.closingSubscription = r, this.add(r), this.subscribing = !0, r.add(tt(i, new Xe(this))), this.subscribing = !1;
  }, e;
}(et);
function Bx(t) {
  return function(r) {
    var n = new jx(t), i = r.lift(n);
    return n.caught = i;
  };
}
var jx = /* @__PURE__ */ function() {
  function t(e) {
    this.selector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Fx(e, this.selector, this.caught));
  }, t;
}(), Fx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.selector = n, s.caught = i, s;
  }
  return e.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = void 0;
      try {
        n = this.selector(r, this.caught);
      } catch (o) {
        t.prototype.error.call(this, o);
        return;
      }
      this._unsubscribeAndRecycle();
      var i = new Xe(this);
      this.add(i);
      var s = tt(n, i);
      s !== i && this.add(s);
    }
  }, e;
}(et);
function Wx(t) {
  return function(e) {
    return e.lift(new Wc(t));
  };
}
function Hx() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = null;
  return typeof t[t.length - 1] == "function" && (r = t.pop()), t.length === 1 && wt(t[0]) && (t = t[0].slice()), function(n) {
    return n.lift.call(_r([n].concat(t)), new Wc(r));
  };
}
function Vx() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    return r.lift.call(Ki.apply(void 0, [r].concat(t)));
  };
}
function sg(t, e) {
  return pn(t, e, 1);
}
function Ux(t, e) {
  return sg(function() {
    return t;
  }, e);
}
function zx(t) {
  return function(e) {
    return e.lift(new qx(t, e));
  };
}
var qx = /* @__PURE__ */ function() {
  function t(e, r) {
    this.predicate = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Gx(e, this.predicate, this.source));
  }, t;
}(), Gx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.predicate = n, s.source = i, s.count = 0, s.index = 0, s;
  }
  return e.prototype._next = function(r) {
    this.predicate ? this._tryPredicate(r) : this.count++;
  }, e.prototype._tryPredicate = function(r) {
    var n;
    try {
      n = this.predicate(r, this.index++, this.source);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    n && this.count++;
  }, e.prototype._complete = function() {
    this.destination.next(this.count), this.destination.complete();
  }, e;
}(Y);
function Jx(t) {
  return function(e) {
    return e.lift(new Zx(t));
  };
}
var Zx = /* @__PURE__ */ function() {
  function t(e) {
    this.durationSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Qx(e, this.durationSelector));
  }, t;
}(), Qx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.durationSelector = n, i.hasValue = !1, i;
  }
  return e.prototype._next = function(r) {
    try {
      var n = this.durationSelector.call(this, r);
      n && this._tryNext(r, n);
    } catch (i) {
      this.destination.error(i);
    }
  }, e.prototype._complete = function() {
    this.emitValue(), this.destination.complete();
  }, e.prototype._tryNext = function(r, n) {
    var i = this.durationSubscription;
    this.value = r, this.hasValue = !0, i && (i.unsubscribe(), this.remove(i)), i = tt(n, new Xe(this)), i && !i.closed && this.add(this.durationSubscription = i);
  }, e.prototype.notifyNext = function() {
    this.emitValue();
  }, e.prototype.notifyComplete = function() {
    this.emitValue();
  }, e.prototype.emitValue = function() {
    if (this.hasValue) {
      var r = this.value, n = this.durationSubscription;
      n && (this.durationSubscription = void 0, n.unsubscribe(), this.remove(n)), this.value = void 0, this.hasValue = !1, t.prototype._next.call(this, r);
    }
  }, e;
}(et);
function Yx(t, e) {
  return e === void 0 && (e = St), function(r) {
    return r.lift(new Kx(t, e));
  };
}
var Kx = /* @__PURE__ */ function() {
  function t(e, r) {
    this.dueTime = e, this.scheduler = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Xx(e, this.dueTime, this.scheduler));
  }, t;
}(), Xx = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.dueTime = n, s.scheduler = i, s.debouncedSubscription = null, s.lastValue = null, s.hasValue = !1, s;
  }
  return e.prototype._next = function(r) {
    this.clearDebounce(), this.lastValue = r, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(eM, this.dueTime, this));
  }, e.prototype._complete = function() {
    this.debouncedNext(), this.destination.complete();
  }, e.prototype.debouncedNext = function() {
    if (this.clearDebounce(), this.hasValue) {
      var r = this.lastValue;
      this.lastValue = null, this.hasValue = !1, this.destination.next(r);
    }
  }, e.prototype.clearDebounce = function() {
    var r = this.debouncedSubscription;
    r !== null && (this.remove(r), r.unsubscribe(), this.debouncedSubscription = null);
  }, e;
}(Y);
function eM(t) {
  t.debouncedNext();
}
function Ms(t) {
  return t === void 0 && (t = null), function(e) {
    return e.lift(new tM(t));
  };
}
var tM = /* @__PURE__ */ function() {
  function t(e) {
    this.defaultValue = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new rM(e, this.defaultValue));
  }, t;
}(), rM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.defaultValue = n, i.isEmpty = !0, i;
  }
  return e.prototype._next = function(r) {
    this.isEmpty = !1, this.destination.next(r);
  }, e.prototype._complete = function() {
    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
  }, e;
}(Y);
function og(t) {
  return t instanceof Date && !isNaN(+t);
}
function nM(t, e) {
  e === void 0 && (e = St);
  var r = og(t), n = r ? +t - e.now() : Math.abs(t);
  return function(i) {
    return i.lift(new iM(n, e));
  };
}
var iM = /* @__PURE__ */ function() {
  function t(e, r) {
    this.delay = e, this.scheduler = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new sM(e, this.delay, this.scheduler));
  }, t;
}(), sM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.delay = n, s.scheduler = i, s.queue = [], s.active = !1, s.errored = !1, s;
  }
  return e.dispatch = function(r) {
    for (var n = r.source, i = n.queue, s = r.scheduler, o = r.destination; i.length > 0 && i[0].time - s.now() <= 0; )
      i.shift().notification.observe(o);
    if (i.length > 0) {
      var a = Math.max(0, i[0].time - s.now());
      this.schedule(r, a);
    } else
      this.unsubscribe(), n.active = !1;
  }, e.prototype._schedule = function(r) {
    this.active = !0;
    var n = this.destination;
    n.add(r.schedule(e.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: r
    }));
  }, e.prototype.scheduleNotification = function(r) {
    if (this.errored !== !0) {
      var n = this.scheduler, i = new oM(n.now() + this.delay, r);
      this.queue.push(i), this.active === !1 && this._schedule(n);
    }
  }, e.prototype._next = function(r) {
    this.scheduleNotification(br.createNext(r));
  }, e.prototype._error = function(r) {
    this.errored = !0, this.queue = [], this.destination.error(r), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.scheduleNotification(br.createComplete()), this.unsubscribe();
  }, e;
}(Y), oM = /* @__PURE__ */ function() {
  function t(e, r) {
    this.time = e, this.notification = r;
  }
  return t;
}();
function aM(t, e) {
  return e ? function(r) {
    return new cM(r, e).lift(new Ah(t));
  } : function(r) {
    return r.lift(new Ah(t));
  };
}
var Ah = /* @__PURE__ */ function() {
  function t(e) {
    this.delayDurationSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new uM(e, this.delayDurationSelector));
  }, t;
}(), uM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.delayDurationSelector = n, i.completed = !1, i.delayNotifierSubscriptions = [], i.index = 0, i;
  }
  return e.prototype.notifyNext = function(r, n, i, s, o) {
    this.destination.next(r), this.removeSubscription(o), this.tryComplete();
  }, e.prototype.notifyError = function(r, n) {
    this._error(r);
  }, e.prototype.notifyComplete = function(r) {
    var n = this.removeSubscription(r);
    n && this.destination.next(n), this.tryComplete();
  }, e.prototype._next = function(r) {
    var n = this.index++;
    try {
      var i = this.delayDurationSelector(r, n);
      i && this.tryDelay(i, r);
    } catch (s) {
      this.destination.error(s);
    }
  }, e.prototype._complete = function() {
    this.completed = !0, this.tryComplete(), this.unsubscribe();
  }, e.prototype.removeSubscription = function(r) {
    r.unsubscribe();
    var n = this.delayNotifierSubscriptions.indexOf(r);
    return n !== -1 && this.delayNotifierSubscriptions.splice(n, 1), r.outerValue;
  }, e.prototype.tryDelay = function(r, n) {
    var i = yr(this, r, n);
    if (i && !i.closed) {
      var s = this.destination;
      s.add(i), this.delayNotifierSubscriptions.push(i);
    }
  }, e.prototype.tryComplete = function() {
    this.completed && this.delayNotifierSubscriptions.length === 0 && this.destination.complete();
  }, e;
}(xn), cM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.source = r, i.subscriptionDelay = n, i;
  }
  return e.prototype._subscribe = function(r) {
    this.subscriptionDelay.subscribe(new lM(r, this.source));
  }, e;
}(ue), lM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.parent = r, i.source = n, i.sourceSubscribed = !1, i;
  }
  return e.prototype._next = function(r) {
    this.subscribeToSource();
  }, e.prototype._error = function(r) {
    this.unsubscribe(), this.parent.error(r);
  }, e.prototype._complete = function() {
    this.unsubscribe(), this.subscribeToSource();
  }, e.prototype.subscribeToSource = function() {
    this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent));
  }, e;
}(Y);
function fM() {
  return function(e) {
    return e.lift(new hM());
  };
}
var hM = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new dM(e));
  }, t;
}(), dM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype._next = function(r) {
    r.observe(this.destination);
  }, e;
}(Y);
function pM(t, e) {
  return function(r) {
    return r.lift(new gM(t, e));
  };
}
var gM = /* @__PURE__ */ function() {
  function t(e, r) {
    this.keySelector = e, this.flushes = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new bM(e, this.keySelector, this.flushes));
  }, t;
}(), bM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.keySelector = n, s.values = /* @__PURE__ */ new Set(), i && s.add(tt(i, new Xe(s))), s;
  }
  return e.prototype.notifyNext = function() {
    this.values.clear();
  }, e.prototype.notifyError = function(r) {
    this._error(r);
  }, e.prototype._next = function(r) {
    this.keySelector ? this._useKeySelector(r) : this._finalizeNext(r, r);
  }, e.prototype._useKeySelector = function(r) {
    var n, i = this.destination;
    try {
      n = this.keySelector(r);
    } catch (s) {
      i.error(s);
      return;
    }
    this._finalizeNext(n, r);
  }, e.prototype._finalizeNext = function(r, n) {
    var i = this.values;
    i.has(r) || (i.add(r), this.destination.next(n));
  }, e;
}(et);
function ag(t, e) {
  return function(r) {
    return r.lift(new vM(t, e));
  };
}
var vM = /* @__PURE__ */ function() {
  function t(e, r) {
    this.compare = e, this.keySelector = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new yM(e, this.compare, this.keySelector));
  }, t;
}(), yM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.keySelector = i, s.hasKey = !1, typeof n == "function" && (s.compare = n), s;
  }
  return e.prototype.compare = function(r, n) {
    return r === n;
  }, e.prototype._next = function(r) {
    var n;
    try {
      var i = this.keySelector;
      n = i ? i(r) : r;
    } catch (a) {
      return this.destination.error(a);
    }
    var s = !1;
    if (this.hasKey)
      try {
        var o = this.compare;
        s = o(this.key, n);
      } catch (a) {
        return this.destination.error(a);
      }
    else
      this.hasKey = !0;
    s || (this.key = n, this.destination.next(r));
  }, e;
}(Y);
function mM(t, e) {
  return ag(function(r, n) {
    return e ? e(r[t], n[t]) : r[t] === n[t];
  });
}
function la(t) {
  return t === void 0 && (t = SM), function(e) {
    return e.lift(new _M(t));
  };
}
var _M = /* @__PURE__ */ function() {
  function t(e) {
    this.errorFactory = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new wM(e, this.errorFactory));
  }, t;
}(), wM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.errorFactory = n, i.hasValue = !1, i;
  }
  return e.prototype._next = function(r) {
    this.hasValue = !0, this.destination.next(r);
  }, e.prototype._complete = function() {
    if (this.hasValue)
      return this.destination.complete();
    var r = void 0;
    try {
      r = this.errorFactory();
    } catch (n) {
      r = n;
    }
    this.destination.error(r);
  }, e;
}(Y);
function SM() {
  return new Es();
}
function rl(t) {
  return function(e) {
    return t === 0 ? Ri() : e.lift(new EM(t));
  };
}
var EM = /* @__PURE__ */ function() {
  function t(e) {
    if (this.total = e, this.total < 0)
      throw new hi();
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new xM(e, this.total));
  }, t;
}(), xM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.total = n, i.count = 0, i;
  }
  return e.prototype._next = function(r) {
    var n = this.total, i = ++this.count;
    i <= n && (this.destination.next(r), i === n && (this.destination.complete(), this.unsubscribe()));
  }, e;
}(Y);
function MM(t, e) {
  if (t < 0)
    throw new hi();
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(Lr(function(i, s) {
      return s === t;
    }), rl(1), r ? Ms(e) : la(function() {
      return new hi();
    }));
  };
}
function CM() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    return Ki(r, Jo.apply(void 0, t));
  };
}
function RM(t, e) {
  return function(r) {
    return r.lift(new IM(t, e, r));
  };
}
var IM = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.predicate = e, this.thisArg = r, this.source = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new AM(e, this.predicate, this.thisArg, this.source));
  }, t;
}(), AM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.predicate = n, o.thisArg = i, o.source = s, o.index = 0, o.thisArg = i || o, o;
  }
  return e.prototype.notifyComplete = function(r) {
    this.destination.next(r), this.destination.complete();
  }, e.prototype._next = function(r) {
    var n = !1;
    try {
      n = this.predicate.call(this.thisArg, r, this.index++, this.source);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    n || this.notifyComplete(!1);
  }, e.prototype._complete = function() {
    this.notifyComplete(!0);
  }, e;
}(Y);
function kM() {
  return function(t) {
    return t.lift(new TM());
  };
}
var TM = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new OM(e));
  }, t;
}(), OM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.hasCompleted = !1, n.hasSubscription = !1, n;
  }
  return e.prototype._next = function(r) {
    this.hasSubscription || (this.hasSubscription = !0, this.add(tt(r, new Xe(this))));
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.hasSubscription || this.destination.complete();
  }, e.prototype.notifyComplete = function() {
    this.hasSubscription = !1, this.hasCompleted && this.destination.complete();
  }, e;
}(et);
function ug(t, e) {
  return e ? function(r) {
    return r.pipe(ug(function(n, i) {
      return _r(t(n, i)).pipe(Ft(function(s, o) {
        return e(n, s, i, o);
      }));
    }));
  } : function(r) {
    return r.lift(new NM(t));
  };
}
var NM = /* @__PURE__ */ function() {
  function t(e) {
    this.project = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new LM(e, this.project));
  }, t;
}(), LM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.project = n, i.hasSubscription = !1, i.hasCompleted = !1, i.index = 0, i;
  }
  return e.prototype._next = function(r) {
    this.hasSubscription || this.tryNext(r);
  }, e.prototype.tryNext = function(r) {
    var n, i = this.index++;
    try {
      n = this.project(r, i);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this.hasSubscription = !0, this._innerSub(n);
  }, e.prototype._innerSub = function(r) {
    var n = new Xe(this), i = this.destination;
    i.add(n);
    var s = tt(r, n);
    s !== n && i.add(s);
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe();
  }, e.prototype.notifyNext = function(r) {
    this.destination.next(r);
  }, e.prototype.notifyError = function(r) {
    this.destination.error(r);
  }, e.prototype.notifyComplete = function() {
    this.hasSubscription = !1, this.hasCompleted && this.destination.complete();
  }, e;
}(et);
function PM(t, e, r) {
  return e === void 0 && (e = Number.POSITIVE_INFINITY), e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e, function(n) {
    return n.lift(new $M(t, e, r));
  };
}
var $M = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.project = e, this.concurrent = r, this.scheduler = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new DM(e, this.project, this.concurrent, this.scheduler));
  }, t;
}(), DM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.project = n, o.concurrent = i, o.scheduler = s, o.index = 0, o.active = 0, o.hasCompleted = !1, i < Number.POSITIVE_INFINITY && (o.buffer = []), o;
  }
  return e.dispatch = function(r) {
    var n = r.subscriber, i = r.result, s = r.value, o = r.index;
    n.subscribeToProjection(i, s, o);
  }, e.prototype._next = function(r) {
    var n = this.destination;
    if (n.closed) {
      this._complete();
      return;
    }
    var i = this.index++;
    if (this.active < this.concurrent) {
      n.next(r);
      try {
        var s = this.project, o = s(r, i);
        if (!this.scheduler)
          this.subscribeToProjection(o, r, i);
        else {
          var a = { subscriber: this, result: o, value: r, index: i }, u = this.destination;
          u.add(this.scheduler.schedule(e.dispatch, 0, a));
        }
      } catch (l) {
        n.error(l);
      }
    } else
      this.buffer.push(r);
  }, e.prototype.subscribeToProjection = function(r, n, i) {
    this.active++;
    var s = this.destination;
    s.add(tt(r, new Xe(this)));
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.hasCompleted && this.active === 0 && this.destination.complete(), this.unsubscribe();
  }, e.prototype.notifyNext = function(r) {
    this._next(r);
  }, e.prototype.notifyComplete = function() {
    var r = this.buffer;
    this.active--, r && r.length > 0 && this._next(r.shift()), this.hasCompleted && this.active === 0 && this.destination.complete();
  }, e;
}(et);
function BM(t) {
  return function(e) {
    return e.lift(new jM(t));
  };
}
var jM = /* @__PURE__ */ function() {
  function t(e) {
    this.callback = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new FM(e, this.callback));
  }, t;
}(), FM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.add(new Ke(n)), i;
  }
  return e;
}(Y);
function WM(t, e) {
  if (typeof t != "function")
    throw new TypeError("predicate is not a function");
  return function(r) {
    return r.lift(new cg(t, r, !1, e));
  };
}
var cg = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.predicate = e, this.source = r, this.yieldIndex = n, this.thisArg = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new HM(e, this.predicate, this.source, this.yieldIndex, this.thisArg));
  }, t;
}(), HM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    return a.predicate = n, a.source = i, a.yieldIndex = s, a.thisArg = o, a.index = 0, a;
  }
  return e.prototype.notifyComplete = function(r) {
    var n = this.destination;
    n.next(r), n.complete(), this.unsubscribe();
  }, e.prototype._next = function(r) {
    var n = this, i = n.predicate, s = n.thisArg, o = this.index++;
    try {
      var a = i.call(s || this, r, o, this.source);
      a && this.notifyComplete(this.yieldIndex ? o : r);
    } catch (u) {
      this.destination.error(u);
    }
  }, e.prototype._complete = function() {
    this.notifyComplete(this.yieldIndex ? -1 : void 0);
  }, e;
}(Y);
function VM(t, e) {
  return function(r) {
    return r.lift(new cg(t, r, !0, e));
  };
}
function UM(t, e) {
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(t ? Lr(function(i, s) {
      return t(i, s, n);
    }) : Or, rl(1), r ? Ms(e) : la(function() {
      return new Es();
    }));
  };
}
function zM() {
  return function(e) {
    return e.lift(new qM());
  };
}
var qM = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new GM(e));
  }, t;
}(), GM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype._next = function(r) {
  }, e;
}(Y);
function JM() {
  return function(t) {
    return t.lift(new ZM());
  };
}
var ZM = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new QM(e));
  }, t;
}(), QM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.notifyComplete = function(r) {
    var n = this.destination;
    n.next(r), n.complete();
  }, e.prototype._next = function(r) {
    this.notifyComplete(!1);
  }, e.prototype._complete = function() {
    this.notifyComplete(!0);
  }, e;
}(Y);
function uo(t) {
  return function(r) {
    return t === 0 ? Ri() : r.lift(new YM(t));
  };
}
var YM = /* @__PURE__ */ function() {
  function t(e) {
    if (this.total = e, this.total < 0)
      throw new hi();
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new KM(e, this.total));
  }, t;
}(), KM = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.total = n, i.ring = new Array(), i.count = 0, i;
  }
  return e.prototype._next = function(r) {
    var n = this.ring, i = this.total, s = this.count++;
    if (n.length < i)
      n.push(r);
    else {
      var o = s % i;
      n[o] = r;
    }
  }, e.prototype._complete = function() {
    var r = this.destination, n = this.count;
    if (n > 0)
      for (var i = this.count >= this.total ? this.total : this.count, s = this.ring, o = 0; o < i; o++) {
        var a = n++ % i;
        r.next(s[a]);
      }
    r.complete();
  }, e;
}(Y);
function XM(t, e) {
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(t ? Lr(function(i, s) {
      return t(i, s, n);
    }) : Or, uo(1), r ? Ms(e) : la(function() {
      return new Es();
    }));
  };
}
function eC(t) {
  return function(e) {
    return e.lift(new tC(t));
  };
}
var tC = /* @__PURE__ */ function() {
  function t(e) {
    this.value = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new rC(e, this.value));
  }, t;
}(), rC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.value = n, i;
  }
  return e.prototype._next = function(r) {
    this.destination.next(this.value);
  }, e;
}(Y);
function nC() {
  return function(e) {
    return e.lift(new iC());
  };
}
var iC = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new sC(e));
  }, t;
}(), sC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype._next = function(r) {
    this.destination.next(br.createNext(r));
  }, e.prototype._error = function(r) {
    var n = this.destination;
    n.next(br.createError(r)), n.complete();
  }, e.prototype._complete = function() {
    var r = this.destination;
    r.next(br.createComplete()), r.complete();
  }, e;
}(Y);
function co(t, e) {
  var r = !1;
  return arguments.length >= 2 && (r = !0), function(i) {
    return i.lift(new oC(t, e, r));
  };
}
var oC = /* @__PURE__ */ function() {
  function t(e, r, n) {
    n === void 0 && (n = !1), this.accumulator = e, this.seed = r, this.hasSeed = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new aC(e, this.accumulator, this.seed, this.hasSeed));
  }, t;
}(), aC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.accumulator = n, o._seed = i, o.hasSeed = s, o.index = 0, o;
  }
  return Object.defineProperty(e.prototype, "seed", {
    get: function() {
      return this._seed;
    },
    set: function(r) {
      this.hasSeed = !0, this._seed = r;
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype._next = function(r) {
    if (!this.hasSeed)
      this.seed = r, this.destination.next(r);
    else
      return this._tryNext(r);
  }, e.prototype._tryNext = function(r) {
    var n = this.index++, i;
    try {
      i = this.accumulator(this.seed, r, n);
    } catch (s) {
      this.destination.error(s);
    }
    this.seed = i, this.destination.next(i);
  }, e;
}(Y);
function fa(t, e) {
  return arguments.length >= 2 ? function(n) {
    return $u(co(t, e), uo(1), Ms(e))(n);
  } : function(n) {
    return $u(co(function(i, s, o) {
      return t(i, s, o + 1);
    }), uo(1))(n);
  };
}
function uC(t) {
  var e = typeof t == "function" ? function(r, n) {
    return t(r, n) > 0 ? r : n;
  } : function(r, n) {
    return r > n ? r : n;
  };
  return fa(e);
}
function cC() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    return r.lift.call(N0.apply(void 0, [r].concat(t)));
  };
}
function lC(t, e, r) {
  return r === void 0 && (r = Number.POSITIVE_INFINITY), typeof e == "function" ? pn(function() {
    return t;
  }, e, r) : (typeof e == "number" && (r = e), pn(function() {
    return t;
  }, r));
}
function fC(t, e, r) {
  return r === void 0 && (r = Number.POSITIVE_INFINITY), function(n) {
    return n.lift(new hC(t, e, r));
  };
}
var hC = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.accumulator = e, this.seed = r, this.concurrent = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new dC(e, this.accumulator, this.seed, this.concurrent));
  }, t;
}(), dC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.accumulator = n, o.acc = i, o.concurrent = s, o.hasValue = !1, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o;
  }
  return e.prototype._next = function(r) {
    if (this.active < this.concurrent) {
      var n = this.index++, i = this.destination, s = void 0;
      try {
        var o = this.accumulator;
        s = o(this.acc, r, n);
      } catch (a) {
        return i.error(a);
      }
      this.active++, this._innerSub(s);
    } else
      this.buffer.push(r);
  }, e.prototype._innerSub = function(r) {
    var n = new Xe(this), i = this.destination;
    i.add(n);
    var s = tt(r, n);
    s !== n && i.add(s);
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete()), this.unsubscribe();
  }, e.prototype.notifyNext = function(r) {
    var n = this.destination;
    this.acc = r, this.hasValue = !0, n.next(r);
  }, e.prototype.notifyComplete = function() {
    var r = this.buffer;
    this.active--, r.length > 0 ? this._next(r.shift()) : this.active === 0 && this.hasCompleted && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete());
  }, e;
}(et);
function pC(t) {
  var e = typeof t == "function" ? function(r, n) {
    return t(r, n) < 0 ? r : n;
  } : function(r, n) {
    return r < n ? r : n;
  };
  return fa(e);
}
function gn(t, e) {
  return function(n) {
    var i;
    if (typeof t == "function" ? i = t : i = function() {
      return t;
    }, typeof e == "function")
      return n.lift(new gC(i, e));
    var s = Object.create(n, q3);
    return s.source = n, s.subjectFactory = i, s;
  };
}
var gC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.subjectFactory = e, this.selector = r;
  }
  return t.prototype.call = function(e, r) {
    var n = this.selector, i = this.subjectFactory(), s = n(i).subscribe(e);
    return s.add(r.subscribe(i)), s;
  }, t;
}();
function bC() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.length === 1 && wt(t[0]) && (t = t[0]), function(r) {
    return r.lift(new vC(t));
  };
}
var vC = /* @__PURE__ */ function() {
  function t(e) {
    this.nextSources = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new yC(e, this.nextSources));
  }, t;
}(), yC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.destination = r, i.nextSources = n, i;
  }
  return e.prototype.notifyError = function() {
    this.subscribeToNextSource();
  }, e.prototype.notifyComplete = function() {
    this.subscribeToNextSource();
  }, e.prototype._error = function(r) {
    this.subscribeToNextSource(), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.subscribeToNextSource(), this.unsubscribe();
  }, e.prototype.subscribeToNextSource = function() {
    var r = this.nextSources.shift();
    if (r) {
      var n = new Xe(this), i = this.destination;
      i.add(n);
      var s = tt(r, n);
      s !== n && i.add(s);
    } else
      this.destination.complete();
  }, e;
}(et);
function mC() {
  return function(t) {
    return t.lift(new _C());
  };
}
var _C = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new wC(e));
  }, t;
}(), wC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.hasPrev = !1, n;
  }
  return e.prototype._next = function(r) {
    var n;
    this.hasPrev ? n = [this.prev, r] : this.hasPrev = !0, this.prev = r, n && this.destination.next(n);
  }, e;
}(Y);
function SC(t, e) {
  return function(r) {
    return [
      Lr(t, e)(r),
      Lr(P0(t, e))(r)
    ];
  };
}
function EC() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = t.length;
  if (r === 0)
    throw new Error("list of properties cannot be empty.");
  return function(n) {
    return Ft(xC(t, r))(n);
  };
}
function xC(t, e) {
  var r = function(n) {
    for (var i = n, s = 0; s < e; s++) {
      var o = i != null ? i[t[s]] : void 0;
      if (o !== void 0)
        i = o;
      else
        return;
    }
    return i;
  };
  return r;
}
function MC(t) {
  return t ? gn(function() {
    return new ft();
  }, t) : gn(new ft());
}
function CC(t) {
  return function(e) {
    return gn(new p0(t))(e);
  };
}
function RC() {
  return function(t) {
    return gn(new Ii())(t);
  };
}
function IC(t, e, r, n) {
  r && typeof r != "function" && (n = r);
  var i = typeof r == "function" ? r : void 0, s = new Fc(t, e, n);
  return function(o) {
    return gn(function() {
      return s;
    }, i)(o);
  };
}
function AC() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    return t.length === 1 && wt(t[0]) && (t = t[0]), n.lift.call($0.apply(void 0, [n].concat(t)));
  };
}
function kC(t) {
  return t === void 0 && (t = -1), function(e) {
    return t === 0 ? Ri() : t < 0 ? e.lift(new kh(-1, e)) : e.lift(new kh(t - 1, e));
  };
}
var kh = /* @__PURE__ */ function() {
  function t(e, r) {
    this.count = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new TC(e, this.count, this.source));
  }, t;
}(), TC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.count = n, s.source = i, s;
  }
  return e.prototype.complete = function() {
    if (!this.isStopped) {
      var r = this, n = r.source, i = r.count;
      if (i === 0)
        return t.prototype.complete.call(this);
      i > -1 && (this.count = i - 1), n.subscribe(this._unsubscribeAndRecycle());
    }
  }, e;
}(Y);
function OC(t) {
  return function(e) {
    return e.lift(new NC(t));
  };
}
var NC = /* @__PURE__ */ function() {
  function t(e) {
    this.notifier = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new LC(e, this.notifier, r));
  }, t;
}(), LC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.notifier = n, s.source = i, s.sourceIsBeingSubscribedTo = !0, s;
  }
  return e.prototype.notifyNext = function() {
    this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this);
  }, e.prototype.notifyComplete = function() {
    if (this.sourceIsBeingSubscribedTo === !1)
      return t.prototype.complete.call(this);
  }, e.prototype.complete = function() {
    if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
      if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed)
        return t.prototype.complete.call(this);
      this._unsubscribeAndRecycle(), this.notifications.next(void 0);
    }
  }, e.prototype._unsubscribe = function() {
    var r = this, n = r.notifications, i = r.retriesSubscription;
    n && (n.unsubscribe(), this.notifications = void 0), i && (i.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0;
  }, e.prototype._unsubscribeAndRecycle = function() {
    var r = this._unsubscribe;
    return this._unsubscribe = null, t.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = r, this;
  }, e.prototype.subscribeToRetries = function() {
    this.notifications = new ft();
    var r;
    try {
      var n = this.notifier;
      r = n(this.notifications);
    } catch {
      return t.prototype.complete.call(this);
    }
    this.retries = r, this.retriesSubscription = tt(r, new Xe(this));
  }, e;
}(et);
function PC(t) {
  return t === void 0 && (t = -1), function(e) {
    return e.lift(new $C(t, e));
  };
}
var $C = /* @__PURE__ */ function() {
  function t(e, r) {
    this.count = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new DC(e, this.count, this.source));
  }, t;
}(), DC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.count = n, s.source = i, s;
  }
  return e.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = this, i = n.source, s = n.count;
      if (s === 0)
        return t.prototype.error.call(this, r);
      s > -1 && (this.count = s - 1), i.subscribe(this._unsubscribeAndRecycle());
    }
  }, e;
}(Y);
function BC(t) {
  return function(e) {
    return e.lift(new jC(t, e));
  };
}
var jC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.notifier = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new FC(e, this.notifier, this.source));
  }, t;
}(), FC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.notifier = n, s.source = i, s;
  }
  return e.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = this.errors, i = this.retries, s = this.retriesSubscription;
      if (i)
        this.errors = void 0, this.retriesSubscription = void 0;
      else {
        n = new ft();
        try {
          var o = this.notifier;
          i = o(n);
        } catch (a) {
          return t.prototype.error.call(this, a);
        }
        s = tt(i, new Xe(this));
      }
      this._unsubscribeAndRecycle(), this.errors = n, this.retries = i, this.retriesSubscription = s, n.next(r);
    }
  }, e.prototype._unsubscribe = function() {
    var r = this, n = r.errors, i = r.retriesSubscription;
    n && (n.unsubscribe(), this.errors = void 0), i && (i.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0;
  }, e.prototype.notifyNext = function() {
    var r = this._unsubscribe;
    this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = r, this.source.subscribe(this);
  }, e;
}(et);
function WC(t) {
  return function(e) {
    return e.lift(new HC(t));
  };
}
var HC = /* @__PURE__ */ function() {
  function t(e) {
    this.notifier = e;
  }
  return t.prototype.call = function(e, r) {
    var n = new VC(e), i = r.subscribe(n);
    return i.add(tt(this.notifier, new Xe(n))), i;
  }, t;
}(), VC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.hasValue = !1, r;
  }
  return e.prototype._next = function(r) {
    this.value = r, this.hasValue = !0;
  }, e.prototype.notifyNext = function() {
    this.emitValue();
  }, e.prototype.notifyComplete = function() {
    this.emitValue();
  }, e.prototype.emitValue = function() {
    this.hasValue && (this.hasValue = !1, this.destination.next(this.value));
  }, e;
}(et);
function UC(t, e) {
  return e === void 0 && (e = St), function(r) {
    return r.lift(new zC(t, e));
  };
}
var zC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.period = e, this.scheduler = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new qC(e, this.period, this.scheduler));
  }, t;
}(), qC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.period = n, s.scheduler = i, s.hasValue = !1, s.add(i.schedule(GC, n, { subscriber: s, period: n })), s;
  }
  return e.prototype._next = function(r) {
    this.lastValue = r, this.hasValue = !0;
  }, e.prototype.notifyNext = function() {
    this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue));
  }, e;
}(Y);
function GC(t) {
  var e = t.subscriber, r = t.period;
  e.notifyNext(), this.schedule(t, r);
}
function JC(t, e) {
  return function(r) {
    return r.lift(new ZC(t, e));
  };
}
var ZC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.compareTo = e, this.comparator = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new QC(e, this.compareTo, this.comparator));
  }, t;
}(), QC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.compareTo = n, s.comparator = i, s._a = [], s._b = [], s._oneComplete = !1, s.destination.add(n.subscribe(new YC(r, s))), s;
  }
  return e.prototype._next = function(r) {
    this._oneComplete && this._b.length === 0 ? this.emit(!1) : (this._a.push(r), this.checkValues());
  }, e.prototype._complete = function() {
    this._oneComplete ? this.emit(this._a.length === 0 && this._b.length === 0) : this._oneComplete = !0, this.unsubscribe();
  }, e.prototype.checkValues = function() {
    for (var r = this, n = r._a, i = r._b, s = r.comparator; n.length > 0 && i.length > 0; ) {
      var o = n.shift(), a = i.shift(), u = !1;
      try {
        u = s ? s(o, a) : o === a;
      } catch (l) {
        this.destination.error(l);
      }
      u || this.emit(!1);
    }
  }, e.prototype.emit = function(r) {
    var n = this.destination;
    n.next(r), n.complete();
  }, e.prototype.nextB = function(r) {
    this._oneComplete && this._a.length === 0 ? this.emit(!1) : (this._b.push(r), this.checkValues());
  }, e.prototype.completeB = function() {
    this._oneComplete ? this.emit(this._a.length === 0 && this._b.length === 0) : this._oneComplete = !0;
  }, e;
}(Y), YC = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.parent = n, i;
  }
  return e.prototype._next = function(r) {
    this.parent.nextB(r);
  }, e.prototype._error = function(r) {
    this.parent.error(r), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.parent.completeB(), this.unsubscribe();
  }, e;
}(Y);
function KC() {
  return new ft();
}
function XC() {
  return function(t) {
    return Dc()(gn(KC)(t));
  };
}
function e6(t, e, r) {
  var n;
  return t && typeof t == "object" ? n = t : n = {
    bufferSize: t,
    windowTime: e,
    refCount: !1,
    scheduler: r
  }, function(i) {
    return i.lift(t6(n));
  };
}
function t6(t) {
  var e = t.bufferSize, r = e === void 0 ? Number.POSITIVE_INFINITY : e, n = t.windowTime, i = n === void 0 ? Number.POSITIVE_INFINITY : n, s = t.refCount, o = t.scheduler, a, u = 0, l, h = !1, p = !1;
  return function(S) {
    u++;
    var R;
    !a || h ? (h = !1, a = new Fc(r, i, o), R = a.subscribe(this), l = S.subscribe({
      next: function(L) {
        a.next(L);
      },
      error: function(L) {
        h = !0, a.error(L);
      },
      complete: function() {
        p = !0, l = void 0, a.complete();
      }
    }), p && (l = void 0)) : R = a.subscribe(this), this.add(function() {
      u--, R.unsubscribe(), R = void 0, l && !p && s && u === 0 && (l.unsubscribe(), l = void 0, a = void 0);
    });
  };
}
function r6(t) {
  return function(e) {
    return e.lift(new n6(t, e));
  };
}
var n6 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.predicate = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new i6(e, this.predicate, this.source));
  }, t;
}(), i6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.predicate = n, s.source = i, s.seenValue = !1, s.index = 0, s;
  }
  return e.prototype.applySingleValue = function(r) {
    this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = r);
  }, e.prototype._next = function(r) {
    var n = this.index++;
    this.predicate ? this.tryNext(r, n) : this.applySingleValue(r);
  }, e.prototype.tryNext = function(r, n) {
    try {
      this.predicate(r, n, this.source) && this.applySingleValue(r);
    } catch (i) {
      this.destination.error(i);
    }
  }, e.prototype._complete = function() {
    var r = this.destination;
    this.index > 0 ? (r.next(this.seenValue ? this.singleValue : void 0), r.complete()) : r.error(new Es());
  }, e;
}(Y);
function s6(t) {
  return function(e) {
    return e.lift(new o6(t));
  };
}
var o6 = /* @__PURE__ */ function() {
  function t(e) {
    this.total = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new a6(e, this.total));
  }, t;
}(), a6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.total = n, i.count = 0, i;
  }
  return e.prototype._next = function(r) {
    ++this.count > this.total && this.destination.next(r);
  }, e;
}(Y);
function u6(t) {
  return function(e) {
    return e.lift(new c6(t));
  };
}
var c6 = /* @__PURE__ */ function() {
  function t(e) {
    if (this._skipCount = e, this._skipCount < 0)
      throw new hi();
  }
  return t.prototype.call = function(e, r) {
    return this._skipCount === 0 ? r.subscribe(new Y(e)) : r.subscribe(new l6(e, this._skipCount));
  }, t;
}(), l6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i._skipCount = n, i._count = 0, i._ring = new Array(n), i;
  }
  return e.prototype._next = function(r) {
    var n = this._skipCount, i = this._count++;
    if (i < n)
      this._ring[i] = r;
    else {
      var s = i % n, o = this._ring, a = o[s];
      o[s] = r, this.destination.next(a);
    }
  }, e;
}(Y);
function f6(t) {
  return function(e) {
    return e.lift(new h6(t));
  };
}
var h6 = /* @__PURE__ */ function() {
  function t(e) {
    this.notifier = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new d6(e, this.notifier));
  }, t;
}(), d6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    i.hasValue = !1;
    var s = new Xe(i);
    i.add(s), i.innerSubscription = s;
    var o = tt(n, s);
    return o !== s && (i.add(o), i.innerSubscription = o), i;
  }
  return e.prototype._next = function(r) {
    this.hasValue && t.prototype._next.call(this, r);
  }, e.prototype.notifyNext = function() {
    this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe();
  }, e.prototype.notifyComplete = function() {
  }, e;
}(et);
function p6(t) {
  return function(e) {
    return e.lift(new g6(t));
  };
}
var g6 = /* @__PURE__ */ function() {
  function t(e) {
    this.predicate = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new b6(e, this.predicate));
  }, t;
}(), b6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.predicate = n, i.skipping = !0, i.index = 0, i;
  }
  return e.prototype._next = function(r) {
    var n = this.destination;
    this.skipping && this.tryCallPredicate(r), this.skipping || n.next(r);
  }, e.prototype.tryCallPredicate = function(r) {
    try {
      var n = this.predicate(r, this.index++);
      this.skipping = !!n;
    } catch (i) {
      this.destination.error(i);
    }
  }, e;
}(Y);
function v6() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = t[t.length - 1];
  return At(r) ? (t.pop(), function(n) {
    return Ki(t, n, r);
  }) : function(n) {
    return Ki(t, n);
  };
}
var y6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    n === void 0 && (n = 0), i === void 0 && (i = qs);
    var s = t.call(this) || this;
    return s.source = r, s.delayTime = n, s.scheduler = i, (!di(n) || n < 0) && (s.delayTime = 0), (!i || typeof i.schedule != "function") && (s.scheduler = qs), s;
  }
  return e.create = function(r, n, i) {
    return n === void 0 && (n = 0), i === void 0 && (i = qs), new e(r, n, i);
  }, e.dispatch = function(r) {
    var n = r.source, i = r.subscriber;
    return this.add(n.subscribe(i));
  }, e.prototype._subscribe = function(r) {
    var n = this.delayTime, i = this.source, s = this.scheduler;
    return s.schedule(e.dispatch, n, {
      source: i,
      subscriber: r
    });
  }, e;
}(ue);
function m6(t, e) {
  return e === void 0 && (e = 0), function(n) {
    return n.lift(new _6(t, e));
  };
}
var _6 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.scheduler = e, this.delay = r;
  }
  return t.prototype.call = function(e, r) {
    return new y6(r, this.delay, this.scheduler).subscribe(e);
  }, t;
}();
function Xi(t, e) {
  return typeof e == "function" ? function(r) {
    return r.pipe(Xi(function(n, i) {
      return _r(t(n, i)).pipe(Ft(function(s, o) {
        return e(n, s, i, o);
      }));
    }));
  } : function(r) {
    return r.lift(new w6(t));
  };
}
var w6 = /* @__PURE__ */ function() {
  function t(e) {
    this.project = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new S6(e, this.project));
  }, t;
}(), S6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.project = n, i.index = 0, i;
  }
  return e.prototype._next = function(r) {
    var n, i = this.index++;
    try {
      n = this.project(r, i);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this._innerSub(n);
  }, e.prototype._innerSub = function(r) {
    var n = this.innerSubscription;
    n && n.unsubscribe();
    var i = new Xe(this), s = this.destination;
    s.add(i), this.innerSubscription = tt(r, i), this.innerSubscription !== i && s.add(this.innerSubscription);
  }, e.prototype._complete = function() {
    var r = this.innerSubscription;
    (!r || r.closed) && t.prototype._complete.call(this), this.unsubscribe();
  }, e.prototype._unsubscribe = function() {
    this.innerSubscription = void 0;
  }, e.prototype.notifyComplete = function() {
    this.innerSubscription = void 0, this.isStopped && t.prototype._complete.call(this);
  }, e.prototype.notifyNext = function(r) {
    this.destination.next(r);
  }, e;
}(et);
function E6() {
  return Xi(Or);
}
function x6(t, e) {
  return e ? Xi(function() {
    return t;
  }, e) : Xi(function() {
    return t;
  });
}
function M6(t) {
  return function(e) {
    return e.lift(new C6(t));
  };
}
var C6 = /* @__PURE__ */ function() {
  function t(e) {
    this.notifier = e;
  }
  return t.prototype.call = function(e, r) {
    var n = new R6(e), i = tt(this.notifier, new Xe(n));
    return i && !n.seenValue ? (n.add(i), r.subscribe(n)) : n;
  }, t;
}(), R6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.seenValue = !1, n;
  }
  return e.prototype.notifyNext = function() {
    this.seenValue = !0, this.complete();
  }, e.prototype.notifyComplete = function() {
  }, e;
}(et);
function I6(t, e) {
  return e === void 0 && (e = !1), function(r) {
    return r.lift(new A6(t, e));
  };
}
var A6 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.predicate = e, this.inclusive = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new k6(e, this.predicate, this.inclusive));
  }, t;
}(), k6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.predicate = n, s.inclusive = i, s.index = 0, s;
  }
  return e.prototype._next = function(r) {
    var n = this.destination, i;
    try {
      i = this.predicate(r, this.index++);
    } catch (s) {
      n.error(s);
      return;
    }
    this.nextOrComplete(r, i);
  }, e.prototype.nextOrComplete = function(r, n) {
    var i = this.destination;
    n ? i.next(r) : (this.inclusive && i.next(r), i.complete());
  }, e;
}(Y);
function T6(t, e, r) {
  return function(i) {
    return i.lift(new O6(t, e, r));
  };
}
var O6 = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.nextOrObserver = e, this.error = r, this.complete = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new N6(e, this.nextOrObserver, this.error, this.complete));
  }, t;
}(), N6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o._tapNext = rr, o._tapError = rr, o._tapComplete = rr, o._tapError = i || rr, o._tapComplete = s || rr, li(n) ? (o._context = o, o._tapNext = n) : n && (o._context = n, o._tapNext = n.next || rr, o._tapError = n.error || rr, o._tapComplete = n.complete || rr), o;
  }
  return e.prototype._next = function(r) {
    try {
      this._tapNext.call(this._context, r);
    } catch (n) {
      this.destination.error(n);
      return;
    }
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    try {
      this._tapError.call(this._context, r);
    } catch (n) {
      this.destination.error(n);
      return;
    }
    this.destination.error(r);
  }, e.prototype._complete = function() {
    try {
      this._tapComplete.call(this._context);
    } catch (r) {
      this.destination.error(r);
      return;
    }
    return this.destination.complete();
  }, e;
}(Y), lg = {
  leading: !0,
  trailing: !1
};
function L6(t, e) {
  return e === void 0 && (e = lg), function(r) {
    return r.lift(new P6(t, !!e.leading, !!e.trailing));
  };
}
var P6 = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.durationSelector = e, this.leading = r, this.trailing = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new $6(e, this.durationSelector, this.leading, this.trailing));
  }, t;
}(), $6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.destination = r, o.durationSelector = n, o._leading = i, o._trailing = s, o._hasValue = !1, o;
  }
  return e.prototype._next = function(r) {
    this._hasValue = !0, this._sendValue = r, this._throttled || (this._leading ? this.send() : this.throttle(r));
  }, e.prototype.send = function() {
    var r = this, n = r._hasValue, i = r._sendValue;
    n && (this.destination.next(i), this.throttle(i)), this._hasValue = !1, this._sendValue = void 0;
  }, e.prototype.throttle = function(r) {
    var n = this.tryDurationSelector(r);
    n && this.add(this._throttled = tt(n, new Xe(this)));
  }, e.prototype.tryDurationSelector = function(r) {
    try {
      return this.durationSelector(r);
    } catch (n) {
      return this.destination.error(n), null;
    }
  }, e.prototype.throttlingDone = function() {
    var r = this, n = r._throttled, i = r._trailing;
    n && n.unsubscribe(), this._throttled = void 0, i && this.send();
  }, e.prototype.notifyNext = function() {
    this.throttlingDone();
  }, e.prototype.notifyComplete = function() {
    this.throttlingDone();
  }, e;
}(et);
function D6(t, e, r) {
  return e === void 0 && (e = St), r === void 0 && (r = lg), function(n) {
    return n.lift(new B6(t, e, r.leading, r.trailing));
  };
}
var B6 = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.duration = e, this.scheduler = r, this.leading = n, this.trailing = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new j6(e, this.duration, this.scheduler, this.leading, this.trailing));
  }, t;
}(), j6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    return a.duration = n, a.scheduler = i, a.leading = s, a.trailing = o, a._hasTrailingValue = !1, a._trailingValue = null, a;
  }
  return e.prototype._next = function(r) {
    this.throttled ? this.trailing && (this._trailingValue = r, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(F6, this.duration, { subscriber: this })), this.leading ? this.destination.next(r) : this.trailing && (this._trailingValue = r, this._hasTrailingValue = !0));
  }, e.prototype._complete = function() {
    this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete();
  }, e.prototype.clearThrottle = function() {
    var r = this.throttled;
    r && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), r.unsubscribe(), this.remove(r), this.throttled = null);
  }, e;
}(Y);
function F6(t) {
  var e = t.subscriber;
  e.clearThrottle();
}
function W6(t) {
  return t === void 0 && (t = St), function(e) {
    return Vc(function() {
      return e.pipe(co(function(r, n) {
        var i = r.current;
        return { value: n, current: t.now(), last: i };
      }, { current: t.now(), value: void 0, last: void 0 }), Ft(function(r) {
        var n = r.current, i = r.last, s = r.value;
        return new H6(s, n - i);
      }));
    });
  };
}
var H6 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.value = e, this.interval = r;
  }
  return t;
}();
function fg(t, e, r) {
  return r === void 0 && (r = St), function(n) {
    var i = og(t), s = i ? +t - r.now() : Math.abs(t);
    return n.lift(new V6(s, i, e, r));
  };
}
var V6 = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.waitFor = e, this.absoluteTimeout = r, this.withObservable = n, this.scheduler = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new U6(e, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  }, t;
}(), U6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    return a.absoluteTimeout = n, a.waitFor = i, a.withObservable = s, a.scheduler = o, a.scheduleTimeout(), a;
  }
  return e.dispatchTimeout = function(r) {
    var n = r.withObservable;
    r._unsubscribeAndRecycle(), r.add(tt(n, new Xe(r)));
  }, e.prototype.scheduleTimeout = function() {
    var r = this.action;
    r ? this.action = r.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(e.dispatchTimeout, this.waitFor, this));
  }, e.prototype._next = function(r) {
    this.absoluteTimeout || this.scheduleTimeout(), t.prototype._next.call(this, r);
  }, e.prototype._unsubscribe = function() {
    this.action = void 0, this.scheduler = null, this.withObservable = null;
  }, e;
}(et);
function z6(t, e) {
  return e === void 0 && (e = St), fg(t, jc(new E0()), e);
}
function q6(t) {
  return t === void 0 && (t = St), Ft(function(e) {
    return new G6(e, t.now());
  });
}
var G6 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.value = e, this.timestamp = r;
  }
  return t;
}();
function J6(t, e, r) {
  return r === 0 ? [e] : (t.push(e), t);
}
function Z6() {
  return fa(J6, []);
}
function Q6(t) {
  return function(r) {
    return r.lift(new Y6(t));
  };
}
var Y6 = /* @__PURE__ */ function() {
  function t(e) {
    this.windowBoundaries = e;
  }
  return t.prototype.call = function(e, r) {
    var n = new K6(e), i = r.subscribe(n);
    return i.closed || n.add(tt(this.windowBoundaries, new Xe(n))), i;
  }, t;
}(), K6 = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.window = new ft(), r.next(n.window), n;
  }
  return e.prototype.notifyNext = function() {
    this.openWindow();
  }, e.prototype.notifyError = function(r) {
    this._error(r);
  }, e.prototype.notifyComplete = function() {
    this._complete();
  }, e.prototype._next = function(r) {
    this.window.next(r);
  }, e.prototype._error = function(r) {
    this.window.error(r), this.destination.error(r);
  }, e.prototype._complete = function() {
    this.window.complete(), this.destination.complete();
  }, e.prototype._unsubscribe = function() {
    this.window = null;
  }, e.prototype.openWindow = function() {
    var r = this.window;
    r && r.complete();
    var n = this.destination, i = this.window = new ft();
    n.next(i);
  }, e;
}(et);
function X6(t, e) {
  return e === void 0 && (e = 0), function(n) {
    return n.lift(new eR(t, e));
  };
}
var eR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.windowSize = e, this.startWindowEvery = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new tR(e, this.windowSize, this.startWindowEvery));
  }, t;
}(), tR = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.destination = r, s.windowSize = n, s.startWindowEvery = i, s.windows = [new ft()], s.count = 0, r.next(s.windows[0]), s;
  }
  return e.prototype._next = function(r) {
    for (var n = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, i = this.destination, s = this.windowSize, o = this.windows, a = o.length, u = 0; u < a && !this.closed; u++)
      o[u].next(r);
    var l = this.count - s + 1;
    if (l >= 0 && l % n === 0 && !this.closed && o.shift().complete(), ++this.count % n === 0 && !this.closed) {
      var h = new ft();
      o.push(h), i.next(h);
    }
  }, e.prototype._error = function(r) {
    var n = this.windows;
    if (n)
      for (; n.length > 0 && !this.closed; )
        n.shift().error(r);
    this.destination.error(r);
  }, e.prototype._complete = function() {
    var r = this.windows;
    if (r)
      for (; r.length > 0 && !this.closed; )
        r.shift().complete();
    this.destination.complete();
  }, e.prototype._unsubscribe = function() {
    this.count = 0, this.windows = null;
  }, e;
}(Y);
function rR(t) {
  var e = St, r = null, n = Number.POSITIVE_INFINITY;
  return At(arguments[3]) && (e = arguments[3]), At(arguments[2]) ? e = arguments[2] : di(arguments[2]) && (n = Number(arguments[2])), At(arguments[1]) ? e = arguments[1] : di(arguments[1]) && (r = Number(arguments[1])), function(s) {
    return s.lift(new nR(t, r, n, e));
  };
}
var nR = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.windowTimeSpan = e, this.windowCreationInterval = r, this.maxWindowSize = n, this.scheduler = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new sR(e, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
  }, t;
}(), iR = /* @__PURE__ */ function(t) {
  j(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r._numberOfNextedValues = 0, r;
  }
  return e.prototype.next = function(r) {
    this._numberOfNextedValues++, t.prototype.next.call(this, r);
  }, Object.defineProperty(e.prototype, "numberOfNextedValues", {
    get: function() {
      return this._numberOfNextedValues;
    },
    enumerable: !0,
    configurable: !0
  }), e;
}(ft), sR = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    a.destination = r, a.windowTimeSpan = n, a.windowCreationInterval = i, a.maxWindowSize = s, a.scheduler = o, a.windows = [];
    var u = a.openWindow();
    if (i !== null && i >= 0) {
      var l = { subscriber: a, window: u, context: null }, h = { windowTimeSpan: n, windowCreationInterval: i, subscriber: a, scheduler: o };
      a.add(o.schedule(hg, n, l)), a.add(o.schedule(aR, i, h));
    } else {
      var p = { subscriber: a, window: u, windowTimeSpan: n };
      a.add(o.schedule(oR, n, p));
    }
    return a;
  }
  return e.prototype._next = function(r) {
    for (var n = this.windows, i = n.length, s = 0; s < i; s++) {
      var o = n[s];
      o.closed || (o.next(r), o.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(o));
    }
  }, e.prototype._error = function(r) {
    for (var n = this.windows; n.length > 0; )
      n.shift().error(r);
    this.destination.error(r);
  }, e.prototype._complete = function() {
    for (var r = this.windows; r.length > 0; ) {
      var n = r.shift();
      n.closed || n.complete();
    }
    this.destination.complete();
  }, e.prototype.openWindow = function() {
    var r = new iR();
    this.windows.push(r);
    var n = this.destination;
    return n.next(r), r;
  }, e.prototype.closeWindow = function(r) {
    r.complete();
    var n = this.windows;
    n.splice(n.indexOf(r), 1);
  }, e;
}(Y);
function oR(t) {
  var e = t.subscriber, r = t.windowTimeSpan, n = t.window;
  n && e.closeWindow(n), t.window = e.openWindow(), this.schedule(t, r);
}
function aR(t) {
  var e = t.windowTimeSpan, r = t.subscriber, n = t.scheduler, i = t.windowCreationInterval, s = r.openWindow(), o = this, a = { action: o, subscription: null }, u = { subscriber: r, window: s, context: a };
  a.subscription = n.schedule(hg, e, u), o.add(a.subscription), o.schedule(t, i);
}
function hg(t) {
  var e = t.subscriber, r = t.window, n = t.context;
  n && n.action && n.subscription && n.action.remove(n.subscription), e.closeWindow(r);
}
function uR(t, e) {
  return function(r) {
    return r.lift(new cR(t, e));
  };
}
var cR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.openings = e, this.closingSelector = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new lR(e, this.openings, this.closingSelector));
  }, t;
}(), lR = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.openings = n, s.closingSelector = i, s.contexts = [], s.add(s.openSubscription = yr(s, n, n)), s;
  }
  return e.prototype._next = function(r) {
    var n = this.contexts;
    if (n)
      for (var i = n.length, s = 0; s < i; s++)
        n[s].window.next(r);
  }, e.prototype._error = function(r) {
    var n = this.contexts;
    if (this.contexts = null, n)
      for (var i = n.length, s = -1; ++s < i; ) {
        var o = n[s];
        o.window.error(r), o.subscription.unsubscribe();
      }
    t.prototype._error.call(this, r);
  }, e.prototype._complete = function() {
    var r = this.contexts;
    if (this.contexts = null, r)
      for (var n = r.length, i = -1; ++i < n; ) {
        var s = r[i];
        s.window.complete(), s.subscription.unsubscribe();
      }
    t.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    var r = this.contexts;
    if (this.contexts = null, r)
      for (var n = r.length, i = -1; ++i < n; ) {
        var s = r[i];
        s.window.unsubscribe(), s.subscription.unsubscribe();
      }
  }, e.prototype.notifyNext = function(r, n, i, s, o) {
    if (r === this.openings) {
      var a = void 0;
      try {
        var u = this.closingSelector;
        a = u(n);
      } catch (S) {
        return this.error(S);
      }
      var l = new ft(), h = new Ke(), p = { window: l, subscription: h };
      this.contexts.push(p);
      var b = yr(this, a, p);
      b.closed ? this.closeWindow(this.contexts.length - 1) : (b.context = p, h.add(b)), this.destination.next(l);
    } else
      this.closeWindow(this.contexts.indexOf(r));
  }, e.prototype.notifyError = function(r) {
    this.error(r);
  }, e.prototype.notifyComplete = function(r) {
    r !== this.openSubscription && this.closeWindow(this.contexts.indexOf(r.context));
  }, e.prototype.closeWindow = function(r) {
    if (r !== -1) {
      var n = this.contexts, i = n[r], s = i.window, o = i.subscription;
      n.splice(r, 1), s.complete(), o.unsubscribe();
    }
  }, e;
}(xn);
function fR(t) {
  return function(r) {
    return r.lift(new hR(t));
  };
}
var hR = /* @__PURE__ */ function() {
  function t(e) {
    this.closingSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new dR(e, this.closingSelector));
  }, t;
}(), dR = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.destination = r, i.closingSelector = n, i.openWindow(), i;
  }
  return e.prototype.notifyNext = function(r, n, i, s, o) {
    this.openWindow(o);
  }, e.prototype.notifyError = function(r) {
    this._error(r);
  }, e.prototype.notifyComplete = function(r) {
    this.openWindow(r);
  }, e.prototype._next = function(r) {
    this.window.next(r);
  }, e.prototype._error = function(r) {
    this.window.error(r), this.destination.error(r), this.unsubscribeClosingNotification();
  }, e.prototype._complete = function() {
    this.window.complete(), this.destination.complete(), this.unsubscribeClosingNotification();
  }, e.prototype.unsubscribeClosingNotification = function() {
    this.closingNotification && this.closingNotification.unsubscribe();
  }, e.prototype.openWindow = function(r) {
    r === void 0 && (r = null), r && (this.remove(r), r.unsubscribe());
    var n = this.window;
    n && n.complete();
    var i = this.window = new ft();
    this.destination.next(i);
    var s;
    try {
      var o = this.closingSelector;
      s = o();
    } catch (a) {
      this.destination.error(a), this.window.error(a);
      return;
    }
    this.add(this.closingNotification = yr(this, s));
  }, e;
}(xn);
function pR() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    var n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    var i = t;
    return r.lift(new gR(i, n));
  };
}
var gR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.observables = e, this.project = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new bR(e, this.observables, this.project));
  }, t;
}(), bR = /* @__PURE__ */ function(t) {
  j(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    s.observables = n, s.project = i, s.toRespond = [];
    var o = n.length;
    s.values = new Array(o);
    for (var a = 0; a < o; a++)
      s.toRespond.push(a);
    for (var a = 0; a < o; a++) {
      var u = n[a];
      s.add(yr(s, u, void 0, a));
    }
    return s;
  }
  return e.prototype.notifyNext = function(r, n, i) {
    this.values[i] = n;
    var s = this.toRespond;
    if (s.length > 0) {
      var o = s.indexOf(i);
      o !== -1 && s.splice(o, 1);
    }
  }, e.prototype.notifyComplete = function() {
  }, e.prototype._next = function(r) {
    if (this.toRespond.length === 0) {
      var n = [r].concat(this.values);
      this.project ? this._tryProject(n) : this.destination.next(n);
    }
  }, e.prototype._tryProject = function(r) {
    var n;
    try {
      n = this.project.apply(this, r);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(n);
  }, e;
}(xn);
function vR() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    return n.lift.call(B0.apply(void 0, [n].concat(t)));
  };
}
function yR(t) {
  return function(e) {
    return e.lift(new j0(t));
  };
}
const mR = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  audit: ng,
  auditTime: mx,
  buffer: _x,
  bufferCount: Ex,
  bufferTime: Rx,
  bufferToggle: Ox,
  bufferWhen: Px,
  catchError: Bx,
  combineAll: Wx,
  combineLatest: Hx,
  concat: Vx,
  concatAll: A0,
  concatMap: sg,
  concatMapTo: Ux,
  count: zx,
  debounce: Jx,
  debounceTime: Yx,
  defaultIfEmpty: Ms,
  delay: nM,
  delayWhen: aM,
  dematerialize: fM,
  distinct: pM,
  distinctUntilChanged: ag,
  distinctUntilKeyChanged: mM,
  elementAt: MM,
  endWith: CM,
  every: RM,
  exhaust: kM,
  exhaustMap: ug,
  expand: PM,
  filter: Lr,
  finalize: BM,
  find: WM,
  findIndex: VM,
  first: UM,
  flatMap: F4,
  groupBy: J3,
  ignoreElements: zM,
  isEmpty: JM,
  last: XM,
  map: Ft,
  mapTo: eC,
  materialize: nC,
  max: uC,
  merge: cC,
  mergeAll: Hc,
  mergeMap: pn,
  mergeMapTo: lC,
  mergeScan: fC,
  min: pC,
  multicast: gn,
  observeOn: i4,
  onErrorResumeNext: bC,
  pairwise: mC,
  partition: SC,
  pluck: EC,
  publish: MC,
  publishBehavior: CC,
  publishLast: RC,
  publishReplay: IC,
  race: AC,
  reduce: fa,
  refCount: Dc,
  repeat: kC,
  repeatWhen: OC,
  retry: PC,
  retryWhen: BC,
  sample: WC,
  sampleTime: UC,
  scan: co,
  sequenceEqual: JC,
  share: XC,
  shareReplay: e6,
  single: r6,
  skip: s6,
  skipLast: u6,
  skipUntil: f6,
  skipWhile: p6,
  startWith: v6,
  subscribeOn: m6,
  switchAll: E6,
  switchMap: Xi,
  switchMapTo: x6,
  take: rl,
  takeLast: uo,
  takeUntil: M6,
  takeWhile: I6,
  tap: T6,
  throttle: L6,
  throttleTime: D6,
  throwIfEmpty: la,
  timeInterval: W6,
  timeout: z6,
  timeoutWith: fg,
  timestamp: q6,
  toArray: Z6,
  window: Q6,
  windowCount: X6,
  windowTime: rR,
  windowToggle: uR,
  windowWhen: fR,
  withLatestFrom: pR,
  zip: vR,
  zipAll: yR
}, Symbol.toStringTag, { value: "Module" })), nl = /* @__PURE__ */ bn(mR);
var ha = {}, Pt = {};
Object.defineProperty(Pt, "__esModule", { value: !0 });
Pt.ClientMessagePublishEvent = Pt.ClientMessageSetSessionConfig = Pt.ClientMessageGetSessionConfig = Pt.ClientMessageIsLinked = Pt.ClientMessageHostSession = void 0;
function _R(t) {
  return Object.assign({ type: "HostSession" }, t);
}
Pt.ClientMessageHostSession = _R;
function wR(t) {
  return Object.assign({ type: "IsLinked" }, t);
}
Pt.ClientMessageIsLinked = wR;
function SR(t) {
  return Object.assign({ type: "GetSessionConfig" }, t);
}
Pt.ClientMessageGetSessionConfig = SR;
function ER(t) {
  return Object.assign({ type: "SetSessionConfig" }, t);
}
Pt.ClientMessageSetSessionConfig = ER;
function xR(t) {
  return Object.assign({ type: "PublishEvent" }, t);
}
Pt.ClientMessagePublishEvent = xR;
var dg = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.RxWebSocket = t.ConnectionState = void 0;
  const e = Zo, r = nl;
  var n;
  (function(s) {
    s[s.DISCONNECTED = 0] = "DISCONNECTED", s[s.CONNECTING = 1] = "CONNECTING", s[s.CONNECTED = 2] = "CONNECTED";
  })(n = t.ConnectionState || (t.ConnectionState = {}));
  class i {
    /**
     * Constructor
     * @param url WebSocket server URL
     * @param [WebSocketClass] Custom WebSocket implementation
     */
    constructor(o, a = WebSocket) {
      this.WebSocketClass = a, this.webSocket = null, this.connectionStateSubject = new e.BehaviorSubject(n.DISCONNECTED), this.incomingDataSubject = new e.Subject(), this.url = o.replace(/^http/, "ws");
    }
    /**
     * Make a websocket connection
     * @returns an Observable that completes when connected
     */
    connect() {
      return this.webSocket ? (0, e.throwError)(new Error("webSocket object is not null")) : new e.Observable((o) => {
        let a;
        try {
          this.webSocket = a = new this.WebSocketClass(this.url);
        } catch (u) {
          o.error(u);
          return;
        }
        this.connectionStateSubject.next(n.CONNECTING), a.onclose = (u) => {
          this.clearWebSocket(), o.error(new Error(`websocket error ${u.code}: ${u.reason}`)), this.connectionStateSubject.next(n.DISCONNECTED);
        }, a.onopen = (u) => {
          o.next(), o.complete(), this.connectionStateSubject.next(n.CONNECTED);
        }, a.onmessage = (u) => {
          this.incomingDataSubject.next(u.data);
        };
      }).pipe((0, r.take)(1));
    }
    /**
     * Disconnect from server
     */
    disconnect() {
      const { webSocket: o } = this;
      if (o) {
        this.clearWebSocket(), this.connectionStateSubject.next(n.DISCONNECTED);
        try {
          o.close();
        } catch {
        }
      }
    }
    /**
     * Emit current connection state and subsequent changes
     * @returns an Observable for the connection state
     */
    get connectionState$() {
      return this.connectionStateSubject.asObservable();
    }
    /**
     * Emit incoming data from server
     * @returns an Observable for the data received
     */
    get incomingData$() {
      return this.incomingDataSubject.asObservable();
    }
    /**
     * Emit incoming JSON data from server. non-JSON data are ignored
     * @returns an Observable for parsed JSON data
     */
    get incomingJSONData$() {
      return this.incomingData$.pipe((0, r.flatMap)((o) => {
        let a;
        try {
          a = JSON.parse(o);
        } catch {
          return (0, e.empty)();
        }
        return (0, e.of)(a);
      }));
    }
    /**
     * Send data to server
     * @param data text to send
     */
    sendData(o) {
      const { webSocket: a } = this;
      if (!a)
        throw new Error("websocket is not connected");
      a.send(o);
    }
    clearWebSocket() {
      const { webSocket: o } = this;
      o && (this.webSocket = null, o.onclose = null, o.onerror = null, o.onmessage = null, o.onopen = null);
    }
  }
  t.RxWebSocket = i;
})(dg);
var da = {};
Object.defineProperty(da, "__esModule", { value: !0 });
da.isServerMessageFail = void 0;
function MR(t) {
  return t && t.type === "Fail" && typeof t.id == "number" && typeof t.sessionId == "string" && typeof t.error == "string";
}
da.isServerMessageFail = MR;
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.WalletSDKConnection = void 0;
const Ht = Zo, fe = nl, Li = mi, Hn = os, Pi = Pt, $i = vi, Fs = dg, hu = da, Th = 1e4, CR = 6e4;
class RR {
  /**
   * Constructor
   * @param sessionId Session ID
   * @param sessionKey Session Key
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(e, r, n, i, s = WebSocket) {
    this.sessionId = e, this.sessionKey = r, this.diagnostic = i, this.subscriptions = new Ht.Subscription(), this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, Hn.IntNumber)(1), this.connectedSubject = new Ht.BehaviorSubject(!1), this.linkedSubject = new Ht.BehaviorSubject(!1), this.sessionConfigSubject = new Ht.ReplaySubject(1);
    const o = new Fs.RxWebSocket(n + "/rpc", s);
    this.ws = o, this.subscriptions.add(o.connectionState$.pipe(
      (0, fe.tap)((a) => {
        var u;
        return (u = this.diagnostic) === null || u === void 0 ? void 0 : u.log($i.EVENTS.CONNECTED_STATE_CHANGE, {
          state: a,
          sessionIdHash: Li.Session.hash(e)
        });
      }),
      // ignore initial DISCONNECTED state
      (0, fe.skip)(1),
      // if DISCONNECTED and not destroyed
      (0, fe.filter)((a) => a === Fs.ConnectionState.DISCONNECTED && !this.destroyed),
      // wait 5 seconds
      (0, fe.delay)(5e3),
      // check whether it's destroyed again
      (0, fe.filter)((a) => !this.destroyed),
      // reconnect
      (0, fe.flatMap)((a) => o.connect()),
      (0, fe.retry)()
    ).subscribe()), this.subscriptions.add(o.connectionState$.pipe(
      // ignore initial DISCONNECTED and CONNECTING states
      (0, fe.skip)(2),
      (0, fe.switchMap)((a) => (0, Ht.iif)(
        () => a === Fs.ConnectionState.CONNECTED,
        // if CONNECTED, authenticate, and then check link status
        this.authenticate().pipe((0, fe.tap)((u) => this.sendIsLinked()), (0, fe.tap)((u) => this.sendGetSessionConfig()), (0, fe.map)((u) => !0)),
        // if not CONNECTED, emit false immediately
        (0, Ht.of)(!1)
      )),
      (0, fe.distinctUntilChanged)(),
      (0, fe.catchError)((a) => (0, Ht.of)(!1))
    ).subscribe((a) => this.connectedSubject.next(a))), this.subscriptions.add(o.connectionState$.pipe(
      // ignore initial DISCONNECTED state
      (0, fe.skip)(1),
      (0, fe.switchMap)((a) => (0, Ht.iif)(
        () => a === Fs.ConnectionState.CONNECTED,
        // if CONNECTED, start the heartbeat timer
        (0, Ht.timer)(0, Th)
      ))
    ).subscribe((a) => (
      // first timer event updates lastHeartbeat timestamp
      // subsequent calls send heartbeat message
      a === 0 ? this.updateLastHeartbeat() : this.heartbeat()
    ))), this.subscriptions.add(o.incomingData$.pipe((0, fe.filter)((a) => a === "h")).subscribe((a) => this.updateLastHeartbeat())), this.subscriptions.add(o.incomingJSONData$.pipe((0, fe.filter)((a) => ["IsLinkedOK", "Linked"].includes(a.type))).subscribe((a) => {
      var u;
      const l = a;
      (u = this.diagnostic) === null || u === void 0 || u.log($i.EVENTS.LINKED, {
        sessionIdHash: Li.Session.hash(e),
        linked: l.linked,
        type: a.type,
        onlineGuests: l.onlineGuests
      }), this.linkedSubject.next(l.linked || l.onlineGuests > 0);
    })), this.subscriptions.add(o.incomingJSONData$.pipe((0, fe.filter)((a) => ["GetSessionConfigOK", "SessionConfigUpdated"].includes(a.type))).subscribe((a) => {
      var u;
      const l = a;
      (u = this.diagnostic) === null || u === void 0 || u.log($i.EVENTS.SESSION_CONFIG_RECEIVED, {
        sessionIdHash: Li.Session.hash(e),
        metadata_keys: l && l.metadata ? Object.keys(l.metadata) : void 0
      }), this.sessionConfigSubject.next({
        webhookId: l.webhookId,
        webhookUrl: l.webhookUrl,
        metadata: l.metadata
      });
    }));
  }
  /**
   * Make a connection to the server
   */
  connect() {
    var e;
    if (this.destroyed)
      throw new Error("instance is destroyed");
    (e = this.diagnostic) === null || e === void 0 || e.log($i.EVENTS.STARTED_CONNECTING, {
      sessionIdHash: Li.Session.hash(this.sessionId)
    }), this.ws.connect().subscribe();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  destroy() {
    var e;
    this.subscriptions.unsubscribe(), this.ws.disconnect(), (e = this.diagnostic) === null || e === void 0 || e.log($i.EVENTS.DISCONNECTED, {
      sessionIdHash: Li.Session.hash(this.sessionId)
    }), this.destroyed = !0;
  }
  get isDestroyed() {
    return this.destroyed;
  }
  /**
   * Emit true if connected and authenticated, else false
   * @returns an Observable
   */
  get connected$() {
    return this.connectedSubject.asObservable();
  }
  /**
   * Emit once connected
   * @returns an Observable
   */
  get onceConnected$() {
    return this.connected$.pipe((0, fe.filter)((e) => e), (0, fe.take)(1), (0, fe.map)(() => {
    }));
  }
  /**
   * Emit true if linked (a guest has joined before)
   * @returns an Observable
   */
  get linked$() {
    return this.linkedSubject.asObservable();
  }
  /**
   * Emit once when linked
   * @returns an Observable
   */
  get onceLinked$() {
    return this.linked$.pipe((0, fe.filter)((e) => e), (0, fe.take)(1), (0, fe.map)(() => {
    }));
  }
  /**
   * Emit current session config if available, and subsequent updates
   * @returns an Observable for the session config
   */
  get sessionConfig$() {
    return this.sessionConfigSubject.asObservable();
  }
  /**
   * Emit incoming Event messages
   * @returns an Observable for the messages
   */
  get incomingEvent$() {
    return this.ws.incomingJSONData$.pipe((0, fe.filter)((e) => {
      if (e.type !== "Event")
        return !1;
      const r = e;
      return typeof r.sessionId == "string" && typeof r.eventId == "string" && typeof r.event == "string" && typeof r.data == "string";
    }), (0, fe.map)((e) => e));
  }
  /**
   * Set session metadata in SessionConfig object
   * @param key
   * @param value
   * @returns an Observable that completes when successful
   */
  setSessionMetadata(e, r) {
    const n = (0, Pi.ClientMessageSetSessionConfig)({
      id: (0, Hn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      metadata: { [e]: r }
    });
    return this.onceConnected$.pipe((0, fe.flatMap)((i) => this.makeRequest(n)), (0, fe.map)((i) => {
      if ((0, hu.isServerMessageFail)(i))
        throw new Error(i.error || "failed to set session metadata");
    }));
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param data event data
   * @param callWebhook whether the webhook should be invoked
   * @returns an Observable that emits event ID when successful
   */
  publishEvent(e, r, n = !1) {
    const i = (0, Pi.ClientMessagePublishEvent)({
      id: (0, Hn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      event: e,
      data: r,
      callWebhook: n
    });
    return this.onceLinked$.pipe((0, fe.flatMap)((s) => this.makeRequest(i)), (0, fe.map)((s) => {
      if ((0, hu.isServerMessageFail)(s))
        throw new Error(s.error || "failed to publish event");
      return s.eventId;
    }));
  }
  sendData(e) {
    this.ws.sendData(JSON.stringify(e));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > Th * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {
    }
  }
  makeRequest(e, r = CR) {
    const n = e.id;
    try {
      this.sendData(e);
    } catch (i) {
      return (0, Ht.throwError)(i);
    }
    return this.ws.incomingJSONData$.pipe((0, fe.timeoutWith)(r, (0, Ht.throwError)(new Error(`request ${n} timed out`))), (0, fe.filter)((i) => i.id === n), (0, fe.take)(1));
  }
  authenticate() {
    const e = (0, Pi.ClientMessageHostSession)({
      id: (0, Hn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      sessionKey: this.sessionKey
    });
    return this.makeRequest(e).pipe((0, fe.map)((r) => {
      if ((0, hu.isServerMessageFail)(r))
        throw new Error(r.error || "failed to authentcate");
    }));
  }
  sendIsLinked() {
    const e = (0, Pi.ClientMessageIsLinked)({
      id: (0, Hn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId
    });
    this.sendData(e);
  }
  sendGetSessionConfig() {
    const e = (0, Pi.ClientMessageGetSessionConfig)({
      id: (0, Hn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId
    });
    this.sendData(e);
  }
}
ha.WalletSDKConnection = RR;
var gi = {};
Object.defineProperty(gi, "__esModule", { value: !0 });
gi.decrypt = gi.encrypt = void 0;
const lo = Q;
async function IR(t, e) {
  if (e.length !== 64)
    throw Error("secret must be 256 bits");
  const r = crypto.getRandomValues(new Uint8Array(12)), n = await crypto.subtle.importKey("raw", (0, lo.hexStringToUint8Array)(e), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), i = new TextEncoder(), s = await window.crypto.subtle.encrypt({
    name: "AES-GCM",
    iv: r
  }, n, i.encode(t)), o = 16, a = s.slice(s.byteLength - o), u = s.slice(0, s.byteLength - o), l = new Uint8Array(a), h = new Uint8Array(u), p = new Uint8Array([
    ...r,
    ...l,
    ...h
  ]);
  return (0, lo.uint8ArrayToHex)(p);
}
gi.encrypt = IR;
function AR(t, e) {
  if (e.length !== 64)
    throw Error("secret must be 256 bits");
  return new Promise((r, n) => {
    (async function() {
      const i = await crypto.subtle.importKey("raw", (0, lo.hexStringToUint8Array)(e), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), s = (0, lo.hexStringToUint8Array)(t), o = s.slice(0, 12), a = s.slice(12, 28), u = s.slice(28), l = new Uint8Array([
        ...u,
        ...a
      ]), h = {
        name: "AES-GCM",
        iv: new Uint8Array(o)
      };
      try {
        const p = await window.crypto.subtle.decrypt(h, i, l), b = new TextDecoder();
        r(b.decode(p));
      } catch (p) {
        n(p);
      }
    })();
  });
}
gi.decrypt = AR;
var pa = {}, ga = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.RelayMessageType = void 0, function(e) {
    e.SESSION_ID_REQUEST = "SESSION_ID_REQUEST", e.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE", e.LINKED = "LINKED", e.UNLINKED = "UNLINKED", e.WEB3_REQUEST = "WEB3_REQUEST", e.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED", e.WEB3_RESPONSE = "WEB3_RESPONSE";
  }(t.RelayMessageType || (t.RelayMessageType = {}));
})(ga);
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.Web3RequestCanceledMessage = void 0;
const kR = ga;
function TR(t) {
  return { type: kR.RelayMessageType.WEB3_REQUEST_CANCELED, id: t };
}
pa.Web3RequestCanceledMessage = TR;
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.Web3RequestMessage = void 0;
const OR = ga;
function NR(t) {
  return Object.assign({ type: OR.RelayMessageType.WEB3_REQUEST }, t);
}
ba.Web3RequestMessage = NR;
var bi = {};
Object.defineProperty(bi, "__esModule", { value: !0 });
bi.isWeb3ResponseMessage = bi.Web3ResponseMessage = void 0;
const pg = ga;
function LR(t) {
  return Object.assign({ type: pg.RelayMessageType.WEB3_RESPONSE }, t);
}
bi.Web3ResponseMessage = LR;
function PR(t) {
  return t && t.type === pg.RelayMessageType.WEB3_RESPONSE;
}
bi.isWeb3ResponseMessage = PR;
var $R = J && J.__createBinding || (Object.create ? function(t, e, r, n) {
  n === void 0 && (n = r), Object.defineProperty(t, n, { enumerable: !0, get: function() {
    return e[r];
  } });
} : function(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}), DR = J && J.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), gg = J && J.__decorate || function(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, r, s) : o(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}, BR = J && J.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && $R(e, t, r);
  return DR(e, t), e;
}, jR = J && J.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ua, "__esModule", { value: !0 });
ua.WalletSDKRelay = void 0;
const bg = jR(ca), Xr = Zo, it = nl, bt = vi, FR = ha, Vn = es, WR = os, Ze = Q, Er = BR(gi), xr = mi, Ws = qt, ht = mo, HR = pa, VR = ba, Nt = Ee, xt = bi;
class zt extends Ws.WalletSDKRelayAbstract {
  constructor(e) {
    var r;
    super(), this.accountsCallback = null, this.chainCallback = null, this.dappDefaultChainSubject = new Xr.BehaviorSubject(1), this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.subscriptions = new Xr.Subscription(), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage, this.options = e;
    const { session: n, ui: i, connection: s } = this.subscribe();
    if (this._session = n, this.connection = s, this.relayEventManager = e.relayEventManager, e.diagnosticLogger && e.eventListener)
      throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
    e.eventListener ? this.diagnostic = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      log: e.eventListener.onEvent
    } : this.diagnostic = e.diagnosticLogger, this._reloadOnDisconnect = (r = e.reloadOnDisconnect) !== null && r !== void 0 ? r : !0, this.ui = i;
  }
  subscribe() {
    this.subscriptions.add(this.dappDefaultChainSubject.subscribe((i) => {
      this.dappDefaultChain !== i && (this.dappDefaultChain = i);
    }));
    const e = xr.Session.load(this.storage) || new xr.Session(this.storage).save(), r = new FR.WalletSDKConnection(e.id, e.key, this.linkAPIUrl, this.diagnostic);
    this.subscriptions.add(r.sessionConfig$.subscribe({
      next: (i) => {
        this.onSessionConfigChanged(i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(bt.EVENTS.GENERAL_ERROR, {
          message: "error while invoking session config callback"
        });
      }
    })), this.subscriptions.add(r.incomingEvent$.pipe((0, it.filter)((i) => i.event === "Web3Response")).subscribe({ next: this.handleIncomingEvent })), this.subscriptions.add(r.linked$.pipe((0, it.skip)(1), (0, it.tap)((i) => {
      var s;
      this.isLinked = i;
      const o = this.storage.getItem(Ws.LOCAL_STORAGE_ADDRESSES_KEY);
      if (i && (this.session.linked = i), this.isUnlinkedErrorState = !1, o) {
        const a = o.split(" "), u = this.storage.getItem("IsStandaloneSigning") === "true";
        if (a[0] !== "" && !i && this.session.linked && !u) {
          this.isUnlinkedErrorState = !0;
          const l = this.getSessionIdHash();
          (s = this.diagnostic) === null || s === void 0 || s.log(bt.EVENTS.UNLINKED_ERROR_STATE, {
            sessionIdHash: l
          });
        }
      }
    })).subscribe()), this.subscriptions.add(r.sessionConfig$.pipe((0, it.filter)((i) => !!i.metadata && i.metadata.__destroyed === "1")).subscribe(() => {
      var i;
      const s = r.isDestroyed;
      return (i = this.diagnostic) === null || i === void 0 || i.log(bt.EVENTS.METADATA_DESTROYED, {
        alreadyDestroyed: s,
        sessionIdHash: this.getSessionIdHash()
      }), this.resetAndReload();
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, it.filter)((i) => i.metadata && i.metadata.WalletUsername !== void 0)).pipe((0, it.mergeMap)((i) => Er.decrypt(i.metadata.WalletUsername, e.secret))).subscribe({
      next: (i) => {
        this.storage.setItem(Ws.WALLET_USER_NAME_KEY, i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(bt.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "username"
        });
      }
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, it.filter)((i) => i.metadata && i.metadata.AppVersion !== void 0)).pipe((0, it.mergeMap)((i) => Er.decrypt(i.metadata.AppVersion, e.secret))).subscribe({
      next: (i) => {
        this.storage.setItem(Ws.APP_VERSION_KEY, i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(bt.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "appversion"
        });
      }
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, it.filter)((i) => i.metadata && i.metadata.ChainId !== void 0 && i.metadata.JsonRpcUrl !== void 0)).pipe((0, it.mergeMap)((i) => (0, Xr.zip)(Er.decrypt(i.metadata.ChainId, e.secret), Er.decrypt(i.metadata.JsonRpcUrl, e.secret)))).pipe((0, it.distinctUntilChanged)()).subscribe({
      next: ([i, s]) => {
        this.chainCallback && this.chainCallback(i, s);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(bt.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "chainId|jsonRpcUrl"
        });
      }
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, it.filter)((i) => i.metadata && i.metadata.EthereumAddress !== void 0)).pipe((0, it.mergeMap)((i) => Er.decrypt(i.metadata.EthereumAddress, e.secret))).subscribe({
      next: (i) => {
        this.accountsCallback && this.accountsCallback([i]), zt.accountRequestCallbackIds.size > 0 && (Array.from(zt.accountRequestCallbackIds.values()).forEach((s) => {
          const o = (0, xt.Web3ResponseMessage)({
            id: s,
            response: (0, Nt.RequestEthereumAccountsResponse)([
              i
            ])
          });
          this.invokeCallback(Object.assign(Object.assign({}, o), { id: s }));
        }), zt.accountRequestCallbackIds.clear());
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(bt.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "selectedAddress"
        });
      }
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, it.filter)((i) => i.metadata && i.metadata.AppSrc !== void 0)).pipe((0, it.mergeMap)((i) => Er.decrypt(i.metadata.AppSrc, e.secret))).subscribe({
      next: (i) => {
        this.ui.setAppSrc(i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(bt.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "appSrc"
        });
      }
    }));
    const n = this.options.uiConstructor({
      linkAPIUrl: this.options.linkAPIUrl,
      version: this.options.version,
      darkMode: this.options.darkMode,
      session: e,
      connected$: r.connected$,
      chainId$: this.dappDefaultChainSubject
    });
    return r.connect(), { session: e, ui: n, connection: r };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    this.connection.setSessionMetadata("__destroyed", "1").pipe((0, it.timeout)(1e3), (0, it.catchError)((e) => (0, Xr.of)(null))).subscribe((e) => {
      var r, n, i;
      const s = this.ui.isStandalone();
      try {
        this.subscriptions.unsubscribe();
      } catch {
        (r = this.diagnostic) === null || r === void 0 || r.log(bt.EVENTS.GENERAL_ERROR, {
          message: "Had error unsubscribing"
        });
      }
      (n = this.diagnostic) === null || n === void 0 || n.log(bt.EVENTS.SESSION_STATE_CHANGE, {
        method: "relay::resetAndReload",
        sessionMetadataChange: "__destroyed, 1",
        sessionIdHash: this.getSessionIdHash()
      }), this.connection.destroy();
      const o = xr.Session.load(this.storage);
      if ((o == null ? void 0 : o.id) === this._session.id ? this.storage.clear() : o && ((i = this.diagnostic) === null || i === void 0 || i.log(bt.EVENTS.SKIPPED_CLEARING_SESSION, {
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: xr.Session.hash(o.id)
      })), this._reloadOnDisconnect) {
        this.ui.reloadUI();
        return;
      }
      this.accountsCallback && this.accountsCallback([], !0), this.subscriptions = new Xr.Subscription();
      const { session: a, ui: u, connection: l } = this.subscribe();
      this._session = a, this.connection = l, this.ui = u, s && this.ui.setStandalone && this.ui.setStandalone(!0), this.attachUI();
    }, (e) => {
      var r;
      (r = this.diagnostic) === null || r === void 0 || r.log(bt.EVENTS.FAILURE, {
        method: "relay::resetAndReload",
        message: `failed to reset and reload with ${e}`,
        sessionIdHash: this.getSessionIdHash()
      });
    });
  }
  setAppInfo(e, r) {
    this.appName = e, this.appLogoUrl = r;
  }
  getStorageItem(e) {
    return this.storage.getItem(e);
  }
  get session() {
    return this._session;
  }
  setStorageItem(e, r) {
    this.storage.setItem(e, r);
  }
  signEthereumMessage(e, r, n, i) {
    return this.sendRequest({
      method: ht.Web3Method.signEthereumMessage,
      params: {
        message: (0, Ze.hexStringFromBuffer)(e, !0),
        address: r,
        addPrefix: n,
        typedDataJson: i || null
      }
    });
  }
  ethereumAddressFromSignedMessage(e, r, n) {
    return this.sendRequest({
      method: ht.Web3Method.ethereumAddressFromSignedMessage,
      params: {
        message: (0, Ze.hexStringFromBuffer)(e, !0),
        signature: (0, Ze.hexStringFromBuffer)(r, !0),
        addPrefix: n
      }
    });
  }
  signEthereumTransaction(e) {
    return this.sendRequest({
      method: ht.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, Ze.bigIntStringFromBN)(e.weiValue),
        data: (0, Ze.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, Ze.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxFeePerGas: e.gasPriceInWei ? (0, Ze.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxPriorityFeePerGas: e.gasPriceInWei ? (0, Ze.bigIntStringFromBN)(e.gasPriceInWei) : null,
        gasLimit: e.gasLimit ? (0, Ze.bigIntStringFromBN)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !1
      }
    });
  }
  signAndSubmitEthereumTransaction(e) {
    return this.sendRequest({
      method: ht.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, Ze.bigIntStringFromBN)(e.weiValue),
        data: (0, Ze.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, Ze.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxFeePerGas: e.maxFeePerGas ? (0, Ze.bigIntStringFromBN)(e.maxFeePerGas) : null,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, Ze.bigIntStringFromBN)(e.maxPriorityFeePerGas) : null,
        gasLimit: e.gasLimit ? (0, Ze.bigIntStringFromBN)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !0
      }
    });
  }
  submitEthereumTransaction(e, r) {
    return this.sendRequest({
      method: ht.Web3Method.submitEthereumTransaction,
      params: {
        signedTransaction: (0, Ze.hexStringFromBuffer)(e, !0),
        chainId: r
      }
    });
  }
  scanQRCode(e) {
    return this.sendRequest({
      method: ht.Web3Method.scanQRCode,
      params: { regExp: e }
    });
  }
  getQRCodeUrl() {
    return (0, Ze.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain);
  }
  genericRequest(e, r) {
    return this.sendRequest({
      method: ht.Web3Method.generic,
      params: {
        action: r,
        data: e
      }
    });
  }
  sendGenericMessage(e) {
    return this.sendRequest(e);
  }
  sendRequest(e) {
    let r = null;
    const n = (0, Ze.randomBytesHex)(8), i = (o) => {
      this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, e.method, o), r == null || r();
    };
    return { promise: new Promise((o, a) => {
      this.ui.isStandalone() || (r = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: i,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      })), this.relayEventManager.callbacks.set(n, (u) => {
        if (r == null || r(), u.errorMessage)
          return a(new Error(u.errorMessage));
        o(u);
      }), this.ui.isStandalone() ? this.sendRequestStandalone(n, e) : this.publishWeb3RequestEvent(n, e);
    }), cancel: i };
  }
  setConnectDisabled(e) {
    this.ui.setConnectDisabled(e);
  }
  setAccountsCallback(e) {
    this.accountsCallback = e;
  }
  setChainCallback(e) {
    this.chainCallback = e;
  }
  setDappDefaultChainCallback(e) {
    this.dappDefaultChainSubject.next(e);
  }
  publishWeb3RequestEvent(e, r) {
    var n;
    const i = (0, VR.Web3RequestMessage)({ id: e, request: r }), s = xr.Session.load(this.storage);
    (n = this.diagnostic) === null || n === void 0 || n.log(bt.EVENTS.WEB3_REQUEST, {
      eventId: i.id,
      method: `relay::${i.request.method}`,
      sessionIdHash: this.getSessionIdHash(),
      storedSessionIdHash: s ? xr.Session.hash(s.id) : "",
      isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
    }), this.subscriptions.add(this.publishEvent("Web3Request", i, !0).subscribe({
      next: (o) => {
        var a;
        (a = this.diagnostic) === null || a === void 0 || a.log(bt.EVENTS.WEB3_REQUEST_PUBLISHED, {
          eventId: i.id,
          method: `relay::${i.request.method}`,
          sessionIdHash: this.getSessionIdHash(),
          storedSessionIdHash: s ? xr.Session.hash(s.id) : "",
          isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
        });
      },
      error: (o) => {
        this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
          id: i.id,
          response: {
            method: i.request.method,
            errorMessage: o.message
          }
        }));
      }
    }));
  }
  publishWeb3RequestCanceledEvent(e) {
    const r = (0, HR.Web3RequestCanceledMessage)(e);
    this.subscriptions.add(this.publishEvent("Web3RequestCanceled", r, !1).subscribe());
  }
  publishEvent(e, r, n) {
    const i = this.session.secret;
    return new Xr.Observable((s) => {
      Er.encrypt(JSON.stringify(Object.assign(Object.assign({}, r), { origin: location.origin })), i).then((o) => {
        s.next(o), s.complete();
      });
    }).pipe((0, it.mergeMap)((s) => this.connection.publishEvent(e, s, n)));
  }
  handleIncomingEvent(e) {
    try {
      this.subscriptions.add((0, Xr.from)(Er.decrypt(e.data, this.session.secret)).pipe((0, it.map)((r) => JSON.parse(r))).subscribe({
        next: (r) => {
          const n = (0, xt.isWeb3ResponseMessage)(r) ? r : null;
          n && this.handleWeb3ResponseMessage(n);
        },
        error: () => {
          var r;
          (r = this.diagnostic) === null || r === void 0 || r.log(bt.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "incomingEvent"
          });
        }
      }));
    } catch {
      return;
    }
  }
  handleWeb3ResponseMessage(e) {
    var r;
    const { response: n } = e;
    if ((r = this.diagnostic) === null || r === void 0 || r.log(bt.EVENTS.WEB3_RESPONSE, {
      eventId: e.id,
      method: `relay::${n.method}`,
      sessionIdHash: this.getSessionIdHash()
    }), (0, Nt.isRequestEthereumAccountsResponse)(n)) {
      zt.accountRequestCallbackIds.forEach((i) => this.invokeCallback(Object.assign(Object.assign({}, e), { id: i }))), zt.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(e);
  }
  handleErrorResponse(e, r, n, i) {
    var s;
    const o = (s = n == null ? void 0 : n.message) !== null && s !== void 0 ? s : (0, Vn.standardErrorMessage)(i);
    this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
      id: e,
      response: {
        method: r,
        errorMessage: o,
        errorCode: i
      }
    }));
  }
  invokeCallback(e) {
    const r = this.relayEventManager.callbacks.get(e.id);
    r && (r(e.response), this.relayEventManager.callbacks.delete(e.id));
  }
  requestEthereumAccounts() {
    const e = {
      method: ht.Web3Method.requestEthereumAccounts,
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl || null
      }
    }, r = (0, Ze.randomBytesHex)(8), n = (s) => {
      this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, e.method, s);
    };
    return { promise: new Promise((s, o) => {
      var a;
      this.relayEventManager.callbacks.set(r, (l) => {
        if (this.ui.hideRequestEthereumAccounts(), l.errorMessage)
          return o(new Error(l.errorMessage));
        s(l);
      });
      const u = ((a = window == null ? void 0 : window.navigator) === null || a === void 0 ? void 0 : a.userAgent) || null;
      if (u && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(u)) {
        let l;
        try {
          (0, Ze.isInIFrame)() && window.top ? l = window.top.location : l = window.location;
        } catch {
          l = window.location;
        }
        l.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(l.href)}`;
        return;
      }
      if (this.ui.inlineAccountsResponse()) {
        const l = (h) => {
          this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
            id: r,
            response: (0, Nt.RequestEthereumAccountsResponse)(h)
          }));
        };
        this.ui.requestEthereumAccounts({
          onCancel: n,
          onAccounts: l
        });
      } else {
        const l = Vn.standardErrors.provider.userRejectedRequest("User denied account authorization");
        this.ui.requestEthereumAccounts({
          onCancel: () => n(l)
        });
      }
      zt.accountRequestCallbackIds.add(r), !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(r, e);
    }), cancel: n };
  }
  selectProvider(e) {
    const r = {
      method: ht.Web3Method.selectProvider,
      params: {
        providerOptions: e
      }
    }, n = (0, Ze.randomBytesHex)(8), i = (o) => {
      this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, r.method, o);
    }, s = new Promise((o, a) => {
      this.relayEventManager.callbacks.set(n, (h) => {
        if (h.errorMessage)
          return a(new Error(h.errorMessage));
        o(h);
      });
      const u = (h) => {
        this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
          id: n,
          response: (0, Nt.SelectProviderResponse)(WR.ProviderType.Unselected)
        }));
      }, l = (h) => {
        this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
          id: n,
          response: (0, Nt.SelectProviderResponse)(h)
        }));
      };
      this.ui.selectProvider && this.ui.selectProvider({
        onApprove: l,
        onCancel: u,
        providerOptions: e
      });
    });
    return { cancel: i, promise: s };
  }
  watchAsset(e, r, n, i, s, o) {
    const a = {
      method: ht.Web3Method.watchAsset,
      params: {
        type: e,
        options: {
          address: r,
          symbol: n,
          decimals: i,
          image: s
        },
        chainId: o
      }
    };
    let u = null;
    const l = (0, Ze.randomBytesHex)(8), h = (b) => {
      this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, a.method, b), u == null || u();
    };
    this.ui.inlineWatchAsset() || (u = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: h,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    }));
    const p = new Promise((b, S) => {
      this.relayEventManager.callbacks.set(l, (O) => {
        if (u == null || u(), O.errorMessage)
          return S(new Error(O.errorMessage));
        b(O);
      });
      const R = (O) => {
        this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
          id: l,
          response: (0, Nt.WatchAssetReponse)(!1)
        }));
      }, L = () => {
        this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
          id: l,
          response: (0, Nt.WatchAssetReponse)(!0)
        }));
      };
      this.ui.inlineWatchAsset() && this.ui.watchAsset({
        onApprove: L,
        onCancel: R,
        type: e,
        address: r,
        symbol: n,
        decimals: i,
        image: s,
        chainId: o
      }), !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(l, a);
    });
    return { cancel: h, promise: p };
  }
  addEthereumChain(e, r, n, i, s, o) {
    const a = {
      method: ht.Web3Method.addEthereumChain,
      params: {
        chainId: e,
        rpcUrls: r,
        blockExplorerUrls: i,
        chainName: s,
        iconUrls: n,
        nativeCurrency: o
      }
    };
    let u = null;
    const l = (0, Ze.randomBytesHex)(8), h = (b) => {
      this.publishWeb3RequestCanceledEvent(l), this.handleErrorResponse(l, a.method, b), u == null || u();
    };
    return this.ui.inlineAddEthereumChain(e) || (u = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: h,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    })), { promise: new Promise((b, S) => {
      this.relayEventManager.callbacks.set(l, (O) => {
        if (u == null || u(), O.errorMessage)
          return S(new Error(O.errorMessage));
        b(O);
      });
      const R = (O) => {
        this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
          id: l,
          response: (0, Nt.AddEthereumChainResponse)({
            isApproved: !1,
            rpcUrl: ""
          })
        }));
      }, L = (O) => {
        this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
          id: l,
          response: (0, Nt.AddEthereumChainResponse)({ isApproved: !0, rpcUrl: O })
        }));
      };
      this.ui.inlineAddEthereumChain(e) && this.ui.addEthereumChain({
        onCancel: R,
        onApprove: L,
        chainId: a.params.chainId,
        rpcUrls: a.params.rpcUrls,
        blockExplorerUrls: a.params.blockExplorerUrls,
        chainName: a.params.chainName,
        iconUrls: a.params.iconUrls,
        nativeCurrency: a.params.nativeCurrency
      }), !this.ui.inlineAddEthereumChain(e) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(l, a);
    }), cancel: h };
  }
  switchEthereumChain(e, r) {
    const n = {
      method: ht.Web3Method.switchEthereumChain,
      params: Object.assign({ chainId: e }, { address: r })
    }, i = (0, Ze.randomBytesHex)(8), s = (a) => {
      this.publishWeb3RequestCanceledEvent(i), this.handleErrorResponse(i, n.method, a);
    };
    return { promise: new Promise((a, u) => {
      this.relayEventManager.callbacks.set(i, (p) => {
        if ((0, Nt.isErrorResponse)(p) && p.errorCode)
          return u(Vn.standardErrors.provider.custom({
            code: p.errorCode,
            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
          }));
        if (p.errorMessage)
          return u(new Error(p.errorMessage));
        a(p);
      });
      const l = (p) => {
        var b;
        if (p) {
          const S = (b = (0, Vn.getErrorCode)(p)) !== null && b !== void 0 ? b : Vn.standardErrorCodes.provider.unsupportedChain;
          this.handleErrorResponse(i, ht.Web3Method.switchEthereumChain, p instanceof Error ? p : Vn.standardErrors.provider.unsupportedChain(e), S);
        } else
          this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
            id: i,
            response: (0, Nt.SwitchEthereumChainResponse)({
              isApproved: !1,
              rpcUrl: ""
            })
          }));
      }, h = (p) => {
        this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
          id: i,
          response: (0, Nt.SwitchEthereumChainResponse)({
            isApproved: !0,
            rpcUrl: p
          })
        }));
      };
      this.ui.switchEthereumChain({
        onCancel: l,
        onApprove: h,
        chainId: n.params.chainId,
        address: n.params.address
      }), !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(i, n);
    }), cancel: s };
  }
  inlineAddEthereumChain(e) {
    return this.ui.inlineAddEthereumChain(e);
  }
  getSessionIdHash() {
    return xr.Session.hash(this._session.id);
  }
  sendRequestStandalone(e, r) {
    const n = (s) => {
      this.handleErrorResponse(e, r.method, s);
    }, i = (s) => {
      this.handleWeb3ResponseMessage((0, xt.Web3ResponseMessage)({
        id: e,
        response: s
      }));
    };
    switch (r.method) {
      case ht.Web3Method.signEthereumMessage:
        this.ui.signEthereumMessage({
          request: r,
          onSuccess: i,
          onCancel: n
        });
        break;
      case ht.Web3Method.signEthereumTransaction:
        this.ui.signEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n
        });
        break;
      case ht.Web3Method.submitEthereumTransaction:
        this.ui.submitEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n
        });
        break;
      case ht.Web3Method.ethereumAddressFromSignedMessage:
        this.ui.ethereumAddressFromSignedMessage({
          request: r,
          onSuccess: i
        });
        break;
      default:
        n();
        break;
    }
  }
  onSessionConfigChanged(e) {
  }
}
zt.accountRequestCallbackIds = /* @__PURE__ */ new Set();
gg([
  bg.default
], zt.prototype, "resetAndReload", null);
gg([
  bg.default
], zt.prototype, "handleIncomingEvent", null);
ua.WalletSDKRelay = zt;
var va = {};
Object.defineProperty(va, "__esModule", { value: !0 });
va.WalletSDKRelayEventManager = void 0;
const UR = Q;
class zR {
  constructor() {
    this._nextRequestId = 0, this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const e = this._nextRequestId, r = (0, UR.prepend0x)(e.toString(16));
    return this.callbacks.get(r) && this.callbacks.delete(r), e;
  }
}
va.WalletSDKRelayEventManager = zR;
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.CoinbaseWalletSDK = void 0;
const qR = po, GR = go, JR = bo, ZR = ei, QR = zo, YR = ua, KR = va, XR = Q, vg = yi;
class ya {
  /**
   * Constructor
   * @param options Coinbase Wallet SDK constructor options
   */
  constructor(e) {
    var r, n, i;
    this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
    const s = e.linkAPIUrl || GR.LINK_API_URL;
    let o;
    if (e.uiConstructor ? o = e.uiConstructor : o = (l) => new QR.WalletSDKUI(l), typeof e.overrideIsMetaMask > "u" ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = e.overrideIsMetaMask, this._overrideIsCoinbaseWallet = (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this._overrideIsCoinbaseBrowser = (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, e.diagnosticLogger && e.eventListener)
      throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
    e.eventListener ? this._diagnosticLogger = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      log: e.eventListener.onEvent
    } : this._diagnosticLogger = e.diagnosticLogger, this._reloadOnDisconnect = (i = e.reloadOnDisconnect) !== null && i !== void 0 ? i : !0;
    const a = new URL(s), u = `${a.protocol}//${a.host}`;
    this._storage = new JR.ScopedLocalStorage(`-walletlink:${u}`), this._storage.setItem("version", ya.VERSION), !(this.walletExtension || this.coinbaseBrowser) && (this._relayEventManager = new KR.WalletSDKRelayEventManager(), this._relay = new YR.WalletSDKRelay({
      linkAPIUrl: s,
      version: vg.LIB_VERSION,
      darkMode: !!e.darkMode,
      uiConstructor: o,
      storage: this._storage,
      relayEventManager: this._relayEventManager,
      diagnosticLogger: this._diagnosticLogger,
      reloadOnDisconnect: this._reloadOnDisconnect
    }), this.setAppInfo(e.appName, e.appLogoUrl), !e.headlessMode && this._relay.attachUI());
  }
  /**
   * Create a Web3 Provider object
   * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
   * @param chainId Ethereum Chain ID (Default: 1)
   * @returns A Web3 Provider
   */
  makeWeb3Provider(e = "", r = 1) {
    const n = this.walletExtension;
    if (n)
      return this.isCipherProvider(n) || n.setProviderInfo(e, r), this._reloadOnDisconnect === !1 && typeof n.disableReloadOnDisconnect == "function" && n.disableReloadOnDisconnect(), n;
    const i = this.coinbaseBrowser;
    if (i)
      return i;
    const s = this._relay;
    if (!s || !this._relayEventManager || !this._storage)
      throw new Error("Relay not initialized, should never happen");
    return e || s.setConnectDisabled(!0), new ZR.CoinbaseWalletProvider({
      relayProvider: () => Promise.resolve(s),
      relayEventManager: this._relayEventManager,
      storage: this._storage,
      jsonRpcUrl: e,
      chainId: r,
      qrUrl: this.getQrUrl(),
      diagnosticLogger: this._diagnosticLogger,
      overrideIsMetaMask: this._overrideIsMetaMask,
      overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
      overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
    });
  }
  /**
   * Set application information
   * @param appName Application name
   * @param appLogoUrl Application logo image URL
   */
  setAppInfo(e, r) {
    var n;
    this._appName = e || "DApp", this._appLogoUrl = r || (0, XR.getFavicon)();
    const i = this.walletExtension;
    i ? this.isCipherProvider(i) || i.setAppInfo(this._appName, this._appLogoUrl) : (n = this._relay) === null || n === void 0 || n.setAppInfo(this._appName, this._appLogoUrl);
  }
  /**
   * Disconnect. After disconnecting, this will reload the web page to ensure
   * all potential stale state is cleared.
   */
  disconnect() {
    var e;
    const r = this.walletExtension;
    r ? r.close() : (e = this._relay) === null || e === void 0 || e.resetAndReload();
  }
  /**
   * Return QR URL for mobile wallet connection, will return null if extension is installed
   */
  getQrUrl() {
    var e, r;
    return (r = (e = this._relay) === null || e === void 0 ? void 0 : e.getQRCodeUrl()) !== null && r !== void 0 ? r : null;
  }
  /**
   * Official Coinbase Wallet logo for developers to use on their frontend
   * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
   * @param width Width of the logo (Optional)
   * @returns SVG Data URI
   */
  getCoinbaseWalletLogo(e, r = 240) {
    return (0, qR.walletLogo)(e, r);
  }
  get walletExtension() {
    var e;
    return (e = window.coinbaseWalletExtension) !== null && e !== void 0 ? e : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var e, r;
    try {
      const n = (e = window.ethereum) !== null && e !== void 0 ? e : (r = window.top) === null || r === void 0 ? void 0 : r.ethereum;
      return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0;
    } catch {
      return;
    }
  }
  isCipherProvider(e) {
    return typeof e.isCipher == "boolean" && e.isCipher;
  }
}
qi.CoinbaseWalletSDK = ya;
ya.VERSION = vg.LIB_VERSION;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.CoinbaseWalletProvider = t.CoinbaseWalletSDK = void 0;
  const e = qi, r = ei;
  var n = qi;
  Object.defineProperty(t, "CoinbaseWalletSDK", { enumerable: !0, get: function() {
    return n.CoinbaseWalletSDK;
  } });
  var i = ei;
  Object.defineProperty(t, "CoinbaseWalletProvider", { enumerable: !0, get: function() {
    return i.CoinbaseWalletProvider;
  } }), t.default = e.CoinbaseWalletSDK, typeof window < "u" && (window.CoinbaseWalletSDK = e.CoinbaseWalletSDK, window.CoinbaseWalletProvider = r.CoinbaseWalletProvider, window.WalletLink = e.CoinbaseWalletSDK, window.WalletLinkProvider = r.CoinbaseWalletProvider);
})(Oh);
const eI = /* @__PURE__ */ yg(Oh), lI = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eI
}, Symbol.toStringTag, { value: "Module" }));
export {
  lI as i
};

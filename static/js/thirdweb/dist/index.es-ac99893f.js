var Qe = {}, Ie = {};
Ie.byteLength = dt;
Ie.toByteArray = yt;
Ie.fromByteArray = Et;
var z = [], v = [], ht = typeof Uint8Array < "u" ? Uint8Array : Array, Fe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var le = 0, pt = Fe.length; le < pt; ++le)
  z[le] = Fe[le], v[Fe.charCodeAt(le)] = le;
v["-".charCodeAt(0)] = 62;
v["_".charCodeAt(0)] = 63;
function et(n) {
  var s = n.length;
  if (s % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var u = n.indexOf("=");
  u === -1 && (u = s);
  var h = u === s ? 0 : 4 - u % 4;
  return [u, h];
}
function dt(n) {
  var s = et(n), u = s[0], h = s[1];
  return (u + h) * 3 / 4 - h;
}
function wt(n, s, u) {
  return (s + u) * 3 / 4 - u;
}
function yt(n) {
  var s, u = et(n), h = u[0], p = u[1], d = new ht(wt(n, h, p)), f = 0, a = p > 0 ? h - 4 : h, g;
  for (g = 0; g < a; g += 4)
    s = v[n.charCodeAt(g)] << 18 | v[n.charCodeAt(g + 1)] << 12 | v[n.charCodeAt(g + 2)] << 6 | v[n.charCodeAt(g + 3)], d[f++] = s >> 16 & 255, d[f++] = s >> 8 & 255, d[f++] = s & 255;
  return p === 2 && (s = v[n.charCodeAt(g)] << 2 | v[n.charCodeAt(g + 1)] >> 4, d[f++] = s & 255), p === 1 && (s = v[n.charCodeAt(g)] << 10 | v[n.charCodeAt(g + 1)] << 4 | v[n.charCodeAt(g + 2)] >> 2, d[f++] = s >> 8 & 255, d[f++] = s & 255), d;
}
function gt(n) {
  return z[n >> 18 & 63] + z[n >> 12 & 63] + z[n >> 6 & 63] + z[n & 63];
}
function mt(n, s, u) {
  for (var h, p = [], d = s; d < u; d += 3)
    h = (n[d] << 16 & 16711680) + (n[d + 1] << 8 & 65280) + (n[d + 2] & 255), p.push(gt(h));
  return p.join("");
}
function Et(n) {
  for (var s, u = n.length, h = u % 3, p = [], d = 16383, f = 0, a = u - h; f < a; f += d)
    p.push(mt(n, f, f + d > a ? a : f + d));
  return h === 1 ? (s = n[u - 1], p.push(
    z[s >> 2] + z[s << 4 & 63] + "=="
  )) : h === 2 && (s = (n[u - 2] << 8) + n[u - 1], p.push(
    z[s >> 10] + z[s >> 4 & 63] + z[s << 2 & 63] + "="
  )), p.join("");
}
var Te = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Te.read = function(n, s, u, h, p) {
  var d, f, a = p * 8 - h - 1, g = (1 << a) - 1, w = g >> 1, I = -7, x = u ? p - 1 : 0, C = u ? -1 : 1, b = n[s + x];
  for (x += C, d = b & (1 << -I) - 1, b >>= -I, I += a; I > 0; d = d * 256 + n[s + x], x += C, I -= 8)
    ;
  for (f = d & (1 << -I) - 1, d >>= -I, I += h; I > 0; f = f * 256 + n[s + x], x += C, I -= 8)
    ;
  if (d === 0)
    d = 1 - w;
  else {
    if (d === g)
      return f ? NaN : (b ? -1 : 1) * (1 / 0);
    f = f + Math.pow(2, h), d = d - w;
  }
  return (b ? -1 : 1) * f * Math.pow(2, d - h);
};
Te.write = function(n, s, u, h, p, d) {
  var f, a, g, w = d * 8 - p - 1, I = (1 << w) - 1, x = I >> 1, C = p === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = h ? 0 : d - 1, k = h ? 1 : -1, W = s < 0 || s === 0 && 1 / s < 0 ? 1 : 0;
  for (s = Math.abs(s), isNaN(s) || s === 1 / 0 ? (a = isNaN(s) ? 1 : 0, f = I) : (f = Math.floor(Math.log(s) / Math.LN2), s * (g = Math.pow(2, -f)) < 1 && (f--, g *= 2), f + x >= 1 ? s += C / g : s += C * Math.pow(2, 1 - x), s * g >= 2 && (f++, g /= 2), f + x >= I ? (a = 0, f = I) : f + x >= 1 ? (a = (s * g - 1) * Math.pow(2, p), f = f + x) : (a = s * Math.pow(2, x - 1) * Math.pow(2, p), f = 0)); p >= 8; n[u + b] = a & 255, b += k, a /= 256, p -= 8)
    ;
  for (f = f << p | a, w += p; w > 0; n[u + b] = f & 255, b += k, f /= 256, w -= 8)
    ;
  n[u + b - k] |= W * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(n) {
  const s = Ie, u = Te, h = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  n.Buffer = a, n.SlowBuffer = fe, n.INSPECT_MAX_BYTES = 50;
  const p = 2147483647;
  n.kMaxLength = p, a.TYPED_ARRAY_SUPPORT = d(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function d() {
    try {
      const r = new Uint8Array(1), e = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(r, e), r.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function f(r) {
    if (r > p)
      throw new RangeError('The value "' + r + '" is invalid for option "size"');
    const e = new Uint8Array(r);
    return Object.setPrototypeOf(e, a.prototype), e;
  }
  function a(r, e, t) {
    if (typeof r == "number") {
      if (typeof e == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return x(r);
    }
    return g(r, e, t);
  }
  a.poolSize = 8192;
  function g(r, e, t) {
    if (typeof r == "string")
      return C(r, e);
    if (ArrayBuffer.isView(r))
      return k(r);
    if (r == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r
      );
    if (K(r, ArrayBuffer) || r && K(r.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (K(r, SharedArrayBuffer) || r && K(r.buffer, SharedArrayBuffer)))
      return W(r, e, t);
    if (typeof r == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const i = r.valueOf && r.valueOf();
    if (i != null && i !== r)
      return a.from(i, e, t);
    const o = Y(r);
    if (o)
      return o;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof r[Symbol.toPrimitive] == "function")
      return a.from(r[Symbol.toPrimitive]("string"), e, t);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof r
    );
  }
  a.from = function(r, e, t) {
    return g(r, e, t);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function w(r) {
    if (typeof r != "number")
      throw new TypeError('"size" argument must be of type number');
    if (r < 0)
      throw new RangeError('The value "' + r + '" is invalid for option "size"');
  }
  function I(r, e, t) {
    return w(r), r <= 0 ? f(r) : e !== void 0 ? typeof t == "string" ? f(r).fill(e, t) : f(r).fill(e) : f(r);
  }
  a.alloc = function(r, e, t) {
    return I(r, e, t);
  };
  function x(r) {
    return w(r), f(r < 0 ? 0 : D(r) | 0);
  }
  a.allocUnsafe = function(r) {
    return x(r);
  }, a.allocUnsafeSlow = function(r) {
    return x(r);
  };
  function C(r, e) {
    if ((typeof e != "string" || e === "") && (e = "utf8"), !a.isEncoding(e))
      throw new TypeError("Unknown encoding: " + e);
    const t = he(r, e) | 0;
    let i = f(t);
    const o = i.write(r, e);
    return o !== t && (i = i.slice(0, o)), i;
  }
  function b(r) {
    const e = r.length < 0 ? 0 : D(r.length) | 0, t = f(e);
    for (let i = 0; i < e; i += 1)
      t[i] = r[i] & 255;
    return t;
  }
  function k(r) {
    if (K(r, Uint8Array)) {
      const e = new Uint8Array(r);
      return W(e.buffer, e.byteOffset, e.byteLength);
    }
    return b(r);
  }
  function W(r, e, t) {
    if (e < 0 || r.byteLength < e)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < e + (t || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let i;
    return e === void 0 && t === void 0 ? i = new Uint8Array(r) : t === void 0 ? i = new Uint8Array(r, e) : i = new Uint8Array(r, e, t), Object.setPrototypeOf(i, a.prototype), i;
  }
  function Y(r) {
    if (a.isBuffer(r)) {
      const e = D(r.length) | 0, t = f(e);
      return t.length === 0 || r.copy(t, 0, 0, e), t;
    }
    if (r.length !== void 0)
      return typeof r.length != "number" || Ce(r.length) ? f(0) : b(r);
    if (r.type === "Buffer" && Array.isArray(r.data))
      return b(r.data);
  }
  function D(r) {
    if (r >= p)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + p.toString(16) + " bytes");
    return r | 0;
  }
  function fe(r) {
    return +r != r && (r = 0), a.alloc(+r);
  }
  a.isBuffer = function(e) {
    return e != null && e._isBuffer === !0 && e !== a.prototype;
  }, a.compare = function(e, t) {
    if (K(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), K(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (e === t)
      return 0;
    let i = e.length, o = t.length;
    for (let c = 0, l = Math.min(i, o); c < l; ++c)
      if (e[c] !== t[c]) {
        i = e[c], o = t[c];
        break;
      }
    return i < o ? -1 : o < i ? 1 : 0;
  }, a.isEncoding = function(e) {
    switch (String(e).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, a.concat = function(e, t) {
    if (!Array.isArray(e))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (e.length === 0)
      return a.alloc(0);
    let i;
    if (t === void 0)
      for (t = 0, i = 0; i < e.length; ++i)
        t += e[i].length;
    const o = a.allocUnsafe(t);
    let c = 0;
    for (i = 0; i < e.length; ++i) {
      let l = e[i];
      if (K(l, Uint8Array))
        c + l.length > o.length ? (a.isBuffer(l) || (l = a.from(l)), l.copy(o, c)) : Uint8Array.prototype.set.call(
          o,
          l,
          c
        );
      else if (a.isBuffer(l))
        l.copy(o, c);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      c += l.length;
    }
    return o;
  };
  function he(r, e) {
    if (a.isBuffer(r))
      return r.length;
    if (ArrayBuffer.isView(r) || K(r, ArrayBuffer))
      return r.byteLength;
    if (typeof r != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof r
      );
    const t = r.length, i = arguments.length > 2 && arguments[2] === !0;
    if (!i && t === 0)
      return 0;
    let o = !1;
    for (; ; )
      switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return t;
        case "utf8":
        case "utf-8":
          return Ue(r).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return t * 2;
        case "hex":
          return t >>> 1;
        case "base64":
          return $e(r).length;
        default:
          if (o)
            return i ? -1 : Ue(r).length;
          e = ("" + e).toLowerCase(), o = !0;
      }
  }
  a.byteLength = he;
  function xe(r, e, t) {
    let i = !1;
    if ((e === void 0 || e < 0) && (e = 0), e > this.length || ((t === void 0 || t > this.length) && (t = this.length), t <= 0) || (t >>>= 0, e >>>= 0, t <= e))
      return "";
    for (r || (r = "utf8"); ; )
      switch (r) {
        case "hex":
          return nt(this, e, t);
        case "utf8":
        case "utf-8":
          return Z(this, e, t);
        case "ascii":
          return tt(this, e, t);
        case "latin1":
        case "binary":
          return rt(this, e, t);
        case "base64":
          return X(this, e, t);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return it(this, e, t);
        default:
          if (i)
            throw new TypeError("Unknown encoding: " + r);
          r = (r + "").toLowerCase(), i = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function V(r, e, t) {
    const i = r[e];
    r[e] = r[t], r[t] = i;
  }
  a.prototype.swap16 = function() {
    const e = this.length;
    if (e % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let t = 0; t < e; t += 2)
      V(this, t, t + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const e = this.length;
    if (e % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let t = 0; t < e; t += 4)
      V(this, t, t + 3), V(this, t + 1, t + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const e = this.length;
    if (e % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let t = 0; t < e; t += 8)
      V(this, t, t + 7), V(this, t + 1, t + 6), V(this, t + 2, t + 5), V(this, t + 3, t + 4);
    return this;
  }, a.prototype.toString = function() {
    const e = this.length;
    return e === 0 ? "" : arguments.length === 0 ? Z(this, 0, e) : xe.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(e) {
    if (!a.isBuffer(e))
      throw new TypeError("Argument must be a Buffer");
    return this === e ? !0 : a.compare(this, e) === 0;
  }, a.prototype.inspect = function() {
    let e = "";
    const t = n.INSPECT_MAX_BYTES;
    return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
  }, h && (a.prototype[h] = a.prototype.inspect), a.prototype.compare = function(e, t, i, o, c) {
    if (K(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e
      );
    if (t === void 0 && (t = 0), i === void 0 && (i = e ? e.length : 0), o === void 0 && (o = 0), c === void 0 && (c = this.length), t < 0 || i > e.length || o < 0 || c > this.length)
      throw new RangeError("out of range index");
    if (o >= c && t >= i)
      return 0;
    if (o >= c)
      return -1;
    if (t >= i)
      return 1;
    if (t >>>= 0, i >>>= 0, o >>>= 0, c >>>= 0, this === e)
      return 0;
    let l = c - o, m = i - t;
    const F = Math.min(l, m), U = this.slice(o, c), L = e.slice(t, i);
    for (let A = 0; A < F; ++A)
      if (U[A] !== L[A]) {
        l = U[A], m = L[A];
        break;
      }
    return l < m ? -1 : m < l ? 1 : 0;
  };
  function Be(r, e, t, i, o) {
    if (r.length === 0)
      return -1;
    if (typeof t == "string" ? (i = t, t = 0) : t > 2147483647 ? t = 2147483647 : t < -2147483648 && (t = -2147483648), t = +t, Ce(t) && (t = o ? 0 : r.length - 1), t < 0 && (t = r.length + t), t >= r.length) {
      if (o)
        return -1;
      t = r.length - 1;
    } else if (t < 0)
      if (o)
        t = 0;
      else
        return -1;
    if (typeof e == "string" && (e = a.from(e, i)), a.isBuffer(e))
      return e.length === 0 ? -1 : ne(r, e, t, i, o);
    if (typeof e == "number")
      return e = e & 255, typeof Uint8Array.prototype.indexOf == "function" ? o ? Uint8Array.prototype.indexOf.call(r, e, t) : Uint8Array.prototype.lastIndexOf.call(r, e, t) : ne(r, [e], t, i, o);
    throw new TypeError("val must be string, number or Buffer");
  }
  function ne(r, e, t, i, o) {
    let c = 1, l = r.length, m = e.length;
    if (i !== void 0 && (i = String(i).toLowerCase(), i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le")) {
      if (r.length < 2 || e.length < 2)
        return -1;
      c = 2, l /= 2, m /= 2, t /= 2;
    }
    function F(L, A) {
      return c === 1 ? L[A] : L.readUInt16BE(A * c);
    }
    let U;
    if (o) {
      let L = -1;
      for (U = t; U < l; U++)
        if (F(r, U) === F(e, L === -1 ? 0 : U - L)) {
          if (L === -1 && (L = U), U - L + 1 === m)
            return L * c;
        } else
          L !== -1 && (U -= U - L), L = -1;
    } else
      for (t + m > l && (t = l - m), U = t; U >= 0; U--) {
        let L = !0;
        for (let A = 0; A < m; A++)
          if (F(r, U + A) !== F(e, A)) {
            L = !1;
            break;
          }
        if (L)
          return U;
      }
    return -1;
  }
  a.prototype.includes = function(e, t, i) {
    return this.indexOf(e, t, i) !== -1;
  }, a.prototype.indexOf = function(e, t, i) {
    return Be(this, e, t, i, !0);
  }, a.prototype.lastIndexOf = function(e, t, i) {
    return Be(this, e, t, i, !1);
  };
  function Ae(r, e, t, i) {
    t = Number(t) || 0;
    const o = r.length - t;
    i ? (i = Number(i), i > o && (i = o)) : i = o;
    const c = e.length;
    i > c / 2 && (i = c / 2);
    let l;
    for (l = 0; l < i; ++l) {
      const m = parseInt(e.substr(l * 2, 2), 16);
      if (Ce(m))
        return l;
      r[t + l] = m;
    }
    return l;
  }
  function B(r, e, t, i) {
    return ye(Ue(e, r.length - t), r, t, i);
  }
  function E(r, e, t, i) {
    return ye(ct(e), r, t, i);
  }
  function y(r, e, t, i) {
    return ye($e(e), r, t, i);
  }
  function _(r, e, t, i) {
    return ye(lt(e, r.length - t), r, t, i);
  }
  a.prototype.write = function(e, t, i, o) {
    if (t === void 0)
      o = "utf8", i = this.length, t = 0;
    else if (i === void 0 && typeof t == "string")
      o = t, i = this.length, t = 0;
    else if (isFinite(t))
      t = t >>> 0, isFinite(i) ? (i = i >>> 0, o === void 0 && (o = "utf8")) : (o = i, i = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const c = this.length - t;
    if ((i === void 0 || i > c) && (i = c), e.length > 0 && (i < 0 || t < 0) || t > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    o || (o = "utf8");
    let l = !1;
    for (; ; )
      switch (o) {
        case "hex":
          return Ae(this, e, t, i);
        case "utf8":
        case "utf-8":
          return B(this, e, t, i);
        case "ascii":
        case "latin1":
        case "binary":
          return E(this, e, t, i);
        case "base64":
          return y(this, e, t, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return _(this, e, t, i);
        default:
          if (l)
            throw new TypeError("Unknown encoding: " + o);
          o = ("" + o).toLowerCase(), l = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function X(r, e, t) {
    return e === 0 && t === r.length ? s.fromByteArray(r) : s.fromByteArray(r.slice(e, t));
  }
  function Z(r, e, t) {
    t = Math.min(r.length, t);
    const i = [];
    let o = e;
    for (; o < t; ) {
      const c = r[o];
      let l = null, m = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
      if (o + m <= t) {
        let F, U, L, A;
        switch (m) {
          case 1:
            c < 128 && (l = c);
            break;
          case 2:
            F = r[o + 1], (F & 192) === 128 && (A = (c & 31) << 6 | F & 63, A > 127 && (l = A));
            break;
          case 3:
            F = r[o + 1], U = r[o + 2], (F & 192) === 128 && (U & 192) === 128 && (A = (c & 15) << 12 | (F & 63) << 6 | U & 63, A > 2047 && (A < 55296 || A > 57343) && (l = A));
            break;
          case 4:
            F = r[o + 1], U = r[o + 2], L = r[o + 3], (F & 192) === 128 && (U & 192) === 128 && (L & 192) === 128 && (A = (c & 15) << 18 | (F & 63) << 12 | (U & 63) << 6 | L & 63, A > 65535 && A < 1114112 && (l = A));
        }
      }
      l === null ? (l = 65533, m = 1) : l > 65535 && (l -= 65536, i.push(l >>> 10 & 1023 | 55296), l = 56320 | l & 1023), i.push(l), o += m;
    }
    return G(i);
  }
  const ie = 4096;
  function G(r) {
    const e = r.length;
    if (e <= ie)
      return String.fromCharCode.apply(String, r);
    let t = "", i = 0;
    for (; i < e; )
      t += String.fromCharCode.apply(
        String,
        r.slice(i, i += ie)
      );
    return t;
  }
  function tt(r, e, t) {
    let i = "";
    t = Math.min(r.length, t);
    for (let o = e; o < t; ++o)
      i += String.fromCharCode(r[o] & 127);
    return i;
  }
  function rt(r, e, t) {
    let i = "";
    t = Math.min(r.length, t);
    for (let o = e; o < t; ++o)
      i += String.fromCharCode(r[o]);
    return i;
  }
  function nt(r, e, t) {
    const i = r.length;
    (!e || e < 0) && (e = 0), (!t || t < 0 || t > i) && (t = i);
    let o = "";
    for (let c = e; c < t; ++c)
      o += ut[r[c]];
    return o;
  }
  function it(r, e, t) {
    const i = r.slice(e, t);
    let o = "";
    for (let c = 0; c < i.length - 1; c += 2)
      o += String.fromCharCode(i[c] + i[c + 1] * 256);
    return o;
  }
  a.prototype.slice = function(e, t) {
    const i = this.length;
    e = ~~e, t = t === void 0 ? i : ~~t, e < 0 ? (e += i, e < 0 && (e = 0)) : e > i && (e = i), t < 0 ? (t += i, t < 0 && (t = 0)) : t > i && (t = i), t < e && (t = e);
    const o = this.subarray(e, t);
    return Object.setPrototypeOf(o, a.prototype), o;
  };
  function R(r, e, t) {
    if (r % 1 !== 0 || r < 0)
      throw new RangeError("offset is not uint");
    if (r + e > t)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(e, t, i) {
    e = e >>> 0, t = t >>> 0, i || R(e, t, this.length);
    let o = this[e], c = 1, l = 0;
    for (; ++l < t && (c *= 256); )
      o += this[e + l] * c;
    return o;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(e, t, i) {
    e = e >>> 0, t = t >>> 0, i || R(e, t, this.length);
    let o = this[e + --t], c = 1;
    for (; t > 0 && (c *= 256); )
      o += this[e + --t] * c;
    return o;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(e, t) {
    return e = e >>> 0, t || R(e, 1, this.length), this[e];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(e, t) {
    return e = e >>> 0, t || R(e, 2, this.length), this[e] | this[e + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(e, t) {
    return e = e >>> 0, t || R(e, 2, this.length), this[e] << 8 | this[e + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(e, t) {
    return e = e >>> 0, t || R(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(e, t) {
    return e = e >>> 0, t || R(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
  }, a.prototype.readBigUInt64LE = Q(function(e) {
    e = e >>> 0, ce(e, "offset");
    const t = this[e], i = this[e + 7];
    (t === void 0 || i === void 0) && pe(e, this.length - 8);
    const o = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, c = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + i * 2 ** 24;
    return BigInt(o) + (BigInt(c) << BigInt(32));
  }), a.prototype.readBigUInt64BE = Q(function(e) {
    e = e >>> 0, ce(e, "offset");
    const t = this[e], i = this[e + 7];
    (t === void 0 || i === void 0) && pe(e, this.length - 8);
    const o = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], c = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + i;
    return (BigInt(o) << BigInt(32)) + BigInt(c);
  }), a.prototype.readIntLE = function(e, t, i) {
    e = e >>> 0, t = t >>> 0, i || R(e, t, this.length);
    let o = this[e], c = 1, l = 0;
    for (; ++l < t && (c *= 256); )
      o += this[e + l] * c;
    return c *= 128, o >= c && (o -= Math.pow(2, 8 * t)), o;
  }, a.prototype.readIntBE = function(e, t, i) {
    e = e >>> 0, t = t >>> 0, i || R(e, t, this.length);
    let o = t, c = 1, l = this[e + --o];
    for (; o > 0 && (c *= 256); )
      l += this[e + --o] * c;
    return c *= 128, l >= c && (l -= Math.pow(2, 8 * t)), l;
  }, a.prototype.readInt8 = function(e, t) {
    return e = e >>> 0, t || R(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
  }, a.prototype.readInt16LE = function(e, t) {
    e = e >>> 0, t || R(e, 2, this.length);
    const i = this[e] | this[e + 1] << 8;
    return i & 32768 ? i | 4294901760 : i;
  }, a.prototype.readInt16BE = function(e, t) {
    e = e >>> 0, t || R(e, 2, this.length);
    const i = this[e + 1] | this[e] << 8;
    return i & 32768 ? i | 4294901760 : i;
  }, a.prototype.readInt32LE = function(e, t) {
    return e = e >>> 0, t || R(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
  }, a.prototype.readInt32BE = function(e, t) {
    return e = e >>> 0, t || R(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
  }, a.prototype.readBigInt64LE = Q(function(e) {
    e = e >>> 0, ce(e, "offset");
    const t = this[e], i = this[e + 7];
    (t === void 0 || i === void 0) && pe(e, this.length - 8);
    const o = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (i << 24);
    return (BigInt(o) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
  }), a.prototype.readBigInt64BE = Q(function(e) {
    e = e >>> 0, ce(e, "offset");
    const t = this[e], i = this[e + 7];
    (t === void 0 || i === void 0) && pe(e, this.length - 8);
    const o = (t << 24) + // Overflow
    this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
    return (BigInt(o) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + i);
  }), a.prototype.readFloatLE = function(e, t) {
    return e = e >>> 0, t || R(e, 4, this.length), u.read(this, e, !0, 23, 4);
  }, a.prototype.readFloatBE = function(e, t) {
    return e = e >>> 0, t || R(e, 4, this.length), u.read(this, e, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(e, t) {
    return e = e >>> 0, t || R(e, 8, this.length), u.read(this, e, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(e, t) {
    return e = e >>> 0, t || R(e, 8, this.length), u.read(this, e, !1, 52, 8);
  };
  function j(r, e, t, i, o, c) {
    if (!a.isBuffer(r))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > o || e < c)
      throw new RangeError('"value" argument is out of bounds');
    if (t + i > r.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(e, t, i, o) {
    if (e = +e, t = t >>> 0, i = i >>> 0, !o) {
      const m = Math.pow(2, 8 * i) - 1;
      j(this, e, t, i, m, 0);
    }
    let c = 1, l = 0;
    for (this[t] = e & 255; ++l < i && (c *= 256); )
      this[t + l] = e / c & 255;
    return t + i;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(e, t, i, o) {
    if (e = +e, t = t >>> 0, i = i >>> 0, !o) {
      const m = Math.pow(2, 8 * i) - 1;
      j(this, e, t, i, m, 0);
    }
    let c = i - 1, l = 1;
    for (this[t + c] = e & 255; --c >= 0 && (l *= 256); )
      this[t + c] = e / l & 255;
    return t + i;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
  };
  function Pe(r, e, t, i, o) {
    ke(e, i, o, r, t, 7);
    let c = Number(e & BigInt(4294967295));
    r[t++] = c, c = c >> 8, r[t++] = c, c = c >> 8, r[t++] = c, c = c >> 8, r[t++] = c;
    let l = Number(e >> BigInt(32) & BigInt(4294967295));
    return r[t++] = l, l = l >> 8, r[t++] = l, l = l >> 8, r[t++] = l, l = l >> 8, r[t++] = l, t;
  }
  function De(r, e, t, i, o) {
    ke(e, i, o, r, t, 7);
    let c = Number(e & BigInt(4294967295));
    r[t + 7] = c, c = c >> 8, r[t + 6] = c, c = c >> 8, r[t + 5] = c, c = c >> 8, r[t + 4] = c;
    let l = Number(e >> BigInt(32) & BigInt(4294967295));
    return r[t + 3] = l, l = l >> 8, r[t + 2] = l, l = l >> 8, r[t + 1] = l, l = l >> 8, r[t] = l, t + 8;
  }
  a.prototype.writeBigUInt64LE = Q(function(e, t = 0) {
    return Pe(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = Q(function(e, t = 0) {
    return De(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(e, t, i, o) {
    if (e = +e, t = t >>> 0, !o) {
      const F = Math.pow(2, 8 * i - 1);
      j(this, e, t, i, F - 1, -F);
    }
    let c = 0, l = 1, m = 0;
    for (this[t] = e & 255; ++c < i && (l *= 256); )
      e < 0 && m === 0 && this[t + c - 1] !== 0 && (m = 1), this[t + c] = (e / l >> 0) - m & 255;
    return t + i;
  }, a.prototype.writeIntBE = function(e, t, i, o) {
    if (e = +e, t = t >>> 0, !o) {
      const F = Math.pow(2, 8 * i - 1);
      j(this, e, t, i, F - 1, -F);
    }
    let c = i - 1, l = 1, m = 0;
    for (this[t + c] = e & 255; --c >= 0 && (l *= 256); )
      e < 0 && m === 0 && this[t + c + 1] !== 0 && (m = 1), this[t + c] = (e / l >> 0) - m & 255;
    return t + i;
  }, a.prototype.writeInt8 = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
  }, a.prototype.writeInt16LE = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
  }, a.prototype.writeInt16BE = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
  }, a.prototype.writeInt32LE = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
  }, a.prototype.writeInt32BE = function(e, t, i) {
    return e = +e, t = t >>> 0, i || j(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
  }, a.prototype.writeBigInt64LE = Q(function(e, t = 0) {
    return Pe(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = Q(function(e, t = 0) {
    return De(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function _e(r, e, t, i, o, c) {
    if (t + i > r.length)
      throw new RangeError("Index out of range");
    if (t < 0)
      throw new RangeError("Index out of range");
  }
  function Ne(r, e, t, i, o) {
    return e = +e, t = t >>> 0, o || _e(r, e, t, 4), u.write(r, e, t, i, 23, 4), t + 4;
  }
  a.prototype.writeFloatLE = function(e, t, i) {
    return Ne(this, e, t, !0, i);
  }, a.prototype.writeFloatBE = function(e, t, i) {
    return Ne(this, e, t, !1, i);
  };
  function We(r, e, t, i, o) {
    return e = +e, t = t >>> 0, o || _e(r, e, t, 8), u.write(r, e, t, i, 52, 8), t + 8;
  }
  a.prototype.writeDoubleLE = function(e, t, i) {
    return We(this, e, t, !0, i);
  }, a.prototype.writeDoubleBE = function(e, t, i) {
    return We(this, e, t, !1, i);
  }, a.prototype.copy = function(e, t, i, o) {
    if (!a.isBuffer(e))
      throw new TypeError("argument should be a Buffer");
    if (i || (i = 0), !o && o !== 0 && (o = this.length), t >= e.length && (t = e.length), t || (t = 0), o > 0 && o < i && (o = i), o === i || e.length === 0 || this.length === 0)
      return 0;
    if (t < 0)
      throw new RangeError("targetStart out of bounds");
    if (i < 0 || i >= this.length)
      throw new RangeError("Index out of range");
    if (o < 0)
      throw new RangeError("sourceEnd out of bounds");
    o > this.length && (o = this.length), e.length - t < o - i && (o = e.length - t + i);
    const c = o - i;
    return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, i, o) : Uint8Array.prototype.set.call(
      e,
      this.subarray(i, o),
      t
    ), c;
  }, a.prototype.fill = function(e, t, i, o) {
    if (typeof e == "string") {
      if (typeof t == "string" ? (o = t, t = 0, i = this.length) : typeof i == "string" && (o = i, i = this.length), o !== void 0 && typeof o != "string")
        throw new TypeError("encoding must be a string");
      if (typeof o == "string" && !a.isEncoding(o))
        throw new TypeError("Unknown encoding: " + o);
      if (e.length === 1) {
        const l = e.charCodeAt(0);
        (o === "utf8" && l < 128 || o === "latin1") && (e = l);
      }
    } else
      typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
    if (t < 0 || this.length < t || this.length < i)
      throw new RangeError("Out of range index");
    if (i <= t)
      return this;
    t = t >>> 0, i = i === void 0 ? this.length : i >>> 0, e || (e = 0);
    let c;
    if (typeof e == "number")
      for (c = t; c < i; ++c)
        this[c] = e;
    else {
      const l = a.isBuffer(e) ? e : a.from(e, o), m = l.length;
      if (m === 0)
        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
      for (c = 0; c < i - t; ++c)
        this[c + t] = l[c % m];
    }
    return this;
  };
  const ae = {};
  function be(r, e, t) {
    ae[r] = class extends t {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: e.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${r}]`, this.stack, delete this.name;
      }
      get code() {
        return r;
      }
      set code(o) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: o,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${r}]: ${this.message}`;
      }
    };
  }
  be(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(r) {
      return r ? `${r} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), be(
    "ERR_INVALID_ARG_TYPE",
    function(r, e) {
      return `The "${r}" argument must be of type number. Received type ${typeof e}`;
    },
    TypeError
  ), be(
    "ERR_OUT_OF_RANGE",
    function(r, e, t) {
      let i = `The value of "${r}" is out of range.`, o = t;
      return Number.isInteger(t) && Math.abs(t) > 2 ** 32 ? o = je(String(t)) : typeof t == "bigint" && (o = String(t), (t > BigInt(2) ** BigInt(32) || t < -(BigInt(2) ** BigInt(32))) && (o = je(o)), o += "n"), i += ` It must be ${e}. Received ${o}`, i;
    },
    RangeError
  );
  function je(r) {
    let e = "", t = r.length;
    const i = r[0] === "-" ? 1 : 0;
    for (; t >= i + 4; t -= 3)
      e = `_${r.slice(t - 3, t)}${e}`;
    return `${r.slice(0, t)}${e}`;
  }
  function ot(r, e, t) {
    ce(e, "offset"), (r[e] === void 0 || r[e + t] === void 0) && pe(e, r.length - (t + 1));
  }
  function ke(r, e, t, i, o, c) {
    if (r > t || r < e) {
      const l = typeof e == "bigint" ? "n" : "";
      let m;
      throw c > 3 ? e === 0 || e === BigInt(0) ? m = `>= 0${l} and < 2${l} ** ${(c + 1) * 8}${l}` : m = `>= -(2${l} ** ${(c + 1) * 8 - 1}${l}) and < 2 ** ${(c + 1) * 8 - 1}${l}` : m = `>= ${e}${l} and <= ${t}${l}`, new ae.ERR_OUT_OF_RANGE("value", m, r);
    }
    ot(i, o, c);
  }
  function ce(r, e) {
    if (typeof r != "number")
      throw new ae.ERR_INVALID_ARG_TYPE(e, "number", r);
  }
  function pe(r, e, t) {
    throw Math.floor(r) !== r ? (ce(r, t), new ae.ERR_OUT_OF_RANGE(t || "offset", "an integer", r)) : e < 0 ? new ae.ERR_BUFFER_OUT_OF_BOUNDS() : new ae.ERR_OUT_OF_RANGE(
      t || "offset",
      `>= ${t ? 1 : 0} and <= ${e}`,
      r
    );
  }
  const st = /[^+/0-9A-Za-z-_]/g;
  function at(r) {
    if (r = r.split("=")[0], r = r.trim().replace(st, ""), r.length < 2)
      return "";
    for (; r.length % 4 !== 0; )
      r = r + "=";
    return r;
  }
  function Ue(r, e) {
    e = e || 1 / 0;
    let t;
    const i = r.length;
    let o = null;
    const c = [];
    for (let l = 0; l < i; ++l) {
      if (t = r.charCodeAt(l), t > 55295 && t < 57344) {
        if (!o) {
          if (t > 56319) {
            (e -= 3) > -1 && c.push(239, 191, 189);
            continue;
          } else if (l + 1 === i) {
            (e -= 3) > -1 && c.push(239, 191, 189);
            continue;
          }
          o = t;
          continue;
        }
        if (t < 56320) {
          (e -= 3) > -1 && c.push(239, 191, 189), o = t;
          continue;
        }
        t = (o - 55296 << 10 | t - 56320) + 65536;
      } else
        o && (e -= 3) > -1 && c.push(239, 191, 189);
      if (o = null, t < 128) {
        if ((e -= 1) < 0)
          break;
        c.push(t);
      } else if (t < 2048) {
        if ((e -= 2) < 0)
          break;
        c.push(
          t >> 6 | 192,
          t & 63 | 128
        );
      } else if (t < 65536) {
        if ((e -= 3) < 0)
          break;
        c.push(
          t >> 12 | 224,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else if (t < 1114112) {
        if ((e -= 4) < 0)
          break;
        c.push(
          t >> 18 | 240,
          t >> 12 & 63 | 128,
          t >> 6 & 63 | 128,
          t & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return c;
  }
  function ct(r) {
    const e = [];
    for (let t = 0; t < r.length; ++t)
      e.push(r.charCodeAt(t) & 255);
    return e;
  }
  function lt(r, e) {
    let t, i, o;
    const c = [];
    for (let l = 0; l < r.length && !((e -= 2) < 0); ++l)
      t = r.charCodeAt(l), i = t >> 8, o = t % 256, c.push(o), c.push(i);
    return c;
  }
  function $e(r) {
    return s.toByteArray(at(r));
  }
  function ye(r, e, t, i) {
    let o;
    for (o = 0; o < i && !(o + t >= e.length || o >= r.length); ++o)
      e[o + t] = r[o];
    return o;
  }
  function K(r, e) {
    return r instanceof e || r != null && r.constructor != null && r.constructor.name != null && r.constructor.name === e.name;
  }
  function Ce(r) {
    return r !== r;
  }
  const ut = function() {
    const r = "0123456789abcdef", e = new Array(256);
    for (let t = 0; t < 16; ++t) {
      const i = t * 16;
      for (let o = 0; o < 16; ++o)
        e[i + o] = r[t] + r[o];
    }
    return e;
  }();
  function Q(r) {
    return typeof BigInt > "u" ? ft : r;
  }
  function ft() {
    throw new Error("BigInt not supported");
  }
})(Qe);
const It = Symbol(), ve = Object.getPrototypeOf, Me = /* @__PURE__ */ new WeakMap(), xt = (n) => n && (Me.has(n) ? Me.get(n) : ve(n) === Object.prototype || ve(n) === Array.prototype), Bt = (n) => xt(n) && n[It] || null, Ve = (n, s = !0) => {
  Me.set(n, s);
}, Le = (n) => typeof n == "object" && n !== null, te = /* @__PURE__ */ new WeakMap(), ge = /* @__PURE__ */ new WeakSet(), At = (n = Object.is, s = (w, I) => new Proxy(w, I), u = (w) => Le(w) && !ge.has(w) && (Array.isArray(w) || !(Symbol.iterator in w)) && !(w instanceof WeakMap) && !(w instanceof WeakSet) && !(w instanceof Error) && !(w instanceof Number) && !(w instanceof Date) && !(w instanceof String) && !(w instanceof RegExp) && !(w instanceof ArrayBuffer), h = (w) => {
  switch (w.status) {
    case "fulfilled":
      return w.value;
    case "rejected":
      throw w.reason;
    default:
      throw w;
  }
}, p = /* @__PURE__ */ new WeakMap(), d = (w, I, x = h) => {
  const C = p.get(w);
  if ((C == null ? void 0 : C[0]) === I)
    return C[1];
  const b = Array.isArray(w) ? [] : Object.create(Object.getPrototypeOf(w));
  return Ve(b, !0), p.set(w, [I, b]), Reflect.ownKeys(w).forEach((k) => {
    if (Object.getOwnPropertyDescriptor(b, k))
      return;
    const W = Reflect.get(w, k), Y = {
      value: W,
      enumerable: !0,
      // This is intentional to avoid copying with proxy-compare.
      // It's still non-writable, so it avoids assigning a value.
      configurable: !0
    };
    if (ge.has(W))
      Ve(W, !1);
    else if (W instanceof Promise)
      delete Y.value, Y.get = () => x(W);
    else if (te.has(W)) {
      const [D, fe] = te.get(
        W
      );
      Y.value = d(
        D,
        fe(),
        x
      );
    }
    Object.defineProperty(b, k, Y);
  }), b;
}, f = /* @__PURE__ */ new WeakMap(), a = [1, 1], g = (w) => {
  if (!Le(w))
    throw new Error("object required");
  const I = f.get(w);
  if (I)
    return I;
  let x = a[0];
  const C = /* @__PURE__ */ new Set(), b = (B, E = ++a[0]) => {
    x !== E && (x = E, C.forEach((y) => y(B, E)));
  };
  let k = a[1];
  const W = (B = ++a[1]) => (k !== B && !C.size && (k = B, D.forEach(([E]) => {
    const y = E[1](B);
    y > x && (x = y);
  })), x), Y = (B) => (E, y) => {
    const _ = [...E];
    _[1] = [B, ..._[1]], b(_, y);
  }, D = /* @__PURE__ */ new Map(), fe = (B, E) => {
    if (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 } && "production") !== "production" && D.has(B))
      throw new Error("prop listener already exists");
    if (C.size) {
      const y = E[3](Y(B));
      D.set(B, [E, y]);
    } else
      D.set(B, [E]);
  }, he = (B) => {
    var E;
    const y = D.get(B);
    y && (D.delete(B), (E = y[1]) == null || E.call(y));
  }, xe = (B) => (C.add(B), C.size === 1 && D.forEach(([y, _], X) => {
    if (({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 } && "production") !== "production" && _)
      throw new Error("remove already exists");
    const Z = y[3](Y(X));
    D.set(X, [y, Z]);
  }), () => {
    C.delete(B), C.size === 0 && D.forEach(([y, _], X) => {
      _ && (_(), D.set(X, [y]));
    });
  }), V = Array.isArray(w) ? [] : Object.create(Object.getPrototypeOf(w)), ne = s(V, {
    deleteProperty(B, E) {
      const y = Reflect.get(B, E);
      he(E);
      const _ = Reflect.deleteProperty(B, E);
      return _ && b(["delete", [E], y]), _;
    },
    set(B, E, y, _) {
      const X = Reflect.has(B, E), Z = Reflect.get(B, E, _);
      if (X && (n(Z, y) || f.has(y) && n(Z, f.get(y))))
        return !0;
      he(E), Le(y) && (y = Bt(y) || y);
      let ie = y;
      if (y instanceof Promise)
        y.then((G) => {
          y.status = "fulfilled", y.value = G, b(["resolve", [E], G]);
        }).catch((G) => {
          y.status = "rejected", y.reason = G, b(["reject", [E], G]);
        });
      else {
        !te.has(y) && u(y) && (ie = g(y));
        const G = !ge.has(ie) && te.get(ie);
        G && fe(E, G);
      }
      return Reflect.set(B, E, ie, _), b(["set", [E], y, Z]), !0;
    }
  });
  f.set(w, ne);
  const Ae = [
    V,
    W,
    d,
    xe
  ];
  return te.set(ne, Ae), Reflect.ownKeys(w).forEach((B) => {
    const E = Object.getOwnPropertyDescriptor(
      w,
      B
    );
    "value" in E && (ne[B] = w[B], delete E.value, delete E.writable), Object.defineProperty(V, B, E);
  }), ne;
}) => [
  // public functions
  g,
  // shared state
  te,
  ge,
  // internal things
  n,
  s,
  u,
  h,
  p,
  d,
  f,
  a
], [bt] = At();
function H(n = {}) {
  return bt(n);
}
function q(n, s, u) {
  const h = te.get(n);
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 } && "production") !== "production" && !h && console.warn("Please use proxy object");
  let p;
  const d = [], f = h[3];
  let a = !1;
  const w = f((I) => {
    if (d.push(I), u) {
      s(d.splice(0));
      return;
    }
    p || (p = Promise.resolve().then(() => {
      p = void 0, a && s(d.splice(0));
    }));
  });
  return a = !0, () => {
    a = !1, w();
  };
}
function Ut(n, s) {
  const u = te.get(n);
  ({ BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 } && "production") !== "production" && !u && console.warn("Please use proxy object");
  const [h, p, d] = u;
  return d(h, p(), s);
}
let Se;
const J = { ethereumClient: void 0, setEthereumClient(n) {
  Se = n;
}, client() {
  if (Se)
    return Se;
  throw new Error("ClientCtrl has no client set");
} }, M = H({ history: ["ConnectWallet"], view: "ConnectWallet", data: void 0 }), se = { state: M, subscribe(n) {
  return q(M, () => n(M));
}, push(n, s) {
  n !== M.view && (M.view = n, s && (M.data = s), M.history.push(n));
}, reset(n) {
  M.view = n, M.history = [n];
}, replace(n) {
  M.history.length > 1 && (M.history[M.history.length - 1] = n, M.view = n);
}, goBack() {
  if (M.history.length > 1) {
    M.history.pop();
    const [n] = M.history.slice(-1);
    M.view = n;
  }
}, setData(n) {
  M.data = n;
} }, P = { WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE", W3M_VERSION: "W3M_VERSION", W3M_PREFER_INJECTED_URL_FLAG: "w3mPreferInjected", RECOMMENDED_WALLET_AMOUNT: 9, isMobile() {
  return typeof window < "u" ? !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)) : !1;
}, isAndroid() {
  return P.isMobile() && navigator.userAgent.toLowerCase().includes("android");
}, isIos() {
  const n = navigator.userAgent.toLowerCase();
  return P.isMobile() && (n.includes("iphone") || n.includes("ipad"));
}, isHttpUrl(n) {
  return n.startsWith("http://") || n.startsWith("https://");
}, isArray(n) {
  return Array.isArray(n) && n.length > 0;
}, formatNativeUrl(n, s, u) {
  if (P.isHttpUrl(n))
    return this.formatUniversalUrl(n, s, u);
  let h = n;
  h.includes("://") || (h = n.replaceAll("/", "").replaceAll(":", ""), h = `${h}://`), this.setWalletConnectDeepLink(h, u);
  const p = encodeURIComponent(s);
  return `${h}wc?uri=${p}`;
}, formatUniversalUrl(n, s, u) {
  if (!P.isHttpUrl(n))
    return this.formatNativeUrl(n, s, u);
  let h = n;
  n.endsWith("/") && (h = n.slice(0, -1)), this.setWalletConnectDeepLink(h, u);
  const p = encodeURIComponent(s);
  return `${h}/wc?uri=${p}`;
}, async wait(n) {
  return new Promise((s) => {
    setTimeout(s, n);
  });
}, openHref(n, s) {
  window.open(n, s, "noreferrer noopener");
}, setWalletConnectDeepLink(n, s) {
  localStorage.setItem(P.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: n, name: s }));
}, setWalletConnectAndroidDeepLink(n) {
  const [s] = n.split("?");
  localStorage.setItem(P.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({ href: s, name: "Android" }));
}, removeWalletConnectDeepLink() {
  localStorage.removeItem(P.WALLETCONNECT_DEEPLINK_CHOICE);
}, setWeb3ModalVersionInStorage() {
  typeof localStorage < "u" && localStorage.setItem(P.W3M_VERSION, "2.4.2");
}, getWalletRouterData() {
  var n;
  const s = (n = se.state.data) == null ? void 0 : n.Wallet;
  if (!s)
    throw new Error('Missing "Wallet" view data');
  return s;
}, getSwitchNetworkRouterData() {
  var n;
  const s = (n = se.state.data) == null ? void 0 : n.SwitchNetwork;
  if (!s)
    throw new Error('Missing "SwitchNetwork" view data');
  return s;
}, isPreferInjectedFlag() {
  return typeof location < "u" ? new URLSearchParams(location.search).has(P.W3M_PREFER_INJECTED_URL_FLAG) : !1;
} }, Ct = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")), N = H({ enabled: Ct, userSessionId: "", events: [], connectedWalletId: void 0 }), Ft = { state: N, subscribe(n) {
  return q(N.events, () => n(Ut(N.events[N.events.length - 1])));
}, initialize() {
  N.enabled && typeof crypto < "u" && (N.userSessionId = crypto.randomUUID());
}, setConnectedWalletId(n) {
  N.connectedWalletId = n;
}, click(n) {
  if (N.enabled) {
    const s = { type: "CLICK", name: n.name, userSessionId: N.userSessionId, timestamp: Date.now(), data: n };
    N.events.push(s);
  }
}, track(n) {
  if (N.enabled) {
    const s = { type: "TRACK", name: n.name, userSessionId: N.userSessionId, timestamp: Date.now(), data: n };
    N.events.push(s);
  }
}, view(n) {
  if (N.enabled) {
    const s = { type: "VIEW", name: n.name, userSessionId: N.userSessionId, timestamp: Date.now(), data: n };
    N.events.push(s);
  }
} }, T = H({ selectedChain: void 0, chains: void 0, standaloneChains: void 0, standaloneUri: void 0, isStandalone: !1, isAuth: !1, isCustomDesktop: !1, isCustomMobile: !1, isDataLoaded: !1, isUiLoaded: !1, isPreferInjected: !1, walletConnectVersion: 1 }), O = { state: T, subscribe(n) {
  return q(T, () => n(T));
}, setChains(n) {
  T.chains = n;
}, setStandaloneChains(n) {
  T.standaloneChains = n;
}, setStandaloneUri(n) {
  T.standaloneUri = n;
}, getSelectedChain() {
  const n = J.client().getNetwork().chain;
  return n && (T.selectedChain = n), T.selectedChain;
}, setSelectedChain(n) {
  T.selectedChain = n;
}, setIsStandalone(n) {
  T.isStandalone = n;
}, setIsCustomDesktop(n) {
  T.isCustomDesktop = n;
}, setIsCustomMobile(n) {
  T.isCustomMobile = n;
}, setIsDataLoaded(n) {
  T.isDataLoaded = n;
}, setIsUiLoaded(n) {
  T.isUiLoaded = n;
}, setWalletConnectVersion(n) {
  T.walletConnectVersion = n;
}, setIsPreferInjected(n) {
  T.isPreferInjected = n;
}, setIsAuth(n) {
  T.isAuth = n;
} }, me = H({ projectId: "", mobileWallets: void 0, desktopWallets: void 0, walletImages: void 0, chainImages: void 0, tokenImages: void 0, tokenContracts: void 0, standaloneChains: void 0, enableStandaloneMode: !1, enableAuthMode: !1, enableNetworkView: !1, enableAccountView: !0, enableExplorer: !0, defaultChain: void 0, explorerExcludedWalletIds: void 0, explorerRecommendedWalletIds: void 0, termsOfServiceUrl: void 0, privacyPolicyUrl: void 0 }), re = { state: me, subscribe(n) {
  return q(me, () => n(me));
}, setConfig(n) {
  var s, u, h, p;
  Ft.initialize(), O.setStandaloneChains(n.standaloneChains), O.setIsStandalone(!!((s = n.standaloneChains) != null && s.length) || !!n.enableStandaloneMode), O.setIsAuth(!!n.enableAuthMode), O.setIsCustomMobile(!!((u = n.mobileWallets) != null && u.length)), O.setIsCustomDesktop(!!((h = n.desktopWallets) != null && h.length)), O.setWalletConnectVersion((p = n.walletConnectVersion) != null ? p : 1), O.state.isStandalone || (O.setChains(J.client().chains), O.setIsPreferInjected(J.client().isInjectedProviderInstalled() && P.isPreferInjectedFlag())), n.defaultChain && O.setSelectedChain(n.defaultChain), P.setWeb3ModalVersionInStorage(), Object.assign(me, n);
} }, S = H({ address: void 0, profileName: void 0, profileAvatar: void 0, profileLoading: !1, balanceLoading: !1, balance: void 0, isConnected: !1 }), Lt = { state: S, subscribe(n) {
  return q(S, () => n(S));
}, getAccount() {
  const n = J.client().getAccount();
  S.address = n.address, S.isConnected = n.isConnected;
}, async fetchProfile(n, s) {
  var u;
  try {
    S.profileLoading = !0;
    const h = s ?? S.address, p = (u = O.state.chains) == null ? void 0 : u.find((d) => d.id === 1);
    if (h && p) {
      const d = await J.client().fetchEnsName({ address: h, chainId: 1 });
      if (d) {
        const f = await J.client().fetchEnsAvatar({ name: d, chainId: 1 });
        f && await n(f), S.profileAvatar = f;
      }
      S.profileName = d;
    }
  } finally {
    S.profileLoading = !1;
  }
}, async fetchBalance(n) {
  try {
    const { chain: s } = J.client().getNetwork(), { tokenContracts: u } = re.state;
    let h;
    s && u && (h = u[s.id]), S.balanceLoading = !0;
    const p = n ?? S.address;
    if (p) {
      const d = await J.client().fetchBalance({ address: p, token: h });
      S.balance = { amount: d.formatted, symbol: d.symbol };
    }
  } finally {
    S.balanceLoading = !1;
  }
}, setAddress(n) {
  S.address = n;
}, setIsConnected(n) {
  S.isConnected = n;
}, resetBalance() {
  S.balance = void 0;
}, resetAccount() {
  S.address = void 0, S.isConnected = !1, S.profileName = void 0, S.profileAvatar = void 0, S.balance = void 0;
} }, Oe = "https://explorer-api.walletconnect.com";
async function Ee(n, s) {
  const u = new URL(n, Oe);
  return u.searchParams.append("projectId", re.state.projectId), Object.entries(s).forEach(([h, p]) => {
    p && u.searchParams.append(h, String(p));
  }), (await fetch(u)).json();
}
const ee = { async getDesktopListings(n) {
  return Ee("/w3m/v1/getDesktopListings", n);
}, async getMobileListings(n) {
  return Ee("/w3m/v1/getMobileListings", n);
}, async getInjectedListings(n) {
  return Ee("/w3m/v1/getInjectedListings", n);
}, async getAllListings(n) {
  return Ee("/w3m/v1/getAllListings", n);
}, getWalletImageUrl(n) {
  return `${Oe}/w3m/v1/getWalletImage/${n}?projectId=${re.state.projectId}`;
}, getAssetImageUrl(n) {
  return `${Oe}/w3m/v1/getAssetImage/${n}?projectId=${re.state.projectId}`;
} };
var St = Object.defineProperty, Ge = Object.getOwnPropertySymbols, Rt = Object.prototype.hasOwnProperty, Mt = Object.prototype.propertyIsEnumerable, Ke = (n, s, u) => s in n ? St(n, s, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[s] = u, Ot = (n, s) => {
  for (var u in s || (s = {}))
    Rt.call(s, u) && Ke(n, u, s[u]);
  if (Ge)
    for (var u of Ge(s))
      Mt.call(s, u) && Ke(n, u, s[u]);
  return n;
};
const ze = P.isMobile(), $ = H({ wallets: { listings: [], total: 0, page: 1 }, injectedWallets: [], search: { listings: [], total: 0, page: 1 }, recomendedWallets: [] }), Gt = { state: $, async getRecomendedWallets() {
  const { explorerRecommendedWalletIds: n, explorerExcludedWalletIds: s } = re.state;
  if (n === "NONE" || s === "ALL" && !n)
    return $.recomendedWallets;
  if (P.isArray(n)) {
    const u = { recommendedIds: n.join(",") }, { listings: h } = await ee.getAllListings(u), p = Object.values(h);
    p.sort((d, f) => {
      const a = n.indexOf(d.id), g = n.indexOf(f.id);
      return a - g;
    }), $.recomendedWallets = p;
  } else {
    const { standaloneChains: u, walletConnectVersion: h, isAuth: p } = O.state, d = u == null ? void 0 : u.join(","), f = P.isArray(s), a = { page: 1, sdks: p ? "auth_v1" : void 0, entries: P.RECOMMENDED_WALLET_AMOUNT, chains: d, version: h, excludedIds: f ? s.join(",") : void 0 }, { listings: g } = ze ? await ee.getMobileListings(a) : await ee.getDesktopListings(a);
    $.recomendedWallets = Object.values(g);
  }
  return $.recomendedWallets;
}, async getWallets(n) {
  const s = Ot({}, n), { explorerRecommendedWalletIds: u, explorerExcludedWalletIds: h } = re.state, { recomendedWallets: p } = $;
  if (h === "ALL")
    return $.wallets;
  s.search || (p.length ? s.excludedIds = p.map((x) => x.id).join(",") : P.isArray(u) && (s.excludedIds = u.join(","))), P.isArray(h) && (s.excludedIds = [s.excludedIds, h].filter(Boolean).join(",")), O.state.isAuth && (s.sdks = "auth_v1");
  const { page: d, search: f } = n, { listings: a, total: g } = ze ? await ee.getMobileListings(s) : await ee.getDesktopListings(s), w = Object.values(a), I = f ? "search" : "wallets";
  return $[I] = { listings: [...$[I].listings, ...w], total: g, page: d ?? 1 }, { listings: w, total: g };
}, async getInjectedWallets() {
  const { listings: n } = await ee.getInjectedListings({}), s = Object.values(n);
  return $.injectedWallets = s, $.injectedWallets;
}, getWalletImageUrl(n) {
  return ee.getWalletImageUrl(n);
}, getAssetImageUrl(n) {
  return ee.getAssetImageUrl(n);
}, resetSearch() {
  $.search = { listings: [], total: 0, page: 1 };
} }, de = H({ pairingUri: "", pairingError: !1 }), He = { state: de, subscribe(n) {
  return q(de, () => n(de));
}, setPairingUri(n) {
  de.pairingUri = n;
}, setPairingError(n) {
  de.pairingError = n;
} }, ue = H({ open: !1 }), Re = { state: ue, subscribe(n) {
  return q(ue, () => n(ue));
}, async open(n) {
  return new Promise((s) => {
    const { isStandalone: u, isUiLoaded: h, isDataLoaded: p, isPreferInjected: d, selectedChain: f } = O.state, { isConnected: a } = Lt.state, { enableNetworkView: g } = re.state;
    if (u)
      O.setStandaloneUri(n == null ? void 0 : n.uri), O.setStandaloneChains(n == null ? void 0 : n.standaloneChains), se.reset("ConnectWallet");
    else if (n != null && n.route)
      se.reset(n.route);
    else if (a)
      se.reset("Account");
    else if (g)
      se.reset("SelectNetwork");
    else if (d) {
      J.client().connectConnector("injected", f == null ? void 0 : f.id).catch((I) => console.error(I)), s();
      return;
    } else
      se.reset("ConnectWallet");
    const { pairingUri: w } = He.state;
    if (h && p && (u || w || a))
      ue.open = !0, s();
    else {
      const I = setInterval(() => {
        const x = O.state, C = He.state;
        x.isUiLoaded && x.isDataLoaded && (x.isStandalone || C.pairingUri || a) && (clearInterval(I), ue.open = !0, s());
      }, 200);
    }
  });
}, close() {
  ue.open = !1;
} };
var Tt = Object.defineProperty, Ye = Object.getOwnPropertySymbols, Pt = Object.prototype.hasOwnProperty, Dt = Object.prototype.propertyIsEnumerable, Je = (n, s, u) => s in n ? Tt(n, s, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[s] = u, _t = (n, s) => {
  for (var u in s || (s = {}))
    Pt.call(s, u) && Je(n, u, s[u]);
  if (Ye)
    for (var u of Ye(s))
      Dt.call(s, u) && Je(n, u, s[u]);
  return n;
};
function Nt() {
  return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches;
}
const we = H({ themeMode: Nt() ? "dark" : "light" }), qe = { state: we, subscribe(n) {
  return q(we, () => n(we));
}, setThemeConfig(n) {
  const { themeMode: s, themeVariables: u } = n;
  s && (we.themeMode = s), u && (we.themeVariables = _t({}, u));
} }, oe = H({ open: !1, message: "", variant: "success" }), Kt = { state: oe, subscribe(n) {
  return q(oe, () => n(oe));
}, openToast(n, s) {
  oe.open = !0, oe.message = n, oe.variant = s;
}, closeToast() {
  oe.open = !1;
} };
typeof window < "u" && (window.Buffer || (window.Buffer = Qe.Buffer), window.global || (window.global = window), window.process || (window.process = { env: {} }));
var Wt = Object.defineProperty, Xe = Object.getOwnPropertySymbols, jt = Object.prototype.hasOwnProperty, kt = Object.prototype.propertyIsEnumerable, Ze = (n, s, u) => s in n ? Wt(n, s, { enumerable: !0, configurable: !0, writable: !0, value: u }) : n[s] = u, $t = (n, s) => {
  for (var u in s || (s = {}))
    jt.call(s, u) && Ze(n, u, s[u]);
  if (Xe)
    for (var u of Xe(s))
      kt.call(s, u) && Ze(n, u, s[u]);
  return n;
};
class vt {
  constructor(s) {
    this.openModal = Re.open, this.closeModal = Re.close, this.subscribeModal = Re.subscribe, this.setTheme = qe.setThemeConfig, qe.setThemeConfig(s), re.setConfig($t({ enableStandaloneMode: !0 }, s)), this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await import("./index.es-51456026.js");
      const s = document.createElement("w3m-modal");
      document.body.insertAdjacentElement("beforeend", s), O.setIsUiLoaded(!0);
    }
  }
}
const zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Web3Modal: vt
}, Symbol.toStringTag, { value: "Module" }));
export {
  J as C,
  Ft as H,
  Lt as K,
  He as _,
  qe as a,
  se as b,
  P as c,
  O as d,
  zt as i,
  Gt as n,
  Kt as o,
  Re as s,
  re as y
};

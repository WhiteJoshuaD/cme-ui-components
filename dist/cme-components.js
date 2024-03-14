import { jsx as g, jsxs as z } from "react/jsx-runtime";
import * as Re from "react";
import Ce, { useCallback as xe, forwardRef as pe, Children as _e, isValidElement as Me, createElement as H, cloneElement as It, Fragment as hr, useEffect as Te, createContext as Ve, useMemo as fe, useContext as it, useRef as W, useState as at, useLayoutEffect as Pt, useDebugValue as br } from "react";
import "react-dom";
function te() {
  return te = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, te.apply(this, arguments);
}
function gr(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Lt(...e) {
  return (t) => e.forEach(
    (r) => gr(r, t)
  );
}
function yr(...e) {
  return xe(Lt(...e), e);
}
const ct = /* @__PURE__ */ pe((e, t) => {
  const { children: r, ...n } = e, o = _e.toArray(r), s = o.find(wr);
  if (s) {
    const i = s.props.children, a = o.map((c) => c === s ? _e.count(i) > 1 ? _e.only(null) : /* @__PURE__ */ Me(i) ? i.props.children : null : c);
    return /* @__PURE__ */ H(Xe, te({}, n, {
      ref: t
    }), /* @__PURE__ */ Me(i) ? /* @__PURE__ */ It(i, void 0, a) : null);
  }
  return /* @__PURE__ */ H(Xe, te({}, n, {
    ref: t
  }), r);
});
ct.displayName = "Slot";
const Xe = /* @__PURE__ */ pe((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ Me(r) ? /* @__PURE__ */ It(r, {
    ...xr(n, r.props),
    ref: t ? Lt(t, r.ref) : r.ref
  }) : _e.count(r) > 1 ? _e.only(null) : null;
});
Xe.displayName = "SlotClone";
const vr = ({ children: e }) => /* @__PURE__ */ H(hr, null, e);
function wr(e) {
  return /* @__PURE__ */ Me(e) && e.type === vr;
}
function xr(e, t) {
  const r = {
    ...t
  };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...a) => {
      s(...a), o(...a);
    } : o && (r[n] = o) : n === "style" ? r[n] = {
      ...o,
      ...s
    } : n === "className" && (r[n] = [
      o,
      s
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
function Dt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Dt(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function _r() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Dt(e)) && (n && (n += " "), n += t);
  return n;
}
const xt = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, _t = _r, Mt = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return _t(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((l) => {
    const d = r == null ? void 0 : r[l], u = s == null ? void 0 : s[l];
    if (d === null)
      return null;
    const f = xt(d) || xt(u);
    return o[l][f];
  }), a = r && Object.entries(r).reduce((l, d) => {
    let [u, f] = d;
    return f === void 0 || (l[u] = f), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, d) => {
    let { class: u, className: f, ...h } = d;
    return Object.entries(h).every((y) => {
      let [m, v] = y;
      return Array.isArray(v) ? v.includes({
        ...s,
        ...a
      }[m]) : {
        ...s,
        ...a
      }[m] === v;
    }) ? [
      ...l,
      u,
      f
    ] : l;
  }, []);
  return _t(e, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function Vt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = Vt(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Sr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = Vt(e)) && (n && (n += " "), n += t);
  return n;
}
const lt = "-";
function Er(e) {
  const t = Cr(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function o(i) {
    const a = i.split(lt);
    return a[0] === "" && a.length !== 1 && a.shift(), qt(a, t) || Rr(i);
  }
  function s(i, a) {
    const c = r[i] || [];
    return a && n[i] ? [...c, ...n[i]] : c;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: s
  };
}
function qt(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? qt(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(lt);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}
const St = /^\[(.+)\]$/;
function Rr(e) {
  if (St.test(e)) {
    const t = St.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Cr(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Or(Object.entries(e.classGroups), r).forEach(([s, i]) => {
    Ze(i, n, s, t);
  }), n;
}
function Ze(e, t, r, n) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Et(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Tr(o)) {
        Ze(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Ze(i, Et(t, s), r, n);
    });
  });
}
function Et(e, t) {
  let r = e;
  return t.split(lt).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function Tr(e) {
  return e.isThemeGetter;
}
function Or(e, t) {
  return t ? e.map(([r, n]) => {
    const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
    return [r, o];
  }) : e;
}
function $r(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(s, i) {
    r.set(s, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(s) {
      let i = r.get(s);
      if (i !== void 0)
        return i;
      if ((i = n.get(s)) !== void 0)
        return o(s, i), i;
    },
    set(s, i) {
      r.has(s) ? r.set(s, i) : o(s, i);
    }
  };
}
const zt = "!";
function Ar(e) {
  const t = e.separator, r = t.length === 1, n = t[0], o = t.length;
  return function(i) {
    const a = [];
    let c = 0, l = 0, d;
    for (let m = 0; m < i.length; m++) {
      let v = i[m];
      if (c === 0) {
        if (v === n && (r || i.slice(m, m + o) === t)) {
          a.push(i.slice(l, m)), l = m + o;
          continue;
        }
        if (v === "/") {
          d = m;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const u = a.length === 0 ? i : i.substring(l), f = u.startsWith(zt), h = f ? u.substring(1) : u, y = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: y
    };
  };
}
function kr(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function Nr(e) {
  return {
    cache: $r(e.cacheSize),
    splitModifiers: Ar(e),
    ...Er(e)
  };
}
const Ir = /\s+/;
function Pr(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = /* @__PURE__ */ new Set();
  return e.trim().split(Ir).map((i) => {
    const {
      modifiers: a,
      hasImportantModifier: c,
      baseClassName: l,
      maybePostfixModifierPosition: d
    } = r(i);
    let u = n(d ? l.substring(0, d) : l), f = !!d;
    if (!u) {
      if (!d)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (u = n(l), !u)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      f = !1;
    }
    const h = kr(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? h + zt : h,
      classGroupId: u,
      originalClassName: i,
      hasPostfixModifier: f
    };
  }).reverse().filter((i) => {
    if (!i.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: c,
      hasPostfixModifier: l
    } = i, d = a + c;
    return s.has(d) ? !1 : (s.add(d), o(c, l).forEach((u) => s.add(a + u)), !0);
  }).reverse().map((i) => i.originalClassName).join(" ");
}
function Lr() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = jt(t)) && (n && (n += " "), n += r);
  return n;
}
function jt(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = jt(e[n])) && (r && (r += " "), r += t);
  return r;
}
function Dr(e, ...t) {
  let r, n, o, s = i;
  function i(c) {
    const l = t.reduce((d, u) => u(d), e());
    return r = Nr(l), n = r.cache.get, o = r.cache.set, s = a, a(c);
  }
  function a(c) {
    const l = n(c);
    if (l)
      return l;
    const d = Pr(c, r);
    return o(c, d), d;
  }
  return function() {
    return s(Lr.apply(null, arguments));
  };
}
function $(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Ut = /^\[(?:([a-z-]+):)?(.+)\]$/i, Mr = /^\d+\/\d+$/, Vr = /* @__PURE__ */ new Set(["px", "full", "screen"]), qr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ur = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Fr = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Q(e) {
  return le(e) || Vr.has(e) || Mr.test(e);
}
function ne(e) {
  return he(e, "length", Xr);
}
function le(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ne(e) {
  return he(e, "number", le);
}
function ye(e) {
  return !!e && Number.isInteger(Number(e));
}
function Wr(e) {
  return e.endsWith("%") && le(e.slice(0, -1));
}
function b(e) {
  return Ut.test(e);
}
function oe(e) {
  return qr.test(e);
}
const Br = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Gr(e) {
  return he(e, Br, Ft);
}
function Hr(e) {
  return he(e, "position", Ft);
}
const Kr = /* @__PURE__ */ new Set(["image", "url"]);
function Jr(e) {
  return he(e, Kr, Qr);
}
function Yr(e) {
  return he(e, "", Zr);
}
function ve() {
  return !0;
}
function he(e, t, r) {
  const n = Ut.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function Xr(e) {
  return zr.test(e) && !jr.test(e);
}
function Ft() {
  return !1;
}
function Zr(e) {
  return Ur.test(e);
}
function Qr(e) {
  return Fr.test(e);
}
function en() {
  const e = $("colors"), t = $("spacing"), r = $("blur"), n = $("brightness"), o = $("borderColor"), s = $("borderRadius"), i = $("borderSpacing"), a = $("borderWidth"), c = $("contrast"), l = $("grayscale"), d = $("hueRotate"), u = $("invert"), f = $("gap"), h = $("gradientColorStops"), y = $("gradientColorStopPositions"), m = $("inset"), v = $("margin"), p = $("opacity"), A = $("padding"), C = $("saturate"), w = $("scale"), E = $("sepia"), x = $("skew"), D = $("space"), R = $("translate"), k = () => ["auto", "contain", "none"], I = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", b, t], _ = () => [b, t], V = () => ["", Q, ne], B = () => ["auto", le, b], Oe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ce = () => ["solid", "dashed", "dotted", "double", "none"], be = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], re = () => ["", "0", b], $e = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [le, Ne], G = () => [le, b];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ve],
      spacing: [Q, ne],
      blur: ["none", "", oe, b],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", oe, b],
      borderSpacing: _(),
      borderWidth: V(),
      contrast: U(),
      grayscale: re(),
      hueRotate: G(),
      invert: re(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Wr, ne],
      inset: j(),
      margin: j(),
      opacity: U(),
      padding: _(),
      saturate: U(),
      scale: U(),
      sepia: re(),
      skew: G(),
      space: _(),
      translate: _()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", b]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [oe]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": $e()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": $e()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Oe(), b]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [m]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [m]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [m]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [m]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [m]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [m]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [m]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [m]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [m]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ye, b]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: j()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", b]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: re()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: re()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ye, b]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ve]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ye, b]
        }, b]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ve]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ye, b]
        }, b]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", b]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...K()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...K(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...K(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [A]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [A]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [A]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [A]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [A]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [A]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [A]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [A]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [A]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [D]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", b, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [b, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [b, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [oe]
        }, oe]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [b, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [b, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [b, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [b, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", oe, ne]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Ne]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ve]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", b]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", le, Ne]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Q, b]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", b]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", b]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [p]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [p]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Q, ne]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Q, b]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: _()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", b]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", b]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [p]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Oe(), Hr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Gr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Jr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [p]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ce(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [p]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ce()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ce()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Q, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Q, ne]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: V()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [p]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Q, ne]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", oe, Yr]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ve]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [p]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": be()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": be()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", oe, b]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [u]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [u]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [p]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", b]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: G()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", b]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: G()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", b]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [w]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [w]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [w]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ye, b]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [R]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [R]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [x]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [x]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", b]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", b]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": _()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", b]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Q, ne, Ne]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const tn = /* @__PURE__ */ Dr(en);
function me(...e) {
  return tn(Sr(e));
}
const rn = Mt(
  "cme-inline-flex cme-items-center cme-justify-center cme-whitespace-nowrap cme-rounded-md cme-text-sm cme-font-medium cme-ring-offset-background cme-transition-colors focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 disabled:cme-pointer-events-none disabled:cme-opacity-50",
  {
    variants: {
      variant: {
        default: "cme-bg-primary cme-text-primary-foreground hover:cme-bg-primary/90",
        destructive: "cme-bg-destructive cme-text-destructive-foreground hover:cme-bg-destructive/90",
        outline: "cme-border cme-border-input cme-bg-background hover:cme-bg-accent hover:cme-text-accent-foreground",
        secondary: "cme-bg-secondary cme-text-secondary-foreground hover:cme-bg-secondary/80",
        ghost: "hover:cme-bg-accent hover:cme-text-accent-foreground",
        link: "cme-text-primary cme-underline-offset-4 hover:cme-underline"
      },
      size: {
        default: "cme-h-10 cme-px-4 cme-py-2",
        sm: "cme-h-9 cme-rounded-md cme-px-3",
        lg: "cme-h-11 cme-rounded-md cme-px-8",
        icon: "cme-h-10 cme-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Wt = Re.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...o }, s) => /* @__PURE__ */ g(
    n ? ct : "button",
    {
      className: me(rn({ variant: t, size: r, className: e })),
      ref: s,
      ...o
    }
  )
);
Wt.displayName = "Button";
const de = Re.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ g(
    "input",
    {
      type: t,
      className: me(
        "cme-flex cme-h-10 cme-w-full cme-rounded-md cme-border cme-border-input cme-bg-background cme-px-3 cme-py-2 cme-text-sm cme-ring-offset-background file:cme-border-0 file:cme-bg-transparent file:cme-text-sm file:cme-font-medium placeholder:cme-text-muted-foreground focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 disabled:cme-cursor-not-allowed disabled:cme-opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
de.displayName = "Input";
const nn = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ut = nn.reduce((e, t) => {
  const r = /* @__PURE__ */ pe((n, o) => {
    const { asChild: s, ...i } = n, a = s ? ct : t;
    return Te(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ H(a, te({}, i, {
      ref: o
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {}), on = /* @__PURE__ */ pe((e, t) => /* @__PURE__ */ H(ut.label, te({}, e, {
  ref: t,
  onMouseDown: (r) => {
    var n;
    (n = e.onMouseDown) === null || n === void 0 || n.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault();
  }
}))), Bt = on, sn = Mt(
  "cme-text-sm cme-font-medium cme-leading-none peer-disabled:cme-cursor-not-allowed peer-disabled:cme-opacity-70"
), se = Re.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g(
  Bt,
  {
    ref: r,
    className: me(sn(), e),
    ...t
  }
));
se.displayName = Bt.displayName;
function an(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function cn(e, t = []) {
  let r = [];
  function n(s, i) {
    const a = /* @__PURE__ */ Ve(i), c = r.length;
    r = [
      ...r,
      i
    ];
    function l(u) {
      const { scope: f, children: h, ...y } = u, m = (f == null ? void 0 : f[e][c]) || a, v = fe(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ H(m.Provider, {
        value: v
      }, h);
    }
    function d(u, f) {
      const h = (f == null ? void 0 : f[e][c]) || a, y = it(h);
      if (y)
        return y;
      if (i !== void 0)
        return i;
      throw new Error(`\`${u}\` must be used within \`${s}\``);
    }
    return l.displayName = s + "Provider", [
      l,
      d
    ];
  }
  const o = () => {
    const s = r.map((i) => /* @__PURE__ */ Ve(i));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || s;
      return fe(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: c
          }
        }),
        [
          a,
          c
        ]
      );
    };
  };
  return o.scopeName = e, [
    n,
    ln(o, ...t)
  ];
}
function ln(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const n = e.map(
      (o) => ({
        useScope: o(),
        scopeName: o.scopeName
      })
    );
    return function(s) {
      const i = n.reduce((a, { useScope: c, scopeName: l }) => {
        const u = c(s)[`__scope${l}`];
        return {
          ...a,
          ...u
        };
      }, {});
      return fe(
        () => ({
          [`__scope${t.scopeName}`]: i
        }),
        [
          i
        ]
      );
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Gt(e) {
  const t = W(e);
  return Te(() => {
    t.current = e;
  }), fe(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
function un({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, o] = dn({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, i = s ? e : n, a = Gt(r), c = xe((l) => {
    if (s) {
      const u = typeof l == "function" ? l(e) : l;
      u !== e && a(u);
    } else
      o(l);
  }, [
    s,
    e,
    o,
    a
  ]);
  return [
    i,
    c
  ];
}
function dn({ defaultProp: e, onChange: t }) {
  const r = at(e), [n] = r, o = W(n), s = Gt(t);
  return Te(() => {
    o.current !== n && (s(n), o.current = n);
  }, [
    n,
    o,
    s
  ]), r;
}
function fn(e) {
  const t = W({
    value: e,
    previous: e
  });
  return fe(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const mn = globalThis != null && globalThis.document ? Pt : () => {
};
function pn(e) {
  const [t, r] = at(void 0);
  return mn(() => {
    if (e) {
      r({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let i, a;
        if ("borderBoxSize" in s) {
          const c = s.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          i = l.inlineSize, a = l.blockSize;
        } else
          i = e.offsetWidth, a = e.offsetHeight;
        r({
          width: i,
          height: a
        });
      });
      return n.observe(e, {
        box: "border-box"
      }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [
    e
  ]), t;
}
const Ht = "Switch", [hn, $o] = cn(Ht), [bn, gn] = hn(Ht), yn = /* @__PURE__ */ pe((e, t) => {
  const { __scopeSwitch: r, name: n, checked: o, defaultChecked: s, required: i, disabled: a, value: c = "on", onCheckedChange: l, ...d } = e, [u, f] = at(null), h = yr(
    t,
    (A) => f(A)
  ), y = W(!1), m = u ? !!u.closest("form") : !0, [v = !1, p] = un({
    prop: o,
    defaultProp: s,
    onChange: l
  });
  return /* @__PURE__ */ H(bn, {
    scope: r,
    checked: v,
    disabled: a
  }, /* @__PURE__ */ H(ut.button, te({
    type: "button",
    role: "switch",
    "aria-checked": v,
    "aria-required": i,
    "data-state": Kt(v),
    "data-disabled": a ? "" : void 0,
    disabled: a,
    value: c
  }, d, {
    ref: h,
    onClick: an(e.onClick, (A) => {
      p(
        (C) => !C
      ), m && (y.current = A.isPropagationStopped(), y.current || A.stopPropagation());
    })
  })), m && /* @__PURE__ */ H(xn, {
    control: u,
    bubbles: !y.current,
    name: n,
    value: c,
    checked: v,
    required: i,
    disabled: a,
    style: {
      transform: "translateX(-100%)"
    }
  }));
}), vn = "SwitchThumb", wn = /* @__PURE__ */ pe((e, t) => {
  const { __scopeSwitch: r, ...n } = e, o = gn(vn, r);
  return /* @__PURE__ */ H(ut.span, te({
    "data-state": Kt(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, n, {
    ref: t
  }));
}), xn = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, s = W(null), i = fn(r), a = pn(t);
  return Te(() => {
    const c = s.current, l = window.HTMLInputElement.prototype, u = Object.getOwnPropertyDescriptor(l, "checked").set;
    if (i !== r && u) {
      const f = new Event("click", {
        bubbles: n
      });
      u.call(c, r), c.dispatchEvent(f);
    }
  }, [
    i,
    r,
    n
  ]), /* @__PURE__ */ H("input", te({
    type: "checkbox",
    "aria-hidden": !0,
    defaultChecked: r
  }, o, {
    tabIndex: -1,
    ref: s,
    style: {
      ...e.style,
      ...a,
      position: "absolute",
      pointerEvents: "none",
      opacity: 0,
      margin: 0
    }
  }));
};
function Kt(e) {
  return e ? "checked" : "unchecked";
}
const Jt = yn, _n = wn, Yt = Re.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g(
  Jt,
  {
    className: me(
      "cme-peer cme-inline-flex cme-h-6 cme-w-11 cme-shrink-0 cme-cursor-pointer cme-items-center cme-rounded-full cme-border-2 cme-border-transparent cme-transition-colors focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 focus-visible:cme-ring-offset-background disabled:cme-cursor-not-allowed disabled:cme-opacity-50 data-[state=checked]:cme-bg-primary data-[state=unchecked]:cme-bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ g(
      _n,
      {
        className: me(
          "cme-pointer-events-none cme-block cme-h-5 cme-w-5 cme-rounded-full cme-bg-background cme-shadow-lg cme-ring-0 cme-transition-transform data-[state=checked]:cme-translate-x-5 data-[state=unchecked]:cme-translate-x-0"
        )
      }
    )
  }
));
Yt.displayName = Jt.displayName;
const Xt = Re.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ g(
    "textarea",
    {
      className: me(
        "cme-flex cme-min-h-[80px] cme-w-full cme-rounded-md cme-border cme-border-input cme-bg-background cme-px-3 cme-py-2 cme-text-sm cme-ring-offset-background placeholder:cme-text-muted-foreground focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 disabled:cme-cursor-not-allowed disabled:cme-opacity-50",
        e
      ),
      ref: r,
      ...t
    }
  )
);
Xt.displayName = "Textarea";
var Qe = { exports: {} }, Fe = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rt;
function Sn() {
  if (Rt)
    return Fe;
  Rt = 1;
  var e = Ce;
  function t(u, f) {
    return u === f && (u !== 0 || 1 / u === 1 / f) || u !== u && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, s = e.useLayoutEffect, i = e.useDebugValue;
  function a(u, f) {
    var h = f(), y = n({ inst: { value: h, getSnapshot: f } }), m = y[0].inst, v = y[1];
    return s(function() {
      m.value = h, m.getSnapshot = f, c(m) && v({ inst: m });
    }, [u, h, f]), o(function() {
      return c(m) && v({ inst: m }), u(function() {
        c(m) && v({ inst: m });
      });
    }, [u]), i(h), h;
  }
  function c(u) {
    var f = u.getSnapshot;
    u = u.value;
    try {
      var h = f();
      return !r(u, h);
    } catch {
      return !0;
    }
  }
  function l(u, f) {
    return f();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return Fe.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, Fe;
}
var We = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function En() {
  return Ct || (Ct = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ce, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(C) {
      {
        for (var w = arguments.length, E = new Array(w > 1 ? w - 1 : 0), x = 1; x < w; x++)
          E[x - 1] = arguments[x];
        n("error", C, E);
      }
    }
    function n(C, w, E) {
      {
        var x = t.ReactDebugCurrentFrame, D = x.getStackAddendum();
        D !== "" && (w += "%s", E = E.concat([D]));
        var R = E.map(function(k) {
          return String(k);
        });
        R.unshift("Warning: " + w), Function.prototype.apply.call(console[C], console, R);
      }
    }
    function o(C, w) {
      return C === w && (C !== 0 || 1 / C === 1 / w) || C !== C && w !== w;
    }
    var s = typeof Object.is == "function" ? Object.is : o, i = e.useState, a = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, d = !1, u = !1;
    function f(C, w, E) {
      d || e.startTransition !== void 0 && (d = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var x = w();
      if (!u) {
        var D = w();
        s(x, D) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), u = !0);
      }
      var R = i({
        inst: {
          value: x,
          getSnapshot: w
        }
      }), k = R[0].inst, I = R[1];
      return c(function() {
        k.value = x, k.getSnapshot = w, h(k) && I({
          inst: k
        });
      }, [C, x, w]), a(function() {
        h(k) && I({
          inst: k
        });
        var j = function() {
          h(k) && I({
            inst: k
          });
        };
        return C(j);
      }, [C]), l(x), x;
    }
    function h(C) {
      var w = C.getSnapshot, E = C.value;
      try {
        var x = w();
        return !s(E, x);
      } catch {
        return !0;
      }
    }
    function y(C, w, E) {
      return w();
    }
    var m = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", v = !m, p = v ? y : f, A = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : p;
    We.useSyncExternalStore = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), We;
}
process.env.NODE_ENV === "production" ? Qe.exports = Sn() : Qe.exports = En();
var Rn = Qe.exports;
const ie = () => {
}, q = (
  /*#__NOINLINE__*/
  ie()
), Be = Object, S = (e) => e === q, Y = (e) => typeof e == "function", ae = (e, t) => ({
  ...e,
  ...t
}), Cn = (e) => Y(e.then), Ie = /* @__PURE__ */ new WeakMap();
let Tn = 0;
const Se = (e) => {
  const t = typeof e, r = e && e.constructor, n = r == Date;
  let o, s;
  if (Be(e) === e && !n && r != RegExp) {
    if (o = Ie.get(e), o)
      return o;
    if (o = ++Tn + "~", Ie.set(e, o), r == Array) {
      for (o = "@", s = 0; s < e.length; s++)
        o += Se(e[s]) + ",";
      Ie.set(e, o);
    }
    if (r == Be) {
      o = "#";
      const i = Be.keys(e).sort();
      for (; !S(s = i.pop()); )
        S(e[s]) || (o += s + ":" + Se(e[s]) + ",");
      Ie.set(e, o);
    }
  } else
    o = n ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return o;
}, ee = /* @__PURE__ */ new WeakMap(), Ge = {}, Pe = {}, dt = "undefined", ze = typeof window != dt, et = typeof document != dt, On = () => ze && typeof window.requestAnimationFrame != dt, Zt = (e, t) => {
  const r = ee.get(e);
  return [
    // Getter
    () => !S(t) && e.get(t) || Ge,
    // Setter
    (n) => {
      if (!S(t)) {
        const o = e.get(t);
        t in Pe || (Pe[t] = o), r[5](t, ae(o, n), o || Ge);
      }
    },
    // Subscriber
    r[6],
    // Get server cache snapshot
    () => !S(t) && t in Pe ? Pe[t] : !S(t) && e.get(t) || Ge
  ];
};
let tt = !0;
const $n = () => tt, [rt, nt] = ze && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  ie,
  ie
], An = () => {
  const e = et && document.visibilityState;
  return S(e) || e !== "hidden";
}, kn = (e) => (et && document.addEventListener("visibilitychange", e), rt("focus", e), () => {
  et && document.removeEventListener("visibilitychange", e), nt("focus", e);
}), Nn = (e) => {
  const t = () => {
    tt = !0, e();
  }, r = () => {
    tt = !1;
  };
  return rt("online", t), rt("offline", r), () => {
    nt("online", t), nt("offline", r);
  };
}, In = {
  isOnline: $n,
  isVisible: An
}, Pn = {
  initFocus: kn,
  initReconnect: Nn
}, Tt = !Ce.useId, Ee = !ze || "Deno" in window, Ln = (e) => On() ? window.requestAnimationFrame(e) : setTimeout(e, 1), He = Ee ? Te : Pt, Ke = typeof navigator < "u" && navigator.connection, Ot = !Ee && Ke && ([
  "slow-2g",
  "2g"
].includes(Ke.effectiveType) || Ke.saveData), ft = (e) => {
  if (Y(e))
    try {
      e = e();
    } catch {
      e = "";
    }
  const t = e;
  return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? Se(e) : "", [
    e,
    t
  ];
};
let Dn = 0;
const ot = () => ++Dn, Qt = 0, er = 1, tr = 2, Mn = 3;
var we = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: Mn,
  FOCUS_EVENT: Qt,
  MUTATE_EVENT: tr,
  RECONNECT_EVENT: er
};
async function rr(...e) {
  const [t, r, n, o] = e, s = ae({
    populateCache: !0,
    throwOnError: !0
  }, typeof o == "boolean" ? {
    revalidate: o
  } : o || {});
  let i = s.populateCache;
  const a = s.rollbackOnError;
  let c = s.optimisticData;
  const l = (f) => typeof a == "function" ? a(f) : a !== !1, d = s.throwOnError;
  if (Y(r)) {
    const f = r, h = [], y = t.keys();
    for (const m of y)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(m) && f(t.get(m)._k) && h.push(m);
    return Promise.all(h.map(u));
  }
  return u(r);
  async function u(f) {
    const [h] = ft(f);
    if (!h)
      return;
    const [y, m] = Zt(t, h), [v, p, A, C] = ee.get(t), w = () => {
      const V = v[h];
      return (Y(s.revalidate) ? s.revalidate(y().data, f) : s.revalidate !== !1) && (delete A[h], delete C[h], V && V[0]) ? V[0](tr).then(() => y().data) : y().data;
    };
    if (e.length < 3)
      return w();
    let E = n, x;
    const D = ot();
    p[h] = [
      D,
      0
    ];
    const R = !S(c), k = y(), I = k.data, j = k._c, _ = S(j) ? I : j;
    if (R && (c = Y(c) ? c(_, I) : c, m({
      data: c,
      _c: _
    })), Y(E))
      try {
        E = E(_);
      } catch (V) {
        x = V;
      }
    if (E && Cn(E))
      if (E = await E.catch((V) => {
        x = V;
      }), D !== p[h][0]) {
        if (x)
          throw x;
        return E;
      } else
        x && R && l(x) && (i = !0, m({
          data: _,
          _c: q
        }));
    if (i && !x)
      if (Y(i)) {
        const V = i(E, _);
        m({
          data: V,
          error: q,
          _c: q
        });
      } else
        m({
          data: E,
          error: q,
          _c: q
        });
    if (p[h][1] = ot(), Promise.resolve(w()).then(() => {
      m({
        _c: q
      });
    }), x) {
      if (d)
        throw x;
      return;
    }
    return E;
  }
}
const $t = (e, t) => {
  for (const r in e)
    e[r][0] && e[r][0](t);
}, Vn = (e, t) => {
  if (!ee.has(e)) {
    const r = ae(Pn, t), n = {}, o = rr.bind(q, e);
    let s = ie;
    const i = {}, a = (d, u) => {
      const f = i[d] || [];
      return i[d] = f, f.push(u), () => f.splice(f.indexOf(u), 1);
    }, c = (d, u, f) => {
      e.set(d, u);
      const h = i[d];
      if (h)
        for (const y of h)
          y(u, f);
    }, l = () => {
      if (!ee.has(e) && (ee.set(e, [
        n,
        {},
        {},
        {},
        o,
        c,
        a
      ]), !Ee)) {
        const d = r.initFocus(setTimeout.bind(q, $t.bind(q, n, Qt))), u = r.initReconnect(setTimeout.bind(q, $t.bind(q, n, er)));
        s = () => {
          d && d(), u && u(), ee.delete(e);
        };
      }
    };
    return l(), [
      e,
      o,
      l,
      s
    ];
  }
  return [
    e,
    ee.get(e)[4]
  ];
}, qn = (e, t, r, n, o) => {
  const s = r.errorRetryCount, i = o.retryCount, a = ~~((Math.random() + 0.5) * (1 << (i < 8 ? i : 8))) * r.errorRetryInterval;
  !S(s) && i > s || setTimeout(n, a, o);
}, zn = (e, t) => Se(e) == Se(t), [nr, jn] = Vn(/* @__PURE__ */ new Map()), Un = ae(
  {
    // events
    onLoadingSlow: ie,
    onSuccess: ie,
    onError: ie,
    onErrorRetry: qn,
    onDiscarded: ie,
    // switches
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    // timeouts
    errorRetryInterval: Ot ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: Ot ? 5e3 : 3e3,
    // providers
    compare: zn,
    isPaused: () => !1,
    cache: nr,
    mutate: jn,
    fallback: {}
  },
  // use web preset by default
  In
), Fn = (e, t) => {
  const r = ae(e, t);
  if (t) {
    const { use: n, fallback: o } = e, { use: s, fallback: i } = t;
    n && s && (r.use = n.concat(s)), o && i && (r.fallback = ae(o, i));
  }
  return r;
}, Wn = Ve({}), Bn = "$inf$", or = ze && window.__SWR_DEVTOOLS_USE__, Gn = or ? window.__SWR_DEVTOOLS_USE__ : [], Hn = () => {
  or && (window.__SWR_DEVTOOLS_REACT__ = Ce);
}, sr = (e) => Y(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], Kn = () => ae(Un, it(Wn)), Jn = (e) => (t, r, n) => e(t, r && ((...s) => {
  const [i] = ft(t), [, , , a] = ee.get(nr);
  if (i.startsWith(Bn))
    return r(...s);
  const c = a[i];
  return S(c) ? r(...s) : (delete a[i], c);
}), n), Yn = Gn.concat(Jn), Xn = (e) => function(...r) {
  const n = Kn(), [o, s, i] = sr(r), a = Fn(n, i);
  let c = e;
  const { use: l } = a, d = (l || []).concat(Yn);
  for (let u = d.length; u--; )
    c = d[u](c);
  return c(o, s || a.fetcher || null, a);
}, Zn = (e, t, r) => {
  const n = t[e] || (t[e] = []);
  return n.push(r), () => {
    const o = n.indexOf(r);
    o >= 0 && (n[o] = n[n.length - 1], n.pop());
  };
}, Qn = (e, t) => (...r) => {
  const [n, o, s] = sr(r), i = (s.use || []).concat(t);
  return e(n, o, {
    ...s,
    use: i
  });
};
Hn();
const At = Ce.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then((t) => {
    e.status = "fulfilled", e.value = t;
  }, (t) => {
    e.status = "rejected", e.reason = t;
  }), e);
}), Je = {
  dedupe: !0
}, eo = (e, t, r) => {
  const { cache: n, compare: o, suspense: s, fallbackData: i, revalidateOnMount: a, revalidateIfStale: c, refreshInterval: l, refreshWhenHidden: d, refreshWhenOffline: u, keepPreviousData: f } = r, [h, y, m, v] = ee.get(n), [p, A] = ft(e), C = W(!1), w = W(!1), E = W(p), x = W(t), D = W(r), R = () => D.current, k = () => R().isVisible() && R().isOnline(), [I, j, _, V] = Zt(n, p), B = W({}).current, Oe = S(i) ? r.fallback[p] : i, ce = (T, O) => {
    for (const L in B) {
      const N = L;
      if (N === "data") {
        if (!o(T[N], O[N]) && (!S(T[N]) || !o(ke, O[N])))
          return !1;
      } else if (O[N] !== T[N])
        return !1;
    }
    return !0;
  }, be = fe(() => {
    const T = !p || !t ? !1 : S(a) ? R().isPaused() || s ? !1 : S(c) ? !0 : c : a, O = (M) => {
      const X = ae(M);
      return delete X._k, T ? {
        isValidating: !0,
        isLoading: !0,
        ...X
      } : X;
    }, L = I(), N = V(), J = O(L), ue = L === N ? J : O(N);
    let P = J;
    return [
      () => {
        const M = O(I());
        return ce(M, P) ? (P.data = M.data, P.isLoading = M.isLoading, P.isValidating = M.isValidating, P.error = M.error, P) : (P = M, M);
      },
      () => ue
    ];
  }, [
    n,
    p
  ]), K = Rn.useSyncExternalStore(xe(
    (T) => _(p, (O, L) => {
      ce(L, O) || T();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      n,
      p
    ]
  ), be[0], be[1]), re = !C.current, $e = h[p] && h[p].length > 0, U = K.data, G = S(U) ? Oe : U, Ae = K.error, pt = W(G), ke = f ? S(U) ? pt.current : U : G, ht = $e && !S(Ae) ? !1 : re && !S(a) ? a : R().isPaused() ? !1 : s ? S(G) ? !1 : c : S(G) || c, bt = !!(p && t && re && ht), fr = S(K.isValidating) ? bt : K.isValidating, mr = S(K.isLoading) ? bt : K.isLoading, ge = xe(
    async (T) => {
      const O = x.current;
      if (!p || !O || w.current || R().isPaused())
        return !1;
      let L, N, J = !0;
      const ue = T || {}, P = !m[p] || !ue.dedupe, M = () => Tt ? !w.current && p === E.current && C.current : p === E.current, X = {
        isValidating: !1,
        isLoading: !1
      }, yt = () => {
        j(X);
      }, vt = () => {
        const F = m[p];
        F && F[1] === N && delete m[p];
      }, wt = {
        isValidating: !0
      };
      S(I().data) && (wt.isLoading = !0);
      try {
        if (P && (j(wt), r.loadingTimeout && S(I().data) && setTimeout(() => {
          J && M() && R().onLoadingSlow(p, r);
        }, r.loadingTimeout), m[p] = [
          O(A),
          ot()
        ]), [L, N] = m[p], L = await L, P && setTimeout(vt, r.dedupingInterval), !m[p] || m[p][1] !== N)
          return P && M() && R().onDiscarded(p), !1;
        X.error = q;
        const F = y[p];
        if (!S(F) && // case 1
        (N <= F[0] || // case 2
        N <= F[1] || // case 3
        F[1] === 0))
          return yt(), P && M() && R().onDiscarded(p), !1;
        const Z = I().data;
        X.data = o(Z, L) ? Z : L, P && M() && R().onSuccess(L, p, r);
      } catch (F) {
        vt();
        const Z = R(), { shouldRetryOnError: je } = Z;
        Z.isPaused() || (X.error = F, P && M() && (Z.onError(F, p, Z), (je === !0 || Y(je) && je(F)) && (!R().revalidateOnFocus || !R().revalidateOnReconnect || k()) && Z.onErrorRetry(F, p, Z, (pr) => {
          const Ue = h[p];
          Ue && Ue[0] && Ue[0](we.ERROR_REVALIDATE_EVENT, pr);
        }, {
          retryCount: (ue.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return J = !1, yt(), !0;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      p,
      n
    ]
  ), gt = xe(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...T) => rr(n, E.current, ...T),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (He(() => {
    x.current = t, D.current = r, S(U) || (pt.current = U);
  }), He(() => {
    if (!p)
      return;
    const T = ge.bind(q, Je);
    let O = 0;
    const N = Zn(p, h, (J, ue = {}) => {
      if (J == we.FOCUS_EVENT) {
        const P = Date.now();
        R().revalidateOnFocus && P > O && k() && (O = P + R().focusThrottleInterval, T());
      } else if (J == we.RECONNECT_EVENT)
        R().revalidateOnReconnect && k() && T();
      else {
        if (J == we.MUTATE_EVENT)
          return ge();
        if (J == we.ERROR_REVALIDATE_EVENT)
          return ge(ue);
      }
    });
    return w.current = !1, E.current = p, C.current = !0, j({
      _k: A
    }), ht && (S(G) || Ee ? T() : Ln(T)), () => {
      w.current = !0, N();
    };
  }, [
    p
  ]), He(() => {
    let T;
    function O() {
      const N = Y(l) ? l(I().data) : l;
      N && T !== -1 && (T = setTimeout(L, N));
    }
    function L() {
      !I().error && (d || R().isVisible()) && (u || R().isOnline()) ? ge(Je).then(O) : O();
    }
    return O(), () => {
      T && (clearTimeout(T), T = -1);
    };
  }, [
    l,
    d,
    u,
    p
  ]), br(ke), s && S(G) && p) {
    if (!Tt && Ee)
      throw new Error("Fallback data is required when using suspense in SSR.");
    x.current = t, D.current = r, w.current = !1;
    const T = v[p];
    if (!S(T)) {
      const O = gt(T);
      At(O);
    }
    if (S(Ae)) {
      const O = ge(Je);
      S(ke) || (O.status = "fulfilled", O.value = !0), At(O);
    } else
      throw Ae;
  }
  return {
    mutate: gt,
    get data() {
      return B.data = !0, ke;
    },
    get error() {
      return B.error = !0, Ae;
    },
    get isValidating() {
      return B.isValidating = !0, fr;
    },
    get isLoading() {
      return B.isLoading = !0, mr;
    }
  };
}, to = Xn(eo), ro = (e) => (t, r, n) => (n.revalidateOnFocus = !1, n.revalidateIfStale = !1, n.revalidateOnReconnect = !1, e(t, r, n)), no = Qn(to, ro), ir = Ve(
  void 0
);
function Ao({
  publishableKey: e,
  children: t
}) {
  return /* @__PURE__ */ g(ir.Provider, { value: { publishableKey: e }, children: t });
}
function oo() {
  const e = it(ir);
  if (e === void 0)
    throw new Error("useCme must be used within a CmeProvider");
  return e;
}
class kt extends Error {
  constructor(t, r, n) {
    const o = t.status || t.status === 0 ? t.status : "", s = t.statusText || "", i = `${o} ${s}`.trim(), a = i ? `status code ${i}` : "an unknown error";
    super(`Request failed with ${a}`), Object.defineProperty(this, "response", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "request", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = "HTTPError", this.response = t, this.request = r, this.options = n;
  }
}
class ar extends Error {
  constructor(t) {
    super("Request timed out"), Object.defineProperty(this, "request", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = "TimeoutError", this.request = t;
  }
}
const De = (e) => e !== null && typeof e == "object", Le = (...e) => {
  for (const t of e)
    if ((!De(t) || Array.isArray(t)) && t !== void 0)
      throw new TypeError("The `options` argument must be an object");
  return mt({}, ...e);
}, cr = (e = {}, t = {}) => {
  const r = new globalThis.Headers(e), n = t instanceof globalThis.Headers, o = new globalThis.Headers(t);
  for (const [s, i] of o.entries())
    n && i === "undefined" || i === void 0 ? r.delete(s) : r.set(s, i);
  return r;
}, mt = (...e) => {
  let t = {}, r = {};
  for (const n of e)
    if (Array.isArray(n))
      Array.isArray(t) || (t = []), t = [...t, ...n];
    else if (De(n)) {
      for (let [o, s] of Object.entries(n))
        De(s) && o in t && (s = mt(t[o], s)), t = { ...t, [o]: s };
      De(n.headers) && (r = cr(r, n.headers), t.headers = r);
    }
  return t;
}, so = (() => {
  let e = !1, t = !1;
  const r = typeof globalThis.ReadableStream == "function", n = typeof globalThis.Request == "function";
  return r && n && (t = new globalThis.Request("https://empty.invalid", {
    body: new globalThis.ReadableStream(),
    method: "POST",
    // @ts-expect-error - Types are outdated.
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type")), e && !t;
})(), io = typeof globalThis.AbortController == "function", ao = typeof globalThis.ReadableStream == "function", co = typeof globalThis.FormData == "function", lr = ["get", "post", "put", "patch", "head", "delete"], lo = {
  json: "application/json",
  text: "text/*",
  formData: "multipart/form-data",
  arrayBuffer: "*/*",
  blob: "*/*"
}, Ye = 2147483647, ur = Symbol("stop"), uo = {
  json: !0,
  parseJson: !0,
  searchParams: !0,
  prefixUrl: !0,
  retry: !0,
  timeout: !0,
  hooks: !0,
  throwHttpErrors: !0,
  onDownloadProgress: !0,
  fetch: !0
}, fo = {
  method: !0,
  headers: !0,
  body: !0,
  mode: !0,
  credentials: !0,
  cache: !0,
  redirect: !0,
  referrer: !0,
  referrerPolicy: !0,
  integrity: !0,
  keepalive: !0,
  signal: !0,
  window: !0,
  dispatcher: !0,
  duplex: !0
}, mo = (e) => lr.includes(e) ? e.toUpperCase() : e, po = ["get", "put", "head", "delete", "options", "trace"], ho = [408, 413, 429, 500, 502, 503, 504], dr = [413, 429, 503], Nt = {
  limit: 2,
  methods: po,
  statusCodes: ho,
  afterStatusCodes: dr,
  maxRetryAfter: Number.POSITIVE_INFINITY,
  backoffLimit: Number.POSITIVE_INFINITY,
  delay: (e) => 0.3 * 2 ** (e - 1) * 1e3
}, bo = (e = {}) => {
  if (typeof e == "number")
    return {
      ...Nt,
      limit: e
    };
  if (e.methods && !Array.isArray(e.methods))
    throw new Error("retry.methods must be an array");
  if (e.statusCodes && !Array.isArray(e.statusCodes))
    throw new Error("retry.statusCodes must be an array");
  return {
    ...Nt,
    ...e,
    afterStatusCodes: dr
  };
};
async function go(e, t, r, n) {
  return new Promise((o, s) => {
    const i = setTimeout(() => {
      r && r.abort(), s(new ar(e));
    }, n.timeout);
    n.fetch(e, t).then(o).catch(s).then(() => {
      clearTimeout(i);
    });
  });
}
async function yo(e, { signal: t }) {
  return new Promise((r, n) => {
    t && (t.throwIfAborted(), t.addEventListener("abort", o, { once: !0 }));
    function o() {
      clearTimeout(s), n(t.reason);
    }
    const s = setTimeout(() => {
      t == null || t.removeEventListener("abort", o), r();
    }, e);
  });
}
const vo = (e, t) => {
  const r = {};
  for (const n in t)
    !(n in fo) && !(n in uo) && !(n in e) && (r[n] = t[n]);
  return r;
};
class qe {
  static create(t, r) {
    const n = new qe(t, r), o = async () => {
      if (typeof n._options.timeout == "number" && n._options.timeout > Ye)
        throw new RangeError(`The \`timeout\` option cannot be greater than ${Ye}`);
      await Promise.resolve();
      let a = await n._fetch();
      for (const c of n._options.hooks.afterResponse) {
        const l = await c(n.request, n._options, n._decorateResponse(a.clone()));
        l instanceof globalThis.Response && (a = l);
      }
      if (n._decorateResponse(a), !a.ok && n._options.throwHttpErrors) {
        let c = new kt(a, n.request, n._options);
        for (const l of n._options.hooks.beforeError)
          c = await l(c);
        throw c;
      }
      if (n._options.onDownloadProgress) {
        if (typeof n._options.onDownloadProgress != "function")
          throw new TypeError("The `onDownloadProgress` option must be a function");
        if (!ao)
          throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
        return n._stream(a.clone(), n._options.onDownloadProgress);
      }
      return a;
    }, i = n._options.retry.methods.includes(n.request.method.toLowerCase()) ? n._retry(o) : o();
    for (const [a, c] of Object.entries(lo))
      i[a] = async () => {
        n.request.headers.set("accept", n.request.headers.get("accept") || c);
        const d = (await i).clone();
        if (a === "json") {
          if (d.status === 204 || (await d.clone().arrayBuffer()).byteLength === 0)
            return "";
          if (r.parseJson)
            return r.parseJson(await d.text());
        }
        return d[a]();
      };
    return i;
  }
  // eslint-disable-next-line complexity
  constructor(t, r = {}) {
    Object.defineProperty(this, "request", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "abortController", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "_retryCount", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: 0
    }), Object.defineProperty(this, "_input", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "_options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this._input = t;
    const n = "credentials" in Request.prototype;
    if (this._options = {
      credentials: n ? this._input.credentials : void 0,
      ...r,
      headers: cr(this._input.headers, r.headers),
      hooks: mt({
        beforeRequest: [],
        beforeRetry: [],
        beforeError: [],
        afterResponse: []
      }, r.hooks),
      method: mo(r.method ?? this._input.method),
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      prefixUrl: String(r.prefixUrl || ""),
      retry: bo(r.retry),
      throwHttpErrors: r.throwHttpErrors !== !1,
      timeout: r.timeout ?? 1e4,
      fetch: r.fetch ?? globalThis.fetch.bind(globalThis)
    }, typeof this._input != "string" && !(this._input instanceof URL || this._input instanceof globalThis.Request))
      throw new TypeError("`input` must be a string, URL, or Request");
    if (this._options.prefixUrl && typeof this._input == "string") {
      if (this._input.startsWith("/"))
        throw new Error("`input` must not begin with a slash when using `prefixUrl`");
      this._options.prefixUrl.endsWith("/") || (this._options.prefixUrl += "/"), this._input = this._options.prefixUrl + this._input;
    }
    if (io) {
      if (this.abortController = new globalThis.AbortController(), this._options.signal) {
        const o = this._options.signal;
        this._options.signal.addEventListener("abort", () => {
          this.abortController.abort(o.reason);
        });
      }
      this._options.signal = this.abortController.signal;
    }
    if (so && (this._options.duplex = "half"), this.request = new globalThis.Request(this._input, this._options), this._options.searchParams) {
      const s = "?" + (typeof this._options.searchParams == "string" ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString()), i = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, s);
      (co && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers["content-type"]) && this.request.headers.delete("content-type"), this.request = new globalThis.Request(new globalThis.Request(i, { ...this.request }), this._options);
    }
    this._options.json !== void 0 && (this._options.body = JSON.stringify(this._options.json), this.request.headers.set("content-type", this._options.headers.get("content-type") ?? "application/json"), this.request = new globalThis.Request(this.request, { body: this._options.body }));
  }
  _calculateRetryDelay(t) {
    if (this._retryCount++, this._retryCount <= this._options.retry.limit && !(t instanceof ar)) {
      if (t instanceof kt) {
        if (!this._options.retry.statusCodes.includes(t.response.status))
          return 0;
        const n = t.response.headers.get("Retry-After");
        if (n && this._options.retry.afterStatusCodes.includes(t.response.status)) {
          let o = Number(n);
          return Number.isNaN(o) ? o = Date.parse(n) - Date.now() : o *= 1e3, this._options.retry.maxRetryAfter !== void 0 && o > this._options.retry.maxRetryAfter ? 0 : o;
        }
        if (t.response.status === 413)
          return 0;
      }
      const r = this._options.retry.delay(this._retryCount);
      return Math.min(this._options.retry.backoffLimit, r);
    }
    return 0;
  }
  _decorateResponse(t) {
    return this._options.parseJson && (t.json = async () => this._options.parseJson(await t.text())), t;
  }
  async _retry(t) {
    try {
      return await t();
    } catch (r) {
      const n = Math.min(this._calculateRetryDelay(r), Ye);
      if (n !== 0 && this._retryCount > 0) {
        await yo(n, { signal: this._options.signal });
        for (const o of this._options.hooks.beforeRetry)
          if (await o({
            request: this.request,
            options: this._options,
            error: r,
            retryCount: this._retryCount
          }) === ur)
            return;
        return this._retry(t);
      }
      throw r;
    }
  }
  async _fetch() {
    for (const r of this._options.hooks.beforeRequest) {
      const n = await r(this.request, this._options);
      if (n instanceof Request) {
        this.request = n;
        break;
      }
      if (n instanceof Response)
        return n;
    }
    const t = vo(this.request, this._options);
    return this._options.timeout === !1 ? this._options.fetch(this.request.clone(), t) : go(this.request.clone(), t, this.abortController, this._options);
  }
  /* istanbul ignore next */
  _stream(t, r) {
    const n = Number(t.headers.get("content-length")) || 0;
    let o = 0;
    return t.status === 204 ? (r && r({ percent: 1, totalBytes: n, transferredBytes: o }, new Uint8Array()), new globalThis.Response(null, {
      status: t.status,
      statusText: t.statusText,
      headers: t.headers
    })) : new globalThis.Response(new globalThis.ReadableStream({
      async start(s) {
        const i = t.body.getReader();
        r && r({ percent: 0, transferredBytes: 0, totalBytes: n }, new Uint8Array());
        async function a() {
          const { done: c, value: l } = await i.read();
          if (c) {
            s.close();
            return;
          }
          if (r) {
            o += l.byteLength;
            const d = n === 0 ? 0 : o / n;
            r({ percent: d, transferredBytes: o, totalBytes: n }, l);
          }
          s.enqueue(l), await a();
        }
        await a();
      }
    }), {
      status: t.status,
      statusText: t.statusText,
      headers: t.headers
    });
  }
}
/*! MIT License © Sindre Sorhus */
const st = (e) => {
  const t = (r, n) => qe.create(r, Le(e, n));
  for (const r of lr)
    t[r] = (n, o) => qe.create(n, Le(e, o, { method: r }));
  return t.create = (r) => st(Le(r)), t.extend = (r) => st(Le(e, r)), t.stop = ur, t;
}, wo = st(), xo = wo.create({ prefixUrl: "https://cme-api.azurewebsites.net" });
async function _o(e) {
  return (await xo.get("credit-types", {
    headers: {
      Authorization: `Bearer ${e}`
    }
  }).json()).data;
}
function So() {
  const { publishableKey: e } = oo();
  if (!e)
    throw new Error(
      "CME publishable key is missing. Did you provide it in your CmeProvider?"
    );
  const { data: t, error: r, isLoading: n } = no(
    ["creditTypes"],
    () => _o(e)
  );
  return {
    creditTypes: t,
    isLoading: n,
    isError: r
  };
}
function ko({ onSubmit: e }) {
  function t(r) {
    r.preventDefault();
    const n = new FormData(r.currentTarget), o = n.getAll("creditTypeId"), s = n.getAll("amount").filter(Boolean), i = o.map((c, l) => ({
      creditTypeId: Number(c),
      amount: Number(s[l])
    })), a = {
      name: n.get("name"),
      description: n.get("description"),
      location: n.get("location"),
      credits: i
    };
    e(a);
  }
  return /* @__PURE__ */ z("form", { onSubmit: t, children: [
    /* @__PURE__ */ z("div", { role: "group", "aria-labelledby": "activity-info-heading", children: [
      /* @__PURE__ */ g(
        "div",
        {
          className: "cme-text-base cme-font-semibold cme-leading-7",
          id: "activity-info-heading",
          children: "Activity Information"
        }
      ),
      /* @__PURE__ */ g("p", { className: "cme-mt-1 cme-text-sm cme-leading-6 cme-text-muted-foreground", children: "Provide some basic information about the activity." }),
      /* @__PURE__ */ z("div", { className: "cme-mt-10 cme-space-y-8", children: [
        /* @__PURE__ */ z("div", { className: "cme-grid cme-w-full cme-items-center cme-gap-2", children: [
          /* @__PURE__ */ g(se, { className: "cme-w-fit", htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ g(de, { id: "name" })
        ] }),
        /* @__PURE__ */ z("div", { className: "cme-grid cme-w-full cme-items-center cme-gap-2", children: [
          /* @__PURE__ */ g(se, { className: "cme-w-fit", htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ g(Xt, { id: "description" })
        ] }),
        /* @__PURE__ */ z("div", { className: "cme-grid cme-w-full cme-items-center cme-gap-2", children: [
          /* @__PURE__ */ g(se, { className: "cme-w-fit", htmlFor: "location", children: "Location" }),
          /* @__PURE__ */ g(de, { id: "location" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ g("hr", { className: "cme-my-12" }),
    /* @__PURE__ */ g(Eo, {}),
    /* @__PURE__ */ g("div", { className: "cme-mt-8", children: /* @__PURE__ */ g(Wt, { type: "submit", children: "Submit" }) })
  ] });
}
function Eo() {
  const { creditTypes: e, isLoading: t, isError: r } = So();
  return t ? /* @__PURE__ */ g("p", { children: "Loading credit types..." }) : r ? /* @__PURE__ */ g("p", { children: "Error loading credit types" }) : /* @__PURE__ */ z("div", { role: "group", "aria-labelledby": "credits-heading", children: [
    /* @__PURE__ */ g(
      "div",
      {
        id: "credits-heading",
        className: "cme-text-base cme-font-semibold cme-leading-7",
        children: "Credits"
      }
    ),
    /* @__PURE__ */ g("p", { className: "cme-mt-1 cme-text-sm cme-leading-6 cme-text-muted-foreground", children: "Specify the types and amounts of credits available for this activity." }),
    /* @__PURE__ */ g("div", { className: "cme-mt-10 cme-space-y-6", children: e == null ? void 0 : e.map((n) => /* @__PURE__ */ g(Ro, { creditType: n }, n.id)) })
  ] });
}
function Ro({ creditType: e }) {
  return /* @__PURE__ */ z("div", { className: "cme-group cme-overflow-hidden cme-transition cme-rounded-md cme-bg-gray-100 cme-border cme-border-input [&:has(:checked)]:cme-border-foreground/15", children: [
    /* @__PURE__ */ z("div", { className: "cme-flex cme-shrink-0 cme-items-center cme-gap-x-2 cme-rounded-b-md cme-bg-white cme-p-4 cme-transition group-has-[:checked]:cme-shadow-md", children: [
      /* @__PURE__ */ g(
        Yt,
        {
          name: "creditTypeId",
          id: e.name,
          value: String(e.id)
        }
      ),
      /* @__PURE__ */ g(
        se,
        {
          htmlFor: e.name,
          className: "cme-text-muted-foreground group-has-[:checked]:cme-text-foreground",
          children: e.name
        }
      )
    ] }),
    /* @__PURE__ */ g("div", { className: "cme-grid cme-grid-cols-1 cme-grid-rows-[0fr] cme-opacity-0 cme-transition-all group-has-[:checked]:cme-opacity-100 group-has-[:checked]:cme-grid-rows-[1fr]", children: /* @__PURE__ */ g("div", { className: "cme-overflow-hidden", children: /* @__PURE__ */ z("div", { className: "cme-flex cme-items-center cme-gap-x-8 cme-px-4 cme-py-3", children: [
      /* @__PURE__ */ g("p", { className: "cme-text-sm cme-font-medium cme-leading-6", children: "Credit Amounts" }),
      /* @__PURE__ */ z("div", { className: "cme-flex cme-items-center cme-gap-x-1.5", children: [
        /* @__PURE__ */ g(
          de,
          {
            name: "amount",
            id: `amount-${e.id}`,
            className: "cme-w-24"
          }
        ),
        /* @__PURE__ */ g(
          se,
          {
            htmlFor: `amount-${e.id}`,
            className: "cme-text-foreground/75",
            children: "Minimum"
          }
        )
      ] }),
      /* @__PURE__ */ z("div", { className: "cme-flex cme-items-center cme-gap-x-1.5", children: [
        /* @__PURE__ */ g(
          de,
          {
            name: "maximum",
            id: `maximum-${e.id}`,
            className: "cme-w-24"
          }
        ),
        /* @__PURE__ */ g(
          se,
          {
            htmlFor: `maximum-${e.id}`,
            className: "cme-text-foreground/75",
            children: "Maximum"
          }
        )
      ] }),
      /* @__PURE__ */ z("div", { className: "cme-flex cme-items-center cme-gap-x-1.5", children: [
        /* @__PURE__ */ g(
          de,
          {
            name: "increment",
            id: `increment-${e.id}`,
            className: "cme-w-24"
          }
        ),
        /* @__PURE__ */ g(
          se,
          {
            htmlFor: `increment-${e.id}`,
            className: "cme-text-foreground/75",
            children: "Increment"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  ko as ActivityForm,
  Ao as CmeProvider,
  oo as useCme
};

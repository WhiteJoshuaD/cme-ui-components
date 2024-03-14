import { jsx as g, jsxs as D } from "react/jsx-runtime";
import * as Re from "react";
import Ce, { useCallback as xe, forwardRef as pe, Children as _e, isValidElement as Ve, createElement as H, cloneElement as Dt, Fragment as yr, useEffect as Te, createContext as qe, useMemo as fe, useContext as at, useRef as W, useState as ct, useLayoutEffect as Mt, useDebugValue as vr } from "react";
import "react-dom";
function re() {
  return re = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, re.apply(this, arguments);
}
function wr(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Vt(...e) {
  return (t) => e.forEach(
    (r) => wr(r, t)
  );
}
function xr(...e) {
  return xe(Vt(...e), e);
}
const lt = /* @__PURE__ */ pe((e, t) => {
  const { children: r, ...n } = e, o = _e.toArray(r), s = o.find(Sr);
  if (s) {
    const i = s.props.children, a = o.map((c) => c === s ? _e.count(i) > 1 ? _e.only(null) : /* @__PURE__ */ Ve(i) ? i.props.children : null : c);
    return /* @__PURE__ */ H(Ze, re({}, n, {
      ref: t
    }), /* @__PURE__ */ Ve(i) ? /* @__PURE__ */ Dt(i, void 0, a) : null);
  }
  return /* @__PURE__ */ H(Ze, re({}, n, {
    ref: t
  }), r);
});
lt.displayName = "Slot";
const Ze = /* @__PURE__ */ pe((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ Ve(r) ? /* @__PURE__ */ Dt(r, {
    ...Er(n, r.props),
    ref: t ? Vt(t, r.ref) : r.ref
  }) : _e.count(r) > 1 ? _e.only(null) : null;
});
Ze.displayName = "SlotClone";
const _r = ({ children: e }) => /* @__PURE__ */ H(yr, null, e);
function Sr(e) {
  return /* @__PURE__ */ Ve(e) && e.type === _r;
}
function Er(e, t) {
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
function qt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = qt(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Rr() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = qt(e)) && (n && (n += " "), n += t);
  return n;
}
const _t = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, St = Rr, zt = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return St(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: o, defaultVariants: s } = t, i = Object.keys(o).map((l) => {
    const d = r == null ? void 0 : r[l], u = s == null ? void 0 : s[l];
    if (d === null)
      return null;
    const f = _t(d) || _t(u);
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
  return St(e, i, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function jt(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (r = jt(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Cr() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
    (e = arguments[r]) && (t = jt(e)) && (n && (n += " "), n += t);
  return n;
}
const ut = "-";
function Tr(e) {
  const t = kr(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function o(i) {
    const a = i.split(ut);
    return a[0] === "" && a.length !== 1 && a.shift(), Ut(a, t) || $r(i);
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
function Ut(e, t) {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), o = n ? Ut(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const s = e.join(ut);
  return (i = t.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : i.classGroupId;
}
const Et = /^\[(.+)\]$/;
function $r(e) {
  if (Et.test(e)) {
    const t = Et.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function kr(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Or(Object.entries(e.classGroups), r).forEach(([s, i]) => {
    Qe(i, n, s, t);
  }), n;
}
function Qe(e, t, r, n) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const s = o === "" ? t : Rt(t, o);
      s.classGroupId = r;
      return;
    }
    if (typeof o == "function") {
      if (Ar(o)) {
        Qe(o(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: r
      });
      return;
    }
    Object.entries(o).forEach(([s, i]) => {
      Qe(i, Rt(t, s), r, n);
    });
  });
}
function Rt(e, t) {
  let r = e;
  return t.split(ut).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function Ar(e) {
  return e.isThemeGetter;
}
function Or(e, t) {
  return t ? e.map(([r, n]) => {
    const o = n.map((s) => typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([i, a]) => [t + i, a])) : s);
    return [r, o];
  }) : e;
}
function Nr(e) {
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
const Ft = "!";
function Pr(e) {
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
    const u = a.length === 0 ? i : i.substring(l), f = u.startsWith(Ft), h = f ? u.substring(1) : u, y = d && d > l ? d - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: y
    };
  };
}
function Ir(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function Lr(e) {
  return {
    cache: Nr(e.cacheSize),
    splitModifiers: Pr(e),
    ...Tr(e)
  };
}
const Dr = /\s+/;
function Mr(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: o
  } = t, s = /* @__PURE__ */ new Set();
  return e.trim().split(Dr).map((i) => {
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
    const h = Ir(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? h + Ft : h,
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
function Vr() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Wt(t)) && (n && (n += " "), n += r);
  return n;
}
function Wt(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Wt(e[n])) && (r && (r += " "), r += t);
  return r;
}
function Ct(e, ...t) {
  let r, n, o, s = i;
  function i(c) {
    const l = t.reduce((d, u) => u(d), e());
    return r = Lr(l), n = r.cache.get, o = r.cache.set, s = a, a(c);
  }
  function a(c) {
    const l = n(c);
    if (l)
      return l;
    const d = Mr(c, r);
    return o(c, d), d;
  }
  return function() {
    return s(Vr.apply(null, arguments));
  };
}
function k(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Bt = /^\[(?:([a-z-]+):)?(.+)\]$/i, qr = /^\d+\/\d+$/, zr = /* @__PURE__ */ new Set(["px", "full", "screen"]), jr = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ur = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Wr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Br = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function ee(e) {
  return ue(e) || zr.has(e) || qr.test(e);
}
function oe(e) {
  return he(e, "length", Qr);
}
function ue(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Ne(e) {
  return he(e, "number", ue);
}
function ye(e) {
  return !!e && Number.isInteger(Number(e));
}
function Gr(e) {
  return e.endsWith("%") && ue(e.slice(0, -1));
}
function b(e) {
  return Bt.test(e);
}
function se(e) {
  return jr.test(e);
}
const Hr = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Kr(e) {
  return he(e, Hr, Gt);
}
function Jr(e) {
  return he(e, "position", Gt);
}
const Yr = /* @__PURE__ */ new Set(["image", "url"]);
function Xr(e) {
  return he(e, Yr, tn);
}
function Zr(e) {
  return he(e, "", en);
}
function ve() {
  return !0;
}
function he(e, t, r) {
  const n = Bt.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function Qr(e) {
  return Ur.test(e) && !Fr.test(e);
}
function Gt() {
  return !1;
}
function en(e) {
  return Wr.test(e);
}
function tn(e) {
  return Br.test(e);
}
function Tt() {
  const e = k("colors"), t = k("spacing"), r = k("blur"), n = k("brightness"), o = k("borderColor"), s = k("borderRadius"), i = k("borderSpacing"), a = k("borderWidth"), c = k("contrast"), l = k("grayscale"), d = k("hueRotate"), u = k("invert"), f = k("gap"), h = k("gradientColorStops"), y = k("gradientColorStopPositions"), m = k("inset"), v = k("margin"), p = k("opacity"), A = k("padding"), C = k("saturate"), w = k("scale"), E = k("sepia"), x = k("skew"), M = k("space"), R = k("translate"), O = () => ["auto", "contain", "none"], P = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", b, t], _ = () => [b, t], q = () => ["", ee, oe], B = () => ["auto", ue, b], $e = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], le = () => ["solid", "dashed", "dotted", "double", "none"], be = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], K = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], ne = () => ["", "0", b], ke = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [ue, Ne], G = () => [ue, b];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [ve],
      spacing: [ee, oe],
      blur: ["none", "", se, b],
      brightness: U(),
      borderColor: [e],
      borderRadius: ["none", "", "full", se, b],
      borderSpacing: _(),
      borderWidth: q(),
      contrast: U(),
      grayscale: ne(),
      hueRotate: G(),
      invert: ne(),
      gap: _(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Gr, oe],
      inset: j(),
      margin: j(),
      opacity: U(),
      padding: _(),
      saturate: U(),
      scale: U(),
      sepia: ne(),
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
        columns: [se]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": ke()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": ke()
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
        object: [...$e(), b]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: P()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": P()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": P()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
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
        grow: ne()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ne()
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
        "space-x": [M]
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
        "space-y": [M]
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
          screen: [se]
        }, se]
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
        text: ["base", se, oe]
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
        "line-clamp": ["none", ue, Ne]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ee, b]
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
        decoration: [...le(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ee, oe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ee, b]
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
        bg: [...$e(), Jr]
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
        bg: ["auto", "cover", "contain", Kr]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Xr]
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
        border: [...le(), "hidden"]
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
        divide: le()
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
        outline: ["", ...le()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ee, b]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ee, oe]
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
        ring: q()
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
        "ring-offset": [ee, oe]
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
        shadow: ["", "inner", "none", se, Zr]
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
        "drop-shadow": ["", "none", se, b]
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
        stroke: [ee, oe, Ne]
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
function rn(e, {
  cacheSize: t,
  prefix: r,
  separator: n,
  extend: o = {},
  override: s = {}
}) {
  De(e, "cacheSize", t), De(e, "prefix", r), De(e, "separator", n);
  for (const i in s)
    nn(e[i], s[i]);
  for (const i in o)
    on(e[i], o[i]);
  return e;
}
function De(e, t, r) {
  r !== void 0 && (e[t] = r);
}
function nn(e, t) {
  if (t)
    for (const r in t)
      De(e, r, t[r]);
}
function on(e, t) {
  if (t)
    for (const r in t) {
      const n = t[r];
      n !== void 0 && (e[r] = (e[r] || []).concat(n));
    }
}
function sn(e, ...t) {
  return typeof e == "function" ? Ct(Tt, e, ...t) : Ct(() => rn(Tt(), e), ...t);
}
const an = sn({
  prefix: "cme-"
});
function me(...e) {
  return an(Cr(e));
}
const cn = zt(
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
), Ht = Re.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...o }, s) => /* @__PURE__ */ g(
    n ? lt : "button",
    {
      className: me(cn({ variant: t, size: r, className: e })),
      ref: s,
      ...o
    }
  )
);
Ht.displayName = "Button";
const ie = Re.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ g(
    "input",
    {
      type: t,
      className: me(
        "cme-block cme-h-10 cme-w-full cme-rounded-md cme-border cme-border-input cme-bg-background cme-px-3 cme-py-2 cme-text-sm cme-ring-offset-background file:cme-border-0 file:cme-bg-transparent file:cme-text-sm file:cme-font-medium placeholder:cme-text-muted-foreground focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 disabled:cme-cursor-not-allowed disabled:cme-opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
ie.displayName = "Input";
const ln = [
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
], dt = ln.reduce((e, t) => {
  const r = /* @__PURE__ */ pe((n, o) => {
    const { asChild: s, ...i } = n, a = s ? lt : t;
    return Te(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ H(a, re({}, i, {
      ref: o
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {}), un = /* @__PURE__ */ pe((e, t) => /* @__PURE__ */ H(dt.label, re({}, e, {
  ref: t,
  onMouseDown: (r) => {
    var n;
    (n = e.onMouseDown) === null || n === void 0 || n.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault();
  }
}))), Kt = un, dn = zt(
  "cme-text-sm cme-font-medium cme-leading-none peer-disabled:cme-cursor-not-allowed peer-disabled:cme-opacity-70"
), Y = Re.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g(
  Kt,
  {
    ref: r,
    className: me(dn(), e),
    ...t
  }
));
Y.displayName = Kt.displayName;
function fn(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), r === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function mn(e, t = []) {
  let r = [];
  function n(s, i) {
    const a = /* @__PURE__ */ qe(i), c = r.length;
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
      const h = (f == null ? void 0 : f[e][c]) || a, y = at(h);
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
    const s = r.map((i) => /* @__PURE__ */ qe(i));
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
    pn(o, ...t)
  ];
}
function pn(...e) {
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
function Jt(e) {
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
function hn({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, o] = bn({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, i = s ? e : n, a = Jt(r), c = xe((l) => {
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
function bn({ defaultProp: e, onChange: t }) {
  const r = ct(e), [n] = r, o = W(n), s = Jt(t);
  return Te(() => {
    o.current !== n && (s(n), o.current = n);
  }, [
    n,
    o,
    s
  ]), r;
}
function gn(e) {
  const t = W({
    value: e,
    previous: e
  });
  return fe(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [
    e
  ]);
}
const yn = globalThis != null && globalThis.document ? Mt : () => {
};
function vn(e) {
  const [t, r] = ct(void 0);
  return yn(() => {
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
const Yt = "Switch", [wn, Io] = mn(Yt), [xn, _n] = wn(Yt), Sn = /* @__PURE__ */ pe((e, t) => {
  const { __scopeSwitch: r, name: n, checked: o, defaultChecked: s, required: i, disabled: a, value: c = "on", onCheckedChange: l, ...d } = e, [u, f] = ct(null), h = xr(
    t,
    (A) => f(A)
  ), y = W(!1), m = u ? !!u.closest("form") : !0, [v = !1, p] = hn({
    prop: o,
    defaultProp: s,
    onChange: l
  });
  return /* @__PURE__ */ H(xn, {
    scope: r,
    checked: v,
    disabled: a
  }, /* @__PURE__ */ H(dt.button, re({
    type: "button",
    role: "switch",
    "aria-checked": v,
    "aria-required": i,
    "data-state": Xt(v),
    "data-disabled": a ? "" : void 0,
    disabled: a,
    value: c
  }, d, {
    ref: h,
    onClick: fn(e.onClick, (A) => {
      p(
        (C) => !C
      ), m && (y.current = A.isPropagationStopped(), y.current || A.stopPropagation());
    })
  })), m && /* @__PURE__ */ H(Cn, {
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
}), En = "SwitchThumb", Rn = /* @__PURE__ */ pe((e, t) => {
  const { __scopeSwitch: r, ...n } = e, o = _n(En, r);
  return /* @__PURE__ */ H(dt.span, re({
    "data-state": Xt(o.checked),
    "data-disabled": o.disabled ? "" : void 0
  }, n, {
    ref: t
  }));
}), Cn = (e) => {
  const { control: t, checked: r, bubbles: n = !0, ...o } = e, s = W(null), i = gn(r), a = vn(t);
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
  ]), /* @__PURE__ */ H("input", re({
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
function Xt(e) {
  return e ? "checked" : "unchecked";
}
const Zt = Sn, Tn = Rn, Qt = Re.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ g(
  Zt,
  {
    className: me(
      "cme-peer cme-inline-flex cme-h-6 cme-w-11 cme-shrink-0 cme-cursor-pointer cme-items-center cme-rounded-full cme-border-2 cme-border-transparent cme-transition-colors focus-visible:cme-outline-none focus-visible:cme-ring-2 focus-visible:cme-ring-ring focus-visible:cme-ring-offset-2 focus-visible:cme-ring-offset-background disabled:cme-cursor-not-allowed disabled:cme-opacity-50 data-[state=checked]:cme-bg-primary data-[state=unchecked]:cme-bg-input",
      e
    ),
    ...t,
    ref: r,
    children: /* @__PURE__ */ g(
      Tn,
      {
        className: me(
          "cme-pointer-events-none cme-block cme-h-5 cme-w-5 cme-rounded-full cme-bg-background cme-shadow-lg cme-ring-0 cme-transition-transform data-[state=checked]:cme-translate-x-5 data-[state=unchecked]:cme-translate-x-0"
        )
      }
    )
  }
));
Qt.displayName = Zt.displayName;
const er = Re.forwardRef(
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
er.displayName = "Textarea";
var et = { exports: {} }, We = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function $n() {
  if ($t)
    return We;
  $t = 1;
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
  return We.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, We;
}
var Be = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function kn() {
  return kt || (kt = 1, process.env.NODE_ENV !== "production" && function() {
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
        var x = t.ReactDebugCurrentFrame, M = x.getStackAddendum();
        M !== "" && (w += "%s", E = E.concat([M]));
        var R = E.map(function(O) {
          return String(O);
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
        var M = w();
        s(x, M) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), u = !0);
      }
      var R = i({
        inst: {
          value: x,
          getSnapshot: w
        }
      }), O = R[0].inst, P = R[1];
      return c(function() {
        O.value = x, O.getSnapshot = w, h(O) && P({
          inst: O
        });
      }, [C, x, w]), a(function() {
        h(O) && P({
          inst: O
        });
        var j = function() {
          h(O) && P({
            inst: O
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
    Be.useSyncExternalStore = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Be;
}
process.env.NODE_ENV === "production" ? et.exports = $n() : et.exports = kn();
var An = et.exports;
const ae = () => {
}, z = (
  /*#__NOINLINE__*/
  ae()
), Ge = Object, S = (e) => e === z, X = (e) => typeof e == "function", ce = (e, t) => ({
  ...e,
  ...t
}), On = (e) => X(e.then), Pe = /* @__PURE__ */ new WeakMap();
let Nn = 0;
const Se = (e) => {
  const t = typeof e, r = e && e.constructor, n = r == Date;
  let o, s;
  if (Ge(e) === e && !n && r != RegExp) {
    if (o = Pe.get(e), o)
      return o;
    if (o = ++Nn + "~", Pe.set(e, o), r == Array) {
      for (o = "@", s = 0; s < e.length; s++)
        o += Se(e[s]) + ",";
      Pe.set(e, o);
    }
    if (r == Ge) {
      o = "#";
      const i = Ge.keys(e).sort();
      for (; !S(s = i.pop()); )
        S(e[s]) || (o += s + ":" + Se(e[s]) + ",");
      Pe.set(e, o);
    }
  } else
    o = n ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
  return o;
}, te = /* @__PURE__ */ new WeakMap(), He = {}, Ie = {}, ft = "undefined", je = typeof window != ft, tt = typeof document != ft, Pn = () => je && typeof window.requestAnimationFrame != ft, tr = (e, t) => {
  const r = te.get(e);
  return [
    // Getter
    () => !S(t) && e.get(t) || He,
    // Setter
    (n) => {
      if (!S(t)) {
        const o = e.get(t);
        t in Ie || (Ie[t] = o), r[5](t, ce(o, n), o || He);
      }
    },
    // Subscriber
    r[6],
    // Get server cache snapshot
    () => !S(t) && t in Ie ? Ie[t] : !S(t) && e.get(t) || He
  ];
};
let rt = !0;
const In = () => rt, [nt, ot] = je && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  ae,
  ae
], Ln = () => {
  const e = tt && document.visibilityState;
  return S(e) || e !== "hidden";
}, Dn = (e) => (tt && document.addEventListener("visibilitychange", e), nt("focus", e), () => {
  tt && document.removeEventListener("visibilitychange", e), ot("focus", e);
}), Mn = (e) => {
  const t = () => {
    rt = !0, e();
  }, r = () => {
    rt = !1;
  };
  return nt("online", t), nt("offline", r), () => {
    ot("online", t), ot("offline", r);
  };
}, Vn = {
  isOnline: In,
  isVisible: Ln
}, qn = {
  initFocus: Dn,
  initReconnect: Mn
}, At = !Ce.useId, Ee = !je || "Deno" in window, zn = (e) => Pn() ? window.requestAnimationFrame(e) : setTimeout(e, 1), Ke = Ee ? Te : Mt, Je = typeof navigator < "u" && navigator.connection, Ot = !Ee && Je && ([
  "slow-2g",
  "2g"
].includes(Je.effectiveType) || Je.saveData), mt = (e) => {
  if (X(e))
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
let jn = 0;
const st = () => ++jn, rr = 0, nr = 1, or = 2, Un = 3;
var we = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT: Un,
  FOCUS_EVENT: rr,
  MUTATE_EVENT: or,
  RECONNECT_EVENT: nr
};
async function sr(...e) {
  const [t, r, n, o] = e, s = ce({
    populateCache: !0,
    throwOnError: !0
  }, typeof o == "boolean" ? {
    revalidate: o
  } : o || {});
  let i = s.populateCache;
  const a = s.rollbackOnError;
  let c = s.optimisticData;
  const l = (f) => typeof a == "function" ? a(f) : a !== !1, d = s.throwOnError;
  if (X(r)) {
    const f = r, h = [], y = t.keys();
    for (const m of y)
      // Skip the special useSWRInfinite and useSWRSubscription keys.
      !/^\$(inf|sub)\$/.test(m) && f(t.get(m)._k) && h.push(m);
    return Promise.all(h.map(u));
  }
  return u(r);
  async function u(f) {
    const [h] = mt(f);
    if (!h)
      return;
    const [y, m] = tr(t, h), [v, p, A, C] = te.get(t), w = () => {
      const q = v[h];
      return (X(s.revalidate) ? s.revalidate(y().data, f) : s.revalidate !== !1) && (delete A[h], delete C[h], q && q[0]) ? q[0](or).then(() => y().data) : y().data;
    };
    if (e.length < 3)
      return w();
    let E = n, x;
    const M = st();
    p[h] = [
      M,
      0
    ];
    const R = !S(c), O = y(), P = O.data, j = O._c, _ = S(j) ? P : j;
    if (R && (c = X(c) ? c(_, P) : c, m({
      data: c,
      _c: _
    })), X(E))
      try {
        E = E(_);
      } catch (q) {
        x = q;
      }
    if (E && On(E))
      if (E = await E.catch((q) => {
        x = q;
      }), M !== p[h][0]) {
        if (x)
          throw x;
        return E;
      } else
        x && R && l(x) && (i = !0, m({
          data: _,
          _c: z
        }));
    if (i && !x)
      if (X(i)) {
        const q = i(E, _);
        m({
          data: q,
          error: z,
          _c: z
        });
      } else
        m({
          data: E,
          error: z,
          _c: z
        });
    if (p[h][1] = st(), Promise.resolve(w()).then(() => {
      m({
        _c: z
      });
    }), x) {
      if (d)
        throw x;
      return;
    }
    return E;
  }
}
const Nt = (e, t) => {
  for (const r in e)
    e[r][0] && e[r][0](t);
}, Fn = (e, t) => {
  if (!te.has(e)) {
    const r = ce(qn, t), n = {}, o = sr.bind(z, e);
    let s = ae;
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
      if (!te.has(e) && (te.set(e, [
        n,
        {},
        {},
        {},
        o,
        c,
        a
      ]), !Ee)) {
        const d = r.initFocus(setTimeout.bind(z, Nt.bind(z, n, rr))), u = r.initReconnect(setTimeout.bind(z, Nt.bind(z, n, nr)));
        s = () => {
          d && d(), u && u(), te.delete(e);
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
    te.get(e)[4]
  ];
}, Wn = (e, t, r, n, o) => {
  const s = r.errorRetryCount, i = o.retryCount, a = ~~((Math.random() + 0.5) * (1 << (i < 8 ? i : 8))) * r.errorRetryInterval;
  !S(s) && i > s || setTimeout(n, a, o);
}, Bn = (e, t) => Se(e) == Se(t), [ir, Gn] = Fn(/* @__PURE__ */ new Map()), Hn = ce(
  {
    // events
    onLoadingSlow: ae,
    onSuccess: ae,
    onError: ae,
    onErrorRetry: Wn,
    onDiscarded: ae,
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
    compare: Bn,
    isPaused: () => !1,
    cache: ir,
    mutate: Gn,
    fallback: {}
  },
  // use web preset by default
  Vn
), Kn = (e, t) => {
  const r = ce(e, t);
  if (t) {
    const { use: n, fallback: o } = e, { use: s, fallback: i } = t;
    n && s && (r.use = n.concat(s)), o && i && (r.fallback = ce(o, i));
  }
  return r;
}, Jn = qe({}), Yn = "$inf$", ar = je && window.__SWR_DEVTOOLS_USE__, Xn = ar ? window.__SWR_DEVTOOLS_USE__ : [], Zn = () => {
  ar && (window.__SWR_DEVTOOLS_REACT__ = Ce);
}, cr = (e) => X(e[1]) ? [
  e[0],
  e[1],
  e[2] || {}
] : [
  e[0],
  null,
  (e[1] === null ? e[2] : e[1]) || {}
], Qn = () => ce(Hn, at(Jn)), eo = (e) => (t, r, n) => e(t, r && ((...s) => {
  const [i] = mt(t), [, , , a] = te.get(ir);
  if (i.startsWith(Yn))
    return r(...s);
  const c = a[i];
  return S(c) ? r(...s) : (delete a[i], c);
}), n), to = Xn.concat(eo), ro = (e) => function(...r) {
  const n = Qn(), [o, s, i] = cr(r), a = Kn(n, i);
  let c = e;
  const { use: l } = a, d = (l || []).concat(to);
  for (let u = d.length; u--; )
    c = d[u](c);
  return c(o, s || a.fetcher || null, a);
}, no = (e, t, r) => {
  const n = t[e] || (t[e] = []);
  return n.push(r), () => {
    const o = n.indexOf(r);
    o >= 0 && (n[o] = n[n.length - 1], n.pop());
  };
}, oo = (e, t) => (...r) => {
  const [n, o, s] = cr(r), i = (s.use || []).concat(t);
  return e(n, o, {
    ...s,
    use: i
  });
};
Zn();
const Pt = Ce.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then((t) => {
    e.status = "fulfilled", e.value = t;
  }, (t) => {
    e.status = "rejected", e.reason = t;
  }), e);
}), Ye = {
  dedupe: !0
}, so = (e, t, r) => {
  const { cache: n, compare: o, suspense: s, fallbackData: i, revalidateOnMount: a, revalidateIfStale: c, refreshInterval: l, refreshWhenHidden: d, refreshWhenOffline: u, keepPreviousData: f } = r, [h, y, m, v] = te.get(n), [p, A] = mt(e), C = W(!1), w = W(!1), E = W(p), x = W(t), M = W(r), R = () => M.current, O = () => R().isVisible() && R().isOnline(), [P, j, _, q] = tr(n, p), B = W({}).current, $e = S(i) ? r.fallback[p] : i, le = (T, $) => {
    for (const L in B) {
      const N = L;
      if (N === "data") {
        if (!o(T[N], $[N]) && (!S(T[N]) || !o(Oe, $[N])))
          return !1;
      } else if ($[N] !== T[N])
        return !1;
    }
    return !0;
  }, be = fe(() => {
    const T = !p || !t ? !1 : S(a) ? R().isPaused() || s ? !1 : S(c) ? !0 : c : a, $ = (V) => {
      const Z = ce(V);
      return delete Z._k, T ? {
        isValidating: !0,
        isLoading: !0,
        ...Z
      } : Z;
    }, L = P(), N = q(), J = $(L), de = L === N ? J : $(N);
    let I = J;
    return [
      () => {
        const V = $(P());
        return le(V, I) ? (I.data = V.data, I.isLoading = V.isLoading, I.isValidating = V.isValidating, I.error = V.error, I) : (I = V, V);
      },
      () => de
    ];
  }, [
    n,
    p
  ]), K = An.useSyncExternalStore(xe(
    (T) => _(p, ($, L) => {
      le(L, $) || T();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      n,
      p
    ]
  ), be[0], be[1]), ne = !C.current, ke = h[p] && h[p].length > 0, U = K.data, G = S(U) ? $e : U, Ae = K.error, ht = W(G), Oe = f ? S(U) ? ht.current : U : G, bt = ke && !S(Ae) ? !1 : ne && !S(a) ? a : R().isPaused() ? !1 : s ? S(G) ? !1 : c : S(G) || c, gt = !!(p && t && ne && bt), hr = S(K.isValidating) ? gt : K.isValidating, br = S(K.isLoading) ? gt : K.isLoading, ge = xe(
    async (T) => {
      const $ = x.current;
      if (!p || !$ || w.current || R().isPaused())
        return !1;
      let L, N, J = !0;
      const de = T || {}, I = !m[p] || !de.dedupe, V = () => At ? !w.current && p === E.current && C.current : p === E.current, Z = {
        isValidating: !1,
        isLoading: !1
      }, vt = () => {
        j(Z);
      }, wt = () => {
        const F = m[p];
        F && F[1] === N && delete m[p];
      }, xt = {
        isValidating: !0
      };
      S(P().data) && (xt.isLoading = !0);
      try {
        if (I && (j(xt), r.loadingTimeout && S(P().data) && setTimeout(() => {
          J && V() && R().onLoadingSlow(p, r);
        }, r.loadingTimeout), m[p] = [
          $(A),
          st()
        ]), [L, N] = m[p], L = await L, I && setTimeout(wt, r.dedupingInterval), !m[p] || m[p][1] !== N)
          return I && V() && R().onDiscarded(p), !1;
        Z.error = z;
        const F = y[p];
        if (!S(F) && // case 1
        (N <= F[0] || // case 2
        N <= F[1] || // case 3
        F[1] === 0))
          return vt(), I && V() && R().onDiscarded(p), !1;
        const Q = P().data;
        Z.data = o(Q, L) ? Q : L, I && V() && R().onSuccess(L, p, r);
      } catch (F) {
        wt();
        const Q = R(), { shouldRetryOnError: Ue } = Q;
        Q.isPaused() || (Z.error = F, I && V() && (Q.onError(F, p, Q), (Ue === !0 || X(Ue) && Ue(F)) && (!R().revalidateOnFocus || !R().revalidateOnReconnect || O()) && Q.onErrorRetry(F, p, Q, (gr) => {
          const Fe = h[p];
          Fe && Fe[0] && Fe[0](we.ERROR_REVALIDATE_EVENT, gr);
        }, {
          retryCount: (de.retryCount || 0) + 1,
          dedupe: !0
        })));
      }
      return J = !1, vt(), !0;
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
  ), yt = xe(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...T) => sr(n, E.current, ...T),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (Ke(() => {
    x.current = t, M.current = r, S(U) || (ht.current = U);
  }), Ke(() => {
    if (!p)
      return;
    const T = ge.bind(z, Ye);
    let $ = 0;
    const N = no(p, h, (J, de = {}) => {
      if (J == we.FOCUS_EVENT) {
        const I = Date.now();
        R().revalidateOnFocus && I > $ && O() && ($ = I + R().focusThrottleInterval, T());
      } else if (J == we.RECONNECT_EVENT)
        R().revalidateOnReconnect && O() && T();
      else {
        if (J == we.MUTATE_EVENT)
          return ge();
        if (J == we.ERROR_REVALIDATE_EVENT)
          return ge(de);
      }
    });
    return w.current = !1, E.current = p, C.current = !0, j({
      _k: A
    }), bt && (S(G) || Ee ? T() : zn(T)), () => {
      w.current = !0, N();
    };
  }, [
    p
  ]), Ke(() => {
    let T;
    function $() {
      const N = X(l) ? l(P().data) : l;
      N && T !== -1 && (T = setTimeout(L, N));
    }
    function L() {
      !P().error && (d || R().isVisible()) && (u || R().isOnline()) ? ge(Ye).then($) : $();
    }
    return $(), () => {
      T && (clearTimeout(T), T = -1);
    };
  }, [
    l,
    d,
    u,
    p
  ]), vr(Oe), s && S(G) && p) {
    if (!At && Ee)
      throw new Error("Fallback data is required when using suspense in SSR.");
    x.current = t, M.current = r, w.current = !1;
    const T = v[p];
    if (!S(T)) {
      const $ = yt(T);
      Pt($);
    }
    if (S(Ae)) {
      const $ = ge(Ye);
      S(Oe) || ($.status = "fulfilled", $.value = !0), Pt($);
    } else
      throw Ae;
  }
  return {
    mutate: yt,
    get data() {
      return B.data = !0, Oe;
    },
    get error() {
      return B.error = !0, Ae;
    },
    get isValidating() {
      return B.isValidating = !0, hr;
    },
    get isLoading() {
      return B.isLoading = !0, br;
    }
  };
}, io = ro(so), ao = (e) => (t, r, n) => (n.revalidateOnFocus = !1, n.revalidateIfStale = !1, n.revalidateOnReconnect = !1, e(t, r, n)), co = oo(io, ao), lr = qe(
  void 0
);
function Lo({
  publishableKey: e,
  children: t
}) {
  return /* @__PURE__ */ g(lr.Provider, { value: { publishableKey: e }, children: /* @__PURE__ */ g("div", { "data-cme-component": !0, children: t }) });
}
function lo() {
  const e = at(lr);
  if (e === void 0)
    throw new Error("useCme must be used within a CmeProvider");
  return e;
}
class It extends Error {
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
class ur extends Error {
  constructor(t) {
    super("Request timed out"), Object.defineProperty(this, "request", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = "TimeoutError", this.request = t;
  }
}
const Me = (e) => e !== null && typeof e == "object", Le = (...e) => {
  for (const t of e)
    if ((!Me(t) || Array.isArray(t)) && t !== void 0)
      throw new TypeError("The `options` argument must be an object");
  return pt({}, ...e);
}, dr = (e = {}, t = {}) => {
  const r = new globalThis.Headers(e), n = t instanceof globalThis.Headers, o = new globalThis.Headers(t);
  for (const [s, i] of o.entries())
    n && i === "undefined" || i === void 0 ? r.delete(s) : r.set(s, i);
  return r;
}, pt = (...e) => {
  let t = {}, r = {};
  for (const n of e)
    if (Array.isArray(n))
      Array.isArray(t) || (t = []), t = [...t, ...n];
    else if (Me(n)) {
      for (let [o, s] of Object.entries(n))
        Me(s) && o in t && (s = pt(t[o], s)), t = { ...t, [o]: s };
      Me(n.headers) && (r = dr(r, n.headers), t.headers = r);
    }
  return t;
}, uo = (() => {
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
})(), fo = typeof globalThis.AbortController == "function", mo = typeof globalThis.ReadableStream == "function", po = typeof globalThis.FormData == "function", fr = ["get", "post", "put", "patch", "head", "delete"], ho = {
  json: "application/json",
  text: "text/*",
  formData: "multipart/form-data",
  arrayBuffer: "*/*",
  blob: "*/*"
}, Xe = 2147483647, mr = Symbol("stop"), bo = {
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
}, go = {
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
}, yo = (e) => fr.includes(e) ? e.toUpperCase() : e, vo = ["get", "put", "head", "delete", "options", "trace"], wo = [408, 413, 429, 500, 502, 503, 504], pr = [413, 429, 503], Lt = {
  limit: 2,
  methods: vo,
  statusCodes: wo,
  afterStatusCodes: pr,
  maxRetryAfter: Number.POSITIVE_INFINITY,
  backoffLimit: Number.POSITIVE_INFINITY,
  delay: (e) => 0.3 * 2 ** (e - 1) * 1e3
}, xo = (e = {}) => {
  if (typeof e == "number")
    return {
      ...Lt,
      limit: e
    };
  if (e.methods && !Array.isArray(e.methods))
    throw new Error("retry.methods must be an array");
  if (e.statusCodes && !Array.isArray(e.statusCodes))
    throw new Error("retry.statusCodes must be an array");
  return {
    ...Lt,
    ...e,
    afterStatusCodes: pr
  };
};
async function _o(e, t, r, n) {
  return new Promise((o, s) => {
    const i = setTimeout(() => {
      r && r.abort(), s(new ur(e));
    }, n.timeout);
    n.fetch(e, t).then(o).catch(s).then(() => {
      clearTimeout(i);
    });
  });
}
async function So(e, { signal: t }) {
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
const Eo = (e, t) => {
  const r = {};
  for (const n in t)
    !(n in go) && !(n in bo) && !(n in e) && (r[n] = t[n]);
  return r;
};
class ze {
  static create(t, r) {
    const n = new ze(t, r), o = async () => {
      if (typeof n._options.timeout == "number" && n._options.timeout > Xe)
        throw new RangeError(`The \`timeout\` option cannot be greater than ${Xe}`);
      await Promise.resolve();
      let a = await n._fetch();
      for (const c of n._options.hooks.afterResponse) {
        const l = await c(n.request, n._options, n._decorateResponse(a.clone()));
        l instanceof globalThis.Response && (a = l);
      }
      if (n._decorateResponse(a), !a.ok && n._options.throwHttpErrors) {
        let c = new It(a, n.request, n._options);
        for (const l of n._options.hooks.beforeError)
          c = await l(c);
        throw c;
      }
      if (n._options.onDownloadProgress) {
        if (typeof n._options.onDownloadProgress != "function")
          throw new TypeError("The `onDownloadProgress` option must be a function");
        if (!mo)
          throw new Error("Streams are not supported in your environment. `ReadableStream` is missing.");
        return n._stream(a.clone(), n._options.onDownloadProgress);
      }
      return a;
    }, i = n._options.retry.methods.includes(n.request.method.toLowerCase()) ? n._retry(o) : o();
    for (const [a, c] of Object.entries(ho))
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
      headers: dr(this._input.headers, r.headers),
      hooks: pt({
        beforeRequest: [],
        beforeRetry: [],
        beforeError: [],
        afterResponse: []
      }, r.hooks),
      method: yo(r.method ?? this._input.method),
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
      prefixUrl: String(r.prefixUrl || ""),
      retry: xo(r.retry),
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
    if (fo) {
      if (this.abortController = new globalThis.AbortController(), this._options.signal) {
        const o = this._options.signal;
        this._options.signal.addEventListener("abort", () => {
          this.abortController.abort(o.reason);
        });
      }
      this._options.signal = this.abortController.signal;
    }
    if (uo && (this._options.duplex = "half"), this.request = new globalThis.Request(this._input, this._options), this._options.searchParams) {
      const s = "?" + (typeof this._options.searchParams == "string" ? this._options.searchParams.replace(/^\?/, "") : new URLSearchParams(this._options.searchParams).toString()), i = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, s);
      (po && this._options.body instanceof globalThis.FormData || this._options.body instanceof URLSearchParams) && !(this._options.headers && this._options.headers["content-type"]) && this.request.headers.delete("content-type"), this.request = new globalThis.Request(new globalThis.Request(i, { ...this.request }), this._options);
    }
    this._options.json !== void 0 && (this._options.body = JSON.stringify(this._options.json), this.request.headers.set("content-type", this._options.headers.get("content-type") ?? "application/json"), this.request = new globalThis.Request(this.request, { body: this._options.body }));
  }
  _calculateRetryDelay(t) {
    if (this._retryCount++, this._retryCount <= this._options.retry.limit && !(t instanceof ur)) {
      if (t instanceof It) {
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
      const n = Math.min(this._calculateRetryDelay(r), Xe);
      if (n !== 0 && this._retryCount > 0) {
        await So(n, { signal: this._options.signal });
        for (const o of this._options.hooks.beforeRetry)
          if (await o({
            request: this.request,
            options: this._options,
            error: r,
            retryCount: this._retryCount
          }) === mr)
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
    const t = Eo(this.request, this._options);
    return this._options.timeout === !1 ? this._options.fetch(this.request.clone(), t) : _o(this.request.clone(), t, this.abortController, this._options);
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
const it = (e) => {
  const t = (r, n) => ze.create(r, Le(e, n));
  for (const r of fr)
    t[r] = (n, o) => ze.create(n, Le(e, o, { method: r }));
  return t.create = (r) => it(Le(r)), t.extend = (r) => it(Le(e, r)), t.stop = mr, t;
}, Ro = it(), Co = Ro.create({ prefixUrl: "https://cme-api.azurewebsites.net" });
async function To(e) {
  return (await Co.get("credit-types", {
    headers: {
      Authorization: `Bearer ${e}`
    }
  }).json()).data;
}
function $o() {
  const { publishableKey: e } = lo();
  if (!e)
    throw new Error(
      "CME publishable key is missing. Did you provide it in your CmeProvider?"
    );
  const { data: t, error: r, isLoading: n } = co(
    ["creditTypes"],
    () => To(e)
  );
  return {
    creditTypes: t,
    isLoading: n,
    isError: r
  };
}
function Do({ onSubmit: e }) {
  function t(r) {
    r.preventDefault();
    const n = new FormData(r.currentTarget), o = n.getAll("creditTypeId"), s = n.getAll("amount").filter(Boolean), i = o.map((c, l) => ({
      creditTypeId: Number(c),
      amount: Number(s[l])
    })), a = {
      name: n.get("name"),
      startsAt: n.get("startDate"),
      endsAt: n.get("endDate"),
      description: n.get("description"),
      location: n.get("location"),
      credits: i
    };
    e(a);
  }
  return /* @__PURE__ */ D("form", { onSubmit: t, children: [
    /* @__PURE__ */ D("div", { role: "group", "aria-labelledby": "activity-info-heading", children: [
      /* @__PURE__ */ g(
        "div",
        {
          className: "cme-text-base cme-font-semibold cme-leading-7",
          id: "activity-info-heading",
          children: "Activity Information"
        }
      ),
      /* @__PURE__ */ g("p", { className: "cme-mt-1 cme-text-sm cme-leading-6 cme-text-muted-foreground", children: "Provide some basic information about the activity." }),
      /* @__PURE__ */ D("div", { className: "cme-mt-10 cme-space-y-8", children: [
        /* @__PURE__ */ D("div", { className: "cme-grid cme-w-full cme-items-center cme-gap-2", children: [
          /* @__PURE__ */ g(Y, { className: "cme-w-fit", htmlFor: "name", children: "Name" }),
          /* @__PURE__ */ g(ie, { id: "name", name: "name", required: !0 })
        ] }),
        /* @__PURE__ */ D("div", { className: "cme-grid cme-grid-cols-2 cme-gap-4", children: [
          /* @__PURE__ */ D("div", { className: "cme-grid cme-w-full cme-items-center cme-gap-2", children: [
            /* @__PURE__ */ g(Y, { className: "cme-w-fit", htmlFor: "start-date", children: "Start Date" }),
            /* @__PURE__ */ g(ie, { type: "date", id: "start-date", name: "startDate", required: !0 })
          ] }),
          /* @__PURE__ */ D("div", { className: "cme-grid cme-w-full cme-items-center cme-gap-2", children: [
            /* @__PURE__ */ g(Y, { className: "cme-w-fit", htmlFor: "end-date", children: "End Date" }),
            /* @__PURE__ */ g(ie, { type: "date", id: "end-date", name: "endDate", required: !0 })
          ] })
        ] }),
        /* @__PURE__ */ D("div", { className: "cme-grid cme-w-full cme-items-center cme-gap-2", children: [
          /* @__PURE__ */ g(Y, { className: "cme-w-fit", htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ g(er, { id: "description", name: "description", required: !0 })
        ] }),
        /* @__PURE__ */ D("div", { className: "cme-grid cme-w-full cme-items-center cme-gap-2", children: [
          /* @__PURE__ */ g(Y, { className: "cme-w-fit", htmlFor: "location", children: "Location" }),
          /* @__PURE__ */ g(ie, { id: "location", name: "location" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ g("hr", { className: "cme-my-12" }),
    /* @__PURE__ */ g(ko, {}),
    /* @__PURE__ */ g("div", { className: "cme-mt-8", children: /* @__PURE__ */ g(Ht, { type: "submit", children: "Submit" }) })
  ] });
}
function ko() {
  const { creditTypes: e, isLoading: t, isError: r } = $o();
  return t ? /* @__PURE__ */ g("p", { children: "Loading credit types..." }) : r ? /* @__PURE__ */ g("p", { children: "Error loading credit types" }) : /* @__PURE__ */ D("div", { role: "group", "aria-labelledby": "credits-heading", children: [
    /* @__PURE__ */ g(
      "div",
      {
        id: "credits-heading",
        className: "cme-text-base cme-font-semibold cme-leading-7",
        children: "Credits"
      }
    ),
    /* @__PURE__ */ g("p", { className: "cme-mt-1 cme-text-sm cme-leading-6 cme-text-muted-foreground", children: "Specify the types and amounts of credits available for this activity." }),
    /* @__PURE__ */ g("div", { className: "cme-mt-10 cme-space-y-6", children: e == null ? void 0 : e.map((n) => /* @__PURE__ */ g(Ao, { creditType: n }, n.id)) })
  ] });
}
function Ao({ creditType: e }) {
  return /* @__PURE__ */ D("div", { className: "cme-group cme-overflow-hidden cme-rounded-md cme-border cme-border-input cme-bg-gray-100 cme-transition [&:has(:checked)]:cme-border-foreground/15", children: [
    /* @__PURE__ */ D("div", { className: "cme-flex cme-shrink-0 cme-items-center cme-gap-x-2 cme-rounded-b-md cme-bg-white cme-p-4 cme-transition group-has-[:checked]:cme-shadow-md", children: [
      /* @__PURE__ */ g(
        Qt,
        {
          name: "creditTypeId",
          id: e.name,
          value: String(e.id)
        }
      ),
      /* @__PURE__ */ g(
        Y,
        {
          htmlFor: e.name,
          className: "cme-text-muted-foreground group-has-[:checked]:cme-text-foreground",
          children: e.name
        }
      )
    ] }),
    /* @__PURE__ */ g("div", { className: "cme-grid cme-grid-cols-1 cme-grid-rows-[0fr] cme-opacity-0 cme-transition-all group-has-[:checked]:cme-grid-rows-[1fr] group-has-[:checked]:cme-opacity-100", children: /* @__PURE__ */ g("div", { className: "cme-overflow-hidden", children: /* @__PURE__ */ D("div", { className: "cme-flex cme-items-center cme-gap-x-8 cme-px-4 cme-py-3", children: [
      /* @__PURE__ */ g("p", { className: "cme-text-sm cme-font-medium cme-leading-6", children: "Credit Amounts" }),
      /* @__PURE__ */ D("div", { className: "cme-flex cme-items-center cme-gap-x-1.5", children: [
        /* @__PURE__ */ g(
          ie,
          {
            name: "amount",
            id: `amount-${e.id}`,
            className: "cme-w-24"
          }
        ),
        /* @__PURE__ */ g(
          Y,
          {
            htmlFor: `amount-${e.id}`,
            className: "cme-text-foreground/75",
            children: "Minimum"
          }
        )
      ] }),
      /* @__PURE__ */ D("div", { className: "cme-flex cme-items-center cme-gap-x-1.5", children: [
        /* @__PURE__ */ g(
          ie,
          {
            name: "maximum",
            id: `maximum-${e.id}`,
            className: "cme-w-24"
          }
        ),
        /* @__PURE__ */ g(
          Y,
          {
            htmlFor: `maximum-${e.id}`,
            className: "cme-text-foreground/75",
            children: "Maximum"
          }
        )
      ] }),
      /* @__PURE__ */ D("div", { className: "cme-flex cme-items-center cme-gap-x-1.5", children: [
        /* @__PURE__ */ g(
          ie,
          {
            name: "increment",
            id: `increment-${e.id}`,
            className: "cme-w-24"
          }
        ),
        /* @__PURE__ */ g(
          Y,
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
  Do as ActivityForm,
  Lo as CmeProvider,
  lo as useCme
};

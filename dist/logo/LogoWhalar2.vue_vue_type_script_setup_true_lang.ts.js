import { defineComponent as n, computed as s, openBlock as c, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoWhalar2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (c(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "243",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 243",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#22CACE",
          d: "M255.998 115.176v64.007c-.033.621-2.003 31.689-63.997 31.689-62.62 0-63.998 30.319-63.998 31.697 0-1.464-1.378-31.697-63.998-31.697-61.44 0-63.953-27.416-64.004-31.254v-.215c.001-.15.006-.23.006-.23v-63.997s2.843 31.697 63.998 31.697 63.998 28.856 63.998 31.698c0-2.153.689-31.698 63.998-31.698 62.078 0 63.94-30.472 63.996-31.671zM256 0v63.998s0 31.698-63.998 31.698c-63.358 0-63.992 29.631-63.998 31.645l-.002-.065c-.078-2.461-2.628-31.58-63.996-31.58C2.486 95.696.041 68.28.001 64.442v-.214c.002-.15.007-.23.007-.23V.038c.026 1.217 1.28 31.66 63.998 31.66s63.972 28.374 63.997 31.536v.161c0-2.842.69-31.698 63.999-31.698C255.31 31.697 256 0 256 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
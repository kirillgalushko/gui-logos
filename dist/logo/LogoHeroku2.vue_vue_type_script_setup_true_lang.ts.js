import { defineComponent as c, computed as h, openBlock as m, createElementBlock as n, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoHeroku2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "285",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 285",
      style: r(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#430098",
          d: "M230.4 0c13.996 0 25.37 11.232 25.597 25.177l.003.423v233.244c0 13.996-11.235 25.37-25.177 25.597l-.423.003H25.6c-13.996 0-25.37-11.235-25.597-25.176L0 258.844V25.6C0 11.601 11.235.23 25.177.003L25.6 0zm0 14.222H25.6c-6.174 0-11.218 4.948-11.374 11.085l-.004.293v233.244c0 6.174 4.948 11.218 11.085 11.374l.293.004h204.8c6.177 0 11.218-4.947 11.374-11.084l.004-.294V25.6c0-6.272-5.102-11.378-11.378-11.378M64 184.89l32 28.444-32 28.445zM92.444 42.667v80.75c14.201-4.622 34.052-9.64 53.334-9.64 17.582 0 28.106 6.913 33.838 12.712 12.109 12.25 12.397 27.82 12.381 29.897v.058l.003 85.334h-28.444v-84.942c-.14-6.639-3.34-14.614-17.778-14.614-28.632 0-60.714 14.257-61.666 14.683l-.02.009L64 166.016V42.666zm99.556 0c-1.92 16.156-8.47 31.644-21.333 46.222h-28.445c11.179-14.667 18.198-30.101 21.334-46.222Z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
import { defineComponent as h, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoPkg",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "229",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 229",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M130.307 0 256 180.877l-124.098 47.816v-24.72l9.772-5.985zm-4.626.004-9.424 164.25-.776 13.526-1.164 20.288 9.756 5.786v24.811l-33.031-12.718-16.48-6.346C49.841 200.08 25.1 190.555 0 180.89l17.84-25.676 8.912-12.827z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

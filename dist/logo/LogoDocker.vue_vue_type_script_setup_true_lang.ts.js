import { defineComponent as m, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as h } from "vue";
const c = /* @__PURE__ */ m({
  __name: "LogoDocker",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -35.5 256 256",
      style: s(i.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#2396ED",
          "fill-rule": "nonzero",
          d: "M250.716 70.497c-5.765-4-18.976-5.5-29.304-3.5-1.2-10-6.725-18.749-16.333-26.499l-5.524-4-3.844 5.75c-4.803 7.5-7.205 18-6.485 28 .24 3.499 1.441 9.749 5.044 15.249-3.362 2-10.328 4.5-19.455 4.5H1.155l-.48 2c-1.682 9.999-1.682 41.248 18.014 65.247 14.892 18.249 36.99 27.499 66.053 27.499 62.93 0 109.528-30.25 131.386-84.997 8.647.25 27.142 0 36.51-18.75.24-.5.72-1.5 2.401-5.249l.961-2zM139.986 0h-26.42v24.999h26.42zm0 29.999h-26.42v24.999h26.42zm-31.225 0h-26.42v24.999h26.42zm-31.225 0H51.115v24.999h26.421zM46.311 59.998H19.89v24.999h26.42zm31.225 0H51.115v24.999h26.421zm31.225 0h-26.42v24.999h26.42zm31.226 0h-26.422v24.999h26.422zm31.225 0H144.79v24.999h26.422z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};
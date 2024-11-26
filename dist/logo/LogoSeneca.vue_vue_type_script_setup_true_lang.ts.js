import { defineComponent as m, computed as n, openBlock as l, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoSeneca",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (l(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "200",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 200",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "m75.36 199.75 5.346-150.487h13.2l4.807 135.357c-8.61 4.885-16.455 9.979-23.355 15.128zm41.55-24.595 5.692-125.892h14.085l5.213 115.3a273 273 0 0 0-11.909 4.687 257 257 0 0 0-13.08 5.903zm44.787-17.16 5.482-108.732h12.316l5.206 103.258c-7.318 1.33-15.03 3.154-23.004 5.474M33.535.026a6 6 0 0 1 .548-.024h187.511q.376 0 .74.044.308-.042.559-.042V0c5.124 0 28.628 13.573 31.188 18.005 2.559 4.436 2.559 31.578 0 36.012-2.56 4.436-26.066 18.01-31.184 18.01-5.122 0-28.629-13.574-31.188-18.01-1.948-3.376-2.413-19.9-1.396-29.56H65.687c1.017 9.66.552 26.186-1.396 29.56-2.56 4.436-26.066 18.01-31.184 18.01-5.122 0-28.628-13.574-31.188-18.01s-2.559-31.574 0-36.01C4.48 13.575 27.985.004 33.107.004V0q.196 0 .428.026"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

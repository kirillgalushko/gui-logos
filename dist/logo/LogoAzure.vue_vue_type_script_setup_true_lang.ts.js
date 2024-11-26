import { defineComponent as l, computed as r, openBlock as h, createElementBlock as m, normalizeStyle as s, createElementVNode as o } from "vue";
const p = /* @__PURE__ */ l({
  __name: "LogoAzure",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 -28.5 256 256",
      style: s(n.value)
    }, t[0] || (t[0] = [
      o("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        o("path", {
          fill: "#0089D6",
          "fill-rule": "nonzero",
          d: "M118.432 187.698c32.89-5.81 60.055-10.618 60.367-10.684l.568-.12-31.052-36.935c-17.078-20.314-31.051-37.014-31.051-37.11 0-.182 32.063-88.477 32.243-88.792.06-.105 21.88 37.567 52.893 91.32 29.035 50.323 52.973 91.815 53.195 92.203l.405.707-98.684-.012-98.684-.013zM0 176.435c0-.052 14.631-25.451 32.514-56.442l32.514-56.347 37.891-31.799C123.76 14.358 140.867.027 140.935.001c.069-.026-.205.664-.609 1.534s-18.919 40.582-41.145 88.25l-40.41 86.67-29.386.037c-16.162.02-29.385-.005-29.385-.057"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};

import { defineComponent as l, computed as n, openBlock as r, createElementBlock as m, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoServerless",
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
    return (p, t) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "204",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 204",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F26D61",
          "fill-rule": "nonzero",
          d: "M0 161.202h45.312l-14.039 42.396H0zM0 80.6h72l-14.036 42.396H0zM0 0h98.692l-14.04 42.395H0zm143.349 0H256v42.395H129.312zM116.66 80.6H256v42.397H102.622zm-26.69 80.602H256v42.396H75.933z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

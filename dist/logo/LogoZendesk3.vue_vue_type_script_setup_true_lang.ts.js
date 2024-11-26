import { defineComponent as n, computed as h, openBlock as s, createElementBlock as r, normalizeStyle as p, createElementVNode as i } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoZendesk3",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, t) => (s(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "195",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 195",
      style: p(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#03363D",
          d: "M118.25 51.233v142.773H0zm0-51.233c0 32.644-26.481 59.125-59.125 59.125S0 32.645 0 0zm19.5 194.006c0-32.677 26.449-59.125 59.125-59.125S256 161.361 256 194.006zm0-51.266V0H256z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};

import { defineComponent as n, computed as m, openBlock as s, createElementBlock as c, normalizeStyle as l, createElementVNode as r } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoOdnoklassniki",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (h, t) => (s(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xml:space": "preserve",
      x: "0",
      y: "0",
      version: "1.1",
      viewBox: "0 0 1258.2 2174.7",
      style: l(i.value)
    }, t[0] || (t[0] = [
      r("path", {
        d: "M629.9 1122.4c310-.1 561.1-251.5 561-561.4C1190.8 251 939.4-.1 629.5 0S68.4 251.5 68.5 561.4c.4 309.8 251.6 560.8 561.4 561m0-793.4c128.4 0 232.5 104.1 232.5 232.5S758.3 793.9 629.9 793.9 397.4 689.8 397.4 561.4c.2-128.3 104.2-232.3 232.5-232.4m226.9 1251.3c115.5-26.2 225.7-71.9 326-135 76.4-49.3 98.4-151.1 49.1-227.5-48.5-75.2-148.3-97.9-224.5-51-231.1 144.5-524.5 144.5-755.6 0-76.7-48.1-178-25.1-226.3 51.5C-23 1295-.2 1396.6 76.6 1445.1c.1 0 .2.1.2.1 100.2 63 210.4 108.7 325.8 135L88.8 1894c-62.5 66-59.6 170.2 6.5 232.7 63.5 60 162.7 60 226.2 0l308.2-308.4 308.4 308.4c64.2 64.1 168.1 64.1 232.3 0 64.1-64.2 64.1-168.1 0-232.3z",
        style: { fill: "#eb722e" }
      }, null, -1)
    ]), 4));
  }
});
export {
  d as _
};

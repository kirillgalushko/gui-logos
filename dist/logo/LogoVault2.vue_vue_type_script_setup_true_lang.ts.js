import { defineComponent as o, computed as n, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as h } from "vue";
const z = /* @__PURE__ */ o({
  __name: "LogoVault2",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const e = m, i = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: l(i.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#FFD814",
          d: "m0 0 127.56 256L256 0zm142.698 51.384h14.859v14.859h-14.859zm-29.557 59.354H98.323V95.92h14.818zm0-22.267H98.323V73.692h14.818zm0-22.228H98.323V51.384h14.818zm22.428 66.763h-14.818v-14.858h14.818zm0-22.268h-14.818V95.92h14.818zm0-22.267h-14.818V73.692h14.818zm0-22.228h-14.818V51.384h14.818zm7.13 7.45h14.858V88.51h-14.859zm0 37.085V95.96h14.858v14.818z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  z as _
};

import { defineComponent as m, computed as n, openBlock as h, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ m({
  __name: "LogoTeamgrid",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "163",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 163",
      style: s(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#3C7DD0",
          d: "m0 137.507 26.771-21.6V46.85L0 30.118zM43.503 8.821v144.352l29.966-25.25V34.681zM90.05 0v162.757l29.965-30.726V30.27zm139.18 46.85v69.057l26.771 21.6V30.116zM212.497 8.822v144.352l-29.966-25.25V34.681zM165.95 0l-29.966 30.27v101.761l29.966 30.726z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

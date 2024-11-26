import { defineComponent as m, computed as n, openBlock as s, createElementBlock as c, normalizeStyle as p, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoCopyleft",
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
    return (r, t) => (s(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M128 256c70.692 0 128-57.308 128-128S198.692 0 128 0 0 57.308 0 128s57.308 128 128 128m0-26.122c-56.265 0-101.878-45.613-101.878-101.878S71.735 26.122 128 26.122 229.878 71.735 229.878 128 184.265 229.878 128 229.878m-1.045-173.715c-33.96 0-62.433 23.772-69.747 55.641h34.22c6.27-13.584 19.854-22.988 35.527-22.988 21.682 0 39.184 17.502 39.184 39.184s-17.502 39.184-39.184 39.184c-15.673 0-29.257-9.404-35.526-22.727h-34.22c7.313 31.608 35.787 55.38 69.746 55.38 39.706 0 71.837-32.13 71.837-71.837s-32.13-71.837-71.837-71.837"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

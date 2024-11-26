import { defineComponent as m, computed as s, openBlock as l, createElementBlock as n, normalizeStyle as r, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoPrestashop2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, t) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "330",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 330",
      style: r(o.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "M88.403 0C145.078.049 256 2.966 256 115.187c0 113.355-104.423 120.999-169.298 120.999v93.7H0V0Zm64.35 161.119H85.766l5.783 22.066h61.206c6.093 0 11.033-4.94 11.033-11.033s-4.94-11.033-11.033-11.033m16.544-27.032h-29.561l5.782 22.066h23.779c6.093 0 11.033-4.94 11.033-11.033 0-6.094-4.94-11.033-11.033-11.033m-17.612-27.033h-66.99l5.782 22.067h61.206c6.094 0 11.033-4.94 11.033-11.034 0-6.093-4.94-11.033-11.033-11.033M96.697 80.022h-22.02l-7.026 22.066h29.046c6.094 0 11.033-4.94 11.033-11.033s-4.94-11.033-11.033-11.033m57.125-27.033h-62.1l-7.025 22.067h69.125c6.094 0 11.033-4.94 11.033-11.033 0-6.094-4.94-11.034-11.033-11.034"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

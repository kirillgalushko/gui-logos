import { defineComponent as h, computed as s, openBlock as l, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoFauna2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "290",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 290",
      style: r(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#3A1AB6",
          d: "M198.883 60.852c-17.581 5.99-26.047 16.735-31.814 33.469-1.488 4.469-5.209 9.413-9.395 12.741l14.419 15.784-45.768-32.708L0 0s9.116 60.472 12.279 82.721c2.233 15.688 6.047 22.724 18.14 29.856l4.837 2.662 20.837 11.22-12.372-6.56 57.116 31.851-.372.857-61.488-29.095c3.256 11.41 9.58 33.373 12.279 43.072 2.883 10.458 6.14 14.261 16.093 17.971l18.326 6.845 11.348-4.564-14.418 9.794-72.093 93.464c47.906-45.448 88.464-61.612 118.139-74.829 37.86-16.734 60.65-27.478 75.534-66.082 10.605-27.098 18.883-61.802 29.397-75.21L256 44.69s-46.42 12.55-57.117 16.163"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

import { defineComponent as h, computed as l, openBlock as r, createElementBlock as m, normalizeStyle as p, createElementVNode as o } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoOctopusDeploy",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "271",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 271",
      style: p(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#2F93E0",
          "fill-rule": "nonzero",
          d: "M17.156 205.219c20.42-13.12 44.304-35.67 35.216-62.083-4.942-14.427-11.815-26.81-12.724-42.4a95.5 95.5 0 0 1 5.68-38.852c18.375-49.019 72.676-72.221 121.723-57.51 45.44 13.632 76.68 66.4 57.88 112.379-10.878 26.554-15.734 47.115 8.604 67.677 6.56 5.68 22.522 13.973 22.465 23.913 0 13.007-25.56-2.84-28.4-5.027 3.237 5.68 35.386 39.164 14.938 41.55-18.829 2.186-35.471-24.112-46.775-35.387-19-18.971-15.705 23.004-15.79 31.666 0 13.689-9.798 41.407-27.15 23.345-14.2-14.91-8.918-38.681-18.886-55.267-11.162-18.147-29.196 18.148-33.882 24.794-5.055 7.412-30.416 43.338-40.527 24.196-8.179-15.534 4.885-39.76 11.36-53.96-2.357 5.112-18.97 12.638-23.827 15.11a64.67 64.67 0 0 1-34.478 7.951c-25.56-1.846-5.964-15.393 4.459-22.095z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

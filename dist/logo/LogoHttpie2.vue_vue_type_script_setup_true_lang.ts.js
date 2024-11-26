import { defineComponent as n, computed as m, openBlock as p, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoHttpie2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "306",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 306",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "M256 66.28C255.732 29.408 224.974 0 188.102 0H67.96C31.366 0 .719 28.947.01 65.553a66.896 66.896 0 0 0 66.85 68.097h53.676a3.894 3.894 0 0 1 1.552 7.412L39.803 177.13C15.463 187.92-.163 212.112.011 238.736c.279 36.878 31.017 66.312 67.902 66.312H96.07c37.144 0 68.07-29.79 68.012-66.935-.076-27.213-16.624-51.67-41.856-61.86a3.855 3.855 0 0 1-.065-7.1l94.11-41.266c24.316-10.808 39.916-34.998 39.73-61.607"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

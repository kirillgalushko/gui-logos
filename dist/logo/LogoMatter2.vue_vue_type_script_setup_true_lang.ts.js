import { defineComponent as n, computed as h, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoMatter2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (a, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "251",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 251",
      style: s(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#231F20",
          d: "M76.02 64.287a82.3 82.3 0 0 0 37.215 17.077V8.556L128.064 0l14.816 8.556v72.808a82.4 82.4 0 0 0 37.228-17.077l26.92 15.57c-43.782 43.316-114.274 43.316-158.056 0zm32.717 185.928C124.35 190.623 89.072 129.57 29.645 113.34v31.152a82.4 82.4 0 0 1 33.413 23.686L0 204.582v17.124l14.828 8.51 63.047-36.404a82.3 82.3 0 0 1 3.814 40.774zM226.413 113.34c-59.395 16.266-94.634 77.305-79.023 136.875l26.979-15.582a82.4 82.4 0 0 1 3.814-40.775l63 36.358L256 221.66v-17.078l-63.058-36.404a82.5 82.5 0 0 1 33.413-23.686z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

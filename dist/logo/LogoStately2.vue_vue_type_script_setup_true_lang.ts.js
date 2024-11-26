import { defineComponent as m, computed as n, openBlock as h, createElementBlock as s, normalizeStyle as c, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoStately2",
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
    return (r, t) => (h(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "306",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 306",
      style: c(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "m83.605.045 169.1 169.1c1.953 2.074 3.295 5.003 3.295 8.175 0 3.538-1.586 6.71-4.149 8.784L136.433 301.522a12.15 12.15 0 0 1-17.202 0L3.569 185.86a12.15 12.15 0 0 1 0-17.203L74.82 97.283l7.93 7.93 1.663 1.637c11.319 11.807 26.701 41.205 3.462 65.955-2.44 2.44-2.44 6.223 0 8.663l35.626 35.748c2.44 2.44 6.222 2.44 8.662 0l35.626-35.626c1.098-1.099 1.952-2.685 1.952-4.392 0-1.587-.732-3.173-1.83-4.27l-30.502-30.502.123-.122-53.805-53.805C59.325 63.976 59.08 24.568 83.605.045m71.046 9.139c12.246-12.245 32.099-12.245 44.344 0 12.244 12.245 12.244 32.098 0 44.343s-32.098 12.245-44.344 0c-12.245-12.245-12.245-32.098 0-44.343"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

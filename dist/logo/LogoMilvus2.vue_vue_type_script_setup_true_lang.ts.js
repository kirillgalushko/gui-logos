import { defineComponent as n, computed as s, openBlock as c, createElementBlock as h, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoMilvus2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (c(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "175",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 175",
      style: l(m.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#4FC4F9",
          d: "M57.943 25.552c33.946-34.07 88.991-34.07 122.937 0 34 34.069 34 89.305 0 123.318-33.946 34.013-88.991 34.013-122.937-.056L2.46 93.131a8.42 8.42 0 0 1 0-11.896zm109.763 16.364c-24.926-25.021-65.377-25.021-90.303 0L36.624 82.799c-2.405 2.457-2.405 6.367 0 8.768l40.833 40.939c24.927 25.021 65.378 25.021 90.304 0s24.927-65.569-.055-90.59m-44.825 1.62c23.638 0 42.801 19.579 42.801 43.731s-19.163 43.731-42.801 43.731-42.801-19.58-42.801-43.731 19.162-43.731 42.8-43.731m130.7 37.754-24.434-24.965c-1.476-1.508-3.936-.112-3.444 1.955a134.7 134.7 0 0 1 0 57.973c-.437 2.066 2.022 3.406 3.444 1.954l24.434-24.965c3.036-3.154 3.214-8.04.536-11.35z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

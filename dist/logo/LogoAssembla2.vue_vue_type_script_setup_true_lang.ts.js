import { defineComponent as a, computed as m, openBlock as n, createElementBlock as h, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ a({
  __name: "LogoAssembla2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (n(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "284",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 284",
      style: s(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#263238",
          d: "M232.043 53.002 151.197 5.884A46.83 46.83 0 0 0 126.951.02a49.2 49.2 0 0 0-24.392 5.863L22.944 53.002A52.18 52.18 0 0 0 0 94.908V189a52.18 52.18 0 0 0 23.088 41.907l80.195 47.118a46.25 46.25 0 0 0 23.74 5.863 44.95 44.95 0 0 0 23.74-5.863l80.846-46.973A56.02 56.02 0 0 0 256 189.144v-94.09a51.1 51.1 0 0 0-23.957-42.052m-46.756 136.142a3.84 3.84 0 0 1-2.533.652 6.73 6.73 0 0 1-5.211-3.185l-32.064-64.633-32.063 64.488a6.37 6.37 0 0 1-5.211 3.185c-.652 0-2.027 0-2.534-.652a5.935 5.935 0 0 1-2.388-8.034l36.189-71.654-12.232-24.39-50.664 101.907a5.73 5.73 0 0 1-10.206-5.211L121.956 69.72a4.92 4.92 0 0 1 5.212-3.185 6.08 6.08 0 0 1 5.21 3.185l13.174 27.214 6.441 12.16 36.19 72.377a5.935 5.935 0 0 1-2.896 7.672"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
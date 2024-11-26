import { defineComponent as a, computed as n, openBlock as h, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const p = /* @__PURE__ */ a({
  __name: "LogoCreatejs",
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
    return (s, t) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "293",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 293",
      style: r(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#405261",
          d: "M252.078 70.215 131.903 1.043a7.83 7.83 0 0 0-7.806 0L3.92 70.215A7.82 7.82 0 0 0 0 76.995v138.3a7.82 7.82 0 0 0 3.92 6.78l120.177 69.17a7.83 7.83 0 0 0 7.806 0l120.177-69.17a7.82 7.82 0 0 0 3.92-6.78v-138.3c0-2.8-1.494-5.385-3.922-6.78M118.84 45.382a1.3 1.3 0 0 1-.652 1.13l-42.989 24.77a1.305 1.305 0 0 0 0 2.26l42.986 24.742c.404.232.655.662.655 1.129v17.976a1.302 1.302 0 0 1-1.954 1.13L38.754 73.55a1.305 1.305 0 0 1 0-2.26l78.13-45.019c.868-.5 1.956.128 1.956 1.13zm98.404 28.168-78.196 45.007a1.303 1.303 0 0 1-1.953-1.129V99.452c0-.467.25-.897.655-1.13l43.05-24.776c.871-.5.871-1.758 0-2.261l-43.05-24.808a1.3 1.3 0 0 1-.652-1.129V27.367a1.304 1.304 0 0 1 1.956-1.13l78.195 45.055c.866.5.866 1.757-.005 2.258"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};

import { defineComponent as h, computed as m, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoAerospike2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "230",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 230",
      style: l(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#C4373A",
          d: "M256 0v27.43l-60.039 26.468v123.077L256 203.728v26.18L27.017 126.865 0 115.372l27.017-12.389zm-83.138 63.932-115.943 51.36 115.943 51.647z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

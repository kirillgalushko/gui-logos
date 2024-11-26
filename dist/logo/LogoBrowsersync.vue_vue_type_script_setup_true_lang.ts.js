import { defineComponent as c, computed as h, openBlock as r, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoBrowsersync",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (m, t) => (r(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "387",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 387",
      style: l(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#F14646",
          d: "M146.438 115.038V382.03c0 2.837 2.836 4.61 5.318 3.191l102.471-55.667c1.064-.71 1.773-1.773 1.773-3.191V174.96c0-1.418-.71-2.482-1.773-3.191l-102.116-59.923c-2.482-1.418-5.673.355-5.673 3.191M131.9 383.094V3.704c0-2.483-2.482-4.256-4.964-3.546L2.482 46.252C1.064 46.96 0 48.025 0 49.797v288.621c0 1.418 1.064 2.837 2.482 3.546l124.454 44.676c2.482.709 4.964-1.064 4.964-3.546"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

import { defineComponent as m, computed as n, openBlock as s, createElementBlock as c, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoDisqus",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (s(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "249",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 249",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#2E9FFF",
          d: "M132.669 248.633c-30.422 0-58.237-11.117-79.743-29.506L0 226.357l20.447-50.465c-7.124-15.719-11.12-33.17-11.12-51.575C9.327 55.663 64.549 0 132.669 0 200.783 0 256 55.663 256 124.317c0 68.666-55.215 124.316-123.331 124.316m67.346-124.672v-.346c0-35.873-25.298-61.453-68.917-61.453H83.986v124.317H130.4c43.958.001 69.615-26.647 69.615-62.518m-68.398 31.974h-13.78v-63.22h13.78c20.239 0 33.672 11.538 33.672 31.438v.346c0 20.067-13.433 31.436-33.672 31.436"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

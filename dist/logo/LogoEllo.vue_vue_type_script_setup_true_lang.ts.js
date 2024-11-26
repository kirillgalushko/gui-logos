import { defineComponent as h, computed as m, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoEllo",
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
    return (c, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", { "fill-rule": "evenodd" }, [
        i("path", {
          fill: "#000",
          d: "M256 128c0 70.692-57.31 128-128 128C57.306 256 0 198.692 0 128S57.306 0 128 0c70.69 0 128 57.308 128 128m-128 76.8c-34.993 0-65.544-23.685-74.29-57.603a7.32 7.32 0 0 1 5.255-8.91 7.31 7.31 0 0 1 8.908 5.26c7.084 27.452 31.805 46.628 60.127 46.628 28.317 0 53.043-19.177 60.123-46.628 1.008-3.913 4.988-6.276 8.909-5.26a7.31 7.31 0 0 1 5.254 8.91c-8.746 33.918-39.293 57.604-74.286 57.604"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};

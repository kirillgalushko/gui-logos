import { defineComponent as c, computed as m, openBlock as n, createElementBlock as l, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoGraylog2",
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
    return (s, t) => (n(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#03C3FF",
          d: "M128 0c70.809 0 128 57.191 128 128s-57.191 128-128 128S0 198.809 0 128 57.191 0 128 0m0 43.574A84.15 84.15 0 0 0 43.574 128 84.15 84.15 0 0 0 128 212.426 84.15 84.15 0 0 0 212.426 128 84.15 84.15 0 0 0 128 43.574m11.983 27.235 23.421 47.931c.545 1.09 1.634 1.634 2.179 1.634h19.064c4.357 0 8.17 3.813 8.17 8.17 0 4.358-3.268 7.626-7.626 7.626H155.78c-1.09 0-2.179-.544-2.179-1.634l-11.983-24.51-20.153 74.62c-.545 2.18-3.813 2.724-4.902.545L93.14 137.26c-.544-1.09-1.634-1.634-2.178-1.634H70.809c-4.358 0-8.17-3.813-8.17-8.17 0-4.358 3.812-8.17 8.17-8.17h29.412c1.09 0 2.179.544 2.179 1.633l11.983 24.51 20.698-74.076c.545-2.179 3.813-2.723 4.902-.544"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

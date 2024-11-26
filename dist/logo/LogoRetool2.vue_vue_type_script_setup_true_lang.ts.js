import { defineComponent as c, computed as h, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as o } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoRetool2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(n.value)
    }, t[0] || (t[0] = [
      o("g", null, [
        o("path", {
          fill: "#262626",
          d: "M244.272 213.333c6.477 0 11.728 5.252 11.728 11.728v7.482C256 245.498 245.498 256 232.543 256H140.79c-12.954 0-23.457-10.502-23.457-23.457v-7.482c0-6.476 5.252-11.728 11.728-11.728zm-11.73-128c12.956 0 23.458 10.502 23.458 23.457v60.815c0 6.477-5.251 11.728-11.728 11.728H23.457C10.502 181.333 0 170.831 0 157.876V97.062c0-6.478 5.251-11.729 11.728-11.729zM115.21 0c12.954 0 23.457 10.502 23.457 23.457v18.148c0 6.477-5.252 11.728-11.728 11.728H11.729C5.25 53.333 0 48.083 0 41.605V23.457C0 10.502 10.502 0 23.457 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

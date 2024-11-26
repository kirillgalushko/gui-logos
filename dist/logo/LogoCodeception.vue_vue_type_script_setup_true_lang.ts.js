import { defineComponent as l, computed as m, openBlock as c, createElementBlock as h, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoCodeception",
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
    return (p, t) => (c(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "190",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 190",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#236BFD",
          d: "M112.532 92.38 71.17 62.186l39 65.106L256 6.986zm-17.744 79.843c-42.952 0-77.77-34.751-77.77-77.62 0-42.867 34.818-77.62 77.77-77.62 19.02 0 36.436 6.825 49.949 18.14l10.901-12.983C139.161 8.335 117.936 0 94.788 0 42.521 0 0 42.44 0 94.604s42.521 94.604 94.788 94.604c27.105 0 51.572-11.431 68.864-29.697l-12.337-11.628c-14.178 14.978-34.251 24.34-56.527 24.34m0-22.498c-30.502 0-55.228-24.678-55.228-55.121s24.726-55.121 55.228-55.121c13.506 0 25.867 4.854 35.463 12.89l8.185-9.748c-11.82-9.902-27.045-15.88-43.648-15.88-37.49 0-67.992 30.44-67.992 67.859 0 37.417 30.501 67.859 67.992 67.859 19.442 0 36.992-8.2 49.396-21.302l-9.282-8.747c-10.067 10.636-24.295 17.31-40.114 17.31"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

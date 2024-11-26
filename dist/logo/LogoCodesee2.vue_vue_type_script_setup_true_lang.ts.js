import { defineComponent as m, computed as n, openBlock as h, createElementBlock as s, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoCodesee2",
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
    return (c, t) => (h(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "147",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 147",
      style: r(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "m98.154 0 11.692 29.846c-17.846 7.077-41.23 23.385-64 43.692 22.77 20.307 46.154 36.308 64 44l-11.385 29.231C69.846 134.462 34.77 107.384 0 73.231l2.086-2.04C36.158 38.01 70.111 12.06 98.154 0m59.692 0C186.46 12.308 221.23 39.077 256 73.23l-2.087 2.041c-34.083 33.19-68.332 59.437-96.375 71.498l-11.384-29.231c17.846-7.692 41.23-23.693 64-44l-1.848-1.637c-22.181-19.545-44.788-35.17-62.152-42.055zM128 49.846c13.424 0 24.308 10.883 24.308 24.308 0 13.424-10.884 24.307-24.308 24.307-13.425 0-24.308-10.883-24.308-24.307 0-13.425 10.883-24.308 24.308-24.308"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

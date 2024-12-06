import { defineComponent as l, computed as n, openBlock as c, createElementBlock as m, normalizeStyle as r, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoTsuru",
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
    return (s, t) => (c(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "193",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 193",
      style: r(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#3D9",
          d: "M225.378 32.255q-.613-.612-1.225 0L118.813 136.37q-.612.613 0 1.225l20.415 25.722-3.675 28.58c0 .41 0 .818.409.818h.408c.408 0 .408 0 .817-.409l88.6-159.234c.408 0 0-.817-.409-.817M256 69.002l-20.823-36.747c0-.408-.408-.408-.817-.408-.408 0-.408 0-.816.408L219.662 57.57v.817c0 .408.408.408.408.408l34.705 11.024h.408c.409 0 .409 0 .817-.408zM131.879 164.95v-.817L1.225 0S0 .408 0 .817l13.474 137.186-9.8 54.712h124.122c.408.408 4.083-27.764 4.083-27.764"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
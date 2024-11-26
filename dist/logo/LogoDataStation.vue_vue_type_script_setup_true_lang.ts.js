import { defineComponent as a, computed as h, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const l = /* @__PURE__ */ a({
  __name: "LogoDataStation",
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
    return (c, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "321",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 321",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#252539",
          d: "M253.874 117.16c1.174 0 2.126.952 2.126 2.126v34.204a53.58 53.58 0 0 1-22.283 43.49L63.056 319.797a1.701 1.701 0 0 1-2.695-1.38V258.07c0-1.093.525-2.12 1.411-2.759L252.63 117.562a2.13 2.13 0 0 1 1.245-.402m-.425-78.986a2.55 2.55 0 0 1 2.55 2.552v41.932c0 1.64-.788 3.18-2.118 4.139L2.696 267.99A1.701 1.701 0 0 1 0 266.611v-44.34c0-1.093.525-2.12 1.41-2.759L251.956 38.657a2.55 2.55 0 0 1 1.494-.483M176.459 0c1.175 0 2.127.952 2.127 2.126v59.779a3.4 3.4 0 0 1-1.41 2.757L2.698 190.768A1.701 1.701 0 0 1 0 189.389v-39.505a45.08 45.08 0 0 1 18.702-36.555L175.216.402A2.13 2.13 0 0 1 176.46 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  l as _
};

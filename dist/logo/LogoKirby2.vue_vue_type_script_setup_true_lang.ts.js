import { defineComponent as m, computed as n, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoKirby2",
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
    return (p, t) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "299",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 299",
      style: s(h.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#000",
          d: "m128 0 128 74.652v149.362l-128 74.653L0 224.014V74.652zm0 16.782L14.222 83.15v132.366L128 281.877l113.778-66.36V83.15zm56.889 96.996v35.555l-35.556 18.418v2.916h35.556v28.444H71.11v-28.444h35.556v-3.108L71.11 149.333v-35.555L128 144.334z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

import { defineComponent as r, computed as h, openBlock as m, createElementBlock as s, normalizeStyle as l, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ r({
  __name: "LogoPrecursor",
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
    return (p, t) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "299",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 299",
      style: l(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#333",
          d: "M128 0C57.344 0 0 57.344 0 128a128.1 128.1 0 0 0 10.24 50.261l39.253-16.725c-4.437-10.325-6.826-21.59-6.826-33.536 0-47.104 38.229-85.333 85.333-85.333S213.333 80.896 213.333 128c0 43.69-32.853 79.616-75.093 84.736l5.12 42.325C206.763 247.467 256 193.536 256 128 256 57.344 198.656 0 128 0m-12.8 298.667H72.533v-192H115.2z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

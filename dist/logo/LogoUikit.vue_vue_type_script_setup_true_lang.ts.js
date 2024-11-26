import { defineComponent as h, computed as l, openBlock as m, createElementBlock as r, normalizeStyle as s, createElementVNode as i } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoUikit",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (m(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "297",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 297",
      style: s(n.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#2396F3",
          d: "M174.656 28.438 125.717 0 74.646 31.723l49.621 27.414zm23.403 12.245L147.52 71.424l57.28 33.109V192l-77.248 43.904L51.2 192v-68.267L0 98.304v123.563l125.717 74.666L256 222.422V74.155z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

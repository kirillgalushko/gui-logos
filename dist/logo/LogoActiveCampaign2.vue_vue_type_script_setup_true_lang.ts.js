import { defineComponent as c, computed as n, openBlock as m, createElementBlock as h, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoActiveCampaign2",
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
    return (p, t) => (m(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "391",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 391",
      style: s(l.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#004CFF",
          d: "m1.273 0 3.049 2.142c9.488 6.603 232.185 161.826 238.397 166.475 8.795 6.174 13.281 13.81 13.281 22.668v4.397c-.1 6.842-2.558 16.469-13.28 24.52l-.039.026c-5.166 3.692-57.747 40.12-113.415 78.701-4.9 3.397-9.858 6.832-14.827 10.275l-3.314 2.297C61.96 345.572 12.62 379.777 5.947 384.498v6.136l-3.641-6.124c-.177-.315-.34-.58-.151-1.008H2.04v-32.03c0-10.924 1.21-16.178 13.37-24.28 5.179-3.33 49.529-33.955 94.578-65.128l5.3-3.668c41.513-28.73 82.338-57.033 92.364-63.974C186.484 179.718 27.796 69.554 16.923 61.59l-1.286-.932C7.598 54.836 1.273 50.25 1.273 38.128zM21.86 111.361c10.736 6.905 114.562 78.954 115.608 79.697l2.356 1.626-2.394 1.6s-7.018 4.675-14.805 10.118c-6.666 4.889-12.903 7.333-19.102 7.333-5.506 0-10.962-1.915-16.708-5.733-6.12-4.086-23.363-15.98-40.816-28.064l-2.38-1.648A27213 27213 0 0 1 .832 146.592l-.832-.58v-24.47c0-5.62 2.42-10.067 6.666-12.222 4.548-2.318 10.231-1.562 15.195 2.041"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
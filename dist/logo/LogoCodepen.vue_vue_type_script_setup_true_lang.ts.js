import { defineComponent as n, computed as m, openBlock as h, createElementBlock as r, normalizeStyle as d, createElementVNode as l } from "vue";
const s = /* @__PURE__ */ n({
  __name: "LogoCodepen",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (h(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: d(o.value)
    }, t[0] || (t[0] = [
      l("circle", {
        cx: "16",
        cy: "16",
        r: "14",
        fill: "#000"
      }, null, -1),
      l("path", {
        fill: "#fff",
        "fill-rule": "evenodd",
        d: "M15.445 6.168a1 1 0 0 1 1.11 0l9 6A1 1 0 0 1 26 13v6a1 1 0 0 1-.445.832l-9 6a1 1 0 0 1-1.11 0l-9-6A1 1 0 0 1 6 19v-6a1 1 0 0 1 .445-.832zM8 14.868 9.697 16 8 17.131zM8.803 19 15 23.131v-3.596l-3.5-2.333zm4.5-3L16 17.798 18.697 16 16 14.202zM17 12.465l3.5 2.333L23.197 13 17 8.869zm-2-3.596v3.596l-3.5 2.333L8.803 13zm9 6L22.303 16 24 17.131zM23.197 19 20.5 17.202 17 19.535v3.596z",
        "clip-rule": "evenodd"
      }, null, -1)
    ]), 4));
  }
});
export {
  s as _
};

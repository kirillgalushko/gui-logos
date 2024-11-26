import { defineComponent as o, computed as c, openBlock as v, createElementBlock as n, normalizeStyle as r, createElementVNode as h } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoBem",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (v(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "212",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 212",
      style: r(m.value)
    }, t[0] || (t[0] = [
      h("g", { fill: "#010101" }, [
        h("path", { d: "M0 32.692h59.85v17.603H0zM0 0h59.85v17.603H0zm107.38 65.132H0v17.603h103.356c11.316 0 37.72.251 47.528 16.094v-9.807c-4.778-15.592-18.86-23.89-43.505-23.89m.25 32.691H0v17.603h103.356c25.147 0 40.99 1.006 47.528 4.527v-7.796c-5.03-12.322-26.153-14.334-43.253-14.334m-.25 82.986H0v-17.603h103.356c11.316 0 37.72-.251 47.528-16.094v9.807c-4.778 15.592-18.86 23.89-43.505 23.89m.25-32.691H0v-17.603h103.356c25.147 0 40.99-1.006 47.528-4.527v7.796c-5.03 12.322-26.153 14.334-43.253 14.334m69.407 63.12H256v-10.814h-76.7c-6.79 0-22.883-.251-28.667-9.556v6.036c2.766 9.304 11.316 14.334 26.404 14.334m-.251-19.867h78.963v-10.813H179.3c-15.34 0-24.896-.503-28.668-2.766v4.778c3.017 7.544 15.842 8.801 26.153 8.801" })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

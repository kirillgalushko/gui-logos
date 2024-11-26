import { defineComponent as h, computed as m, openBlock as l, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoPocket",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, o) => (l(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 -2.5 48 48",
      style: s(n.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#F43B53" }, [
          t("path", { d: "M23.985 0q9.77-.001 19.54.002c2.019.001 3.754 1.303 4.256 3.195.08.299.13.615.13.924.003 5.089.028 10.178-.018 15.267-.047 5.2-1.62 9.907-4.82 14.018-3.562 4.574-8.155 7.587-13.816 8.895C16.26 45.305 3.842 36.915.777 25.173c-.409-1.565-.687-3.153-.7-4.77A1758 1758 0 0 1 0 4.163C.001 1.882 2.034.002 4.408.002 10.933-.003 17.459 0 23.985 0m.008 21.88c-.12-.113-.213-.196-.302-.282-2.9-2.786-5.798-5.576-8.702-8.357a3.256 3.256 0 0 0-4.64.09 3.26 3.26 0 0 0 .082 4.62q5.647 5.453 11.319 10.88c1.26 1.205 3.2 1.192 4.477.002.512-.476 1.011-.966 1.515-1.451q4.848-4.662 9.7-9.32c.778-.745 1.185-1.646 1.083-2.719-.13-1.364-.85-2.345-2.14-2.816-1.288-.468-2.458-.185-3.451.763-1.626 1.553-3.244 3.114-4.865 4.672z" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};

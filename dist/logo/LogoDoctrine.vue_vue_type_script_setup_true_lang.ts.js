import { defineComponent as n, computed as c, openBlock as l, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoDoctrine",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "339",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 339",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FE8439",
          d: "M208.493 111.5c-.294-.317-.562-.651-.872-.96L106.545 9.906C94.453-2.132 74.89-2.092 62.85 10s-11.997 31.655.095 43.694L96.348 86.95C40.966 101.042 0 151.233 0 211c0 70.693 57.308 128 128 128s128-57.308 128-128c0-40.189-18.535-76.032-47.507-99.5"
        }),
        t("path", {
          fill: "#FFF",
          d: "m203.633 195.181-73.048-72.165c-9.711-9.594-25.36-9.495-34.955.212-9.594 9.712-9.5 25.362.213 34.956l30.23 29.864H62.235c-13.652 0-24.718 11.066-24.718 24.717 0 13.652 11.066 24.718 24.718 24.718h64.493L96.012 268.39c-9.622 9.682-9.572 25.332.109 34.957a24.64 24.64 0 0 0 17.424 7.184c6.35 0 12.702-2.433 17.533-7.293l70.73-71.173c.13-.13.24-.274.366-.407a24.65 24.65 0 0 0 6.952-9.503 24.72 24.72 0 0 0-5.493-26.974"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

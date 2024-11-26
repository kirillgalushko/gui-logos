import { defineComponent as l, computed as m, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoSourcegraph",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, i) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "262",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 262",
      style: r(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#F96316",
          d: "m74.203 33.602 56.952 208.194c3.827 13.991 18.27 22.23 32.254 18.4 13.993-3.833 22.224-18.28 18.394-32.27l-56.962-208.2c-3.83-13.987-18.27-22.228-32.254-18.394C78.607 5.157 70.373 19.609 74.203 33.6z"
        }),
        t("path", {
          fill: "#B200F8",
          d: "M179.662 32.813 37.046 193.858c-9.621 10.86-8.616 27.464 2.233 37.087 10.85 9.62 27.438 8.617 37.059-2.238L218.954 67.665c9.621-10.86 8.616-27.459-2.233-37.083-10.854-9.63-27.446-8.624-37.059 2.23z"
        }),
        t("path", {
          fill: "#00B4F2",
          d: "m18.065 122.054 203.387 67.293c13.765 4.552 28.615-2.92 33.167-16.696 4.562-13.774-2.911-28.63-16.681-33.189L34.556 72.175C20.786 67.62 5.942 75.091 1.387 88.867c-4.55 13.775 2.924 28.635 16.682 33.187z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

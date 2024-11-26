import { defineComponent as n, computed as m, openBlock as l, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoAkka",
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
    return (s, i) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "182",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 182",
      style: r(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#0B5567",
          d: "M216.358 174.771c38.778 31.001 63.622-61.57 1.836-78.636-51.848-14.366-104.02 10.262-156.3 67.727 0 0 96.567-35.322 154.464 10.91"
        }),
        t("path", {
          fill: "#15A9CE",
          d: "M62.758 163.105c37.158-38.562 98.943-81.552 156.516-65.674 13.394 3.78 22.9 11.558 29.057 20.847L193.89 8.425c-7.778-12.422-27.653-9.83-38.887-.324L11.126 128.648c-13.07 11.234-13.826 31.217-1.729 43.315 10.694 10.694 27.653 11.666 39.427 2.16z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

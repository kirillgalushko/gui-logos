import { defineComponent as h, computed as l, openBlock as m, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoMiro2",
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
    return (s, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FD3",
          d: "M0 64C0 28.654 28.654 0 64 0h128c35.346 0 64 28.654 64 64v128c0 35.346-28.654 64-64 64H64c-35.346 0-64-28.654-64-64z"
        }),
        t("polygon", {
          fill: "#000",
          points: "170.1952 48.8 146.956 48.8 166.3216 82.8256 123.7168 48.8 100.4784 48.8 121.7808 90.388 77.23904 48.8 54 48.8 77.23904 101.7368 54 207.6 77.23904 207.6 121.7808 94.1744 100.4784 207.6 123.7168 207.6 166.3216 86.612 146.956 207.6 170.1952 207.6 212.8 75.26344"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

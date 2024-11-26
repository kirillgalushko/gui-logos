import { defineComponent as l, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ l({
  __name: "LogoVwo",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "170",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 170",
      style: s(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#BF3078",
          d: "M427.709 0c-3.145 0-6.919 0-10.064.627l-18.24 31.929c8.176-5.01 18.24-7.513 28.304-7.513 32.707 0 59.753 26.92 59.753 59.475s-27.046 59.475-59.753 59.475-59.125-26.294-59.754-58.848l-18.869 31.929c12.58 30.675 43.4 51.962 77.994 51.962 46.545 0 84.913-38.19 84.913-84.518C512.623 38.19 474.253 0 427.709 0"
        }),
        t("path", {
          fill: "#802050",
          d: "m171.083 88.274 14.467-25.043 32.708 55.72 37.737-64.484 37.738 64.485L358.52 9.39C361.665 3.756 367.955 0 374.874 0h18.24l-99.38 169.036-37.737-64.485-37.74 64.485z"
        }),
        t("path", {
          fill: "#26134D",
          d: "M198.13 0 98.752 169.036 0 0h18.24c6.919 0 13.21 3.756 16.354 9.39l64.157 110.187L163.536 9.39C166.681 3.756 172.97 0 179.89 0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};

import { defineComponent as m, computed as h, openBlock as n, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoPyup",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, l) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "296",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 296",
      style: r(o.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("path", {
          fill: "#4F859A",
          d: "M91.265 126.16v.007l.33.304 36.633 21.266 36.782-21.64.238-.268v-.005l-37.195-20.605zm113.488-23.258.503-.014L255.67 73.63l.33-.469-51.247-29.328zM128.157 0 0 74.038l.425.744 50.71 28.965.68-.113 76.443-43.791 36.966 22.094V21.212z"
        }),
        t("path", {
          fill: "#2E6371",
          d: "m0 220.735 51.81 30.389V103.637l.005-.003L0 74.039zm91.649 53.756 36.608 21.472.486-1.21v-59.355l-.486-1.062-36.608-19.094zm-.384-148.324v42.882l36.976 21.067.016-.009.148-.338-.011-42.233-.137-.24z"
        }),
        t("path", {
          fill: "#1BAFCE",
          d: "M204.753 102.902v89.008l-76.495 42.425v61.628L256 220.734V73.161zm-39.505 22.927-36.991 21.467v42.81l36.99-21.168z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};

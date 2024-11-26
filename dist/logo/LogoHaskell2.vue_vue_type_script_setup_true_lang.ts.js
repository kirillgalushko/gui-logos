import { defineComponent as l, computed as h, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ l({
  __name: "LogoHaskell2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, n = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "181",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 181",
      style: s(n.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#453A62",
          points: "0 180.591468 60.2352941 90.2969514 0 0 45.1764706 0 105.411765 90.2969514 45.1764706 180.591468"
        }),
        t("polygon", {
          fill: "#5E5086",
          points: "60.2352941 180.591468 120.470588 90.2969514 60.2352941 0 105.411765 0 225.877484 180.591468 180.705882 180.591468 143.061258 124.158612 105.40933 180.591468"
        }),
        t("path", {
          fill: "#8F4E8B",
          d: "m205.804 127.92-20.079-30.1H256v30.102h-50.196zm-30.118-45.145-20.078-30.1H256v30.1z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

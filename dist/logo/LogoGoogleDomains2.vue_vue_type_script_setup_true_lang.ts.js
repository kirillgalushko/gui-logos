import { defineComponent as l, computed as n, openBlock as m, createElementBlock as s, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoGoogleDomains2",
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
    return (r, i) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "239",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 239",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#4285F4",
          d: "M247.17 0c6.333 0 10.606 6.467 8.104 12.28L166.02 225.8a21.4 21.4 0 0 1-19.633 12.877H85.39c-6.333 0-10.76-6.256-8.238-12.069l6.987-16.765 15.244-89.023 44.29-53.837 22.56-54.106C169.6 5.062 175.912 0 184.44 0z"
        }),
        t("path", {
          fill: "#FBBC04",
          d: "M143.981 66.233c-15.514-15.071-36.764-24.253-60.13-24.003C37.038 42.75-.515 81.015.004 127.692c.5 45.945 37.707 82.902 83.537 83.556.212-.577 40.999-64.597 40.999-64.597s19.44-80.38 19.44-80.418"
        }),
        t("path", {
          fill: "#EA4335",
          d: "M143.981 66.233S83.484 211.267 83.542 211.267q1.098.03 2.194 0c46.831-.52 84.365-38.765 83.845-85.461-.25-23.367-10.028-44.425-25.6-59.573"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

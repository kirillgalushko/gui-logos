import { defineComponent as h, computed as r, openBlock as n, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoCircleci2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, c = r(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "259",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 259",
      style: s(c.value)
    }, i[0] || (i[0] = [
      t("g", { fill: "#343434" }, [
        t("circle", {
          cx: "126.157",
          cy: "129.008",
          r: "30.593"
        }),
        t("path", { d: "M1.204 96.572c0 .368-.369 1.105-.369 1.474 0 3.317 2.58 6.266 6.266 6.266h51.972c2.58 0 4.423-1.474 5.529-3.686 10.69-23.59 34.28-39.44 61.186-39.44 37.228 0 67.453 30.225 67.453 67.453s-30.225 67.453-67.453 67.453c-27.276 0-50.497-16.218-61.186-39.071-1.106-2.58-2.949-4.055-5.53-4.055H7.103c-3.318 0-6.267 2.58-6.267 6.267 0 .368 0 1.105.369 1.474 14.375 56.026 64.872 97.309 124.953 97.309 71.139 0 129.008-57.87 129.008-129.008S197.295 0 126.157 0C66.077 0 15.579 41.283 1.204 96.572" })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

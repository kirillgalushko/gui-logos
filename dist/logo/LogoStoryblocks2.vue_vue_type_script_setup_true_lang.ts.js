import { defineComponent as c, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as h, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoStoryblocks2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, i) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: h(s.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("circle", {
          cx: "128",
          cy: "128",
          r: "128",
          fill: "#FFE121"
        }),
        t("path", {
          fill: "#000",
          d: "M122.4 60.8v86.4c-24 0-43.2-19.2-43.2-43.2s19.2-43.2 43.2-43.2m11.2 134.4v-86.4c24 0 43.2 19.2 43.2 43.2 0 23.613-18.586 42.58-42.043 43.185zM154 60.8c11.2 0 20.4 9.2 20.4 20.4s-9.2 20.4-20.4 20.4-20.4-9.2-20.4-20.4 9.2-20.4 20.4-20.4m-52 93.6c11.2 0 20.4 9.2 20.4 20.4s-9.2 20.4-20.4 20.4-20.4-9.2-20.4-20.4 9.2-20.4 20.4-20.4"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

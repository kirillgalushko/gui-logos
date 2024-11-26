import { defineComponent as h, computed as n, openBlock as c, createElementBlock as m, normalizeStyle as r, createElementVNode as t } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoKhanAcademy2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (a, i) => (c(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "276",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 276",
      style: r(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#14BF96",
          d: "M16.252 57.155A35.07 35.07 0 0 0 0 84.735v106.38a35.07 35.07 0 0 0 16.252 27.58l95.447 53.387a36.94 36.94 0 0 0 32.505 0l95.545-53.387a35.07 35.07 0 0 0 16.252-27.58V84.735a35.07 35.07 0 0 0-16.252-27.58L144.302 3.768a36.94 36.94 0 0 0-32.505 0z"
        }),
        t("path", {
          fill: "#FFF",
          d: "M226.057 111.527c-52.993 0-92.59 43.93-92.59 97.81v2.266H122.83v-2.266c0-53.88-39.4-97.613-92.788-97.81v9.85c-.214 40.761 24.922 77.365 63.041 91.802a103.1 103.1 0 0 0 35.362 6.304 104.8 104.8 0 0 0 35.657-6.304c38.063-14.493 63.144-51.075 62.943-91.802-.494-3.152-.691-6.501-.987-9.85"
        }),
        t("circle", {
          cx: "128.05",
          cy: "86.114",
          r: "29.55",
          fill: "#FFF"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};

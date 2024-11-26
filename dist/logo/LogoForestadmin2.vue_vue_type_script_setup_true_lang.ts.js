import { defineComponent as h, computed as n, openBlock as l, createElementBlock as c, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoForestadmin2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, i) => (l(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(m.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#54BD7E",
          d: "M21.333 0h213.334C246.449 0 256 9.551 256 21.333v213.334c0 11.782-9.551 21.333-21.333 21.333H21.333C9.551 256 0 246.449 0 234.667V21.333C0 9.551 9.551 0 21.333 0"
        }),
        t("path", {
          fill: "#FFF",
          d: "M135.693 84.617C166.562 82.29 185.22 67.59 191.035 48c-40.737 18.77-91.57-4.192-101.19 37.282l-4.932 22.11c8.58-13.312 19.913-20.45 50.78-22.775m-16.05 3.764C104.47 90.567 92.3 97.605 85.47 109.966c-2.198 3.978-2.97 8.253-2.97 8.253l-3.491 15.65c4.373-7.8 12.194-17.766 32.69-22.508.462-2.482 3.26-16.707 7.942-22.98m-43.819 59.767-5.332 23.904c14.127-26.898 44.53-32.12 48.283-32.904 26.475-5.536 39.22-18.681 44.29-35.763-23.1 13.062-77.02-3.34-87.241 44.763m-7.9 35.422L64 201.163c31.309-1.763 34.762-31.851 39.87-55.753-9.74 3.4-31.207 16.724-35.946 38.16"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

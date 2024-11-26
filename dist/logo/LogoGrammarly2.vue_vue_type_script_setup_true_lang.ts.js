import { defineComponent as l, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoGrammarly2",
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
    return (s, i) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "257",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 257",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#15C39A",
          d: "M128 0c70.696 0 128 57.36 128 128.125 0 68.59-53.844 124.595-121.536 127.965h-12.928C53.849 252.72 0 196.716 0 128.125 0 57.36 57.31 0 128 0"
        }),
        t("path", {
          fill: "#FFF",
          d: "M122.864 53.004c28.743-1.927 54.304 12.295 68.529 34.522 2.25 3.878 1.158 8.808-2.581 11.403-3.94 2.736-9.124 1.53-12.087-2.645-10.277-14.479-28.217-26.456-48.669-26.456-39.241 0-69.353 39.407-53.538 80.68 6.967 18.183 23.48 31.2 42.703 34.222 23.613 3.708 45.21-4.698 57.649-22.964l-7.773 1.092h-13.413c-4.258 0-8.198-2.875-8.956-7.068-.995-5.504 3.206-10.3 8.526-10.3h47.094v49.445a8.685 8.685 0 0 1-10.29 8.539c-4.19-.758-7.057-4.706-7.057-8.964v-8.256l1.63-9.134c-13.773 15.925-33.993 25.77-56.575 25.77-42.991 0-77.559-35.614-75.057-79.233 2.151-37.485 32.44-68.139 69.865-70.653"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

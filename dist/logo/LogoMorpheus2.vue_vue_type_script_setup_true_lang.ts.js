import { defineComponent as l, computed as n, openBlock as c, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoMorpheus2",
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
    return (r, i) => (c(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#3DB5E6",
          d: "M251.927 159.692c-13.893 55.817-64.726 95.53-124.596 95.53-60.141 0-110.537-42.063-123.861-98.11 16.021 0 30.999.072 37.952.072 3.28 0 3.918.057 4.107.044 5.232-.258 11.793-1.985 16.157-12.598l16.632-43.506 36.936 88.93c3.32 7.09 8.864 6.587 12.172 6.587h.311c6.452 0 9.258-2.26 11.711-6.937l41.721-87.913 14.232 39.62.868 1.919c3.009 6.601 5.174 13.121 12.62 13.973 1.535.176 19.362-.136 43.394-.136 0 0 0 .155-.356 2.525"
        }),
        t("path", {
          fill: "#D8292F",
          d: "M256.003 126.817c0 .664 0 2.335-.013 2.335h-38.386l-22.379-62.514c-1.992-4.65-4.988-11.62-13.717-11.62-5.34 0-10.166 4.411-12.904 11.69l-40.568 93.97-39.05-93.4c-3.823-8.295-6.466-12.197-14.111-12.197-5.191 0-9 1.913-13.148 11.74L38.55 130.08l-38.51-.04Q0 128.596 0 127.153C0 56.833 57.01 0 127.33 0c70.321 0 128.673 56.497 128.673 126.817"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

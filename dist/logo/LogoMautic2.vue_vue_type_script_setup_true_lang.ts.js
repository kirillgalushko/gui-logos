import { defineComponent as m, computed as n, openBlock as s, createElementBlock as l, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoMautic2",
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
    return (r, i) => (s(), l("svg", {
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
          fill: "#4E5E9E",
          d: "M128.135 256C57.58 256 0 198.42 0 127.863S57.58 0 128.135 0c17.03 0 33.52 3.244 49.2 9.732 4.324 1.892 6.487 7.028 4.595 11.353s-7.029 6.488-11.354 4.596c-13.516-5.677-27.844-8.38-42.712-8.38-61.093 0-110.833 49.74-110.833 110.834s49.74 110.833 110.833 110.833c61.094 0 110.834-49.74 110.834-110.833 0-12.976-2.162-25.952-6.758-38.116-1.622-4.596.54-9.462 5.136-11.084s9.462.54 11.084 5.136c5.136 14.057 7.84 28.925 7.84 44.064.27 70.555-57.31 127.864-127.865 127.864"
        }),
        t("path", {
          fill: "#FDB933",
          d: "m184.092 114.889 16.22 67.04h-24.87l-11.084-46.225zm30.277-68.934-7.029 38.927-6.758-6.758-72.447 78.936-33.791-37.035-14.868 61.905h-25.14L81.368 70.285l46.767 48.388 54.876-58.12-7.029-6.758z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
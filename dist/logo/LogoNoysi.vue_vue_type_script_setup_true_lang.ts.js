import { defineComponent as h, computed as l, openBlock as m, createElementBlock as n, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoNoysi",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, c = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: s(c.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#17B6A7",
          d: "M256 186.078C256 224.695 224.695 256 186.078 256H69.922C31.305 256 0 224.695 0 186.078V69.922C0 31.305 31.305 0 69.922 0h116.156C224.695 0 256 31.305 256 69.922z"
        }),
        t("path", {
          fill: "#FFF",
          d: "M146.344 56.18c-4.88 0-6.255 3.015-3.058 6.7l51.678 59.559c3.197 3.685 5.813 2.708 5.813-2.171V65.05c0-4.878-3.992-8.87-8.87-8.87zm-82.25 0c-4.879 0-8.87 3.992-8.87 8.87v32.811c0 4.879 2.596 11.903 5.769 15.609l68.16 79.612c3.173 3.706 9.761 6.738 14.64 6.738h48.113c4.879 0 8.87-3.992 8.87-8.87v-34.906c0-4.879-2.626-11.876-5.837-15.55l-67.842-77.635c-3.211-3.673-9.829-6.679-14.708-6.679zm-8.87 134.77c0 4.879 3.992 8.87 8.87 8.87h45.472c4.879 0 6.279-3.036 3.112-6.746l-51.695-60.558c-3.167-3.711-5.76-2.755-5.76 2.124z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
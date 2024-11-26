import { defineComponent as c, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as p, createElementVNode as t } from "vue";
const l = /* @__PURE__ */ c({
  __name: "LogoSquare",
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
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", { fill: "#2E3B4E" }, [
        t("path", { d: "M212.651 0H42.67C19.107 0 0 19.1 0 42.67v169.98c0 23.569 19.107 42.67 42.67 42.67h169.98c23.569 0 42.67-19.101 42.67-42.67V42.67C255.326 19.101 236.226 0 212.65 0m-3.748 195.448c0 7.438-6.029 13.46-13.461 13.46H59.908c-7.439 0-13.467-6.022-13.467-13.46V59.908c0-7.439 6.028-13.467 13.467-13.467h135.534c7.432 0 13.46 6.028 13.46 13.467z" }),
        t("path", { d: "M100.57 162.48c-4.27 0-7.729-3.482-7.729-7.77v-54.1c0-4.287 3.458-7.769 7.729-7.769h54.18c4.283 0 7.73 3.482 7.73 7.77v54.1c0 4.287-3.447 7.768-7.73 7.768z" })
      ], -1)
    ]), 4));
  }
});
export {
  l as _
};

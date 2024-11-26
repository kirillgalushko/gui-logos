import { defineComponent as h, computed as l, openBlock as r, createElementBlock as m, normalizeStyle as c, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoInternetexplorer",
  props: {
    width: {},
    height: {}
  },
  setup(n) {
    const e = n, i = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, o) => (r(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      version: "1.1",
      viewBox: "0 -0.5 48 48",
      style: c(i.value)
    }, o[0] || (o[0] = [
      t("g", {
        fill: "none",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-width": "1"
      }, [
        t("g", { fill: "#00BBF5" }, [
          t("path", { d: "M26.512 36.456c-5.282 0-9.044-4.58-9.175-9.235h30.622c.467-10.025-3-17.136-11.883-22.095 1.298-1.42 11.93-5.156 9.209 4.998l1.045 1.51c4.612-13.971-9.24-13.212-18.407-8.777C14.712 2.813 7.231 11.08 5.175 19.564c3.572-5.1 8.188-8.122 11.2-8.963-17.232 13.782-25.238 44.18-1.838 34.546l-1.624-.974c-14.082 4.418-8.641-8.066-5.931-9.866 3.244 6.6 10.156 11.874 18.611 11.874 10.762 0 18.756-5.528 21.928-14.696H35.098c-1.794 3.178-4.288 4.971-8.586 4.971m0-23.668c5.283 0 8.804 4.122 8.935 8.212h-17.98c.176-3.48 3.402-8.212 9.045-8.212" })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};

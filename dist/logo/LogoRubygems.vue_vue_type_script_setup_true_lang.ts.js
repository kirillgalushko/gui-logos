import { defineComponent as h, computed as n, openBlock as s, createElementBlock as p, normalizeStyle as r, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoRubygems",
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
    return (d, i) => (s(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "293",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 293",
      style: r(m.value)
    }, i[0] || (i[0] = [
      t("g", { fill: "#D34231" }, [
        t("path", { d: "m76.748 97.434-.163-.163-36.11 36.11 87.674 87.512 36.11-35.948 51.564-51.563-36.11-36.11v-.164H76.584z" }),
        t("path", { d: "M127.823.976.135 74.173v146.395l127.688 73.197 127.689-73.197V74.173zm103.29 205.603-103.29 59.534-103.29-59.534V87.837l103.29-59.534 103.29 59.534z" })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

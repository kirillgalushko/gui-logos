import { defineComponent as l, computed as n, openBlock as m, createElementBlock as s, normalizeStyle as c, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoTeamwork2",
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
    return (p, i) => (m(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FFF",
          d: "M128 0c70.776 0 128 57.224 128 128s-57.224 128-128 128c-70.776.215-128-57.224-128-128S57.224 0 128 0"
        }),
        t("path", {
          fill: "#1D1C39",
          d: "M126.279 112.08c7.1 0 11.187-3.872 11.187-10.54.215-5.594-4.088-10.327-9.681-10.542h-17.21V79.166c.43-6.669-4.733-12.692-11.617-12.907-6.669-.43-12.692 4.733-12.908 11.617v83.684c0 19.791 7.96 28.611 25.6 28.611 6.67.216 13.338-1.505 19.147-4.732 2.796-1.721 4.517-4.948 4.302-8.175 0-5.378-3.657-11.187-8.605-11.187-.645 0-1.506.215-2.151.43l-.86.43c-1.722.861-3.873 1.507-5.809 1.507-3.227 0-6.884-1.076-6.884-9.896V112.08z"
        }),
        t("path", {
          fill: "#FF22B1",
          d: "M178.985 146.716c-11.832 0-21.513 9.68-21.513 21.513 0 11.832 9.68 21.512 21.513 21.512 11.832 0 21.512-9.68 21.512-21.512s-9.68-21.513-21.512-21.513"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

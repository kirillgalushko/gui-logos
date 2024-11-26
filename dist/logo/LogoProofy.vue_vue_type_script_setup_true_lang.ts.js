import { defineComponent as c, computed as h, openBlock as m, createElementBlock as n, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoProofy",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "261",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 261",
      style: p(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#13C779",
          d: "M141.032 0H12.255C6.128 0 0 6.127 0 12.269v162.5c0 7.644 4.603 16.865 10.723 19.928l107.309 62.857c6.135 4.588 15.333 4.588 19.936 0l107.302-62.857c6.127-4.602 10.73-12.27 10.73-19.928v-162.5C256 4.603 249.866.007 243.738.007H141.032z"
        }),
        t("path", {
          fill: "#FFF",
          d: "m200.817 72.055-72.048 42.913-72.047-42.913zm0 72.048L128.77 187.03l-72.047-42.928v-55.19l72.04 42.929 72.048-42.93v55.192zm6.135-87.374H50.58c-3.064 0-6.128 3.064-6.128 7.659v79.73c0 3.07 0 9.198 6.128 12.247 6.134 4.603 78.182 47.53 78.182 47.53s72.048-42.913 78.19-47.53c6.12-4.588 6.12-9.184 6.12-12.247v-79.73c0-4.595-1.525-7.66-6.12-7.66"
        }),
        t("path", {
          fill: "#231F1F",
          "fill-opacity": ".1",
          d: "M128.762 0H12.254C6.127 0 0 6.127 0 12.269v162.5c0 7.644 4.603 16.865 10.723 19.928l107.31 62.857c3.062 1.525 6.134 3.064 10.722 3.064z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

import { defineComponent as n, computed as s, openBlock as p, createElementBlock as m, normalizeStyle as l, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoReapp",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, h = s(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "338",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 338",
      style: l(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#27CCF5",
          d: "M63.512.566S.23.566.23 63.85v221.486s63.283 1.265 63.283-62.332V79.667c0-8.738 7.084-15.818 15.818-15.818h46.831C187.545 63.85 188.81.566 188.81.566z"
        }),
        t("path", {
          fill: "#22E071",
          d: "M192.026 114.941v143.332c0 8.738-7.084 15.818-15.818 15.818h-46.826c-61.384 0-62.653 63.283-62.653 63.283h125.297s63.283 0 63.283-63.283V52.605s-63.283-1.264-63.283 62.336"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};

import { defineComponent as n, computed as s, openBlock as m, createElementBlock as l, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoVueuse",
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
    return (r, i) => (m(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "277",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 277",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#35495E",
          d: "M202.968 0v148.146c0 41.405-33.563 74.967-74.968 74.967s-74.968-33.562-74.968-74.967V0h53.036v148.146a21.932 21.932 0 1 0 43.864 0V0z"
        }),
        t("path", {
          fill: "#41B883",
          d: "M256 0v148.146c0 70.694-57.306 128.019-128 128.019S0 218.84 0 148.145V0h53.032v148.146c0 41.405 33.566 74.967 74.968 74.967s74.968-33.562 74.968-74.967V0z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};

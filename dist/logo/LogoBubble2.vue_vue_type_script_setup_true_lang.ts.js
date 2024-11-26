import { defineComponent as n, computed as s, openBlock as m, createElementBlock as l, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoBubble2",
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
      height: "276",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 276",
      style: p(h.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#262626",
          d: "M156.688 71.53c-24.76 0-49.164 10.63-67.795 31.529V0H52.024v173.519c0 56.326 45.661 101.988 101.988 101.988S256 229.845 256 173.519 213.014 71.531 156.688 71.531m-2.676 164.694c-34.632 0-62.707-28.075-62.707-62.706s28.075-62.707 62.707-62.707c34.631 0 62.706 28.075 62.706 62.707s-28.075 62.706-62.706 62.706"
        }),
        t("path", {
          fill: "#00F",
          d: "M25.22 225.066c-13.93 0-25.22 11.292-25.22 25.22s11.291 25.22 25.22 25.22 25.22-11.292 25.22-25.22-11.291-25.22-25.22-25.22"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

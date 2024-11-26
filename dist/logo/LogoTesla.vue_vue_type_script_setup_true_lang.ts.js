import { defineComponent as c, computed as m, openBlock as l, createElementBlock as o, normalizeStyle as a, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoTesla",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const e = s, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, h) => (l(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      id: "tesla-gui-asset-Layer_1",
      width: "800",
      height: "800",
      viewBox: "0 -121.2 278.7 278.7",
      style: a(i.value)
    }, h[0] || (h[0] = [
      t("g", { id: "tesla-gui-asset-TESLA" }, [
        t("path", {
          d: "M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4zm6.2-7.1h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3m-27.5 29c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2zM131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132zm-61.6.1h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3m0 14.7h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3",
          class: "tesla-gui-asset-st0"
        }),
        t("g", null, [
          t("path", {
            d: "M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0z",
            class: "tesla-gui-asset-st0"
          })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

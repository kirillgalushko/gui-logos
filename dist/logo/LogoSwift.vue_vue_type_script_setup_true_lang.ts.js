import { defineComponent as n, computed as l, openBlock as r, createElementBlock as h, normalizeStyle as p, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ n({
  __name: "LogoSwift",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, s = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (m, i) => (r(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      fill: "none",
      viewBox: "0 0 32 32",
      style: p(s.value)
    }, i[0] || (i[0] = [
      t("path", {
        fill: "url(#swift-gui-asset-a)",
        d: "M22.136 25.272c-3.301 1.898-7.84 2.093-12.405.145C6.034 23.85 2.966 21.109 1 17.977c.944.783 2.045 1.41 3.225 1.957 4.715 2.201 9.43 2.05 12.747.006-4.72-3.603-8.736-8.307-11.725-12.145-.629-.626-1.101-1.41-1.573-2.114 3.618 3.29 9.36 7.44 11.405 8.615-4.325-4.543-8.18-10.181-8.023-10.025 6.843 6.892 13.215 10.808 13.215 10.808a7 7 0 0 1 .504.305q.208-.524.36-1.088c1.102-3.994-.156-8.537-2.91-12.296 6.371 3.838 10.147 11.043 8.574 17.073q-.062.244-.134.481c3.146 3.916 2.336 8.134 1.943 7.351-1.707-3.325-4.866-2.308-6.472-1.634"
      }, null, -1),
      t("defs", null, [
        t("linearGradient", {
          id: "swift-gui-asset-a",
          x1: "15.01",
          x2: "15.01",
          y1: "2",
          y2: "27.001",
          gradientUnits: "userSpaceOnUse"
        }, [
          t("stop", { "stop-color": "#F88A36" }),
          t("stop", {
            offset: "1",
            "stop-color": "#FD2020"
          })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};

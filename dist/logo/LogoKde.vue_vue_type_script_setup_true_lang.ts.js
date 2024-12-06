import { defineComponent as n, computed as a, openBlock as h, createElementBlock as m, normalizeStyle as c, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ n({
  __name: "LogoKde",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, l) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(o.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#1D99F3",
          points: "256 1.61927898e-14 256 256.000005 0 256.000005 0 0"
        }),
        t("path", {
          fill: "#FCFCFC",
          d: "m143.025 32.309-31.88 3.052v131.27l31.543-4.748v-55.968l42.4 62.076 33.239-10.518-43.416-59.698 43.756-56.308-33.917-7.798-42.061 56.305zM70.762 64.298c-.36.037-.708.196-.978.467l-12.512 12.51a1.62 1.62 0 0 0-.238 1.985l14.65 24.127a62.6 62.6 0 0 0-6.17 14.046l-26.893 5.593a1.62 1.62 0 0 0-1.288 1.586v17.693c0 .748.512 1.396 1.233 1.57l26.103 6.38a62.5 62.5 0 0 0 6.4 16.223l-15.109 23.04a1.62 1.62 0 0 0 .211 2.034l12.508 12.51a1.63 1.63 0 0 0 1.989.242l23.676-14.38a62.6 62.6 0 0 0 14.967 6.228l5.524 26.56c.156.753.82 1.288 1.584 1.288h17.694c.744 0 1.393-.508 1.57-1.238l6.507-26.615a62.4 62.4 0 0 0 15.397-6.478l23.332 15.298c.641.423 1.49.338 2.034-.206l12.512-12.51c.53-.529.625-1.347.236-1.984l-8.518-14.037-2.755.871a.95.95 0 0 1-1.077-.373l-12.449-18.222c-8.387 16.416-25.452 27.66-45.158 27.66-27.998 0-50.696-22.698-50.696-50.697 0-20.597 12.285-38.31 29.921-46.246V76.144a62.5 62.5 0 0 0-9.26 4.082q-.001-.003-.013-.015L71.816 64.55a1.62 1.62 0 0 0-1.055-.257z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
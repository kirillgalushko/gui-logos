import { defineComponent as n, computed as p, openBlock as s, createElementBlock as m, normalizeStyle as h, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoHanami",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = p(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (s(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "262",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 262",
      style: h(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#DC3011",
          "fill-opacity": ".65",
          points: "152.228422 2.78770325 255.861141 119.8427 176.588411 254.483117 23.8718053 220.596458 8.96986157 65.0758631"
        }),
        t("polygon", {
          fill: "#DC3011",
          "fill-opacity": ".65",
          points: "176.152247 10.7228513 253.18324 146.76637 147.649492 261.982843 5.31554324 197.085121 23.0737926 41.8647358"
        }),
        t("polygon", {
          fill: "#DC3011",
          points: "127.177581 0 252.882778 92.9506108 203.335665 241.130539 46.9108503 239.735952 0 90.7121437"
        }),
        t("path", {
          fill: "#FFF",
          d: "M127.94 79.216c28.573 0 51.736 23.163 51.736 51.736s-23.163 51.737-51.736 51.737-51.737-23.164-51.737-51.737 23.164-51.736 51.737-51.736m0 11.113c-22.435 0-40.623 18.188-40.623 40.623s18.188 40.623 40.623 40.623 40.623-18.188 40.623-40.623-18.188-40.623-40.623-40.623m18.17 24.313 6.682 9.014-24.852 30.899-24.78-30.9 6.636-9.013z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

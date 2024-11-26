import { defineComponent as n, computed as h, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoQwik2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "272",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 272",
      style: s(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#18B6F6",
          d: "m224.803 271.548-48.76-48.483-.744.107v-.532L71.606 120.252l25.55-24.667-15.01-86.12-71.222 88.247c-12.136 12.226-14.372 32.109-5.642 46.781l44.5 73.788c6.813 11.376 19.163 18.18 32.47 18.074l22.038-.213z"
        }),
        t("path", {
          fill: "#AC7EF4",
          d: "m251.414 96.01-9.795-18.075-5.11-9.25-2.023-3.615-.212.213-26.829-46.463C200.738 7.125 188.176-.105 174.55 0l-23.527.639-70.158.213c-13.307.106-25.444 7.123-32.151 18.5l-42.69 84.632L82.353 9.25l100.073 109.937-17.779 17.968 10.646 86.015.107-.213v.213h-.213l.213.212 8.304 8.081 40.348 39.445c1.704 1.595 4.472-.318 3.3-2.339l-24.911-49.014 43.436-80.273 1.383-1.595c.533-.638 1.065-1.276 1.491-1.914 8.517-11.589 9.688-27.112 2.662-39.764"
        }),
        t("polygon", {
          fill: "#FFF",
          points: "182.745617 118.763148 82.3533804 9.35773736 96.6190999 95.053337 71.0685329 119.826452 175.080283 223.065139 165.711906 137.36932"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

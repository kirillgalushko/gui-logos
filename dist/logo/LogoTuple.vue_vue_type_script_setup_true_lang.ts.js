import { defineComponent as n, computed as m, openBlock as l, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ n({
  __name: "LogoTuple",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (v, h) => (l(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "191",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 191",
      style: s(i.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#1F2E41",
          d: "M209.623 80.368v51.562h21.731V80.368h17.225V63.803h-56.107v16.565zm49.84 23.454c0 19.46 11.256 29.354 31.15 29.354h.037c19.056 0 31.26-9.052 31.26-29.537V63.803h-21.727v39.066c0 8.942-1.91 13.34-9.528 13.34-7.738 0-9.644-4.398-9.644-13.23V63.803h-21.548zm104.701-40.02c19.643 0 28.035 8.796 28.035 23.345v.367c0 14.219-9.455 22.208-27.082 22.208h-6.597v22.208h-21.512V63.803zm-1.026 16.126h-4.58v15.318h4.47c5.717 0 8.685-2.565 8.685-7.622v-.367c0-5.24-2.931-7.33-8.575-7.33m40.275 52.002V63.803h21.622v51.453h24.816v16.674zm58.636-68.127v68.127h49.95v-16.564h-28.401V105.14h21.328V90.006h-21.328v-9.638h26.862V63.803z"
        }),
        t("polygon", {
          fill: "#BFC6F1",
          points: "29.3178328 65.9651238 117.271331 36.647291 117.271331 190.565913 29.3178328 161.248081"
        }),
        t("polygon", {
          fill: "#4652AF",
          points: "0 29.3178328 87.9534985 0 87.9534985 153.918622 0 124.600789"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};

import { defineComponent as h, computed as m, openBlock as n, createElementBlock as c, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ h({
  __name: "LogoDailydev2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, l = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "144",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 144",
      style: p(l.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#7C7C7D",
          d: "m219.833 71.7-28.26-28.32 14.123-28.309 45.916 46.013c5.85 5.863 5.85 15.368 0 21.23l-56.514 56.634c-5.85 5.862-15.336 5.862-21.187 0-5.85-5.863-5.85-15.368 0-21.23z"
        }),
        t("path", {
          fill: "#151618",
          d: "M173.922 4.396c5.85-5.863 15.338-5.86 21.189.002l10.595 10.618L82.09 138.892c-5.85 5.863-15.339 5.86-21.189-.002l-10.596-10.618zm-52.98 38.934L99.75 64.566l-28.26-28.32-35.323 35.398 28.26 28.319-14.123 28.309L4.388 82.259c-5.85-5.862-5.85-15.368 0-21.23L60.9 4.399c5.85-5.863 15.338-5.866 21.189-.003z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

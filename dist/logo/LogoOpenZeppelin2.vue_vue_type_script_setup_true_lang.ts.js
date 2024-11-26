import { defineComponent as h, computed as l, openBlock as p, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ h({
  __name: "LogoOpenZeppelin2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, n = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (p(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "284",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 284",
      style: s(n.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#63D2F9",
          d: "M256 283.747v-73.86h-80.434c-21.874 0-42.136 11.482-53.339 30.228l-26.076 43.632z"
        }),
        t("polygon", {
          fill: "#4E5EE4",
          points: "-2.31720968e-15 -7.8343756e-15 -2.31720968e-15 73.8608385 211.856833 73.8608385 256 -7.8343756e-15"
        }),
        t("path", {
          fill: "#63B0F9",
          d: "M101.392 115.433.233 283.747h86.185L207.387 82.383h-47.592c-23.938 0-46.116 12.55-58.403 33.05"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};

import { defineComponent as o, computed as l, openBlock as n, createElementBlock as m, normalizeStyle as s, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ o({
  __name: "LogoRubocop",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, c) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "302",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 302",
      style: s(i.value)
    }, c[0] || (c[0] = [
      t("g", null, [
        t("path", {
          fill: "#0A0B09",
          d: "M248.495 128.68v-9.683c0-10.596-8.669-19.268-19.267-19.268H26.772c-10.596 0-19.267 8.672-19.267 19.268v9.684C3.019 131.433 0 136.367 0 141.987v25.905c0 5.62 3.02 10.556 7.505 13.309v10.05c0 10.596 8.671 19.267 19.267 19.267h202.456c10.598 0 19.267-8.671 19.267-19.267V181.2c4.488-2.753 7.505-7.69 7.505-13.31v-25.904c0-5.62-3.017-10.556-7.505-13.306M128.758 0C74.194 0 29.18 40.77 22.439 93.501h212.638C228.335 40.77 183.322 0 128.757 0M95.969 237.236h63.296l6.463 7.482 9.72-8.395-10.304-11.932H90.088l-10.305 11.932 9.722 8.395zm109.6-22.818v40.984c0 11.264-9.217 20.482-20.481 20.482H173.94v-.04c-2.44 0-4.595-1.142-6.03-2.895h-.028l-13.33-17.026-.014.012c-1.424-1.845-3.628-3.057-6.133-3.074-.018 0-.033-.005-.05-.005-.015 0-.03.005-.048.005h-38.59c-.017 0-.032-.005-.047-.005-.018 0-.033.005-.05.005-2.321.015-4.378 1.06-5.804 2.675l-.028-.012-13.64 17.425h-.02c-1.436 1.753-3.59 2.895-6.031 2.895v.04H72.939c-11.264 0-20.481-9.218-20.481-20.482v-40.984H27.426v41.1c0 25.033 20.481 45.515 45.513 45.515h112.156c25.035 0 45.514-20.482 45.514-45.514v-41.101z"
        }),
        t("path", {
          fill: "#D7252C",
          d: "M210.785 167.62H45.217c-7.82 0-14.217-6.398-14.217-14.218s6.398-14.218 14.217-14.218h165.568c7.817 0 14.215 6.398 14.215 14.218s-6.398 14.217-14.215 14.217"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};

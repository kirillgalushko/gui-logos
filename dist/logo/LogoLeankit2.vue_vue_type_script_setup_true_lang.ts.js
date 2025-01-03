import { defineComponent as n, computed as c, openBlock as h, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ n({
  __name: "LogoLeankit2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, i) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "283",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 283",
      style: p(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#A4A7AD",
          d: "M243.264 54.872 138.4 2.23c-6.368-2.972-13.585-2.972-19.953 0L30.143 45.957l-14.01 7.217c6.368-2.972 13.585-2.972 19.953 0L85.758 75.25l2.547.85 119.722 62.407L87.88 201.34l-1.274.425-50.945 26.746c-6.368 2.972-13.586 3.396-19.954 0l-2.547-1.274 104.862 52.22c6.368 2.97 13.586 2.97 19.954 0l105.287-52.644C250.905 222.992 256 215.35 256 206.859V74.826c-.425-8.491-5.095-16.133-12.736-19.954"
        }),
        t("path", {
          fill: "#4D515D",
          d: "M85.758 75.25 36.086 53.174c-6.368-2.972-13.585-3.396-19.953 0l-2.548 1.274c-.424 0-.424.424-.849.424C5.095 58.693 0 66.335 0 74.826v132.033c0 8.49 5.095 16.557 12.736 20.378l2.548 1.274c6.368 2.972 13.585 3.21 19.953.238l51.795-27.027 1.273-125.198z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

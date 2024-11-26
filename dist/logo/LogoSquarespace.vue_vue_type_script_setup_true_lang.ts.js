import { defineComponent as l, computed as m, openBlock as n, createElementBlock as h, normalizeStyle as r, createElementVNode as c } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoSquarespace",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, t) => (n(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -26 256 256",
      style: r(o.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#1A1918",
          d: "M162.931 40.67c-4.823-4.824-12.644-4.824-17.464 0L66.87 119.268c-9.651 9.643-25.287 9.643-34.931 0-9.654-9.647-9.654-25.285 0-34.937L109.023 7.25c-9.646-9.649-25.288-9.649-34.934 0L14.467 66.87c-19.29 19.294-19.29 50.57 0 69.866 19.295 19.295 50.57 19.295 69.865 0l78.599-78.599c4.82-4.823 4.82-12.644 0-17.467m26.199-26.197c-19.295-19.297-50.57-19.297-69.865 0L40.67 93.067c-4.82 4.82-4.82 12.646 0 17.467 4.823 4.823 12.64 4.823 17.464 0l78.602-78.594c9.646-9.649 25.282-9.649 34.926 0 4.828 4.82 12.646 4.82 17.469 0 4.823-4.828 4.823-12.644 0-17.467m26.201 78.594c-4.823-4.818-12.646-4.818-17.469 0l-78.597 78.597c-9.646 9.646-25.287 9.646-34.933 0-4.82-4.82-12.639-4.82-17.462 0-4.83 4.825-4.83 12.646 0 17.464 19.287 19.295 50.57 19.295 69.865 0l78.596-78.594c4.82-4.82 4.82-12.646 0-17.467m26.202-26.196c-19.295-19.292-50.575-19.292-69.865 0L93.066 145.47c-4.823 4.818-4.823 12.644 0 17.464 4.826 4.826 12.647 4.826 17.467 0l78.597-78.597c9.643-9.648 25.287-9.648 34.931 0 9.646 9.647 9.646 25.285 0 34.932l-77.084 77.086c9.646 9.643 25.28 9.643 34.934 0l59.622-59.62c19.29-19.297 19.29-50.572 0-69.864"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

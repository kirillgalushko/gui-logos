import { defineComponent as o, computed as h, openBlock as n, createElementBlock as p, normalizeStyle as m, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoOpenlayers",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, c = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, l) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "259",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 259",
      style: m(c.value)
    }, l[0] || (l[0] = [
      e("g", null, [
        e("path", {
          fill: "#015965",
          d: "M94.029 57.213c18.682-15.559 49.26-15.562 67.945 0l80.016 66.632c18.68 15.561 18.683 41.015-.003 56.577l-80.013 66.63c-18.69 15.564-49.266 15.56-67.945 0l-80.016-66.63c-18.683-15.56-18.683-41.016-.003-56.577z"
        }),
        e("path", {
          fill: "#E5E5E5",
          d: "M94.029 35.561c18.682-15.559 49.26-15.562 67.945 0l80.016 66.633c18.68 15.562 18.683 41.017-.003 56.578l-80.013 66.63c-18.69 15.564-49.266 15.56-67.945 0l-80.016-66.63c-18.683-15.56-18.683-41.016-.003-56.578z"
        }),
        e("path", {
          fill: "#35BBCE",
          d: "M161.974 12.319 241.99 78.95c18.68 15.562 18.683 41.017-.003 56.578l-80.013 66.63c-18.69 15.565-49.266 15.56-67.945 0l-80.016-66.63C-4.67 119.97-4.67 94.513 14.01 78.951l80.019-66.632c18.682-15.56 49.26-15.563 67.945 0"
        }),
        e("path", {
          fill: "#FFF",
          d: "M244.31 81.1a43 43 0 0 0-2.3-2.077L161.99 12.33c-18.688-15.577-49.267-15.574-67.952 0L14.011 79.023c-18.681 15.58-18.681 41.058.003 56.634l8.612 7.176C45.142 115.79 121.074 40.853 244.31 81.1",
          opacity: ".15"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

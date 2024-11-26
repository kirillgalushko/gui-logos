import { defineComponent as r, computed as l, openBlock as n, createElementBlock as p, normalizeStyle as h, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ r({
  __name: "LogoDgraph2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, s = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, o) => (n(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "305",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 305",
      style: h(s.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "dgraph-2-gui-asset-a",
          x1: "0%",
          x2: "100%",
          y1: "50%",
          y2: "50%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#FF1800"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#FF009B"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#dgraph-2-gui-asset-a)",
          d: "M206.721 54.81a36.94 36.94 0 0 0 4.55-17.758C211.239 16.602 194.67.033 174.22 0c-17.029.02-31.859 11.628-35.97 28.153l-10.244-.404C57.319 27.76.017 85.057 0 155.744a127.6 127.6 0 0 0 36.385 89.374 36.76 36.76 0 0 0-7.453 22.248c.034 20.45 16.603 37.019 37.053 37.052 15.654 0 29.154-9.829 34.534-23.663a128.5 128.5 0 0 0 27.476 2.973c70.69-.011 127.994-57.314 128.005-128.005A127.62 127.62 0 0 0 206.72 54.83zm-32.512 4.986c-1.937 0-3.867-.244-5.744-.729l-15.37 44.597 22.45-3.66-31.623 51.533 26.313-6.391L81.63 250.79c8.423 8.077 9.37 21.215 2.194 30.417-7.176 9.201-20.15 11.482-30.034 5.28-9.855-6.281-13.348-19.008-8.08-29.44 5.266-10.433 17.58-15.179 28.487-10.98l25.11-54.779-24.503 6.634 39.843-57.035-24.492 5.926 69.443-92.459A22.753 22.753 0 0 1 174.2 14.187c12.563 0 22.748 10.18 22.753 22.743 0 12.562-10.18 22.748-22.743 22.753z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

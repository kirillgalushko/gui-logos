import { defineComponent as i, computed as h, openBlock as n, createElementBlock as c, normalizeStyle as s, createElementVNode as o } from "vue";
const v = /* @__PURE__ */ i({
  __name: "LogoChanel",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const e = t, r = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (d, l) => (n(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100",
      height: "16",
      version: "1.1",
      viewBox: "0 0 216 34",
      style: s(r.value)
    }, l[0] || (l[0] = [
      o("g", {
        fill: "none",
        "fill-color-id": "-1",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-color-id": "-1",
        "stroke-width": "1",
        "recolor-fill": "true",
        "recolor-stroke": "true"
      }, [
        o("g", {
          fill: "#000",
          "fill-color-id": "0",
          "fill-rule": "nonzero",
          "stroke-color-id": "-1",
          "recolor-fill": "true",
          "recolor-stroke": "true"
        }, [
          o("path", {
            fill: "#000",
            "fill-color-id": "0",
            d: "M182.88 32.64H158.4V.72h23.04V7.2h-16.56v5.76h14.4v6.24h-14.4v7.2h18zM192 .72h6.48V26.4h16.8v6.24H192zM39.84.72h6.48v12.24h15.12V.72h6.241v31.92H61.44V19.2H46.32v13.44h-6.48zm64.56 31.92-3.359-7.2H84l-3.359 7.2H73.92L88.32.72h8.4l14.64 31.92zM117.601.72h7.92l14.399 19.2V.72h6.48v31.92h-5.04L124.081 9.6v23.04h-6.48zM25.92 21.84l5.76 3.12c-2.922 5.176-8.496 8.759-14.88 8.64C7.473 33.719-.066 26.181 0 16.8-.065 7.582 7.474.043 16.8 0c6.367.043 11.928 3.607 14.88 8.88L25.92 12c-1.711-3.376-5.171-5.593-9.12-5.52-5.812-.073-10.502 4.617-10.56 10.32.058 5.866 4.748 10.555 10.56 10.56a10.27 10.27 0 0 0 9.12-5.52m72.48-2.88L92.641 6.24 86.88 18.96z",
            "recolor-fill": "true",
            "recolor-stroke": "true"
          })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};

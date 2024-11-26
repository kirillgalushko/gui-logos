import { defineComponent as d, computed as n, openBlock as c, createElementBlock as r, normalizeStyle as l, createElementVNode as e } from "vue";
const m = /* @__PURE__ */ d({
  __name: "LogoVaddy",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const t = s, i = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (p, o) => (c(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "254",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 254",
      style: l(i.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "vaddy-gui-asset-a",
          x1: "50%",
          x2: "50%",
          y1: "-1.02%",
          y2: "100%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#8FC53B"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#48A23C"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#vaddy-gui-asset-a)",
          d: "M189.574 13.209c25.131 18.66 41.421 48.556 41.421 82.263 0 56.554-45.846 102.4-102.4 102.4s-102.4-45.846-102.4-102.4c0-35.134 17.702-66.125 44.665-84.569C28.858 31.899 0 75.287 0 125.437c0 70.693 57.308 128.001 128 128.001s128-57.308 128-128.001c0-48.369-26.837-90.461-66.426-112.228M81.75 179.819c-18.812-13.967-31.006-36.346-31.006-61.576 0-42.333 34.318-76.65 76.651-76.65s76.65 34.317 76.65 76.65c0 26.299-13.251 49.497-33.433 63.302 31.439-15.716 53.041-48.193 53.041-85.733C223.653 42.897 180.756 0 127.84 0S32.028 42.897 32.028 95.812c0 36.207 20.088 67.714 49.722 84.007m78.2-80.775c0 17.645-14.304 31.95-31.95 31.95s-31.95-14.305-31.95-31.95c0-17.646 14.304-31.951 31.95-31.951s31.95 14.305 31.95 31.951"
        })
      ], -1)
    ]), 4));
  }
});
export {
  m as _
};

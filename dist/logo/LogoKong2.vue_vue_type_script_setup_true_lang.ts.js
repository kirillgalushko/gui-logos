import { defineComponent as l, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoKong2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, n = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (g, o) => (s(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "225",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 225",
      style: m(n.value)
    }, o[0] || (o[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#169FCC",
          points: "80.721061 192.398008 86.8362932 184.505282 132.089009 184.505282 155.676332 214.641145 151.48303 224.865813 93.126246 224.865813 94.5240131 214.641145"
        }),
        e("polygon", {
          fill: "#14B59A",
          points: "94.5589572 89.6414942 116.409625 51.8921107 141.871973 51.8921107 256.001079 184.458022 247.152462 224.865813 198.21419 224.865813 201.284118 213.523275"
        }),
        e("polygon", {
          fill: "#1BC263",
          points: "121.081592 44.7197684 131.544233 25.3716237 162.932158 0 216.713806 42.1643531 209.738712 49.2830101 219.100023 62.2426166 219.100023 76.1148711 192.300976 98.0184313 147.329973 44.7197684"
        }),
        e("polygon", {
          fill: "#16BDCC",
          points: "37.9687398 129.025569 52.1845239 129.025569 89.2535309 98.0184313 138.378962 155.099753 124.523071 175.88863 79.1765189 175.88863 47.8658047 215.704613 40.6679393 224.865813 0 224.865813 0 176.064806"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

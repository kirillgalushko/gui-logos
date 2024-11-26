import { defineComponent as n, computed as p, openBlock as s, createElementBlock as h, normalizeStyle as m, createElementVNode as e } from "vue";
const g = /* @__PURE__ */ n({
  __name: "LogoNodeos",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, l = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (r, o) => (s(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "274",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 274",
      style: m(l.value)
    }, o[0] || (o[0] = [
      e("g", null, [
        e("polygon", {
          fill: "#00A",
          points: "96.8648649 58.1528216 128 40.177009 159.135135 58.1528216 159.135135 102.093953 193.72973 122.067027 193.72973 38.1797477 128 0.230354607 62.2702703 38.1797477 62.2702703 122.067488 96.8648649 102.093953"
        }),
        e("polygon", {
          fill: "#0AA",
          points: "186.810811 126.06155 128 160.015914 69.1891892 126.06155 128 92.1071856"
        }),
        e("path", {
          fill: "#00A",
          d: "M62.27 130.057 0 166.008v71.904l62.27 35.95 62.27-35.95v-71.904zm0 31.957 34.595 19.973v39.946L62.27 241.906l-34.594-19.973v-39.946z"
        }),
        e("polygon", {
          fill: "#00A",
          points: "193.72973 241.906162 159.135135 221.932858 159.135135 213.943813 131.459459 197.965261 131.459459 237.91164 193.72973 273.862342 256 237.91164 256 221.932858 172.972973 173.997204 193.72973 162.013175 228.324324 181.98671 228.324324 189.975755 256 205.954306 256 166.008159 193.72973 130.056072 131.459459 166.008159 131.459459 181.98671 214.486486 229.922364"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

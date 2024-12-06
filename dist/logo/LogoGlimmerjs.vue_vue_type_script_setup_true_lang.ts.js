import { defineComponent as l, computed as o, openBlock as s, createElementBlock as a, normalizeStyle as h, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ l({
  __name: "LogoGlimmerjs",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, m = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, c) => (s(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: h(m.value)
    }, c[0] || (c[0] = [
      t("g", null, [
        t("path", {
          fill: "#F8835A",
          d: "M256 128c0 70.692-57.308 128-128 128S0 198.692 0 128 57.307 0 128 0c70.692 0 128 57.308 128 128"
        }),
        t("path", {
          fill: "#FFF",
          d: "M78.63 140.37a11.4 11.4 0 0 1-7.951-3.222c-4.533-4.392-4.648-11.627-.256-16.16l77.144-79.619c4.39-4.533 11.626-4.648 16.16-.256 4.532 4.392 4.647 11.628.255 16.161l-77.143 79.62a11.4 11.4 0 0 1-8.21 3.475m50.31 3.036a11.36 11.36 0 0 1-7.926-3.21c-4.52-4.38-4.633-11.592-.254-16.111L181.687 61.2c4.379-4.52 11.59-4.632 16.11-.254s4.634 11.59.256 16.11l-60.928 62.884a11.36 11.36 0 0 1-8.184 3.465m-24.69 79.286a11.38 11.38 0 0 1-7.951-3.221c-4.533-4.391-4.648-11.627-.256-16.16L202.61 93.322c4.39-4.532 11.627-4.647 16.16-.255 4.534 4.392 4.648 11.627.255 16.161L112.459 219.216a11.4 11.4 0 0 1-8.21 3.476m-33.44-19.44c-2.865 0-5.73-1.07-7.95-3.222-4.534-4.392-4.649-11.628-.257-16.16l29.053-29.986c4.393-4.533 11.628-4.648 16.161-.256 4.533 4.393 4.647 11.628.255 16.161L79.02 199.775a11.4 11.4 0 0 1-8.209 3.476m-23.179-86.764a11.4 11.4 0 0 1-7.952-3.221c-4.533-4.392-4.647-11.627-.255-16.16L68.477 67.12c4.393-4.533 11.628-4.647 16.161-.255s4.647 11.627.255 16.16L55.84 113.013a11.4 11.4 0 0 1-8.209 3.476m149.433 65.295a11.4 11.4 0 0 1-7.95-3.221c-4.534-4.392-4.649-11.627-.257-16.16l13.754-14.195c4.391-4.532 11.627-4.65 16.16-.255 4.533 4.392 4.647 11.627.255 16.16l-13.753 14.195a11.4 11.4 0 0 1-8.209 3.476m-26.78 28.338c0 6.312-5.117 11.428-11.43 11.428-6.31 0-11.428-5.116-11.428-11.428s5.118-11.429 11.429-11.429c6.312 0 11.429 5.117 11.429 11.43M61.06 158.925c0 6.312-5.117 11.43-11.43 11.43-6.311 0-11.427-5.118-11.427-11.43s5.116-11.428 11.428-11.428 11.429 5.116 11.429 11.428m54.284-112.142c0 6.312-5.117 11.428-11.428 11.428s-11.429-5.116-11.429-11.428 5.117-11.43 11.429-11.43c6.311 0 11.428 5.118 11.428 11.43"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};
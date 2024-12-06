import { defineComponent as o, computed as h, openBlock as l, createElementBlock as n, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoRiak",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const e = s, c = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "254",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 254",
      style: m(c.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#3D4C67",
          d: "M137.452 220.045c-.02-3.128-.525-43.3-13.271-77.868-13.273-35.993-35.77-66.14-35.77-66.14s46.568 28.346 67.94 51.968c18.414 20.353 34.493 52.4 38.588 60.875-4.439 3.278-7.318 8.547-7.318 14.487 0 9.94 8.058 17.999 17.997 17.999s17.998-8.059 17.998-17.999c0-9.635-7.575-17.504-17.095-17.974-2.846-7.268-14.883-35.643-39.147-63.013-28.12-31.72-67.265-52.867-67.265-52.867s42.294 13.498 63.665 22.946c18.97 8.388 50.352 25.815 57.162 29.625a18 18 0 0 0-.92 5.695c0 9.94 8.058 17.998 17.997 17.998s17.998-8.058 17.998-17.998c0-9.938-8.059-17.997-17.998-17.997-3.787 0-7.3 1.17-10.199 3.168-6.92-4.556-35.235-22.39-77.987-38.713-49.493-18.897-85.937-25.42-85.937-25.42l-6.3 14.172s23.932 15.86 47.553 67.152c21.67 47.055 20.265 82.466 19.885 87.995-8.188 1.688-14.345 8.94-14.345 17.626 0 9.94 8.058 17.999 17.997 17.999s17.998-8.059 17.998-17.999c0-6.753-3.722-12.639-9.226-15.717"
        }),
        t("path", {
          fill: "#F6861A",
          d: "M63.89 51.291c0 9.443-7.654 17.098-17.098 17.098-9.441 0-17.096-7.655-17.096-17.098 0-9.441 7.655-17.097 17.096-17.097 9.444 0 17.098 7.656 17.098 17.097"
        }),
        t("path", {
          fill: "#3D4C67",
          d: "M146.678 18.446c0 9.94-8.059 17.997-17.998 17.997s-17.997-8.057-17.997-17.997C110.683 8.508 118.74.45 128.68.45s17.998 8.059 17.998 17.997m76.938 33.744c0 9.94-8.059 17.997-17.998 17.997S187.62 62.13 187.62 52.19s8.058-17.997 17.997-17.997 17.998 8.058 17.998 17.997M68.39 204.717c0 9.94-8.058 17.998-17.998 17.998-9.939 0-17.997-8.058-17.997-17.998 0-9.938 8.058-17.997 17.997-17.997s17.998 8.059 17.998 17.997M35.995 127.78c0 9.94-8.058 17.997-17.998 17.997C8.058 145.777 0 137.72 0 127.78c0-9.938 8.058-17.997 17.997-17.997s17.998 8.059 17.998 17.997"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
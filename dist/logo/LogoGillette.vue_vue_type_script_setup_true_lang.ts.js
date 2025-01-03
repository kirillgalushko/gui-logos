import { defineComponent as i, computed as c, openBlock as h, createElementBlock as n, normalizeStyle as m, createElementVNode as e } from "vue";
const f = /* @__PURE__ */ i({
  __name: "LogoGillette",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const l = t, r = c(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (s, o) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "250",
      height: "63",
      version: "1.1",
      viewBox: "0 0 465 116",
      style: m(r.value)
    }, o[0] || (o[0] = [
      e("g", {
        fill: "none",
        "fill-color-id": "-1",
        "fill-rule": "evenodd",
        stroke: "none",
        "stroke-color-id": "-1",
        "stroke-width": "1",
        "recolor-fill": "true",
        "recolor-stroke": "true"
      }, [
        e("g", {
          fill: "#182F6EFF",
          "fill-color-id": "0",
          "fill-rule": "nonzero",
          "stroke-color-id": "-1",
          "recolor-fill": "true",
          "recolor-stroke": "true"
        }, [
          e("path", {
            fill: "#182F6EFF",
            "fill-color-id": "0",
            d: "M129.006 36.628a16.5 16.5 0 0 1-12.485-5.384 16.52 16.52 0 0 1-4.207-12.936C113.192 8.198 122.107 0 132.21 0c10.102 0 17.583 8.197 16.691 18.308-.878 10.11-9.78 18.32-19.895 18.32m-18.746 5.366h31.859l-12.17 69.054H98.322zm46.897-38.956h31.846l-19.25 108.01h-31.626zM70.895 46.416c-4.199-5.534-8.824-8.637-12.829-8.637-4.418 0-17.299.569-21.007 22.135C32.628 85.59 48.544 85.37 52.097 85.37c3.527 0 5.75 0 9.29-2.663l1.317-7.073H49.656l3.979-23.014h46.444l-8.617 48.239c-19.908 11.067-31.406 12.386-42.918 12.386-45.785 0-51.754-35.852-47.336-60.637 4.419-24.786 28.306-44.71 55.967-44.71 29.636 0 40.695 15.05 45.114 26.337zm393.159 34.986-48.125-.026c.556 7.55 4.51 12.528 9.07 12.528 3.204 0 7.08-1.241 9.289-6.335l26.02 4.939c-7.507 14.959-23.152 23.48-39.573 23.48-25.347 0-42-23.48-34.313-47.412l-6.977-.026-7.519 42.498h-31.858l7.531-42.498h-12.39l-7.518 42.498h-31.846l7.739-42.498h-8.605c.272 3.698-.077 9.219-.788 12.865l-48.124-.04c.543 7.551 4.509 12.542 9.07 12.542 3.203 0 7.08-1.241 9.288-6.335l26.02 4.939C282.939 107.48 267.306 116 250.873 116c-20.154 0-35.98-15.58-35.98-34.379l-5.31 29.427h-31.626l19.017-108.01h31.846l-11.227 62.655c6.447-15.825 22.622-27.332 40.05-27.332 17.066 0 32.298 7.072 36.38 23.944l3.579-20.311h10.4l5.53-30.539h31.845l-5.53 30.539h12.378l5.529-30.539H389.6l-5.31 30.539h10.62l-2.778 15.179c7.971-11.262 21.265-18.8 35.36-18.8 30.27-.012 40.954 20.364 36.562 43.029m-215.83-12.878 18.398-.013c.697-8.3-3.527-9.93-8.385-9.839-3.67.065-7.622 4.125-10.012 9.852m169.837.078 18.41.026c.698-8.314-3.501-10.033-8.359-9.956-3.695.065-7.674 4.163-10.05 9.93",
            "recolor-fill": "true",
            "recolor-stroke": "true"
          })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  f as _
};

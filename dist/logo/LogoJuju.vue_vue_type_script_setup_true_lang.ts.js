import { defineComponent as o, computed as m, openBlock as a, createElementBlock as s, normalizeStyle as n, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ o({
  __name: "LogoJuju",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (l, c) => (a(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(i.value)
    }, c[0] || (c[0] = [
      t("g", null, [
        t("path", {
          fill: "#DD4813",
          d: "M128 0C57.309 0 0 57.306 0 127.998s57.309 128.005 128 128.005c70.693 0 128-57.313 128-128.005S198.693 0 128 0"
        }),
        t("path", {
          fill: "#FFF",
          d: "M65.88 207.15a5.72 5.72 0 0 1-4.073 1.683 5.73 5.73 0 0 1-4.083-1.69 5.72 5.72 0 0 1-1.684-4.073c0-1.54.598-2.988 1.685-4.075a5.74 5.74 0 0 1 4.082-1.689 5.72 5.72 0 0 1 4.072 1.685 5.73 5.73 0 0 1 1.687 4.08 5.73 5.73 0 0 1-1.687 4.078m25.117-86.08c-.58-1.847-1.414-3.365-2.481-4.512a9.8 9.8 0 0 0-3.826-2.552c-1.484-.552-3.166-.832-4.997-.832s-3.497.279-4.951.83a9.9 9.9 0 0 0-3.79 2.554c-1.065 1.144-1.898 2.663-2.48 4.512-.583 1.86-.88 4.136-.88 6.765v67.08h-11.58V126.81c0-3.436.467-6.634 1.385-9.504.92-2.882 2.369-5.427 4.304-7.564 1.938-2.141 4.41-3.824 7.352-5.005 2.933-1.18 6.485-1.777 10.555-1.777 4.068 0 7.646.598 10.637 1.776 2.997 1.18 5.5 2.865 7.439 5.006 1.933 2.134 3.397 4.678 4.347 7.562.948 2.87 1.429 6.07 1.429 9.506v9.244H91.88v-8.218c0-2.62-.298-4.897-.883-6.765m48.329 47.024c0 3.443-.48 6.642-1.427 9.51-.948 2.875-2.411 5.42-4.348 7.56-1.94 2.14-4.442 3.824-7.44 5.004-2.992 1.18-6.572 1.778-10.637 1.778s-7.616-.599-10.554-1.779c-2.94-1.179-5.412-2.863-7.351-5.003-1.937-2.14-3.386-4.686-4.305-7.564-.918-2.87-1.382-6.068-1.382-9.506v-29.267h11.579v28.243c0 2.631.297 4.906.879 6.762.58 1.851 1.415 3.37 2.48 4.516a9.9 9.9 0 0 0 3.789 2.552c1.453.551 3.118.831 4.95.831s3.514-.28 4.997-.83a9.84 9.84 0 0 0 3.827-2.553c1.066-1.148 1.903-2.667 2.48-4.515.585-1.866.883-4.14.883-6.763v-28.243h11.58zm-11.552-37.718a5.766 5.766 0 0 1 5.758-5.761c3.18 0 5.768 2.585 5.768 5.76a5.775 5.775 0 0 1-5.768 5.767c-3.176 0-5.758-2.587-5.758-5.766m34.956-81.703c-.58-1.847-1.416-3.365-2.483-4.514a9.8 9.8 0 0 0-3.828-2.551c-1.48-.552-3.163-.831-4.996-.831-1.83 0-3.496.279-4.949.829a9.9 9.9 0 0 0-3.792 2.553c-1.063 1.148-1.897 2.666-2.477 4.514-.583 1.859-.879 4.135-.879 6.765v67.08h-11.58V54.414c0-3.435.464-6.633 1.383-9.506.921-2.882 2.37-5.427 4.306-7.564 1.935-2.14 4.41-3.823 7.352-5.003 2.938-1.18 6.487-1.78 10.551-1.78 4.066 0 7.646.599 10.64 1.779 3 1.18 5.5 2.865 7.436 5.004 1.937 2.136 3.4 4.68 4.35 7.56.946 2.875 1.427 6.075 1.427 9.51v9.243H163.61v-8.218c0-2.625-.296-4.901-.879-6.765m48.326 47.025c0 3.44-.48 6.64-1.427 9.508-.948 2.879-2.41 5.422-4.345 7.56-1.94 2.141-4.443 3.825-7.439 5.005s-6.576 1.778-10.637 1.778c-4.068 0-7.62-.6-10.556-1.78-2.941-1.178-5.412-2.862-7.351-5.003-1.936-2.138-3.384-4.683-4.306-7.564-.918-2.874-1.383-6.073-1.383-9.504V66.43h11.58v28.243c0 2.626.296 4.901.88 6.763.58 1.848 1.412 3.366 2.482 4.514a9.86 9.86 0 0 0 3.785 2.553c1.457.552 3.12.83 4.95.83 1.836 0 3.516-.28 4.998-.83a9.8 9.8 0 0 0 3.83-2.552c1.064-1.146 1.899-2.664 2.478-4.514.584-1.862.881-4.138.881-6.763V66.43h11.58z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};

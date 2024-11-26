import { defineComponent as m, computed as l, openBlock as o, createElementBlock as s, normalizeStyle as n, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoAdroll",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const e = c, i = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, h) => (o(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "95",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 95",
      style: n(i.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#0DBDFF",
          d: "M102.607 46.54c0-25.695-20.21-46.54-46.54-46.54-17.495 0-32.682 9.585-40.65 23.847L38.11 46.54c0-9.932 8.372-17.958 17.957-17.958 10.163 0 17.958 8.026 17.958 17.958s-7.853 17.958-17.958 17.958H17.38C7.795 64.498 0 72.293 0 81.878V93.08h56.067c26.157 0 46.54-20.845 46.54-46.54"
        }),
        t("path", {
          fill: "#333",
          d: "M314.635 41.054h21.711c8.43 0 12.819-3.984 12.819-11.432 0-7.565-4.389-11.549-12.819-11.549h-21.71zm12.53 18.131h-12.53V93.08h-19.459V10.45c0-5.774 4.677-10.451 10.51-10.451h31.238c20.151 0 32.393 12.126 32.393 29.506 0 13.974-7.853 24.598-21.48 28.351l24.251 35.223h-23.327zm184.832 31.412c-3.811 2.483-8.315 4.215-13.165 4.215-13.396 0-19.69-9.18-19.69-22.23V4.85l18.42-4.388v72.293c0 3.637 1.79 5.89 5.023 5.89.981 0 2.079-.232 3.118-.694zm-32.162 0c-3.811 2.483-8.315 4.215-13.166 4.215-13.396 0-19.69-9.18-19.69-22.23V12.53l18.42-4.562v64.787c0 3.637 1.79 5.89 5.024 5.89.981 0 2.078-.232 3.118-.694zm-57.8-31.18c0-10.798-6.929-18.247-17.323-18.247s-17.322 7.333-17.322 18.246c0 10.914 6.929 18.247 17.322 18.247 10.394 0 17.323-7.333 17.323-18.247m-53.469 0c0-20.729 15.186-35.222 36.146-35.222s36.262 14.378 36.262 35.222c0 20.903-15.359 35.396-36.262 35.396-20.96 0-36.146-14.493-36.146-35.396M156.307 55.49l13.28-35.57 13.281 35.57zm-.693-48.907L121.547 93.08h20.671l7.276-19.517h40.13L196.9 93.08h20.671L180.905 0h-15.532a10.54 10.54 0 0 0-9.759 6.583m95.101 71.08c-10.278 0-17.323-7.333-17.323-18.247s7.045-18.246 17.323-18.246 17.323 7.333 17.323 18.246c0 11.202-7.218 18.247-17.323 18.247m16.11-45.097c-4.562-5.312-11.49-8.372-19.863-8.372-18.016 0-32.393 14.378-32.393 35.107 0 20.902 14.377 35.511 31.873 35.511 9.354 0 16.688-4.1 21.365-10.913l.808 9.18h16.514V0h-7.795c-5.774 0-10.509 4.677-10.509 10.451z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

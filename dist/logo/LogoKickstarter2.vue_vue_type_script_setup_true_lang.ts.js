import { defineComponent as i, computed as l, openBlock as o, createElementBlock as n, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoKickstarter2",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const c = m, h = l(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (s, e) => (o(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "55",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 55",
      style: r(h.value)
    }, e[0] || (e[0] = [
      t("g", { fill: "#05CE78" }, [
        t("path", { d: "M48.084 41.464c0 6.556-5.473 12.05-12.29 11.961-3.768 0-7.626-1.772-9.958-5.139l-2.512-3.544c-1.166 5.14-5.651 8.683-11.393 8.683C5.293 53.425 0 48.11 0 41.553v-29.68C0 5.316 5.203 0 11.931 0c5.831 0 10.406 3.81 11.483 9.037l2.87-3.898c2.333-3.19 6.1-5.05 9.869-5.05 6.458 0 11.93 5.05 11.93 11.606 0 2.48-.717 4.962-2.242 7L40.1 26.58l5.741 7.885c1.525 2.126 2.243 4.518 2.243 6.999M64.6 0c7.2 0 12.957 5.857 12.867 12.78v27.866c0 6.923-5.668 12.78-12.956 12.78-7.108 0-12.866-5.769-12.866-12.78V12.78C51.645 5.857 57.403 0 64.601 0m62.731 38.743c0 8.58-7.17 14.683-18.678 14.683-15.403 0-26.734-11.41-26.734-26.713C81.92 11.411 93.251 0 108.654 0c11.508 0 18.678 6.103 18.678 14.683 0 5.75-2.832 9.642-8.498 12.03 5.666 2.388 8.498 6.369 8.498 12.03m52.536 2.721c0 6.556-5.482 12.05-12.223 11.961-3.775 0-7.64-1.772-9.977-5.139l-2.516-3.544c-1.169 5.14-5.662 8.683-11.414 8.683-6.651 0-11.953-5.316-11.953-11.872v-29.68C131.785 5.316 136.997 0 143.738 0c5.842 0 10.426 3.81 11.504 9.037l2.786-3.898c2.337-3.19 6.112-5.05 9.886-5.05 6.472 0 11.954 5.05 11.954 11.606 0 2.48-.72 4.962-2.247 7l-5.752 7.885 5.752 7.885c1.528 2.126 2.247 4.518 2.247 6.999m45.412-4.478c0 10.63-8.21 17.33-22.04 17.33-14.098 0-20.7-4.824-20.7-12.685 0-5.45 4.193-8.933 10.17-8.933h.09l-3.212-2.95c-4.015-3.662-6.781-7.325-6.781-12.685C182.807 6.61 190.48 0 203.597 0c13.385 0 19.72 4.735 19.72 12.686 0 4.734-3.212 7.95-8.03 8.665l3.3 2.948c4.016 3.574 6.693 7.326 6.693 12.687m36.309 5.31c0 6.589-5.62 12.02-12.846 12.02-6.959 0-12.58-5.431-12.58-12.02V23.863c-5.976-.356-10.883-5.253-10.883-11.486 0-6.5 5.174-11.486 11.508-11.486h24.177c6.334 0 11.508 5.075 11.508 11.486 0 6.233-4.907 11.22-10.884 11.486zm31.292 1.843c-3.037 6.28-7.326 9.287-12.508 9.287-9.382 0-16.172-8.58-11.973-18.221L279.39 9.73C282.16 3.45 286.18 0 292.97 0c6.88 0 10.901 3.45 13.582 9.73l10.99 25.475c4.11 9.641-2.592 18.221-12.063 18.221-5.27 0-9.56-3.007-12.598-9.287m29.457-29.981c0-8.727 4.666-13.267 13.01-13.267h15.525c9.422 0 16.78 7.123 16.78 16.295 0 4.986-2.064 9.082-5.474 11.664l4.666 7.39c1.256 1.96 1.795 4.097 1.795 6.323 0 6.589-5.205 11.754-11.755 11.754-4.038 0-7.986-2.048-10.23-5.788l-1.256-2.227c-1.525 4.72-5.743 8.015-11.127 8.015-6.55 0-11.934-5.521-11.934-12.2zm83.522 28.138c0 6.589-5.52 12.02-12.911 12.02-6.945 0-12.555-5.431-12.555-12.02V23.863c-5.966-.356-10.864-5.253-10.864-11.486 0-6.5 5.165-11.486 11.487-11.486h24.22a11.457 11.457 0 0 1 11.486 11.486c0 6.233-4.897 11.22-10.863 11.486zm56.275 1.783c0 5.747-4.6 10.326-10.174 10.236h-18.58c-8.495 0-13.096-4.489-13.096-13.288V14.179c0-8.71 4.6-13.288 13.095-13.288h18.58c5.575 0 10.175 4.579 10.175 10.326 0 5.207-3.185 8.978-7.786 9.876 2.124 1.347 3.274 3.592 3.274 6.554 0 2.964-1.238 5.208-3.274 6.556 4.513.897 7.786 4.759 7.786 9.876m3.563-29.921c0-8.727 4.576-13.267 13.01-13.267h15.525c9.422 0 16.78 7.123 16.78 16.295 0 4.986-2.064 9.082-5.474 11.664l4.666 7.39c1.256 1.96 1.795 4.097 1.795 6.323 0 6.589-5.205 11.754-11.755 11.754-4.038 0-7.987-2.048-10.23-5.788l-1.256-2.227c-1.525 4.72-5.743 8.015-11.127 8.015-6.55 0-11.934-5.521-11.934-12.2z" })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
import { defineComponent as c, computed as h, openBlock as n, createElementBlock as s, normalizeStyle as m, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoBlender2",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, i) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "208",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 208",
      style: m(o.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#FFF",
          d: "M100.43 115.195c.931-16.606 9.062-31.235 21.33-41.606 12.03-10.186 28.222-16.412 45.89-16.412 17.65 0 33.843 6.226 45.882 16.412 12.258 10.37 20.39 25 21.33 41.588.93 17.062-5.928 32.912-17.958 44.661-12.267 11.951-29.716 19.45-49.254 19.45s-37.021-7.499-49.28-19.45c-12.039-11.75-18.88-27.6-17.94-44.643"
        }),
        t("path", {
          fill: "#265787",
          d: "M133.168 116.676c.477-8.52 4.65-16.027 10.944-21.348 6.173-5.226 14.481-8.421 23.547-8.421 9.056 0 17.365 3.195 23.542 8.421 6.29 5.321 10.462 12.828 10.944 21.34.478 8.754-3.04 16.887-9.214 22.915-6.294 6.132-15.247 9.98-25.272 9.98s-18.996-3.848-25.286-9.98c-6.177-6.028-9.687-14.161-9.205-22.907"
        }),
        t("path", {
          fill: "#EA7600",
          d: "M78.41 134.18c.06 3.34 1.125 9.834 2.724 14.904 3.359 10.733 9.057 20.663 16.986 29.413 8.137 8.995 18.156 16.22 29.73 21.349 12.164 5.387 25.344 8.132 39.034 8.11 13.668-.019 26.849-2.818 39.013-8.246 11.573-5.179 21.583-12.435 29.707-21.434 7.924-8.787 13.613-18.734 16.982-29.467 1.693-5.423 2.763-10.927 3.192-16.45a75 75 0 0 0-.528-16.336c-1.508-10.611-5.18-20.567-10.833-29.643-5.17-8.34-11.834-15.641-19.759-21.787l.018-.013-79.97-61.405c-.073-.054-.132-.112-.209-.162-5.246-4.028-14.07-4.014-19.84.022-5.834 4.082-6.502 10.833-1.31 15.09l-.022.023 33.355 27.124-101.663.108h-.136c-8.403.01-16.48 5.523-18.08 12.49-1.643 7.098 4.065 12.986 12.802 13.018l-.014.031 51.53-.1L9.167 141.4c-.117.086-.244.176-.352.262-8.674 6.642-11.478 17.687-6.015 24.676 5.545 7.108 17.335 7.121 26.099.041l50.184-41.071s-.732 5.544-.673 8.872m128.955 18.566c-10.34 10.535-24.817 16.508-40.48 16.54-15.687.027-30.163-5.893-40.503-16.409-5.053-5.125-8.764-11.022-11.054-17.303a44.9 44.9 0 0 1-2.537-19.334c.546-6.462 2.47-12.625 5.54-18.202 3.016-5.481 7.17-10.435 12.3-14.625 10.05-8.19 22.847-12.625 36.23-12.643 13.398-.018 26.185 4.376 36.246 12.54 5.12 4.171 9.27 9.107 12.286 14.58a45.7 45.7 0 0 1 5.563 18.192 45 45 0 0 1-2.547 19.32c-2.294 6.3-5.992 12.197-11.044 17.344"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

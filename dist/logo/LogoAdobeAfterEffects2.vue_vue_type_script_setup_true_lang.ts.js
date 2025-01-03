import { defineComponent as o, computed as a, openBlock as m, createElementBlock as n, normalizeStyle as r, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ o({
  __name: "LogoAdobeAfterEffects2",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const e = h, i = a(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, l) => (m(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "250",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 250",
      style: r(i.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("rect", {
          width: "256",
          height: "249.6",
          x: "0",
          y: "0",
          fill: "#00005B",
          rx: "42.5"
        }),
        t("path", {
          fill: "#99F",
          d: "M102.843 149.333H63.172L55.1 174.454a2.02 2.02 0 0 1-1.901 1.547L32.947 176q-1.72 0-1.202-1.89l34.347-98.509.343-1.035.114-.354.23-.74c.114-.382.228-.787.343-1.226.45-2.291.68-4.62.687-6.955a1.063 1.063 0 0 1 1.202-1.202h27.306q1.2 0 1.374.859l38.983 109.335q.515 1.718-1.03 1.717h-22.326a1.59 1.59 0 0 1-1.717-1.202zm-33.488-21.181h27.134l-.387-1.277-.621-2.022-.909-2.896-1.745-5.467-1.662-5.254-3.092-9.789a336 336 0 0 1-2.46-8.138l-.878-3.096-.948-3.393-.866-3.147h-.172a139 139 0 0 1-3.136 12.23l-1.16 3.723-2.79 9-1.414 4.585q-.383 1.242-.765 2.456l-.76 2.398-.756 2.342-.752 2.284-.748 2.227q-.559 1.65-1.113 3.234m130.518 11.404h-33.831a24.1 24.1 0 0 0 3.263 9.461 17.67 17.67 0 0 0 7.813 6.44 32.6 32.6 0 0 0 13.653 2.676 62 62 0 0 0 11.077-1.216 40.8 40.8 0 0 0 9.523-2.482q.859-.685.86.858v16.315c.028.445-.061.889-.259 1.288-.196.312-.46.576-.772.773a43.7 43.7 0 0 1-10.64 3.17 75.5 75.5 0 0 1-15.113 1.287q-11.814 0-19.917-3.545l-.52-.233a36.4 36.4 0 0 1-13.394-10.132 39.7 39.7 0 0 1-7.385-13.996A55.1 55.1 0 0 1 142 134.678a54.1 54.1 0 0 1 2.662-16.916 44.2 44.2 0 0 1 7.985-14.597 38.4 38.4 0 0 1 12.88-10.133c5.037-2.46 10.991-3.343 17.86-3.343a38.8 38.8 0 0 1 16.573 3.263 29.2 29.2 0 0 1 11.248 8.495 39 39 0 0 1 6.354 12.107 43.2 43.2 0 0 1 2.061 13.052q0 3.78-.257 6.87l-.153 1.764-.16 1.674-.095.848-.022.179a1.556 1.556 0 0 1-1.545 1.374l-.471.01-.587.03-.457.033-1.068.091-.938.093q-.383.04-.795.075l-.851.067-.909.06-.965.05-1.022.043-.533.018-1.107.03c-1.095.027-2.217-.041-3.368-.125l-1.746-.128a40 40 0 0 0-2.7-.106m-33.831-15.645h23.386l1.992-.013 1.354-.019.877-.02.984-.034a6 6 0 0 0 2.49-.825v-1.03a13.7 13.7 0 0 0-.686-3.95 14.03 14.03 0 0 0-13.91-9.79 14.92 14.92 0 0 0-14.169 8.072 24.8 24.8 0 0 0-2.318 7.61"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

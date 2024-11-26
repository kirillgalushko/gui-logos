import { defineComponent as c, computed as h, openBlock as n, createElementBlock as m, normalizeStyle as p, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ c({
  __name: "LogoBlogger",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = h(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, l) => (n(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: p(o.value)
    }, l[0] || (l[0] = [
      t("g", null, [
        t("path", {
          fill: "#F06A35",
          d: "M29.251 254.992c-4.79-1.262-8.924-3.12-12.737-5.722-3.218-2.197-7.922-6.739-9.711-9.376-2.185-3.222-4.696-8.738-5.72-12.564-1.044-3.903-1.06-5.457-1.08-99.134-.018-93.203.003-95.253 1.026-99.258C4.648 14.773 15.853 3.996 30.305.78 34.46-.144 220.08-.305 224.562.61c12.135 2.483 21.673 9.78 27.192 20.805 4.388 8.765 3.996-.88 4.197 103.185.128 66.212.01 94.01-.412 97.473-1.976 16.205-13.134 28.775-29.19 32.882-4.108 1.05-5.537 1.066-98.789 1.037-90.164-.027-94.794-.074-98.309-1"
        }),
        t("path", {
          fill: "#FFF",
          d: "M164.338 206.474c11.47-1.564 20.458-6.162 28.89-14.776 6.1-6.232 9.918-12.977 12.414-21.93 1.036-3.719 1.123-5.53 1.313-27.365.144-16.481.024-24.2-.405-26.148-.622-2.825-2.385-5.448-4.397-6.541-.62-.337-4.586-.766-8.815-.953-7.087-.315-7.88-.453-10.116-1.764-3.548-2.08-4.525-4.324-4.535-10.42-.019-11.647-4.866-22.46-14.442-32.22-6.823-6.952-14.434-11.658-23.12-14.295-2.08-.632-6.737-.847-22.333-1.03-24.472-.29-29.904.212-38.236 3.53-15.36 6.118-26.395 19.011-30.421 35.541-.756 3.105-.903 8.08-1.082 36.663-.223 35.808.023 41.066 2.26 48.162 1.85 5.863 3.715 9.456 7.557 14.555 7.32 9.715 18.29 16.73 29.258 18.712 5.22.943 69.615 1.179 76.21.28"
        }),
        t("path", {
          fill: "#F06A35",
          d: "M162.317 150.441c4.233 3.953 3.34 10.99-1.761 13.88l-5.243.853-30.939.358c-20.86.195-27.128-.216-28.409-.724l-.04-.017c-2.518-1.097-4.862-4.143-5.267-6.845-.386-2.573.908-6.11 2.89-7.905l.441-.384c1.954-1.605 4.202-1.893 22.635-1.958l21.317-.022c21.549.016 21.738.301 24.376 2.764M131.944 92.09c3.286 1.66 4.714 4 4.714 7.727 0 3.236-1.24 5.54-3.994 7.398l-.534.341c-1.34.8-2.654.939-13.041 1.02l-6.703.038c-8.309.017-14.705-.157-15.727-.439-5.864-1.616-8.055-10.029-3.745-14.38l.401-.398c2.307-2.235 3.775-2.466 17.292-2.487l10.186.008c8.608.04 9.295.235 11.151 1.172"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

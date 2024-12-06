import { defineComponent as l, computed as m, openBlock as n, createElementBlock as r, normalizeStyle as s, createElementVNode as t } from "vue";
const v = /* @__PURE__ */ l({
  __name: "LogoOreilly2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, h) => (n(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "93",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 93",
      style: s(o.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#221F20",
          d: "M271.927 16.342V1.472H209.88v89.255h62.047V75.852h-47.17V53.54h44.898V38.665h-44.898V16.342zm46.038 74.385V1.478h14.882v74.373h42.91v14.876zm69.916 0V1.478h14.882v74.373h42.922v14.876zM287.54 1.478h14.876v89.249H287.54zM0 46.509C0 20.83 20.812.03 46.491.024 72.17.03 92.97 20.83 92.976 46.509 92.97 72.181 72.17 92.994 46.491 93 20.812 92.994 0 72.181 0 46.509m24.13-22.361c-5.722 5.76-9.248 13.61-9.26 22.361.012 8.757 3.538 16.601 9.26 22.348 5.748 5.735 13.604 9.267 22.361 9.267s16.601-3.532 22.343-9.267C74.575 63.11 78.1 55.266 78.1 46.509c0-8.751-3.525-16.601-9.266-22.361-5.742-5.716-13.586-9.242-22.343-9.248-8.757.006-16.613 3.532-22.361 9.248m152.259 28.285c10.734-3.223 18.565-13.144 18.565-24.93 0-14.372-11.653-26.024-26.037-26.024H124.08v89.248h14.87v-37.18h20.724l22.436 37.18h17.357zM138.95 38.665V16.342h29.966c6.163.006 11.155 5.005 11.168 11.16-.013 6.158-5.005 11.15-11.168 11.163zM512 1.478h-18.08l-22.897 33.138-22.895-33.138h-18.081l33.517 48.531v40.718h14.882V50.04z"
        }),
        t("path", {
          fill: "#D31242",
          d: "M113.53 10.972c0 6.05-4.898 10.954-10.942 10.954-6.055 0-10.952-4.904-10.952-10.954 0-6.044 4.897-10.948 10.953-10.948 6.043 0 10.942 4.904 10.942 10.948"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};
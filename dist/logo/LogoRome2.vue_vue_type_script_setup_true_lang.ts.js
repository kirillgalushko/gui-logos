import { defineComponent as h, computed as l, openBlock as n, createElementBlock as s, normalizeStyle as a, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ h({
  __name: "LogoRome2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const e = o, m = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (c, i) => (n(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(m.value)
    }, i[0] || (i[0] = [
      t("g", null, [
        t("path", {
          fill: "#27272A",
          d: "M38.315 153.175V255.29H.02V153.175zm216.997 0V255.29H217.02V153.175zM90.146 23.692l10.112 21.09a6.687 6.687 0 0 1-3.815 9.22c-33.946 12.055-58.15 43.214-58.15 79.756v6.687H0v-6.687C0 81.991 33.954 37.811 81.8 20.296a6.694 6.694 0 0 1 8.346 3.396m83.353-3.489c47.86 17.573 81.813 61.774 81.813 113.52v6.687H217.02v-6.687c0-36.542-24.175-67.695-58.15-79.757a6.687 6.687 0 0 1-3.815-9.22L165.152 23.6a6.694 6.694 0 0 1 8.347-3.397"
        }),
        t("path", {
          fill: "#FFC905",
          d: "M127.667 60.78c42.293 0 76.587 32.656 76.587 72.943V255.29H165.96V133.723c0-20.147-17.147-36.471-38.293-36.471s-38.294 16.31-38.294 36.47v121.569H51.08V133.723c0-40.287 34.295-72.942 76.588-72.942m24.295-59.135a6.7 6.7 0 0 1 5.148 9.517l-1.836 3.843-14.219 29.784a6.74 6.74 0 0 1-6.467 3.794 125 125 0 0 0-13.843 0 6.73 6.73 0 0 1-6.46-3.794L100.06 15.005l-1.837-3.843a6.7 6.7 0 0 1 5.149-9.517 180.2 180.2 0 0 1 48.59 0"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};

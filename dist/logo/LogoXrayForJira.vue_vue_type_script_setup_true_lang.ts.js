import { defineComponent as h, computed as n, openBlock as m, createElementBlock as p, normalizeStyle as s, createElementVNode as t } from "vue";
const g = /* @__PURE__ */ h({
  __name: "LogoXrayForJira",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, l = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, o) => (m(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "209",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 209",
      style: s(l.value)
    }, o[0] || (o[0] = [
      t("g", null, [
        t("polygon", {
          fill: "#31B34B",
          points: "98.0921379 104.306759 49.0813793 116.559448 24.5406897 208.366345",
          opacity: ".5"
        }),
        t("polygon", {
          fill: "#31B34B",
          points: "98.0921379 104.306759 0 129.024 0 67.4427586 73.5514483 67.4427586 98.2686897 104.271448",
          opacity: ".8"
        }),
        t("polygon", {
          fill: "#31B34B",
          points: "0 67.4427586 0 128.882759 73.5514483 0"
        }),
        t("path", {
          fill: "#000",
          d: "m153.07 55.049 22.528 32.273 22.528-32.273h22.246l-32.803 46.998 35.84 51.27h-22.67l-25.035-35.098-24.717 35.099h-22.104l35.31-50.388-33.05-47.881zm145.832 98.269-16.914-28.955q-1.766.105-3.53 0h-21.964v28.955H237.64v-98.27h40.818c25.318 0 39.76 12.183 39.76 33.828 0 15.466-6.85 26.518-19.456 31.78l21.54 32.662zm-42.372-45.586h22.069c14.124 0 21.821-6.003 21.821-18.362s-7.838-17.972-21.821-17.972h-22.105v36.37zm148.939 24.717h-47.952l-8.686 20.869h-19.385l43.078-98.27h19.42l42.444 98.27h-20.162zm-6.71-16.172-17.09-41.454-17.655 41.348zm77.683 4.66v32.38h-18.75v-31.461l-36.58-66.807h19.031l26.695 46.186 26.306-46.186H512z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  g as _
};

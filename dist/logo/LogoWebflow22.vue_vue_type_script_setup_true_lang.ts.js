import { defineComponent as i, computed as m, openBlock as h, createElementBlock as n, normalizeStyle as s, createElementVNode as c } from "vue";
const d = /* @__PURE__ */ i({
  __name: "LogoWebflow22",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const e = l, o = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "129",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 129",
      style: s(o.value)
    }, t[0] || (t[0] = [
      c("g", null, [
        c("path", {
          fill: "#4353FF",
          "fill-rule": "nonzero",
          d: "M165.325 50.358c0-9.185-8.932-18.94-24.387-18.94-17.356 0-36.422 12.732-39.336 38.132-2.977 25.654 12.985 37.056 29.074 37.056s24.514-6.271 33.129-14.632c-7.412-9.312-16.976-5.004-18.813-4.054-2.027 1.013-4.624 2.407-9.945 2.407-6.208 0-12.542-2.787-12.542-14.379 39.78-3.927 42.82-16.406 42.82-25.59m-19.7 1.52c-.253 2.85-1.393 7.728-21.536 10.451 4.244-15.075 12.351-16.215 16.089-16.215 3.484 0 5.7 2.723 5.447 5.764m-67.397 2.47s-8.55 26.857-9.248 29.074c-.253-2.28-6.524-50.484-6.524-50.484-14.569 0-22.36 10.388-26.477 21.347 0 0-10.389 26.92-11.275 29.2-.064-2.09-1.584-28.883-1.584-28.883-.887-13.43-13.175-21.6-23.12-21.6l12.035 73.034c15.266-.063 23.5-10.388 27.808-21.347 0 0 9.184-23.753 9.564-24.83.064 1.013 6.588 46.177 6.588 46.177 15.329 0 23.564-9.692 27.998-20.27l21.473-52.764c-15.14 0-23.12 10.324-27.238 21.346m143.345-23.057c-9.438 0-16.659 5.131-22.74 12.669v-.063L204.281 0c-12.542 0-22.74 10.895-24.704 27.11l-9.502 78.356c7.222 0 14.886-2.09 19.003-7.411 3.674 4.75 9.185 8.551 17.356 8.551 21.157 0 35.662-24.577 35.662-47.634-.126-21.03-10.325-27.68-20.523-27.68m-1.963 37.69c-2.217 12.858-9.375 21.6-16.28 21.6-6.967 0-9.944-3.105-9.944-3.105 1.33-11.275 2.153-18.179 4.687-24.133s8.551-15.456 14.822-15.456c6.144 0 8.932 8.171 6.715 21.093M294.924 33h-14.759l.064-.76c1.013-9.628 3.293-14.695 10.831-15.518 5.131-.507 7.411-3.168 7.981-6.081.444-2.28 1.837-10.199 1.837-10.199-29.644-.19-38.955 12.606-41.362 32.115l-.064.444h-.317c-4.814 0-10.134 5.447-11.021 12.351l-.317 2.534h9.882l-8.298 68.537-2.534 12.289c.317 0 .697.063 1.013.063 13.873-.507 22.74-11.465 24.704-27.364l6.461-53.525h4.624c4.56 0 9.882-4.56 10.832-12.162zm76.772-1.266c-17.04 0-33.129 12.542-38.07 32.241-4.94 19.7 2.534 43.01 27.618 43.01 25.02 0 39.463-24.26 39.463-44.467 0-20.08-13.619-30.784-29.011-30.784m6.904 36.612c-.887 8.931-4.814 22.487-15.582 22.487-10.832 0-9.312-15.836-8.235-23.374 1.14-8.044 5.638-19.51 15.33-19.51 8.677 0 9.5 10.325 8.487 20.397m106.29-13.999s-8.552 26.857-9.249 29.074c-.253-2.28-6.524-50.484-6.524-50.484-14.569 0-22.36 10.388-26.477 21.347 0 0-10.389 26.92-11.275 29.2-.064-2.09-1.584-28.883-1.584-28.883-.887-13.43-13.175-21.6-23.12-21.6l11.972 73.034c15.265-.063 23.5-10.388 27.807-21.347 0 0 9.185-23.753 9.502-24.83.063 1.013 6.587 46.177 6.587 46.177 15.33 0 23.564-9.692 27.998-20.27L512 33.002c-15.076 0-23.057 10.324-27.11 21.346M308.86.443l-12.416 100.145-2.533 12.352c.316 0 .696.064 1.013.064 13.365-.19 22.867-11.909 24.64-26.668l7.158-57.452c2.154-17.546-8.298-28.44-17.862-28.44"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

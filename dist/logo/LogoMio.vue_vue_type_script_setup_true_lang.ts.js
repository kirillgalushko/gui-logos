import { defineComponent as i, computed as l, openBlock as h, createElementBlock as p, normalizeStyle as n, createStaticVNode as m } from "vue";
const r = /* @__PURE__ */ i({
  __name: "LogoMio",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, a = l(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (s, e) => (h(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "229",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 229",
      style: n(a.value)
    }, e[0] || (e[0] = [
      m('<g><polyline fill="#963398" points="156.60973 17.2511712 156.60973 228.28973 116.307027 187.998559 0 187.998559 0 17.2511712 156.171532 17.2511712"></polyline><polygon fill="#1EBDBF" points="174.725766 0 174.725766 211.038559 134.423063 170.735856 18.116036 170.735856 18.116036 0"></polygon><polygon fill="#492670" points="18.116036 17.2511712 18.116036 170.83964 134.457658 170.83964 156.575135 192.991712 156.575135 17.6663063"></polygon><path fill="#FFF" d="M42.92 83.8c5.04 0 9.133 4.382 9.133 9.801s-4.082 9.814-9.133 9.814S33.8 99.02 33.8 93.6s4.08-9.8 9.12-9.8m43.347 0a9.79 9.79 0 0 1 9.721 9.87 9.721 9.721 0 1 1-9.721-9.871m44.005 0a9.79 9.79 0 0 1 9.71 9.87 9.71 9.71 0 1 1-9.71-9.871"></path><path fill="#3E1B67" d="M489.271 90.315a40.73 40.73 0 0 1 16.214 15.614 46.9 46.9 0 0 1 0 45.226 40.8 40.8 0 0 1-16.214 15.614 49 49 0 0 1-23.72 5.627 48 48 0 0 1-23.547-5.627 40.5 40.5 0 0 1-15.96-15.614 47.28 47.28 0 0 1 .08-45.226h-.01a40.97 40.97 0 0 1 16.143-15.614 51.81 51.81 0 0 1 47.014 0m-143.048-39.6a9.8 9.8 0 0 1 .853 4.613v110.934a3.46 3.46 0 0 1-4.094 4.093h-15.487a4.6 4.6 0 0 1-3.24-.945 4.12 4.12 0 0 1-1.026-3.148v-64.346L294.4 136.222a27 27 0 0 1-3.667 3.667c-.76.59-1.69.917-2.652.934a4.6 4.6 0 0 1-2.56-.934 19.6 19.6 0 0 1-3.587-3.667l-28.828-34.306v64.346a4.07 4.07 0 0 1-1.027 3.148 4.6 4.6 0 0 1-3.24.945h-15.58a3.46 3.46 0 0 1-4.093-4.093V55.352c0-4.129 1.257-6.17 3.77-6.17 1.12.045 2.196.45 3.068 1.153a24 24 0 0 1 3.933 4.013l48.432 54.948 47.96-54.948a47 47 0 0 1 4.093-4.013 4.53 4.53 0 0 1 2.628-1.138l.267-.015c1.185-.1 2.32.499 2.906 1.534m33.476 35.99h14.84a4.76 4.76 0 0 1 3.299.935 4.16 4.16 0 0 1 1.015 3.16v75.439a4.12 4.12 0 0 1-1.015 3.148 4.7 4.7 0 0 1-3.252.945h-14.887a3.46 3.46 0 0 1-4.094-4.093V90.822a4.4 4.4 0 0 1 .934-3.182 4.37 4.37 0 0 1 3.16-.934m74.84 21.864a19.5 19.5 0 0 0-7.68 7.853 27.41 27.41 0 0 0 0 24.217 19.4 19.4 0 0 0 7.68 7.841 22.06 22.06 0 0 0 10.452 2.735l.548-.002a23.06 23.06 0 0 0 11.186-2.71 19.75 19.75 0 0 0 7.934-7.934 26.47 26.47 0 0 0 0-24.066 19.9 19.9 0 0 0-7.934-7.934 23.24 23.24 0 0 0-10.601-2.732h-.585a22.2 22.2 0 0 0-11 2.732m-60.08-62.293a13 13 0 0 1 4.866 5.04 14.85 14.85 0 0 1 0 13.837 12.47 12.47 0 0 1-4.866 4.947 14.5 14.5 0 0 1-6.779 1.789l-.474-.001a14.14 14.14 0 0 1-7.08-1.788 12.33 12.33 0 0 1-4.867-4.947 14.85 14.85 0 0 1 0-13.838 12.85 12.85 0 0 1 4.866-5.039 13.63 13.63 0 0 1 6.615-1.878l.466-.002a14 14 0 0 1 7.253 1.88"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};
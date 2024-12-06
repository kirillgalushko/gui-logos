import { defineComponent as m, computed as o, openBlock as h, createElementBlock as n, normalizeStyle as l, createElementVNode as t } from "vue";
const d = /* @__PURE__ */ m({
  __name: "LogoTealium",
  props: {
    width: {},
    height: {}
  },
  setup(s) {
    const e = s, i = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, c) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "405",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 405",
      style: l(i.value)
    }, c[0] || (c[0] = [
      t("g", null, [
        t("path", {
          fill: "#0AB7C9",
          d: "M255.961 209.713c0-24.77-21.674-45.413-46.444-44.38-24.77 0-44.38 20.642-44.38 45.412s21.673 45.412 46.444 44.38c25.802 0 45.412-20.642 44.38-45.412m-136.237 37.156c14.45-8.257 35.091 0 47.476 20.642 12.386 19.61 11.353 43.348-3.096 51.605s-35.091 0-48.509-20.642c-11.353-19.61-10.32-43.349 4.129-51.605M76.375 297.44c12.386-5.16 27.867 6.193 36.124 25.803s5.16 39.22-7.225 44.38-27.866-6.192-36.123-25.802-5.16-39.22 7.224-44.38m-40.251 39.22c8.256-3.096 20.642 9.29 27.866 27.867s5.16 36.124-3.096 39.22-20.642-9.289-27.867-27.867c-6.192-18.578-5.16-36.123 3.097-39.22m117.66-244.608c15.48 5.16 23.737 26.835 16.513 49.541-6.193 22.706-24.77 37.156-41.284 31.995s-23.739-26.834-17.546-49.54c8.257-22.707 26.835-37.156 42.316-31.996M95.984 40.448c12.386 3.097 18.578 21.674 13.418 42.316s-19.61 34.06-33.028 29.931C63.99 109.6 57.798 89.99 63.99 70.38c5.16-20.642 19.61-34.06 31.995-29.93M52.637.196c9.29 2.065 12.385 18.578 8.257 38.188s-14.45 33.027-23.738 30.963c-8.257-1.032-12.386-18.578-8.257-37.155 4.128-19.61 14.45-34.06 23.738-31.996"
        }),
        t("path", {
          fill: "#24D6E0",
          d: "M113.531 203.499c1.032 19.61-10.32 36.124-24.77 36.124S62.958 224.14 62.958 204.53s11.353-36.123 24.77-36.123c14.45 0 25.803 15.481 25.803 35.091m-82.568 58.83c-3.096-17.546 3.096-34.06 13.417-36.124 11.353-2.064 21.674 11.353 25.803 28.9 3.096 18.577-3.096 34.058-13.417 36.123-11.354 3.096-22.707-10.321-25.803-28.9m3.096 36.123c4.129 16.514 2.065 30.963-6.192 33.028-7.225 2.064-17.546-9.29-21.674-24.77-5.16-15.482-2.065-30.964 5.16-33.028 8.257-2.064 17.546 8.257 22.706 24.77m33.028-153.78c1.032 17.546-7.225 31.995-17.546 31.995s-19.61-14.449-19.61-31.995c-1.032-17.545 7.225-31.995 17.546-31.995s19.61 14.45 19.61 31.995M29.93 97.193c1.032 16.513-6.193 28.898-14.45 28.898C7.226 127.124 0 113.706 0 98.225s6.193-28.9 14.45-28.9c8.256-1.031 15.48 12.386 15.48 27.868"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
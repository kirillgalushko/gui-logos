import { defineComponent as m, computed as o, openBlock as h, createElementBlock as n, normalizeStyle as p, createElementVNode as e } from "vue";
const r = /* @__PURE__ */ m({
  __name: "LogoElo",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const t = c, i = o(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, l) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "197",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 197",
      style: p(i.value)
    }, l[0] || (l[0] = [
      e("g", null, [
        e("g", null, [
          e("path", {
            fill: "#FC0",
            d: "M79.817 43.344A57.6 57.6 0 0 1 98.12 40.39c27.918 0 51.227 19.83 56.566 46.188l39.576-8.073C185.179 33.711 145.594 0 98.12 0a98 98 0 0 0-31.106 5.04z"
          }),
          e("path", {
            fill: "#00A0DE",
            d: "m33.111 171.604 26.763-30.258c-11.946-10.584-19.484-26.03-19.484-43.239 0-17.196 7.527-32.635 19.466-43.206L33.091 24.64C12.802 42.614 0 68.869 0 98.107c0 29.256 12.807 55.519 33.111 73.497"
          }),
          e("path", {
            fill: "#EC3413",
            d: "M154.676 109.69c-5.362 26.345-28.646 46.137-56.556 46.137-6.405 0-12.572-1.033-18.32-2.965l-12.821 38.32c9.779 3.264 20.25 5.032 31.141 5.032 47.428 0 87.009-33.655 96.126-78.408z"
          })
        ]),
        e("path", {
          fill: "#000",
          d: "M228.87 142.622c-1.297-2.1-3.06-5.46-4.12-7.932-6.267-14.55-6.567-29.607-1.274-44.061 5.819-15.852 16.935-27.988 31.298-34.167 18.057-7.771 38.028-6.239 55.334 4.03 10.994 6.307 18.788 16.045 24.706 29.813l.549 1.339 1.024 2.66q.247.645.489 1.246zm36.065-62.803c-12.823 5.511-19.433 17.54-18.075 31.644l54.32-23.378c-9.341-10.979-21.499-14.617-36.245-8.266m64.014 64.904-20.996-14.038-.03.031-1.125-.758c-3.24 5.26-8.299 9.52-14.68 12.287-12.142 5.28-23.394 3.923-31.474-3.164l-.743 1.13c-.008-.013-.01-.023-.024-.023l-13.78 20.617a59 59 0 0 0 10.952 6c15.223 6.323 30.798 6.03 46.142-.643 11.099-4.81 19.807-12.144 25.758-21.44m45.678-118.624v114.62l17.82 7.222-10.126 23.627-19.67-8.191c-4.416-1.911-7.42-4.838-9.696-8.14-2.175-3.366-3.802-7.986-3.802-14.206V26.099zm46.165 85.42c.01-9.76 4.32-18.513 11.14-24.462L413.649 66.67c-12.4 10.96-20.21 26.976-20.224 44.82-.02 17.85 7.778 33.882 20.165 44.871l18.262-20.406c-6.787-5.972-11.068-14.699-11.06-24.437m32.484 32.533c-3.6-.01-7.067-.605-10.3-1.681l-8.731 25.96a59.9 59.9 0 0 0 19.002 3.106c28.949.028 53.121-20.512 58.722-47.817l-26.837-5.48c-3.052 14.8-16.157 25.922-31.856 25.912m.08-92.389a59.8 59.8 0 0 0-18.985 3.056l8.655 25.984a32.8 32.8 0 0 1 10.304-1.662c15.736.015 28.85 11.203 31.83 26.045L512 99.642c-5.524-27.345-29.673-47.961-58.645-47.979"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};

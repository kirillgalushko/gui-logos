import { defineComponent as m, computed as o, openBlock as n, createElementBlock as l, normalizeStyle as s, createElementVNode as h } from "vue";
const v = /* @__PURE__ */ m({
  __name: "LogoZulip",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, c = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (p, t) => (n(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "133",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 133",
      style: s(c.value)
    }, t[0] || (t[0] = [
      h("g", null, [
        h("path", {
          fill: "#000",
          d: "M118.772 19.794c0 6.668-2.995 12.593-7.56 16.188l-44.307 39.57c-.823.705-1.893-.432-1.299-1.382L81.86 41.63c.455-.91-.136-2.03-1.07-2.03H17.75C7.988 39.6 0 30.688 0 19.8 0 8.908 7.988 0 17.751 0h83.27c9.763-.006 17.75 8.905 17.75 19.794M17.752 132.379h83.268c9.764 0 17.752-8.91 17.752-19.8s-7.988-19.8-17.752-19.8H37.983c-.935 0-1.525-1.12-1.07-2.03l16.253-32.54c.593-.95-.477-2.087-1.3-1.381L7.56 96.392C2.995 99.983 0 105.91 0 112.579c0 10.89 7.988 19.8 17.751 19.8m153.56-36.487 36.671-52.784v-.458h-33.245V28.255h55.867V38.31l-35.873 52.099v.458h36.446v14.395H171.31zm99.624-67.637v44.331c0 13.252 5.025 19.994 13.94 19.994 9.14 0 14.165-6.398 14.165-19.994v-44.33h17.366V71.44c0 23.764-11.997 35.073-32.105 35.073-19.423 0-30.847-10.739-30.847-35.302V28.255zm71.978 0h17.48v62.38h30.618v14.623h-48.098zm87.286 0v77.003h-17.48V28.255zm26.504 1.029c5.37-.914 12.91-1.6 23.535-1.6 10.739 0 18.395 2.058 23.535 6.17C508.688 37.739 512 44.137 512 51.676c0 7.54-2.513 13.939-7.083 18.28-5.94 5.598-14.739 8.111-25.02 8.111-2.283 0-4.34-.114-5.939-.344v27.535h-17.251V29.284zm17.251 34.961c1.484.344 3.313.456 5.828.456 9.255 0 14.965-4.685 14.965-12.567 0-7.083-4.914-11.312-13.595-11.312-3.542 0-5.94.344-7.198.685z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  v as _
};

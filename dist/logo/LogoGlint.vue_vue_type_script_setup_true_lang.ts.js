import { defineComponent as l, computed as p, openBlock as o, createElementBlock as m, normalizeStyle as a, createStaticVNode as c } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoGlint",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (n, e) => (o(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "133",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 133",
      style: a(i.value)
    }, e[0] || (e[0] = [
      c('<g><path fill="#6BBFA4" d="M169.19 104.134c0 21.254 17.981 25.787 17.981 25.787h41.101v-25.787z"></path><path fill="#73BE88" d="M247.31 3.24h25.355v127.228H247.31z"></path><path fill="#A3CC69" d="M385.422 130.468 320.9 45.498l-.09 84.97h-25.355V3.24h23.719l64.614 84.97V3.24h25.446v127.228z"></path><path fill="#ECE23C" d="M486.734 28.935c0-21.254-17.98-25.787-17.98-25.787h-41.1v25.787z"></path><path fill="#72736D" d="m169.19 104.134-.021.68V3.143h-25.013v104.122c0 12.515 8.993 22.658 25.013 22.658l15.813-.003h2.19s-17.981-4.533-17.981-25.787m317.544-75.199.023-.68v101.67h25.011V25.802c0-12.515-8.992-22.66-25.01-22.66l-15.815.005h-2.19s17.981 4.533 17.981 25.787m-371.32-8.52L97.149 38.317c-7.27-8.36-17.63-13.358-30.717-13.358-23.264 0-40.167 17.085-40.167 41.894 0 25.9 17.63 42.259 39.713 42.259 20.811 0 32.807-9.906 36.17-28.081H69.794V59.856h58.524c.273 2.453.364 4.726.364 7.18 0 38.532-26.081 65.705-62.16 65.705C31.261 132.74 0 107.93 0 66.853 0 28.413 28.081.876 67.159.876c20.356 0 36.896 7.18 48.256 19.54"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};

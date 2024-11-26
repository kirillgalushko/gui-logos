import { defineComponent as l, computed as t, openBlock as o, createElementBlock as s, normalizeStyle as a, createStaticVNode as f } from "vue";
const h = /* @__PURE__ */ l({
  __name: "LogoBrowserstack",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const c = i, r = t(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (p, e) => (o(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(r.value)
    }, e[0] || (e[0] = [
      f('<defs><radialGradient id="browserstack-gui-asset-a" cx="50.141%" cy="50.003%" r="50.119%" fx="50.141%" fy="50.003%"><stop offset="0%" stop-color="#797979"></stop><stop offset="100%" stop-color="#4C4C4C"></stop></radialGradient></defs><g><circle cx="127.949" cy="128.603" r="127.397" fill="#F5BB60"></circle><circle cx="114.961" cy="115.615" r="114.685" fill="#E86F32"></circle><circle cx="130.16" cy="100.416" r="99.485" fill="#E53D42"></circle><circle cx="138.174" cy="108.43" r="91.471" fill="#BFD141"></circle><circle cx="131.542" cy="115.062" r="84.839" fill="#6DB64C"></circle><circle cx="118.001" cy="101.798" r="71.298" fill="#AFDBE7"></circle><circle cx="129.607" cy="89.915" r="59.691" fill="#57BADF"></circle><circle cx="137.069" cy="97.376" r="52.506" fill="#02B2D6"></circle><circle cx="129.331" cy="104.837" r="44.768" fill="url(#browserstack-gui-asset-a)"></circle><circle cx="129.331" cy="104.837" r="44.768" fill="#231F20"></circle><path fill="#FFF" d="M141.088 98.971c4.439 1.992 10.56-2.016 13.672-8.951s2.036-14.173-2.402-16.164c-4.44-1.992-10.56 2.016-13.672 8.951s-2.037 14.173 2.402 16.164"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};

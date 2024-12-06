import { defineComponent as i, computed as h, openBlock as p, createElementBlock as r, normalizeStyle as a, createStaticVNode as o } from "vue";
const s = /* @__PURE__ */ i({
  __name: "LogoWebplatform",
  props: {
    width: {},
    height: {}
  },
  setup(c) {
    const t = c, l = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (m, e) => (p(), r("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "254",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 253.9",
      style: a(l.value)
    }, e[0] || (e[0] = [
      o('<path fill="#2DB2C4" d="M256 219.9v-186C256 15.2 240.8 0 222.1 0s-33.9 15.2-33.9 33.9V138l57.9 57.9c6.6 6.6 9.9 15.3 9.9 24"></path><path fill="#E45026" d="m104.7 101.2-37.6 37.5v81.9c0 9.4-3.8 17.8-9.9 24l71.5-71.4-24-24c-13.2-13.3-13.2-34.7 0-48"></path><path fill="#694EA0" d="m188.8 138.7-37.4-37.4c13.2 13.2 13.2 34.7 0 48l-24 24 71.4 71.4c-6.1-6.1-9.7-14.8-9.9-24v-82z"></path><path fill="#801434" d="m104 149.8 24 24 24-24c13.2-13.2 13.2-34.7 0-48-13.2-13.2-34.7-13.2-48 0-13.2 13.3-13.2 34.7 0 48"></path><path fill="#D02F28" d="m67.8 138-46.2 46.2c-6.8 6.8-15.7 13.5-19.1 22.9-4.4 10.9-2.8 23.6 4.3 33.1 7 9.4 19.4 15.2 31.2 13.4 11.4-1.8 21.4-8.3 26.5-18.9 2.6-5.4 3.6-10.8 3.4-17v-33.2c-.1-15.6-.1-31-.1-46.5"></path><path fill="#263D81" d="M188.2 138v65.4c0 9.6-1.2 20.4 2.5 29.4 4.3 10.4 14.1 18.7 25.3 20.5 11.9 1.8 24-2.1 31.8-11.4 7.6-9 9.9-21.6 6.4-32.8-1.8-5.8-5.3-10.5-9.8-14.8l-23.5-23.5C210 159.9 199.1 149 188.2 138"></path><path fill="#F99D22" d="M67.8 138V33.9C67.8 15.2 52.6 0 33.9 0S0 15.2 0 33.9v186c0-8.7 3.3-17.4 9.9-24z"></path><path fill="#FFF" d="M138.1 115.8c-5.5-5.5-14.6-5.5-20.1 0s-5.5 14.6 0 20.1 14.6 5.5 20.1 0 5.4-14.7 0-20.1"></path><circle cx="33.9" cy="33.9" r="14.2" fill="#FFF"></circle><circle cx="222.1" cy="33.9" r="14.2" fill="#FFF"></circle><circle cx="33.9" cy="219.9" r="14.2" fill="#FFF"></circle><circle cx="222.1" cy="219.9" r="14.2" fill="#FFF"></circle>', 12)
    ]), 4));
  }
});
export {
  s as _
};
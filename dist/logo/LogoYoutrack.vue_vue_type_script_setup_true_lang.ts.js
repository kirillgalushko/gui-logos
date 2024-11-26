import { defineComponent as i, computed as p, openBlock as h, createElementBlock as a, normalizeStyle as r, createStaticVNode as l } from "vue";
const n = /* @__PURE__ */ i({
  __name: "LogoYoutrack",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, o) => (h(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(s.value)
    }, o[0] || (o[0] = [
      l('<defs><linearGradient id="youtrack-gui-asset-a" x1="65.797%" x2="2.105%" y1="66.687%" y2="5.574%"><stop offset="0%" stop-color="#905CFB"></stop><stop offset="7%" stop-color="#A554E6"></stop><stop offset="25%" stop-color="#D641B5"></stop><stop offset="39%" stop-color="#F43597"></stop><stop offset="47%" stop-color="#FF318C"></stop></linearGradient></defs><g><path fill="#0CB0F2" d="M83.61 98.195c42.346-38.629 89.39-81.692 90.752-83.054a63.5 63.5 0 0 1 6.8-6c17.868-13.169 42.523-12 59.066 2.8 16.542 14.802 20.435 39.176 9.326 58.393a44 44 0 0 1-7.4 9.6c-9.398 9.398-45.394 47.594-45.394 47.594s47.194 45.394 47.994 45.994c11.696 9.369 14.684 25.931 7 38.796a30.9 30.9 0 0 1-20.998 14.398c-2.598.459-36.915-32.57-74.812-59.294-23.958 26.878-71.622 80.332-71.771 80.332-20.238 14.158-44.995 6.36-56.194.2a56.433 56.433 0 0 1-9.399-90.59c6.6-5.999 34.596-31.396 64.993-59.193z"></path><path fill="url(#youtrack-gui-asset-a)" d="M167.802 111.988a36.35 36.35 0 0 0-13.869-23.61L80.22 13.785a46.977 46.977 0 1 0-60.926 71.148l88.984 62.129a37.157 37.157 0 0 0 59.524-35.073"></path><rect width="159.382" height="159.382" x="47.855" y="48.763" fill="#000"></rect><path fill="#FFF" d="M63.992 175.87h58.374v10.56H63.992zm21.317-63.952L58.414 69.682h17.93L93.08 97.773l16.935-28.09h17.492l-26.896 42.036v27.892H85.27v-27.693zm65.746-28.09h-21.318V69.681h57.776v14.145h-21.118v55.585h-15.34z"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};

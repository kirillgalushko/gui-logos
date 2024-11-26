import { defineComponent as a, computed as i, openBlock as e, createElementBlock as d, normalizeStyle as m, createStaticVNode as o } from "vue";
const z = /* @__PURE__ */ a({
  __name: "LogoFalcor",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const t = h, p = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (f, l) => (e(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "299",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 299",
      style: m(p.value)
    }, l[0] || (l[0] = [
      o('<g><g><path fill="#4CAD31" d="M188.222 191.804v.01l-60.144 35.725-.078-.047v-.004l-60.218-35.674L7.56 227.488 128 298.842l120.444-71.354z"></path><path fill="#64B32C" d="m128 227.488 60.218 35.67L128 298.842z"></path><path fill="#8BBE2D" d="M67.782 191.814v71.344L7.56 227.488z"></path><path fill="#76B828" d="M128 227.488v71.354l-60.218-35.684z"></path><path fill="#5DB12E" d="M188.222 263.158v-71.344L128 227.488z"></path><path fill="#82BB24" d="m67.782 263.158 60.296-35.619-60.296-35.725z"></path></g><g><path fill="#751F82" d="m256 71.354-.007-.004v-.003l-.003.002L135.553 0v71.347l60.222 35.681v71.358l60.218 35.67V71.359z"></path><path fill="#934C98" d="m195.775 107.028 60.218 35.674V71.347z"></path><path fill="#8A398D" d="m195.775 107.028-.004-71.354L256 71.354z"></path><path fill="#B987BB" d="m195.775 178.386 60.218 35.67v-71.354z"></path><path fill="#A466A7" d="m255.993 142.702-60.218 35.684v-71.358z"></path><path fill="#7B1F82" d="m195.771 35.674-60.218 35.673 60.222 35.681z"></path></g><g><path fill="#0062AE" d="m.008 71.35-.004-.003v.005L0 71.354l.004.002v142.7l60.218-35.67v-71.358l60.225-35.681V0z"></path><path fill="#007EC6" d="M60.222 107.028.004 142.712V71.347z"></path><path fill="#26B2E7" d="M120.447 71.347 60.225 35.674 120.447 0z"></path><path fill="#008BD0" d="M60.222 107.028 0 71.354l60.225-35.68z"></path><path fill="#0071BB" d="m.004 142.712 60.218 35.674v-71.358z"></path><path fill="#009DDC" d="m60.225 35.674-.003 71.354 60.225-35.681z"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  z as _
};

import { defineComponent as h, computed as i, openBlock as p, createElementBlock as o, normalizeStyle as c, createStaticVNode as m } from "vue";
const s = /* @__PURE__ */ h({
  __name: "LogoGalliumos",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, a = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, l) => (p(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(a.value)
    }, l[0] || (l[0] = [
      m('<g><path fill="#68A5C6" d="M169.533 127.998a40 40 0 0 1-.051 1.99c-.003.057-.011.116-.013.174l.061.291L256 255.884v.114-16.312l-90.75-133c-.341-.602-1.852-.739-2.227-1.318l-.111-.179-.004.003a34.5 34.5 0 0 0-4.855-5.836c7.105 7.452 11.48 17.532 11.48 28.642"></path><path fill="#98B7D4" d="M128.001 169.533c-.67 0-1.33-.018-1.992-.05l-.171-.014-4.837 1.883L3.833 251.187 0 256.001h14.127l4.707-1.981 126.5-85.5 3.526-4.419a34 34 0 0 0 1.772-1.079l.18-.109-.002-.006a34.4 34.4 0 0 0 5.835-4.853c-7.452 7.108-17.533 11.479-28.644 11.479"></path><path fill="#347294" d="m0 14.127 1.666 5.058 86.335 127.667 3.899 2.008a36 36 0 0 0 1.079 1.776l.109.179.006-.003a34.5 34.5 0 0 0 4.853 5.836c-7.108-7.451-11.479-17.533-11.479-28.644q.001-1.002.05-1.991l.014-.171-1.365-4.822-81-118.667L0 0z"></path><path fill="#5089AF" d="m241.874.001-5.04 1.852L110 87.353l-2.86 4.55q-.902.511-1.772 1.076l-.179.11.002.004a34.4 34.4 0 0 0-5.835 4.855c7.451-7.108 17.533-11.48 28.644-11.48.669 0 1.33.018 1.991.051.056.003.115.01.171.013L134 85.519 252.167 4.686 256 .001z"></path><path fill="#367BA0" d="m0 256.001 125.836-86.526c-10.097-.521-19.236-4.644-26.165-11.112a41 41 0 0 1-1.726-1.719 34.3 34.3 0 0 1-4.854-5.834l-.005.002-.11-.18a35 35 0 0 1-1.078-1.772L0 14.127z"></path><path fill="#5495BF" d="m0 0 86.529 125.836c.52-10.097 4.644-19.235 11.109-26.164a42 42 0 0 1 1.718-1.727 34.4 34.4 0 0 1 5.835-4.853l-.002-.006.179-.11q.87-.564 1.772-1.078L241.874 0z"></path><path fill="#71B6DB" d="M130.165 86.529c10.097.52 19.235 4.644 26.164 11.111a43 43 0 0 1 1.727 1.719 34.3 34.3 0 0 1 4.853 5.835l.006-.003.11.18q.565.868 1.078 1.772l91.898 134.734V0z"></path><path fill="#A5C8E8" d="M158.363 156.33a42 42 0 0 1-1.718 1.726 34.3 34.3 0 0 1-5.836 4.854l.003.005-.18.11q-.867.565-1.772 1.078L14.126 256.001H256l-86.526-125.836c-.519 10.097-4.644 19.236-11.111 26.165"></path></g>', 1)
    ]), 4));
  }
});
export {
  s as _
};

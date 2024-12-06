import { defineComponent as o, computed as c, openBlock as l, createElementBlock as h, normalizeStyle as r, createStaticVNode as a } from "vue";
const m = /* @__PURE__ */ o({
  __name: "LogoAwsEventbridge",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, s = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, t) => (l(), h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(s.value)
    }, t[0] || (t[0] = [
      a('<defs><linearGradient id="aws-eventbridge-gui-asset-a" x1="0%" x2="100%" y1="100%" y2="0%"><stop offset="0%" stop-color="#B0084D"></stop><stop offset="100%" stop-color="#FF4F8B"></stop></linearGradient></defs><g><rect width="256" height="256" x="0" y="0" fill="url(#aws-eventbridge-gui-asset-a)"></rect><path fill="#FFF" d="M171.702 211.2c-6.858 0-12.44-5.61-12.44-12.509s5.582-12.509 12.44-12.509 12.438 5.61 12.438 12.51c0 6.898-5.581 12.508-12.438 12.508m-27.278-54.4h-33.071L94.815 128l16.538-28.8h33.071L160.96 128zM88.387 69.818c-6.857 0-12.438-5.61-12.438-12.51 0-6.898 5.581-12.508 12.438-12.508 6.861 0 12.443 5.61 12.443 12.509s-5.582 12.509-12.443 12.509m83.315 109.964c-2.362 0-4.614.458-6.699 1.261l-13.514-22.931-.713.426L167.39 129.6a3.23 3.23 0 0 0 0-3.2l-18.374-32a3.18 3.18 0 0 0-2.755-1.6h-33.435l.13-.077-12.39-21.03c4.047-3.469 6.628-8.627 6.628-14.384 0-10.426-8.436-18.909-18.807-18.909-10.367 0-18.803 8.483-18.803 18.909s8.436 18.909 18.803 18.909c2.365 0 4.618-.458 6.702-1.261l11.567 19.625L88.384 126.4a3.23 3.23 0 0 0 0 3.2l18.377 32c.57.992 1.62 1.6 2.756 1.6h36.744c.264 0 .521-.042.77-.102l12.496 21.21c-4.051 3.468-6.629 8.626-6.629 14.383 0 10.426 8.433 18.909 18.804 18.909s18.803-8.483 18.803-18.909-8.433-18.909-18.803-18.909m18.968-77.05c-6.857 0-12.436-5.609-12.436-12.508 0-6.9 5.579-12.509 12.436-12.509s12.44 5.61 12.44 12.509c0 6.9-5.582 12.509-12.44 12.509m23.303 23.668-12.08-21.04c4.592-3.453 7.58-8.944 7.58-15.136 0-10.426-8.432-18.909-18.803-18.909-2.638 0-5.152.554-7.433 1.549l-9.849-17.155a3.18 3.18 0 0 0-2.756-1.6h-39.448v6.4h37.612l9.11 15.872c-3.703 3.456-6.036 8.374-6.036 13.843 0 10.426 8.433 18.909 18.8 18.909 1.932 0 3.8-.298 5.556-.845L207.545 128l-15.892 27.674 5.512 3.2 16.808-29.274a3.21 3.21 0 0 0 0-3.2m-146.04 50.39c-6.86 0-12.442-5.612-12.442-12.508 0-6.9 5.581-12.51 12.442-12.51 6.857 0 12.439 5.61 12.439 12.51 0 6.896-5.582 12.508-12.44 12.508m10.393 3.236c5.062-3.392 8.41-9.181 8.41-15.744 0-10.426-8.436-18.91-18.803-18.91-3.004 0-5.833.73-8.353 1.994L48.458 128l18.428-32.093-5.515-3.2L42.027 126.4a3.21 3.21 0 0 0 0 3.2l12.388 21.568c-3.268 3.405-5.289 8.022-5.289 13.114 0 10.425 8.436 18.908 18.807 18.908 1.562 0 3.074-.214 4.528-.579l10.15 17.68c.57.989 1.62 1.6 2.757 1.6h39.451v-6.4H87.204z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};
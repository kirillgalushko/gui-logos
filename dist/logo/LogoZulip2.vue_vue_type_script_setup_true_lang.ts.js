import { defineComponent as l, computed as n, openBlock as p, createElementBlock as c, normalizeStyle as r, createElementVNode as e } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoZulip2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const t = i, s = n(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, o) => (p(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: r(s.value)
    }, o[0] || (o[0] = [
      e("defs", null, [
        e("linearGradient", {
          id: "zulip-2-gui-asset-a",
          x1: "50%",
          x2: "50%",
          y1: "0%",
          y2: "100%"
        }, [
          e("stop", {
            offset: "0%",
            "stop-color": "#24ADFF"
          }),
          e("stop", {
            offset: "100%",
            "stop-color": "#7B71FF"
          })
        ])
      ], -1),
      e("g", null, [
        e("path", {
          fill: "url(#zulip-2-gui-asset-a)",
          d: "M128 0c70.692 0 128 57.308 128 128s-57.308 128-128 128S0 198.692 0 128 57.308 0 128 0m-6.32 118.222-45.892 40.979c-4.728 3.72-7.83 9.86-7.83 16.766 0 11.279 8.274 20.508 18.386 20.508h86.247c10.112 0 18.386-9.23 18.386-20.508 0-11.28-8.274-20.507-18.386-20.507H107.3c-.968 0-1.58-1.16-1.108-2.104l16.833-33.703c.615-.983-.493-2.161-1.345-1.43m50.91-58.86H86.345c-10.112 0-18.386 9.227-18.386 20.508 0 11.279 8.274 20.508 18.386 20.508h65.292c.968 0 1.58 1.16 1.108 2.103l-16.834 33.704c-.615.983.494 2.161 1.346 1.43l45.892-40.984c4.727-3.723 7.829-9.86 7.829-16.767 0-11.278-8.274-20.507-18.386-20.501"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};

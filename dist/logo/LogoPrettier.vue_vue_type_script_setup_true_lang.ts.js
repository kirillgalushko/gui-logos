import { defineComponent as h, computed as c, openBlock as l, createElementBlock as x, normalizeStyle as y, createStaticVNode as D } from "vue";
const w = /* @__PURE__ */ h({
  __name: "LogoPrettier",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, r = c(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, i) => (l(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: y(r.value)
    }, i[0] || (i[0] = [
      D('<g><rect width="24.381" height="12.19" x="182.857" y="48.762" fill="#56B3B4" rx="5"></rect><rect width="73.143" height="12.19" x="0" y="243.81" fill="#EA5E5E" rx="5"></rect><rect width="48.762" height="12.19" x="146.286" y="146.286" fill="#BF85BF" rx="5"></rect><rect width="60.952" height="12.19" x="73.143" y="146.286" fill="#EA5E5E" rx="5"></rect><rect width="60.952" height="12.19" x="0" y="146.286" fill="#56B3B4" rx="5"></rect><rect width="73.143" height="12.19" x="0" y="195.048" fill="#BF85BF" rx="5"></rect><rect width="73.143" height="12.19" x="0" y="97.524" fill="#BF85BF" rx="5"></rect><rect width="134.095" height="12.19" x="60.952" y="24.381" fill="#F7BA3E" rx="5"></rect><rect width="48.762" height="12.19" x="0" y="24.381" fill="#EA5E5E" rx="5"></rect><rect width="24.381" height="12.19" x="48.762" y="219.429" fill="#F7BA3E" rx="5"></rect><rect width="24.381" height="12.19" x="48.762" y="73.143" fill="#56B3B4" rx="5"></rect><rect width="36.571" height="12.19" x="0" y="219.429" fill="#56B3B4" rx="5"></rect><rect width="36.571" height="12.19" x="0" y="73.143" fill="#F7BA3E" rx="5"></rect><rect width="24.381" height="12.19" x="158.476" y="219.429" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="60.952" height="12.19" x="85.333" y="219.429" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="60.952" height="12.19" x="195.048" y="219.429" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="109.714" height="12.19" x="97.524" y="121.905" fill="#56B3B4" rx="5"></rect><rect width="48.762" height="12.19" x="36.571" y="121.905" fill="#F7BA3E" rx="5"></rect><rect width="24.381" height="12.19" x="0" y="121.905" fill="#EA5E5E" rx="5"></rect><rect width="60.952" height="12.19" x="109.714" y="48.762" fill="#BF85BF" rx="5"></rect><rect width="97.524" height="12.19" x="0" y="48.762" fill="#56B3B4" rx="5"></rect><rect width="121.905" height="12.19" x="36.571" y="170.667" fill="#F7BA3E" rx="5"></rect><rect width="24.381" height="12.19" x="0" y="170.667" fill="#BF85BF" rx="5"></rect><rect width="73.143" height="12.19" x="146.286" y="73.143" fill="#EA5E5E" rx="5"></rect><rect width="73.143" height="12.19" x="146.286" y="97.524" fill="#F7BA3E" rx="5"></rect><rect width="158.476" height="12.19" x="0" y="0" fill="#56B3B4" rx="5"></rect><rect width="85.333" height="12.19" x="170.667" y="0" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="36.571" height="12.19" x="170.667" y="170.667" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="36.571" height="12.19" x="219.429" y="170.667" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="48.762" height="12.19" x="207.238" y="146.286" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="48.762" height="12.19" x="207.238" y="24.381" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="36.571" height="12.19" x="219.429" y="121.905" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="36.571" height="12.19" x="219.429" y="48.762" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="24.381" height="12.19" x="231.619" y="73.143" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="24.381" height="12.19" x="231.619" y="97.524" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="121.905" height="12.19" x="134.095" y="195.048" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="36.571" height="12.19" x="85.333" y="195.048" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="73.143" height="12.19" x="182.857" y="243.81" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="85.333" height="12.19" x="85.333" y="243.81" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="48.762" height="12.19" x="85.333" y="73.143" fill="#D0D4D8" opacity=".5" rx="5"></rect><rect width="48.762" height="12.19" x="85.333" y="97.524" fill="#D0D4D8" opacity=".5" rx="5"></rect></g>', 1)
    ]), 4));
  }
});
export {
  w as _
};

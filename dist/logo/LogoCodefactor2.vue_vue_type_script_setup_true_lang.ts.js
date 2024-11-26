import { defineComponent as i, computed as r, openBlock as c, createElementBlock as a, normalizeStyle as p, createStaticVNode as d } from "vue";
const n = /* @__PURE__ */ i({
  __name: "LogoCodefactor2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = r(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (h, e) => (c(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "259",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 259",
      style: p(s.value)
    }, e[0] || (e[0] = [
      d('<defs><linearGradient id="codefactor-2-gui-asset-a" x1="-.002%" x2="100.002%" y1="49.998%" y2="49.998%"><stop offset="0%" stop-color="#0AA1A5"></stop><stop offset="100%" stop-color="#50D690"></stop></linearGradient><linearGradient id="codefactor-2-gui-asset-b" x1="-.002%" x2="100.002%" y1="49.998%" y2="49.998%"><stop offset="0%" stop-color="#0AA1A5"></stop><stop offset="100%" stop-color="#50D690"></stop></linearGradient></defs><g><path fill="#F44A6A" d="M56.586 28.573c0 15.786-12.668 28.572-28.287 28.572C12.667 57.145 0 44.36 0 28.573S12.667 0 28.299 0c15.62 0 28.287 12.786 28.287 28.573m0 100.742c0 15.774-12.668 28.572-28.287 28.572C12.667 157.887 0 145.09 0 129.315c0-15.787 12.667-28.573 28.299-28.573 15.62 0 28.287 12.786 28.287 28.573m0 100.73c0 15.787-12.668 28.573-28.287 28.573C12.667 258.618 0 245.832 0 230.045c0-15.786 12.667-28.572 28.299-28.572 15.62 0 28.287 12.786 28.287 28.572"></path><path fill="url(#codefactor-2-gui-asset-a)" d="M120.576 0C104.956 0 92.29 12.786 92.29 28.573c0 15.786 12.667 28.572 28.286 28.572h107.148c15.62 0 28.275-12.786 28.275-28.572C255.999 12.786 243.343 0 227.712 0H120.564z"></path><path fill="url(#codefactor-2-gui-asset-b)" d="M120.576 100.73c-15.62 0-28.286 12.798-28.286 28.573 0 15.786 12.667 28.584 28.286 28.584h61.17c15.62 0 28.286-12.798 28.286-28.572 0-15.787-12.667-28.573-28.286-28.573h-61.17z"></path></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};

import { defineComponent as l, computed as p, openBlock as h, createElementBlock as n, normalizeStyle as g, createStaticVNode as s } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoGoogleMeet",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = p(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, e) => (h(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "211",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 211",
      style: g(i.value)
    }, e[0] || (e[0] = [
      s('<g><polygon fill="#00832D" points="144.822496 105.321856 169.778926 133.848796 203.341343 155.294133 209.178931 105.50196 203.341343 56.8331137 169.136495 75.6715889"></polygon><path fill="#0066DA" d="M0 150.66v42.43c0 9.688 7.864 17.554 17.554 17.554h42.43l8.786-32.059-8.786-27.925-29.11-8.786z"></path><polygon fill="#E94235" points="59.9838143 9.9475983e-14 0 59.9838143 30.875715 68.7494798 59.9838143 59.9838143 68.6102243 32.4390893"></polygon><polygon fill="#2684FC" points="0.000557021739 150.679394 59.9843714 150.679394 59.9843714 59.9832573 0.000557021739 59.9832573"></polygon><path fill="#00AC47" d="M241.659 25.398 203.34 56.834v98.46l38.477 31.558c5.76 4.512 14.186.4 14.186-6.922V32.18c0-7.403-8.627-11.495-14.345-6.781"></path><path fill="#00AC47" d="M144.822 105.322v45.338H59.984v59.984h125.804c9.69 0 17.553-7.866 17.553-17.554v-37.796z"></path><path fill="#FFBA00" d="M185.788 0H59.984v59.984h84.838v45.338l58.52-48.49V17.555c0-9.69-7.864-17.554-17.554-17.554"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};

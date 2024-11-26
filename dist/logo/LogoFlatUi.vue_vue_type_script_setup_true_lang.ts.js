import { defineComponent as p, computed as i, openBlock as e, createElementBlock as d, normalizeStyle as o, createStaticVNode as f } from "vue";
const F = /* @__PURE__ */ p({
  __name: "LogoFlatUi",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const t = a, l = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (s, h) => (e(), d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "194",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 194",
      style: o(l.value)
    }, h[0] || (h[0] = [
      f('<defs><clipPath id="flat-ui-gui-asset-a"><path d="M68.367 0a13.65 13.65 0 0 0-9.664 4.011L2.087 60.783a7.15 7.15 0 0 0 .004 10.102l120.668 120.836a7.15 7.15 0 0 0 10.112.007L253.903 70.864a7.15 7.15 0 0 0 .03-10.087L197.836 4.052A13.64 13.64 0 0 0 188.132 0z"></path></clipPath></defs><g clip-path="url(#flat-ui-gui-asset-a)"><g><path fill="#57BBFB" d="M65.4-.004h125.718a6.5 6.5 0 0 1 4.62 1.93l63.2 63.906-131.125 130.944L-2.95 65.832 60.8 1.905a6.5 6.5 0 0 1 4.6-1.909"></path><path fill="#48ACEC" d="M194.649 1.045a6.5 6.5 0 0 0-3.531-1.05H65.4a6.5 6.5 0 0 0-4.602 1.91l2.086 2.638 31.919 31.372 66.29-.273z"></path><path fill="#2B8FCF" d="m128.405 196.185-.592.592L-2.95 65.832l1.104-1.106H67.25l61.154 127.777z"></path><path fill="#2D91D1" d="m84.478 109.075 10.873 22.05h65.567l10.776-21.548-44.206-43.935z"></path><path fill="#7ACBFF" d="M193.848 65.642h64.931L193.375.042l-32.826 32.683z"></path><path fill="#55B9F9" d="M160.549 32.726 127.904.456 95.162 33.284l32.327 32.36z"></path><path fill="#3B9FDF" d="M127.488 65.642H62.886l21.592 43.44 43.01-43.435 44.207 43.936 22.153-43.94z"></path><path fill="#52B6F7" d="M62.886 65.642h64.602l-32.326-32.36z"></path><path fill="#8FD3FF" d="m160.549 32.726-33.06 32.917h66.359v-.001z"></path><path fill="#FF2690" d="M160.549 32.726 127.904.456z"></path><path fill="#41A5E5" d="M95.162 33.283 62.636.723l-65.54 64.92h65.79v-.001z"></path><path fill="#3CA0E0" d="m127.903 197.14 33.015-66.015H95.351z"></path><path fill="#4EB2F2" d="m171.695 109.578-10.776 21.548h32.457z"></path><path fill="#1A7EBE" d="M62.643 131.125h32.708l-10.873-22.05z"></path><path fill="#FFF" d="M177.459 65.124c5.336-1.131 15.08-10.956 15.932-15.768.044-.248.445-.245.517-.005 1.464 4.915 11.434 14.847 15.844 15.773.258.054.288.902.03.96-4.556 1.032-14.488 11.062-15.86 15.85-.075.26-.494.263-.557-.001-1.09-4.555-10.807-14.497-15.937-15.85-.257-.067-.23-.904.03-.96"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  F as _
};

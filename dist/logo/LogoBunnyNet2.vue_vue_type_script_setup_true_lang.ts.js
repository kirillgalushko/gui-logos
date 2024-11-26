import { defineComponent as n, computed as i, openBlock as a, createElementBlock as p, normalizeStyle as r, createStaticVNode as l } from "vue";
const u = /* @__PURE__ */ n({
  __name: "LogoBunnyNet2",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, s = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (d, e) => (a(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "288",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 288",
      style: r(s.value)
    }, e[0] || (e[0] = [
      l('<defs><linearGradient id="bunny-net-2-gui-asset-a" x1="-33.94%" x2="153.691%" y1="50.041%" y2="50.041%"><stop offset="0%" stop-color="#FBAA19"></stop><stop offset="100%" stop-color="#EF3E23"></stop></linearGradient><linearGradient id="bunny-net-2-gui-asset-b" x1="32.891%" x2="67.113%" y1="96.667%" y2="3.111%"><stop offset="0%" stop-color="#F78D1E"></stop><stop offset="100%" stop-color="#F37121"></stop></linearGradient><linearGradient id="bunny-net-2-gui-asset-c" x1="14.403%" x2="63.227%" y1="75.177%" y2="12.448%"><stop offset="0%" stop-color="#FEBE2D"></stop><stop offset="100%" stop-color="#F04E23"></stop></linearGradient><linearGradient id="bunny-net-2-gui-asset-d" x1="69.88%" x2="33.101%" y1="3.214%" y2="81.581%"><stop offset="0%" stop-color="#EA4425"></stop><stop offset="100%" stop-color="#FDBB27"></stop></linearGradient><linearGradient id="bunny-net-2-gui-asset-e" x1="-40.127%" x2="144.708%" y1="49.989%" y2="49.989%"><stop offset="0%" stop-color="#F47920"></stop><stop offset="100%" stop-color="#E93825"></stop></linearGradient><linearGradient id="bunny-net-2-gui-asset-f" x1="-143.227%" x2="243.364%" y1="49.917%" y2="49.917%"><stop offset="0%" stop-color="#FDCA0B"></stop><stop offset="100%" stop-color="#F5841F"></stop></linearGradient><linearGradient id="bunny-net-2-gui-asset-g" x1="39.677%" x2="63.887%" y1="-25.013%" y2="131.608%"><stop offset="0%" stop-color="#E73C25"></stop><stop offset="100%" stop-color="#FAA21B"></stop></linearGradient><linearGradient id="bunny-net-2-gui-asset-h" x1="-562.994%" x2="562.905%" y1="49.998%" y2="49.998%"><stop offset="0%" stop-color="#FDBA12"></stop><stop offset="100%" stop-color="#F7921E"></stop></linearGradient><linearGradient id="bunny-net-2-gui-asset-i" x1="1.983%" x2="106.167%" y1="41.501%" y2="60.044%"><stop offset="0%" stop-color="#FEBE2D"></stop><stop offset="100%" stop-color="#F04E23"></stop></linearGradient></defs><g><path fill="url(#bunny-net-2-gui-asset-a)" d="m141.236 46.07 66.381 36.049L146.281 0a45.73 45.73 0 0 0-5.045 46.07"></path><path fill="url(#bunny-net-2-gui-asset-b)" d="M111.24 179.774c8.34 0 15.108 6.748 15.132 15.088.025 8.34-6.703 15.127-15.043 15.177s-15.147-6.659-15.221-14.998a15.13 15.13 0 0 1 15.132-15.267"></path><path fill="url(#bunny-net-2-gui-asset-c)" d="M65.036 12.039 250.93 112.922a9.012 9.012 0 0 1 0 16.208 144.5 144.5 0 0 1-45.532 17.756l-38.672 79.361s-12.24 27.844-45.935 17.15c14.123-14.123 31.206-26.902 31.206-48.625 0-22.547-18.277-40.824-40.824-40.824S70.35 172.225 70.35 194.772c0 28.381 27.978 40.353 43.514 60.059 6.998 9.905 6.07 23.363-2.219 32.215-19.302-19.1-56.63-51.316-71.963-72.434a61.2 61.2 0 0 1-13.115-37.327c1.509-29.539 21.35-54.972 49.634-63.623a81 81 0 0 1 26.095-3.161 84.6 84.6 0 0 1 34.973 10.559c16.478 9.685 24.481 7.129 35.847-2.421 6.726-5.515 14.057-23.473 2.69-27.642a82 82 0 0 0-11.365-2.825c-21.119-4.103-58.042-8.004-71.628-15.738C71.223 60.53 56.696 35.982 65.036 12.04"></path><path fill="url(#bunny-net-2-gui-asset-d)" d="M151.661 194.973c8.609-45.262-37.327-88.44-72.569-81.984l2.354-.538A64 64 0 0 0 76 113.863c-28.285 8.651-48.126 34.085-49.635 63.624a61.2 61.2 0 0 0 13.451 37.327c15.334 21.118 52.661 53.333 71.964 72.434 8.289-8.852 9.216-22.31 2.219-32.215-15.872-19.639-43.85-31.678-43.85-59.992 0-22.547 18.277-40.824 40.823-40.824 22.547 0 40.824 18.277 40.824 40.824z"></path><path fill="url(#bunny-net-2-gui-asset-e)" d="m65.036 12.039 141.236 76.94 4.036 2.22c3.362 2.622 6.725 7.868 2.354 17.553-6.726 14.46-33.628 28.45-64.633 17.486 9.685 2.825 16.276-.403 24.75-7.532 6.726-5.515 14.057-23.472 2.69-27.642a82 82 0 0 0-11.366-2.825c-21.118-4.102-58.041-8.003-71.627-15.738-21.253-11.971-35.78-36.52-27.44-60.462"></path><path fill="url(#bunny-net-2-gui-asset-f)" d="M65.036 12.039C79.63 65.843 168.475 70.282 212.998 92.745z"></path><path fill="url(#bunny-net-2-gui-asset-g)" d="M113.662 255.033c-15.536-19.639-43.515-31.678-43.515-59.992.08-20.536 15.402-37.816 35.78-40.354-32.455.111-58.738 26.394-58.848 58.849a57.4 57.4 0 0 0 1.21 11.837c12.846 14.527 31.409 31.677 47.08 46.204 6.12 5.717 11.769 11.098 16.41 15.67a28.1 28.1 0 0 0 6.725-15.939 24.6 24.6 0 0 0-4.842-16.275"></path><path fill="url(#bunny-net-2-gui-asset-h)" d="M151.46 199.816q.318-2.411.335-4.843c8.475-45.262-37.46-88.44-72.703-81.984a84 84 0 0 1 23.002-2.287c46.204 1.884 59.117 51.249 49.365 89.114"></path><path fill="url(#bunny-net-2-gui-asset-i)" d="M15.2 99.807c8.405.037 15.2 6.861 15.2 15.267v15.2H15.2c-8.395 0-15.2-6.805-15.2-15.2 0-8.406 6.794-15.23 15.2-15.267"></path></g>', 2)
    ]), 4));
  }
});
export {
  u as _
};

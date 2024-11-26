import { defineComponent as l, computed as m, openBlock as n, createElementBlock as a, normalizeStyle as r, createElementVNode as h } from "vue";
const s = /* @__PURE__ */ l({
  __name: "LogoWoopra",
  props: {
    width: {},
    height: {}
  },
  setup(o) {
    const t = o, i = m(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (c, e) => (n(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "121",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 121",
      style: r(i.value)
    }, e[0] || (e[0] = [
      h("g", null, [
        h("path", {
          fill: "#020202",
          d: "M356.602 21.151q14.37 0 24.414 10.86 10.045 10.857 10.048 27.851 0 16.39-10.385 27.416-10.386 11.028-24.616 11.025a30.6 30.6 0 0 1-11.805-2.256q-5.463-2.257-10.856-7.386v31.857h-18.278V23.04h18.278v8.09a34.6 34.6 0 0 1 10.791-7.484 31 31 0 0 1 12.409-2.495M168.534-.003c14.717 0 28.09 5.302 40.884 16.177 10.388 8.831 18.755 19.867 26.847 30.534l.696.917.693.913.347.456.691.908.69.904c10.115 13.219 19.796 24.755 29.848 24.755 9.356-.04 16.914-7.648 16.894-17.005 0-9.138-7.58-16.978-16.894-16.978-6.062 0-11.989 4.203-17.957 10.435-2.79-3.458-5.56-7.126-8.152-10.544-1.636-2.156-3.317-4.373-5.046-6.615 8.857-8.639 18.825-14.752 31.152-14.752 21.157 0 38.37 17.434 38.372 38.45.007 21.213-17.157 38.428-38.37 38.484-20.655 0-34.685-17.134-47.98-34.588l-.838-1.103-.419-.551-.836-1.102c-7.396-9.75-15.044-19.83-23.647-27.143-8.87-7.54-17.44-11.08-26.975-11.08a37.098 37.098 0 1 0 0 74.196c9.535 0 18.106-3.51 26.975-11.05 6.177-5.25 11.86-11.932 17.313-18.886 4.426 5.838 8.939 11.77 13.76 17.185-5.233 6.448-10.822 12.666-17.164 18.058-12.794 10.877-26.17 16.17-40.884 16.17a58.573 58.573 0 1 1 0-117.145M470.48 21.151c4.26-.03 8.479.819 12.394 2.494a33.8 33.8 0 0 1 10.712 7.484V23.04H512v73.376h-18.414V88.66q-5.39 5.128-10.81 7.386a30.3 30.3 0 0 1-11.755 2.258q-14.217 0-24.587-11.027t-10.377-27.416q0-16.998 10.039-27.852t24.384-10.858M18.02 23.04l14.755 41.744L48.652 23.04h11.022L75.26 64.314 90.037 23.04h18.141L81.403 96.416h-11.67L54.087 54.6l-16.12 41.815h-11.53L0 23.04zm413.105-1.889c2.607.055 5.166.7 7.487 1.889l-5.733 15.847q-3.236-1.62-5.327-1.617-4.248 0-7.185 5.258-2.937 5.259-2.931 20.64l.065 3.574v29.673h-18.277l.003-73.375h15.782v9.238a19.7 19.7 0 0 1 6.811-8.296 16.46 16.46 0 0 1 9.305-2.831m-78.368 16.994q-8.697 0-14.432 5.936-5.735 5.937-5.733 15.513 0 9.778 5.733 15.816t14.432 6.035a18.7 18.7 0 0 0 14.197-6.137q5.768-6.137 5.766-15.647 0-9.441-5.665-15.477-5.666-6.037-14.298-6.04m121.475 0q-8.54 0-14.183 6.039t-5.647 15.477q0 9.506 5.747 15.647a18.6 18.6 0 0 0 14.148 6.137q8.674 0 14.384-6.035t5.71-15.816q0-9.579-5.71-15.513-5.712-5.933-14.449-5.936"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};

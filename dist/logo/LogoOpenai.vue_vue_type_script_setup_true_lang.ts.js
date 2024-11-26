import { defineComponent as l, computed as m, openBlock as i, createElementBlock as o, normalizeStyle as v, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ l({
  __name: "LogoOpenai",
  props: {
    width: {},
    height: {}
  },
  setup(a) {
    const e = a, h = m(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, t) => (i(), o("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "126",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 126",
      style: v(h.value)
    }, t[0] || (t[0] = [
      c("g", { fill: "#000" }, [
        c("path", { d: "M365.131 49.074c-7.537 0-12.917 2.575-15.557 7.45l-1.42 2.64v-8.819H335.89v53.61h12.901V72.06c0-7.62 4.142-11.991 11.356-11.991 6.88 0 10.825 4.256 10.825 11.674v32.211h12.907V69.442c0-12.764-7.007-20.368-18.747-20.368m-62.565 0c-15.224 0-24.652 9.5-24.652 24.789v7.527c0 14.703 9.538 23.835 24.893 23.835 10.271 0 17.47-3.763 22-11.504l-7.998-4.602c-3.347 4.465-8.694 7.231-13.997 7.231-7.773 0-12.413-4.798-12.413-12.84v-2.131h36.008v-8.891c0-14.243-9.352-23.414-23.83-23.414zm12.1 23.638h-24.311v-1.287c0-8.825 4.333-13.695 12.2-13.695 7.576 0 12.101 4.798 12.101 12.84zM512 41.52V31.265h-44.625V41.52h15.646v52.157h-15.646v10.255H512V93.677h-15.651V41.52zM173.638 29.786c-19.93 0-32.32 12.419-32.32 32.42v10.813c0 19.995 12.385 32.42 32.32 32.42s32.321-12.425 32.321-32.42V62.205c-.005-20.022-12.408-32.42-32.321-32.42m18.987 43.973c0 13.279-6.919 20.893-18.987 20.893s-18.982-7.614-18.982-20.893V61.46c0-13.279 6.925-20.893 18.988-20.893S192.63 48.18 192.63 61.46zm53.856-24.685c-6.771 0-12.633 2.805-15.69 7.5l-1.386 2.136v-8.365h-12.27V122.4h12.906V96.3l1.38 2.049c2.904 4.306 8.574 6.875 15.17 6.875 11.125 0 22.35-7.27 22.35-23.518v-9.115c0-11.707-6.919-23.518-22.46-23.518m9.554 32.003c0 8.64-5.04 14.008-13.148 14.008-7.56 0-12.835-5.675-12.835-13.794v-8.064c0-8.217 5.319-14.002 12.945-14.002 8.047 0 13.048 5.363 13.048 14.002zM419.54 31.27l-26.037 72.684h13.109l4.985-15.58h29.932l.05.154 4.93 15.426h13.104l-26.082-72.69zm-4.744 46.855 11.745-36.748 11.625 36.748zM116.085 51.561a31.37 31.37 0 0 0-2.695-25.774 31.77 31.77 0 0 0-34.184-15.224A31.4 31.4 0 0 0 55.536.001a31.74 31.74 0 0 0-30.278 21.99A31.4 31.4 0 0 0 4.282 37.213a31.77 31.77 0 0 0 3.906 37.218 31.4 31.4 0 0 0 2.695 25.748 31.77 31.77 0 0 0 34.21 15.256 31.4 31.4 0 0 0 23.644 10.562 31.74 31.74 0 0 0 30.278-21.99 31.4 31.4 0 0 0 20.97-15.223 31.73 31.73 0 0 0-3.9-37.224m-47.348 66.22a23.52 23.52 0 0 1-15.108-5.478c.186-.104.548-.285.756-.422l25.09-14.484a4.07 4.07 0 0 0 2.06-3.567V58.453l10.6 6.119a.37.37 0 0 1 .208.296v29.28c0 13.041-10.564 23.618-23.606 23.633M18.015 96.12a23.56 23.56 0 0 1-2.82-15.821c.185.115.514.312.744.443l25.096 14.49a4.08 4.08 0 0 0 4.12 0L75.77 77.528v12.238a.37.37 0 0 1-.148.328L50.26 104.732c-11.292 6.502-25.716 2.637-32.245-8.64zm-6.573-54.782a23.5 23.5 0 0 1 12.287-10.354v29.823a4.08 4.08 0 0 0 2.06 3.567l30.623 17.683-10.639 6.141a.37.37 0 0 1-.356.033L20.059 73.589c-11.282-6.527-15.148-20.957-8.64-32.25zm87.102 20.27L67.92 43.924l10.59-6.125a.38.38 0 0 1 .355-.033l25.359 14.643a23.61 23.61 0 0 1-3.649 42.598V65.191a4.08 4.08 0 0 0-2.049-3.583zM109.1 45.721a30 30 0 0 0-.745-.444L83.26 30.788a4.08 4.08 0 0 0-4.12 0L48.517 48.466V36.233a.4.4 0 0 1 .154-.328l25.358-14.638a23.61 23.61 0 0 1 35.06 24.46zM42.738 67.546l-10.605-6.119a.4.4 0 0 1-.203-.295V31.85a23.605 23.605 0 0 1 38.714-18.155c-.186.105-.52.285-.756.422l-25.09 14.484a4.08 4.08 0 0 0-2.06 3.567zm5.758-12.418 13.64-7.878 13.635 7.878v15.744l-13.64 7.877-13.64-7.877z" })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};

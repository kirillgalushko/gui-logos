import { defineComponent as m, computed as l, openBlock as o, createElementBlock as s, normalizeStyle as a, createElementVNode as t } from "vue";
const r = /* @__PURE__ */ m({
  __name: "LogoGithubActions",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, h = l(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, c) => (o(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: a(h.value)
    }, c[0] || (c[0] = [
      t("g", null, [
        t("path", {
          fill: "#4A7EBF",
          d: "M53.604 0c29.604 0 53.604 23.992 53.604 53.59 0 29.09-23.189 52.75-52.093 53.553 0 2.461.109 7.111 1.501 9.92 1.933 3.893 13.525 11.144 24.892 11.144h4.084c2.567-18.271 18.257-32.332 37.24-32.332 18.906 0 34.55 13.946 37.211 32.11h21.13c2.661-18.164 18.304-32.11 37.21-32.11 20.775 0 37.617 16.837 37.617 37.607s-16.842 37.606-37.617 37.606c-18.906 0-34.55-13.948-37.21-32.11h-21.129c-2.66 18.162-18.305 32.11-37.212 32.11-18.87 0-34.494-13.893-37.199-32.007l-4.515.135c-7.435-.056-15.29-2.042-21.598-6.328-1.72-1.169-3.415-2.397-5.182-3.56v2.441c-.01.79-.153 12.657-.164 25.833v2.79c.005 8.641.073 17.545.277 24.04.446 14.246 12.034 25.745 24.822 28.436 1.663.35 4.52.394 6.321.238 2.571-18.264 18.26-32.32 37.238-32.32 20.774 0 37.616 16.838 37.616 37.607 0 20.77-16.842 37.607-37.616 37.607-18.769 0-34.323-13.744-37.153-31.714h-3.254c-24.436-1.334-39.628-23.746-39.363-41.923.334-22.877.082-45.764.079-68.646v-7.565C18.546 101.286 0 79.606 0 53.591 0 23.992 23.999 0 53.604 0m69.228 191.78c-14.701 0-26.62 11.915-26.62 26.613s11.919 26.614 26.62 26.614 26.62-11.915 26.62-26.614c0-14.698-11.918-26.614-26.62-26.614m0-84.912c-14.701 0-26.62 11.915-26.62 26.614 0 14.697 11.919 26.613 26.62 26.613s26.62-11.916 26.62-26.613c0-14.699-11.918-26.614-26.62-26.614m95.551 0c-14.702 0-26.62 11.915-26.62 26.614 0 14.697 11.918 26.613 26.62 26.613s26.621-11.916 26.621-26.613c0-14.699-11.918-26.614-26.62-26.614m15.161 15.408a5.496 5.496 0 0 1 .17 7.606l-.16.168-16.31 16.345a5.5 5.5 0 0 1-7.576.198l-.172-.163-7.985-7.86a5.496 5.496 0 0 1-.06-7.773 5.5 5.5 0 0 1 7.606-.22l.168.16 4.092 4.027 12.452-12.477a5.5 5.5 0 0 1 7.775-.01m-95.99-.08a5.497 5.497 0 0 1 .17 7.606l-.16.168-16.31 16.344a5.5 5.5 0 0 1-7.576.198l-.172-.163-7.985-7.86a5.498 5.498 0 0 1 7.546-7.992l.168.16 4.093 4.027 12.451-12.478a5.5 5.5 0 0 1 7.775-.01M53.604 10.993c-23.532 0-42.608 19.07-42.608 42.598 0 23.525 19.076 42.597 42.608 42.597s42.608-19.072 42.608-42.597c0-23.527-19.076-42.598-42.608-42.598M49.171 28.13A744 744 0 0 1 75.7 44.841c7.308 4.82 7.29 13.563-.1 18.394a609 609 0 0 1-27.058 16.712c-7.455 4.34-15.8-.65-16.002-9.344-.13-5.602-.024-11.21-.032-16.817-.006-5.454-.113-10.911.019-16.363.222-9.248 8.736-14.066 16.643-9.293m-5.91 8.872v3.868l-.001 5.674-.001 3.71v5.482c0 4.23.002 8.394.01 12.557.003 1.96 1.023 1.88 2.343 1.063q11.408-7.071 22.827-14.127c1.258-.776 1.294-1.587.06-2.365-8.154-5.139-16.318-10.26-25.238-15.862"
        }),
        t("path", {
          fill: "#85B3DF",
          d: "M133.227 223.88a5.497 5.497 0 1 0 .001-10.996 5.497 5.497 0 0 0 0 10.995m-21.049.001a5.497 5.497 0 1 0 0-10.996 5.497 5.497 0 0 0 0 10.995m106.205 21.128c-14.702 0-26.62-11.915-26.62-26.614 0-14.698 11.918-26.614 26.62-26.614 14.701 0 26.62 11.916 26.62 26.614s-11.919 26.614-26.62 26.614m0-64.22c-18.906 0-34.55 13.947-37.211 32.11h-6.153c-2.685 0-4.864 2.461-4.864 5.496s2.179 5.497 4.864 5.497h6.153c2.66 18.163 18.305 32.11 37.21 32.11C239.159 256 256 239.162 256 218.393c0-20.77-16.842-37.607-37.616-37.607"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
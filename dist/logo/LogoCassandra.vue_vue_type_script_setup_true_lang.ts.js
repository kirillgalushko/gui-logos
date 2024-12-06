import { defineComponent as p, computed as l, openBlock as a, createElementBlock as i, normalizeStyle as e, createStaticVNode as m } from "vue";
const f = /* @__PURE__ */ p({
  __name: "LogoCassandra",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const c = t, h = l(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (d, s) => (a(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "169",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 169",
      style: e(h.value)
    }, s[0] || (s[0] = [
      m('<g><g fill="#373535"><path d="M30.9 142.2c2.2 0 4.2.5 5.3 1.5.2 1.6-1.3 4.2-2.2 4.2-1.1-.4-2.1-.6-3.4-.6-5.2 0-7.8 5.4-7.8 10.7 0 3.3 1.1 5.3 3.8 5.3 2.8 0 5.6-1.9 7.2-3.3.4.3.9 1.2.9 2.2 0 1.1-.3 2.2-1.4 3.3-1.8 1.8-4.9 3.4-9.4 3.4-5.1 0-8.7-2.9-8.7-9.7.2-9 6-17 15.7-17M47.7 163c2.8 0 7.9-4.9 9.3-14.3.1-.6.1-.7.2-1.3-.6-.2-1.5-.4-2.3-.4-2.1 0-4.3.6-6.2 3.3-2 2.8-2.9 6.3-2.9 9.1 0 2.3.7 3.6 1.9 3.6m-9.2-2.6c0-3.4 1.1-9.2 5.4-13.5 3.7-3.8 8.1-4.7 12.2-4.7 2.7 0 6.3.9 8.6 1.3-.6 2.5-1.9 12-2.6 17.5-.3 2.3-.4 5.6-.3 6.8-1.9.8-5.4 1-6.4 1-.5 0-.6-2.3-.5-4.6.1-.7.2-1.8.2-2.3-2.2 3.7-6.6 6.8-11.2 6.8-3.3.1-5.4-2.7-5.4-8.3m40.4-18.2c2.3 0 4.6.9 5.6 1.9-.1 1.6-1.3 4.3-3.3 3.5-.9-.3-1.7-.5-2.9-.5-1.5 0-2.9.7-2.9 2.1 0 1.1.8 1.9 4.6 4.6 2.7 2 3.8 3.8 3.8 6.3 0 4.2-3.9 8.7-10.8 8.7-2.8 0-5.3-1.1-6-2.2-1-1.7-.2-5.1.9-4.5 1.5.7 3.9 1.5 5.9 1.5 1.9 0 3.1-.9 3.1-2 0-1-.9-1.8-4.3-4.3-2.9-2.2-3.8-4.2-3.8-6.4 0-4.8 4.1-8.7 10.1-8.7m19.7 0c2.3 0 4.6.9 5.6 1.9-.1 1.6-1.3 4.3-3.3 3.5-.9-.3-1.7-.5-2.9-.5-1.5 0-2.9.7-2.9 2.1 0 1.1.8 1.9 4.6 4.6 2.7 2 3.8 3.8 3.8 6.3 0 4.2-3.9 8.7-10.8 8.7-2.8 0-5.2-1.1-6-2.2-1-1.7-.2-5.1.9-4.5 1.5.7 3.9 1.5 5.9 1.5 1.9 0 3.1-.9 3.1-2 0-1-.9-1.8-4.3-4.3-2.9-2.2-3.8-4.2-3.8-6.4 0-4.8 4.1-8.7 10.1-8.7m17.9 20.8c2.8 0 7.9-4.9 9.3-14.3.1-.6.1-.7.2-1.3-.6-.2-1.5-.4-2.3-.4-2.1 0-4.3.6-6.2 3.3-2 2.8-2.9 6.3-2.9 9.1.1 2.3.7 3.6 1.9 3.6m-9.2-2.6c0-3.4 1.1-9.2 5.4-13.5 3.7-3.8 8.1-4.7 12.2-4.7 2.7 0 6.3.9 8.6 1.3-.6 2.5-1.9 12-2.6 17.5-.3 2.3-.4 5.6-.3 6.8-1.9.8-5.4 1-6.4 1-.5 0-.6-2.3-.5-4.6.1-.7.2-1.8.2-2.3-2.2 3.7-6.6 6.8-11.2 6.8-3.2.1-5.4-2.7-5.4-8.3m39.1-10.8c2.6-4.2 6-7.4 10.8-7.4 4.1 0 5.4 3.8 4.6 9.1-.4 2.5-1.1 6.1-1.5 9.4-.4 2.8-.7 5.3-.6 7-1.5.7-5.8 1-6.8 1-.4 0-.5-3.1.1-6.4.5-2.7 1.4-7.7 1.9-10.6.3-1.7.2-3.7-1.4-3.7-2.1 0-7.1 3.4-9.6 17.2-.2 1.1-.6 1.8-1.3 2.2-.9.5-2.7 1-6.4 1 .7-3.5 1.8-10.6 2.6-15.9.7-4.8 1-7.9.9-9.1 1-.3 6.1-1.4 6.6-1.4.6 0 .7 1.8.2 6-.1.4-.1 1-.2 1.4h.1zm29 13.3c2.5 0 7.6-4.7 9-13 .1-.5.2-1.3.3-1.8-.7-.7-1.7-1.1-3.3-1.1-5.8 0-8.3 6.9-8.3 11.9.1 2.6 1 4 2.3 4m-3.7 5.9c-3.7 0-5.9-3.3-5.9-8.8 0-9.2 5.8-17.7 15.5-17.7 1.7 0 3.3.5 4.2 1 .5-2.6 1.7-10.7 1.8-13.1 1.6-.3 5-.8 6.6-.8.6 0 .8.6.6 2.1-1.4 8.6-3.8 25-4.3 28.6-.3 3.1-.4 6.1-.3 7.8-1.8.8-5.5 1-6.5 1-.4 0-.6-2.6-.5-5 .1-.7.2-1.8.2-2-3.1 4.6-7 6.9-11.4 6.9m33.4-18.4c3-6.7 6.6-8.2 9-8.2.7 0 1.9.5 2.4 1 .2 1.9-1.3 5.6-2.6 7.1-.7-.3-1.5-.7-2.5-.7-1.9 0-5.8 3-8.2 16-.2 1.1-.5 1.5-1.1 1.8-1 .6-4.8 1-6.6 1.1.9-4.7 2.3-14.2 2.9-19.8.2-1.4.2-4.1.1-5.1 1.1-.5 5.4-1.5 6.3-1.5.5 0 .9 3.1.1 8.2h.2zm20.1 12.6c2.8 0 7.9-4.9 9.3-14.3.1-.6.1-.7.2-1.3-.6-.2-1.5-.4-2.3-.4-2.1 0-4.3.6-6.2 3.3-2 2.8-2.9 6.3-2.9 9.1.1 2.3.7 3.6 1.9 3.6m-9.2-2.6c0-3.4 1.1-9.2 5.4-13.5 3.7-3.8 8.1-4.7 12.2-4.7 2.7 0 6.3.9 8.6 1.3-.6 2.5-1.9 12-2.6 17.5-.3 2.3-.4 5.6-.3 6.8-1.9.8-5.4 1-6.4 1-.5 0-.6-2.3-.5-4.6.1-.7.2-1.8.2-2.3-2.2 3.7-6.6 6.8-11.2 6.8-3.2.1-5.4-2.7-5.4-8.3"></path></g><g><path fill="#BBE6FB" d="M205.5 45.5c1.9 21.9-32.6 42.8-77.1 46.6s-82-10.9-83.9-32.8 32.6-42.8 77.1-46.6c44.4-3.8 82 10.8 83.9 32.8"></path><path fill="#FFF" d="M122.8 15.2c-17-.3-36.8 6.5-51.6 12.8-1.5 4.4-2.4 9.1-2.4 14 0 26 23.5 47.1 52.5 47.1s52.6-21 52.6-47.1c0-8.2-2.4-16-6.5-22.7-11.8-1.8-28.1-3.8-44.6-4.1"></path><path fill="#FFF" d="M121.4 15.2c-9.4-.6-25.6 4.3-39.1 9.2-2.1 4.8-3.2 10.1-3.2 15.7 0 22.8 20.7 41.3 42.5 41.3 21.7 0 40.9-18.5 42.5-41.3.5-7.4-2-14.4-5.6-20.4-13.9-2.4-28.7-3.9-37.1-4.5"></path><path fill="#373535" d="M97.3 37.2c1.2-2.6 2.9-3.8 4.6-5.9-.2-.5-.6-2.2-.6-2.7 0-2.6 2.1-4.6 4.6-4.6.6 0 1.2.1 1.7.3 7.7-5.9 17.8-8.4 28-6.1.9.2 1.8.5 2.7.7-10-1.4-21.4 2.2-29.1 8.4.2.6.9 2.1.9 2.8 0 2.6-1.7 3.2-4.2 3.2-.6 0-1.1-.1-1.7-.3-1.7 2.3-3.9 6.8-4.9 9.6 4.3 3.8 8.1 5.2 13.1 7.1 0-.2.2-.5.2-.7 0-7.7 6.8-14 14.5-14 6.9 0 12.7 5 13.8 11.6 3.5-2.2 6.8-3.9 9.3-7.1-.6-.7-1.2-2.8-1.2-3.8 0-2.3 1.9-4.2 4.2-4.2.3 0 .6 0 1 .1 1.3-2.7 2.3-5.5 2.9-8.4-12.1-9-35.5-7.7-35.5-7.7s-18.6-1-31.2 5.2c.9 5.8 3.3 11.6 6.9 16.5"></path><path fill="#373535" d="M155.1 33.7c.9.8 1.3 1.4 1.7 2.1 1.1 2-1.1 3.9-3.5 3.9-.2 0-.5 0-.7-.1-2.6 4.1-7.2 9.3-11.3 12 6.3 1 12.2 3.5 16.8 7.4 3.4-6.1 6-15 6-22.5 0-5.7-2.5-9.9-6.3-13-.1 3.1-1.8 7.4-2.7 10.2m-50.8 38.8c2.1-5.8 7.2-10.2 12.1-14.1-.7-1-1.8-3.4-2.2-4.5-5.9-1.8-11.1-5.2-15.2-9.6 0 .1-.1.3-.1.4-.8 3.4-.9 6.9-.5 10.2 2.8.5 5 3 5 6 0 1.8-1.6 4.3-2.8 5.5 1.2 2.6 2.1 4 3.7 6.1"></path><path fill="#373535" d="M103.9 77.3c-2.5-2.5-4.2-7.4-5.8-10.5-.3 0-.6.1-.9.1-3.4 0-6.9-2.8-6.1-6.1.4-1.8 1.7-3 3.7-4-.5-3.8-.6-9.1.3-13 .2-1.1.8-1.6 1.1-2.7-3.7-5.4-6.1-12.6-6.1-19.7v-.8c-6.3 3.2-11 8.1-11 15.9 0 17.3 10 34.3 24.8 40.9zm36.5-23.9c-1.9 5.4-7.1 9.4-13.2 9.4-3.3 0-6.3-1.1-8.6-3-4.9 3.8-9.4 10.5-11.6 16.4 1 1.1 1.7 2 2.9 3 3.4.9 8.2 0 11.9 0 14.9 0 28.2-6.6 35.8-18.3-5.2-3.6-11.2-7-17.2-7.5"></path><path fill="#1287B1" d="M96.9 39.2c1.2-2.6 2.6-4.9 4.3-7.1-.2-.5-.3-1.1-.3-1.6 0-2.6 2.1-4.6 4.6-4.6.6 0 1.2.1 1.7.3 7.7-5.9 17.8-8.4 28-6.1.9.2 1.8.5 2.7.7-10-1.4-20.4 1.7-28.1 7.9.2.6.4 1.2.4 1.8 0 2.6-2.1 4.6-4.6 4.6-.6 0-1.1-.1-1.7-.3-1.7 2.3-3.2 4.9-4.2 7.7 3.7 3.9 8.2 7.1 13.2 8.9v-.7c0-7.7 6.3-14 14-14 6.9 0 12.7 5 13.8 11.6 3.5-2.2 6.5-5 9.1-8.3-.6-.7-1-1.6-1-2.6 0-2.3 1.9-4.2 4.2-4.2.3 0 .6 0 1 .1 1.3-2.7 2.3-5.5 2.9-8.4-12.1-9-35.5-7.7-35.5-7.7s-18.6-1-31.2 5.2c.7 6.1 3.1 11.9 6.7 16.8"></path><path fill="#1287B1" d="M155.7 34.4c.9.8 1.4 1.9 1.4 3.1 0 2.3-1.9 4.2-4.2 4.2-.2 0-.5 0-.7-.1-2.6 4.1-6.1 7.6-10.2 10.2 6 .9 11.7 3.5 16.4 7.4 3.4-6.1 5.4-13.2 5.4-20.7 0-5.7-2.5-9.9-6.3-13-.2 3.1-.8 6.1-1.8 8.9m-50.8 39.4c2.1-5.8 5.7-10.9 10.6-14.8-.7-1-1.3-2-1.7-3.2-5.9-1.8-11.1-5.2-15.2-9.6 0 .1-.1.3-.1.4-.8 3.4-.9 6.9-.5 10.2 2.8.5 5 3 5 6 0 1.8-.8 3.4-2 4.5 1 2.3 2.4 4.5 3.9 6.5"></path><path fill="#1287B1" d="M103.9 77.2c-2.5-2.5-4.6-5.3-6.2-8.4-.3 0-.6.1-.9.1-3.4 0-6.1-2.7-6.1-6.1 0-2.4 1.4-4.5 3.4-5.5-.5-3.8-.3-7.6.6-11.5.2-1.1.6-2.2.9-3.3-3.7-5.4-5.9-12-5.9-19.1v-.8c-6.3 3.2-11 8.1-11 15.9 0 17.3 10.3 32.2 25.1 38.8.1 0 .1 0 .1-.1M140 55.4c-1.9 5.4-7.1 9.4-13.2 9.4-3.3 0-6.3-1.1-8.6-3-4.9 3.8-8.6 9-10.9 14.9 1 1.1 2.1 2.1 3.2 3.1 3.4.9 7 1.4 10.7 1.4 14.9 0 28.1-7.7 35.7-19.4-5-3.6-10.9-5.9-16.9-6.4"></path><path fill="#FFF" d="m140.5 51.8 12.9-3.1-13-.7 10.6-8-12 4.3 8.1-11.3-11.3 7.5 3.9-13.2-7.7 10.9-.2-13.8-5.1 12.3-4.2-12.4.2 14.6-7.3-13.1 4 13.9-11.9-8.6 9.3 11.7-14.8-5.4 11.6 8.6-14.9.5 15.3 3.9-15.3 3.3 15.1 1.1-12.7 8.1 13.1-4.7-9.1 11.5 11.5-9.3-4.1 15.4 8.9-12.6-1.2 14.8 5-13.5 4.3 14.1 1-14.2 6.4 12.1-3.8-13.8 11.6 9-7.5-11.5 12.8 5-9.8-9.6 13.1 1z"></path><path fill="#373535" fill-opacity=".35" d="M2.8 76.5C42.9 36.4 74.9 24 104 18.4c3.8-.7 4.6-9.2 4.6-9.2s.5 6.2 3.2 7 6.2-9.7 6.2-9.7-3.2 9.4 0 10c3.2.5 9.2-9.2 9.2-9.2s-2.4 8.3-.8 8.9c1.6.5 9.7-12.1 9.7-12.1s-4.8 8.3-.3 9.2c4.6.8 11.3-5.7 11.3-5.7s-5.2 5.9-2.9 6.8c10 3.5 18-9.4 18-9.4s-1.9 5.7-6.7 11.9c10.5 2.7 18.3-13.1 18.3-13.1L166 19.6c4 2 20.1-16.6 20.1-16.6s-8.3 14.5-13.2 17.5c2.7 2.2 12.4-6.5 12.4-6.5s-7.8 9.7-4.8 10.2c4.3 3.5 20.2-18 20.2-18s-6.2 12.7-15.3 22.6C193 32.7 212 8.2 212 8.2s-.5 7.8-14.3 20.2c10.2-1.3 23.4-20.7 23.4-20.7s-4.8 14.5-16.4 24.8c10-1 26.1-25.8 26.1-25.8s-6.2 17.2-18.8 27.2c14 3.1 34.2-17.8 34.2-17.8s-7.9 14.8-18.3 20.9c11.6 4.4 27.5-13.9 27.5-13.9s-15.9 24.5-41.2 23.4c-8.3-.4-33.4-25.2-87.2-23.2C55.8 25.9 40.8 56.1 2.8 76.5"></path><path fill="#373535" d="M4.4 73.5C44.5 33.4 76.5 21 105.6 15.4c3.8-.7 4.6-9.2 4.6-9.2s.5 6.2 3.2 7 6.2-9.7 6.2-9.7-3.2 9.4 0 10c3.2.5 9.2-9.2 9.2-9.2s-2.4 8.3-.8 8.9c1.6.5 9.7-12.1 9.7-12.1s-4.8 8.3-.3 9.2c4.6.8 11.3-5.7 11.3-5.7s-5.2 5.9-2.9 6.8c10 3.5 18-9.4 18-9.4s-1.9 5.7-6.7 11.9C167.6 16.6 175.4.8 175.4.8l-7.8 15.8c4 2.2 20.2-16.4 20.2-16.4s-8.3 14.5-13.2 17.5C177.3 19.6 187 11 187 11s-7.8 9.7-4.8 10.2c4.3 3.5 20.2-18 20.2-18s-6.3 12.7-15.4 22.6c7.6 3.8 26.7-20.7 26.7-20.7s-.5 7.8-14.3 20.2c10.2-1.3 23.4-20.7 23.4-20.7s-4.8 14.5-16.4 24.8c10-1 26.1-25.8 26.1-25.8s-6.2 17.2-18.8 27.2c14 3.1 34.2-17.8 34.2-17.8s-7.9 14.8-18.3 20.9c11.6 4.4 27.5-13.9 27.5-13.9s-15.9 24.5-41.2 23.4c-8.3-.4-33.4-25.2-87.2-23.2C57.5 22.9 42.4 53 4.4 73.5"></path><path fill="#373535" fill-opacity=".35" d="M1.8 80.9c21.2 10.6 40.6-1.6 65 5.3 18.6 5.2 41.2 11.7 71.9 7.2 30.7-4.4 56.9-17.8 69.5-41.6 3.9-10.6 19.8 2.4 19.8 2.4s-11.6-4.8-11.3-2.6c.3 2.3 17.4 10.2 17.4 10.2s-15.5-4.8-14.5-1.2c.9 3.6 19.4 18.2 19.4 18.2S217.9 63 216.2 65.2c-1.8 2.2 8.9 10.9 8.9 10.9s-17.6-10.9-23.8-7.7c-4.5 2.3 18.3 17.2 18.3 17.2s-14.8-11.3-18.3-8.3 16.7 27.2 16.7 27.2-23-24.8-25.3-23.6S199 94 199 94s-11.2-12.4-14.3-10.3c-3.1 2.2 16.2 34.3 16.2 34.3S180 85.1 171.3 90.6c13.5 29.7 8.5 33.9 8.5 33.9s-1.7-30.3-18.6-29.5c-8.5.4 4 22.6 4 22.6S153.7 97.3 146 97.7c14.1 26.8 9.1 37.6 9.1 37.6s2.3-22.9-16.8-35.6c7.3 6.5-4.6 35.6-4.6 35.6s10.4-42.9-7.7-34.7c-2.9 1.3-.2 21.4-.2 21.4s-3.6-23-9.1-21.8c-3.2.7-20.2 31.9-20.2 31.9s13.9-33.7 9.7-32.3c-3.1 1-8.9 14.9-8.9 14.9s2.8-13.7 0-14.5-18.6 14.5-18.6 14.5 11.7-13.7 9.7-16.6c-3.1-4.3-6.6-4.5-10.9-2.8C71.3 97.7 63 109 63 109s8.3-11.5 6.9-15.7c-2.3-6.9-26.2 13.3-26.2 13.3s14.1-13.3 10.9-16.2c-3.2-2.8-20.8-2-26.2-2-16.1.2-21.7-3.6-26.6-7.5"></path><path fill="#373535" d="M.9 78.5c21.2 10.6 40.6-1.6 65 5.3 18.6 5.2 41.2 11.7 71.9 7.2 30.7-4.4 56.9-17.8 69.5-41.6 3.9-10.6 19.8 2.4 19.8 2.4s-11.6-4.8-11.3-2.6c.3 2.3 17.4 10.2 17.4 10.2s-15.5-4.8-14.5-1.2c.9 3.6 19.4 18.2 19.4 18.2s-20.9-15.9-22.6-13.7 8.9 10.9 8.9 10.9-17.6-10.9-23.8-7.7c-4.5 2.3 18.3 17.2 18.3 17.2s-14.8-11.3-18.3-8.3 16.7 27.2 16.7 27.2-22.9-24.8-25.2-23.6 6.3 13.1 6.3 13.1-11.4-12.3-14.5-10.2c-3.1 2.2 16.1 34.3 16.1 34.3s-20.9-33-29.5-27.5c13.6 29.8 8.5 34 8.5 34s-1.7-30.3-18.6-29.5c-8.5.4 4 22.6 4 22.6S153 95 145.3 95.4c14.1 26.8 9.1 37.6 9.1 37.6s2.3-22.9-16.8-35.6c7.3 6.5-4.6 35.6-4.6 35.6s10.4-42.9-7.7-34.7c-2.9 1.3-.2 21.4-.2 21.4s-3.6-23-9.1-21.8c-3.2.7-20.2 31.9-20.2 31.9s13.9-33.7 9.7-32.3c-3.1 1-8.9 14.9-8.9 14.9s2.8-13.7 0-14.5S78 112.4 78 112.4s11.7-13.7 9.7-16.6c-3.1-4.3-6.6-4.5-10.9-2.8-6.2 2.4-14.5 13.7-14.5 13.7s8.3-11.5 6.9-15.7C66.9 84.1 43 104.3 43 104.3S57.1 91 53.9 88.1c-3.2-2.8-20.8-2-26.2-2-16.3.1-21.9-3.7-26.8-7.6"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  f as _
};
import { defineComponent as a, computed as c, openBlock as h, createElementBlock as m, normalizeStyle as n, createElementVNode as l } from "vue";
const s = /* @__PURE__ */ a({
  __name: "LogoDrupal2",
  props: {
    width: {},
    height: {}
  },
  setup(i) {
    const e = i, o = c(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (h(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: n(o.value)
    }, t[0] || (t[0] = [
      l("g", null, [
        l("path", {
          fill: "#009DDE",
          d: "M128.048 0C198.722.024 256 57.326 256 128v.048c-.024 70.686-57.35 127.976-128.047 127.952C57.266 255.976-.024 198.639 0 127.953S57.35-.024 128.048 0m-.654 32.92c-3.515 13.302-15.367 25.118-27.778 37.529-18.562 18.61-39.666 39.666-39.666 71.292.048 37.195 30.165 67.349 67.361 67.444 37.267 0 67.492-30.19 67.527-67.444 0-31.626-21.044-52.67-39.666-71.292l-1.663-1.664c-11.793-11.807-22.768-23.148-26.115-35.865m.915 100.994c7.743 8.254 12.66 13.943 17.754 20.154q.57.695 1.034 1.496c6.235 8.99 5.391 21.104-2.031 29.132-8.74 9.465-23.49 10.047-32.956 1.307-9.465-8.741-10.047-23.491-1.307-32.956 4.965-5.867 10.962-11.639 17.506-19.133M97.49 102.965l3.254 3.076 15.107 15.45a1.72 1.72 0 0 1 0 2.27l-15.795 17.457-5.523 6.722a41 41 0 0 0-5.308 8.349c-.202.499-.63.867-1.152.985h-.558c-1.532-.13-3.29-2.957-3.29-2.957l-.28-.423a19 19 0 0 1-1.003-1.762l-.297-.641a40.03 40.03 0 0 1-.51-21.65l.204-.741a55.8 55.8 0 0 1 7.836-16.586 106 106 0 0 1 7.315-9.549m30-31.234c4.025 4.573 8.562 9.157 12.837 13.432l.095.297a183 183 0 0 1 24.132 27.47 51.04 51.04 0 0 1 9.454 29.012A44.9 44.9 0 0 1 172 155.208l-.066.177a2.73 2.73 0 0 1-2.072 1.664h-.427a3.87 3.87 0 0 1-2.186-1.758l-.716-1.075a118.7 118.7 0 0 0-12.977-16.038l-6.163-6.508-20.546-21.4c-3.468-3.338-9.667-9.324-12.28-12.578a3 3 0 0 0-.297-.51 11.2 11.2 0 0 1-1.627-3.207v-.641a10.57 10.57 0 0 1 .808-6.164 11.4 11.4 0 0 1 2.316-3.29c3.978-3.978 7.957-7.873 11.721-12.149"
        })
      ], -1)
    ]), 4));
  }
});
export {
  s as _
};

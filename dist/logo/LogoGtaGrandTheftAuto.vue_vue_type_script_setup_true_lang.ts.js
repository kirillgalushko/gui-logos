import { defineComponent as f, computed as o, openBlock as m, createElementBlock as i, normalizeStyle as p, createStaticVNode as v } from "vue";
const r = /* @__PURE__ */ f({
  __name: "LogoGtaGrandTheftAuto",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const h = t, e = o(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (a, c) => (m(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      viewBox: "0 -26.58 365.132 365.132",
      style: p(e.value)
    }, c[0] || (c[0] = [
      v('<g stroke-width=".094"><path fill="#010101" stroke="#010101" d="M271.084.172c15.399-.2 30.699-.101 46-.101v118.5c-47.7.101-95.4 0-143.101 0q-2.25 0-4.5.301c1.8 2.1 4.3 3.3 6.601 4.899 1.899-1.2 3.6-3.3 6-3.2h44.1c3.5-.1 6.101 2.801 8.7 4.7 4-2.2 8.3-5 13.101-4.7h86.601v5.5h30.5v74.5c-.7 7.101-4.8 14.4-11.5 17.5-3.3 1.7-6.9 3.101-10.5 3.5h-30c-7.4-.3-15.5-2.899-19.5-9.5-5-7.699-3.7-17.3-3.5-26h-18.2c-.2 8.9.101 17.801-.101 26.801 9.301 1.101 18.399 7.8 19.5 17.601.2 21.1 0 42.1 0 63.199-.399 9.399-8.899 17.199-18.101 18.199-11.399 0-22.8-.1-34.199 0-5 0-9.801-2.1-13.801-5-3.899 2.602-8.199 4.9-13 4.9-11.699.1-23.399 0-35.2.1-5.899.102-11.3-2.898-15.7-6.699-4.6 4.301-10.8 7.101-17.199 6.699-11.7-.398-23.5.801-35.101-.8-4.2 1.2-8.6.7-12.899.8-14.7 0-29.4-.1-44 0-9.5.602-18.7-6.3-20.9-15.398-.2-21 0-42-.1-63-.301-5.5 2.5-10.7 6.5-14.301 4.3-4.3 10.399-5.699 16.199-6.8-4-4.2-6-10-5.699-15.7v-30c-1.7-.101-3.301-.101-5-.101v-25.699c-14.301 0-28.7-.101-43 0V47.571c.1-4.3-.5-8.699 1-12.899 3-8 10.5-14.2 19-15.3 31-.101 62 0 93 0 5.6-.2 11 2.399 15 6.3 4.899-5.101 12.199-6.601 19-6.4 10.199.2 20.5-.399 30.699.601 2.7.899 5.5-.5 8.2-.301h44.101c6.899-.199 14 1.301 19.399 5.7 5.5-5.8 14.101-6.6 21.601-6z"></path><path fill="#fff" stroke="#fff" d="M283.384 12.372c7.5-.601 15.101-.2 22.7-.301v94c-13.7 0-27.301.101-40.9 0-5.1-.3-11.1-3.699-11.1-9.399v-56.2c.199-5.6 5.899-9 11-9.3 6-.3 12.1 0 18.199-.101.101-6.199 0-12.499.101-18.699zm-271.7 28.2c.1-6 6.3-9.399 11.7-9.399 13.2-.2 26.399 0 39.6-.101.2 29.801 0 59.7.101 89.601.199 5.1-5.4 8.399-10 8.899-13.801.101-27.601 0-41.5 0 .1-5.899-.301-11.8.3-17.699 9.7-.101 19.5 0 29.2-.101v-5.6c-6.5-.4-13 .3-19.4-.4-5.2-.3-10.5-4.6-10.1-10.2-.001-18.3-.101-36.7.099-55zm60.8-9.4c12.5-.3 25.101 0 37.601-.101 4.6-.199 9.8.9 12.5 5 2.1 2.7 1.399 6.301 1.5 9.5-.101 6.301.199 12.601-.101 18.801-.5 2.8-4 3.1-6 4.199 2.3 1.101 6.101 1.7 6.101 5 .1 12.801 0 25.5 0 38.301 6.5 0 13-.101 19.399 0 .2 7 0 14.1.101 21.199 6.199.101 12.399-.1 18.5 0 5.199.101 10.699 4.101 10.699 9.7.101 22.3 0 44.7 0 67-7.5.101-15.1.101-22.699 0 0-19.601.1-39.2 0-58.7h-6.5v58.7c-7.601.101-15.2.101-22.7 0-.101-26.7-.101-53.5-.101-80.2-4.6-.3-9.8 1-14-1.6-2.699-1.5-5.399-4.1-5.199-7.3V77.57h-6.7c-.101 9.4 0 18.801-.101 28.2-7.399.5-15 .5-22.399 0-.001-24.798-.201-49.698.099-74.598z"></path><path fill="#fff" stroke="#fff" d="M133.084 40.472c-.4-5.8 6.199-9.3 11.3-9.4 9.5-.1 19 0 28.6 0 5.4 0 11.601 3.601 11.8 9.601.101 21.8 0 43.6 0 65.399h-39.699c-4.9 0-10.801-2.5-11.9-7.6-.2-9.7 0-19.3-.1-29-.7-5.1 4.699-8.5 9-9.7 6.699-.5 13.3 0 20-.2v-10.5h-6.9c-.1 1.5-.1 3-.2 4.5h-21.899c-.002-4.4-.002-8.7-.002-13.1zm60.6-9.3c7.4-.2 14.9-.101 22.301-.101.101 1.801.101 3.601.101 5.4 5.1-4 11.699-5.3 18-5.3 4.6.1 9.899 2.8 10.899 7.5.3 22.5-.2 44.899.399 67.399h-22.5c.2-19 .3-37.899.101-56.899-2.301-.101-4.601-.101-6.899-.101-.101 19 .1 38 0 57h-22.5c-.002-24.998-.102-49.998.098-74.898z"></path><path fill="#010101" stroke="#010101" d="M34.084 49.072h6.699c.101 13 0 26 .101 39h-6.8zm60.699 0h6.801v10.5h-6.801q.151-5.25 0-10.5zm181.801 0h6.699c0 13 .101 26 0 39h-6.699zm-121.301 28.5h6.801v10.5h-6.7c0-3.5-.101-7-.101-10.5z"></path><path fill="#fff" stroke="#fff" d="M72.584 114.872c6.8 0 13.6-.101 20.5 0v8.699h-20.5zm-12.2 18.5c7.5-.601 14.899-.2 22.399-.2 0 1.5.101 3.1.101 4.6 9.7.101 19.5.101 29.2 0v17.8H82.783q.151 17.25 0 34.5h6.801v-28.5h22.5c0 12.7.1 25.4-.101 38 .101 5.801-5.3 10.2-10.8 10-10.4 0-20.8.101-31.1 0-5.601-.3-9.801-5.6-9.801-11 0-14.3.101-28.6 0-43-2 0-4 0-6-.1.101-5.9.101-11.7 0-17.6 2 0 4-.101 6-.101.001-1.499.102-2.999.102-4.399zm119.399 9.1c-.3-5.4 5.399-9.1 10.301-9.3 10-.2 20-.101 30-.101 5.399-.1 11.5 3.601 11.5 9.4v37.1c-9.801 0-19.5-.1-29.301 0 0 3.5.101 7 .101 10.5h6.601c.101-1.5.101-3.1.199-4.699 7.4-.101 14.9 0 22.4-.101-.2 5.399.399 10.899-.4 16.2-1 5.6-6.8 8.6-12.1 8.399-9.601-.101-19.301.101-29-.2-5.301-.199-10.301-4.5-10.2-10-.101-19.098 0-38.098-.101-57.198zm58.801 0c-.2-5.4 5.5-9.1 10.5-9.4h41.3c-.101 6 0 12-.101 18h-29.199v5.4c9.8.2 19.5 0 29.3.1q-.151 9 0 18c-9.8.101-19.5-.1-29.3 0-.101 11.801 0 23.5 0 35.2q-11.25.151-22.5 0zm62.6-9.4c7.5.101 15.101 0 22.601 0 0 1.601.101 3.2.101 4.7 9.7.101 19.5.101 29.2 0v17.8c-9.7 0-19.5-.1-29.2 0q-.151 17.25 0 34.5h6.7v-28.5h22.5v39.101c-.101 4.801-4.9 7.801-9.101 8.801-10 .3-20-.2-30 .3-4.399.2-9.2-1.601-11.399-5.601-1.601-2.899-1.5-6.399-1.5-9.601 0-13-.101-26 .1-39-2 0-3.898 0-5.898-.1.1-5.9.1-11.7 0-17.6 1.898-.101 3.8-.101 5.699-.101.097-1.599.097-3.199.197-4.699z"></path><path fill="#010101" stroke="#010101" d="M202.283 151.072h6.801v10.5h-6.801z"></path><path fill="#fff" stroke="#fff" d="M43.184 231.671c1.4-5 6.9-7.8 11.9-7.601 9.6.101 19.3-.1 29 .101 4.8.2 10.3 3.399 10.5 8.7v66.399c-13.5.1-27 .1-40.4 0-4.4-.2-9.5-2.399-11-6.8q-.3-16.35 0-32.7c2.1-3.899 6.2-7.2 10.8-7.2 6.101 0 12.3.101 18.4 0-.101-3.5 0-7-.101-10.5h-6.6c-.1 1.5-.1 3-.2 4.5H43.084c.1-4.998-.2-9.899.1-14.899zm60.9-7.599h22c0 19-.101 38 0 57 2.3 0 4.6 0 6.8.101-.101-19 0-38 0-57.101h22.2c-.101 22.801.1 45.601-.101 68.4-1.6 4.699-7.2 6.898-11.899 6.6-9.601-.1-19.301.101-29 0-4.801-.399-10.7-3.899-10-9.399zm64.1 0h22.3c.101 1.601.101 3.2.199 4.7 9.7 0 19.4.101 29.101 0-.3 6-.199 12-.199 18-9.601.101-19.301 0-29 .101-.101 11.399.1 22.8-.101 34.199 2.399 0 4.8 0 7.199.101-.199-9.5 0-19-.1-28.601h22c-.101 12.301.1 24.601 0 36.9.1 5.899-6.101 9.8-11.4 9.6h-29.1c-4.4 0-9.2-2.399-10.9-6.699-.3-15.101 0-30.301-.1-45.5-1.9 0-3.801-.101-5.7-.101 0-6-.101-12 0-17.899h5.6c.101-1.601.101-3.202.201-4.801zm68.2.5c2.2-.699 4.5-.5 6.7-.5 9 .101 18-.1 27 0 5 .301 10.6 4 10.5 9.4v53.1c0 2.5-.101 5-1.301 7.2-2.3 3.7-6.899 5.5-11.199 5.3-9.601 0-19.301.101-29 0-4.9-.399-10.5-4-10.2-9.399-.101-18.699 0-37.5-.101-56.199-.299-4.402 3.701-7.702 7.601-8.902z"></path><path fill="#010101" stroke="#010101" d="M251.283 242.072h6.801c-.101 13 .1 26 0 38.9-2.301.1-4.5.1-6.7.199-.2-13 0-26.099-.101-39.099zm-185.699 28.5h6.8c-.101 3.5-.101 6.9.2 10.301-2.4.199-4.801.199-7.101.3.101-3.502.101-7.101.101-10.601z"></path></g>', 1)
    ]), 4));
  }
});
export {
  r as _
};

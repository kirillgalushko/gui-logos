import { defineComponent as l, computed as n, openBlock as h, createElementBlock as a, normalizeStyle as s, createElementVNode as i } from "vue";
const d = /* @__PURE__ */ l({
  __name: "LogoPinecone2",
  props: {
    width: {},
    height: {}
  },
  setup(m) {
    const e = m, o = n(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (r, t) => (h(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "288",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 288",
      style: s(o.value)
    }, t[0] || (t[0] = [
      i("g", null, [
        i("path", {
          fill: "#201D1E",
          d: "M108.634 254.436c9.08 0 16.44 7.361 16.44 16.442s-7.36 16.44-16.44 16.44-16.442-7.36-16.442-16.44 7.361-16.442 16.442-16.442m91.216-29.998 16.247 4.814L203.2 272.78a8.47 8.47 0 0 1-8.7 6.046l-3.983-.273-.098.08-41.39-2.904 1.152-16.906 27.808 1.887-18.205-26.262 13.926-9.656 18.229 26.295zm-176.837-30.09 16.903 1.197-1.98 27.804L64.15 205.12l9.677 13.91-26.248 18.248 26.792 7.895-4.79 16.255-43.732-12.885a8.47 8.47 0 0 1-6.058-8.726zM132.15 170.67l30.508 36.832-13.75 11.389-18.156-21.92-5.886 33.702-17.587-3.074 5.892-33.755-24.442 14.412-9.063-15.383 41.079-24.2a8.93 8.93 0 0 1 11.405 1.997m85.354-24.71 15.239-8.292 22.2 40.805a8.675 8.675 0 0 1-1.926 10.69l-3.141 2.714-32.05 27.893-11.386-13.09 21.548-18.747-32.095-5.781 3.078-17.074 32.073 5.779zM37.782 103.298l11.48 13.008-21.251 18.743 32.156 5.614-2.98 17.091-32.192-5.618 13.827 24.998-15.18 8.398-22.558-40.776a8.675 8.675 0 0 1 1.85-10.703zm108.694-13.42 30.404 36.734-13.753 11.384-18.152-21.93-5.886 33.712-17.587-3.074 5.872-33.624-24.349 14.274-9.027-15.403 37.4-21.929.038-.142.165.021 3.485-2.032a8.93 8.93 0 0 1 11.39 2.01m39.18-18.065 6.65-16.024 43.012 17.85a8.675 8.675 0 0 1 5.218 9.517l-.716 3.982-7.345 41.78-17.086-3.01 4.924-27.968-28.537 15.772-8.386-15.188 28.591-15.784zm-81.939-31.577.74 17.334-28.414 1.214 21.43 24.49-13.056 11.424L62.95 70.173l-5.001 28-17.078-3.054 8.184-45.759a8.674 8.674 0 0 1 8.17-7.139l4.02-.18.09-.065zm58.121-36.965 30.267 36.965-13.814 11.31-17.964-21.943-6.059 33.668-17.57-3.162 6.068-33.743-24.526 14.34-9.007-15.415L150.428 1.22a8.93 8.93 0 0 1 11.41 2.052"
        })
      ], -1)
    ]), 4));
  }
});
export {
  d as _
};
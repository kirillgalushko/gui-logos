import { defineComponent as m, computed as i, openBlock as o, createElementBlock as c, normalizeStyle as n, createElementVNode as a } from "vue";
const r = /* @__PURE__ */ m({
  __name: "LogoCodepen2",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const l = t, h = i(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (s, e) => (o(), c("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "95",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 95",
      style: n(h.value)
    }, e[0] || (e[0] = [
      a("g", null, [
        a("path", {
          fill: "#000",
          d: "M9.17 24.813c12.225-12.31 32.093-12.444 44.485-.303a4.454 4.454 0 1 1-6.234 6.363c-8.895-8.715-23.156-8.618-31.932.217s-8.775 23.097 0 31.932c8.776 8.836 23.037 8.933 31.932.218a4.454 4.454 0 0 1 6.234 6.362C41.263 81.744 21.395 81.61 9.17 69.3s-12.225-32.178 0-44.487M119.963.009l.136-.007h.282l.255.015.281.033.12.02.21.042.225.059q.328.093.634.233l.22.109.209.117.178.113L165.296 29q.385.25.717.585l.115.12.087.098.127.153.185.25.1.154.123.208.098.188.091.197q.221.505.308 1.035l.006.04q.05.312.054.625v28.75a4.4 4.4 0 0 1-.284 1.552l-.02.047a4 4 0 0 1-.162.368l-.119.222-.173.28-.086.123-.156.203-.143.167-.143.152q-.344.35-.75.61l-42.53 28.224c-.432.292-.92.51-1.442.637l-.276.056-.258.038-.336.026-.178.004q-.132 0-.261-.008l-.325-.03-.2-.032a4.4 4.4 0 0 1-1.267-.43l-.026-.015a4 4 0 0 1-.445-.27L75.162 65.083a4 4 0 0 1-.343-.255l-.184-.16-.178-.174-.231-.257-.13-.164-.143-.2a5 5 0 0 1-.151-.241l-.133-.245-.105-.223a4.4 4.4 0 0 1-.37-1.77V32.706c.002-.51.092-1.023.273-1.516l.118-.287.034-.074.107-.212.107-.187.12-.19.09-.127.14-.184.15-.176.153-.163.16-.153q.28-.256.592-.457L117.75.768l.205-.132.238-.132.218-.106.207-.088a4.4 4.4 0 0 1 1-.265zM98.949 52.424 85.666 61.36l30.13 19.994V63.757zm42.602-.001-16.847 11.334v17.597l30.13-19.995zm-21.3-14.329-13.32 8.961 13.32 8.96 13.32-8.961zm-38.153 2.993v11.937l8.872-5.969zm76.297.005-8.864 5.963 8.864 5.964zm-42.599-28.34L85.664 32.75l13.286 8.937 16.846-11.333zm8.908.004v17.598l16.846 11.333 13.286-8.937zm88.498 2.736h-19.365a4.454 4.454 0 0 0-4.454 4.454v54.221a4.454 4.454 0 0 0 4.454 4.454h19.365c17.433 0 31.564-14.132 31.564-31.565 0-17.432-14.131-31.564-31.564-31.564m-14.915 54.221V24.4h14.915c12.513 0 22.657 10.143 22.657 22.656s-10.144 22.657-22.657 22.657zM302.28 15.492a4.454 4.454 0 0 1 .485 8.881l-.485.027h-30.407v18.202h18.788a4.454 4.454 0 0 1 .485 8.882l-.485.026h-18.789l.001 18.203h30.407a4.455 4.455 0 0 1 4.428 3.969l.026.485a4.455 4.455 0 0 1-3.969 4.428l-.485.026h-34.857a4.455 4.455 0 0 1-4.428-3.969l-.026-.485V19.946a4.455 4.455 0 0 1 3.969-4.428l.485-.026zm54.221 0c11.016 0 19.946 8.93 19.946 19.945 0 10.734-8.478 19.487-19.103 19.929l-.843.017h-18.788l.004 18.784a4.455 4.455 0 0 1-3.968 4.428l-.486.026a4.455 4.455 0 0 1-4.427-3.969l-.027-.485V19.946a4.455 4.455 0 0 1 3.97-4.428l.484-.026zm-18.788 30.983h18.788c6.096 0 11.038-4.941 11.038-11.038 0-5.878-4.595-10.683-10.39-11.019l-.648-.018h-18.788zm96.247-30.983a4.454 4.454 0 0 1 .485 8.881l-.485.027h-30.406l-.001 18.202h18.788a4.454 4.454 0 0 1 .486 8.882l-.486.026h-18.788v18.203h30.407a4.455 4.455 0 0 1 4.428 3.969l.026.485a4.455 4.455 0 0 1-3.969 4.428l-.485.026h-34.856a4.455 4.455 0 0 1-4.428-3.969l-.026-.485V19.946a4.455 4.455 0 0 1 3.968-4.428l.486-.026zm26.53 4.454c0-4.073 4.954-5.938 7.655-3.1l.3.348 34.643 44.092.004-41.34a4.455 4.455 0 0 1 3.969-4.428l.485-.026a4.455 4.455 0 0 1 4.428 3.968l.026.486v54.221c0 4.073-4.954 5.937-7.655 3.1l-.301-.348-34.65-44.1.004 41.348a4.455 4.455 0 0 1-3.969 4.428l-.485.026a4.455 4.455 0 0 1-4.428-3.969l-.026-.485z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
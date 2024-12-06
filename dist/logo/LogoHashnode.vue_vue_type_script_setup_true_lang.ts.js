import { defineComponent as i, computed as o, openBlock as l, createElementBlock as n, normalizeStyle as v, createElementVNode as c } from "vue";
const r = /* @__PURE__ */ i({
  __name: "LogoHashnode",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const e = t, m = o(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (s, h) => (l(), n("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "88",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 88",
      style: v(m.value)
    }, h[0] || (h[0] = [
      c("g", { "fill-rule": "evenodd" }, [
        c("path", {
          fill: "#2962FF",
          d: "M5.919 28.777c-7.892 7.892-7.892 20.685 0 28.575l22.859 22.86c7.891 7.891 20.684 7.891 28.575 0l22.86-22.86c7.89-7.891 7.89-20.684 0-28.575L57.353 5.918c-7.891-7.89-20.685-7.89-28.575 0zm47.147 24.29c5.524-5.525 5.524-14.48 0-20.003-5.523-5.524-14.478-5.524-20.002 0s-5.524 14.478 0 20.002 14.479 5.524 20.003 0"
        }),
        c("path", {
          fill: "#000",
          d: "M120.186 58.338c.032-6.364 3.922-10.093 9.515-10.093 5.561 0 8.84 3.568 8.808 9.643v28.996h13.694V55.445c.032-11.572-6.783-18.58-17.07-18.58-7.489 0-12.504 3.536-14.754 9.355h-.579V21.05h-13.308v65.834h13.694zm53.253 29.478c7.296 0 12.021-3.183 14.433-7.78h.385v6.848h12.987V53.58c0-11.765-9.965-16.716-20.959-16.716-11.83 0-19.608 5.658-21.505 14.659l12.666 1.028c.932-3.279 3.857-5.69 8.775-5.69 4.66 0 7.33 2.347 7.33 6.397v.194c0 3.182-3.376 3.6-11.959 4.435-9.772.9-18.548 4.18-18.548 15.205 0 9.772 6.975 14.723 16.395 14.723m3.92-9.451c-4.21 0-7.232-1.96-7.232-5.722 0-3.858 3.183-5.755 8.005-6.43 2.989-.417 7.875-1.124 9.514-2.218v5.24c0 5.176-4.275 9.13-10.286 9.13m71.97-26.777c-1.222-9.098-8.551-14.723-21.023-14.723-12.633 0-20.959 5.851-20.927 15.366-.032 7.393 4.63 12.183 14.273 14.112l8.55 1.703c4.307.868 6.268 2.443 6.332 4.918-.064 2.926-3.246 5.015-8.035 5.015-4.886 0-8.133-2.09-8.97-6.108l-13.468.707c1.286 9.452 9.322 15.27 22.406 15.27 12.793 0 21.954-6.526 21.987-16.266-.033-7.136-4.693-11.412-14.272-13.372l-8.937-1.8c-4.597-.997-6.3-2.572-6.269-4.95-.032-2.958 3.312-4.887 7.555-4.887 4.757 0 7.586 2.604 8.261 5.786zm19.82 6.75c.033-6.364 3.922-10.093 9.515-10.093 5.562 0 8.84 3.568 8.808 9.643v28.996h13.694V55.445c.032-11.572-6.783-18.58-17.07-18.58-7.489 0-12.503 3.536-14.753 9.355h-.58V21.05h-13.307v65.834h13.694zm52.867 0c.032-6.364 3.825-10.093 9.354-10.093 5.497 0 8.808 3.6 8.775 9.643v28.996h13.694V55.445c0-11.507-6.75-18.58-17.036-18.58-7.33 0-12.633 3.6-14.851 9.355h-.58v-8.712h-13.05v49.376h13.694zm61.304 29.51c14.98 0 24.302-10.255 24.302-25.46 0-15.3-9.322-25.523-24.302-25.523S359.02 47.087 359.02 62.388c0 15.204 9.321 25.459 24.3 25.459m.065-10.608c-6.911 0-10.448-6.333-10.448-14.948s3.537-14.979 10.448-14.979c6.782 0 10.318 6.365 10.318 14.979 0 8.615-3.536 14.948-10.318 14.948M431.1 87.687c7.972 0 12.118-4.597 14.015-8.711h.579v7.908h13.5V21.05h-13.661v24.752h-.418c-1.833-4.018-5.787-8.937-14.047-8.937-10.833 0-19.995 8.422-19.995 25.395 0 16.523 8.776 25.427 20.027 25.427m4.34-10.897c-6.719 0-10.384-5.98-10.384-14.594 0-8.551 3.6-14.433 10.383-14.433 6.654 0 10.383 5.625 10.383 14.433S442.03 76.79 435.44 76.79m53.894 11.058c12.216 0 20.444-5.947 22.373-15.109l-12.665-.835c-1.382 3.76-4.918 5.721-9.483 5.721-6.847 0-11.187-4.532-11.187-11.893V65.7h33.625v-3.762c0-16.78-10.159-25.073-23.21-25.073-14.53 0-23.948 10.319-23.948 25.556 0 15.655 9.29 25.427 24.495 25.427m-10.962-30.635c.29-5.625 4.566-10.125 10.64-10.125 5.947 0 10.062 4.243 10.094 10.125z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  r as _
};
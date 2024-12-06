import { defineComponent as e, computed as i, openBlock as m, createElementBlock as l, normalizeStyle as p, createStaticVNode as v } from "vue";
const d = /* @__PURE__ */ e({
  __name: "LogoOptimizely",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const a = t, c = i(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (o, h) => (m(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "119",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 119",
      style: p(c.value)
    }, h[0] || (h[0] = [
      v('<g><g><path fill="#3BE081" d="M40.742 64.928v14.236c10.862-.013 21.276-4.201 28.957-11.646 7.68-7.445 12-17.54 12.014-28.068H67.027c-.009 6.754-2.781 13.23-7.708 18.006-4.928 4.777-11.608 7.463-18.577 7.472"></path><path fill="#0037FF" d="M40.738 104.142c-6.918 0-13.553-2.664-18.445-7.406s-7.64-11.173-7.64-17.88c0-6.705 2.748-13.136 7.64-17.879 4.892-4.741 11.527-7.405 18.445-7.405V39.44a41.8 41.8 0 0 0-15.572 2.98 40.8 40.8 0 0 0-13.21 8.53 39.4 39.4 0 0 0-8.837 12.78A38.4 38.4 0 0 0 0 78.817 38.4 38.4 0 0 0 3.074 93.91a39.4 39.4 0 0 0 8.8 12.805 40.8 40.8 0 0 0 13.185 8.566 41.8 41.8 0 0 0 15.563 3.023h.116z"></path><path fill="#0CF" d="M40.742 104.142v14.131c10.79 0 21.137-4.154 28.766-11.55C77.136 99.33 81.422 89.3 81.422 78.842H66.828c-.005 6.706-2.754 13.137-7.645 17.88-4.89 4.743-11.522 7.412-18.44 7.42"></path><path fill="#861DFF" d="M40.742 25.301v14.131c10.79 0 21.137-4.154 28.766-11.55C77.136 20.489 81.422 10.459 81.422 0H66.828c-.005 6.706-2.754 13.137-7.645 17.88-4.89 4.744-11.522 7.412-18.44 7.421"></path><path fill="#FF8110" d="M81.659 25.301v14.131c10.789 0 21.136-4.154 28.764-11.55 7.63-7.394 11.915-17.424 11.915-27.882h-14.586c-.005 6.708-2.755 13.14-7.647 17.883-4.892 4.744-11.527 7.412-18.446 7.418"></path></g><path fill="#000" d="M190.272 59.043h7.513l1.769 3.847a15.7 15.7 0 0 1 3.096-2.14 25 25 0 0 1 3.62-1.457 15.7 15.7 0 0 1 4.774-.684c2.5-.014 4.975.494 7.256 1.488a18.6 18.6 0 0 1 6.052 4.193 20.7 20.7 0 0 1 4.15 6.382 21.8 21.8 0 0 1 0 16.094 20.6 20.6 0 0 1-4.15 6.382 18.7 18.7 0 0 1-6.052 4.2 18.05 18.05 0 0 1-7.248 1.498 15 15 0 0 1-4.467-.596 25 25 0 0 1-3.32-1.288 14.8 14.8 0 0 1-2.831-1.971v17.133h-10.162zm19.443 30.411a10 10 0 0 0 3.942-.714 9.7 9.7 0 0 0 3.306-2.199q2.931-2.913 2.922-7.798a10.4 10.4 0 0 0-.653-4.183 10.7 10.7 0 0 0-2.269-3.615 10.3 10.3 0 0 0-3.321-2.151 10.5 10.5 0 0 0-3.918-.756c-1.345 0-2.676.257-3.918.756a10.3 10.3 0 0 0-3.322 2.151q-2.914 2.922-2.914 7.798t2.914 7.798a9.7 9.7 0 0 0 3.307 2.199 10 10 0 0 0 3.94.714zm44.638 9.427a15 15 0 0 1-5.53-.982 12.1 12.1 0 0 1-4.333-2.873 13.5 13.5 0 0 1-2.823-4.458 15.7 15.7 0 0 1-1.02-5.827V68.035h-6.186v-8.136h2.649q4.865 0 4.865-4.716V49.64h8.841v9.431h8.834v8.99h-8.834V84.34a5 5 0 0 0 .243 2.005 5.1 5.1 0 0 0 1.017 1.763c.454.517 1.01.942 1.634 1.251a5.47 5.47 0 0 0 2.835.55q.572.028 1.146 0 .42-.033.83-.13.366-.091.705-.257v8.57a8 8 0 0 1-1.411.427 12.8 12.8 0 0 1-3.462.363m19-44.553a6 6 0 0 1-3.78-1.214 5.7 5.7 0 0 1-2.119-3.27 5.55 5.55 0 0 1 .515-3.828 5.82 5.82 0 0 1 2.911-2.634 6.06 6.06 0 0 1 3.975-.234 5.88 5.88 0 0 1 3.22 2.272 5.57 5.57 0 0 1 .99 3.74 5.63 5.63 0 0 1-1.694 3.494 5.5 5.5 0 0 1-1.83 1.24 5.7 5.7 0 0 1-2.188.434m-5.305 4.715h10.161v39.433h-10.161zm19.877 0h7.513l1.768 3.847a16.6 16.6 0 0 1 2.74-2.14 18.7 18.7 0 0 1 3.022-1.457c1.27-.469 2.619-.7 3.977-.684a15.4 15.4 0 0 1 5.305.805 17.7 17.7 0 0 1 3.62 1.762 9.7 9.7 0 0 1 2.564 2.567c.972-.99 2.07-1.852 3.273-2.567a23.5 23.5 0 0 1 3.802-1.762c1.556-.551 3.2-.824 4.857-.805 4.424 0 7.95 1.376 10.608 4.112 2.656 2.736 3.977 6.8 3.977 12.168v23.563h-10.176V75.75a7.82 7.82 0 0 0-1.994-5.633 6.1 6.1 0 0 0-1.888-1.427 6.3 6.3 0 0 0-4.682-.331 6.2 6.2 0 0 0-2.082 1.146 7 7 0 0 0-.629.612 7.77 7.77 0 0 0-1.984 5.633v22.702h-10.171V75.75a7.78 7.78 0 0 0-1.984-5.633 6.1 6.1 0 0 0-1.89-1.428 6.32 6.32 0 0 0-4.687-.331 6.2 6.2 0 0 0-2.082 1.147 6 6 0 0 0-.623.612 7.82 7.82 0 0 0-1.992 5.633v22.702h-10.162zm71.598-4.717a6.02 6.02 0 0 1-3.793-1.215 5.68 5.68 0 0 1-2.127-3.278 5.55 5.55 0 0 1 .515-3.84 5.83 5.83 0 0 1 2.92-2.644 6.07 6.07 0 0 1 3.986-.234 5.9 5.9 0 0 1 3.228 2.28 5.58 5.58 0 0 1 .99 3.753 5.65 5.65 0 0 1-1.7 3.504c-.518.53-1.14.952-1.832 1.24a5.6 5.6 0 0 1-2.187.434m-5.304 4.716h10.186v39.432h-10.186zm17.658 31.265 17.676-21.84h-17.676v-9.424h30.493v8.136l-17.657 21.889h18.555v9.423h-31.391zm57.041 8.571a19.4 19.4 0 0 1-7.82-1.609 20.7 20.7 0 0 1-6.45-4.33 20.9 20.9 0 0 1-4.425-6.381 19.64 19.64 0 0 1 0-15.676 20.9 20.9 0 0 1 4.424-6.382 20.8 20.8 0 0 1 6.45-4.33 20.1 20.1 0 0 1 15.334-.129 18.9 18.9 0 0 1 6.183 4.113 19.6 19.6 0 0 1 4.203 6.382 21.1 21.1 0 0 1 1.542 8.184q.005.666-.082 1.327c-.067.427-.124.846-.181 1.248-.06.402-.117.885-.175 1.28h-28.284a9.1 9.1 0 0 0 3.003 4.884 9.33 9.33 0 0 0 6.278 1.972c1.15.023 2.298-.12 3.403-.427a10.5 10.5 0 0 0 2.342-1.03 7.8 7.8 0 0 0 1.768-1.545h10.611a17.7 17.7 0 0 1-2.434 4.458 19.1 19.1 0 0 1-3.977 4.024 21.5 21.5 0 0 1-5.304 2.873 18.3 18.3 0 0 1-6.409 1.094m9.722-23.128a9.53 9.53 0 0 0-3.402-5.62 10.07 10.07 0 0 0-6.32-2.215c-2.31 0-4.545.783-6.323 2.215a9.54 9.54 0 0 0-3.4 5.62zm17.226-31.274h10.164V98.45h-10.164zm25.6 68.114q-.7 0-1.372-.048a9 9 0 0 1-1.105-.129 4.4 4.4 0 0 1-1.053-.257v-8.136a8.05 8.05 0 0 0 5.164-1.457 9.5 9.5 0 0 0 2.79-3.685l.88-2.14-15.468-37.695h10.61l10.164 25.695 9.313-25.695H512a7460 7460 0 0 1-7.872 19.531 1428 1428 0 0 1-2.961 7.364 585 585 0 0 0-2.61 6.558c-.77 1.972-1.409 3.613-1.942 4.925-.53 1.312-.828 2.084-.971 2.318a50 50 0 0 1-2.965 5.947 17.2 17.2 0 0 1-3.136 3.983 10.4 10.4 0 0 1-3.621 2.23 13.3 13.3 0 0 1-4.457.691M152.63 39.44c-6.063 0-11.989 1.743-17.03 5.008-5.04 3.264-8.968 7.905-11.288 13.333a28.87 28.87 0 0 0-1.745 17.167c1.183 5.763 4.102 11.057 8.389 15.212 4.287 4.156 9.748 6.985 15.694 8.131a31.55 31.55 0 0 0 17.71-1.69c5.6-2.249 10.387-6.057 13.755-10.943s5.166-10.63 5.166-16.507a28.9 28.9 0 0 0-2.331-11.37 29.7 29.7 0 0 0-6.644-9.64 30.7 30.7 0 0 0-9.946-6.441 31.5 31.5 0 0 0-11.73-2.26m0 49.09a20.5 20.5 0 0 1-11.172-3.146c-3.32-2.097-5.924-5.103-7.482-8.635a18.86 18.86 0 0 1-1.267-11.21c.731-3.775 2.602-7.256 5.375-10 2.773-2.745 6.324-4.63 10.203-5.417a20.6 20.6 0 0 1 11.588.995c3.676 1.437 6.83 3.898 9.062 7.072a19 19 0 0 1 3.477 10.761v.226c.017 5.11-2.055 10.018-5.763 13.65s-8.75 5.691-14.021 5.728z"></path></g>', 1)
    ]), 4));
  }
});
export {
  d as _
};
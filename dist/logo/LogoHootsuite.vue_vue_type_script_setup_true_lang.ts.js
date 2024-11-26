import { defineComponent as c, computed as i, openBlock as q, createElementBlock as a, normalizeStyle as o, createElementVNode as t } from "vue";
const p = /* @__PURE__ */ c({
  __name: "LogoHootsuite",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const l = e, m = i(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (v, h) => (q(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "101",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 101",
      style: o(m.value)
    }, h[0] || (h[0] = [
      t("g", null, [
        t("path", {
          fill: "#FF4C46",
          d: "M137.084 79.534h-10.4V32.657h10.4V53.02h34.498V32.657h10.401v46.877h-10.4V61.809h-34.499zm74.304 1.172q-10.327 0-16.626-5.347t-6.299-14.136 6.3-14.137q6.297-5.346 16.625-5.347 10.4 0 16.7 5.347t6.3 14.137-6.3 14.136-16.7 5.347m0-8.057q6.006 0 9.67-3.15 3.66-3.149 3.661-8.276 0-5.2-3.662-8.35t-9.669-3.15q-5.933 0-9.595 3.186-3.663 3.188-3.662 8.314 0 5.127 3.662 8.276t9.595 3.15m50.563 8.057q-10.329 0-16.626-5.347-6.3-5.347-6.3-14.136 0-8.79 6.3-14.137 6.297-5.346 16.626-5.347 10.4 0 16.7 5.347 6.298 5.347 6.298 14.137t-6.299 14.136-16.7 5.347m0-8.057q6.005 0 9.668-3.15t3.663-8.276q0-5.2-3.663-8.35t-9.668-3.15q-5.933 0-9.596 3.186-3.662 3.188-3.662 8.314 0 5.127 3.662 8.276t9.596 3.15m42.212 7.617c-4.502 0-7.072-2.062-8.458-3.938l-.08-.11c-1.343-1.869-2.408-4.307-2.447-9.568l-.001-16.195h-5.274v-7.544h6.739V32.657h8.936v10.254h10.546v7.544h-10.546v13.697c-.078 4.092.576 5.584 1.57 6.576 1.743 1.74 7.065.56 8.976-.658v7.937c-2.228 1.55-6.25 2.259-9.96 2.259m36.464.44q-9.742 0-19.63-2.857V69.5q8.277 3.15 17.945 3.15l.761-.003q6.363-.045 9.2-.877 3.004-.877 3.004-3.148 0-2.124-3.333-2.967-3.174-.801-7.676-1.04l-.454-.022a115 115 0 0 1-9.595-.842q-4.8-.623-8.13-3.04-3.333-2.417-3.332-6.812 0-6.006 5.785-9.082t15.748-3.077q7.835.001 18.311 2.051v8.057q-9.01-1.904-17.212-1.904-12.452 0-12.451 3.809-.001 1.904 3.368 2.673 3.192.73 7.633 1.03l.498.032q4.76.293 9.558.989 4.797.698 8.167 3.186 3.368 2.49 3.369 6.959 0 6.151-5.713 9.118t-15.82 2.967m60.856-37.795h10.4v36.622h-11.425l1.465-15.088h-.587q-2.565 16.26-18.018 16.26-7.91-.146-11.572-5.164-3.597-4.926-3.662-16.32v-16.31h10.4v14.65q-.001 8.276 2.344 11.791t7.69 3.516q5.933 0 9.45-5.42 3.434-5.297 3.513-14.021zM426 39.391q-3.004 0-4.688-1.501t-1.684-4.431 1.684-4.395T426 27.599q3.076 0 4.798 1.465 1.72 1.466 1.721 4.395 0 5.933-6.52 5.933m5.347 40.142h-10.401V42.911h10.401zm58.607 1.173q-9.963 0-16.005-5.347t-6.042-14.136 6.042-14.137q6.042-5.346 16.005-5.347 9.813 0 15.857 4.578 5.925 4.49 6.181 11.763l.008.35v5.942h-34.132q.879 4.47 4.651 6.446 3.772 1.977 11.097 1.977l.69-.004c5.976-.075 8.798-1.066 11.835-2.193l.29-.118c.968-.403 3.657-1.585 3.957-1.713v8.35q-5.493 2.125-9.595 2.856-4.102.733-10.84.733m-12.306-21.388 24.464-.586q-.22-4.834-3.15-6.922t-9.008-2.087q-5.86 0-8.826 2.234t-3.48 7.361m-23.102 20.948c-4.502 0-7.072-2.062-8.459-3.938l-.08-.11c-1.342-1.869-2.407-4.307-2.446-9.568l-.002-16.195h-5.273v-7.544h6.738V32.657h8.936v10.254h10.547v7.544H453.96v13.697c-.077 4.092.577 5.584 1.57 6.576 1.743 1.74 7.066.56 8.977-.658v7.937c-2.228 1.55-6.25 2.259-9.961 2.259"
        }),
        t("g", null, [
          t("path", {
            fill: "#FF4C46",
            d: "M10.057.833a1.25 1.25 0 0 1 1.507-.789l.089.028 33.761 12.834a28 28 0 0 1 4.74-.382c5.893.04 11.457 1.364 17.037 4.66l32.474-2.689a1.05 1.05 0 0 1 .67 1.896l-.092.06-20.286 11.816q.491.564.985 1.152c9.242 11.02 14.864 26.966 17.55 36.186a18.3 18.3 0 0 1-2.788 15.9c-6.035 8.26-18.906 19.505-44.158 19.326-27.568-.191-41.808-13.907-48.65-22.336A13.1 13.1 0 0 1 .852 65.632l.512-1.338c4.037-10.5 11.558-28.738 17.583-35.519 3.627-4.078 7.81-7.598 12.228-10.31L10.439 2.215a1.25 1.25 0 0 1-.382-1.382"
          }),
          t("path", {
            fill: "#FFF",
            d: "M50.761 72.216a.22.22 0 0 1 .286-.125 17.33 17.33 0 0 0 14.47 1.285l.274-.102a.21.21 0 0 1 .259.315l-6.043 6.654a1.05 1.05 0 0 1-1.463.085c-2.235-1.92-5.967-5.932-7.755-7.902a.22.22 0 0 1-.028-.21m8.39-34.08c15.627-10.873 24.1-1.435 28.853 9.035 3.434 7.545 4.65 21.672-6.498 23.837-8.54 1.665-16.43-6.986-22.266-15.064a1.85 1.85 0 0 0-2.989-.008l-.238.33c-3.994 5.602-13.52 20.83-27.617 16.975-13.603-3.723-16.592-19.025-10.935-29.603 8.371-15.95 20.6-21.146 41.69-5.502M56.93 60.022a1.42 1.42 0 0 1 1.93-.034l.078.076 7.468 8.51a.755.755 0 0 1-.22 1.17 16.8 16.8 0 0 1-7.248 1.829c-3.32-.027-6.719-2.231-8.11-3.244l-.057-.046a.757.757 0 0 1-.113-1.004l.051-.065 6.137-7.117.01.002q.035-.04.074-.077"
          }),
          t("path", {
            fill: "#FF4C46",
            d: "m77.287 47.538.086.14a6.042 6.042 0 1 1-8.566-1.662l.146-.1a5.84 5.84 0 0 1 8.334 1.622M39.51 44.32c-3.144 1.072-4.708 4.412-3.77 7.522 1.071 3.145 4.411 4.709 7.522 3.772 3.144-1.072 4.682-4.455 3.77-7.523.01-.02-.011-.078-.05-.147-.967-3.028-4.057-4.628-6.998-3.792-.135-.034-.304.067-.474.168"
          })
        ])
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};

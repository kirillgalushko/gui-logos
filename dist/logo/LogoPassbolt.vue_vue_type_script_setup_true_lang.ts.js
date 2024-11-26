import { defineComponent as q, computed as i, openBlock as o, createElementBlock as a, normalizeStyle as v, createElementVNode as t } from "vue";
const c = /* @__PURE__ */ q({
  __name: "LogoPassbolt",
  props: {
    width: {},
    height: {}
  },
  setup(l) {
    const h = l, m = i(() => ({
      width: h.width || "1em",
      height: h.height || "1em",
      minWidth: h.width || "1em",
      minHeight: h.height || "1em"
    }));
    return (n, e) => (o(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "90",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 90",
      style: v(m.value)
    }, e[0] || (e[0] = [
      t("g", null, [
        t("path", {
          fill: "#D40000",
          d: "m476.27 5.665.118.002.328.015a7.75 7.75 0 0 1 4.478 1.819l.25.221.239.23 28.176 28.305c2.823 2.835 2.848 7.264.113 10.18l-.19.196-.196.188-29.213 27.076c-2.955 2.74-7.508 2.823-10.492.233l-.206-.185-.197-.192-16.323-16.387a.5.5 0 0 1 .075-.767c3.446-2.314 5.953-5.768 7.04-9.733l.103-.398.098-.418a.5.5 0 0 1 .401-.378l.086-.008h12.177a.5.5 0 0 1 .491.41l.008.09v4.728a2.8 2.8 0 0 0 2.463 2.785l.168.014.174.005h5.991a2.8 2.8 0 0 0 2.785-2.462l.014-.168.005-.174v-4.728a.5.5 0 0 1 .41-.492l.09-.008h2.137a2.82 2.82 0 0 0 2.818-2.494l.014-.171.005-.171v-3.11c0-1.468-1.089-2.685-2.496-2.849l-.17-.014-.17-.005H460.31a.5.5 0 0 1-.469-.327c-1.437-3.902-4.287-7.168-7.98-9.186l-.372-.198-.374-.188a.5.5 0 0 1-.178-.744l.062-.068 19.789-18.331a7.94 7.94 0 0 1 4.77-2.107l.334-.024.26-.011zm-33.059 28.29c4.785 0 8.668 3.805 8.668 8.506 0 4.7-3.883 8.506-8.668 8.506s-8.668-3.806-8.668-8.506 3.883-8.507 8.668-8.507"
        }),
        t("path", {
          fill: "#000",
          d: "M26.543 18.904q11.99 0 18.711 7.06 6.72 7.058 6.72 19.677 0 5.174-1.402 9.524a25 25 0 0 1-4.254 7.881q-3.385 4.304-8.123 6.189-4.738 1.837-12.57 1.837H13.779v18.904H0V18.904zm299.131-.918q12.57 0 20.065 7.397 7.542 7.349 7.542 19.63t-7.494 19.629q-7.446 7.3-20.113 7.3t-20.21-7.349-7.542-19.58q0-12.281 7.543-19.63 7.541-7.398 20.21-7.397m-235.94.918q10.685 0 16.1 4.932 5.415 4.883 5.415 14.553v32.683H74.215q-7.785 0-11.99-3.916-4.16-3.917-4.159-11.12 0-8.897 4.787-12.764 4.834-3.868 16.003-3.868h18.13v-1.306q0-4.641-2.755-6.527-2.708-1.885-9.718-1.885H61.499V18.904zm79.872 0v10.879h-24.32q-5.946 0-7.735 1.063-1.79 1.016-1.789 3.675 0 2.417 1.547 3.577 1.596 1.113 4.98 1.113h12.474q8.557 0 13.054 4.012 4.496 3.966 4.496 11.507 0 7.252-4.013 11.797-3.965 4.545-10.25 4.545h-35.584V60.194h29.058q3.868 0 5.608-1.209 1.79-1.209 1.789-3.868 0-2.66-1.789-3.868-1.79-1.257-5.608-1.257H139.63q-10.589 0-14.311-3.24-3.723-3.238-3.723-11.506 0-8.412 4.496-12.377t13.925-3.965zm58.791 0v10.879h-24.319q-5.947 0-7.735 1.063-1.79 1.016-1.79 3.675 0 2.417 1.548 3.577 1.595 1.113 4.98 1.113h12.474q8.557 0 13.054 4.012 4.496 3.966 4.496 11.507 0 7.252-4.013 11.797-3.965 4.545-10.25 4.545h-35.584V60.194h29.057q3.868 0 5.609-1.209 1.788-1.209 1.788-3.868 0-2.66-1.788-3.868-1.79-1.257-5.609-1.257h-11.893q-10.59 0-14.312-3.24-3.722-3.238-3.722-11.506 0-8.412 4.496-12.377t13.924-3.965zM254.747 0v18.904h11.846q7.832 0 12.57 1.886 4.738 1.837 8.123 6.14a24.8 24.8 0 0 1 4.254 7.93q1.402 4.303 1.402 9.475 0 12.57-6.72 19.678-6.72 7.06-18.71 7.06h-26.544V0zm121.161 0v71.072h-14.36V0zm30.073 0v18.904h14.553V29.3H405.98v21.08q0 5.803 1.982 8.074 1.983 2.224 6.914 2.224h5.657v10.395h-12.57q-7.64 0-11.701-4.206-4.062-4.255-4.061-12.136V29.3h-9.718V18.903h9.718V0zm-80.403 29.3q-6.189 0-9.718 4.157-3.481 4.158-3.481 11.555 0 7.446 3.48 11.604t9.719 4.158q6.188 0 9.718-4.158t3.529-11.604-3.53-11.555q-3.48-4.158-9.717-4.158M97.083 49.798H80.838q-4.835 0-6.672 1.305T72.33 55.65q0 2.755 1.45 3.868 1.5 1.063 6.044 1.063h17.26zm-73.827-19.63h-9.477v29.735h8.413q8.364 0 11.845-3.53t3.481-11.748q0-7.93-3.19-11.169-3.192-3.288-11.072-3.288m239.904 0h-8.413v29.735h9.477q7.88 0 11.071-3.288 3.192-3.337 3.191-11.265 0-8.17-3.53-11.652-3.48-3.53-11.796-3.53"
        })
      ], -1)
    ]), 4));
  }
});
export {
  c as _
};

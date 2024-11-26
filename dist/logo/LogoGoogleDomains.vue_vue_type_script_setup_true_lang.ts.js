import { defineComponent as l, computed as q, openBlock as i, createElementBlock as s, normalizeStyle as o, createElementVNode as c } from "vue";
const p = /* @__PURE__ */ l({
  __name: "LogoGoogleDomains",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const e = t, m = q(() => ({
      width: e.width || "1em",
      height: e.height || "1em",
      minWidth: e.width || "1em",
      minHeight: e.height || "1em"
    }));
    return (n, h) => (i(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "76",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 76",
      style: o(m.value)
    }, h[0] || (h[0] = [
      c("g", null, [
        c("path", {
          fill: "#5F6368",
          d: "M308.54 60.636V20.302h12.335q9.287 0 14.863 5.604c3.718 3.735 5.573 8.592 5.573 14.563s-1.855 10.828-5.573 14.563q-5.576 5.604-14.863 5.604zm5.182-4.948h7.153q6.98-.001 11.066-4c2.72-2.663 4.085-6.405 4.085-11.213q.001-7.157-4.085-11.183c-2.719-2.682-6.412-4.03-11.066-4.03h-7.153zm34.436-19.359q3.998-4.197 10.191-4.195c4.128 0 7.527 1.402 10.19 4.195q3.999 4.198 4 10.51-.001 6.31-4 10.508c-2.663 2.8-6.062 4.195-10.19 4.195q-6.194.002-10.19-4.195-3.999-4.198-4-10.509.001-6.31 4-10.509m3.859 17.748c1.782 1.825 3.895 2.731 6.332 2.731q3.658-.001 6.333-2.731 2.674-2.729 2.676-7.239-.002-4.51-2.676-7.239t-6.333-2.731q-3.657.001-6.332 2.731-2.676 2.737-2.677 7.24.002 4.365 2.507 7.06zm24.196 6.565V33.034h4.955v3.834h.227c.79-1.317 1.996-2.431 3.631-3.35q2.452-1.378 4.869-1.378 6.42-.001 8.727 5.297c2.254-3.527 5.463-5.297 9.627-5.297 3.265 0 5.726 1.041 7.374 3.13q2.48 3.124 2.48 8.482v16.902h-5.18V44.53c0-2.78-.51-4.752-1.52-5.916q-1.523-1.745-4.617-1.745-3.04 0-5.04 2.59c-1.336 1.727-1.997 3.7-1.997 5.916v15.268h-5.181V44.53c0-2.78-.509-4.752-1.519-5.916q-1.524-1.745-4.618-1.745-3.039 0-5.04 2.59c-1.335 1.727-1.996 3.7-1.996 5.916v15.268zm55.566.9q-4.391 0-7.35-2.535-2.957-2.535-2.957-6.706c0-3.007 1.163-5.359 3.49-7.074q3.492-2.564 8.617-2.566 4.558 0 7.49 1.69v-.79c0-2.026-.698-3.65-2.082-4.874q-2.085-1.83-5.126-1.831-2.249-.002-4.085 1.071c-1.219.717-2.058 1.69-2.505 2.928l-4.728-2.027q.954-2.48 3.773-4.594 2.812-2.112 7.435-2.112 5.291.002 8.782 3.098c2.327 2.064 3.49 4.98 3.49 8.734V60.63h-4.954v-3.834h-.226c-2.02 3.104-4.953 4.677-8.806 4.744zm.845-4.727c2.137 0 4.085-.797 5.83-2.395q2.616-2.396 2.615-5.665-2.197-1.8-6.59-1.8c-2.517 0-4.409.545-5.689 1.635-1.274 1.09-1.917 2.364-1.917 3.833q0 2.032 1.746 3.21c1.1.737 2.348 1.133 3.742 1.177zm23.584-30.707q-1.065 1.072-2.59 1.071-1.525.002-2.59-1.071a3.54 3.54 0 0 1-1.073-2.59q-.001-1.527 1.072-2.591a3.53 3.53 0 0 1 2.59-1.072c1.017 0 1.875.355 2.591 1.072.71.716 1.072 1.58 1.072 2.59q.001 1.427-.95 2.463zm0 34.534h-5.18V33.034h5.18zm10.35-27.608v3.834h.227c.747-1.317 1.935-2.431 3.546-3.35a10.3 10.3 0 0 1 5.18-1.378q5.127.001 7.828 3.154 2.7 3.16 2.7 8.451v16.903h-5.18V44.53c0-5.107-2.273-7.661-6.81-7.661q-3.207.001-5.237 2.566-2.029 2.565-2.027 5.947v15.267h-5.181V33.034zm34.565 28.508q-4.619-.002-7.63-2.253-3.016-2.251-4.422-5.635l4.618-1.916q2.196 5.18 7.49 5.18 2.415.002 3.968-1.071c1.035-.71 1.55-1.654 1.55-2.817 0-1.8-1.256-3.026-3.773-3.663l-5.573-1.353c-1.764-.453-3.436-1.304-5.01-2.566q-2.363-1.885-2.364-5.102c0-2.443 1.078-4.421 3.24-5.946 2.156-1.519 4.722-2.285 7.686-2.285 2.437 0 4.618.558 6.534 1.66 1.917 1.109 3.283 2.695 4.11 4.759l-4.508 1.861c-1.01-2.443-3.117-3.662-6.308-3.662-1.537 0-2.835.319-3.882.956-1.054.636-1.574 1.5-1.574 2.59 0 1.535 1.15 2.584 3.456 3.16l5.669 1.348c2.59.6 4.501 1.635 5.744 3.098Q512 50.081 512 52.846q-.002 3.718-3.044 6.198c-1.971 1.616-4.475 2.442-7.516 2.496zm-367.167-.006c-12.555 0-23.107-10.233-23.107-22.806s10.552-22.807 23.107-22.807c6.945 0 11.887 2.725 15.61 6.283l-4.39 4.392c-2.664-2.505-6.278-4.453-11.22-4.453-9.168 0-16.333 7.398-16.333 16.579 0 9.18 7.165 16.572 16.333 16.572 5.947 0 9.333-2.389 11.501-4.563 1.776-1.782 2.946-4.336 3.387-7.845h-15.047v-6.216h21.104c.22 1.115.33 2.45.33 3.895 0 4.673-1.28 10.46-5.389 14.576-3.927 4.09-8.924 6.313-15.524 6.391zM186.84 46.85c0 8.458-6.602 14.686-14.704 14.686S157.43 55.308 157.43 46.85c0-8.512 6.602-14.686 14.705-14.686s14.704 6.174 14.704 14.686m-6.437 0c0-5.285-3.827-8.898-8.267-8.898s-8.268 3.613-8.268 8.898c0 5.23 3.828 8.899 8.268 8.899s8.267-3.675 8.267-8.899m38.442 0c0 8.458-6.602 14.686-14.704 14.686s-14.704-6.234-14.704-14.686c0-8.512 6.601-14.686 14.704-14.686 8.102 0 14.704 6.174 14.704 14.686m-6.436 0c0-5.285-3.828-8.898-8.268-8.898s-8.268 3.613-8.268 8.898c0 5.23 3.828 8.899 8.268 8.899s8.268-3.675 8.268-8.899m37.051-13.798v26.365c0 10.846-6.387 15.299-13.945 15.299-7.11 0-11.385-4.783-12.995-8.678l5.61-2.334c.998 2.395 3.441 5.23 7.385 5.23 4.832 0 7.833-3 7.833-8.623V58.2h-.22c-1.446 1.782-4.22 3.337-7.723 3.337-7.33 0-14.055-6.393-14.055-14.63 0-8.287 6.724-14.742 14.055-14.742 3.497 0 6.277 1.556 7.723 3.283h.22v-2.395zm-5.67 13.854c0-5.175-3.443-8.954-7.834-8.954-4.446 0-8.163 3.785-8.163 8.954 0 5.12 3.723 8.843 8.163 8.843 4.391 0 7.833-3.73 7.833-8.843m16.749-29.427v43.163h-6.443V17.48zm24.975 34.21 4.997 3.337-.155.226c-1.698 2.418-5.551 6.284-12.063 6.284-8.335 0-14.551-6.455-14.551-14.686 0-8.733 6.277-14.686 13.835-14.686 7.612 0 11.33 6.063 12.554 9.346l.668 1.666-19.616 8.12c1.5 2.946 3.834 4.453 7.11 4.453s5.555-1.61 7.22-4.06m-15.39-5.286 13.111-5.45c-.722-1.838-2.89-3.117-5.444-3.117-3.231 0-7.707 2.816-7.672 8.333z"
        }),
        c("path", {
          fill: "#4285F4",
          d: "M78.643 0c2.015 0 3.374 2.058 2.578 3.907L52.823 71.843a6.81 6.81 0 0 1-6.246 4.098H27.169c-2.015 0-3.424-1.99-2.621-3.84l2.223-5.335 4.85-28.324 14.092-17.13 7.178-17.215C53.962 1.611 55.97 0 58.684 0z"
        }),
        c("path", {
          fill: "#FBBC04",
          d: "M45.811 21.073a26.95 26.95 0 0 0-19.132-7.636C11.785 13.602-.164 25.777.002 40.628.16 55.247 11.999 67.005 26.58 67.213c.067-.183 13.044-20.552 13.044-20.552s6.186-25.575 6.186-25.588"
        }),
        c("path", {
          fill: "#EA4335",
          d: "M45.811 21.073S26.563 67.22 26.581 67.22q.349.009.698 0c14.9-.166 26.843-12.335 26.677-27.192-.08-7.435-3.19-14.135-8.145-18.955"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};

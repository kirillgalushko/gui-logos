import { defineComponent as h, computed as i, openBlock as o, createElementBlock as a, normalizeStyle as n, createElementVNode as l } from "vue";
const p = /* @__PURE__ */ h({
  __name: "LogoPercy",
  props: {
    width: {},
    height: {}
  },
  setup(t) {
    const c = t, m = i(() => ({
      width: c.width || "1em",
      height: c.height || "1em",
      minWidth: c.width || "1em",
      minHeight: c.height || "1em"
    }));
    return (s, e) => (o(), a("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "142",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 142",
      style: n(m.value)
    }, e[0] || (e[0] = [
      l("g", null, [
        l("path", {
          fill: "#5C007B",
          d: "M97.363 0c14.577 6.489 27.496 16.48 28.006 16.876l.016.012c-2.058-8.14-3.549-12.496-3.549-12.496 4.58 2.491 10.05 5.698 15.432 9.047l1.194.746c8.542 5.36 16.675 10.97 20.441 14.506 3.659-.171 6.586-1.09 8.463-1.876 3.199-1.34 5.888 1.95 6.905 5.297 1.012 3.33 2.23 8.468 2.286 14.04.063 6.214-1.316 11.583-4.099 15.958-5.269 8.287-15.5 13.9-26.545 19.657l-1.23.64-.617.322c-12.25 6.37-22.469 12.833-30.456 24.722a74.8 74.8 0 0 0-9.486 20.095c-2.278 7.567-4.078 13.701-9.198 13.701-4.633 0-7.397-5.969-9.487-9.34-4.019-6.482-9.018-14.545-17.11-15.227-7.188-1.065-13.088 1.596-17.352 5.111a29 29 0 0 0-5.19 5.608c-1.199 1.433-2.328 2.904-3.425 4.334-3.354 4.372-6.25 8.149-10.078 9.244-.626.18-1.241.27-1.83.27-.42 0-.894-.048-1.393-.18l-.252-.073-.01.016c-12.062-3.534-12.684-25.592-12.684-25.592-5.8 1.381-11.788 5.195-11.788 5.195 5.4-18.5 15.751-30.59 15.751-30.59-2.257-.176-4.8-.13-7.298.028l-.713.048C5.791 90.55 0 91.656 0 91.656c16.115-20.738 26.99-28.338 26.99-28.338-8.538-3.73-19.444-5.637-19.444-5.637 19.63-11.334 39.109-16.88 39.109-16.88-4.243-4.006-19.514-9.392-19.514-9.392 2.981-.857 6.468-1.644 10.093-2.35l.992-.19q.995-.19 1.997-.37l1.003-.177q.816-.144 1.632-.281l.814-.137.406-.067.81-.132a383 383 0 0 1 19.792-2.63c-5.076-4.279-16.561-8.936-16.561-8.936 6.467-.221 12.25-.3 17.125-.307h1.347c9.553.015 15.27.307 15.27.307-3.567-4.903-12.763-11.32-12.763-11.32 19.148 1.802 32.796 6.554 32.796 6.554-.145-1.164-.96-3.343-1.862-5.485l-.236-.557C98.608 2.556 97.363 0 97.363 0M66.55 120.59a154 154 0 0 1-2.176 5.505l-.292.692c-2.497 5.878-5.42 11.55-8.554 12.045a4 4 0 0 1-.606.047c-2.488 0-4.72-2.296-6.804-7.01 3.667-5.172 10.944-11.194 18.432-11.279m58.146-18.476c-2.053 7.695-2.327 15.425-2.546 21.634v.006c-.142 4.015-.264 7.482-.837 10.005-.768 3.38-2.45 5.094-5 5.094l-.087-.001c-2.46-.04-5.075-2.148-7.94-6.421 1.688-9.674 8.371-22.03 16.41-30.317m114.207-75.548c8.193 0 16.204 3.607 21.575 9.437 5.363 5.823 8.681 13.865 8.681 22.741s-3.318 16.917-8.681 22.74c-5.37 5.828-13.382 9.436-21.575 9.436-6.001 0-12.298-1.858-16.685-6l.013 19.738c.011 16.596-12.943 14.08-15.943 13.911-1.02-.057-1.818-.276-2.372-.821-.555-.546-.833-1.329-.833-2.336l-.041-85.546c0-1.029.285-1.84.856-2.4.57-.564 1.389-.844 2.439-.844h11.266c1.05 0 1.868.28 2.438.843.572.561.844 1.364.857 2.401l.042 3.27a29 29 0 0 1 8.297-4.815 27.6 27.6 0 0 1 9.666-1.755m222.424-.082c.854 0 1.582.23 2.14.662.557.432.967 1.093 1.313 1.906l16.092 37.641 11.543-37.535c.247-.9.682-1.515 1.275-1.968.575-.443 1.313-.706 2.179-.706h13.316c1.133 0 1.935.328 2.408.927.47.621.533 1.49.184 2.646l-17.91 56.212-6.911 21.81-2.641 8.385c-.293.932-.774 1.586-1.43 1.953l-.191.095c-.717.291-1.48.25-2.377.03-2.902-.717-16.363-2.23-10.978-17.95l3.192-9.326-.724-1.812-3.5-8.318-21.92-50.927c-.481-1.057-.308-2.02.123-2.676.448-.683 1.236-1.029 2.344-1.05zM41.496 78.924 26.484 101.52 40.63 88.587zm335.814-52.35c.664.008 1.2.257 1.593.66.579.59.854 1.39.854 2.421v14.9c0 1.011-.212 1.77-.66 2.274-.43.504-1.07.759-1.903.759a18 18 0 0 0-5.237.567c-1.667.44-3.185 1.2-4.51 2.23-1.324 1.053-2.386 2.467-3.163 4.19-.784 1.748-1.183 3.871-1.194 6.398l-.088 15.89c-.092 16.597-12.943 14.083-15.943 13.912-1.023-.058-1.818-.273-2.372-.82q-.834-.822-.835-2.336v-57.84q0-1.514.835-2.336.834-.82 2.372-.82h12.821q1.542 0 2.373.82.837.822.837 2.336v3.177c1.54-2.688 5.053-6.505 14.22-6.382m38.232-.09c14.485 0 26.615 8.777 30.453 21.456.745 2.072-.494 3.415-2.599 3.415H429.78c-1.61 0-2.726-.732-3.715-2.073-2.228-3.048-6.066-4.756-10.523-4.756-8.047 0-14.237 5.731-14.237 14.142 0 8.413 6.19 14.142 14.237 14.142 4.457 0 8.295-1.706 10.523-4.632.989-1.463 1.978-2.195 3.715-2.195h13.616c2.105 0 3.344 1.341 2.6 3.414-3.84 12.679-15.969 21.457-30.454 21.457-18.817 0-32.808-14.021-32.808-32.186s13.99-32.184 32.808-32.184m-108.011.03q6.787.03 12.465 2.43a29.8 29.8 0 0 1 9.853 6.724c2.775 2.898 4.935 6.279 6.457 10.168 1.522 3.89 2.305 8.143 2.325 12.76 0 .791-.02 1.56-.084 2.29a75 75 0 0 1-.163 2.208c-.123.972-.494 1.68-1.069 2.127-.576.446-1.338.668-2.264.668h-41.219c.78 2.39 1.872 4.334 3.31 5.833a13.3 13.3 0 0 0 5.019 3.241c1.914.689 3.95 1.012 6.11 1.012 1.748-.02 3.434-.283 5.04-.829 1.583-.547 2.96-1.277 4.092-2.209a9.5 9.5 0 0 1 1.77-1.154c.597-.283 1.275-.425 2.056-.425l11.848-.121c1.132.02 1.954.344 2.448.972.473.628.493 1.438.02 2.43-1.624 3.525-3.785 6.482-6.478 8.852-2.695 2.39-5.822 4.171-9.381 5.388-3.558 1.194-7.444 1.803-11.661 1.803-5.143-.022-9.771-.851-13.884-2.472-4.134-1.62-7.652-3.868-10.572-6.786-2.943-2.895-5.184-6.3-6.747-10.167-1.563-3.89-2.346-8.103-2.366-12.66.02-4.558.823-8.771 2.427-12.659 1.604-3.869 3.866-7.272 6.809-10.169 2.921-2.916 6.417-5.165 10.449-6.785 4.031-1.62 8.494-2.45 13.39-2.47M84.496 61.61 50.49 77.85l28.344-6.933zm-30.422-3.929L27.141 77l21.943-9.659zm184.594-13.283c-7.9 0-14.302 6.346-14.302 14.174 0 7.83 6.402 14.177 14.302 14.177 7.897 0 14.3-6.346 14.3-14.177 0-7.828-6.403-14.174-14.3-14.174m-123.666 7.618-30.21 3.254 22.084 1.293zm192.406-9.34c-3.478.02-6.398.81-8.7 2.41-2.326 1.58-3.97 3.91-4.937 6.948h26.43c-.658-2.29-1.645-4.133-2.963-5.51a11.56 11.56 0 0 0-4.524-2.957 15.2 15.2 0 0 0-5.306-.891m-225.546.475-30.21 3.252 22.2 2.115zm42.551-3.787-22.519 4.775 17.522-.988zm-51.168-7.956 23.419 5.993 10.212-3.391zm24.118-11.546 18.951 8.828 9.071-1.876z"
        })
      ], -1)
    ]), 4));
  }
});
export {
  p as _
};

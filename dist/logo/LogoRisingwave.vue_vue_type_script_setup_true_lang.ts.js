import { defineComponent as e, computed as i, openBlock as l, createElementBlock as m, normalizeStyle as p, createStaticVNode as o } from "vue";
const n = /* @__PURE__ */ e({
  __name: "LogoRisingwave",
  props: {
    width: {},
    height: {}
  },
  setup(h) {
    const a = h, q = i(() => ({
      width: a.width || "1em",
      height: a.height || "1em",
      minWidth: a.width || "1em",
      minHeight: a.height || "1em"
    }));
    return (v, t) => (l(), m("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "106",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 106",
      style: p(q.value)
    }, t[0] || (t[0] = [
      o('<g><path fill="#3A7CEB" d="M147.256 48.106h2.33q3.653 0 5.606-1.512 1.952-1.51 1.952-4.346 0-2.832-1.952-4.346-1.953-1.511-5.606-1.51h-2.33zm27.146 26.266h-15.368l-11.778-18.267v10.126a8.14 8.14 0 0 1-8.14 8.14h-4.205v-47.49h19.21q3.968 0 6.928 1.164 2.96 1.165 4.882 3.181a13.45 13.45 0 0 1 2.898 4.66q.976 2.648.976 5.67-.001 5.417-2.615 8.786-2.613 3.371-7.715 4.567zm14.235-28.101v21.306a6.795 6.795 0 0 1-6.794 6.794h-4.605V42.06h7.188a4.21 4.21 0 0 1 4.211 4.21m-12.156-16.62q0-1.322.504-2.487a6.52 6.52 0 0 1 3.433-3.434 6.2 6.2 0 0 1 2.488-.503q1.322 0 2.488.503 1.164.507 2.047 1.387a6.6 6.6 0 0 1 1.385 2.047q.504 1.165.504 2.488c0 .88-.168 1.712-.504 2.488a6.54 6.54 0 0 1-3.432 3.432 6.2 6.2 0 0 1-2.488.504q-1.322 0-2.488-.504a6.5 6.5 0 0 1-2.047-1.385 6.5 6.5 0 0 1-1.386-2.047 6.2 6.2 0 0 1-.504-2.488m40.122 20.723q-3.151-1.638-6.173-1.638-1.575 0-2.551.63t-.976 1.7q0 .568.157.913.158.347.693.662t1.574.568l1.932.448q.383.087.809.18 4.724.946 7.054 3.37t2.33 6.205q0 2.835-1.133 5.101a10.84 10.84 0 0 1-3.15 3.812q-2.016 1.544-4.85 2.393-2.834.85-6.235.85-6.552 0-12.912-3.716l4.158-8.062q4.784 3.276 9.068 3.275 1.574.001 2.583-.694 1.008-.69 1.008-1.763-.001-.628-.157-1.039-.16-.409-.662-.755-.505-.346-1.48-.63a27 27 0 0 0-1.7-.42l-.852-.179q-5.29-1.071-7.399-3.18-2.112-2.111-2.11-5.826 0-2.71 1.007-4.882a10.1 10.1 0 0 1 2.898-3.685q1.887-1.511 4.566-2.33 2.677-.819 5.952-.82 5.353 0 10.392 2.08zm20.783-4.103v21.306a6.795 6.795 0 0 1-6.793 6.794h-4.606V42.06h7.189a4.21 4.21 0 0 1 4.21 4.21M225.23 29.65q0-1.322.505-2.487a6.52 6.52 0 0 1 3.432-3.434 6.2 6.2 0 0 1 2.488-.503q1.322 0 2.488.503 1.164.507 2.047 1.387a6.6 6.6 0 0 1 1.385 2.047q.505 1.165.505 2.488t-.505 2.488a6.54 6.54 0 0 1-3.432 3.432 6.2 6.2 0 0 1-2.488.504q-1.322 0-2.488-.504a6.5 6.5 0 0 1-2.047-1.385 6.5 6.5 0 0 1-1.385-2.047 6.2 6.2 0 0 1-.505-2.488m18.707 12.409h11.4v4.094q2.33-2.835 4.724-3.811 2.393-.975 5.605-.976 3.403 0 5.826 1.102a11.6 11.6 0 0 1 4.126 3.118 9 9 0 0 1 1.89 3.653q.504 2.016.504 4.598v13.74a6.795 6.795 0 0 1-6.794 6.793h-4.607V58.058q0-2.393-.346-3.873-.346-1.478-1.228-2.363a4.34 4.34 0 0 0-1.7-1.07 6.3 6.3 0 0 0-2.016-.315q-2.899 0-4.441 1.732-1.544 1.732-1.544 4.945v10.463a6.794 6.794 0 0 1-6.793 6.794h-4.606zm51.143 15.998q0 1.575.566 2.93a7.5 7.5 0 0 0 1.544 2.36 6.9 6.9 0 0 0 2.331 1.575 7.5 7.5 0 0 0 2.928.568 7.3 7.3 0 0 0 2.866-.568 6.9 6.9 0 0 0 2.33-1.574 8 8 0 0 0 1.575-2.362q.6-1.354.599-2.867 0-1.574-.6-2.897a7.9 7.9 0 0 0-1.605-2.33 7.3 7.3 0 0 0-2.362-1.575 7.2 7.2 0 0 0-2.803-.567q-1.512 0-2.834.599-1.323.6-2.33 1.575a7.4 7.4 0 0 0-1.607 2.298 6.8 6.8 0 0 0-.598 2.835m20.623-15.997a4.95 4.95 0 0 1 4.949 4.949v25.158q0 2.707-.316 4.849-.315 2.14-.88 3.78-.757 2.077-2.363 3.873-1.606 1.795-3.873 3.117-2.268 1.324-5.134 2.078-2.866.757-6.204.757-3.779 0-6.929-.946-3.149-.943-5.51-2.613-2.363-1.67-3.874-3.905a12.95 12.95 0 0 1-2.015-4.881h12.848q1.197 3.212 5.417 3.212 3.59 0 5.512-2.016 1.92-2.016 1.92-5.606v-3.086q-1.26 1.197-2.424 1.984-1.167.789-2.362 1.291-1.198.504-2.52.725t-2.897.22q-3.465 0-6.361-1.197-2.9-1.196-5.008-3.337-2.11-2.142-3.275-5.133t-1.165-6.646q-.001-3.715 1.259-6.897 1.26-3.18 3.433-5.543a15.8 15.8 0 0 1 5.165-3.716q2.991-1.353 6.519-1.354 5.73 0 9.636 4.283v-3.4zm95.144-1.01q6.045 0 10.015 4.222V42.06h7.826a3.637 3.637 0 0 1 3.637 3.635v28.676h-11.463v-3.59q-3.654 4.599-9.89 4.599-3.527-.001-6.487-1.292a15.6 15.6 0 0 1-5.164-3.622q-2.206-2.33-3.433-5.48-1.228-3.148-1.228-6.865 0-3.465 1.197-6.582 1.195-3.118 3.337-5.449a15.75 15.75 0 0 1 5.103-3.683q2.96-1.355 6.55-1.355m-79.04-14.17a5.65 5.65 0 0 1 5.458 4.19l7.07 26.483 10.078-30.674h9.825l10.077 30.674 7.07-26.482a5.65 5.65 0 0 1 5.457-4.192h8.574l-14.171 47.492h-12.598l-9.322-27.526-9.322 27.526h-12.597L323.234 26.88zm82.063 23.996q-1.576 0-2.928.568a6.9 6.9 0 0 0-2.331 1.574 7.8 7.8 0 0 0-1.544 2.3 6.9 6.9 0 0 0-.566 2.802q0 1.575.566 2.929a7.5 7.5 0 0 0 1.544 2.362 6.9 6.9 0 0 0 2.33 1.575 7.5 7.5 0 0 0 2.929.566 7.35 7.35 0 0 0 2.865-.566 6.9 6.9 0 0 0 2.331-1.575 8.2 8.2 0 0 0 1.574-2.33q.6-1.324.6-2.835t-.6-2.866a8 8 0 0 0-1.574-2.362 6.9 6.9 0 0 0-2.33-1.574 7.3 7.3 0 0 0-2.866-.568m80.558-10.014q4.095 0 7.369 1.228 3.273 1.23 5.543 3.559 2.267 2.33 3.464 5.7Q512 54.72 512 58.94v1.197h-23.997q0 7.369 6.93 7.369 3.713 0 5.604-3.023h11.023q-3.34 11.085-16.691 11.085-4.095 0-7.496-1.228t-5.826-3.496-3.747-5.417q-1.323-3.149-1.323-7.055 0-4.029 1.26-7.273t3.59-5.513q2.33-2.265 5.637-3.495 3.306-1.228 7.464-1.228m-50.242 1.197a6.58 6.58 0 0 1 5.967 3.81l5.916 12.754 6.031-12.79a6.58 6.58 0 0 1 5.951-3.774h8.551l-16.817 32.31h-7.62l-16.63-32.31zm50.556 6.173q-2.645 0-4.314 1.385t-2.11 3.905h13.038q-.567-2.393-2.33-3.842-1.766-1.449-4.284-1.448"></path><g><path fill="#4ACFD2" d="M39.623 57.147a60 60 0 0 0 5.107-2.62 60 60 0 0 0 12.256-9.343c8.4-8.3 13.833-18.469 16.288-29.187.131-.574.194-.997.31-1.583.673-3.366 2.393-6.515 5.02-9.11 7-6.916 18.038-7.278 25.199.153 1.796 1.864 4.665 4.09 4.947 9.9a60 60 0 0 1-.443 7.357 59.66 59.66 0 0 1-17.364 35.33c-13.04 12.884-30.497 18.56-47.43 17.064a60 60 0 0 1-16.107-3.71 59.5 59.5 0 0 1-15.797-9.004 60 60 0 0 0 28.014-5.247"></path><path fill="#F0B400" d="M51.443 3.929c5.073-5.012 13.247-4.963 18.259.11 3.21 3.25 4.635 7.227 3.703 11.376l-.13.582c-2.456 10.718-7.888 20.887-16.29 29.187a60 60 0 0 1-17.362 11.964 59.5 59.5 0 0 0 4.206-8.202 60.15 60.15 0 0 0 3.73-33.634c-.014-.167-.154-.843-.154-.843-.505-3.863 1.052-7.59 4.038-10.54"></path><path fill="#E23E2B" d="M44.81 9.364a9.6 9.6 0 0 1 2.36 3.945q.212 1 .39 2.003a60.15 60.15 0 0 1-3.731 33.635 59.55 59.55 0 0 0-12.245-25.56 59 59 0 0 0-1.768-2.064c-3.165-3.43-1.938-8.788 1.356-12.042 3.789-3.744 9.895-3.706 13.639.083"></path><path fill="#3A7CEB" d="M6.193 57.533a60 60 0 0 0 5.417 4.86A59.5 59.5 0 0 0 27.405 71.4a60 60 0 0 0 16.108 3.708c16.933 1.498 34.39-4.179 47.43-17.062 12.18-12.033 18.046-27.963 17.723-43.828-.717-3.94-2.305-3.43-2.251-5.464.377.306 2.068 1.938 3.308 3.711 15.53 23.394 12.873 55.25-7.853 75.728-19 18.77-47.373 22.244-69.843 10.516a59.9 59.9 0 0 1-14.907-11.03 60.4 60.4 0 0 1-5.6-6.538 59.5 59.5 0 0 1-9.67-20.083A60 60 0 0 1 0 50.178a60 60 0 0 0 6.193 7.355"></path></g></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};

import { defineComponent as s, computed as o, openBlock as a, createElementBlock as i, normalizeStyle as p, createStaticVNode as h } from "vue";
const n = /* @__PURE__ */ s({
  __name: "LogoSupabase",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const l = e, c = o(() => ({
      width: l.width || "1em",
      height: l.height || "1em",
      minWidth: l.width || "1em",
      minHeight: l.height || "1em"
    }));
    return (r, t) => (a(), i("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "99",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 99",
      style: p(c.value)
    }, t[0] || (t[0] = [
      h('<defs><linearGradient id="supabase-gui-asset-a" x1="20.862%" x2="63.426%" y1="20.687%" y2="44.071%"><stop offset="0%" stop-color="#249361"></stop><stop offset="100%" stop-color="#3ECF8E"></stop></linearGradient><linearGradient id="supabase-gui-asset-b" x1="1.991%" x2="21.403%" y1="-13.158%" y2="34.708%"><stop offset="0%" stop-color="#000"></stop><stop offset="100%" stop-color="#000" stop-opacity="0"></stop></linearGradient></defs><g><path fill="#1F1F1F" d="M253.816 26.412c12.69 0 20.004 9.705 20.004 22.587 0 13.146-8.195 22.852-20.444 22.852-5.863 0-10.208-2.28-12.373-5.105l-.142-.19v21h-11.72V27.382h11.368v5.294c1.94-3.353 6.786-6.264 13.307-6.264m-102.928-.353c8.582 0 13.199 3.8 15.392 7.687l.199.365.184.364q.09.183.171.364l.158.362.144.36.132.357.061.177.113.351.102.347.089.341.04.169.072.332.061.326.05.317.04.31-9.782 2.205c-.353-2.558-2.203-5.823-7.138-5.823-3.085 0-5.552 1.853-5.552 4.323 0 2.052 1.489 3.358 3.745 3.839l.22.044 6.17 1.323c8.547 1.765 12.866 6.97 12.866 13.323 0 7.058-5.465 14.293-16.832 14.293-8.56 0-13.438-3.648-15.929-7.552l-.23-.372a15 15 0 0 1-.216-.374l-.202-.373q-.147-.28-.277-.56l-.169-.371a15 15 0 0 1-.155-.37l-.142-.366-.13-.364-.06-.18-.112-.357-.1-.352-.087-.347-.076-.34-.065-.334-.055-.326-.043-.317-.018-.156 10.046-2.206c.264 3.441 2.82 6.618 7.931 6.618 3.878 0 5.729-2.03 5.729-4.324 0-1.887-1.25-3.44-4.396-4.174l-.275-.06-5.728-1.324c-8.372-1.853-12.161-6.882-12.161-12.97 0-7.764 6.873-14.205 16.215-14.205m294.843 0c8.449 0 13.054 3.682 15.288 7.505l.205.365q.298.547.534 1.091l.151.361.138.359q.099.267.184.531l.107.35.049.172.09.341.04.169.072.332.031.164.056.321.024.158.04.31-9.781 2.205-.048-.298a7 7 0 0 0-.18-.764l-.099-.31c-.76-2.219-2.731-4.45-6.813-4.45-3.085 0-5.551 1.852-5.551 4.322 0 2.052 1.487 3.358 3.743 3.839l.22.044 6.17 1.323c8.549 1.765 12.866 6.97 12.866 13.323 0 7.058-5.463 14.293-16.832 14.293-8.423 0-13.28-3.533-15.807-7.366l-.238-.372-.223-.373-.209-.374-.195-.373a15 15 0 0 1-.267-.559l-.162-.37-.148-.369-.07-.182-.13-.364-.117-.36-.106-.354-.048-.175-.088-.347-.076-.34-.065-.334-.054-.326-.044-.317-.017-.156 10.046-2.206c.265 3.441 2.82 6.618 7.931 6.618 3.878 0 5.728-2.03 5.728-4.324 0-1.887-1.249-3.44-4.396-4.174l-.274-.06-5.729-1.324c-8.373-1.853-12.16-6.882-12.16-12.97 0-7.764 6.872-14.205 16.214-14.205m44.855 0c13.396 0 21.414 8.558 21.414 22.499l-.007.604-.018.595-.027.567-.062.984-.06.838-.002.03h-31.019c.263 5.734 5.11 9.88 10.927 9.88 5.354 0 8.34-2.626 9.784-6.385l.087-.231 9.781 2.911c-2.203 7.5-9.078 13.764-19.74 13.764-11.898 0-22.385-8.558-22.385-23.204 0-13.853 10.224-22.852 21.327-22.852m-190.652 0c13.06 0 18.326 7.007 18.82 15.197l.024.519q.01.26.013.521l.001.262.002 21.67.012.658.024.683.034.695.02.349.047.693.054.68.06.654.064.618.068.572.07.515.037.233.036.214h-10.751c-.203-.877-.354-2.477-.413-3.93l-.021-.658q-.007-.321-.007-.618c-2.203 3.441-6.345 6.441-12.777 6.441-9.254 0-14.893-6.264-14.893-13.058 0-7.654 5.565-11.964 12.645-13.1l.31-.047 10.662-1.588c2.468-.353 3.26-1.588 3.26-3.088 0-3.088-2.379-5.647-7.315-5.647-5.015 0-7.825 3.145-8.26 6.849l-.023.21-10.398-2.206c.704-6.794 6.961-14.293 18.595-14.293m101.464 0c13.06 0 18.327 7.007 18.821 15.197l.025.519q.009.26.012.521l.002.262.002 21.67.012.658.024.683.016.347.038.697.023.348.05.688.057.668.063.637.032.304.068.572q.052.41.107.748l.035.214h-10.75c-.14-.608-.256-1.561-.333-2.573l-.047-.68-.018-.34-.028-.67c-.01-.33-.016-.647-.016-.943-2.202 3.441-6.345 6.441-12.777 6.441-9.254 0-14.893-6.264-14.893-13.058 0-7.654 5.566-11.964 12.646-13.1l.309-.047 10.662-1.588c2.468-.353 3.261-1.588 3.261-3.088 0-3.088-2.379-5.647-7.315-5.647-5.016 0-7.825 3.145-8.262 6.849l-.022.21-10.398-2.206c.705-6.794 6.962-14.293 18.594-14.293m-212.614 1.323V52.44c0 4.852 2.468 8.735 7.932 8.735 5.11 0 8.091-3.409 8.192-8.3l.003-.259V27.382h11.721V62.94q0 .373.005.739l.012.724.019.707.025.688.047.987.037.625.06.88.066.804.087.937.064.589.02.173H205.88l-.028-.149-.055-.35a18 18 0 0 1-.053-.41l-.05-.463-.023-.247-.043-.522-.037-.548-.03-.565-.011-.286-.016-.572q-.006-.286-.006-.565c-2.379 4.06-7.404 5.824-11.986 5.824-10.374 0-16.35-7.512-16.477-16.813l-.002-.304v-27.44zm153.367-20.47v25.235c1.938-3.088 6.697-5.912 13.13-5.912 12.69 0 20.006 9.794 20.006 22.676 0 13.146-8.107 22.94-20.446 22.94-5.869 0-10.384-2.538-12.72-6.123l-.146-.23v5.294h-11.369V6.912zm-34.816 46.322v-1.941l-9.781 1.5c-2.998.44-5.377 2.117-5.377 5.47 0 2.559 1.852 5.03 5.64 5.03 4.864 0 9.386-2.314 9.516-9.729zm101.466 0v-1.941l-9.782 1.5c-2.997.44-5.376 2.117-5.376 5.47 0 2.559 1.851 5.03 5.641 5.03 4.863 0 9.384-2.314 9.514-9.729zM251.524 36.91c-5.991 0-10.838 4.5-10.838 12.176s4.847 12.264 10.838 12.264c5.993 0 10.751-4.5 10.751-12.264 0-7.676-4.758-12.176-10.75-12.176m101.29-.176c-5.904 0-10.839 4.323-10.839 12.264 0 7.852 4.935 12.352 10.839 12.352 5.993 0 10.75-4.411 10.75-12.352s-4.757-12.264-10.75-12.264m137.948-1.147c-5.977 0-9.315 4.434-9.678 8.356l-.016.202h19.389c-.177-4.323-2.998-8.558-9.695-8.558"></path><g><path fill="url(#supabase-gui-asset-a)" d="M56.175 97.096c-2.522 3.177-7.636 1.436-7.697-2.62l-.889-59.323h39.889c7.225 0 11.254 8.345 6.762 14.004z"></path><path fill="url(#supabase-gui-asset-b)" fill-opacity=".2" d="M56.175 97.096c-2.522 3.177-7.636 1.436-7.697-2.62l-.889-59.323h39.889c7.225 0 11.254 8.345 6.762 14.004z"></path><path fill="#3ECF8E" d="M39.953 1.64C42.475-1.535 47.59.205 47.65 4.26l.39 59.323H8.65c-7.225 0-11.254-8.344-6.762-14.003z"></path></g></g>', 2)
    ]), 4));
  }
});
export {
  n as _
};

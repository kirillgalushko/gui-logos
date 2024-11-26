import { defineComponent as p, computed as h, openBlock as i, createElementBlock as l, normalizeStyle as a, createStaticVNode as r } from "vue";
const m = /* @__PURE__ */ p({
  __name: "LogoAngular2",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, s = h(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (q, o) => (i(), l("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "125",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 125",
      style: a(s.value)
    }, o[0] || (o[0] = [
      r('<defs><linearGradient id="angular-2-gui-asset-a" x1="0%" x2="100%" y1="48.065%" y2="50.391%"><stop offset="0%" stop-color="#E847A3"></stop><stop offset="25.687%" stop-color="#DA5AF7"></stop><stop offset="33.759%" stop-color="#DD57F6"></stop><stop offset="56.442%" stop-color="#B848F4"></stop><stop offset="100%" stop-color="#8842F6"></stop></linearGradient><linearGradient id="angular-2-gui-asset-b" x1="36.615%" x2="33.292%" y1="41.656%" y2="100%"><stop offset="0%" stop-color="#E03440" stop-opacity=".2"></stop><stop offset="28.023%" stop-color="#E03440" stop-opacity=".62"></stop><stop offset="100%" stop-color="#E03440"></stop></linearGradient></defs><g><path fill="url(#angular-2-gui-asset-a)" d="m116.028 20.477-4.19 65.79L71.78 0zm-27.745 85.07-30.269 17.271-30.268-17.27 6.156-14.92h48.224zm-30.269-72.8 15.861 38.56H42.153zM4.147 86.267 0 20.477 44.248 0zM476.37 99.91V37.437h14.277v10.412h.65q1.709-5.409 5.878-8.358t9.537-2.949q1.221 0 2.746.102t2.542.305v13.544q-.935-.325-2.949-.59a30 30 0 0 0-3.884-.265q-4.026 0-7.22 1.73-3.194 1.728-5.023 4.778-1.83 3.051-1.83 7.037V99.91zm-29.917-63.287q4.515 0 8.99 1.058 4.473 1.058 8.174 3.477 3.7 2.42 5.96 6.57 2.256 4.148 2.256 10.37V99.91H457.68v-8.582h-.488q-1.343 2.604-3.762 4.861-2.42 2.258-6.06 3.62t-8.522 1.362q-5.938 0-10.677-2.135t-7.483-6.325q-2.745-4.188-2.745-10.33 0-5.287 1.951-8.745a15.1 15.1 0 0 1 5.329-5.532q3.376-2.074 7.626-3.152a63 63 0 0 1 8.806-1.566l1.832-.193 2.123-.234q2.703-.306 4.715-.578l.238-.032q3.416-.467 4.982-1.464 1.565-.996 1.566-3.112v-.244q-.001-4.596-2.725-7.117-2.726-2.523-7.85-2.523-5.41 0-8.562 2.36t-4.25 5.572l-13.747-1.952q1.625-5.694 5.368-9.538 3.742-3.844 9.152-5.776 5.407-1.931 11.957-1.932m10.697 33.515q-.691.57-2.338 1.057a35 35 0 0 1-3.681.854q-1.627.294-3.228.534l-1.102.16-3.154.445q-3.294.448-5.898 1.465t-4.108 2.827-1.505 4.657q0 4.066 2.969 6.141 2.97 2.074 7.566 2.074 4.432 0 7.687-1.769 3.254-1.77 5.023-4.697 1.77-2.929 1.77-6.386zM400.752 99.91h14.724V16.612h-14.724zm-19.545-26.274V37.437h14.723V99.91h-14.276V88.807h-.651q-2.115 5.247-6.935 8.582t-11.856 3.335q-6.141 0-10.84-2.746t-7.34-8.012q-2.645-5.267-2.644-12.75v-39.78h14.723v37.5q0 5.94 3.254 9.437t8.541 3.497q3.253 0 6.305-1.586 3.05-1.586 5.023-4.738 1.912-3.058 1.97-7.624zm-77.912-37.013q5.49 0 9.05 1.85 3.558 1.852 5.674 4.434 2.114 2.584 3.213 4.86h.813v-10.33h14.52v63.49q0 8.013-3.823 13.26t-10.453 7.85-15.048 2.603q-7.933 0-13.626-2.135-5.695-2.137-9.152-5.715-3.456-3.58-4.799-7.932l13.26-3.213q.893 1.83 2.603 3.641 1.708 1.81 4.616 3.01 2.909 1.2 7.341 1.2 6.264 0 10.372-3.03 4.108-3.031 4.108-9.945V88.685h-.732q-1.14 2.277-3.315 4.677-2.177 2.4-5.735 4.027-3.56 1.627-8.928 1.627-7.2 0-13.035-3.397-5.838-3.395-9.274-10.167-3.437-6.772-3.437-16.982 0-10.29 3.437-17.387t9.294-10.779 13.056-3.681m4.067 12.08q-4.921 0-8.216 2.563-3.294 2.562-4.961 7.016-1.669 4.453-1.668 10.107 0 5.735 1.688 10.026t5.002 6.67 8.155 2.38q4.677 0 7.972-2.278t5.003-6.548q1.708-4.272 1.708-10.25 0-5.897-1.687-10.33-1.689-4.434-4.962-6.895-3.274-2.46-8.034-2.46m-72.668 14.602V99.91h-14.723V37.437h14.074v10.615h.731q2.155-5.246 6.894-8.337 4.738-3.091 11.735-3.092 6.466 0 11.287 2.766 4.818 2.766 7.483 8.012 2.598 5.12 2.624 12.368V99.91h-14.724v-37.5q0-6.263-3.234-9.802t-8.927-3.539q-3.863 0-6.854 1.688-2.99 1.689-4.677 4.86-1.632 3.068-1.687 7.388zM189.44 16.612l29.365 83.298h-16.106l-6.901-20.54H164.48l-6.888 20.54h-16.107l29.325-83.298zm-8.988 17.083h-.652L168.545 67.25h23.18z"></path><path fill="url(#angular-2-gui-asset-b)" d="m88.283 105.548-30.269 17.27-30.268-17.27 6.156-14.92h48.224zM58.014 32.746l15.861 38.56H42.153zM4.147 86.267 0 20.477 44.248 0z"></path></g>', 2)
    ]), 4));
  }
});
export {
  m as _
};

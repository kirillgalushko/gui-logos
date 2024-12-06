import { defineComponent as h, computed as i, openBlock as o, createElementBlock as p, normalizeStyle as m, createStaticVNode as s } from "vue";
const n = /* @__PURE__ */ h({
  __name: "LogoTor",
  props: {
    width: {},
    height: {}
  },
  setup(e) {
    const t = e, l = i(() => ({
      width: t.width || "1em",
      height: t.height || "1em",
      minWidth: t.width || "1em",
      minHeight: t.height || "1em"
    }));
    return (a, c) => (o(), p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "800",
      height: "800",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 -101 512 512",
      style: m(l.value)
    }, c[0] || (c[0] = [
      s('<g><path fill="#68B044" d="m288.436 23.102-8.153 32.615c11.55-23.102 30.236-40.429 51.64-55.717-15.628 18.006-29.897 36.012-38.39 54.358 14.608-20.724 34.313-31.935 56.395-39.75-29.557 26.16-52.998 54.698-70.665 82.896l-14.269-6.115c2.379-22.762 10.872-45.864 23.442-68.287"></path><path fill="#F5F8DE" d="m250.725 85.274 26.84 11.211c0 6.795-.68 27.859 3.737 33.974 44.845 57.755 37.37 173.945-9.173 176.663-70.665 0-97.844-47.903-97.844-92.069 0-40.428 48.242-66.928 77.12-90.71 7.814-6.454 6.455-20.723-.68-39.07"></path><path fill="#7E4798" d="m277.565 96.145 9.852 5.096c-1.02 6.455.34 20.724 6.795 24.122 28.538 17.666 55.037 36.691 65.569 56.056 37.37 67.608-26.16 130.459-81.537 124.344 29.897-22.083 38.73-67.608 27.519-117.549-4.417-19.365-11.551-37.031-24.122-57.076-5.435-9.173-3.397-21.403-4.076-34.993"></path><path fill="#010101" d="m248.687 78.818 44.506 18.346c-6.116 19.705 11.55 33.634 17.326 36.691 12.91 7.135 25.14 14.609 34.993 23.442 18.685 16.987 29.217 40.769 29.217 65.57s-11.211 48.921-30.576 64.889c-18.006 14.948-43.147 21.403-67.268 21.403-14.948 0-28.538-.68-43.146-5.435-33.634-11.212-58.435-39.75-60.473-74.063-2.039-26.5 4.076-46.884 24.8-68.287 10.532-11.211 32.275-24.121 47.224-34.313 7.474-4.757 15.288-19.026.34-45.865zm3.397 7.135c1.7 2.378 5.776 12.57 6.795 15.627 2.039 8.494 1.02 16.647-.68 20.385-9.172 16.986-25.48 21.743-37.03 31.255-2.28 1.869-4.58 3.692-6.866 5.52l-1.245.997c-18.024 14.478-34.727 29.77-32.658 70.264 1.359 22.762 19.025 50.96 45.864 63.87 5.111 2.499 10.45 4.466 15.952 6.016-6.567-2.893-12.163-6.487-16.631-11.45 0-.34-1.699-1.7-1.699-1.7-9.512-10.871-21.403-29.217-25.48-46.543-1.699-6.795-3.058-12.23-1.02-19.365 7.112-25.351 21.818-36.917 37.209-47.498l1.015-.697.509-.347 1.527-1.04 1.528-1.04c3.738-2.377 8.494-4.755 12.23-7.813 6.17-4.023 9.798-14.822 12.89-25.543l.308-1.072c.714-2.499 1.403-4.98 2.091-7.359-2.038 10.532-4.417 29.557-13.59 36.692-3.736 2.718-7.813 5.436-11.89 8.154l-1.497 1.007c-16.12 10.85-31.682 21.54-38.932 47.575-1.698 5.775-.34 11.89 1.02 17.666 4.076 16.647 15.627 34.314 24.8 44.845 0 .14.288.453.627.796l.297.298c.399.4.775.785.775.945 6.57 7.765 9.202 10.804 29.128 15.81-4.881-1.99-9.557-4.352-12.82-6.637-16.308-11.212-24.462-25.14-25.82-45.865-1.02-16.307 8.832-32.954 28.197-43.146 13.25-7.135 17.327-17.667 21.404-30.577-3.058 14.949-6.455 23.782-20.045 31.936-16.307 9.173-27.858 27.858-26.839 40.428 1.36 15.288 11.89 32.955 24.121 43.487 4.933 4.384 12.74 7.443 20.389 9.353-2.001-1.578-4.195-3.837-6.12-6.636-2.378-3.397-4.076-8.153-5.775-12.57-1.699-4.077-3.398-8.833-3.398-12.91 0-9.852 1.02-22.083 8.154-30.236 6.455-7.475 8.494-8.494 11.211-17.327-2.038 9.852-3.397 10.532-9.512 19.365-7.814 10.872-8.154 21.743-7.135 28.538.68 4.417 2.379 8.493 3.737 11.89 1.7 4.417 3.738 8.494 6.455 12.231 2.379 2.718 3.738 4.417 7.135 6.116 3.737-7.135 6.115-21.404 6.455-29.218.34-6.795.68-14.608-.34-22.422-1.359-10.532-4.416-20.724-4.756-28.878 1.699 7.474 5.436 18.006 7.474 28.198 1.699 8.154 2.038 15.968 1.359 22.083-.68 7.134-1.02 12.91-2.038 19.025-.935 4.674-3.3 9.063-7.092 13.69 8.598-5.482 13.581-15.211 15.925-26.26 3.057-13.59 3.397-26.5 3.397-33.294 0-4.836-1.7-12.007-3.586-19.164l-.335-1.263c-.392-1.471-.788-2.936-1.175-4.374-1.699-6.795-8.154-13.59-9.852-18.685-3.058-8.494-1.699-14.61-2.039-26.5 1.36 10.872 1.36 20.384 4.417 25.48 2.378 4.417 6.455 10.532 8.833 16.647 4.756 11.212 7.134 23.442 7.474 29.218.34 9.852-1.019 25.14-4.416 37.37-1.264 4.107-2.886 7.92-4.706 11.256 3.853-5.939 6.797-12.914 8.103-19.07q.332-1.553.654-3.117l.32-1.564c3.918-19.303 6.636-39.093 4.122-51.035-.68-3.058-1.699-13.25-5.775-24.121-5.776-15.968-14.27-28.878-15.289-31.935-3.243-8.432-4.01-28.936-4.368-41.125l-.007-.282c.103 3.001.306 6.28.584 9.622l.09 1.057q.093 1.06.195 2.122l.104 1.061q.026.266.054.53l.11 1.058c1.088 10.211 2.742 19.867 4.258 22.899 1.019 3.058 10.192 17.666 16.647 32.954 4.416 9.853 5.775 19.365 6.115 22.083 3.397 28.538.68 40.429-6.795 65.91-.903 3.125-2.132 6.108-3.56 8.88 4.297-5.513 7.461-11.427 8.656-16.355 7.135-31.596 9.853-72.364-.34-103.62-5.435-16.307-18.345-30.576-20.723-40.428-2.039-9.173-2.039-18.686-1.36-30.916l3.398 1.698c-1.699 3.737-.68 22.763 2.038 29.897 3.398 9.513 13.25 20.384 19.365 35.672 1.546 3.568 3.092 8.883 4.463 14.402l.233.948q.174.712.343 1.425l.224.95c2.145 9.18 3.713 18.07 3.91 19.646 3.398 28.538 1.699 55.377-6.794 78.14-4.015 10.538-12.478 20.15-18.68 24.593 16.508-2.228 39.26-10.665 52.993-21.876 17.666-14.609 27.179-37.031 27.179-59.794s-8.833-44.505-26.16-59.793c-9.852-8.833-25.82-19.705-36.012-25.48s-22.762-21.744-18.685-37.032Z"></path><path fill="#7E4798" d="M12.91 29.896h183.797c6.795 0 12.91 5.776 12.91 12.91v54.358c0 7.134-6.115 12.91-12.91 12.91h-37.71c-8.494 0-12.23 4.756-12.23 10.192v177.682c0 6.115-4.757 10.532-10.533 10.532H73.723c-5.776 0-10.192-4.417-10.192-10.532v-179.38c0-5.437-5.096-8.834-8.833-8.834H12.91C5.776 109.734 0 103.96 0 96.824V42.466c0-6.794 5.776-12.57 12.91-12.57m471.554 72.024h16.307c6.116 0 10.872 4.756 10.872 10.532v58.095c0 7.474.34 10.532-8.833 10.532-18.006 0-26.16 9.512-26.16 20.044v98.184c0 4.417-4.416 8.493-9.512 8.493h-58.435c-5.096 0-9.513-3.737-9.513-8.493V187.534c0-2.039 0-4.757.34-6.455 3.058-41.448 35.672-74.403 76.78-78.82 1.02 0 5.776-.339 8.154-.339"></path></g>', 1)
    ]), 4));
  }
});
export {
  n as _
};
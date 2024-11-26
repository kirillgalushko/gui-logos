import { defineComponent as i, computed as t, openBlock as e, createElementBlock as g, normalizeStyle as c, createStaticVNode as s } from "vue";
const h = /* @__PURE__ */ i({
  __name: "LogoRenovatebot",
  props: {
    width: {},
    height: {}
  },
  setup(n) {
    const o = n, p = t(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (y, l) => (e(), g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "256",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 256 256",
      style: c(p.value)
    }, l[0] || (l[0] = [
      s('<g><circle cx="128" cy="128" r="128" fill="#497C9B"></circle><path fill="#E8FEFF" d="m178.208 70.861 14.61 14.609c4.87 4.869 4.87 11.826 0 16.695l-38.957 39.653a3.477 3.477 0 0 0-.233 4.606l7.984 9.05 1.105-1.104c4.174-4.174 11.131-4.174 15.305 0l32.695 32c4.174 4.87 4.174 11.826 0 16l-5.565 5.565c-2.087 2.087-4.869 2.782-7.652 2.782s-5.565-.695-7.652-2.782l-32.696-32.696c-3.667-3.667-4.112-9.482-1.335-13.67l-8.217-9.317c-4.599-4.615-4.599-12.08 0-16.695L186.556 96.6c1.392-1.391 1.392-4.174 0-4.869l-13.913-14.609a3.477 3.477 0 0 0-4.869 0l-6.26-6.261c4.614-4.599 12.08-4.599 16.694 0m-7.261 86.992-.577-.005c-.696 0-2.087 0-2.783 1.391l-5.565 4.87c-1.392 2.087-1.392 4.87 0 6.261l32.695 32.695a4.173 4.173 0 0 0 6.261 0l4.87-5.565c2.087-1.39 2.087-4.174 0-6.26l-32-32c-1.185-1.186-1.866-1.361-2.901-1.387"></path><path fill="#77B3B2" d="m156.566 72.446 8.999 8.945c2.783 2.783 2.783 7.653 0 11.131l-70.261 70.261c-2.782 2.782-7.652 2.782-10.434 0l-9.695-9.641c-2.783-2.783-2.783-7.652 0-10.435l70.26-70.261c3.479-3.478 8.349-3.478 11.13 0"></path><polygon fill="#77B3B2" points="107.282194 53.5447778 119.803194 41.0227778 132.325194 53.5447778 119.803194 66.0667778"></polygon><polygon fill="#77B3B2" points="44.6731944 115.457778 57.1951944 102.935778 69.7161944 115.457778 57.1951944 127.979778"></polygon><polygon fill="#77B3B2" points="69.0211944 90.4147778 81.5421944 77.8927778 94.0641944 90.4147778 81.5421944 102.935778"></polygon><polygon fill="#73A9AE" points="94.0641944 90.4147778 106.586194 77.8927778 119.108194 90.4147778 106.586194 102.935778"></polygon><polygon fill="#73A9AE" points="69.7161944 115.457778 82.2381944 102.935778 94.7601944 115.457778 82.2381944 127.979778"></polygon><polygon fill="#F0F9FE" points="81.5421944 102.935778 94.0641944 90.4147778 106.586194 102.935778 94.0641944 115.457778"></polygon><polygon fill="#F0F9FE" points="119.108194 65.3707778 131.629194 52.8487778 144.151194 65.3707778 131.629194 77.8927778"></polygon><polygon fill="#F0F9FE" points="57.1951944 127.979778 69.7161944 115.457778 82.2381944 127.979778 69.7161944 140.501778"></polygon><polygon fill="#77B3B2" points="94.0641944 65.3707778 106.586194 52.8487778 119.108194 65.3707778 106.586194 77.8927778"></polygon><polygon fill="#77B3B2" points="56.4991944 77.8927778 69.0211944 66.0667778 81.5421944 77.8927778 69.0211944 90.4147778"></polygon><polygon fill="#77B3B2" points="94.7601944 41.0227778 107.282194 28.5007778 119.803194 41.0227778 107.282194 53.5447778"></polygon><polygon fill="#77B3B2" points="19.6291944 90.4147778 32.1511944 77.8927778 44.6731944 90.4147778 32.1511944 102.935778"></polygon><polygon fill="#77B3B2" points="57.1951944 53.5447778 69.7161944 41.0227778 82.2381944 53.5447778 69.7161944 66.0667778"></polygon></g>', 1)
    ]), 4));
  }
});
export {
  h as _
};

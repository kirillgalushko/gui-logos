import { defineComponent as i, computed as t, openBlock as g, createElementBlock as s, normalizeStyle as e, createStaticVNode as y } from "vue";
const h = /* @__PURE__ */ i({
  __name: "LogoFfmpeg",
  props: {
    width: {},
    height: {}
  },
  setup(p) {
    const o = p, n = t(() => ({
      width: o.width || "1em",
      height: o.height || "1em",
      minWidth: o.width || "1em",
      minHeight: o.height || "1em"
    }));
    return (c, l) => (g(), s("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "512",
      height: "138",
      preserveAspectRatio: "xMidYMid",
      version: "1.1",
      viewBox: "0 0 512 138",
      style: e(n.value)
    }, l[0] || (l[0] = [
      y('<defs><radialGradient id="ffmpeg-gui-asset-a" cx="19.932%" cy="18.852%" r="50.648%" fx="19.932%" fy="18.852%" gradientTransform="matrix(.96523 0 0 1 .007 0)"><stop offset="0%" stop-color="#FFF"></stop><stop offset="100%" stop-color="#007808"></stop></radialGradient></defs><g><g><polygon fill="#0B4819" points="1.16569383 28.2047721 1.16569383 11.5839399 12.3230491 15.427764 12.3230491 30.889746"></polygon><polygon fill="#0B4819" points="10.1627515 96.5335929 10.1627515 34.7335701 20.8273673 36.9896781 20.8273673 94.4257629"></polygon><polygon fill="#105C80" points="62.3246991 11.5565655 34.9160662 42.9915186 34.9160662 56.3684826 75.5670723 10.5323061 139.953977 5.54788142 45.2453454 104.264584 57.8535446 104.928413 126.643168 34.5693236 126.643168 101.068621 119.001144 108.252124 138.38223 109.299195 138.38223 127.703927 77.5882166 122.995527 108.578335 92.9315761 108.578335 78.1151741 64.2728449 121.964424 11.2212289 117.862824 96.3168787 26.3478743 82.3125843 27.1052331 20.8273673 94.4257629 20.8273673 36.9896781 26.6512741 30.1141376 12.3230491 30.889746 12.3230491 15.427764"></polygon><polygon fill="#0B4819" points="10.1627515 34.7335701 16.3311197 27.30826 26.6512741 30.1141376 20.8273673 36.9896781"></polygon><polygon fill="#084010" points="25.1023384 41.1505892 34.9160662 42.9915186 34.9160662 56.3684826 25.1023384 55.5654998"></polygon><polygon fill="#0C541E" points="36.0886036 107.230145 45.2453454 104.264584 57.8535446 104.928413 49.5340037 108.005754"></polygon><polygon fill="#1A5C34" points="54.3108391 7.08541105 62.3246991 11.5565655 34.9160662 42.9915186 25.1023384 41.1505892"></polygon><polygon fill="#0B4819" points="25.1023384 55.5654998 68.4862236 5.8854992 75.5670723 10.5323061 34.9160662 56.3684826"></polygon><polygon fill="#1A5C34" points="75.7244752 23.7974913 82.3125843 27.1052331 20.8273673 94.4257629 10.1627515 96.5335929"></polygon><polygon fill="#0B4819" points="0 121.688399 90.7872469 22.9078229 96.3168787 26.3478743 11.2212289 117.862824"></polygon><polygon fill="#1A5C34" points="104.015933 79.1052154 108.578335 78.1151741 64.2728449 121.964424 56.3935759 126.462953"></polygon><polygon fill="#0B4819" points="104.015933 95.2104961 104.015933 79.1052154 108.578335 78.1151741 108.578335 92.9315761"></polygon><polygon fill="#0B4819" points="70.655646 127.667427 104.015933 95.2104961 108.578335 92.9315761 77.5882166 122.995527"></polygon><polygon fill="#13802D" points="123.568109 104.132274 115.287348 111.913452 119.001144 108.252124 126.643168 101.068621"></polygon><polygon fill="#0B4819" points="49.5340037 108.005754 123.568109 31.7086972 126.643168 34.5693236 57.8535446 104.928413"></polygon><polygon fill="#084010" points="123.568109 31.7086972 126.643168 34.5693236 126.643168 101.068621 123.568109 104.132274"></polygon><polygon fill="#084010" points="136.322305 113.156706 138.38223 109.299195 138.38223 127.703927 136.322305 133.228996"></polygon><polygon fill="#1A5C34" points="138.028643 0 139.953977 5.54788142 45.2453454 104.264584 36.0886036 107.230145"></polygon><polygon fill="url(#ffmpeg-gui-asset-a)" points="54.3108391 7.08541105 25.1023384 41.1505892 25.1023384 55.5654998 68.4862236 5.8854992 138.028643 0 36.0886036 107.230145 49.5340037 108.005754 123.568109 31.7086972 123.568109 104.132274 115.287348 111.913452 136.322305 113.156706 136.322305 133.228996 70.655646 127.667427 104.015933 95.2104961 104.015933 79.1052154 56.3935759 126.462953 0 121.688399 90.7872469 22.9078229 75.7244752 23.7974913 10.1627515 96.5335929 10.1627515 34.7335701 16.3311197 27.30826 1.16569383 28.2047721 1.16569383 11.5839399"></polygon></g><path fill="#000" d="M177.032 67.732h23.382v14.633h-23.382v32.571H164.44v.006-78.678h44.287v14.687h-31.695zm49.073 0h23.387v14.633h-23.387v32.571h-12.586v.006-78.678h44.286v14.687h-31.7zm51.083 13.642v33.568h-14.686V64.014l14.686-1.576v4.667c3.289-3.085 7.484-4.613 12.586-4.613q9.965 0 15.212 6.034c3.85-4.023 9.614-6.034 17.306-6.034q9.965 0 15.212 6.034c3.497 4.028 5.246 8.653 5.246 13.898v32.518h-14.687V86.094q0-5.245-2.363-8.128c-1.576-1.915-4.124-2.93-7.657-3.043q-4.35.312-7.555 5.77a21 21 0 0 0-.262 3.313v30.948h-14.687V86.106q0-5.245-2.363-8.128c-1.576-1.915-4.112-2.936-7.645-3.05q-4.824.306-8.343 6.446m72.944 55.595V64.014l14.686-1.576v4.196c3.915-2.805 7.764-4.196 11.542-4.196 8.044 0 14.424 2.614 19.144 7.86 4.72 5.252 7.084 11.362 7.084 18.357s-2.363 13.11-7.084 18.356q-7.079 7.867-19.144 7.866c-5.246-.358-9.089-1.767-11.542-4.25v26.384zm14.686-53.023v8.504c.699 5.866 4.369 9.322 11.017 10.324 8.39-.662 13.11-5.019 14.161-13.057-.352-9.8-5.072-14.86-14.161-15.218q-9.97 1.576-11.017 9.447m40.103 4.768c0-7.692 2.447-13.994 7.34-18.882q7.343-7.34 18.882-7.34 11.538 0 18.357 7.34c4.548 4.888 6.821 11.19 6.821 18.882v5.246h-36.188q.528 4.197 3.67 6.558c2.095 1.576 4.548 2.364 7.34 2.364 4.894 0 9.268-1.39 13.112-4.19l8.39 8.385c-3.85 5.246-11.016 7.865-21.508 7.865q-11.54 0-18.881-7.34c-4.894-4.893-7.335-11.19-7.335-18.888m33.569-11.798q-3.151-2.363-7.34-2.363c-2.793 0-5.246.788-7.34 2.363q-3.145 2.362-3.146 6.559h20.983c-.012-2.8-1.063-4.983-3.157-6.559M512 64.068v46.68c0 7.34-2.184 13.48-6.559 18.41-4.374 4.929-9.876 7.537-16.524 7.823l-3.145.316c-10.14-.208-18.01-3.109-23.602-8.706l6.82-7.866c3.85 2.805 8.517 4.369 14.007 4.72q8.397-.001 11.35-3.932c1.982-2.614 2.966-5.508 2.966-8.647v-2.62q-5.873 4.719-13.636 4.72c-8.044 0-14.072-2.363-18.094-7.083q-6.033-7.079-6.033-19.145c0-7.692 2.184-13.994 6.558-18.882 4.375-4.893 10.575-7.34 18.62-7.34 5.943.358 10.139 1.94 12.585 4.774v-4.774zm-14.687 29.367v-8.498c-.698-5.867-4.368-9.322-11.016-10.324q-13.114.472-14.161 13.057c.352 9.799 5.072 14.86 14.161 15.218q9.97-1.586 11.016-9.453"></path></g>', 2)
    ]), 4));
  }
});
export {
  h as _
};

export type Device = "ios" | "Android" | "Mobile" | "iPad" | "PC";

export const classifyDevice = (): Device | undefined => {
  const navigatorObj = typeof navigator === "undefined" ? undefined : navigator;
  const windowObj = typeof window === "undefined" ? undefined : window;

  if (!navigatorObj || !windowObj) {
    return undefined;
  }
  const ua = navigatorObj.userAgent;
  if (ua.indexOf("iPhone") > 0) {
    console.log("ios");
    return "ios";
  }
  if (ua.indexOf("Android") > 0) {
    console.log("Android");
    return "Android";
  }
  if (ua.indexOf("Mobile") > 0) {
    console.log("Mobile");
    return "Mobile";
  }
  if (ua.indexOf("iPad") > 0) {
    console.log("iPad");
    return "iPad";
  }
  console.log("PC");
  return "PC";
};

export const isMobile = () => {
  const device = classifyDevice()
  return device === 'Android' || device === 'Mobile' || device === 'ios'
}

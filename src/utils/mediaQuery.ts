const screenXXSmax = 480;
const screenSMmin = 768;
const screenMDmin = 992;
const screenLGmin = 1200;
const screenXSmax = screenSMmin - 1;
const screenSMmax = screenMDmin - 1;
const screenMDmax = screenLGmin - 1;

export enum Screen {
  portrait = screenXXSmax,
  phone = screenXSmax,
  mobile = screenSMmax,
  nondesktop = screenMDmax,
  tablet = screenSMmin,
  laptop = screenMDmin,
  desktop = screenLGmin,
}

export enum Orientation {
  landscape = "landscape",
  portrait = "portrait",
}

export enum Type {
  min = "min",
  max = "max",
}

interface MediaOptions {
  width: (type: Type, size: Screen) => MediaOptions;
  height: (type: Type, size: Screen) => MediaOptions;
  orientation: (orientation: Orientation) => MediaOptions;
  media: () => MediaOptions;
  screen: MediaOptions;
  portrait: MediaOptions;
  landscape: MediaOptions;
  and: MediaOptions;
  or: MediaOptions;
  join: string;
}

let result: string[] = [];

const query = {
  media() {
    result = ["@media"];
    return this;
  },

  screen() {
    result.push("screen");

    return this;
  },

  width(type: Type, width: Screen) {
    result.push(`(${type}-width: ${width}px)`);
    return this;
  },

  maxWidth(width: Screen) {
    result.push(`(max-width: ${width}px)`);
    return this;
  },

  minWidth(width: Screen) {
    result.push(`(min-width: ${width}px)`);
    return this;
  },

  height(type: Type, height: Screen) {
    result.push(`(${type}-height: ${height}px)`);
    return this;
  },

  maxHeight(height: Screen) {
    result.push(`(max-height: ${height}px)`);
    return this;
  },

  minHeight(height: Screen) {
    result.push(`(min-height: ${height}px)`);
    return this;
  },

  orientation(orientation: Orientation) {
    result.push(`(orientation: ${orientation})`);
    return this;
  },

  portrait() {
    result.push(`(orientation: ${Orientation.portrait})`);
    return this;
  },

  landscape() {
    result.push(`(orientation: ${Orientation.landscape})`);
    return this;
  },

  and() {
    result.push("and");

    return this;
  },

  or() {
    result.push(",");

    return this;
  },

  join() {
    return result.join(" ");
  },
};

export default query;

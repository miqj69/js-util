module.exports = class MathEx {
  constructor() {
  }
  degrees(radian) {
    return radian / Math.PI * 180;
  }
  radians(degree) {
    return degree * Math.PI / 180;
  }
  polar: function(radian1, radian2, radius) {
    return [
      Math.cos(radian1) * Math.cos(radian2) * r,
      Math.cos(radian1) * Math.sin(radian2) * r,
      Math.sin(radian1) * r,
    ];
  }
}
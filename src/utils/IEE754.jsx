function toIEEE754(value) {
  let float = new Float32Array(1);
  float[0] = parseFloat(value);
  let uint32 = new Uint32Array(float.buffer);

  let binaryString = uint32[0].toString(2).padStart(32, '0');
  return binaryString;
};

export default toIEEE754;
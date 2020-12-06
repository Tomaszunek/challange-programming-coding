const estimatePiValue = (intervals) => {
  const r = 5;
  let points_total = 0;
  let points_inside = 0;

  for (let i = 0; i < intervals; i++) {
    points_total++;

    let x = Math.random() * r * 2 - r;
    let y = Math.random() * r * 2 - r;

    if (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(r, 2)) points_inside++;
  }
  return (4 * points_inside) / points_total;
};
export { estimatePiValue };

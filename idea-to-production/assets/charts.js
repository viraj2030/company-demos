(() => {
  const esc = (value) => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  const barChart = (items, opts = {}) => {
    const width = opts.width || 340;
    const height = opts.height || 200;
    const padL = opts.padL || 36;
    const padR = 8;
    const padT = 16;
    const padB = 36;
    const innerW = width - padL - padR;
    const innerH = height - padT - padB;
    const max = Math.max(...items.map((i) => Number(i.value) || 0), 0.01);
    const gap = 6;
    const barW = Math.max(8, (innerW - gap * (items.length - 1)) / items.length);
    const bars = items.map((item, i) => {
      const v = Number(item.value) || 0;
      const h = (v / max) * innerH;
      const x = padL + i * (barW + gap);
      const y = padT + innerH - h;
      const selected = item.selected ? "true" : "false";
      const extra = Object.entries(item.attrs || {})
        .map(([k, val]) => `${esc(k)}="${esc(val)}"`)
        .join(" ");
      const fill = item.selected ? "var(--accent)" : "var(--accent-soft)";
      const stroke = item.selected ? "var(--accent)" : "var(--line)";
      return `
        <g data-testid="${esc(item.testid || "chart-bar")}" ${extra} data-value="${esc(item.value)}" data-selected="${selected}">
          <rect x="${x}" y="${y}" width="${barW}" height="${Math.max(h, 1)}" fill="${fill}" stroke="${stroke}" rx="4"></rect>
          <text x="${x + barW / 2}" y="${y - 4}" text-anchor="middle" font-size="10" fill="currentColor">${esc(item.valueLabel || item.value)}</text>
          <text x="${x + barW / 2}" y="${height - 8}" text-anchor="middle" font-size="9" fill="currentColor">${esc(item.label)}</text>
        </g>`;
    }).join("");
    const marker = opts.marker == null ? "" : `
      <line x1="${padL}" x2="${width - padR}" y1="${padT + innerH - (opts.marker / max) * innerH}" y2="${padT + innerH - (opts.marker / max) * innerH}" stroke="var(--warn)" stroke-dasharray="4 3"></line>
      <text x="${width - padR}" y="${padT + innerH - (opts.marker / max) * innerH - 4}" text-anchor="end" font-size="9" fill="var(--warn)">${esc(opts.markerLabel || opts.marker)}</text>`;
    return `<svg ${opts.testid ? `data-testid="${esc(opts.testid)}"` : ""} role="img" aria-label="${esc(opts.label || "Bar chart")}" viewBox="0 0 ${width} ${height}" width="100%" height="${height}">${bars}${marker}</svg>`;
  };

  const lineChart = (series, opts = {}) => {
    const width = opts.width || 340;
    const height = opts.height || 200;
    const padL = 28;
    const padR = 8;
    const padT = 12;
    const padB = 28;
    const xs = series.flatMap((s) => s.points.map((p) => p.x));
    const ys = series.flatMap((s) => s.points.map((p) => (p.y === "paid" ? 0 : Number(p.y) || 0)));
    const minX = Math.min(...xs);
    const maxX = Math.max(...xs);
    const maxY = Math.max(...ys, 1);
    const sx = (x) => padL + ((x - minX) / (maxX - minX || 1)) * (width - padL - padR);
    const sy = (y) => padT + (1 - (y / maxY)) * (height - padT - padB);
    const colors = ["var(--accent)", "var(--focus)", "var(--warn)", "var(--muted)"];
    const paths = series.map((s, i) => {
      const usable = s.points.filter((p) => p.y !== "paid");
      const d = usable.map((p, idx) => `${idx ? "L" : "M"}${sx(p.x)},${sy(Number(p.y) || 0)}`).join(" ");
      return `<path d="${d}" fill="none" stroke="${colors[i % colors.length]}" stroke-width="2"></path>`;
    }).join("");
    const labels = series.map((s, i) => `<text x="${padL + i * 80}" y="${height - 6}" font-size="9" fill="currentColor">${esc(s.label)}</text>`).join("");
    return `<svg ${opts.testid ? `data-testid="${esc(opts.testid)}"` : ""} role="img" aria-label="${esc(opts.label || "Line chart")}" viewBox="0 0 ${width} ${height}" width="100%" height="${height}">${paths}${labels}</svg>`;
  };

  const radarChart = (axes, opts = {}) => {
    const size = opts.size || 280;
    const cx = size / 2;
    const cy = size / 2 + 4;
    const r = size * 0.34;
    const n = axes.length;
    const rings = [0.25, 0.5, 0.75, 1].map((f) => {
      const pts = axes.map((_, i) => {
        const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
        return `${cx + Math.cos(a) * r * f},${cy + Math.sin(a) * r * f}`;
      }).join(" ");
      return `<polygon points="${pts}" fill="none" stroke="var(--line)"></polygon>`;
    }).join("");
    const spokes = axes.map((axis, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      const lx = cx + Math.cos(a) * (r + 22);
      const ly = cy + Math.sin(a) * (r + 18);
      return `
        <line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="var(--line)"></line>
        <text x="${lx}" y="${ly}" text-anchor="middle" font-size="9" fill="currentColor">${esc(axis.label || axis.skill)}</text>
        <g ${opts.axes ? `data-testid="mastery-axis" data-skill="${esc(axis.skill)}" data-earned="${esc(axis.earned)}" data-possible="${esc(axis.possible)}" data-score="${esc(axis.score)}"` : `data-skill="${esc(axis.skill)}"`}>
          <circle cx="${cx + Math.cos(a) * r * ((Number(axis.score) || 0) / 100)}" cy="${cy + Math.sin(a) * r * ((Number(axis.score) || 0) / 100)}" r="3" fill="var(--accent)"></circle>
        </g>`;
    }).join("");
    const poly = axes.map((axis, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      const f = (Number(axis.score) || 0) / 100;
      return `${cx + Math.cos(a) * r * f},${cy + Math.sin(a) * r * f}`;
    }).join(" ");
    return `<svg ${opts.testid ? `data-testid="${esc(opts.testid)}"` : ""} role="img" aria-label="${esc(opts.label || "Mastery radar")}" viewBox="0 0 ${size} ${size}" width="100%" height="${Math.min(size, 300)}">${rings}<polygon points="${poly}" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"></polygon>${spokes}</svg>`;
  };

  window.ITP_CHARTS = { barChart, lineChart, radarChart };
})();

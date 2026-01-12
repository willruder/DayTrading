// Chart rendering with Syncfusion (example)
async function loadStockData(symbol) {
  try {
    const res = await fetch(`/api/history?symbol=${symbol}&from=2025-01-01&to=2026-01-10`);
    const json = await res.json();
    return json.data || [];
  } catch (err) {
    console.error("Failed to load stock data:", err);
    return [];
  }
}

async function renderChart(symbol) {
  const data = await loadStockData(symbol);
  if (!data.length) return;

  const chartData = data.map(c => ({
    x: new Date(c.time),
    open: c.o,
    high: c.h,
    low: c.l,
    close: c.c
  }));

  const stockChart = new ej.charts.StockChart({
    series: [{
      dataSource: chartData,
      xName: "x",
      open: "open",
      high: "high",
      low: "low",
      close: "close",
      type: "Candle"
    }],
    title: `${symbol} Price Chart`,
  });

  stockChart.appendTo("#chartContainer");
}

document.addEventListener("DOMContentLoaded", () => {
  renderChart("AAPL"); // Default symbol
});

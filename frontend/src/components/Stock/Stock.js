import React from "react";
import TradingViewWidget from "react-tradingview-widget";

const StockWidget = () => {
  const stockSymbols = ["AAPL", "MSFT", "GOOGL"]; // Replace with the stock symbols you want to display

  return (
    <div className="flex flex-wrap justify-center bg-gray-100 p-4">
      {stockSymbols.map((symbol) => (
        <div
          key={symbol}
          className="w-full ml:auto mr:auto md:w-1/2 lg:w-1/3 p-4 px-3"
        >
          <TradingViewWidget
            symbol={symbol}
            interval="1D"
            style="1"
            locale="en"
          />
        </div>
      ))}
    </div>
  );
};

export default StockWidget;

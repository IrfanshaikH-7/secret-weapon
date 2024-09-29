export type Project = {
    projectname: string;
    description: string;
    images: string[];
  };
  
  
  
 export const tabsData:Record<string, Project[]> = {

    "ambi-broker" : [
      {
        projectname: "Multiple Targets and Partial Exit",
        description: "Experienced traders often employ setting multiple profit targets with partial exits, enabling them to secure profits at various stages while retaining a position for further gains. We specialize in offering customized solutions to seamlessly integrate this technique into your strategy , enhancing your ability to manage trades effectively and optimize profitability.",
        images: [
          "/portfolio/multipal-target.png",
          "/portfolio/trailing.png",
          "/portfolio/multiple-timefram.png",
          "/portfolio/pair-trading.png",
          "/portfolio/combination.png",
          "/portfolio/customizable-dashboard.png",
          
        ]
      },
      {
        projectname: "Trailing StopLoss",
        description: "Our Trailing Stop Loss module provides traders with a robust tool for managing risk in dynamic market conditions. Our specialized service ensures that clients can effectively use this module to protect their capital and enhance their overall trading performance. This innovative feature adapts to market movements, offering increased flexibility and peace of mind.",
        images: [
          "/portfolio/trailing.png",
          "/portfolio/multipal-target.png",
          "/portfolio/multiple-timefram.png",
          "/portfolio/pair-trading.png",
          "/portfolio/combination.png",
          "/portfolio/customizable-dashboard.png",
          
        ]
      },
      {
        projectname: "Multi Timeframe Analysis",
        description: "Our  service ensures that clients receive  effective solutions to integrate MTA into their trading strategies. By leveraging multiple timeframes, traders can enhance their decision-making process, optimize their trades, and achieve better overall performance. Contact us today to discover how our  services can elevate your trading strategy through Multi-Timeframe Analysis.",
        images: [
          "/portfolio/multiple-timefram.png",
          "/portfolio/trailing.png",
          "/portfolio/multipal-target.png",
          "/portfolio/pair-trading.png",
          "/portfolio/combination.png",
          "/portfolio/customizable-dashboard.png",
          
        ]
      },
      {
        projectname: "Pair Trading",
        description: "Pair trading is a market-neutral strategy profiting from the relative performance of two correlated assets. As Pine Script service providers, we offer customized solutions for implementing pair trading strategies. We ensure  integration of  techniques, allowing traders to capitalize on asset correlations while minimizing exposure to market. Contact us to explore  your trading strategy.",
        images: [
          "/portfolio/pair-trading.png",
          "/portfolio/multiple-timefram.png",
          "/portfolio/trailing.png",
          "/portfolio/multipal-target.png",
          "/portfolio/combination.png",
          "/portfolio/customizable-dashboard.png",
        ]
      },
      {
        projectname: "Combination Of Indicators",
        description: "Blending indicators enhances decision-making and comprehensive market analysis. We specialize in tailored solutions for leveraging multiple indicators. Our approach ensures effective strategy implementation and optimization, empowering traders with informed decisions. Contact us to explore how we can enhance your trading experience with our customized services.",
        images: [
          "/portfolio/combination.png",
          "/portfolio/pair-trading.png",
          "/portfolio/multiple-timefram.png",
          "/portfolio/trailing.png",
          "/portfolio/multipal-target.png",
          "/portfolio/customizable-dashboard.png",
        ]
      },
      {
        projectname: "Customizable Dashboard",
        description: "A personalized dashboard offers traders an efficient means to monitor essential metrics and make informed decisions. We specialize in crafting bespoke dashboards, tailored to your specific needs. Our solutions enhance your trading experience by providing a personalized and efficient toolset to track key indicators and make timely decisions that align with your trading strategy.",
        images: [
          "/portfolio/customizable-dashboard.png",
          "/portfolio/combination.png",
          "/portfolio/pair-trading.png",
          "/portfolio/multiple-timefram.png",
          "/portfolio/trailing.png",
          "/portfolio/multipal-target.png",
        ]
      }
    ],
    "trading-view" : [
        {
          projectname: "CandleStick Patterns",
          description: "Bullish and Bearish candle stick patterns at swing low and swing high usually predict the price movement. Traders use candlestick patterns to predict future price movements based on past behavior. These patterns can signal potential buying or selling opportunities, helping traders make correct decisions. ",
          images: [
            "/portfolio/temp.jpg",
            "/portfolio/port-multiple-target.jpg",
            "trailing-stoploss.jpg"
          ]
        },
        {
          projectname: "Demand and Supply Zones",
          description: "Demand refers to how many investors want to buy a stock, while supply is about how many are willing to sell it. Basically these zones focuses on identifying areas on a price chart where buying (demand) or selling (supply) is likely to occur, and  allows traders to make decisions about when to buy or sell stocks.",
          images: [
            "/portfolio/temp.jpg",
            "/portfolio/port-multiple-target.jpg",
            "trailing-stoploss.jpg"
          ]
        },
        {
          projectname: "Supertrend Pair Trading",
          description: "Supertrend is a Trend following indicator while in pair trading we can select two or more stocks with similar fundamentals such as Nifty and Bank nifty and taking profit from difference in price movements. Combining them leverages both trend-following and mean-reversion principles. ",
          images: [
            "/portfolio/temp.jpg",
            "/portfolio/port-multiple-target.jpg",
            "trailing-stoploss.jpg"
          ]
        },
        {
          projectname: "Fibonacci Retracement",
          description: "Fibonacci retracement is a tool used in trading to identify potential levels where a stock price might reverse its current trend. Fibonacci retracement levels, are derived from the Fibonacci sequence. By identifying these levels, traders can make more informed decisions about where to enter or exit trades.  ",
          images: [
            "/portfolio/temp.jpg",
            "/portfolio/port-multiple-target.jpg",
            "trailing-stoploss.jpg"
          ]
        },
        {
          projectname: "Bollinger Band",
          description: "Bollinger Bands are  plotted at a standard deviation level above and below a simple moving average of the price. It help traders understand market volatility and potential price reversals. By watching how the price interacts with the bands, traders can make decisions about when to buy or sell a stock.",
          images: [
            "/portfolio/temp.jpg",
            "/portfolio/port-multiple-target.jpg",
            "trailing-stoploss.jpg"
          ]
        },
        {
          projectname: "Anchored VWAP",
          description: "The Anchored VWAP  calculates the average price of a stock weighted by volume, starting from a specific point in time. Unlike the traditional VWAP,  the Anchored VWAP allows traders to select any starting point which helps traders identify key price levels that reflect the true average cost. ",
          images: [
            "/portfolio/temp.jpg",
            "/portfolio/port-multiple-target.jpg",
            "trailing-stoploss.jpg"
          ]
        }
      ],
  }
  
  
  
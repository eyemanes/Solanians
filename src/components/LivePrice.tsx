import { useState, useEffect } from "react";

interface TokenData {
  priceUsd: string;
  marketCap: number;
  priceChange24h: number;
  volume24h: number;
}

export function LivePrice() {
  const [tokenData, setTokenData] = useState<TokenData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokenData = async () => {
      try {
        const response = await fetch(
          'https://api.dexscreener.com/latest/dex/pairs/solana/cbffqcuzkmrnzwbi1gcvm3qwdn9igcsm2bznxbuyuads'
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        const pair = data.pairs?.[0];
        
        if (pair) {
          setTokenData({
            priceUsd: pair.priceUsd,
            marketCap: pair.marketCap,
            priceChange24h: pair.priceChange?.h24 || 0,
            volume24h: pair.volume?.h24 || 0,
          });
        } else {
          throw new Error('No pair data found');
        }
      } catch (err) {
        console.error('Error fetching token data:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchTokenData();
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchTokenData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: string) => {
    const num = parseFloat(price);
    if (num < 0.01) {
      return `$${num.toFixed(8)}`;
    } else if (num < 1) {
      return `$${num.toFixed(4)}`;
    } else {
      return `$${num.toFixed(2)}`;
    }
  };

  const formatMarketCap = (mcap: number) => {
    if (mcap >= 1e9) {
      return `$${(mcap / 1e9).toFixed(2)}B`;
    } else if (mcap >= 1e6) {
      return `$${(mcap / 1e6).toFixed(2)}M`;
    } else if (mcap >= 1e3) {
      return `$${(mcap / 1e3).toFixed(2)}K`;
    } else {
      return `$${mcap.toFixed(2)}`;
    }
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1e6) {
      return `$${(volume / 1e6).toFixed(1)}M`;
    } else if (volume >= 1e3) {
      return `$${(volume / 1e3).toFixed(1)}K`;
    } else {
      return `$${volume.toFixed(0)}`;
    }
  };

  if (loading) {
    return (
      <div className="glass-card p-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
          <span className="text-sm text-gray-400">Loading price data...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="glass-card p-4 max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-red-400">Failed to load price data</p>
          <p className="text-xs text-gray-500 mt-1">{error}</p>
        </div>
      </div>
    );
  }

  if (!tokenData) {
    return null;
  }

  const isPositive = tokenData.priceChange24h >= 0;

  return (
    <div className="glass-card p-3 max-w-3xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
        {/* Price */}
        <div className="space-y-0.5">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Price</p>
          <p className="text-base font-bold text-primary">
            {formatPrice(tokenData.priceUsd)}
          </p>
        </div>

        {/* Market Cap */}
        <div className="space-y-0.5">
          <p className="text-xs text-gray-400 uppercase tracking-wide">Market Cap</p>
          <p className="text-base font-bold text-secondary">
            {formatMarketCap(tokenData.marketCap)}
          </p>
        </div>

        {/* 24h Change */}
        <div className="space-y-0.5">
          <p className="text-xs text-gray-400 uppercase tracking-wide">24h Change</p>
          <p className={`text-base font-bold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? '+' : ''}{tokenData.priceChange24h.toFixed(2)}%
          </p>
        </div>

        {/* 24h Volume */}
        <div className="space-y-0.5">
          <p className="text-xs text-gray-400 uppercase tracking-wide">24h Volume</p>
          <p className="text-base font-bold text-gray-300">
            {formatVolume(tokenData.volume24h)}
          </p>
        </div>
      </div>
      
      {/* Live indicator */}
      <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-700/50">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </div>
          <span className="text-xs text-gray-400">Live data</span>
        </div>
        <span className="text-xs text-gray-500">•</span>
        <span className="text-xs text-gray-400">Updates every 30s</span>
      </div>
    </div>
  );
}

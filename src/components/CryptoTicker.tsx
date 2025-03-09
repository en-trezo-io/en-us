import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { motion } from 'framer-motion';

interface CryptoPrice {
  id: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoTicker: React.FC = () => {
  const { data: prices } = useQuery<CryptoPrice[]>(
    'cryptoPrices',
    () =>
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&sparkline=false')
        .then(res => res.json()),
    {
      refetchInterval: 30000,
    }
  );

  return (
    <div className="w-full bg-primary/10 overflow-hidden py-2">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex space-x-8 whitespace-nowrap"
      >
        {prices?.map((crypto) => (
          <div key={crypto.id} className="inline-flex items-center space-x-2">
            <span className="font-semibold">{crypto.symbol.toUpperCase()}</span>
            <span>${crypto.current_price.toLocaleString()}</span>
            <span className={crypto.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}>
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default CryptoTicker;
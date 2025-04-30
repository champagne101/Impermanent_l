import React, { useState, useEffect } from 'react';
import ConnectWallet from './components/ConnectWallet';
import PositionList from './components/PositionList';
import ExposureChart from './components/ExposureChart';
import { getUserPositions } from './utils/uniswap';
import './index.css';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);

  useEffect(() => {
    let interval;
    if (walletAddress) {
      const fetchPositions = async () => {
        const pos = await getUserPositions(walletAddress);
        setPositions(pos);
        if (pos.length > 0) setSelectedPosition(pos[0]);
      };
      fetchPositions();
      interval = setInterval(fetchPositions, 30000); // Refresh every 30 seconds
    }
    return () => clearInterval(interval);
  }, [walletAddress]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Uniswap V3 LP Dashboard</h1>
      <ConnectWallet setWalletAddress={setWalletAddress} />
      {walletAddress && (
        <>
          <PositionList
            positions={positions}
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
          />
          {selectedPosition && <ExposureChart position={selectedPosition} />}
        </>
      )}
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import ConnectWallet from './components/ConnectWallet';
import PositionList from './components/PositionList';
import ExposureChart from './components/ExposureChart';
import { getUserPositions } from './utils/uniswap';
import './index.css';

function App() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState(null);

  useEffect(() => {
    let interval;
    if (walletAddress) {
      const fetchPositions = async () => {
        const pos = await getUserPositions(walletAddress);
        setPositions(pos);
        if (pos.length > 0) setSelectedPosition(pos[0]);
      };
      fetchPositions();
      interval = setInterval(fetchPositions, 30000); // Refresh every 30 seconds
    }
    return () => clearInterval(interval);
  }, [walletAddress]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Uniswap V3 LP Dashboard</h1>
      <ConnectWallet setWalletAddress={setWalletAddress} />
      {walletAddress && (
        <>
          <PositionList
            positions={positions}
            selectedPosition={selectedPosition}
            setSelectedPosition={setSelectedPosition}
          />
          {selectedPosition && <ExposureChart position={selectedPosition} />}
        </>
      )}
    </div>
  );
}

export default App;

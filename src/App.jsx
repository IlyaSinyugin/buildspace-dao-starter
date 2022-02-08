import { useEffect, useMemo, useState } from "react";

// import thirdweb 
import { useWeb3 } from '@3rdweb/hooks';

const App = () => {
  //  Use the connectWallet hook thirdweb gives us 
  const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address: ", address)

  // this is the case where the user hasn't connected their wallet
  // let them call connectWallet 
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to ESODao</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet
        </button>
      </div>
    );
  }
  // This is the case when we know the user's address
  // so their wallet is connected to the site. 
  return (
    <div className="landing">
      <h1>👀 wallet connected, now what!</h1>
    </div>
  );
};

export default App;

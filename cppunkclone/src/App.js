/* Designed & coded by Sandra Ashipala <https://github.com/sajustsmile> 09.03.2022*/ 
import './App.css';
//import CollectionCard from './components/CollectionCard';
import Header  from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  
  //API call
  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x0F6BB300008a38D35dF4d547ED1ecA9C24cF29bC&order_direction=asc')
      console.log(openseaData.data.assets)
      setPunkListData(openseaData.data.assets)
    }
    
    return getMyNFTs()
  }, [])


  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main 
            punkListData={punkListData} 
            selectedPunk = {selectedPunk} />
        
          <PunkList 
            punkListData={punkListData} 
            setSelectedPunk = {setSelectedPunk} />
        </>
      )}
    </div>
  )
}

export default App;

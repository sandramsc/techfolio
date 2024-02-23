/* By Sandra Ashipala <https://github.com/sandramsc> 27.03.2022*/
import contractArtifact from './ProfileImageNFTs.json';

export const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; //'0x76e7866d65A847a0B729943701b69e858ad9a42c'
export const contractABI = contractArtifact.abi

export const customStyles = {
    content: {
      top: '30%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '',
      padding: 0,
      border: 'none',
    },
    overlay: {
      backgroundColor: '#334250a7',
    },
  }
/* By Sandra Ashipala <https://github.com/sajustsmile> 27.03.2022*/
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { client } from '../lib/client';

export const TwitterContext = createContext()

export const TwitterProvider = ({ children }) => {
  const [appStatus, setAppStatus] = useState('loading')
  const [currentAccount, setCurrentAccount] = useState('')
  const [currentUser, setCurrentUser] = useState({})
  const [tweets, setTweets] = useState([])

  const router = useRouter()

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  useEffect(() => {
    if (!currentAccount && appStatus == 'connected') return
    getCurrentUserDetails(currentAccount)
    fetchTweets()
  }, [currentAccount, appStatus])


  /* Checks if there is an active wallet connection*/
  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      const addressArray = await window.ethereum.request({
        method: 'eth_accounts',
      })
      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (error) {
      setAppStatus('error')
    }
  }

  /**
   * Initiates MetaMask wallet connection
   */
  const connectWallet = async () => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try {
      setAppStatus('loading')

      const addressArray = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })

      if (addressArray.length > 0) {
        setAppStatus('connected')
        setCurrentAccount(addressArray[0])
        createUserAccount(addressArray[0])
      } else {
        router.push('/')
        setAppStatus('notConnected')
      }
    } catch (err) {
      setAppStatus('error')
    }
  }
  /**
   * Gets the current user details from Sanity DB.
   * @param {String} userAccount Wallet address of the currently logged in user
   * @returns null
   */
  const createUserAccount = async (userWalletAddress = currentAccount) => {
    if (!window.ethereum) return setAppStatus('noMetaMask')
    try{
      const userDoc={
        _type: 'users',
        _id: userWalletAddress,
        name: 'Unnamed',
        isProfileImageNFT: false,
        profileImage: 'https://images.pexels.com/photos/1832323/pexels-photo-1832323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        walletAddress: userWalletAddress,
      }

      await client.createIfNotExists(userDoc)

      setAppStatus('connected')
    } catch (error){
      router.push('/')
      setAppStatus('error')
    }
  }
/**
   * Generates NFT profile picture URL or returns the image URL if it's not an NFT
   * @param {String} imageUri If the user has minted a profile picture, an IPFS hash; if not then the URL of their profile picture
   * @param {Boolean} isNFT Indicates whether the user has minted a profile picture
   * @returns A full URL to the profile picture
   */
  const getNFTProfileImage = async (imageUri, isNFT) => {
    if (isNFT) {
      return `https://gateway.pinata.cloud/ipfs/${imageUri}`
    } else if (!isNFT) {
      return imageUri
    }
  }

  /**
   * Gets all the tweets stored in Sanity DB.
   */
  const fetchTweets = async () => {
    const query = `
      *[_type == "tweets"]{
        "author": author->{name, walletAddress, profileImage, isProfileImageNFT},
        tweet,
        timestamp
      }|order(timestamp desc)
    `

    // setTweets(await client.fetch(query))

    const sanityResponse = await client.fetch(query)

    setTweets([])

    /**
     * Async await not available with for..of loops.
     */
    sanityResponse.forEach(async item => {
      const profileImageUrl = await getNFTProfileImage(
        item.author.profileImage,
        item.author.isProfileImageNFT,
      )

      if (item.author.isProfileImageFT) {
        const newItem = {
          tweet: item.tweet,
          timestamp: item.timestamp,
          author: {
            name: item.author.name,
            walletAddress: item.author.walletAddress,
            profileImage: profileImageUrl,
            isProfileImageNFT: item.author.isProfileImageNFT,
          },
        }

        setTweets(prevState => [...prevState, newItem])
      } else {
        setTweets(prevState => [...prevState, item])
      }
    })
  }

  /**
   * Gets the current user details from Sanity DB.
   * @param {String} userAccount Wallet address of the currently logged in user
   * @returns null
   */
  const getCurrentUserDetails = async (userAccount = currentAccount) => {
    if (appStatus !== 'connected') return

    const query = `
      *[_type == "users" && _id == "${userAccount}"]{
        "tweets": tweets[]->{timestamp, tweet}|order(timestamp desc),
        name,
        profileImage,
        isProfileImageNFT,
        headerBanner,
        walletAddress
      }
    `
    const response = await client.fetch(query)

    const profileImageUri = await getNFTProfileImage(
      response[0].profileImage,
      response[0].isProfileImageNFT,
    )
      //profile image
    setCurrentUser({
      tweets: response[0].tweets,
      name: response[0].name,
      profileImage: profileImageUri,
      walletAddress: response[0].walletAddress,
      headerBanner: response[0].headerBanner,
      isProfileImageNFT: response[0].isProfileImageNFT,
    })
  }

  return (
    <TwitterContext.Provider
      value={{
        appStatus,
        currentAccount,
        connectWallet,
        tweets,
        fetchTweets,
        setAppStatus,
        getNFTProfileImage,
        currentUser,
        getCurrentUserDetails,
      }}
    >
      {children}
    </TwitterContext.Provider>
  )
}
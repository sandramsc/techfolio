/* By Sandra Ashipala <https://github.com/sandramsc> 27.03.2022*/
import Post from '../Post';
import { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'

const style = {
    wrapper: `no-scrollbar`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }
 
  
 /* const tweets = [
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-03-023T12:01:00.000Z', // Sanity.io default storing style

    },
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-01-04T12:01:00.000Z', // Sanity.io default storing style

    },
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-02-04T12:01:00.000Z', // Sanity.io default storing style

    },
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-03-14T12:01:00.000Z', // Sanity.io default storing style

    },
    {
        displayName: 'MoonShine',
        username: '0x76e7866d65A847a0B729943701b69e858ad9a42c',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'gm',
        isProfileImageNFT: false,
        timestamp: '2022-06-13T12:01:00.000Z', // Sanity.io default storing style

    },
]*/

const ProfileTweets = () => {
    const { currentAccount, currentUser } = useContext(TwitterContext)

    return (
        <div className={style.wrapper}>
          {currentUser.tweets?.map((tweet, index) => (
            <Post
              key={index}
              displayName={
                currentUser.name === 'Unnamed'
                  ? `${currentAccount.slice(
                      0,
                      4,
                    )}...${currentAccount.slice(-4)}`
                  :  currentUser.name
              }
              username={`${currentAccount.slice(
                0,
                4,
              )}...${currentAccount.slice(-4)}`}
              text={tweet.tweet}
              avatar={currentUser.profileImage}
              timestamp={tweet.timestamp}
              isProfileImageNFT={currentUser.isProfileImageNFT}
            />
          ))}
        </div>
      )
}

export default ProfileTweets

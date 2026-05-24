/* By Sandra Ashipala <https://github.com/sandramsc> 27.03.2022*/
import { news, whoToFollow, signature } from '../lib/static'
import { BiSearch } from 'react-icons/bi'
import { useRouter } from 'next/router';

const style = {
  wrapper: `flex-[1] p-4`,
  searchBar: `flex items-center bg-[#243340] p-2 rounded-3xl`,
  searchIcon: `text-[#8899a6] mr-2`,
  inputBox: `bg-transparent outline-none`,
  section: `bg-[#192734] my-6 rounded-xl overflow-hidden`,
  title: `p-2 font-bold text-lg`,
  showMore: `p-2 text-[#1d9bf0] text-sm cursor-pointer hover:bg-[#22303c]`,
  item: `flex items-center p-3 my-2 hover:bg-[#22303c] cursor-pointer`,
  sectionSig: `bg-[#740f32] my-1 px-3 p-1 text-sm rounded-[100px] hover:bg-[#ae0152] flex flex-col items-center justify-center overflow-hidden cursor-pointer`,
  itemSig: `flex items-center p-1 my-1`,
  newsItemLeft: `flex-1`,
  newsItemCategory: `text-[#8899a6] text-xs font-semibold`,
  newsItemTitle: `text-sm font-bold`,
  newsItemRight: `w-1/5 ml-3`,
  newsItemImage: `rounded-xl h-14 w-14 object-cover`,
  followAvatarContainer: `w-1/6`,
  followAvatar: `rounded-full h-[40px] w-[40px]`,
  profileDetails: `flex-1`,
  name: `font-bold`,
  handle: `text-[#8899a6]`,
  followButton: `bg-white text-black px-3 py-1 rounded-full text-xs font-bold`,
  profileRight: `flex-1 flex`,
  details: `flex-1`,
}


const Widgets = () => {
    const router = useRouter()

  return (
    <div className={style.wrapper}>
        <div className={style.searchBar}>
            <BiSearch className={style.searchIcon}/>
            <input className={style.inputBox} 
            type='text' placeholder='Search Twitter' />
        </div>
        <div className={style.section}>
            <div className={style.title}>What&apos;s happening?</div>
            {news.map((item, index) => (
                <div key={index} className={style.item}>
                    <div className={style.newsItemLeft}>
                        <div className={style.newsItemCategory}>{item.category}</div>
                        <div className={style.newsItemTitle}>{item.title}</div>
                    </div>
                    <div className={style.newsItemRight}>
                        <img  src={item.image}
                            alt={item.category}
                            className={style.newsItemImage}
                        />
                    </div>
                </div>
            ))}
            <div className={style.showMore}>Show More</div>
        </div>
        <div className={style.section}>
        <div className={style.title}>Who to follow</div>
            {whoToFollow.map((item, index) => (
                <div key={index} className={style.item}>
                    <div>
                        <img src={item.avatar} alt={item.handle} 
                        className={style.followAvatar}/>
                    </div>
                    <div className={style.profileDetails}>
                        <div className={style.name}>{item.handle}</div>
                        <div className={style.handle}>{item.name}</div>
                    </div>
                    <div className={style.followButton}>Follow</div>
                </div>
            ))}
        </div>
        <div onClick={() => router.push('https://github.com/sandramsc')} className={style.sectionSig}>
            {signature.map((item, index) => (
                <div key={index} className={style.itemSig}>
                        <div className={style.profileRight}>
                            <div className={style.details}>
                            <div>Designed by Sandra Ashipala &#10084;</div>
                            </div>
                    </div>
                </div>  
            ))}
        </div>
    </div>
    )
}

export default Widgets;

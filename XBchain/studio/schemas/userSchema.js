export const userSchema = {
    name: 'users',
    type: 'document',
    title: 'Users',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'walletAddress',
        type: 'string',
        title: 'Wallet Address',
      },
      {
        name: 'isProfileImageNFT',
        title: 'Is Profile Image NFT',
        type: 'boolean',
      },
      {
        name: 'profileImage',
        type: 'string',
        title: 'Profile Image',
      },
      {
        name: 'headerBanner',
        type: 'string',
        title: 'Header Banner',
      },
      {
        name: 'tweets',
        title: 'Tweets',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'tweets' }],
          },
        ],
      },
    ],
  }
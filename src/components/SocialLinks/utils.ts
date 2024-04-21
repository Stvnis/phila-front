import { YoutubeSVG, InstagramSVG, FacebookSVG } from '@phila-front/assets/images/icons';

type ISocialType = 'youtube' | 'instagram' | 'facebook';

export const SocialMap = {
  youtube: YoutubeSVG,
  instagram: InstagramSVG,
  facebook: FacebookSVG,
};

export const getSocialIcon = (link: string) => {
  const url = new URL(link);

  const iconTypes = Object.keys(SocialMap) as ISocialType[];

  const iconType = iconTypes.find((item) => url.host.includes(item));

  if (!iconType) {
    return null;
  }

  return SocialMap[iconType];
};

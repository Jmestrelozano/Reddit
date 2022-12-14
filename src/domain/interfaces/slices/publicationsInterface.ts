import {TypeStatus} from '../global/global';

export interface StatePublicationsSlice {
  newPublications: Publication[];
  hotPublications: Publication[];
  popularPublications: Publication[];
  topPublication: Publication[];
  statusPublications: TypeStatus;
}

export interface Publication {
  title: string;
  author: string;
  created: number;
  numComments: number;
  score: number;
  url: string;
  image: string;
}

export interface Reddit {
  kind: string;
  data: RedditData;
}

export interface RedditData {
  after: string;
  dist: number;
  modhash: string;
  geoFilter: string;
  children: Child[];
  before: null;
}

export interface Child {
  kind: Kind;
  data: DataPublication;
}

export interface DataPublication {
  approvedAtUTC: null;
  subreddit: Subreddit;
  selftext: string;
  authorFullname: string;
  saved: boolean;
  modReasonTitle: null;
  gilded: number;
  clicked: boolean;
  title: string;
  linkFlairRichtext: any[];
  subredditNamePrefixed: SubredditNamePrefixed;
  hidden: boolean;
  pwls: number;
  linkFlairCSSClass: null | string;
  downs: number;
  thumbnailHeight: number;
  topAwardedType: null;
  hideScore: boolean;
  name: string;
  quarantine: boolean;
  linkFlairTextColor: FlairTextColor;
  upvoteRatio: number;
  authorFlairBackgroundColor: null | string;
  subredditType: SubredditType;
  ups: number;
  totalAwardsReceived: number;
  mediaEmbed: Gildings;
  thumbnailWidth: number;
  authorFlairTemplateID: null;
  isOriginalContent: boolean;
  userReports: any[];
  secureMedia: null;
  isRedditMediaDomain: boolean;
  isMeta: boolean;
  category: null;
  secureMediaEmbed: Gildings;
  linkFlairText: null | string;
  canModPost: boolean;
  score: number;
  approvedBy: null;
  isCreatedFromAdsUI: boolean;
  authorPremium: boolean;
  thumbnail: string;
  edited: boolean;
  authorFlairCSSClass: null | string;
  authorFlairRichtext: any[];
  gildings: Gildings;
  postHint?: PostHint;
  contentCategories: ContentCategory[];
  isSelf: boolean;
  modNote: null;
  created: number;
  linkFlairType: FlairType;
  wls: number;
  removedByCategory: null;
  bannedBy: null;
  authorFlairType: FlairType;
  domain: Domain;
  allowLiveComments: boolean;
  selftextHTML: null;
  likes: null;
  suggestedSort: null;
  bannedAtUTC: null;
  urlOverriddenByDest: string;
  viewCount: null;
  archived: boolean;
  noFollow: boolean;
  isCrosspostable: boolean;
  pinned: boolean;
  over18: boolean;
  preview?: Preview;
  allAwardings: AllAwarding[];
  awarders: any[];
  mediaOnly: boolean;
  canGild: boolean;
  spoiler: boolean;
  locked: boolean;
  authorFlairText: null | string;
  treatmentTags: any[];
  visited: boolean;
  removedBy: null;
  numReports: null;
  distinguished: null;
  subredditID: SubredditID;
  authorIsBlocked: boolean;
  modReasonBy: null;
  removalReason: null;
  linkFlairBackgroundColor: string;
  id: string;
  isRobotIndexable: boolean;
  reportReasons: null;
  author: string;
  discussionType: null;
  num_comments: number;
  sendReplies: boolean;
  whitelistStatus: WhitelistStatus;
  contestMode: boolean;
  modReports: any[];
  authorPatreonFlair: boolean;
  authorFlairTextColor: FlairTextColor | null;
  permalink: string;
  parentWhitelistStatus: WhitelistStatus;
  stickied: boolean;
  url: string;
  subredditSubscribers: number;
  createdUTC: number;
  numCrossposts: number;
  media: null;
  isVideo: boolean;
  crosspostParentList?: DataPublication[];
  crosspostParent?: string;
  isGallery?: boolean;
  mediaMetadata?: {[key: string]: MediaMetadatum};
  galleryData?: GalleryData;
}

export interface AllAwarding {
  giverCoinReward: null;
  subredditID: null;
  isNew: boolean;
  daysOfDripExtension: null;
  coinPrice: number;
  id: string;
  pennyDonate: null;
  awardSubType: string;
  coinReward: number;
  iconURL: string;
  daysOfPremium: null;
  tiersByRequiredAwardings: null;
  resizedIcons: ResizedIcon[];
  iconWidth: number;
  staticIconWidth: number;
  startDate: null;
  isEnabled: boolean;
  awardingsRequiredToGrantBenefits: null;
  description: string;
  endDate: null;
  stickyDurationSeconds: null;
  subredditCoinReward: number;
  count: number;
  staticIconHeight: number;
  name: string;
  resizedStaticIcons: ResizedIcon[];
  iconFormat: string;
  iconHeight: number;
  pennyPrice: number;
  awardType: string;
  staticIconURL: string;
}

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export enum FlairTextColor {
  Dark = 'dark',
}

export enum FlairType {
  Text = 'text',
}

export enum ContentCategory {
  DrawingAndPainting = 'drawing_and_painting',
  Photography = 'photography',
}

export enum Domain {
  IImgurCOM = 'i.imgur.com',
  IReddIt = 'i.redd.it',
  RedditCOM = 'reddit.com',
}

export interface GalleryData {
  items: Item[];
}

export interface Item {
  mediaID: string;
  id: number;
}

export interface Gildings {}

export interface MediaMetadatum {
  status: Status;
  e: E;
  m: M;
  p: S[];
  s: S;
  id: string;
}

export enum E {
  Image = 'Image',
}

export enum M {
  ImagePNG = 'image/png',
}

export interface S {
  y: number;
  x: number;
  u: string;
}

export enum Status {
  Valid = 'valid',
}

export enum WhitelistStatus {
  AllAds = 'all_ads',
}

export enum PostHint {
  Image = 'image',
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Image {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
  variants: Gildings;
  id: string;
}

export enum Subreddit {
  Pics = 'pics',
  Watercolor = 'Watercolor',
}

export enum SubredditID {
  T52Qh0U = 't5_2qh0u',
  T52Td8L = 't5_2td8l',
}

export enum SubredditNamePrefixed {
  RPics = 'r/pics',
  RWatercolor = 'r/Watercolor',
}

export enum SubredditType {
  Public = 'public',
}

export enum Kind {
  T3 = 't3',
}

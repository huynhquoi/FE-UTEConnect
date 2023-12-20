import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  LocalDateTime: { input: any; output: any; }
};

export type Bookmark = {
  __typename?: 'Bookmark';
  bookmarkid: Scalars['Int']['output'];
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  post_bookmark?: Maybe<Post>;
  user_bookmark?: Maybe<User>;
};

export type BookmarkRequest = {
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  post_bookmarkid?: InputMaybe<Scalars['Int']['input']>;
  user_bookmarkid?: InputMaybe<Scalars['Int']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  comment_comment?: Maybe<Comment>;
  commentid: Scalars['Int']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  isdelete?: Maybe<Scalars['Int']['output']>;
  post_comment?: Maybe<Post>;
  updateday?: Maybe<Scalars['LocalDateTime']['output']>;
  user_comment?: Maybe<User>;
};

export type CommentRequest = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  isdelete?: InputMaybe<Scalars['Int']['input']>;
  post_commentid?: InputMaybe<Scalars['Int']['input']>;
  updateday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  user_commentid?: InputMaybe<Scalars['Int']['input']>;
};

export type Comment_Like = {
  __typename?: 'Comment_Like';
  comment_commentlike?: Maybe<Comment>;
  commentlikeid: Scalars['Int']['output'];
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  icon_commentlike?: Maybe<Icon>;
  user_commentlike?: Maybe<User>;
};

export type Comment_LikeRequest = {
  comment_commentlikeid?: InputMaybe<Scalars['Int']['input']>;
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  icon_commentlikeid?: InputMaybe<Scalars['Int']['input']>;
  user_commentlikeid?: InputMaybe<Scalars['Int']['input']>;
};

export type Follow = {
  __typename?: 'Follow';
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  followerid: Scalars['Int']['output'];
  user_follow?: Maybe<User>;
  user_follower?: Maybe<User>;
};

export type Group = {
  __typename?: 'Group';
  admin?: Maybe<User>;
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  groupid?: Maybe<Scalars['Int']['output']>;
  groupname?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  reputaion?: Maybe<Scalars['Int']['output']>;
};

export type GroupRequest = {
  admin?: InputMaybe<Scalars['String']['input']>;
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  groupid?: InputMaybe<Scalars['Int']['input']>;
  groupname?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  reputaion?: InputMaybe<Scalars['Int']['input']>;
};

export type Icon = {
  __typename?: 'Icon';
  iconid: Scalars['Int']['output'];
  iconimage?: Maybe<Scalars['String']['output']>;
  iconname?: Maybe<Scalars['String']['output']>;
};

export type IconRequest = {
  iconimage?: InputMaybe<Scalars['String']['input']>;
  iconname?: InputMaybe<Scalars['String']['input']>;
};

export type IsBan = {
  __typename?: 'IsBan';
  description?: Maybe<Scalars['String']['output']>;
  isbanid: Scalars['Int']['output'];
  nameban?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**     User */
  account_update?: Maybe<User>;
  ban_user?: Maybe<User>;
  createIcon?: Maybe<Icon>;
  /**     Bookmark */
  create_bookmark?: Maybe<Bookmark>;
  create_comment?: Maybe<Scalars['String']['output']>;
  create_comment_in_comment?: Maybe<Scalars['String']['output']>;
  /**     Follow */
  create_follow?: Maybe<Scalars['String']['output']>;
  /**    Group */
  create_group?: Maybe<Scalars['String']['output']>;
  /**     CommentLike */
  create_icon_for_commentlike?: Maybe<Scalars['String']['output']>;
  /**     PostLike */
  create_icon_for_postlike?: Maybe<Scalars['String']['output']>;
  /**     Notice */
  create_notice?: Maybe<Notice>;
  create_post?: Maybe<Scalars['String']['output']>;
  create_post_in_group?: Maybe<Scalars['String']['output']>;
  create_report_comment?: Maybe<Scalars['String']['output']>;
  create_report_post?: Maybe<Scalars['String']['output']>;
  /**      Report */
  create_report_user?: Maybe<Scalars['String']['output']>;
  /**     Topic */
  create_topic?: Maybe<Scalars['String']['output']>;
  delete_bookmark?: Maybe<Scalars['String']['output']>;
  delete_comment_by_pk?: Maybe<Scalars['String']['output']>;
  delete_follow?: Maybe<Scalars['String']['output']>;
  delete_group?: Maybe<Scalars['String']['output']>;
  delete_icon_for_commentlike?: Maybe<Scalars['String']['output']>;
  delete_icon_for_postlike?: Maybe<Scalars['String']['output']>;
  delete_notice?: Maybe<Scalars['String']['output']>;
  delete_post_by_pk?: Maybe<Scalars['String']['output']>;
  delete_report_by_commentid?: Maybe<Scalars['String']['output']>;
  delete_report_by_postid?: Maybe<Scalars['String']['output']>;
  delete_report_by_userid?: Maybe<Scalars['String']['output']>;
  delete_topic?: Maybe<Scalars['String']['output']>;
  hide_post?: Maybe<Scalars['String']['output']>;
  /**    User_Group */
  join_group?: Maybe<Scalars['String']['output']>;
  leave_group?: Maybe<Scalars['String']['output']>;
  logout?: Maybe<Scalars['String']['output']>;
  update_check?: Maybe<Scalars['String']['output']>;
  /**     Comment */
  update_comment_by_pk?: Maybe<Scalars['String']['output']>;
  update_group?: Maybe<Scalars['String']['output']>;
  update_isseen_false?: Maybe<Notice>;
  update_isseen_true?: Maybe<Notice>;
  /**     Post */
  update_post_by_pk?: Maybe<Scalars['String']['output']>;
  update_totalread_post?: Maybe<Scalars['String']['output']>;
};


export type MutationAccount_UpdateArgs = {
  user?: InputMaybe<UserRequest>;
};


export type MutationBan_UserArgs = {
  isbanid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateIconArgs = {
  iconimage?: InputMaybe<Scalars['String']['input']>;
  iconname?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_BookmarkArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_CommentArgs = {
  comment?: InputMaybe<CommentRequest>;
  postid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_Comment_In_CommentArgs = {
  comment?: InputMaybe<CommentRequest>;
  comment_parentid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_FollowArgs = {
  followerid?: InputMaybe<Scalars['String']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_GroupArgs = {
  admin?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<GroupRequest>;
};


export type MutationCreate_Icon_For_CommentlikeArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
  iconid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_Icon_For_PostlikeArgs = {
  iconid?: InputMaybe<Scalars['Int']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_NoticeArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_PostArgs = {
  post?: InputMaybe<PostRequest>;
  topic?: InputMaybe<TopicRequest>;
  user?: InputMaybe<UserRequest>;
};


export type MutationCreate_Post_In_GroupArgs = {
  groupid?: InputMaybe<Scalars['Int']['input']>;
  post?: InputMaybe<PostRequest>;
  topic?: InputMaybe<TopicRequest>;
  user?: InputMaybe<UserRequest>;
};


export type MutationCreate_Report_CommentArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
  report?: InputMaybe<ReportRequest>;
  reporterid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_Report_PostArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
  report?: InputMaybe<ReportRequest>;
  reporterid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_Report_UserArgs = {
  report?: InputMaybe<ReportRequest>;
  reporterid?: InputMaybe<Scalars['String']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_TopicArgs = {
  topicname?: InputMaybe<Scalars['String']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDelete_BookmarkArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDelete_Comment_By_PkArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDelete_FollowArgs = {
  followerid?: InputMaybe<Scalars['String']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDelete_GroupArgs = {
  groupid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDelete_Icon_For_CommentlikeArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
  iconid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDelete_Icon_For_PostlikeArgs = {
  iconid?: InputMaybe<Scalars['Int']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDelete_NoticeArgs = {
  noticeid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDelete_Post_By_PkArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDelete_Report_By_CommentidArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDelete_Report_By_PostidArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDelete_Report_By_UseridArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDelete_TopicArgs = {
  topicid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationHide_PostArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationJoin_GroupArgs = {
  groupid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLeave_GroupArgs = {
  groupid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLogoutArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdate_CheckArgs = {
  check?: InputMaybe<Scalars['Int']['input']>;
  groupid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdate_Comment_By_PkArgs = {
  comment?: InputMaybe<CommentRequest>;
};


export type MutationUpdate_GroupArgs = {
  group?: InputMaybe<GroupRequest>;
};


export type MutationUpdate_Isseen_FalseArgs = {
  noticeid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdate_Isseen_TrueArgs = {
  noticeid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdate_Post_By_PkArgs = {
  post?: InputMaybe<PostRequest>;
  topic?: InputMaybe<TopicRequest>;
};


export type MutationUpdate_Totalread_PostArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};

export type Notice = {
  __typename?: 'Notice';
  content?: Maybe<Scalars['String']['output']>;
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  isseen?: Maybe<Scalars['Int']['output']>;
  noiticeid: Scalars['Int']['output'];
  subjectid?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['Int']['output']>;
  user_notice?: Maybe<User>;
};

export type NoticeRequest = {
  content?: InputMaybe<Scalars['String']['input']>;
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  noticeid?: InputMaybe<Scalars['Int']['input']>;
  subjectid?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  user_notice?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  __typename?: 'Post';
  content?: Maybe<Scalars['String']['output']>;
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  group_post?: Maybe<Group>;
  image?: Maybe<Scalars['String']['output']>;
  isdelete?: Maybe<Scalars['Int']['output']>;
  ishide?: Maybe<Scalars['Int']['output']>;
  postid: Scalars['Int']['output'];
  requiredreputation?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topic_post?: Maybe<Topic>;
  totalread?: Maybe<Scalars['Int']['output']>;
  updateday?: Maybe<Scalars['LocalDateTime']['output']>;
  user_post?: Maybe<User>;
};

export type PostRequest = {
  content?: InputMaybe<Scalars['String']['input']>;
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  group_post?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isdelete?: InputMaybe<Scalars['Int']['input']>;
  ishide?: InputMaybe<Scalars['Int']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
  requiredreputation?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic_postid?: InputMaybe<Scalars['Int']['input']>;
  totalread?: InputMaybe<Scalars['Int']['input']>;
  updateday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  user_post?: InputMaybe<Scalars['String']['input']>;
};

export type Post_Like = {
  __typename?: 'Post_Like';
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  icon_postlike?: Maybe<Icon>;
  post_postlike?: Maybe<Post>;
  postlikeid: Scalars['Int']['output'];
  user_postlike?: Maybe<User>;
};

export type Post_LikeRequest = {
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  icon_postlikeid?: InputMaybe<Scalars['Int']['input']>;
  post_postlikeid?: InputMaybe<Scalars['Int']['input']>;
  user_postlikeid?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  /**     User */
  account?: Maybe<Array<Maybe<User>>>;
  check_comment_in_comment?: Maybe<Scalars['Int']['output']>;
  /**     Comment */
  comment?: Maybe<Array<Maybe<Comment>>>;
  find_account_by_id?: Maybe<User>;
  /**     Bookmark */
  find_all_bookmark_by_userid?: Maybe<Array<Maybe<Bookmark>>>;
  find_all_comment_by_commentparentid?: Maybe<Array<Maybe<Comment>>>;
  find_all_comment_by_postid?: Maybe<Array<Maybe<Comment>>>;
  find_all_dislikecomment_by_commentid?: Maybe<Scalars['Int']['output']>;
  find_all_dislikepost_by_postid?: Maybe<Scalars['Int']['output']>;
  find_all_likecomment_by_commentid?: Maybe<Scalars['Int']['output']>;
  /** Post_Like */
  find_all_likepost_by_postid?: Maybe<Scalars['Int']['output']>;
  /**     Notice */
  find_all_notice_by_userid?: Maybe<Array<Maybe<Notice>>>;
  find_commentlike_by_commentid_and_userid?: Maybe<Comment_Like>;
  find_commentlike_byuserid?: Maybe<Array<Maybe<Comment_Like>>>;
  /**    Group */
  find_group_by_keyword?: Maybe<Array<Maybe<Group>>>;
  find_notice_by_userid_type_subject?: Maybe<Notice>;
  find_post_by_id?: Maybe<Post>;
  find_post_by_keyword?: Maybe<Array<Maybe<Post>>>;
  find_post_by_topicid?: Maybe<Array<Maybe<Post>>>;
  find_post_by_userid?: Maybe<Array<Maybe<Post>>>;
  find_post_in_group?: Maybe<Array<Maybe<Post>>>;
  find_postlike_by_postid_and_userid?: Maybe<Post_Like>;
  find_postlike_byuserid?: Maybe<Array<Maybe<Post_Like>>>;
  /**    Follow */
  get_all_follower_by_user?: Maybe<Array<Maybe<User>>>;
  get_all_user_by_follower?: Maybe<Array<Maybe<User>>>;
  get_list_ban_user?: Maybe<Array<Maybe<User>>>;
  get_list_low_reputation?: Maybe<Array<Maybe<User>>>;
  /**     Report */
  get_report_by_type?: Maybe<Array<Maybe<Report>>>;
  get_top_reputation_user?: Maybe<Array<Maybe<User>>>;
  /**    User_Group */
  get_user_in_group?: Maybe<Array<Maybe<User_Group>>>;
  iconList?: Maybe<Array<Maybe<Icon>>>;
  list_commentdislike_by_commentid?: Maybe<Array<Maybe<Comment_Like>>>;
  /**     Comment_Like */
  list_commentlike_by_commentid?: Maybe<Array<Maybe<Comment_Like>>>;
  /**     Post */
  post?: Maybe<Array<Maybe<Post>>>;
  /**     Topic */
  topic?: Maybe<Array<Maybe<Topic>>>;
};


export type QueryAccountArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  pacing?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCheck_Comment_In_CommentArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCommentArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  pacing?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFind_Account_By_IdArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_All_Bookmark_By_UseridArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_All_Comment_By_CommentparentidArgs = {
  commentparentid?: InputMaybe<Scalars['Int']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFind_All_Comment_By_PostidArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFind_All_Dislikecomment_By_CommentidArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFind_All_Dislikepost_By_PostidArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFind_All_Likecomment_By_CommentidArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFind_All_Likepost_By_PostidArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFind_All_Notice_By_UseridArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_Commentlike_By_Commentid_And_UseridArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_Commentlike_ByuseridArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_Group_By_KeywordArgs = {
  keyword?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_Notice_By_Userid_Type_SubjectArgs = {
  subject?: InputMaybe<Scalars['Int']['input']>;
  typee?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_Post_By_IdArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFind_Post_By_KeywordArgs = {
  keyword?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_Post_By_TopicidArgs = {
  topicid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type QueryFind_Post_By_UseridArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_Post_In_GroupArgs = {
  groupid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFind_Postlike_By_Postid_And_UseridArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_Postlike_ByuseridArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGet_All_Follower_By_UserArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGet_All_User_By_FollowerArgs = {
  followerid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGet_Report_By_TypeArgs = {
  type?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGet_User_In_GroupArgs = {
  groupid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryList_Commentdislike_By_CommentidArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryList_Commentlike_By_CommentidArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  pacing?: InputMaybe<Scalars['Int']['input']>;
};

export type Report = {
  __typename?: 'Report';
  comment_report?: Maybe<Comment>;
  content?: Maybe<Scalars['String']['output']>;
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  post_report?: Maybe<Post>;
  reason?: Maybe<Scalars['String']['output']>;
  reportid: Scalars['Int']['output'];
  type?: Maybe<Scalars['Int']['output']>;
  user_report?: Maybe<User>;
  user_reporter?: Maybe<User>;
};

export type ReportRequest = {
  comment_report?: InputMaybe<Scalars['Int']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  post_report?: InputMaybe<Scalars['Int']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['Int']['input']>;
  user_report?: InputMaybe<Scalars['String']['input']>;
  user_reporter?: InputMaybe<Scalars['String']['input']>;
};

export type Role = {
  __typename?: 'Role';
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  roleid: Scalars['Int']['output'];
  rolename?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  sub_all_notice_by_userid?: Maybe<Array<Maybe<Notice>>>;
  sub_status_user?: Maybe<User>;
};


export type SubscriptionSub_All_Notice_By_UseridArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionSub_Status_UserArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};

export type Topic = {
  __typename?: 'Topic';
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  isdelete?: Maybe<Scalars['Int']['output']>;
  ishide?: Maybe<Scalars['Int']['output']>;
  topicid: Scalars['Int']['output'];
  topicname?: Maybe<Scalars['String']['output']>;
  user_topic?: Maybe<User>;
};

export type TopicRequest = {
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  isdelete?: InputMaybe<Scalars['Int']['input']>;
  ishide?: InputMaybe<Scalars['Int']['input']>;
  topicid?: InputMaybe<Scalars['Int']['input']>;
  topicname?: InputMaybe<Scalars['String']['input']>;
  user_topicid?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  address?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['Date']['output']>;
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  isbanid?: Maybe<IsBan>;
  mssv?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  reputation?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Role>;
  status?: Maybe<Scalars['Int']['output']>;
  userid: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserRequest = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
  createday?: InputMaybe<Scalars['LocalDateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isbanid?: InputMaybe<Scalars['Int']['input']>;
  mssv?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  reputation?: InputMaybe<Scalars['Int']['input']>;
  roleid?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type User_Group = {
  __typename?: 'User_Group';
  checked?: Maybe<Scalars['Int']['output']>;
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  group_usergroup?: Maybe<Group>;
  user_groupid?: Maybe<Scalars['Int']['output']>;
  user_usergroup?: Maybe<User>;
};

export type ViewPost = {
  __typename?: 'ViewPost';
  createday?: Maybe<Scalars['LocalDateTime']['output']>;
  post_view?: Maybe<Post>;
  user_view?: Maybe<User>;
  viewid: Scalars['Int']['output'];
};

export type CommentFragment = { __typename?: 'Comment', commentid: number, createday?: any | null, updateday?: any | null, content?: string | null, user_comment?: { __typename?: 'User', userid: string, username?: string | null, fullname?: string | null } | null, post_comment?: { __typename?: 'Post', postid: number } | null };

export type CreateCommentMutationVariables = Exact<{
  comment?: InputMaybe<CommentRequest>;
  userid?: InputMaybe<Scalars['String']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', create_comment?: string | null };

export type CreateCommentChildMutationVariables = Exact<{
  comment?: InputMaybe<CommentRequest>;
  userid?: InputMaybe<Scalars['String']['input']>;
  comment_parentid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateCommentChildMutation = { __typename?: 'Mutation', create_comment_in_comment?: string | null };

export type GetPostCommentQueryVariables = Exact<{
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPostCommentQuery = { __typename?: 'Query', find_all_comment_by_postid?: Array<{ __typename?: 'Comment', commentid: number, createday?: any | null, updateday?: any | null, content?: string | null, comment_comment?: { __typename?: 'Comment', commentid: number, createday?: any | null, updateday?: any | null, content?: string | null, user_comment?: { __typename?: 'User', userid: string, username?: string | null, fullname?: string | null } | null, post_comment?: { __typename?: 'Post', postid: number } | null } | null, user_comment?: { __typename?: 'User', userid: string, username?: string | null, fullname?: string | null } | null, post_comment?: { __typename?: 'Post', postid: number } | null } | null> | null };

export type GetCommentChildQueryVariables = Exact<{
  commentparentid?: InputMaybe<Scalars['Int']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCommentChildQuery = { __typename?: 'Query', find_all_comment_by_commentparentid?: Array<{ __typename?: 'Comment', commentid: number, createday?: any | null, updateday?: any | null, content?: string | null, comment_comment?: { __typename?: 'Comment', commentid: number, createday?: any | null, updateday?: any | null, content?: string | null, user_comment?: { __typename?: 'User', userid: string, username?: string | null, fullname?: string | null } | null, post_comment?: { __typename?: 'Post', postid: number } | null } | null, user_comment?: { __typename?: 'User', userid: string, username?: string | null, fullname?: string | null } | null, post_comment?: { __typename?: 'Post', postid: number } | null } | null> | null };

export type CreateFollowMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateFollowMutation = { __typename?: 'Mutation', create_bookmark?: { __typename?: 'Bookmark', bookmarkid: number } | null };

export type DeleteFollowMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeleteFollowMutation = { __typename?: 'Mutation', delete_bookmark?: string | null };

export type CreateFollowUserMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  followerid?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateFollowUserMutation = { __typename?: 'Mutation', create_follow?: string | null };

export type DeleteFollowUserMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  followerid?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeleteFollowUserMutation = { __typename?: 'Mutation', delete_follow?: string | null };

export type GetAllFollowUserQueryVariables = Exact<{
  followerid?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllFollowUserQuery = { __typename?: 'Query', get_all_user_by_follower?: Array<{ __typename?: 'User', username?: string | null, fullname?: string | null, email?: string | null, address?: string | null, phone?: string | null, image?: string | null, gender?: string | null, birthday?: any | null, userid: string, role?: { __typename?: 'Role', roleid: number } | null } | null> | null };

export type GetAllFollowPostQueryVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAllFollowPostQuery = { __typename?: 'Query', find_all_bookmark_by_userid?: Array<{ __typename?: 'Bookmark', bookmarkid: number, createday?: any | null, post_bookmark?: { __typename?: 'Post', postid: number, title?: string | null, content?: string | null, createday?: any | null, updateday?: any | null, ishide?: number | null, isdelete?: number | null, image?: string | null, user_post?: { __typename?: 'User', fullname?: string | null, userid: string } | null } | null, user_bookmark?: { __typename?: 'User', userid: string } | null } | null> | null };

export type GroupFragment = { __typename?: 'Group', groupid?: number | null, groupname?: string | null, image?: string | null, createday?: any | null, reputaion?: number | null, description?: string | null, admin?: { __typename?: 'User', userid: string, image?: string | null, fullname?: string | null, email?: string | null } | null };

export type GroupUserFragment = { __typename?: 'User_Group', user_groupid?: number | null, createday?: any | null, checked?: number | null, user_usergroup?: { __typename?: 'User', userid: string, image?: string | null, fullname?: string | null, reputation?: number | null, email?: string | null } | null, group_usergroup?: { __typename?: 'Group', groupid?: number | null, groupname?: string | null, image?: string | null, createday?: any | null, reputaion?: number | null, description?: string | null, admin?: { __typename?: 'User', userid: string, image?: string | null, fullname?: string | null, email?: string | null } | null } | null };

export type GetGroupQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetGroupQuery = { __typename?: 'Query', find_group_by_keyword?: Array<{ __typename?: 'Group', groupid?: number | null, groupname?: string | null, image?: string | null, createday?: any | null, reputaion?: number | null, description?: string | null, admin?: { __typename?: 'User', userid: string, image?: string | null, fullname?: string | null, email?: string | null } | null } | null> | null };

export type FindUserInGroupQueryVariables = Exact<{
  groupid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindUserInGroupQuery = { __typename?: 'Query', get_user_in_group?: Array<{ __typename?: 'User_Group', user_groupid?: number | null, createday?: any | null, checked?: number | null, user_usergroup?: { __typename?: 'User', userid: string, image?: string | null, fullname?: string | null, reputation?: number | null, email?: string | null } | null, group_usergroup?: { __typename?: 'Group', groupid?: number | null, groupname?: string | null, image?: string | null, createday?: any | null, reputaion?: number | null, description?: string | null, admin?: { __typename?: 'User', userid: string, image?: string | null, fullname?: string | null, email?: string | null } | null } | null } | null> | null };

export type CreateGroupMutationVariables = Exact<{
  group?: InputMaybe<GroupRequest>;
  admin?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateGroupMutation = { __typename?: 'Mutation', create_group?: string | null };

export type UpdateGroupMutationVariables = Exact<{
  group?: InputMaybe<GroupRequest>;
}>;


export type UpdateGroupMutation = { __typename?: 'Mutation', update_group?: string | null };

export type DeleteGroupMutationVariables = Exact<{
  groupid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeleteGroupMutation = { __typename?: 'Mutation', delete_group?: string | null };

export type JoinGroupMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  groupid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type JoinGroupMutation = { __typename?: 'Mutation', join_group?: string | null };

export type LeaveGroupMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  groupid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type LeaveGroupMutation = { __typename?: 'Mutation', leave_group?: string | null };

export type AcceptUserMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  groupid?: InputMaybe<Scalars['Int']['input']>;
  check?: InputMaybe<Scalars['Int']['input']>;
}>;


export type AcceptUserMutation = { __typename?: 'Mutation', update_check?: string | null };

export type GetNotificationQueryVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetNotificationQuery = { __typename?: 'Query', find_all_notice_by_userid?: Array<{ __typename?: 'Notice', noiticeid: number, createday?: any | null, content?: string | null, isseen?: number | null, user_notice?: { __typename?: 'User', userid: string, fullname?: string | null } | null } | null> | null };

export type UpdateSeenNotificationMutationVariables = Exact<{
  noticeid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdateSeenNotificationMutation = { __typename?: 'Mutation', update_isseen_true?: { __typename?: 'Notice', noiticeid: number } | null };

export type PostFragment = { __typename?: 'Post', postid: number, title?: string | null, content?: string | null, createday?: any | null, updateday?: any | null, ishide?: number | null, isdelete?: number | null, image?: string | null, requiredreputation?: number | null, user_post?: { __typename?: 'User', fullname?: string | null, userid: string, image?: string | null } | null, topic_post?: { __typename?: 'Topic', topicid: number, topicname?: string | null } | null };

export type GetPostQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostQuery = { __typename?: 'Query', post?: Array<{ __typename?: 'Post', postid: number, title?: string | null, content?: string | null, createday?: any | null, updateday?: any | null, ishide?: number | null, isdelete?: number | null, image?: string | null, requiredreputation?: number | null, user_post?: { __typename?: 'User', fullname?: string | null, userid: string, image?: string | null } | null, topic_post?: { __typename?: 'Topic', topicid: number, topicname?: string | null } | null } | null> | null };

export type GetPostByUserIdQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPostByUserIdQuery = { __typename?: 'Query', find_post_by_userid?: Array<{ __typename?: 'Post', postid: number, title?: string | null, content?: string | null, createday?: any | null, updateday?: any | null, ishide?: number | null, isdelete?: number | null, image?: string | null, requiredreputation?: number | null, user_post?: { __typename?: 'User', fullname?: string | null, userid: string, image?: string | null } | null, topic_post?: { __typename?: 'Topic', topicid: number, topicname?: string | null } | null } | null> | null };

export type GetPostByKeyWordsQueryVariables = Exact<{
  keyword?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPostByKeyWordsQuery = { __typename?: 'Query', find_post_by_keyword?: Array<{ __typename?: 'Post', postid: number, title?: string | null, content?: string | null, createday?: any | null, updateday?: any | null, ishide?: number | null, isdelete?: number | null, image?: string | null, requiredreputation?: number | null, user_post?: { __typename?: 'User', fullname?: string | null, userid: string, image?: string | null } | null, topic_post?: { __typename?: 'Topic', topicid: number, topicname?: string | null } | null } | null> | null };

export type GetPostByPkQueryVariables = Exact<{
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPostByPkQuery = { __typename?: 'Query', find_post_by_id?: { __typename?: 'Post', postid: number, title?: string | null, content?: string | null, createday?: any | null, updateday?: any | null, ishide?: number | null, isdelete?: number | null, image?: string | null, requiredreputation?: number | null, user_post?: { __typename?: 'User', fullname?: string | null, userid: string, image?: string | null } | null, topic_post?: { __typename?: 'Topic', topicid: number, topicname?: string | null } | null } | null };

export type GetPostByTopicQueryVariables = Exact<{
  topicid?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>>;
}>;


export type GetPostByTopicQuery = { __typename?: 'Query', find_post_by_topicid?: Array<{ __typename?: 'Post', postid: number, title?: string | null, content?: string | null, createday?: any | null, updateday?: any | null, ishide?: number | null, isdelete?: number | null, image?: string | null, requiredreputation?: number | null, user_post?: { __typename?: 'User', fullname?: string | null, userid: string, image?: string | null } | null, topic_post?: { __typename?: 'Topic', topicid: number, topicname?: string | null } | null } | null> | null };

export type CreatePostMutationVariables = Exact<{
  post?: InputMaybe<PostRequest>;
  user?: InputMaybe<UserRequest>;
  topic?: InputMaybe<TopicRequest>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', create_post?: string | null };

export type DeletePostByPkMutationVariables = Exact<{
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeletePostByPkMutation = { __typename?: 'Mutation', delete_post_by_pk?: string | null };

export type GetPostLikeQueryVariables = Exact<{
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPostLikeQuery = { __typename?: 'Query', find_all_likepost_by_postid?: number | null };

export type GetPostDislikeQueryVariables = Exact<{
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetPostDislikeQuery = { __typename?: 'Query', find_all_dislikepost_by_postid?: number | null };

export type GetCommentLikeQueryVariables = Exact<{
  commentid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCommentLikeQuery = { __typename?: 'Query', find_all_likecomment_by_commentid?: number | null };

export type GetListCommentLikeQueryVariables = Exact<{
  commentid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetListCommentLikeQuery = { __typename?: 'Query', list_commentlike_by_commentid?: Array<{ __typename?: 'Comment_Like', user_commentlike?: { __typename?: 'User', userid: string } | null } | null> | null };

export type GetCommentDislikeQueryVariables = Exact<{
  commentid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCommentDislikeQuery = { __typename?: 'Query', find_all_dislikecomment_by_commentid?: number | null };

export type GetListCommentDislikeQueryVariables = Exact<{
  commentid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetListCommentDislikeQuery = { __typename?: 'Query', list_commentdislike_by_commentid?: Array<{ __typename?: 'Comment_Like', user_commentlike?: { __typename?: 'User', userid: string } | null } | null> | null };

export type CreatePostReactionMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
  iconid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreatePostReactionMutation = { __typename?: 'Mutation', create_icon_for_postlike?: string | null };

export type DeletePostReactionMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
  iconid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeletePostReactionMutation = { __typename?: 'Mutation', delete_icon_for_postlike?: string | null };

export type CreateCommentReactionMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  commentid?: InputMaybe<Scalars['Int']['input']>;
  iconid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreateCommentReactionMutation = { __typename?: 'Mutation', create_icon_for_commentlike?: string | null };

export type DeleteCommentReactionMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  commentid?: InputMaybe<Scalars['Int']['input']>;
  iconid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeleteCommentReactionMutation = { __typename?: 'Mutation', delete_icon_for_commentlike?: string | null };

export type ReportFragment = { __typename?: 'Report', reportid: number, reason?: string | null, content?: string | null, type?: number | null, createday?: any | null, user_report?: { __typename?: 'User', userid: string, fullname?: string | null, image?: string | null } | null, post_report?: { __typename?: 'Post', postid: number, title?: string | null } | null, comment_report?: { __typename?: 'Comment', commentid: number, content?: string | null } | null, user_reporter?: { __typename?: 'User', userid: string, fullname?: string | null, image?: string | null } | null };

export type GetReportByTypeQueryVariables = Exact<{
  type?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetReportByTypeQuery = { __typename?: 'Query', get_report_by_type?: Array<{ __typename?: 'Report', reportid: number, reason?: string | null, content?: string | null, type?: number | null, createday?: any | null, user_report?: { __typename?: 'User', userid: string, fullname?: string | null, image?: string | null } | null, post_report?: { __typename?: 'Post', postid: number, title?: string | null } | null, comment_report?: { __typename?: 'Comment', commentid: number, content?: string | null } | null, user_reporter?: { __typename?: 'User', userid: string, fullname?: string | null, image?: string | null } | null } | null> | null };

export type CreateUserReportMutationVariables = Exact<{
  report?: InputMaybe<ReportRequest>;
  userid?: InputMaybe<Scalars['String']['input']>;
  reporterid?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateUserReportMutation = { __typename?: 'Mutation', create_report_user?: string | null };

export type CreatePostReportMutationVariables = Exact<{
  report?: InputMaybe<ReportRequest>;
  postid?: InputMaybe<Scalars['Int']['input']>;
  reporterid?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreatePostReportMutation = { __typename?: 'Mutation', create_report_post?: string | null };

export type CreateCommentReportMutationVariables = Exact<{
  report?: InputMaybe<ReportRequest>;
  commentid?: InputMaybe<Scalars['Int']['input']>;
  reporterid?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateCommentReportMutation = { __typename?: 'Mutation', create_report_comment?: string | null };

export type DeleteUserReportMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
}>;


export type DeleteUserReportMutation = { __typename?: 'Mutation', delete_report_by_userid?: string | null };

export type DeletePostReportMutationVariables = Exact<{
  postid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeletePostReportMutation = { __typename?: 'Mutation', delete_report_by_postid?: string | null };

export type DeleteCommentReportMutationVariables = Exact<{
  commentid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeleteCommentReportMutation = { __typename?: 'Mutation', delete_report_by_commentid?: string | null };

export type GetAllTopicQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTopicQuery = { __typename?: 'Query', topic?: Array<{ __typename?: 'Topic', topicid: number, topicname?: string | null, createday?: any | null, ishide?: number | null, isdelete?: number | null } | null> | null };

export type CreateTagMutationVariables = Exact<{
  userid?: InputMaybe<Scalars['String']['input']>;
  topicname?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateTagMutation = { __typename?: 'Mutation', create_topic?: string | null };

export type DeleteTopicMutationVariables = Exact<{
  topicid?: InputMaybe<Scalars['Int']['input']>;
}>;


export type DeleteTopicMutation = { __typename?: 'Mutation', delete_topic?: string | null };

export type GetAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountQuery = { __typename?: 'Query', account?: Array<{ __typename?: 'User', userid: string, username?: string | null, fullname?: string | null, email?: string | null, address?: string | null, phone?: string | null, image?: string | null, gender?: string | null, birthday?: any | null, reputation?: number | null, role?: { __typename?: 'Role', roleid: number } | null } | null> | null };

export type GetAccountByPkQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetAccountByPkQuery = { __typename?: 'Query', find_account_by_id?: { __typename?: 'User', username?: string | null, fullname?: string | null, email?: string | null, address?: string | null, phone?: string | null, image?: string | null, gender?: string | null, birthday?: any | null, userid: string, reputation?: number | null, role?: { __typename?: 'Role', roleid: number } | null } | null };

export type UpdateAccountMutationVariables = Exact<{
  user?: InputMaybe<UserRequest>;
}>;


export type UpdateAccountMutation = { __typename?: 'Mutation', account_update?: { __typename?: 'User', userid: string } | null };

export const CommentFragmentDoc = gql`
    fragment Comment on Comment {
  commentid
  user_comment {
    userid
    username
    fullname
  }
  post_comment {
    postid
  }
  createday
  updateday
  content
}
    `;
export const GroupFragmentDoc = gql`
    fragment Group on Group {
  groupid
  groupname
  image
  createday
  admin {
    userid
    image
    fullname
    email
  }
  reputaion
  description
}
    `;
export const GroupUserFragmentDoc = gql`
    fragment GroupUser on User_Group {
  user_groupid
  user_usergroup {
    userid
    image
    fullname
    reputation
    email
  }
  group_usergroup {
    ...Group
  }
  createday
  checked
}
    ${GroupFragmentDoc}`;
export const PostFragmentDoc = gql`
    fragment Post on Post {
  postid
  title
  content
  createday
  user_post {
    fullname
    userid
    image
  }
  updateday
  ishide
  topic_post {
    topicid
    topicname
  }
  isdelete
  image
  requiredreputation
}
    `;
export const ReportFragmentDoc = gql`
    fragment Report on Report {
  reportid
  reason
  content
  type
  createday
  user_report {
    userid
    fullname
    image
  }
  post_report {
    postid
    title
  }
  comment_report {
    commentid
    content
  }
  user_reporter {
    userid
    fullname
    image
  }
}
    `;
export const CreateCommentDocument = gql`
    mutation CreateComment($comment: CommentRequest, $userid: String, $postid: Int) {
  create_comment(comment: $comment, userid: $userid, postid: $postid)
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      userid: // value for 'userid'
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateCommentChildDocument = gql`
    mutation CreateCommentChild($comment: CommentRequest, $userid: String, $comment_parentid: Int) {
  create_comment_in_comment(
    comment: $comment
    userid: $userid
    comment_parentid: $comment_parentid
  )
}
    `;
export type CreateCommentChildMutationFn = Apollo.MutationFunction<CreateCommentChildMutation, CreateCommentChildMutationVariables>;

/**
 * __useCreateCommentChildMutation__
 *
 * To run a mutation, you first call `useCreateCommentChildMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentChildMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentChildMutation, { data, loading, error }] = useCreateCommentChildMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      userid: // value for 'userid'
 *      comment_parentid: // value for 'comment_parentid'
 *   },
 * });
 */
export function useCreateCommentChildMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentChildMutation, CreateCommentChildMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentChildMutation, CreateCommentChildMutationVariables>(CreateCommentChildDocument, options);
      }
export type CreateCommentChildMutationHookResult = ReturnType<typeof useCreateCommentChildMutation>;
export type CreateCommentChildMutationResult = Apollo.MutationResult<CreateCommentChildMutation>;
export type CreateCommentChildMutationOptions = Apollo.BaseMutationOptions<CreateCommentChildMutation, CreateCommentChildMutationVariables>;
export const GetPostCommentDocument = gql`
    query GetPostComment($postid: Int) {
  find_all_comment_by_postid(postid: $postid) {
    ...Comment
    comment_comment {
      ...Comment
    }
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useGetPostCommentQuery__
 *
 * To run a query within a React component, call `useGetPostCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostCommentQuery({
 *   variables: {
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useGetPostCommentQuery(baseOptions?: Apollo.QueryHookOptions<GetPostCommentQuery, GetPostCommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostCommentQuery, GetPostCommentQueryVariables>(GetPostCommentDocument, options);
      }
export function useGetPostCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostCommentQuery, GetPostCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostCommentQuery, GetPostCommentQueryVariables>(GetPostCommentDocument, options);
        }
export function useGetPostCommentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostCommentQuery, GetPostCommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostCommentQuery, GetPostCommentQueryVariables>(GetPostCommentDocument, options);
        }
export type GetPostCommentQueryHookResult = ReturnType<typeof useGetPostCommentQuery>;
export type GetPostCommentLazyQueryHookResult = ReturnType<typeof useGetPostCommentLazyQuery>;
export type GetPostCommentSuspenseQueryHookResult = ReturnType<typeof useGetPostCommentSuspenseQuery>;
export type GetPostCommentQueryResult = Apollo.QueryResult<GetPostCommentQuery, GetPostCommentQueryVariables>;
export const GetCommentChildDocument = gql`
    query GetCommentChild($commentparentid: Int, $postid: Int) {
  find_all_comment_by_commentparentid(
    commentparentid: $commentparentid
    postid: $postid
  ) {
    ...Comment
    comment_comment {
      ...Comment
    }
  }
}
    ${CommentFragmentDoc}`;

/**
 * __useGetCommentChildQuery__
 *
 * To run a query within a React component, call `useGetCommentChildQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentChildQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentChildQuery({
 *   variables: {
 *      commentparentid: // value for 'commentparentid'
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useGetCommentChildQuery(baseOptions?: Apollo.QueryHookOptions<GetCommentChildQuery, GetCommentChildQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentChildQuery, GetCommentChildQueryVariables>(GetCommentChildDocument, options);
      }
export function useGetCommentChildLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentChildQuery, GetCommentChildQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentChildQuery, GetCommentChildQueryVariables>(GetCommentChildDocument, options);
        }
export function useGetCommentChildSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentChildQuery, GetCommentChildQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCommentChildQuery, GetCommentChildQueryVariables>(GetCommentChildDocument, options);
        }
export type GetCommentChildQueryHookResult = ReturnType<typeof useGetCommentChildQuery>;
export type GetCommentChildLazyQueryHookResult = ReturnType<typeof useGetCommentChildLazyQuery>;
export type GetCommentChildSuspenseQueryHookResult = ReturnType<typeof useGetCommentChildSuspenseQuery>;
export type GetCommentChildQueryResult = Apollo.QueryResult<GetCommentChildQuery, GetCommentChildQueryVariables>;
export const CreateFollowDocument = gql`
    mutation CreateFollow($userid: String, $postid: Int) {
  create_bookmark(userid: $userid, postid: $postid) {
    bookmarkid
  }
}
    `;
export type CreateFollowMutationFn = Apollo.MutationFunction<CreateFollowMutation, CreateFollowMutationVariables>;

/**
 * __useCreateFollowMutation__
 *
 * To run a mutation, you first call `useCreateFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFollowMutation, { data, loading, error }] = useCreateFollowMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useCreateFollowMutation(baseOptions?: Apollo.MutationHookOptions<CreateFollowMutation, CreateFollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFollowMutation, CreateFollowMutationVariables>(CreateFollowDocument, options);
      }
export type CreateFollowMutationHookResult = ReturnType<typeof useCreateFollowMutation>;
export type CreateFollowMutationResult = Apollo.MutationResult<CreateFollowMutation>;
export type CreateFollowMutationOptions = Apollo.BaseMutationOptions<CreateFollowMutation, CreateFollowMutationVariables>;
export const DeleteFollowDocument = gql`
    mutation DeleteFollow($userid: String, $postid: Int) {
  delete_bookmark(userid: $userid, postid: $postid)
}
    `;
export type DeleteFollowMutationFn = Apollo.MutationFunction<DeleteFollowMutation, DeleteFollowMutationVariables>;

/**
 * __useDeleteFollowMutation__
 *
 * To run a mutation, you first call `useDeleteFollowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFollowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFollowMutation, { data, loading, error }] = useDeleteFollowMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useDeleteFollowMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFollowMutation, DeleteFollowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFollowMutation, DeleteFollowMutationVariables>(DeleteFollowDocument, options);
      }
export type DeleteFollowMutationHookResult = ReturnType<typeof useDeleteFollowMutation>;
export type DeleteFollowMutationResult = Apollo.MutationResult<DeleteFollowMutation>;
export type DeleteFollowMutationOptions = Apollo.BaseMutationOptions<DeleteFollowMutation, DeleteFollowMutationVariables>;
export const CreateFollowUserDocument = gql`
    mutation CreateFollowUser($userid: String, $followerid: String) {
  create_follow(userid: $userid, followerid: $followerid)
}
    `;
export type CreateFollowUserMutationFn = Apollo.MutationFunction<CreateFollowUserMutation, CreateFollowUserMutationVariables>;

/**
 * __useCreateFollowUserMutation__
 *
 * To run a mutation, you first call `useCreateFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFollowUserMutation, { data, loading, error }] = useCreateFollowUserMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      followerid: // value for 'followerid'
 *   },
 * });
 */
export function useCreateFollowUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateFollowUserMutation, CreateFollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFollowUserMutation, CreateFollowUserMutationVariables>(CreateFollowUserDocument, options);
      }
export type CreateFollowUserMutationHookResult = ReturnType<typeof useCreateFollowUserMutation>;
export type CreateFollowUserMutationResult = Apollo.MutationResult<CreateFollowUserMutation>;
export type CreateFollowUserMutationOptions = Apollo.BaseMutationOptions<CreateFollowUserMutation, CreateFollowUserMutationVariables>;
export const DeleteFollowUserDocument = gql`
    mutation DeleteFollowUser($userid: String, $followerid: String) {
  delete_follow(userid: $userid, followerid: $followerid)
}
    `;
export type DeleteFollowUserMutationFn = Apollo.MutationFunction<DeleteFollowUserMutation, DeleteFollowUserMutationVariables>;

/**
 * __useDeleteFollowUserMutation__
 *
 * To run a mutation, you first call `useDeleteFollowUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFollowUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFollowUserMutation, { data, loading, error }] = useDeleteFollowUserMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      followerid: // value for 'followerid'
 *   },
 * });
 */
export function useDeleteFollowUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFollowUserMutation, DeleteFollowUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFollowUserMutation, DeleteFollowUserMutationVariables>(DeleteFollowUserDocument, options);
      }
export type DeleteFollowUserMutationHookResult = ReturnType<typeof useDeleteFollowUserMutation>;
export type DeleteFollowUserMutationResult = Apollo.MutationResult<DeleteFollowUserMutation>;
export type DeleteFollowUserMutationOptions = Apollo.BaseMutationOptions<DeleteFollowUserMutation, DeleteFollowUserMutationVariables>;
export const GetAllFollowUserDocument = gql`
    query GetAllFollowUser($followerid: String) {
  get_all_user_by_follower(followerid: $followerid) {
    username
    fullname
    email
    address
    role {
      roleid
    }
    phone
    image
    gender
    birthday
    userid
  }
}
    `;

/**
 * __useGetAllFollowUserQuery__
 *
 * To run a query within a React component, call `useGetAllFollowUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFollowUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFollowUserQuery({
 *   variables: {
 *      followerid: // value for 'followerid'
 *   },
 * });
 */
export function useGetAllFollowUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFollowUserQuery, GetAllFollowUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFollowUserQuery, GetAllFollowUserQueryVariables>(GetAllFollowUserDocument, options);
      }
export function useGetAllFollowUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFollowUserQuery, GetAllFollowUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFollowUserQuery, GetAllFollowUserQueryVariables>(GetAllFollowUserDocument, options);
        }
export function useGetAllFollowUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllFollowUserQuery, GetAllFollowUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllFollowUserQuery, GetAllFollowUserQueryVariables>(GetAllFollowUserDocument, options);
        }
export type GetAllFollowUserQueryHookResult = ReturnType<typeof useGetAllFollowUserQuery>;
export type GetAllFollowUserLazyQueryHookResult = ReturnType<typeof useGetAllFollowUserLazyQuery>;
export type GetAllFollowUserSuspenseQueryHookResult = ReturnType<typeof useGetAllFollowUserSuspenseQuery>;
export type GetAllFollowUserQueryResult = Apollo.QueryResult<GetAllFollowUserQuery, GetAllFollowUserQueryVariables>;
export const GetAllFollowPostDocument = gql`
    query GetAllFollowPost($userid: String) {
  find_all_bookmark_by_userid(userid: $userid) {
    bookmarkid
    post_bookmark {
      postid
      title
      content
      createday
      user_post {
        fullname
        userid
      }
      updateday
      ishide
      isdelete
      image
    }
    user_bookmark {
      userid
    }
    createday
  }
}
    `;

/**
 * __useGetAllFollowPostQuery__
 *
 * To run a query within a React component, call `useGetAllFollowPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllFollowPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllFollowPostQuery({
 *   variables: {
 *      userid: // value for 'userid'
 *   },
 * });
 */
export function useGetAllFollowPostQuery(baseOptions?: Apollo.QueryHookOptions<GetAllFollowPostQuery, GetAllFollowPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllFollowPostQuery, GetAllFollowPostQueryVariables>(GetAllFollowPostDocument, options);
      }
export function useGetAllFollowPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllFollowPostQuery, GetAllFollowPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllFollowPostQuery, GetAllFollowPostQueryVariables>(GetAllFollowPostDocument, options);
        }
export function useGetAllFollowPostSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllFollowPostQuery, GetAllFollowPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllFollowPostQuery, GetAllFollowPostQueryVariables>(GetAllFollowPostDocument, options);
        }
export type GetAllFollowPostQueryHookResult = ReturnType<typeof useGetAllFollowPostQuery>;
export type GetAllFollowPostLazyQueryHookResult = ReturnType<typeof useGetAllFollowPostLazyQuery>;
export type GetAllFollowPostSuspenseQueryHookResult = ReturnType<typeof useGetAllFollowPostSuspenseQuery>;
export type GetAllFollowPostQueryResult = Apollo.QueryResult<GetAllFollowPostQuery, GetAllFollowPostQueryVariables>;
export const GetGroupDocument = gql`
    query getGroup($keyword: String) {
  find_group_by_keyword(keyword: $keyword) {
    ...Group
  }
}
    ${GroupFragmentDoc}`;

/**
 * __useGetGroupQuery__
 *
 * To run a query within a React component, call `useGetGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGroupQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useGetGroupQuery(baseOptions?: Apollo.QueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, options);
      }
export function useGetGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, options);
        }
export function useGetGroupSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGroupQuery, GetGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGroupQuery, GetGroupQueryVariables>(GetGroupDocument, options);
        }
export type GetGroupQueryHookResult = ReturnType<typeof useGetGroupQuery>;
export type GetGroupLazyQueryHookResult = ReturnType<typeof useGetGroupLazyQuery>;
export type GetGroupSuspenseQueryHookResult = ReturnType<typeof useGetGroupSuspenseQuery>;
export type GetGroupQueryResult = Apollo.QueryResult<GetGroupQuery, GetGroupQueryVariables>;
export const FindUserInGroupDocument = gql`
    query findUserInGroup($groupid: Int) {
  get_user_in_group(groupid: $groupid) {
    ...GroupUser
  }
}
    ${GroupUserFragmentDoc}`;

/**
 * __useFindUserInGroupQuery__
 *
 * To run a query within a React component, call `useFindUserInGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserInGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserInGroupQuery({
 *   variables: {
 *      groupid: // value for 'groupid'
 *   },
 * });
 */
export function useFindUserInGroupQuery(baseOptions?: Apollo.QueryHookOptions<FindUserInGroupQuery, FindUserInGroupQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserInGroupQuery, FindUserInGroupQueryVariables>(FindUserInGroupDocument, options);
      }
export function useFindUserInGroupLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserInGroupQuery, FindUserInGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserInGroupQuery, FindUserInGroupQueryVariables>(FindUserInGroupDocument, options);
        }
export function useFindUserInGroupSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindUserInGroupQuery, FindUserInGroupQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserInGroupQuery, FindUserInGroupQueryVariables>(FindUserInGroupDocument, options);
        }
export type FindUserInGroupQueryHookResult = ReturnType<typeof useFindUserInGroupQuery>;
export type FindUserInGroupLazyQueryHookResult = ReturnType<typeof useFindUserInGroupLazyQuery>;
export type FindUserInGroupSuspenseQueryHookResult = ReturnType<typeof useFindUserInGroupSuspenseQuery>;
export type FindUserInGroupQueryResult = Apollo.QueryResult<FindUserInGroupQuery, FindUserInGroupQueryVariables>;
export const CreateGroupDocument = gql`
    mutation CreateGroup($group: GroupRequest, $admin: String) {
  create_group(group: $group, admin: $admin)
}
    `;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *      group: // value for 'group'
 *      admin: // value for 'admin'
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, options);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const UpdateGroupDocument = gql`
    mutation UpdateGroup($group: GroupRequest) {
  update_group(group: $group)
}
    `;
export type UpdateGroupMutationFn = Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      group: // value for 'group'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, options);
      }
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const DeleteGroupDocument = gql`
    mutation DeleteGroup($groupid: Int) {
  delete_group(groupid: $groupid)
}
    `;
export type DeleteGroupMutationFn = Apollo.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;

/**
 * __useDeleteGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGroupMutation, { data, loading, error }] = useDeleteGroupMutation({
 *   variables: {
 *      groupid: // value for 'groupid'
 *   },
 * });
 */
export function useDeleteGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGroupMutation, DeleteGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(DeleteGroupDocument, options);
      }
export type DeleteGroupMutationHookResult = ReturnType<typeof useDeleteGroupMutation>;
export type DeleteGroupMutationResult = Apollo.MutationResult<DeleteGroupMutation>;
export type DeleteGroupMutationOptions = Apollo.BaseMutationOptions<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const JoinGroupDocument = gql`
    mutation JoinGroup($userid: String, $groupid: Int) {
  join_group(userid: $userid, groupid: $groupid)
}
    `;
export type JoinGroupMutationFn = Apollo.MutationFunction<JoinGroupMutation, JoinGroupMutationVariables>;

/**
 * __useJoinGroupMutation__
 *
 * To run a mutation, you first call `useJoinGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinGroupMutation, { data, loading, error }] = useJoinGroupMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      groupid: // value for 'groupid'
 *   },
 * });
 */
export function useJoinGroupMutation(baseOptions?: Apollo.MutationHookOptions<JoinGroupMutation, JoinGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinGroupMutation, JoinGroupMutationVariables>(JoinGroupDocument, options);
      }
export type JoinGroupMutationHookResult = ReturnType<typeof useJoinGroupMutation>;
export type JoinGroupMutationResult = Apollo.MutationResult<JoinGroupMutation>;
export type JoinGroupMutationOptions = Apollo.BaseMutationOptions<JoinGroupMutation, JoinGroupMutationVariables>;
export const LeaveGroupDocument = gql`
    mutation LeaveGroup($userid: String, $groupid: Int) {
  leave_group(userid: $userid, groupid: $groupid)
}
    `;
export type LeaveGroupMutationFn = Apollo.MutationFunction<LeaveGroupMutation, LeaveGroupMutationVariables>;

/**
 * __useLeaveGroupMutation__
 *
 * To run a mutation, you first call `useLeaveGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveGroupMutation, { data, loading, error }] = useLeaveGroupMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      groupid: // value for 'groupid'
 *   },
 * });
 */
export function useLeaveGroupMutation(baseOptions?: Apollo.MutationHookOptions<LeaveGroupMutation, LeaveGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LeaveGroupMutation, LeaveGroupMutationVariables>(LeaveGroupDocument, options);
      }
export type LeaveGroupMutationHookResult = ReturnType<typeof useLeaveGroupMutation>;
export type LeaveGroupMutationResult = Apollo.MutationResult<LeaveGroupMutation>;
export type LeaveGroupMutationOptions = Apollo.BaseMutationOptions<LeaveGroupMutation, LeaveGroupMutationVariables>;
export const AcceptUserDocument = gql`
    mutation AcceptUser($userid: String, $groupid: Int, $check: Int) {
  update_check(userid: $userid, groupid: $groupid, check: $check)
}
    `;
export type AcceptUserMutationFn = Apollo.MutationFunction<AcceptUserMutation, AcceptUserMutationVariables>;

/**
 * __useAcceptUserMutation__
 *
 * To run a mutation, you first call `useAcceptUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptUserMutation, { data, loading, error }] = useAcceptUserMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      groupid: // value for 'groupid'
 *      check: // value for 'check'
 *   },
 * });
 */
export function useAcceptUserMutation(baseOptions?: Apollo.MutationHookOptions<AcceptUserMutation, AcceptUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AcceptUserMutation, AcceptUserMutationVariables>(AcceptUserDocument, options);
      }
export type AcceptUserMutationHookResult = ReturnType<typeof useAcceptUserMutation>;
export type AcceptUserMutationResult = Apollo.MutationResult<AcceptUserMutation>;
export type AcceptUserMutationOptions = Apollo.BaseMutationOptions<AcceptUserMutation, AcceptUserMutationVariables>;
export const GetNotificationDocument = gql`
    query GetNotification($userid: String) {
  find_all_notice_by_userid(userid: $userid) {
    noiticeid
    createday
    user_notice {
      userid
      fullname
    }
    content
    isseen
  }
}
    `;

/**
 * __useGetNotificationQuery__
 *
 * To run a query within a React component, call `useGetNotificationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNotificationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNotificationQuery({
 *   variables: {
 *      userid: // value for 'userid'
 *   },
 * });
 */
export function useGetNotificationQuery(baseOptions?: Apollo.QueryHookOptions<GetNotificationQuery, GetNotificationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNotificationQuery, GetNotificationQueryVariables>(GetNotificationDocument, options);
      }
export function useGetNotificationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNotificationQuery, GetNotificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNotificationQuery, GetNotificationQueryVariables>(GetNotificationDocument, options);
        }
export function useGetNotificationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetNotificationQuery, GetNotificationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetNotificationQuery, GetNotificationQueryVariables>(GetNotificationDocument, options);
        }
export type GetNotificationQueryHookResult = ReturnType<typeof useGetNotificationQuery>;
export type GetNotificationLazyQueryHookResult = ReturnType<typeof useGetNotificationLazyQuery>;
export type GetNotificationSuspenseQueryHookResult = ReturnType<typeof useGetNotificationSuspenseQuery>;
export type GetNotificationQueryResult = Apollo.QueryResult<GetNotificationQuery, GetNotificationQueryVariables>;
export const UpdateSeenNotificationDocument = gql`
    mutation UpdateSeenNotification($noticeid: Int) {
  update_isseen_true(noticeid: $noticeid) {
    noiticeid
  }
}
    `;
export type UpdateSeenNotificationMutationFn = Apollo.MutationFunction<UpdateSeenNotificationMutation, UpdateSeenNotificationMutationVariables>;

/**
 * __useUpdateSeenNotificationMutation__
 *
 * To run a mutation, you first call `useUpdateSeenNotificationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSeenNotificationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSeenNotificationMutation, { data, loading, error }] = useUpdateSeenNotificationMutation({
 *   variables: {
 *      noticeid: // value for 'noticeid'
 *   },
 * });
 */
export function useUpdateSeenNotificationMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSeenNotificationMutation, UpdateSeenNotificationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSeenNotificationMutation, UpdateSeenNotificationMutationVariables>(UpdateSeenNotificationDocument, options);
      }
export type UpdateSeenNotificationMutationHookResult = ReturnType<typeof useUpdateSeenNotificationMutation>;
export type UpdateSeenNotificationMutationResult = Apollo.MutationResult<UpdateSeenNotificationMutation>;
export type UpdateSeenNotificationMutationOptions = Apollo.BaseMutationOptions<UpdateSeenNotificationMutation, UpdateSeenNotificationMutationVariables>;
export const GetPostDocument = gql`
    query GetPost {
  post {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPostQuery(baseOptions?: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export function useGetPostSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostSuspenseQueryHookResult = ReturnType<typeof useGetPostSuspenseQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetPostByUserIdDocument = gql`
    query GetPostByUserId($userId: String) {
  find_post_by_userid(userid: $userId) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostByUserIdQuery__
 *
 * To run a query within a React component, call `useGetPostByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetPostByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPostByUserIdQuery, GetPostByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByUserIdQuery, GetPostByUserIdQueryVariables>(GetPostByUserIdDocument, options);
      }
export function useGetPostByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByUserIdQuery, GetPostByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByUserIdQuery, GetPostByUserIdQueryVariables>(GetPostByUserIdDocument, options);
        }
export function useGetPostByUserIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostByUserIdQuery, GetPostByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostByUserIdQuery, GetPostByUserIdQueryVariables>(GetPostByUserIdDocument, options);
        }
export type GetPostByUserIdQueryHookResult = ReturnType<typeof useGetPostByUserIdQuery>;
export type GetPostByUserIdLazyQueryHookResult = ReturnType<typeof useGetPostByUserIdLazyQuery>;
export type GetPostByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetPostByUserIdSuspenseQuery>;
export type GetPostByUserIdQueryResult = Apollo.QueryResult<GetPostByUserIdQuery, GetPostByUserIdQueryVariables>;
export const GetPostByKeyWordsDocument = gql`
    query GetPostByKeyWords($keyword: String) {
  find_post_by_keyword(keyword: $keyword) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostByKeyWordsQuery__
 *
 * To run a query within a React component, call `useGetPostByKeyWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByKeyWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByKeyWordsQuery({
 *   variables: {
 *      keyword: // value for 'keyword'
 *   },
 * });
 */
export function useGetPostByKeyWordsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostByKeyWordsQuery, GetPostByKeyWordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByKeyWordsQuery, GetPostByKeyWordsQueryVariables>(GetPostByKeyWordsDocument, options);
      }
export function useGetPostByKeyWordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByKeyWordsQuery, GetPostByKeyWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByKeyWordsQuery, GetPostByKeyWordsQueryVariables>(GetPostByKeyWordsDocument, options);
        }
export function useGetPostByKeyWordsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostByKeyWordsQuery, GetPostByKeyWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostByKeyWordsQuery, GetPostByKeyWordsQueryVariables>(GetPostByKeyWordsDocument, options);
        }
export type GetPostByKeyWordsQueryHookResult = ReturnType<typeof useGetPostByKeyWordsQuery>;
export type GetPostByKeyWordsLazyQueryHookResult = ReturnType<typeof useGetPostByKeyWordsLazyQuery>;
export type GetPostByKeyWordsSuspenseQueryHookResult = ReturnType<typeof useGetPostByKeyWordsSuspenseQuery>;
export type GetPostByKeyWordsQueryResult = Apollo.QueryResult<GetPostByKeyWordsQuery, GetPostByKeyWordsQueryVariables>;
export const GetPostByPkDocument = gql`
    query GetPostByPk($postid: Int) {
  find_post_by_id(postid: $postid) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostByPkQuery__
 *
 * To run a query within a React component, call `useGetPostByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByPkQuery({
 *   variables: {
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useGetPostByPkQuery(baseOptions?: Apollo.QueryHookOptions<GetPostByPkQuery, GetPostByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByPkQuery, GetPostByPkQueryVariables>(GetPostByPkDocument, options);
      }
export function useGetPostByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByPkQuery, GetPostByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByPkQuery, GetPostByPkQueryVariables>(GetPostByPkDocument, options);
        }
export function useGetPostByPkSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostByPkQuery, GetPostByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostByPkQuery, GetPostByPkQueryVariables>(GetPostByPkDocument, options);
        }
export type GetPostByPkQueryHookResult = ReturnType<typeof useGetPostByPkQuery>;
export type GetPostByPkLazyQueryHookResult = ReturnType<typeof useGetPostByPkLazyQuery>;
export type GetPostByPkSuspenseQueryHookResult = ReturnType<typeof useGetPostByPkSuspenseQuery>;
export type GetPostByPkQueryResult = Apollo.QueryResult<GetPostByPkQuery, GetPostByPkQueryVariables>;
export const GetPostByTopicDocument = gql`
    query GetPostByTopic($topicid: [Int]) {
  find_post_by_topicid(topicid: $topicid) {
    ...Post
  }
}
    ${PostFragmentDoc}`;

/**
 * __useGetPostByTopicQuery__
 *
 * To run a query within a React component, call `useGetPostByTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostByTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostByTopicQuery({
 *   variables: {
 *      topicid: // value for 'topicid'
 *   },
 * });
 */
export function useGetPostByTopicQuery(baseOptions?: Apollo.QueryHookOptions<GetPostByTopicQuery, GetPostByTopicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostByTopicQuery, GetPostByTopicQueryVariables>(GetPostByTopicDocument, options);
      }
export function useGetPostByTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostByTopicQuery, GetPostByTopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostByTopicQuery, GetPostByTopicQueryVariables>(GetPostByTopicDocument, options);
        }
export function useGetPostByTopicSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostByTopicQuery, GetPostByTopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostByTopicQuery, GetPostByTopicQueryVariables>(GetPostByTopicDocument, options);
        }
export type GetPostByTopicQueryHookResult = ReturnType<typeof useGetPostByTopicQuery>;
export type GetPostByTopicLazyQueryHookResult = ReturnType<typeof useGetPostByTopicLazyQuery>;
export type GetPostByTopicSuspenseQueryHookResult = ReturnType<typeof useGetPostByTopicSuspenseQuery>;
export type GetPostByTopicQueryResult = Apollo.QueryResult<GetPostByTopicQuery, GetPostByTopicQueryVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($post: PostRequest, $user: UserRequest, $topic: TopicRequest) {
  create_post(post: $post, user: $user, topic: $topic)
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      post: // value for 'post'
 *      user: // value for 'user'
 *      topic: // value for 'topic'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostByPkDocument = gql`
    mutation DeletePostByPk($postid: Int) {
  delete_post_by_pk(postid: $postid)
}
    `;
export type DeletePostByPkMutationFn = Apollo.MutationFunction<DeletePostByPkMutation, DeletePostByPkMutationVariables>;

/**
 * __useDeletePostByPkMutation__
 *
 * To run a mutation, you first call `useDeletePostByPkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostByPkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostByPkMutation, { data, loading, error }] = useDeletePostByPkMutation({
 *   variables: {
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useDeletePostByPkMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostByPkMutation, DeletePostByPkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostByPkMutation, DeletePostByPkMutationVariables>(DeletePostByPkDocument, options);
      }
export type DeletePostByPkMutationHookResult = ReturnType<typeof useDeletePostByPkMutation>;
export type DeletePostByPkMutationResult = Apollo.MutationResult<DeletePostByPkMutation>;
export type DeletePostByPkMutationOptions = Apollo.BaseMutationOptions<DeletePostByPkMutation, DeletePostByPkMutationVariables>;
export const GetPostLikeDocument = gql`
    query GetPostLike($postid: Int) {
  find_all_likepost_by_postid(postid: $postid)
}
    `;

/**
 * __useGetPostLikeQuery__
 *
 * To run a query within a React component, call `useGetPostLikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostLikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostLikeQuery({
 *   variables: {
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useGetPostLikeQuery(baseOptions?: Apollo.QueryHookOptions<GetPostLikeQuery, GetPostLikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostLikeQuery, GetPostLikeQueryVariables>(GetPostLikeDocument, options);
      }
export function useGetPostLikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostLikeQuery, GetPostLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostLikeQuery, GetPostLikeQueryVariables>(GetPostLikeDocument, options);
        }
export function useGetPostLikeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostLikeQuery, GetPostLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostLikeQuery, GetPostLikeQueryVariables>(GetPostLikeDocument, options);
        }
export type GetPostLikeQueryHookResult = ReturnType<typeof useGetPostLikeQuery>;
export type GetPostLikeLazyQueryHookResult = ReturnType<typeof useGetPostLikeLazyQuery>;
export type GetPostLikeSuspenseQueryHookResult = ReturnType<typeof useGetPostLikeSuspenseQuery>;
export type GetPostLikeQueryResult = Apollo.QueryResult<GetPostLikeQuery, GetPostLikeQueryVariables>;
export const GetPostDislikeDocument = gql`
    query GetPostDislike($postid: Int) {
  find_all_dislikepost_by_postid(postid: $postid)
}
    `;

/**
 * __useGetPostDislikeQuery__
 *
 * To run a query within a React component, call `useGetPostDislikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostDislikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostDislikeQuery({
 *   variables: {
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useGetPostDislikeQuery(baseOptions?: Apollo.QueryHookOptions<GetPostDislikeQuery, GetPostDislikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostDislikeQuery, GetPostDislikeQueryVariables>(GetPostDislikeDocument, options);
      }
export function useGetPostDislikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostDislikeQuery, GetPostDislikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostDislikeQuery, GetPostDislikeQueryVariables>(GetPostDislikeDocument, options);
        }
export function useGetPostDislikeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostDislikeQuery, GetPostDislikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostDislikeQuery, GetPostDislikeQueryVariables>(GetPostDislikeDocument, options);
        }
export type GetPostDislikeQueryHookResult = ReturnType<typeof useGetPostDislikeQuery>;
export type GetPostDislikeLazyQueryHookResult = ReturnType<typeof useGetPostDislikeLazyQuery>;
export type GetPostDislikeSuspenseQueryHookResult = ReturnType<typeof useGetPostDislikeSuspenseQuery>;
export type GetPostDislikeQueryResult = Apollo.QueryResult<GetPostDislikeQuery, GetPostDislikeQueryVariables>;
export const GetCommentLikeDocument = gql`
    query GetCommentLike($commentid: Int) {
  find_all_likecomment_by_commentid(commentid: $commentid)
}
    `;

/**
 * __useGetCommentLikeQuery__
 *
 * To run a query within a React component, call `useGetCommentLikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentLikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentLikeQuery({
 *   variables: {
 *      commentid: // value for 'commentid'
 *   },
 * });
 */
export function useGetCommentLikeQuery(baseOptions?: Apollo.QueryHookOptions<GetCommentLikeQuery, GetCommentLikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentLikeQuery, GetCommentLikeQueryVariables>(GetCommentLikeDocument, options);
      }
export function useGetCommentLikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentLikeQuery, GetCommentLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentLikeQuery, GetCommentLikeQueryVariables>(GetCommentLikeDocument, options);
        }
export function useGetCommentLikeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentLikeQuery, GetCommentLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCommentLikeQuery, GetCommentLikeQueryVariables>(GetCommentLikeDocument, options);
        }
export type GetCommentLikeQueryHookResult = ReturnType<typeof useGetCommentLikeQuery>;
export type GetCommentLikeLazyQueryHookResult = ReturnType<typeof useGetCommentLikeLazyQuery>;
export type GetCommentLikeSuspenseQueryHookResult = ReturnType<typeof useGetCommentLikeSuspenseQuery>;
export type GetCommentLikeQueryResult = Apollo.QueryResult<GetCommentLikeQuery, GetCommentLikeQueryVariables>;
export const GetListCommentLikeDocument = gql`
    query GetListCommentLike($commentid: Int) {
  list_commentlike_by_commentid(commentid: $commentid) {
    user_commentlike {
      userid
    }
  }
}
    `;

/**
 * __useGetListCommentLikeQuery__
 *
 * To run a query within a React component, call `useGetListCommentLikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListCommentLikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListCommentLikeQuery({
 *   variables: {
 *      commentid: // value for 'commentid'
 *   },
 * });
 */
export function useGetListCommentLikeQuery(baseOptions?: Apollo.QueryHookOptions<GetListCommentLikeQuery, GetListCommentLikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListCommentLikeQuery, GetListCommentLikeQueryVariables>(GetListCommentLikeDocument, options);
      }
export function useGetListCommentLikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListCommentLikeQuery, GetListCommentLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListCommentLikeQuery, GetListCommentLikeQueryVariables>(GetListCommentLikeDocument, options);
        }
export function useGetListCommentLikeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListCommentLikeQuery, GetListCommentLikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListCommentLikeQuery, GetListCommentLikeQueryVariables>(GetListCommentLikeDocument, options);
        }
export type GetListCommentLikeQueryHookResult = ReturnType<typeof useGetListCommentLikeQuery>;
export type GetListCommentLikeLazyQueryHookResult = ReturnType<typeof useGetListCommentLikeLazyQuery>;
export type GetListCommentLikeSuspenseQueryHookResult = ReturnType<typeof useGetListCommentLikeSuspenseQuery>;
export type GetListCommentLikeQueryResult = Apollo.QueryResult<GetListCommentLikeQuery, GetListCommentLikeQueryVariables>;
export const GetCommentDislikeDocument = gql`
    query GetCommentDislike($commentid: Int) {
  find_all_dislikecomment_by_commentid(commentid: $commentid)
}
    `;

/**
 * __useGetCommentDislikeQuery__
 *
 * To run a query within a React component, call `useGetCommentDislikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentDislikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentDislikeQuery({
 *   variables: {
 *      commentid: // value for 'commentid'
 *   },
 * });
 */
export function useGetCommentDislikeQuery(baseOptions?: Apollo.QueryHookOptions<GetCommentDislikeQuery, GetCommentDislikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentDislikeQuery, GetCommentDislikeQueryVariables>(GetCommentDislikeDocument, options);
      }
export function useGetCommentDislikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentDislikeQuery, GetCommentDislikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentDislikeQuery, GetCommentDislikeQueryVariables>(GetCommentDislikeDocument, options);
        }
export function useGetCommentDislikeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentDislikeQuery, GetCommentDislikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCommentDislikeQuery, GetCommentDislikeQueryVariables>(GetCommentDislikeDocument, options);
        }
export type GetCommentDislikeQueryHookResult = ReturnType<typeof useGetCommentDislikeQuery>;
export type GetCommentDislikeLazyQueryHookResult = ReturnType<typeof useGetCommentDislikeLazyQuery>;
export type GetCommentDislikeSuspenseQueryHookResult = ReturnType<typeof useGetCommentDislikeSuspenseQuery>;
export type GetCommentDislikeQueryResult = Apollo.QueryResult<GetCommentDislikeQuery, GetCommentDislikeQueryVariables>;
export const GetListCommentDislikeDocument = gql`
    query GetListCommentDislike($commentid: Int) {
  list_commentdislike_by_commentid(commentid: $commentid) {
    user_commentlike {
      userid
    }
  }
}
    `;

/**
 * __useGetListCommentDislikeQuery__
 *
 * To run a query within a React component, call `useGetListCommentDislikeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListCommentDislikeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListCommentDislikeQuery({
 *   variables: {
 *      commentid: // value for 'commentid'
 *   },
 * });
 */
export function useGetListCommentDislikeQuery(baseOptions?: Apollo.QueryHookOptions<GetListCommentDislikeQuery, GetListCommentDislikeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListCommentDislikeQuery, GetListCommentDislikeQueryVariables>(GetListCommentDislikeDocument, options);
      }
export function useGetListCommentDislikeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListCommentDislikeQuery, GetListCommentDislikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListCommentDislikeQuery, GetListCommentDislikeQueryVariables>(GetListCommentDislikeDocument, options);
        }
export function useGetListCommentDislikeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetListCommentDislikeQuery, GetListCommentDislikeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetListCommentDislikeQuery, GetListCommentDislikeQueryVariables>(GetListCommentDislikeDocument, options);
        }
export type GetListCommentDislikeQueryHookResult = ReturnType<typeof useGetListCommentDislikeQuery>;
export type GetListCommentDislikeLazyQueryHookResult = ReturnType<typeof useGetListCommentDislikeLazyQuery>;
export type GetListCommentDislikeSuspenseQueryHookResult = ReturnType<typeof useGetListCommentDislikeSuspenseQuery>;
export type GetListCommentDislikeQueryResult = Apollo.QueryResult<GetListCommentDislikeQuery, GetListCommentDislikeQueryVariables>;
export const CreatePostReactionDocument = gql`
    mutation CreatePostReaction($userid: String, $postid: Int, $iconid: Int) {
  create_icon_for_postlike(userid: $userid, postid: $postid, iconid: $iconid)
}
    `;
export type CreatePostReactionMutationFn = Apollo.MutationFunction<CreatePostReactionMutation, CreatePostReactionMutationVariables>;

/**
 * __useCreatePostReactionMutation__
 *
 * To run a mutation, you first call `useCreatePostReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostReactionMutation, { data, loading, error }] = useCreatePostReactionMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      postid: // value for 'postid'
 *      iconid: // value for 'iconid'
 *   },
 * });
 */
export function useCreatePostReactionMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostReactionMutation, CreatePostReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostReactionMutation, CreatePostReactionMutationVariables>(CreatePostReactionDocument, options);
      }
export type CreatePostReactionMutationHookResult = ReturnType<typeof useCreatePostReactionMutation>;
export type CreatePostReactionMutationResult = Apollo.MutationResult<CreatePostReactionMutation>;
export type CreatePostReactionMutationOptions = Apollo.BaseMutationOptions<CreatePostReactionMutation, CreatePostReactionMutationVariables>;
export const DeletePostReactionDocument = gql`
    mutation DeletePostReaction($userid: String, $postid: Int, $iconid: Int) {
  delete_icon_for_postlike(userid: $userid, postid: $postid, iconid: $iconid)
}
    `;
export type DeletePostReactionMutationFn = Apollo.MutationFunction<DeletePostReactionMutation, DeletePostReactionMutationVariables>;

/**
 * __useDeletePostReactionMutation__
 *
 * To run a mutation, you first call `useDeletePostReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostReactionMutation, { data, loading, error }] = useDeletePostReactionMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      postid: // value for 'postid'
 *      iconid: // value for 'iconid'
 *   },
 * });
 */
export function useDeletePostReactionMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostReactionMutation, DeletePostReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostReactionMutation, DeletePostReactionMutationVariables>(DeletePostReactionDocument, options);
      }
export type DeletePostReactionMutationHookResult = ReturnType<typeof useDeletePostReactionMutation>;
export type DeletePostReactionMutationResult = Apollo.MutationResult<DeletePostReactionMutation>;
export type DeletePostReactionMutationOptions = Apollo.BaseMutationOptions<DeletePostReactionMutation, DeletePostReactionMutationVariables>;
export const CreateCommentReactionDocument = gql`
    mutation CreateCommentReaction($userid: String, $commentid: Int, $iconid: Int) {
  create_icon_for_commentlike(
    userid: $userid
    commentid: $commentid
    iconid: $iconid
  )
}
    `;
export type CreateCommentReactionMutationFn = Apollo.MutationFunction<CreateCommentReactionMutation, CreateCommentReactionMutationVariables>;

/**
 * __useCreateCommentReactionMutation__
 *
 * To run a mutation, you first call `useCreateCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentReactionMutation, { data, loading, error }] = useCreateCommentReactionMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      commentid: // value for 'commentid'
 *      iconid: // value for 'iconid'
 *   },
 * });
 */
export function useCreateCommentReactionMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentReactionMutation, CreateCommentReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentReactionMutation, CreateCommentReactionMutationVariables>(CreateCommentReactionDocument, options);
      }
export type CreateCommentReactionMutationHookResult = ReturnType<typeof useCreateCommentReactionMutation>;
export type CreateCommentReactionMutationResult = Apollo.MutationResult<CreateCommentReactionMutation>;
export type CreateCommentReactionMutationOptions = Apollo.BaseMutationOptions<CreateCommentReactionMutation, CreateCommentReactionMutationVariables>;
export const DeleteCommentReactionDocument = gql`
    mutation DeleteCommentReaction($userid: String, $commentid: Int, $iconid: Int) {
  delete_icon_for_commentlike(
    userid: $userid
    commentid: $commentid
    iconid: $iconid
  )
}
    `;
export type DeleteCommentReactionMutationFn = Apollo.MutationFunction<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>;

/**
 * __useDeleteCommentReactionMutation__
 *
 * To run a mutation, you first call `useDeleteCommentReactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentReactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentReactionMutation, { data, loading, error }] = useDeleteCommentReactionMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      commentid: // value for 'commentid'
 *      iconid: // value for 'iconid'
 *   },
 * });
 */
export function useDeleteCommentReactionMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>(DeleteCommentReactionDocument, options);
      }
export type DeleteCommentReactionMutationHookResult = ReturnType<typeof useDeleteCommentReactionMutation>;
export type DeleteCommentReactionMutationResult = Apollo.MutationResult<DeleteCommentReactionMutation>;
export type DeleteCommentReactionMutationOptions = Apollo.BaseMutationOptions<DeleteCommentReactionMutation, DeleteCommentReactionMutationVariables>;
export const GetReportByTypeDocument = gql`
    query getReportByType($type: Int) {
  get_report_by_type(type: $type) {
    ...Report
  }
}
    ${ReportFragmentDoc}`;

/**
 * __useGetReportByTypeQuery__
 *
 * To run a query within a React component, call `useGetReportByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReportByTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReportByTypeQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useGetReportByTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetReportByTypeQuery, GetReportByTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReportByTypeQuery, GetReportByTypeQueryVariables>(GetReportByTypeDocument, options);
      }
export function useGetReportByTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReportByTypeQuery, GetReportByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReportByTypeQuery, GetReportByTypeQueryVariables>(GetReportByTypeDocument, options);
        }
export function useGetReportByTypeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetReportByTypeQuery, GetReportByTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetReportByTypeQuery, GetReportByTypeQueryVariables>(GetReportByTypeDocument, options);
        }
export type GetReportByTypeQueryHookResult = ReturnType<typeof useGetReportByTypeQuery>;
export type GetReportByTypeLazyQueryHookResult = ReturnType<typeof useGetReportByTypeLazyQuery>;
export type GetReportByTypeSuspenseQueryHookResult = ReturnType<typeof useGetReportByTypeSuspenseQuery>;
export type GetReportByTypeQueryResult = Apollo.QueryResult<GetReportByTypeQuery, GetReportByTypeQueryVariables>;
export const CreateUserReportDocument = gql`
    mutation CreateUserReport($report: ReportRequest, $userid: String, $reporterid: String) {
  create_report_user(report: $report, userid: $userid, reporterid: $reporterid)
}
    `;
export type CreateUserReportMutationFn = Apollo.MutationFunction<CreateUserReportMutation, CreateUserReportMutationVariables>;

/**
 * __useCreateUserReportMutation__
 *
 * To run a mutation, you first call `useCreateUserReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserReportMutation, { data, loading, error }] = useCreateUserReportMutation({
 *   variables: {
 *      report: // value for 'report'
 *      userid: // value for 'userid'
 *      reporterid: // value for 'reporterid'
 *   },
 * });
 */
export function useCreateUserReportMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserReportMutation, CreateUserReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserReportMutation, CreateUserReportMutationVariables>(CreateUserReportDocument, options);
      }
export type CreateUserReportMutationHookResult = ReturnType<typeof useCreateUserReportMutation>;
export type CreateUserReportMutationResult = Apollo.MutationResult<CreateUserReportMutation>;
export type CreateUserReportMutationOptions = Apollo.BaseMutationOptions<CreateUserReportMutation, CreateUserReportMutationVariables>;
export const CreatePostReportDocument = gql`
    mutation CreatePostReport($report: ReportRequest, $postid: Int, $reporterid: String) {
  create_report_post(report: $report, postid: $postid, reporterid: $reporterid)
}
    `;
export type CreatePostReportMutationFn = Apollo.MutationFunction<CreatePostReportMutation, CreatePostReportMutationVariables>;

/**
 * __useCreatePostReportMutation__
 *
 * To run a mutation, you first call `useCreatePostReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostReportMutation, { data, loading, error }] = useCreatePostReportMutation({
 *   variables: {
 *      report: // value for 'report'
 *      postid: // value for 'postid'
 *      reporterid: // value for 'reporterid'
 *   },
 * });
 */
export function useCreatePostReportMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostReportMutation, CreatePostReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostReportMutation, CreatePostReportMutationVariables>(CreatePostReportDocument, options);
      }
export type CreatePostReportMutationHookResult = ReturnType<typeof useCreatePostReportMutation>;
export type CreatePostReportMutationResult = Apollo.MutationResult<CreatePostReportMutation>;
export type CreatePostReportMutationOptions = Apollo.BaseMutationOptions<CreatePostReportMutation, CreatePostReportMutationVariables>;
export const CreateCommentReportDocument = gql`
    mutation CreateCommentReport($report: ReportRequest, $commentid: Int, $reporterid: String) {
  create_report_comment(
    report: $report
    commentid: $commentid
    reporterid: $reporterid
  )
}
    `;
export type CreateCommentReportMutationFn = Apollo.MutationFunction<CreateCommentReportMutation, CreateCommentReportMutationVariables>;

/**
 * __useCreateCommentReportMutation__
 *
 * To run a mutation, you first call `useCreateCommentReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentReportMutation, { data, loading, error }] = useCreateCommentReportMutation({
 *   variables: {
 *      report: // value for 'report'
 *      commentid: // value for 'commentid'
 *      reporterid: // value for 'reporterid'
 *   },
 * });
 */
export function useCreateCommentReportMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentReportMutation, CreateCommentReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentReportMutation, CreateCommentReportMutationVariables>(CreateCommentReportDocument, options);
      }
export type CreateCommentReportMutationHookResult = ReturnType<typeof useCreateCommentReportMutation>;
export type CreateCommentReportMutationResult = Apollo.MutationResult<CreateCommentReportMutation>;
export type CreateCommentReportMutationOptions = Apollo.BaseMutationOptions<CreateCommentReportMutation, CreateCommentReportMutationVariables>;
export const DeleteUserReportDocument = gql`
    mutation DeleteUserReport($userid: String) {
  delete_report_by_userid(userid: $userid)
}
    `;
export type DeleteUserReportMutationFn = Apollo.MutationFunction<DeleteUserReportMutation, DeleteUserReportMutationVariables>;

/**
 * __useDeleteUserReportMutation__
 *
 * To run a mutation, you first call `useDeleteUserReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserReportMutation, { data, loading, error }] = useDeleteUserReportMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *   },
 * });
 */
export function useDeleteUserReportMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserReportMutation, DeleteUserReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserReportMutation, DeleteUserReportMutationVariables>(DeleteUserReportDocument, options);
      }
export type DeleteUserReportMutationHookResult = ReturnType<typeof useDeleteUserReportMutation>;
export type DeleteUserReportMutationResult = Apollo.MutationResult<DeleteUserReportMutation>;
export type DeleteUserReportMutationOptions = Apollo.BaseMutationOptions<DeleteUserReportMutation, DeleteUserReportMutationVariables>;
export const DeletePostReportDocument = gql`
    mutation DeletePostReport($postid: Int) {
  delete_report_by_postid(postid: $postid)
}
    `;
export type DeletePostReportMutationFn = Apollo.MutationFunction<DeletePostReportMutation, DeletePostReportMutationVariables>;

/**
 * __useDeletePostReportMutation__
 *
 * To run a mutation, you first call `useDeletePostReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostReportMutation, { data, loading, error }] = useDeletePostReportMutation({
 *   variables: {
 *      postid: // value for 'postid'
 *   },
 * });
 */
export function useDeletePostReportMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostReportMutation, DeletePostReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostReportMutation, DeletePostReportMutationVariables>(DeletePostReportDocument, options);
      }
export type DeletePostReportMutationHookResult = ReturnType<typeof useDeletePostReportMutation>;
export type DeletePostReportMutationResult = Apollo.MutationResult<DeletePostReportMutation>;
export type DeletePostReportMutationOptions = Apollo.BaseMutationOptions<DeletePostReportMutation, DeletePostReportMutationVariables>;
export const DeleteCommentReportDocument = gql`
    mutation DeleteCommentReport($commentid: Int) {
  delete_report_by_commentid(commentid: $commentid)
}
    `;
export type DeleteCommentReportMutationFn = Apollo.MutationFunction<DeleteCommentReportMutation, DeleteCommentReportMutationVariables>;

/**
 * __useDeleteCommentReportMutation__
 *
 * To run a mutation, you first call `useDeleteCommentReportMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentReportMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentReportMutation, { data, loading, error }] = useDeleteCommentReportMutation({
 *   variables: {
 *      commentid: // value for 'commentid'
 *   },
 * });
 */
export function useDeleteCommentReportMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentReportMutation, DeleteCommentReportMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentReportMutation, DeleteCommentReportMutationVariables>(DeleteCommentReportDocument, options);
      }
export type DeleteCommentReportMutationHookResult = ReturnType<typeof useDeleteCommentReportMutation>;
export type DeleteCommentReportMutationResult = Apollo.MutationResult<DeleteCommentReportMutation>;
export type DeleteCommentReportMutationOptions = Apollo.BaseMutationOptions<DeleteCommentReportMutation, DeleteCommentReportMutationVariables>;
export const GetAllTopicDocument = gql`
    query GetAllTopic {
  topic {
    topicid
    topicname
    createday
    ishide
    isdelete
  }
}
    `;

/**
 * __useGetAllTopicQuery__
 *
 * To run a query within a React component, call `useGetAllTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTopicQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTopicQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTopicQuery, GetAllTopicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTopicQuery, GetAllTopicQueryVariables>(GetAllTopicDocument, options);
      }
export function useGetAllTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTopicQuery, GetAllTopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTopicQuery, GetAllTopicQueryVariables>(GetAllTopicDocument, options);
        }
export function useGetAllTopicSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllTopicQuery, GetAllTopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllTopicQuery, GetAllTopicQueryVariables>(GetAllTopicDocument, options);
        }
export type GetAllTopicQueryHookResult = ReturnType<typeof useGetAllTopicQuery>;
export type GetAllTopicLazyQueryHookResult = ReturnType<typeof useGetAllTopicLazyQuery>;
export type GetAllTopicSuspenseQueryHookResult = ReturnType<typeof useGetAllTopicSuspenseQuery>;
export type GetAllTopicQueryResult = Apollo.QueryResult<GetAllTopicQuery, GetAllTopicQueryVariables>;
export const CreateTagDocument = gql`
    mutation CreateTag($userid: String, $topicname: String) {
  create_topic(userid: $userid, topicname: $topicname)
}
    `;
export type CreateTagMutationFn = Apollo.MutationFunction<CreateTagMutation, CreateTagMutationVariables>;

/**
 * __useCreateTagMutation__
 *
 * To run a mutation, you first call `useCreateTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTagMutation, { data, loading, error }] = useCreateTagMutation({
 *   variables: {
 *      userid: // value for 'userid'
 *      topicname: // value for 'topicname'
 *   },
 * });
 */
export function useCreateTagMutation(baseOptions?: Apollo.MutationHookOptions<CreateTagMutation, CreateTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTagMutation, CreateTagMutationVariables>(CreateTagDocument, options);
      }
export type CreateTagMutationHookResult = ReturnType<typeof useCreateTagMutation>;
export type CreateTagMutationResult = Apollo.MutationResult<CreateTagMutation>;
export type CreateTagMutationOptions = Apollo.BaseMutationOptions<CreateTagMutation, CreateTagMutationVariables>;
export const DeleteTopicDocument = gql`
    mutation DeleteTopic($topicid: Int) {
  delete_topic(topicid: $topicid)
}
    `;
export type DeleteTopicMutationFn = Apollo.MutationFunction<DeleteTopicMutation, DeleteTopicMutationVariables>;

/**
 * __useDeleteTopicMutation__
 *
 * To run a mutation, you first call `useDeleteTopicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTopicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTopicMutation, { data, loading, error }] = useDeleteTopicMutation({
 *   variables: {
 *      topicid: // value for 'topicid'
 *   },
 * });
 */
export function useDeleteTopicMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTopicMutation, DeleteTopicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTopicMutation, DeleteTopicMutationVariables>(DeleteTopicDocument, options);
      }
export type DeleteTopicMutationHookResult = ReturnType<typeof useDeleteTopicMutation>;
export type DeleteTopicMutationResult = Apollo.MutationResult<DeleteTopicMutation>;
export type DeleteTopicMutationOptions = Apollo.BaseMutationOptions<DeleteTopicMutation, DeleteTopicMutationVariables>;
export const GetAccountDocument = gql`
    query GetAccount {
  account {
    userid
    username
    fullname
    email
    address
    role {
      roleid
    }
    phone
    image
    gender
    birthday
    reputation
  }
}
    `;

/**
 * __useGetAccountQuery__
 *
 * To run a query within a React component, call `useGetAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAccountQuery(baseOptions?: Apollo.QueryHookOptions<GetAccountQuery, GetAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccountQuery, GetAccountQueryVariables>(GetAccountDocument, options);
      }
export function useGetAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountQuery, GetAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccountQuery, GetAccountQueryVariables>(GetAccountDocument, options);
        }
export function useGetAccountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAccountQuery, GetAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAccountQuery, GetAccountQueryVariables>(GetAccountDocument, options);
        }
export type GetAccountQueryHookResult = ReturnType<typeof useGetAccountQuery>;
export type GetAccountLazyQueryHookResult = ReturnType<typeof useGetAccountLazyQuery>;
export type GetAccountSuspenseQueryHookResult = ReturnType<typeof useGetAccountSuspenseQuery>;
export type GetAccountQueryResult = Apollo.QueryResult<GetAccountQuery, GetAccountQueryVariables>;
export const GetAccountByPkDocument = gql`
    query GetAccountByPk($userId: String!) {
  find_account_by_id(userid: $userId) {
    username
    fullname
    email
    address
    role {
      roleid
    }
    phone
    image
    gender
    birthday
    userid
    reputation
  }
}
    `;

/**
 * __useGetAccountByPkQuery__
 *
 * To run a query within a React component, call `useGetAccountByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAccountByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAccountByPkQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetAccountByPkQuery(baseOptions: Apollo.QueryHookOptions<GetAccountByPkQuery, GetAccountByPkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAccountByPkQuery, GetAccountByPkQueryVariables>(GetAccountByPkDocument, options);
      }
export function useGetAccountByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAccountByPkQuery, GetAccountByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAccountByPkQuery, GetAccountByPkQueryVariables>(GetAccountByPkDocument, options);
        }
export function useGetAccountByPkSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAccountByPkQuery, GetAccountByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAccountByPkQuery, GetAccountByPkQueryVariables>(GetAccountByPkDocument, options);
        }
export type GetAccountByPkQueryHookResult = ReturnType<typeof useGetAccountByPkQuery>;
export type GetAccountByPkLazyQueryHookResult = ReturnType<typeof useGetAccountByPkLazyQuery>;
export type GetAccountByPkSuspenseQueryHookResult = ReturnType<typeof useGetAccountByPkSuspenseQuery>;
export type GetAccountByPkQueryResult = Apollo.QueryResult<GetAccountByPkQuery, GetAccountByPkQueryVariables>;
export const UpdateAccountDocument = gql`
    mutation UpdateAccount($user: UserRequest) {
  account_update(user: $user) {
    userid
  }
}
    `;
export type UpdateAccountMutationFn = Apollo.MutationFunction<UpdateAccountMutation, UpdateAccountMutationVariables>;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useUpdateAccountMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAccountMutation, UpdateAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAccountMutation, UpdateAccountMutationVariables>(UpdateAccountDocument, options);
      }
export type UpdateAccountMutationHookResult = ReturnType<typeof useUpdateAccountMutation>;
export type UpdateAccountMutationResult = Apollo.MutationResult<UpdateAccountMutation>;
export type UpdateAccountMutationOptions = Apollo.BaseMutationOptions<UpdateAccountMutation, UpdateAccountMutationVariables>;
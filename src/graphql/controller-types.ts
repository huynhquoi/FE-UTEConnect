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
};

export type Bookmark = {
  __typename?: 'Bookmark';
  bookmarkid: Scalars['Int']['output'];
  createday?: Maybe<Scalars['Date']['output']>;
  post_bookmark?: Maybe<Post>;
  user_bookmark?: Maybe<User>;
};

export type BookmarkRequest = {
  createday?: InputMaybe<Scalars['Date']['input']>;
  post_bookmarkid?: InputMaybe<Scalars['Int']['input']>;
  user_bookmarkid?: InputMaybe<Scalars['Int']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  comment_comment?: Maybe<Array<Maybe<Comment>>>;
  commentid: Scalars['Int']['output'];
  commentimage?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createday?: Maybe<Scalars['Date']['output']>;
  isdelete?: Maybe<Scalars['Int']['output']>;
  post_comment?: Maybe<Post>;
  updateday?: Maybe<Scalars['Date']['output']>;
  user_comment?: Maybe<User>;
};

export type CommentRequest = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
  commentimage?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createday?: InputMaybe<Scalars['Date']['input']>;
  isdelete?: InputMaybe<Scalars['Int']['input']>;
  post_commentid?: InputMaybe<Scalars['Int']['input']>;
  updateday?: InputMaybe<Scalars['Date']['input']>;
  user_commentid?: InputMaybe<Scalars['Int']['input']>;
};

export type Comment_Like = {
  __typename?: 'Comment_Like';
  comment_commentlike?: Maybe<Comment>;
  commentlikeid: Scalars['Int']['output'];
  icon_commentlike?: Maybe<Icon>;
  user_commentlike?: Maybe<User>;
};

export type Comment_LikeRequest = {
  comment_commentlikeid?: InputMaybe<Scalars['Int']['input']>;
  icon_commentlikeid?: InputMaybe<Scalars['Int']['input']>;
  user_commentlikeid?: InputMaybe<Scalars['Int']['input']>;
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

export type Image_Comment = {
  __typename?: 'Image_Comment';
  comment_image?: Maybe<Comment>;
  imagecommenttid?: Maybe<Scalars['Int']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Image_CommentRequest = {
  comment_image?: InputMaybe<Scalars['Int']['input']>;
  imagecommenttid?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Image_Post = {
  __typename?: 'Image_Post';
  imagepostid?: Maybe<Scalars['Int']['output']>;
  post_image?: Maybe<Post>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Image_PostRequest = {
  imagepostid?: InputMaybe<Scalars['Int']['input']>;
  post_image?: InputMaybe<Scalars['Int']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**     User */
  account_update?: Maybe<User>;
  createIcon?: Maybe<Icon>;
  /**     Bookmark */
  create_bookmark?: Maybe<Bookmark>;
  create_comment?: Maybe<Comment>;
  /**     Notice */
  create_notice?: Maybe<Notice>;
  create_post?: Maybe<Post>;
  delete_bookmark?: Maybe<Scalars['String']['output']>;
  delete_comment_by_pk?: Maybe<Scalars['String']['output']>;
  delete_notice?: Maybe<Scalars['String']['output']>;
  delete_post_by_pk?: Maybe<Scalars['String']['output']>;
  find_all_comment_by_postid?: Maybe<Array<Maybe<Comment>>>;
  find_all_dislikecomment_by_commentid?: Maybe<Scalars['Int']['output']>;
  find_all_dislikepost_by_postid?: Maybe<Scalars['Int']['output']>;
  /**     CommentLike */
  find_all_likecomment_by_commentid?: Maybe<Scalars['Int']['output']>;
  /**     PostLike */
  find_all_likepost_by_postid?: Maybe<Scalars['Int']['output']>;
  hide_post?: Maybe<Post>;
  /**     Comment */
  update_comment_by_pk?: Maybe<Comment>;
  /**     Post */
  update_post_by_pk?: Maybe<Post>;
};


export type MutationAccount_UpdateArgs = {
  user?: InputMaybe<UserRequest>;
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
  post?: InputMaybe<PostRequest>;
  user?: InputMaybe<UserRequest>;
};


export type MutationCreate_NoticeArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreate_PostArgs = {
  post?: InputMaybe<PostRequest>;
  topic?: InputMaybe<TopicRequest>;
  user?: InputMaybe<UserRequest>;
};


export type MutationDelete_BookmarkArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDelete_Comment_By_PkArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDelete_NoticeArgs = {
  noticeid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationDelete_Post_By_PkArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationFind_All_Comment_By_PostidArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationFind_All_Dislikecomment_By_CommentidArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationFind_All_Dislikepost_By_PostidArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationFind_All_Likecomment_By_CommentidArgs = {
  commentid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationFind_All_Likepost_By_PostidArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationHide_PostArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdate_Comment_By_PkArgs = {
  comment?: InputMaybe<CommentRequest>;
};


export type MutationUpdate_Post_By_PkArgs = {
  post?: InputMaybe<PostRequest>;
  topic?: InputMaybe<TopicRequest>;
};

export type Notice = {
  __typename?: 'Notice';
  content?: Maybe<Scalars['String']['output']>;
  createday?: Maybe<Scalars['Date']['output']>;
  noticeid?: Maybe<Scalars['Int']['output']>;
  user_notice?: Maybe<User>;
};

export type NoticeRequest = {
  content?: InputMaybe<Scalars['String']['input']>;
  createday?: InputMaybe<Scalars['Date']['input']>;
  noticeid?: InputMaybe<Scalars['Int']['input']>;
  user_notice?: InputMaybe<Scalars['Int']['input']>;
};

export type Post = {
  __typename?: 'Post';
  content?: Maybe<Scalars['String']['output']>;
  createday?: Maybe<Scalars['Date']['output']>;
  isdelete?: Maybe<Scalars['Int']['output']>;
  ishide?: Maybe<Scalars['Int']['output']>;
  postid: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  topic_post?: Maybe<Topic>;
  updateday?: Maybe<Scalars['Date']['output']>;
  user_post?: Maybe<User>;
};

export type PostRequest = {
  content?: InputMaybe<Scalars['String']['input']>;
  createday?: InputMaybe<Scalars['Date']['input']>;
  isdelete?: InputMaybe<Scalars['Int']['input']>;
  ishide?: InputMaybe<Scalars['Int']['input']>;
  postid?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic_postid?: InputMaybe<Scalars['Int']['input']>;
  updateday?: InputMaybe<Scalars['Date']['input']>;
  user_post?: InputMaybe<Scalars['String']['input']>;
};

export type Post_Like = {
  __typename?: 'Post_Like';
  icon_postlike?: Maybe<Icon>;
  post_postlike?: Maybe<Post>;
  postlikeid: Scalars['Int']['output'];
  user_postlike?: Maybe<User>;
};

export type Post_LikeRequest = {
  icon_postlikeid?: InputMaybe<Scalars['Int']['input']>;
  post_postlikeid?: InputMaybe<Scalars['Int']['input']>;
  user_postlikeid?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Array<Maybe<User>>>;
  comment?: Maybe<Array<Maybe<Comment>>>;
  find_account_by_id?: Maybe<User>;
  find_all_bookmark_by_userid?: Maybe<Array<Maybe<Bookmark>>>;
  find_all_notice_by_userid?: Maybe<Array<Maybe<Notice>>>;
  find_post_by_id?: Maybe<Post>;
  iconList?: Maybe<Array<Maybe<Icon>>>;
  post?: Maybe<Array<Maybe<Post>>>;
};


export type QueryFind_Account_By_IdArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_All_Bookmark_By_UseridArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_All_Notice_By_UseridArgs = {
  userid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFind_Post_By_IdArgs = {
  postid?: InputMaybe<Scalars['Int']['input']>;
};

export type Role = {
  __typename?: 'Role';
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  roleid: Scalars['Int']['output'];
  rolename?: Maybe<Scalars['String']['output']>;
};

export type Topic = {
  __typename?: 'Topic';
  createday?: Maybe<Scalars['String']['output']>;
  isdelete?: Maybe<Scalars['Int']['output']>;
  ishide?: Maybe<Scalars['Int']['output']>;
  topicid: Scalars['Int']['output'];
  topicname?: Maybe<Scalars['String']['output']>;
  user_topic?: Maybe<User>;
};

export type TopicRequest = {
  createday?: InputMaybe<Scalars['String']['input']>;
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
  email?: Maybe<Scalars['String']['output']>;
  fullname?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  isban?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  userid: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserRequest = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  isban?: InputMaybe<Scalars['Int']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  roleid?: InputMaybe<Scalars['Int']['input']>;
  userid?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type GetAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAccountQuery = { __typename?: 'Query', account?: Array<{ __typename?: 'User', userid: string, username?: string | null, fullname?: string | null, email?: string | null, address?: string | null, phone?: string | null, image?: string | null, gender?: string | null, birthday?: any | null, role?: { __typename?: 'Role', roleid: number } | null } | null> | null };

export type GetAccountByPkQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetAccountByPkQuery = { __typename?: 'Query', find_account_by_id?: { __typename?: 'User', username?: string | null, fullname?: string | null, email?: string | null, address?: string | null, phone?: string | null, image?: string | null, gender?: string | null, birthday?: any | null, role?: { __typename?: 'Role', roleid: number } | null } | null };


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
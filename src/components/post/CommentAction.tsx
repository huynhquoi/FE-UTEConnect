import {
  useCreateCommentReactionMutation,
  useDeleteCommentReactionMutation,
  useGetCommentDislikeQuery,
  useGetCommentLikeQuery,
  useGetListCommentDislikeQuery,
  useGetListCommentLikeQuery,
} from "@/graphql/controller-types";
import { Button, Flex, Space } from "antd";
import { useEffect, useState } from "react";

import {
  DownOutlined,
  UpOutlined,
  LikeFilled,
  LikeOutlined,
  DislikeFilled,
  DislikeOutlined,
} from "@ant-design/icons";
import { TYPE_DISLIKE, TYPE_LIKE } from "@/graphql/default-types";

type CommentActionProps = {
  userId: string;
  commentId: number;
};

const CommentAction = ({ commentId, userId }: CommentActionProps) => {
  const [reaction, setReaction] = useState(0);
  const [isReactioned, setIsReactioned] = useState(0);

  const [CreateReaction] = useCreateCommentReactionMutation();
  const [DeleteReaction] = useDeleteCommentReactionMutation();

  const { data: like, fetchMore: fetchLike } = useGetListCommentLikeQuery({
    variables: {
      commentid: commentId,
    },
  });
  const { data: dislike, fetchMore: fetchDislike } =
    useGetListCommentDislikeQuery({
      variables: {
        commentid: commentId,
      },
    });

  useEffect(() => {
    if (
      like?.list_commentlike_by_commentid
        ?.map((e) => e?.user_commentlike?.userid)
        .some((c) => c === userId)
    ) {
      setIsReactioned(TYPE_LIKE);
      return;
    }
    if (
      dislike?.list_commentdislike_by_commentid
        ?.map((e) => e?.user_commentlike?.userid)
        .some((c) => c === userId)
    ) {
      setIsReactioned(TYPE_DISLIKE);
      return;
    }
  }, [
    dislike?.list_commentdislike_by_commentid,
    like?.list_commentlike_by_commentid,
    userId,
  ]);

  useEffect(() => {
    if (!reaction) {
      return;
    }
    const fetchData = () => {
      fetchLike({
        variables: {
          commentid: commentId,
        },
      });
      fetchDislike({
        variables: {
          commentid: commentId,
        },
      });
    };
    if (!isReactioned) {
      CreateReaction({
        variables: {
          userid: userId,
          commentid: commentId,
          iconid: reaction,
        },
      }).then(() => {
        fetchData();
      });
    } else {
      DeleteReaction({
        variables: {
          userid: userId,
          commentid: commentId,
          iconid: isReactioned,
        },
      }).then(() => {
        if (isReactioned !== reaction) {
          CreateReaction({
            variables: {
              userid: userId,
              commentid: commentId,
              iconid: reaction,
            },
          }).then(() => {
            fetchData();
          });
        } else {
          fetchData();
          setIsReactioned(0);
        }
      });
    }
    setReaction(0);
  }, [
    CreateReaction,
    DeleteReaction,
    commentId,
    fetchDislike,
    fetchLike,
    isReactioned,
    reaction,
    userId,
  ]);

  return (
    <>
      <Flex justify="space-between" align="center" className="pr-2">
        <Space>
          <Button
            onClick={() => setReaction(TYPE_LIKE)}
            type="text"
            style={{
              fontSize: "12px",
              padding: 0,
            }}
          >
            <Flex align="center" justify="space-between">
              {like?.list_commentlike_by_commentid?.length}
              {isReactioned === TYPE_LIKE ? (
                <LikeFilled className="ml-2" />
              ) : (
                <LikeOutlined className="ml-2" />
              )}
            </Flex>
          </Button>
          <Button
            onClick={() => setReaction(TYPE_DISLIKE)}
            type="text"
            style={{
              fontSize: "12px",
              padding: 0,
            }}
          >
            <Flex align="center" justify="space-between">
              {dislike?.list_commentdislike_by_commentid?.length}
              {isReactioned === TYPE_DISLIKE ? (
                <DislikeFilled className="ml-2" />
              ) : (
                <DislikeOutlined className="ml-2" />
              )}
            </Flex>
          </Button>
        </Space>
      </Flex>
    </>
  );
};

export default CommentAction;

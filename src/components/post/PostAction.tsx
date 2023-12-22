import {
  useCreatePostReactionMutation,
  useDeletePostReactionMutation,
  useFindPosLikeQuery,
  useGetPostDislikeQuery,
  useGetPostLikeQuery,
} from "@/graphql/controller-types";
import { Button, Flex, Space } from "antd";
import { useEffect, useState } from "react";

import {
  FlagFilled,
  FlagOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  DislikeOutlined,
} from "@ant-design/icons";
import { TYPE_DISLIKE, TYPE_LIKE } from "@/graphql/default-types";
import { usePostReaction } from "@/hook/useUser";

type PostActionProps = {
  postId: number;
  userId: string;
};

const PostAction = ({ postId, userId }: PostActionProps) => {
  const [reaction, setReaction] = useState(0);

  const [CreateReaction, { loading: loadingCreate }] =
    useCreatePostReactionMutation();
  const [DeleteReaction, { loading: loadingDeleted }] =
    useDeletePostReactionMutation();

  const [isReact, setIsReact] = useState(false);
  const [reacted, setReacted] = useState(0);

  const { data: postReaction, fetchMore } = useFindPosLikeQuery({
    variables: {
      postid: postId,
      userid: userId,
    },
  });

  const { data: like, fetchMore: fetchLike } = useGetPostLikeQuery({
    variables: {
      postid: postId,
    },
  });
  const { data: dislike, fetchMore: fetchDislike } = useGetPostDislikeQuery({
    variables: {
      postid: postId,
    },
  });

  useEffect(() => {
    if (!postId) {
      return;
    }
    if (
      postReaction?.find_postlike_by_postid_and_userid?.post_postlike
        ?.postid === postId
    ) {
      setIsReact(true);
      setReacted(
        postReaction?.find_postlike_by_postid_and_userid?.icon_postlike
          ?.iconid as number
      );
    } else {
      setIsReact(false);
      setReacted(0);
    }
  }, [postId, postReaction]);

  useEffect(() => {
    if (!reaction) {
      return;
    }
    const fetchData = () => {
      fetchLike({
        variables: {
          postid: postId,
        },
      });
      fetchDislike({
        variables: {
          postid: postId,
        },
      });
      fetchMore({
        variables: {
          postid: postId,
          userid: userId,
        },
      });
    };
    if (!isReact) {
      CreateReaction({
        variables: {
          postid: postId,
          userid: userId,
          iconid: reaction,
        },
      }).then(() => {
        fetchData();
      });
    } else {
      DeleteReaction({
        variables: {
          iconid: reacted,
          postid: postId,
          userid: userId,
        },
      }).then(() => {
        fetchData();
      });
    }

    setReaction(0);
  }, [
    CreateReaction,
    DeleteReaction,
    fetchDislike,
    fetchLike,
    fetchMore,
    isReact,
    postId,
    reacted,
    reaction,
    userId,
  ]);

  return (
    <>
      <Flex justify="space-between" align="center">
        <Space>
          <Button
            type="text"
            onClick={() => setReaction(TYPE_LIKE)}
            disabled={loadingCreate || loadingDeleted}
          >
            <Flex align="center">
              {like?.find_all_likepost_by_postid}{" "}
              {isReact && reacted === TYPE_LIKE ? (
                <LikeFilled className="ml-2" />
              ) : (
                <LikeOutlined className="ml-2" />
              )}
            </Flex>
          </Button>
          <Button
            type="text"
            onClick={() => setReaction(TYPE_DISLIKE)}
            disabled={loadingCreate || loadingDeleted}
          >
            <Flex align="center">
              {dislike?.find_all_dislikepost_by_postid}{" "}
              {isReact && reacted === TYPE_DISLIKE ? (
                <DislikeFilled className="ml-2" />
              ) : (
                <DislikeOutlined className="ml-2" />
              )}
            </Flex>
          </Button>
        </Space>
        {/* <Button>
          <Flex align="center" justify="space-between">
            <FlagFilled className="pr-2"></FlagFilled> Theo dõi
          </Flex>
        </Button>
        <Button style={{ background: "#000", color: "#fff" }}>
          <Flex align="center" justify="space-between">
            <FlagFilled className="pr-2"></FlagFilled> Bỏ theo dõi
          </Flex>
        </Button> */}
      </Flex>
    </>
  );
};

export default PostAction;

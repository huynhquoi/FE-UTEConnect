import {
  useCreatePostReactionMutation,
  useDeletePostReactionMutation,
  useGetPostDislikeQuery,
  useGetPostLikeQuery,
} from "@/graphql/controller-types";
import { Button, Flex, Space } from "antd";
import { useEffect, useState } from "react";

import { FlagFilled, FlagOutlined } from "@ant-design/icons";
import { TYPE_DISLIKE, TYPE_LIKE } from "@/graphql/default-types";

type PostActionProps = {
  postId: number;
  userId: string;
};

const PostAction = ({ postId, userId }: PostActionProps) => {
  const [reaction, setReaction] = useState(0);

  const [CreateReaction] = useCreatePostReactionMutation();
  const [DeleteReaction] = useDeletePostReactionMutation();

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
    if (!reaction) {
      return;
    }
    CreateReaction({
      variables: {
        postid: postId,
        userid: userId,
        iconid: reaction === TYPE_LIKE ? TYPE_LIKE : TYPE_DISLIKE,
      },
    }).then(() => {
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
    });

    setReaction(0);
  }, [CreateReaction, fetchDislike, fetchLike, postId, reaction, userId]);

  return (
    <>
      <Flex justify="space-between" align="center">
        <Space>
          <Button type="text" onClick={() => setReaction(TYPE_LIKE)}>
            {like?.find_all_likepost_by_postid} Like
          </Button>
          <Button type="text" onClick={() => setReaction(TYPE_DISLIKE)}>
            {dislike?.find_all_dislikepost_by_postid} Dislike
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

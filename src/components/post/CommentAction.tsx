import {
  useCreateCommentReactionMutation,
  useDeleteCommentReactionMutation,
  useGetCommentDislikeQuery,
  useGetCommentLikeQuery,
} from "@/graphql/controller-types";
import { Button, Flex, Space } from "antd";
import { useState } from "react";

import { DownOutlined, UpOutlined } from "@ant-design/icons";

type CommentActionProps = {
  commentId: number;
};

const CommentAction = ({ commentId }: CommentActionProps) => {
  const [reaction, setReaction] = useState("");

  const [CreateReaction] = useCreateCommentReactionMutation();
  const [DeleteReaction] = useDeleteCommentReactionMutation();

  const { data: like } = useGetCommentLikeQuery({
    variables: {
      commentid: commentId,
    },
  });
  const { data: dislike } = useGetCommentDislikeQuery({
    variables: {
      commentid: commentId,
    },
  });
  return (
    <>
      <Flex justify="space-between" align="center" className="pr-2">
        <Space>
          <Button type="text" style={{ fontSize: "12px", padding: 0 }}>
            <Flex align="center" justify="space-between">
              {like?.find_all_likecomment_by_commentid}
              <UpOutlined className="ml-2" />
            </Flex>
          </Button>
          <Button type="text" style={{ fontSize: "12px", padding: 0 }}>
            <Flex align="center" justify="space-between">
              {dislike?.find_all_dislikecomment_by_commentid}
              <DownOutlined className="ml-2" />
            </Flex>
          </Button>
        </Space>
      </Flex>
    </>
  );
};

export default CommentAction;

import styled from '@emotion/styled';

const PostCardContainer = styled.div`
  width: 234px;
  min-width: 234px;
  height: 234px;
  border-radius: 8px;
  border: 1px solid #eeeeee;
  margin-right: 20px;
`;

const PostCard = ({ id, content, handlePostDetail }) => {
  return (
    <PostCardContainer onClick={() => handlePostDetail(id)}>{content}</PostCardContainer>
  );
};

export default PostCard;

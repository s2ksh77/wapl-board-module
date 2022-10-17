import styled from '@emotion/styled';
import { useNavigate, useParams } from 'react-router-dom';
import CommentList from '../Comment/CommentList';

const Editor = styled.div`
  background-color: yellow;
  height: 500px;
`;

const PostDetail = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const handleBackBtn = () => navigate(-1);
  return (
    <>
      <button onClick={handleBackBtn}>⬅</button>
      <div>PostDetail {postId}</div>
      <Editor>에디터어어어~~</Editor>
      <CommentList />
    </>
  );
};

export default PostDetail;

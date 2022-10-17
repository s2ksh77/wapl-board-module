import styled from '@emotion/styled';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PostCard from './PostCard';
import { data } from './PostTable';

const GalaryList = styled.div`
  display: flex;
  overflow-x: auto;
`;

const PostGalary = () => {
  const navigate = useNavigate();

  const handlePostDetail = useCallback(
    (id) => {
      navigate(`/board/galary/${id}`);
    },
    [navigate]
  );

  return (
    <div id="galaryContainer">
      <GalaryList>
        {data?.map((item) => (
          <PostCard key={item.id} {...item} handlePostDetail={handlePostDetail} />
        ))}
      </GalaryList>
    </div>
  );
};

export default PostGalary;

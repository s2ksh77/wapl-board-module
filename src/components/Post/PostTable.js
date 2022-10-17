import { List, Grid, ListItem } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PostItem from './PostItem';

export const data = [
  {
    id: 1,
    content: 'test1',
    date: '2022.10.17',
  },
  {
    id: 2,
    content: 'test2',
    date: '2022.10.17',
  },
  {
    id: 3,
    content: 'test3',
    date: '2022.10.17',
  },
  {
    id: 4,
    content: 'test1',
    date: '2022.10.17',
  },
  {
    id: 5,
    content: 'test1',
    date: '2022.10.17',
  },
  {
    id: 6,
    content: 'test1',
    date: '2022.10.17',
  },
  {
    id: 7,
    content: 'test1',
    date: '2022.10.17',
  },
  {
    id: 8,
    content: 'test1',
    date: '2022.10.17',
  },
  {
    id: 9,
    content: 'test1',
    date: '2022.10.17',
  },
];

const PostTable = () => {
  const navigate = useNavigate();

  const handlePostDetail = useCallback((id) => {
    navigate(`/board/table/${id}`);
  }, []);

  return (
    <List>
      <ListItem divider={true}>
        <Grid container>
          <Grid item xs={6}>
            게시글
          </Grid>
          <Grid item xs={2}>
            작성자
          </Grid>
          <Grid item xs={3}>
            작성일
          </Grid>
        </Grid>
      </ListItem>
      {data?.map((item) => (
        <PostItem key={item.id} post={item} handlePostDetail={handlePostDetail} />
      ))}
    </List>
  );
};

export default PostTable;

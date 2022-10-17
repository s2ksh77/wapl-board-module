import { Grid, ListItem } from '@mui/material';

const PostItem = ({ post, handlePostDetail }) => {
  return (
    <ListItem onClick={() => handlePostDetail(post.id)}>
      <Grid container>
        <Grid item xs={6}>
          {post.id}
        </Grid>
        <Grid item xs={2}>
          {post.content}
        </Grid>
        <Grid item xs={3}>
          {post.date}
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default PostItem;

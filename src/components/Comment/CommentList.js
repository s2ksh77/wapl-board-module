import styled from '@emotion/styled';
import CommentItem from './CommentItem';

const CommentListContainer = styled.ul``;

const CommentList = () => {
  const testData = [
    {
      id: 1,
      comment: '하이',
      date: '2022.10.15',
      children: [],
    },
    {
      id: 2,
      comment: 'asdf',
      date: '2022.10.15',
      children: [
        {
          id: 44,
          comment: 'ggg',
          date: '2022.10.15',
        },
        {
          id: 55,
          comment: '12341',
          date: '2022.10.15',
        },
      ],
    },
    {
      id: 3,
      comment: '없는애',
      date: '2022.10.15',
      children: [],
    },
  ];

  return (
    <CommentListContainer>
      {testData.map((item) => (
        <CommentItem key={item.id} {...item} />
      ))}
    </CommentListContainer>
  );
};

export default CommentList;

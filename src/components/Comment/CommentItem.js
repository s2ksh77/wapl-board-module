import styled from '@emotion/styled';

const CommentContainer = styled.li`
  display: flex;
  flex-direction: row;
  height: 120px;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  margin-left: ${({ isChild }) => (isChild ? '60px' : '')};
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;
const CommentProfile = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid #eeeeee;
  border-radius: 50px;
  margin-right: 20px;
  background-color: red;
`;
const CommentContent = styled.div`
  flex: 1 auto;
`;

const CommentItem = ({ id, comment, date, children, isChild = false }) => {
  return (
    <>
      <CommentContainer isChild={isChild}>
        <CommentProfile />
        <CommentContent>
          <div>작성자 : {id}</div>
          <div>내용 : {comment}</div>
          <div>시간 {date}</div>
        </CommentContent>
      </CommentContainer>
      {children?.map((child) => (
        <CommentItem key={child.id} {...child} isChild />
      ))}
    </>
  );
};

export default CommentItem;

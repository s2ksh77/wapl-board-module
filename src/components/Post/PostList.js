import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PostList = ({ mode }) => {
  const [view, setView] = useState(mode);
  const navigate = useNavigate();
  const toggleView = () => setView(view === 'table' ? 'card' : 'table');

  useEffect(() => {
    setView(mode);
  }, [mode]);

  useEffect(() => {
    navigate(view === 'table' ? '/board/table' : '/board/galary');
  }, [view]);

  return (
    <>
      <button onClick={toggleView}>모드 변경</button>
      <h1>게시판</h1>
      <Outlet />
    </>
  );
};

export default PostList;

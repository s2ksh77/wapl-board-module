import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PostDetail from './components/Post/PostDetail';
import PostGalary from './components/Post/PostGalary';
import PostList from './components/Post/PostList';
import PostTable from './components/Post/PostTable';

const Board = ({ mode = 'card' }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/board" replace />} />
        <Route path="/board/*" element={<PostList mode={mode} />}>
          <Route path="table" element={<PostTable />} />
          <Route path="table/:postId" element={<PostDetail />} />
          <Route path="galary" element={<PostGalary />} />
          <Route path="galary/:postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Board;

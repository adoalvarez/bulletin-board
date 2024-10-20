import PostModal from '../component/modals/PostModal'
import BulletinBoard from './Bulletin'
import { useBoardContext } from '../store/BoardContext';
import EditModal from '../component/modals/EditModal';

function App() {

  const { editModal, postModal } = useBoardContext();

  return (
    <div className="main-content mx-32 md:mx-72 mt-10 md:mt-24">
      <div className="main-container">
        <BulletinBoard /> 
      </div>
      {postModal && <PostModal />}
      {editModal && <EditModal />}
    </div>
  )
}

export default App

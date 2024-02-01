import { Modal } from "../components/Modal";
import { NewPost } from "../components/NewPost";

export function CreatePost() {
  return (
    <Modal isModalOpen={true}><NewPost /></Modal>
  );
}
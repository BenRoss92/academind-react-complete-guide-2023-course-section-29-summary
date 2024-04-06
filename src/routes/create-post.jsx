import { Modal } from "../components/Modal";
import { NewPost } from "../components/NewPost";

export function CreatePost() {
  return (
    // TODO: Put Modal inside of NewPost, not outside of it (don't wrap it with Modal, put it inside)
    <Modal isModalOpen={true}><NewPost /></Modal>
  );
}
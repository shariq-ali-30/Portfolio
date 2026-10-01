import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

const DeleteConfirmBox = ({
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    itemToDelete
}) => {

    const deleteSkill = (id) => {
        deleteDoc(doc(db, "skills", id));
        closeModal()
    };

    const deleteProject = (id) => {
        deleteDoc(doc(db, "projects", id));
        closeModal()
    };

    const closeModal = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <div
            className={`delete-modal-container ${isDeleteModalOpen ? "active" : ""
                }`}
        >
            <div className="delete-modal">
                <div className="delete-modal-header">
                    <div className="delete-modal-icon">
                        <i className="ph ph-trash"></i>
                    </div>

                    <button
                        type="button"
                        className="delete-modal-close"
                        onClick={closeModal}
                    >
                        <i className="ph ph-x"></i>
                    </button>
                </div>

                <div className="delete-modal-content">
                    <h2>Delete {itemToDelete?.deleteType}?</h2>

                    <p>
                        Are you sure you want to delete "{itemToDelete?.deleteName.trim()}"? This action cannot
                        be undone.
                    </p>
                </div>

                <div className="delete-modal-footer">
                    <button
                        type="button"
                        className="delete-modal-cancel-btn"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => {
                            itemToDelete?.deleteType == "Project" ? deleteProject(itemToDelete?.id) : deleteSkill(itemToDelete?.id)
                        }}
                        type="button"
                        className="delete-modal-confirm-btn"
                    >
                        <i className="ph ph-trash"></i>
                        Delete {itemToDelete?.deleteType}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmBox;

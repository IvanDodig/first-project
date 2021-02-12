import { Modal } from "react-bootstrap";
import { useState } from "react";

const Photo = ({ photo }) => {
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   return (
      <div className="card">
         <img
            className="card-img-top"
            src={photo.thumbnailUrl}
            onClick={handleShow}
         ></img>
         <div className="card-body">
            <h5 className="card-title">{photo.title}</h5>

            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  <Modal.Title>Slika</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <img src={photo.url} style={{ width: "100%" }}></img>
               </Modal.Body>
            </Modal>
         </div>
      </div>
   );
};

export default Photo;

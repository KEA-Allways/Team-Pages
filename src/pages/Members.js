import React, {useState} from "react";
import Navbar from "./Navbar";
import Modal from 'react-modal';
import { customModalStyles } from '../styles/ModalStyles';
import ModalContent from './ModalContent';
import '../styles/members.css';
import "../styles/styles.css"
import { motion } from "framer-motion";
Modal.setAppElement('#root');

const cardVariants = {
    hidden: {
      opacity: 0,
      y: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        
      }
    }
  };

function Members(){
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState(null);

    const handleImageClick = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setModalType(null);
        setIsModalOpen(false);
    };

    return(
        <div>
            <Navbar />
            <header className="header">
                <h1>
                    Fancy Members
                </h1>
            </header>
            <body>
            <div style={{display : "flex", padding:"10px"}}>
                <motion.div className="card" style={{ width: '25rem' }}
                variants={cardVariants} initial="hidden" animate="visible" custom={0}>

                    <img width="150px" src="/suha.png" alt="Suha Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 수하입니다.<br/> 반갑습니다.</p>
                        <button class="btn btn-primary fw-bold"onClick={() => handleImageClick('suha')}>View more</button>
                    </div>
                </motion.div>

                <motion.div className="card" style={{ width: '25rem' }}
                variants={cardVariants} initial="hidden" animate="visible" custom={0}>

                    <img width="150px" src="/Sungjun.png" alt="Sungjun Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 성준입니다.<br/> 반갑습니다.</p>
                        <button class="btn btn-primary fw-bold" onClick={() => handleImageClick('sungjun')}>View more</button>
                    </div>
                </motion.div>

                <motion.div className="card" style={{ width: '25rem' }}
                variants={cardVariants} initial="hidden" animate="visible" custom={0}>

                    <img width="150px" src="/changmeen.png" alt="Changmeen Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 창민입니다.<br/> 반갑습니다.</p>
                        <button class="btn btn-primary fw-bold" onClick={() => handleImageClick('changmeen')}>View more</button>
                    </div>
                    </motion.div>

                    <motion.div className="card" style={{ width: '25rem' }}
                variants={cardVariants} initial="hidden" animate="visible" custom={0}>

                    <img width="150px" src="/dajeong.png" alt="Dajeong Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 다정입니다.<br/> 반갑습니다.</p>
                        <button class="btn btn-primary fw-bold" onClick={() => handleImageClick('dajeong')}>View more</button>
                    </div>
                    </motion.div>

                    <motion.div className="card" style={{ width: '25rem' }}
                variants={cardVariants} initial="hidden" animate="visible" custom={0}>

                    <img width="150px" src="/minjun.png" alt="Minjun Image" className="card-img-top" />
                    
                    <div className="card-body">
                        <p className="card-text">안녕하세요 민준입니다.<br/> 반갑습니다.</p>
                        <button class="btn btn-primary fw-bold" onClick={() => handleImageClick('minjun')}>View more</button>
                    </div>
                    </motion.div>
                </div>
            </body>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                style={customModalStyles}
                overlayClassName={{
                  base: "overlay-base",
                  afterOpen: "overlay-after",
                  beforeClose: "overlay-before"
                }}
                className={{
                  base: "content-base",
                  afterOpen: "content-after",
                  beforeClose: "content-before"
                }}
            >
                <ModalContent modalType={modalType} closeModal={closeModal}/>
            </Modal>
            
        </div>
    )
}

export default Members;
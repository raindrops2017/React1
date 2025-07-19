import style from "./Modal.module.css";
export default function Modal(props) {
  return (
    <>
      <div
        className={`${style.modal} position-fixed top-0 start-0 w-100 h-100 bg-primary bg-opacity-25 justify-content-center align-items-center ${
          props.open ? "d-flex" : "d-none" 
        }`} onClick={()=> {props.closeModal(false)}}
      >
        <img className={style.modalImg} src={props.image} alt="" />
      </div>
    </>
  );
}

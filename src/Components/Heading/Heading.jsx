import style from './Heading.module.css'
export default function Heading(props) {
  return (
    <>
    <div className="text-center mb-3">
        <h1 className={`text-uppercase fw-bolder fs-1 mb-3 ${props.textColor}`}>{props.title}</h1>
        <div className={`d-flex justify-content-center align-items-center ${props.textColor}`}>
            <div className={`${style.line} ${props.bgColor}`}></div>
            <i className="fa-solid fa-star mx-3"></i>
            <div className={`${style.line}  ${props.bgColor}`}></div>
        </div>
    </div>
      
    </>
  )
}

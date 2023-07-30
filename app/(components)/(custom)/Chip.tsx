'use client'

const Chip = (props: any) => {
    return (
        <button onClick={() => props.onBtnClick(props)} className={props.className + ' flex justify-center items-center rounded-full m-2 text-center w-24 border'}>
            <i className="bi bi-check-lg"></i>
            {props.obj.id}
        </button>
    )
}
export default Chip;
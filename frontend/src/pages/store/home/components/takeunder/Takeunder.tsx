import takeunder_image from '../../../../../assets/takeunder_desktop_english.jpg'

function Takeunder() {
    return(
        <>
            <div className='w-11/12 my-10 shadow-[1px_1px_10px_10px_rgba(23,29,37,1)] hover:shadow-[1px_1px_5px_3px_rgba(173,170,170,1)] cursor-pointer'>
                <img src={takeunder_image} alt="" />
            </div>
        </>
    )
}

export default Takeunder;
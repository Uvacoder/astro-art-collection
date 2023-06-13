

const Pin = (props) => {
    return (
        <div style={{...styles[props.size]}} className="m-2 rounded-xl bg-violet-950 overflow-hidden">
            <img src={props.img} alt="picture" className="w-full h-full " />
        </div>
    )
}

const styles = {
    small: {
        gridRowEnd: 'span 26',
    },
    medium: {
        gridRowEnd: 'span 33',
    },
    large: {
        gridRowEnd: 'span 40',
    }
}

export default Pin
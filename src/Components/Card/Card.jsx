
import './style.css'; // Import the CSS file

function Card(props) {
    // Define border based on props
    const border = props.border === 'none' ? 'none' : '2px solid #fff';

    return (
        <div className='card' style={{ width: props.width, border: border }}>
            {props.cardType === 'bigText' ?
                <h1 className='bigText'>Ask Something To Sparkle!</h1>
                :
                <>
                    <div className="cardHead">How TO Be An Programmer</div>
                    <div className="cardBody">
                        Becoming a programmer is an exciting journey that opens doors to a fulfilling career
                    </div>
                </>
            }
        </div>
    );
}

export default Card;

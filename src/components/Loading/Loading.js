import './Loading.scss';

const Loading = (props) => {

    const config = {
        width: '100px',
        height: '100px',
        start: '#FABF00',
        mid: '#FDF8E6',
        end: '#FABF00',
        circleRadius: 30};

    return (
        <div className="Loading">
            <svg viewBox="0 0 100 100" style={{width: config.width, height: config.height, margin: '0 auto'}}>
                <defs>
                    <linearGradient id="Gradient" x1="50%" y1="0%" x2="50%" y2="100%" >
                        <stop offset="0%" stopColor="#FABF00">
                            <animate attributeName="stop-color" values="#FABF00; #FDF8E6; #FABF00" dur="4s" repeatCount="indefinite"></animate>
                        </stop>
                        <stop offset="100%" stopColor="#FDF8E6">
                            <animate attributeName="stop-color" values="#FDF8E6; #FABF00; #FDF8E6" dur="4s" repeatCount="indefinite"></animate>
                        </stop>
                    </linearGradient>
                </defs>
                <circle className="circle" cx="50" cy="50" r={config.circleRadius} fill="none"></circle>
            </svg>
        </div>
    )
};

export default Loading;
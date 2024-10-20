export interface ButtonProps {
    text: string;
}

const TradableButton = ({text}:ButtonProps) => {
    return <button>{text}</button>
}

export default TradableButton;
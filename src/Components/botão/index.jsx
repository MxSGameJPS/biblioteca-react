export default function Botao({titulo, onClick, cor, letra}) {
    return (
        <button onClick={onClick}  style={{backgroundColor: cor, color: letra}} >{titulo}</button>
    )
}

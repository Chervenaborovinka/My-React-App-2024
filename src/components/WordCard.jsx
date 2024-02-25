import Button from './Button';

function WordCard({ id, word, transcription, translation, theme }) {
    return (
        <tr className="wordCard">
            <td>{id}</td>
            <td>{word}</td>
            <td>{transcription}</td>
            <td>{translation}</td>
            <td>{theme}</td>
            <td>
                <Button text='Редактировать' mode="original" />
                <Button text='Удалить' mode="original" />
            </td>
        </tr>
    );
}

export default WordCard;
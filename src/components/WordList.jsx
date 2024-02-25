import { useState } from 'react';
import words from '../data/words'


const WordList = () => {
    const [editing, setEditing] = useState({});

    const handleEdit = (id) => {
        setEditing({ ...editing, [id]: true });
    };

    const handleSave = (id) => {
        setEditing({ ...editing, [id]: false });
    };

    const handleCancel = (id) => {
        setEditing({ ...editing, [id]: false });
    };

    const handleDelete = (id) => {
        setEditing({ ...editing, [id]: false });
    };


    return (
        <table className="wordList">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Оригинал</th>
                    <th>Транскрипция</th>
                    <th>Перевод</th>
                    <th>Тема</th>
                </tr>
            </thead>
            <tbody>
                {words.map((word) => (
                    <tr key={word.id}>

                        <td>
                            {editing[word.id] ? (
                                <input type="text" defaultValue={word.word} />
                            ) : (word.word)}
                        </td>

                        <td>
                            {editing[word.id] ? (
                                <input type="text" defaultValue={word.translation} />
                            ) : (word.translation)}
                        </td>

                        <td>
                            {editing[word.id] ? (
                                <input type="text" defaultValue={word.transcription} />
                            ) : (word.transcription)}
                        </td>

                        <td>
                            {editing[word.id] ? (
                                <input type="text" defaultValue={word.theme} />
                            ) : (word.theme)}
                        </td>

                        <td>
                            {editing[word.id] ? (
                                <>
                                    <button onClick={() => handleSave(word.id)}>Save</button>
                                    <button onClick={() => handleCancel(word.id)}>Cancel</button>
                                </>) : (
                                <>
                                    <button onClick={() => handleEdit(word.id)}>Edit</button>
                                    <button onClick={() => handleDelete(word.id)}>Delete</button>
                                </>)}
                        </td>

                    </tr>
                ))}
            </tbody>
        </table >
    );
}


export default WordList;
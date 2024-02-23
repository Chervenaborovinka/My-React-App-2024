import WordCard from './WordCard';

function WordList({ words }) {
    return (
        <div className="wordList">
            {words.map((word, index) =>
                (<WordCard key={index} word={word} />)
            )}
        </div>
    );
}

export default WordList;
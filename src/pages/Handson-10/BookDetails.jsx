import { BOOK_DETAILS } from "../../constants";

export default function BookDetails() {
    return (
        <div className="bg-warning bg-opacity-75 rounded-4 p-3 m-2 shadow">
            {BOOK_DETAILS.map((book, index) => (
                <div key={index}>
                    <h3>Title: {book.title}</h3>
                    <p>Book ID: {book.bookId}</p>
                </div>
            ))}
        </div>
    );
}

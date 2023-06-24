import BlogDetails from "./BlogDetails";
import BookDetails from "./BookDetails";
import CourseDetails from "./CourseDetails";

export default function WarningBanner({ warn }) {
    return warn ? (
        <div className="bg-black bg-opacity-50 flex rounded-4 m-4 mb-5 p-4" style={{ minHeight: "600px", minWidth: "90vw" }}>
            <h2 className="mb-4">Contents</h2>
            <div style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                alignItems: "start",
            }}>
                <CourseDetails />
                <BookDetails />
                <BlogDetails />
            </div>

        </div>
    ) : null;
};


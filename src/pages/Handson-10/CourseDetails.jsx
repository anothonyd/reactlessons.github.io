import { COURSE_DETAILS } from "../../constants";

export default function CourseDetails() {
    return (
        <div className="bg-warning bg-opacity-75 rounded-4 p-3 m-2 shadow">
            {COURSE_DETAILS.map((course, index) => (
                <div key={index}>
                    <h3>Title: {course.title}</h3>
                    <p>Date: {course.date}</p>
                </div>
            ))}
        </div>
    );
};
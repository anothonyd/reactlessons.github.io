import { BLOG_DETAILS } from '../../constants';

export default function BlogDetails() {
  return (
    <div className="bg-warning bg-opacity-75 rounded-4 p-3 m-2 shadow">
      {BLOG_DETAILS.map((blog, index) => (
        <div key={index}>
          <h3>Title: {blog.title}</h3>
          <p className='fw-bold'>Author: {blog.author}</p>
          <p>Intro: {blog.intro}</p>
        </div>
      ))}
    </div>
  );
};



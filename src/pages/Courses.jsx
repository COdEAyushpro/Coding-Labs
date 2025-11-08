const Courses = () => {
  return (
    <div className="page-container text-center">
      <h2 className="fw-bold mb-3">Our Courses</h2>
      <p className="w-75 mx-auto">
        At CodingSpider, we offer beginner to advanced-level programs in Web Development, Data Science, Python, Java, React, and more.
      </p>
      <div className="container mt-4">
        <div className="row g-3">
          {["Web Development", "Python Programming", "Java", "ReactJS", "Data Science", "Machine Learning"].map((course, i) => (
            <div key={i} className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body">
                  <h5 className="card-title">{course}</h5>
                  <p className="card-text">Learn {course} from scratch and become job-ready with real projects.</p>
                  <button className="btn btn-outline-primary">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Courses;

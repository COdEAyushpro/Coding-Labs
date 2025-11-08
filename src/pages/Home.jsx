const Home = () => {
  return (
    <div
      className="page-container text-center text-dark"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="fw-bold mb-3">Welcome to CodingSpider 🕷️</h1>
      <p className="lead w-75 mx-auto">
        Learn the latest technologies with expert trainers. Build projects, attend live classes, and get placed at top companies.
      </p>
      <a href="/courses" className="btn btn-primary mt-4 px-4 py-2 fw-semibold">
        Explore Courses
      </a>
    </div>
  );
};

export default Home;

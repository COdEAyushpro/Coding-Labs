const Trainers = () => {
  const trainers = [
    { name: "Amit Sharma", skill: "Full Stack Developer", img: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Neha Verma", skill: "Data Scientist", img: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Rahul Gupta", skill: "Java Expert", img: "https://randomuser.me/api/portraits/men/3.jpg" },
  ];

  return (
    <div className="page-container text-center">
      <h2 className="fw-bold mb-3">Meet Our Trainers</h2>
      <div className="container mt-4">
        <div className="row g-3">
          {trainers.map((t, i) => (
            <div key={i} className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img src={t.img} className="card-img-top" alt={t.name} />
                <div className="card-body">
                  <h5 className="card-title">{t.name}</h5>
                  <p className="card-text">{t.skill}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Trainers;

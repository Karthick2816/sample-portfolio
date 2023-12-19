function App() {
  let data = [
    {
      topic: "project 1",
      description: "lorem epsum",
    },
    {
      topic: "project 2",
      description: "lorem epsum",
    },
    {
      topic: "project 3",
      description: "lorem epsum",
    },
    {
      topic: "project 4",
      description: "lorem epsum",
    },
    {
      topic: "project 5",
      description: "lorem epsum",
    },
    {
      topic: "project 6",
      description: "lorem epsum",
    },
  ];
  return (
    <>
      <div className="container">
        <h1 className="my-4">
          Page Heading
          <small>Secondary Text</small>
        </h1>

        <div className="row">
          {data.map((e, i) => {
            return (
              <div className="col-lg-4 col-sm-6 mb-4" key={i}>
                <div className="card h-100">
                  <a href="#">
                    <img
                      className="card-img-top"
                      src="https://via.placeholder.com/700x400"
                      alt=""
                    />
                  </a>
                  <div className="card-body">
                    <h4 className="card-title">
                      <a href="#">{e.title}</a>
                    </h4>
                    <p className="card-text">{e.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;

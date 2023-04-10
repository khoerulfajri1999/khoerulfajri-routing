import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Sports = () => {


    const [state, setState] = useState([]);
    const getArticles = async () => {
        let api = "https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=63269bae99df4dfd964c3ce1d44b710e";
        let datax = await fetch(api);
        let data = await datax.json();
        return setState(data.articles);
    };

    useEffect(() => {
        getArticles();
    }, []);

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('../');
    };

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">News App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <span className="col-9"></span>
                            <button type="button" className="btn btn-success" onClick={handleClick}>Kembali ke Halaman Utama</button>
                        </div>
                    </div>
                </nav>
            </div><br />
            <div>
                <h2><center className="gb">Berita terkini dengan kaegori olahraga</center></h2>
            </div><br />
            <div className="container-fluid">
                <div className="row">
                    {
                        state && state.map((item, index) => {
                            return (
                                <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                    <div className="card">
                                        <img className="card-img-top" src={item.urlToImage} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <h6>{new Date(item.publishedAt).toString()}</h6>
                                            <p className="card-text">{item.description}</p>
                                            <a href={item.url} className="btn btn-primary">Baca Selengkapnya..</a>
                                        </div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default Sports
import imgVenFlag from "/ven-flag.svg";
import imgUsaFlag from "/usa-flag.svg";
import { MdOutlineSwapVert } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

export const Body = () => {
  const url = "https://ve.dolarapi.com/v1/dolares/paralelo";
  const [data, setData] = useState({});

  const requestApi = async () => {
    const response = await axios.get(url);
    return setData(await response);
  };

  useEffect(() => {
    requestApi();
    console.log(data);
  }, []);

  return (
    <section className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title mb-5">Dolar Paralelo</h2>
              <label className="input input-bordered flex items-center gap-3 mb-3">
                <img src={imgVenFlag} className="h-6 w-6 opacity-80" />
                <input
                  type="number"
                  className="grow text-xl"
                  placeholder="0.00"
                />
              </label>
              <button className="btn btn-outline btn-circle">
                <MdOutlineSwapVert className="text-3xl" />
              </button>
              <label className="input input-bordered flex items-center gap-3 mb-5">
                <img src={imgUsaFlag} className="h-6 w-6 opacity-80" />
                <input
                  type="number"
                  className="grow text-xl"
                  placeholder="0.00"
                  disabled
                />
              </label>
              <div className="card-actions">
                <button className="btn btn-primary">Convertir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

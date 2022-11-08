import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentInfo = ({ resident }) => {
  const [residentData, setResidentData] = useState({});

  useEffect(() => {
    axios.get(resident).then((res) => setResidentData(res.data));
    console.log(residentData);
  }, []);

  console.log(residentData);
  return (
    <div className="card-resident">
      <div className="card-div-img">
        <img src={residentData.image} />
      </div>
      <div className="card-div-description">
        <p>
          <span>Name</span> <br />
          {residentData.name}
        </p>
        <p>
          <span>Status</span> <br />
          {residentData.status}

        </p>
        <p>
          <span>Origin</span> <br />
          {residentData.origin?.name}
        </p>
        <p>
          <span>Episodes where he appeared</span> <br />
          {residentData.episode?.length}
        </p>
      </div>
    </div>
  );
};

export default ResidentInfo;

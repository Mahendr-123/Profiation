import React, { useState } from "react";

const Nameofcompanydir = () => {
  const [numDirectors, setNumDirectors] = useState(0);
  const [directors, setDirectors] = useState([]);
  const [shareholderList, setShareholderList] = useState(null);
  const [msmeRegistered, setMsmeRegistered] = useState("No");
  const [msmeDetails, setMsmeDetails] = useState({
    regNo: "",
    regSince: "",
    type: "",
    document: null,
  });

  const handleDirectorChange = (index, field, value) => {
    const updatedDirectors = [...directors];
    updatedDirectors[index][field] = value;
    setDirectors(updatedDirectors);
  };

  const handleNumDirectorsChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setNumDirectors(value);
    const newDirectors = Array.from({ length: value }, () => ({
      name: "",
      fatherName: "",
      motherName: "",
      spouseName: "",
      dob: "",
      sex: "",
      pan: "",
      aadhaar: "",
      din: "",
    }));
    setDirectors(newDirectors);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px" }}>
      <h3>Company Information</h3>

      {/* Number of Directors */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">Number of Directors</label>
          <input
            type="number"
            className="form-control"
            value={numDirectors}
            onChange={handleNumDirectorsChange}
            min="0"
          />
        </div>
      </div>

      {/* Directors' Details */}
      {directors.length > 0 && (
        <>
          <h5>Directors' Details</h5>
          {directors.map((director, index) => (
            <div className="row mb-3" key={index}>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={director.name}
                  onChange={(e) =>
                    handleDirectorChange(index, "name", e.target.value)
                  }
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Father's Name"
                  value={director.fatherName}
                  onChange={(e) =>
                    handleDirectorChange(index, "fatherName", e.target.value)
                  }
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mother's Name"
                  value={director.motherName}
                  onChange={(e) =>
                    handleDirectorChange(index, "motherName", e.target.value)
                  }
                />
              </div>
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Spouse Name"
                  value={director.spouseName}
                  onChange={(e) =>
                    handleDirectorChange(index, "spouseName", e.target.value)
                  }
                />
              </div>
              <div className="col-md-2 mt-2">
                <input
                  type="date"
                  className="form-control"
                  placeholder="DOB"
                  value={director.dob}
                  onChange={(e) =>
                    handleDirectorChange(index, "dob", e.target.value)
                  }
                />
              </div>
              <div className="col-md-2 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sex"
                  value={director.sex}
                  onChange={(e) =>
                    handleDirectorChange(index, "sex", e.target.value)
                  }
                />
              </div>
              <div className="col-md-2 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="PAN Number"
                  value={director.pan}
                  onChange={(e) =>
                    handleDirectorChange(index, "pan", e.target.value)
                  }
                />
              </div>
              <div className="col-md-3 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Aadhaar Number"
                  value={director.aadhaar}
                  onChange={(e) =>
                    handleDirectorChange(index, "aadhaar", e.target.value)
                  }
                />
              </div>
              <div className="col-md-3 mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="DIN"
                  value={director.din}
                  onChange={(e) =>
                    handleDirectorChange(index, "din", e.target.value)
                  }
                />
              </div>
            </div>
          ))}
        </>
      )}

      {/* Shareholder List Upload */}
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Upload Shareholders List (PDF/Excel)</label>
          <input
            type="file"
            className="form-control"
            accept=".pdf,.xls,.xlsx"
            onChange={(e) => setShareholderList(e.target.files[0])}
          />
        </div>
      </div>

      {/* MSME Registration */}
      <div className="row mb-3">
        <div className="col-md-4">
          <label className="form-label">MSME Registration (Yes/No)</label>
          <select
            className="form-select"
            value={msmeRegistered}
            onChange={(e) => setMsmeRegistered(e.target.value)}
          >
            <option>No</option>
            <option>Yes</option>
          </select>
        </div>
      </div>

      {/* MSME Details if Registered */}
      {msmeRegistered === "Yes" && (
        <div className="border p-3 mb-3">
          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">MSME Reg No.</label>
              <input
                type="text"
                className="form-control"
                value={msmeDetails.regNo}
                onChange={(e) =>
                  setMsmeDetails({ ...msmeDetails, regNo: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">MSME Reg Since</label>
              <input
                type="date"
                className="form-control"
                value={msmeDetails.regSince}
                onChange={(e) =>
                  setMsmeDetails({ ...msmeDetails, regSince: e.target.value })
                }
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">MSME Type</label>
              <input
                type="text"
                className="form-control"
                value={msmeDetails.type}
                onChange={(e) =>
                  setMsmeDetails({ ...msmeDetails, type: e.target.value })
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label className="form-label">Upload MSME Registration Document</label>
              <input
                type="file"
                className="form-control"
                onChange={(e) =>
                  setMsmeDetails({ ...msmeDetails, document: e.target.files[0] })
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nameofcompanydir;

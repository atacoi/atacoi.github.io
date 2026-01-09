import { useRef, useState } from "react";

const letters = ["x", "y", "z", "w"].concat(
  Array.from({ length: 26 }, (_, i) => {
    const s = String.fromCharCode("a".charCodeAt(0) + i);
    if (s !== "x" || s !== "y" || s !== "z" || s !== "w") return s;
  }).sort()
);

class Matrix {
  constructor(values) {
    this.values = structuredClone(values);
    this.rows = values.length;
    this.cols = values.length > 0 ? values[0].length : 0;
    this.eps = 1e-20;
  }

  getRow(rindex) {
    if (rindex < 0 || rindex >= this.rows) return null;
    return [...this.values[rindex]];
  }

  getCol(cindex) {
    if (cindex < 0 || cindex >= this.cols) return null;

    const col = [];
    for (let i = 0; i < this.rows; i++) {
      col.push(this.values[i][cindex]);
    }
    return col;
  }

  exchangeRows(rindex1, rindex2) {
    if (
      rindex1 < 0 ||
      rindex1 >= this.rows ||
      rindex2 < 0 ||
      rindex2 >= this.rows
    )
      return false;

    const r1 = this.values[rindex1];
    this.values[rindex1] = this.values[rindex2];
    this.values[rindex2] = r1;
    return true;
  }

  scaleRow(rindex, scalingFactor) {
    if (rindex < 0 || rindex >= this.rows) return false;

    for (let j = 0; j < this.cols; j++) {
      this.values[rindex][j] *= scalingFactor;
      if (Math.abs(this.values[rindex][j]) < this.eps) {
        this.values[rindex][j] = 0;
      }
    }
    return true;
  }

  addRowMultiple(rindexSrc, rindexDest, scalingFactor) {
    if (
      rindexSrc < 0 ||
      rindexSrc >= this.rows ||
      rindexDest < 0 ||
      rindexDest >= this.rows
    )
      return false;

    const rsrcScaled = this.values[rindexSrc].map((e) => e * scalingFactor);
    const rdest = this.values[rindexDest];

    for (let j = 0; j < this.cols; j++) {
      rdest[j] += rsrcScaled[j];
      if (Math.abs(rdest[j]) < this.eps) rdest[j] = 0;
    }
    return true;
  }

  reduce(constantVector = []) {
    if (this.rows !== this.cols || this.rows !== constantVector.length) {
      return [];
    }
    const reducedMatrix = new Matrix(
      this.values.map((r, i) => r.concat([constantVector[i]]))
    ); // append constant vector

    const operations = [];
    let i = 0;
    for (let j = 0; j < this.cols && i < reducedMatrix.rows; j++) {
      let k = i;

      for (let t = i + 1; t < this.rows; t++) {
        if (
          Math.abs(reducedMatrix.values[k][j]) <
          Math.abs(reducedMatrix.values[t][j])
        ) {
          k = t;
        }
      }

      if (Math.abs(reducedMatrix.values[k][j]) < this.eps) {
        continue;
      }

      if (k !== i) {
        reducedMatrix.exchangeRows(k, i);
        operations.push(`exchanged row ${k + 1} and ${i + 1}!`);
      }

      const pivot = reducedMatrix.values[i][j];
      reducedMatrix.scaleRow(i, 1 / pivot);

      for (let r = 0; r < this.rows; r++) {
        if (r === i) continue;

        reducedMatrix.addRowMultiple(i, r, -reducedMatrix.values[r][j]);
      }

      i++;
    }

    // get rid of -0
    for (let r = 0; r < reducedMatrix.rows; r++) {
      for (let c = 0; c < reducedMatrix.cols; c++) {
        if (Object.is(reducedMatrix.values[r][c], -0)) {
          reducedMatrix.values[r][c] = 0;
        }
      }
    }

    return reducedMatrix;
  }
}

// used to grow the current matrix when dimensions are changed
function fillMissingDimensions(prevRows, dimensions) {
  const startingRow = prevRows.length;
  const colsToAdd = dimensions - prevRows.length; // n x n
  for (let i = 0; i < dimensions; i++) {
    if (i < startingRow) {
      prevRows[i] = prevRows[i].concat(Array(colsToAdd).fill(0));
    } else {
      prevRows.push(Array(dimensions).fill(0));
      prevRows[i][i] = 1;
    }
  }
}

export default function MatrixReduction() {
  const [rows, setRows] = useState([
    [1, 0],
    [0, 1],
  ]);

  const [outputRows, setOutputRows] = useState([]);
  const [coefficientVector, setCoefficientVector] = useState(["x", "y"]);
  const [constantVector, setConstantVector] = useState([0, 0]);
  const [dimensions, setDimensions] = useState(2);

  const inputRef = useRef(null);

  const displayedRows = [];
  for (let i = 0; i < dimensions; i++) {
    const displayedData = [];
    for (let j = 0; j < dimensions; j++) {
      displayedData.push(
        <td key={`${i}-${j}`}>
          {
            <input
              defaultValue={rows[i][j]}
              onChange={(e) => {
                const val = e.target.value;
                rows[i][j] = val;
                setRows(rows);
              }}
            />
          }
        </td>
      );
    }
    displayedRows.push(<tr key={i}>{displayedData}</tr>);
  }

  const outputedRows = [];
  for (let i = 0; i < outputRows.length; i++) {
    const outputedData = [];
    for (let j = 0; j < outputRows[0].length; j++) {
      outputedData.push(
        <td key={`${i}-${j}`}>
          {
            <input
              defaultValue={outputRows[i][j]}
              onChange={(e) => {
                const val = e.target.value;
                rows[i][j] = val;
                setOutput(rows);
              }}
            />
          }
        </td>
      );
    }
    outputedRows.push(<tr key={i}>{outputedData}</tr>);
  }

  return (
    <div id="matrix-reduction" style={{ width: "80%", marginBottom: "0" }}>
      <h1 style={{ padding: 0, margin: 0 }}>Solving Linear Systems</h1>
      <div id="linear-systems-container">
        <div className="matrix-wrapper">
          <table className="matrix">
            <tbody>{displayedRows}</tbody>
          </table>
        </div>
        <div className="matrix-wrapper">
          <table className="matrix">
            <tbody>
              {coefficientVector.map((v, i) =>
                i < dimensions ? (
                  <tr>
                    <td>{<input defaultValue={v} disabled={true} />}</td>
                  </tr>
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
        </div>
        <div>=</div>
        <div className="matrix-wrapper">
          <table className="matrix">
            <tbody>
              {constantVector.map((v, i) =>
                i < dimensions ? (
                  <tr>
                    <td>
                      {
                        <input
                          defaultValue={v}
                          onChange={(e) => {
                            const val = e.target.value;
                            constantVector[i] = val;
                            setConstantVector(constantVector);
                          }}
                        />
                      }
                    </td>
                  </tr>
                ) : (
                  ""
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div id="dimensions-container">
        <h3 style={{ padding: 0, margin: 0 }}>Set Dimensions:</h3>
        <input
          type="text"
          ref={inputRef}
          defaultValue={2}
          style={{
            border: "brown solid 2.5px",
            borderRadius: "1em",
            textAlign: "center",
            width: "40px",
          }}
        />
        <button
          style={{ border: "brown solid 2.5px", borderRadius: "1em" }}
          onClick={(_e) => {
            const val = inputRef.current.value;
            const num = parseInt(val);
            if (isNaN(num)) {
              alert(`${val} is not a number!`);
            } else if (num > letters.length) {
              alert(
                `This program supports at most ${letters.length} dimensions!`
              );
            } else {
              setDimensions(num);
              if (rows.length < num) {
                setConstantVector(
                  constantVector.concat(Array(num - rows.length).fill(0))
                );
                setCoefficientVector(letters.splice(0, num));
                fillMissingDimensions(rows, num);
                setRows(rows);
              }
            }
          }}
        >
          Set Dimension
        </button>
      </div>
      <button
        style={{ border: "brown solid 2.5px", borderRadius: "1em" }}
        onClick={(e) => {
          e.preventDefault();
          let fail = false;
          for (let i = 0; i < dimensions; i++) {
            for (let j = 0; j < dimensions; j++) {
              if (isNaN(parseInt(rows[i][j]))) {
                alert(
                  `The element at row=${i + 1} and col=${
                    j + 1
                  } is not a number!`
                );
                fail = true;
              } else {
                rows[i][j] = parseInt(rows[i][j]);
              }
            }
          }
          for (let i = 0; i < dimensions; i++) {
            if (isNaN(parseInt(constantVector[i]))) {
              alert(`The element at position=${i} is not a number!`);
              fail = true;
            } else {
              constantVector[i] = parseInt(constantVector[i]);
            }
          }
          if (!fail) {
            const tRows = [];
            for (let i = 0; i < dimensions; i++) {
              const tCols = [];
              for (let j = 0; j < dimensions; j++) {
                tCols.push(rows[i][j]);
              }
              tRows.push(tCols);
            }
            const m = new Matrix(tRows);
            setOutputRows(m.reduce(constantVector).values);
            console.log(m.reduce(constantVector));
          }
        }}
      >
        Reduce
      </button>
      {outputRows.length ? (
        <div className="matrix-wrapper">
          <table className="matrix">
            <tbody>{outputedRows}</tbody>
          </table>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

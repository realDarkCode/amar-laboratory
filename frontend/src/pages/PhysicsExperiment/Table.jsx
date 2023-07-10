import { useState } from "react";
import "./style.css";
const initialTableData = [
  [1, 43, 1.43],
  [1, 48, 1.45],
  [1, 45, 1.48],
  [1, 46, 1.46],
  [1, 47, 1.47],
];
const LC = 0.01;

const Table = ({ result, setResult }) => {
  const [state, setState] = useState([...initialTableData]);

  const updateTableData = (e, row, column) => {
    const updatedState = [...state];
    updatedState[row - 1][column - 1] = Number(e.target?.value) || 0;
    const r1 = updatedState[row - 1][0] + updatedState[row - 1][1] * LC;
    updatedState[row - 1][2] = Math.round(r1 * 100) / 100;
    setState(updatedState);
    const r =
      Math.round(
        (state.reduce((store, curr) => store + curr[2], 0) / 5) * 1000
      ) / 1000;
    setResult(r);
  };
  return (
    <>
      <table className="table-auto w-full text-center phyTable">
        <thead>
          <tr>
            <th className="">পর্যবেক্ষণ সংখ্যা</th>
            <th>
              রৈখিক স্কেল <br />
              পাঠ, L(mm){" "}
            </th>
            <th>
              বৃত্তাকার স্কেলের <br /> ভাগ সংখ্যা C
            </th>
            <th>
              লঘিষ্ঠ গণন LC <br />
              (mm)
            </th>
            <th>
              ব্যাস d = L + C x LC <br /> (mm){" "}
            </th>
            <th>গড় ব্যাস (mm)</th>
          </tr>
        </thead>
        <tbody>
          {state.map((d, i) => (
            <tr>
              <td>{i + 1}.</td>
              <td>
                <input
                  type="number"
                  value={d[0]}
                  min={0}
                  onChange={(e) => updateTableData(e, i + 1, 1)}
                  className="table-input"
                />
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  value={d[1]}
                  min={0}
                  max={100}
                  onChange={(e) => updateTableData(e, i + 1, 2)}
                  className="table-input"
                />
              </td>
              {i == 0 && (
                <td className="table-span" rowSpan={state.length}>
                  0.01
                </td>
              )}
              <td>{d[2]}</td>
              {i == 0 && (
                <td className="table-span" rowSpan={state.length}>
                  {result}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;

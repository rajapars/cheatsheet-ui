import React, { useState, useEffect } from "react";
import Axios from "axios";
import CheatSheet from "../../cheatsheet";
import CheatSheetObject from "./../../../objects/CheatSheet";

const Home: React.FC = () => {
  const [cheatsheets, setCheatsheets] = useState([]);

  useEffect(() => {
    const fetchData = async (url: string) => {
      await Axios.get(url)
        .then(({ data }) => {
          setCheatsheets(data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData("http://localhost:8182/cheatsheets");
  }, []);

  return (
    <>
      <div className="Box">
        <div className="Box-body">
          <h1>Docker</h1>
          <p>Docker Cheat Sheet for Developers</p>

          {cheatsheets.map((cheatsheet: CheatSheetObject) => {
            return (
              <CheatSheet
                title={cheatsheet.title}
                description={cheatsheet.description}
                cheat={cheatsheet.cheat}
                key={cheatsheet.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;

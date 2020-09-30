import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    /* approach -1  - React */
    // const search = async() => {
    //     await axios.get('abc');
    // };
    // search();

    /* approach -1  */
    // (async() => {
    //     await axios.get('abc');
    // })();

    /* approach -3  - promise */
    // axios.get('abc')
    //   .then((response) => {
    //     console.log(response.data);
    //   });

    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
    };
    search();
  });

  //   useEffect(() => {
  //     console.log("when ever render");
  //   });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;

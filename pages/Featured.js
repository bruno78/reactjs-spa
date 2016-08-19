import React from "react";
import Article from "../components/Article";

export default class Featured extends React.Component {
  render() {
    const Articles = [
      "Article 1",
      "Article 2",
      "Article 3",
      "Article 4",
      "Article 5"
    ].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Ad spot #1",
      "Ad spot #2",
      "Ad spot #3",
      "Ad spot #4",
      "Ad spot #5",
    ];

    const randomAd = adText[Math.round( Math.random() * (adText.length-1) )];
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}

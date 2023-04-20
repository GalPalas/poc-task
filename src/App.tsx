import React from "react";
import Chart from "react-apexcharts";
import "./App.css";

type MyProps = {};
type MyState = { options: any; series: any };

class App extends React.Component<MyProps, MyState> {
  constructor(props: MyState) {
    super(props);

    this.state = {
      options: {
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8],
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
            return (
              '<div class="arrow_box">' +
              "<img src=https://picsum.photos/200/300 />" +
              '<div class="tooltip_data">' +
              '<div class="tooltip_pages">' +
              "<span>" +
              "PAGE" +
              "</span>" +
              "<span>" +
              w.globals.labels[dataPointIndex] +
              "/" +
              7 +
              "</span>" +
              "</div>" +
              '<div class="tooltip_pages">' +
              "<span>" +
              "TIME SPENT" +
              "</span>" +
              "<span>" +
              "00:" +
              series[seriesIndex][dataPointIndex] +
              "</span>" +
              "</div>" +
              "</div>" +
              "</div>"
            );
          },
        },
      },
      series: [
        {
          name: "numberOfSeconds",
          data: [4, 1, 1, 1, 1, 7, 4],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

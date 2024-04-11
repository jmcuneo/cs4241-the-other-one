data = fetch("https://www.govtrack.us/api/v2/role?current=true&role_type=senator").then((response) => response.json())

chart = {
  const color = d3.scaleQuantize([1, 10], d3.schemeBlues[9]);
  const path = d3.geoPath();
  const format = d => `${d}%`;
  const valuemap = new Map(data.map(d => [namemap.get(d.name), d.party]));

  // The counties feature collection is all U.S. counties, each with a
  // five-digit FIPS identifier. The statemap lets us lookup the name of 
  // the state that contains a given county; a state’s two-digit identifier
  // corresponds to the first two digits of its counties’ identifiers.
  const counties = topojson.feature(data, data.objects.counties);
  const states = topojson.feature(data, data.objects.states);
  const statemap = new Map(states.features.map(d => [d.id, d]));

  // The statemesh is just the internal borders between states, i.e.,
  // everything but the coastlines and country borders. This avoids an
  // additional stroke on the perimeter of the map, which would otherwise
  // mask intricate features such as islands and inlets. (Try removing
  // the last argument to topojson.mesh below to see the effect.)
  const statemesh = topojson.mesh(us, us.objects.states, (a, b) => a !== b);

  const svg = d3.create("svg")
      .attr("width", 975)
      .attr("height", 610)
      .attr("viewBox", [0, 0, 975, 610])
      .attr("style", "max-width: 100%; height: auto;");

  svg.append("g")
      .attr("transform", "translate(610,20)")
      .append(() => Legend(color, {title: "legislators", width: 260}));

  svg.append("g")
    .selectAll("path")
    .data(topojson.feature(us, us.objects.states).features)
    .join("path")
      .attr("fill", d => color(valuemap.get(d.id)))
      .attr("d", path)
    .append("title")
      .text(d => `${d.properties.name}\n${valuemap.get(d.id)}%`);

  svg.append("path")
      .datum(topojson.mesh(us, us.objects.states, (a, b) => a !== b))
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr("stroke-linejoin", "round")
      .attr("d", path);

  return svg.node();
}

namemap = Map(51) {
  "Arizona" => "04"
  "Louisiana" => "22"
  "Idaho" => "16"
  "Minnesota" => "27"
  "North Dakota" => "38"
  "South Dakota" => "46"
  "New York" => "36"
  "Alaska" => "02"
  "Georgia" => "13"
  "Indiana" => "18"
  "Michigan" => "26"
  "Mississippi" => "28"
  "Ohio" => "39"
  "Texas" => "48"
  "Nebraska" => "31"
  "Colorado" => "08"
  "Maryland" => "24"
  "Kansas" => "20"
  "Illinois" => "17"
  "Wisconsin" => "55"
  "California" => "06"
  "Iowa" => "19"
  "Pennsylvania" => "42"
  "Montana" => "30"
  "Missouri" => "29"
  "Florida" => "12"
  "Kentucky" => "21"
  "Maine" => "23"
  "Utah" => "49"
  "Oklahoma" => "40"
  "Tennessee" => "47"
  "Oregon" => "41"
  "West Virginia" => "54"
  "Arkansas" => "05"
  "Washington" => "53"
  "North Carolina" => "37"
  "Virginia" => "51"
  "Wyoming" => "56"
  "Alabama" => "01"
  "South Carolina" => "45"
  "New Mexico" => "35"
  "New Hampshire" => "33"
  "Vermont" => "50"
  "Nevada" => "32"
  "Hawaii" => "15"
  "Massachusetts" => "25"
  "Rhode Island" => "44"
  "New Jersey" => "34"
  "Delaware" => "10"
  "Connecticut" => "09"
  "District of Columbia" => "11"
  <prototype>: Map {Symbol(Symbol.iterator): ƒ(), Symbol(Symbol.toStringTag): "Map"}
}

namemap = new Map(us.objects.states.geometries.map(d => [d.properties.name, d.id]))

import {Legend} from "@d3/color-legend"

Plot.plot({
  projection: "identity",
  width: 975,
  height: 610,
  color: {scheme: "Blues", type: "quantize", n: 9, domain: [1, 10], label: "Party", legend: true},
  marks: [
    Plot.geo(topojson.feature(us, us.objects.states), Plot.centroid({
      fill: d => valuemap.get(d.properties.name),
      title: d => `${d.properties.name}\n${valuemap.get(d.properties.name)}%`,
      tip: true
    })),
    Plot.geo(topojson.mesh(us, us.objects.states, (a, b) => a !== b), {stroke: "white"})
 ]
})
/*
chart = {
    const color = d3.scaleQuantize([1, 10], d3.schemeBlues[9]);
    const path = d3.geoPath();
    const format = d => `${d}%`;
    const valuemap = new Map(unemployment.map(d => [namemap.get(d.name), d.rate]));
  
    // The counties feature collection is all U.S. counties, each with a
    // five-digit FIPS identifier. The statemap lets us lookup the name of 
    // the state that contains a given county; a state’s two-digit identifier
    // corresponds to the first two digits of its counties’ identifiers.
    const counties = topojson.feature(us, us.objects.counties);
    const states = topojson.feature(us, us.objects.states);
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
        .append(() => Legend(color, {title: "Unemployment rate (%)", width: 260}));
  
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


unemployment = FileAttachment("unemployment201907.csv").csv({typed: true}

namemap = new Map(us.objects.states.geometries.map(d => [d.properties.name, d.id]))

us = FileAttachment("counties-albers-10m.json").json()

import {Legend} from "@d3/color-legend"

valuemap = new Map(unemployment.map(d => [d.name, d.rate]))

Plot.plot({
    projection: "identity",
    width: 975,
    height: 610,
    color: {scheme: "Blues", type: "quantize", n: 9, domain: [1, 10], label: "Unemployment rate (%)", legend: true},
    marks: [
      Plot.geo(topojson.feature(us, us.objects.states), Plot.centroid({
        fill: d => valuemap.get(d.properties.name),
        title: d => `${d.properties.name}\n${valuemap.get(d.properties.name)}%`,
        tip: true
      })),
      Plot.geo(topojson.mesh(us, us.objects.states, (a, b) => a !== b), {stroke: "white"})
   ]
  })
  */

window.onload = function() {
    const data = [ 42,43,44,45 ]
    
    d3.select( 'body' )
      .data( data )
      .join( 'div' )
        .text( datapoint => 'num: ' + datapoint )
        .style( 'color', 'white' )
   }
   
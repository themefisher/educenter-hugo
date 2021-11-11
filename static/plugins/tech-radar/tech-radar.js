/**
 *
 * @param {*} config should contain:
 * - quadrants
 * - rings
 * - entries
 */

function techRadarViz(config) {
  var container = 600;
  var chartDiameter = 600;
  var containerOffset = 50;

  var technologies = config.entries;
  var categories = config.quadrants;
  var statuses = config.rings;

  var radiansPerCategory = radians(360 / categories.length);
  var pointerSize = 10;
  var labelWidth = chartDiameter * 0.12;
  var labelHeight = chartDiameter * 0.04;
  var chartRadius = chartDiameter / 2;

  function radians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  function getStatusPositionByString(status) {
    return statuses.findIndex(function (element) {
      return element.name === status;
    });
  }

  function getCategoryPositionByString(category) {
    return categories.findIndex(function (element) {
      return element === category;
    });
  }

  function getTechnologyPositionByString(technology) {
    return technologies.findIndex(function (element) {
      return element.name === technology;
    });
  }

  function getRadiansPerCategory(category) {
    return radians(360 / categories.length);
  }

  var numberCache = {};

  var seed = 5;
  function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
    // return Math.random();
    // var myrng = new Math.seedrandom("dataworkz");
    // console.log(myrng());
    // return myrng();
  }

  function generateRandomNumber(i) {
    return numberCache[i] ? numberCache[i] : (numberCache[i] = random());
  }

  function calculateCategoryLineYPos(categoryIndex) {
    var angle = (360 / categories.length) * categoryIndex;
    return chartRadius * Math.sin(radians(angle)) + chartRadius;
  }

  function calculateCategoryLineXPos(categoryIndex) {
    var angle = (360 / categories.length) * categoryIndex;
    return chartRadius * Math.cos(radians(angle)) + chartRadius;
  }

  function getCategoryLabelXPos(category, i) {
    var categoryOffset = radiansPerCategory / 2,
      angle = radiansPerCategory * i + categoryOffset;
    return chartRadius * Math.cos(angle) + chartRadius;
  }
  function getCategoryLabelYPos(category, i) {
    var categoryOffset = radiansPerCategory / 2,
      angle = radiansPerCategory * i + categoryOffset;
    return chartRadius * Math.sin(angle) + chartRadius;
  }
  function getStatusColor(status) {
    return statuses.find(function (item) {
      return item.name === status.ringName;
    }).color;
  }

  function getTechnologyXPos(technology, index) {
    var // calculate the angle (radians)
      categoryPosition = getCategoryPositionByString(technology.category),
      categoryOffset = generateRandomNumber(index) * radiansPerCategory,
      angle = radiansPerCategory * categoryPosition + categoryOffset;
    var // calculate the radius
      pixelsPerCategory = chartRadius / statuses.length,
      statusPosition = getStatusPositionByString(technology.status),
      sectorOffset = generateRandomNumber(index) * pixelsPerCategory,
      radius = chartRadius - statusPosition * pixelsPerCategory - sectorOffset;
    return radius * Math.cos(angle) + chartRadius;
  }
  function getTechnologyYPos(technology, index) {
    var // calculate the angle (radians)
      categoryPosition = getCategoryPositionByString(technology.category),
      categoryOffset = generateRandomNumber(index) * radiansPerCategory,
      angle = radiansPerCategory * categoryPosition + categoryOffset;
    var // calculate the radius
      pixelsPerCategory = chartRadius / statuses.length,
      statusPosition = getStatusPositionByString(technology.status),
      sectorOffset = generateRandomNumber(index) * pixelsPerCategory,
      radius = chartRadius - statusPosition * pixelsPerCategory - sectorOffset;
    return radius * Math.sin(angle) + chartRadius;
  }

  function getStatusLabelYPos(status, i) {
    var interval = chartRadius / statuses.length;
    var offset = interval / 2 - labelHeight / 2;
    return interval * i + offset;
  }

  var radar = d3.select("#radar").append("svg").attr("viewBox", "0 0 700 700");

  radar
    .selectAll("circle")
    .data(statuses)
    .enter()
    .append("circle")
    .attr("class", "status-circle")
    .attr("r", function (d, i) {
      return chartRadius - (chartRadius / statuses.length) * i;
    })
    .attr("cx", chartRadius + containerOffset)
    .attr("cy", chartRadius + containerOffset);

  radar
    .selectAll("line")
    .data(categories)
    .enter()
    .append("line")
    .attr("class", "category-radius")
    .attr("x1", function (data, i) {
      return calculateCategoryLineXPos(i) + containerOffset;
    })
    .attr("y1", function (data, i) {
      return calculateCategoryLineYPos(i) + containerOffset;
    })
    .attr("x2", chartRadius + containerOffset)
    .attr("y2", chartRadius + containerOffset);

  radar
    .selectAll("text")
    .data(categories)
    .enter()
    .append("text")
    .text(function (data) {
      return data;
    })
    .attr("class", "category-label")
    .attr("y", function (d, i) {
      return getCategoryLabelYPos(d, i) + containerOffset;
    })
    .attr("x", function (d, i) {
      return getCategoryLabelXPos(d, i) + containerOffset;
    });

  var techPoints = radar
    .selectAll("g")
    .data(technologies)
    .enter()
    .append("g")
    .attr("class", "pointer");

  techPoints
    .append("circle")
    .attr("r", "15")
    .attr("class", "pointer__circle")
    .attr("fill", function (d, i) {
      return getStatusColor(d);
    })
    .attr("cx", function (d, i) {
      return getTechnologyXPos(d, i) + containerOffset;
    })
    .attr("cy", function (d, i) {
      return getTechnologyYPos(d, i) + containerOffset;
    })
    .on("click", function(d, i) {
      if(config.onClick) {
        config.onClick.call(this, i);
      }
    });

  techPoints
    .append("text")
    .text(function (d, i) {
      return i + 1;
    })
    .attr("class", "pointer__text")
    .attr("x", function (d, i) {
      return getTechnologyXPos(d, i) + containerOffset;
    })
    .attr("y", function (d, i) {
      return getTechnologyYPos(d, i) + containerOffset + pointerSize * 0.5;
    })
    .on("click", function(d, i) {
      if(config.onClick) {
        config.onClick.call(this, i);
      }
    });

  var statusPoints = radar
    .selectAll("statuses")
    .data(statuses)
    .enter()
    .append("g")
    .attr("class", "status-label");

  statusPoints
    .append("rect")
    .attr("height", labelHeight)
    .attr("width", labelWidth)
    .attr("class", "status-label__rect")
    .attr("x", chartRadius - labelWidth / 2 + containerOffset)
    .attr("y", function (d, i) {
      return getStatusLabelYPos(d, i) + containerOffset;
    })
    .attr("rx", "5");

  statusPoints
    .append("text")
    .text(function (d, i) {
      return d.name;
    })
    .attr("class", "status-label__text")
    .attr("font-size", chartDiameter * 0.023)
    .attr("fill", function (d, i) {
      return d.color;
    })
    .attr("x", chartRadius + containerOffset)
    .attr("y", function (d, i) {
      return getStatusLabelYPos(d, i) + labelHeight * 0.7 + containerOffset;
    });

    // console.log(statuses);
}

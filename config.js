const disableSetup = false;
var topBarCenterText = `GX4AAX - IO95FF`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["2196F3", "CLUBLOG", "https://qrz.com/db/GX4AAX", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/18.41",
    "1",
    "R",
  ],
  ["2196F3", "PISTAR", "http://192.168.1.60/", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=54.0,18.0&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=52.0157&lon=-1.4591&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-1.5,55.09,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  ["RADAR", "https://www.accuweather.com/en/gb/national/weather-radar"],
  [
    "LOCAL RADAR",
    "https://www.accuweather.com/en/gb/ashington/ne63-9/weather-forecast/2530570",
  ],
  [
    "NOAA D-RAP",
    "https://www.swpc.noaa.gov/products/d-region-absorption-predictions-d-rap",
  ],
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
  ],
  [
    "SATELLITE CAN",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/can/EXTENT3/GOES16-CAN-EXTENT3-1125x560.gif",
  ],
  [
    "SATELLITE CGL",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/cgl/EXTENT3/GOES16-CGL-EXTENT3-600x600.gif",
  ],
  [
    "LIGHTNING",
    "https://www.lightningmaps.org/blitzortung/europe/index.php?bo_page=archive&bo_map=0&bo_animation=now",
  ],
  [
    "LIGHTNING LOCAL",
    "https://www.blitzortung.org/en/Images/image_b_ny.png",
  ],
  ["YOUTUBE G4NAB", "iframe|https://www.youtube.com/embed/sHSptPgCXoU?autoplay=1&mute=1"],

  [
    "WEBSITE EXAMPLE",
    "iframe|https://globe.adsbexchange.com/?airport=YYZ",
  ],
  ["VIDEO EXAMPLE", "https://himawari8.nict.go.jp/movie/720/20240611_pifd.mp4"],
  ["HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  11200,10000,11000,10100,
  10200,10500,10300,10600,
  30400,60700,60900,10800
];

// RSS feed items
// Structure is [feed URL, refresh interval in minutes]
var aRSS = [
  ["https://www.amsat.org/feed/", 60],           // Example RSS feed, refresh every 60 minutes
  ["https://daily.hamweekly.com/atom.xml", 120], // Example Atom feed, refresh every 120 minutes
  ];

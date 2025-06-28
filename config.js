// CUT START
var disableSetup = false; // Manually set to true to disable setup page menu option
var topBarCenterText = "GX4AAX - IO91FF";

// Grid layout desired
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows: HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  [
    "2196F3",
    "APRS INFO - SPOTS",
    "http://WSPR.APRSINFO.COM",
    "1",
  ],  
  [
    "2196F3",
    "PSK REPORTER",
    "https://pskreporter.info/pskmap.html",
    "1",
  ],
  [
    "2196F3",
    "ADSB",
    "https://globe.adsbexchange.com/?airport=NCL",
    "1",
    "R",
  ],
  
    [
    "2196F3",
    "APRS",
    "https://aprs-map.info/?center=55.181,-1.5465&zoom=8",
    "1",
    "R",
  ],
  
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.php",
    "1",
    "R",
  ],
  [
    "2196F3",
    "DX CLUSTER",
    "https://dxcluster.ha8tks.hu/map/",
    "1",
  ],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.89/51.69/-2.11",
    "1",
  ],

  [
    "2196F3",
    "IRLP STATUS",
    "https://irlp.g4eid-km8h.net",
    "1",
  ],

  [
    "2196F3",
    "TIME.IS",
    "https://time.is/",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=53.6450&lon=-2.9916&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-2.99,53.65,3000",
    "1",
    "R",
  ],
  [
    "2196F3",
    "EARTH FROM SPACE",
    "https://www.youtube.com/embed/xRPjKQtRXR8",
    "1",
  ],
  [
    "6E6E6E",
    "PRIVACY",
    "privacy.html",
    "1",
    "R",
  ],
   [
    "6E6E6E",
    "TERMS OF USE",
    "terms.html",
    "1",
    "R",
  ],
];

// Feed items
// Structure is as follows: target URL
// The values are [target link]
var aRSS = [
  [
    "https://www.amsat.org/feed/",
    60
  ],
  [
    "https://daily.hamweekly.com/atom.xml",
    120
  ]
];

// Dashboard Tiles items
// Tile Structure is Title, Source URL
// To display a website on the tiles use "iframe|" keyword before the tile URL
// [Title, Source URL],
// the comma at the end is important!
var aIMG = [
  [
    "AURORA",
    "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg"
  ],
  [
    "SATELLITE",
    "http://neige.meteociel.fr/satellite/anim_ir_color.gif"
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png"
  ],
  [
    "ISS POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544"
  ],
  [
    "SATELLITE  EUMETSAT",
    "https://img.allmetsat.com/sat/msg_fes-uk-rgb_eview-anim.gif"
  ],
  
  [
    "APRS",
    "iframe|https://aprs-map.info/?center=55.181,-1.5465&zoom=8"
  ],
  
  [
    "LIGHTNING",
    "https://images.lightningmaps.org/blitzortung/europe/index.php?animation=europe_full_big"
  ],
  [
    "SOLAR WX",
    "https://services.swpc.noaa.gov/images/animations/suvi/primary/map/latest.png"
  ],
  [
    "EARTH FROM ISS",
    "iframe|https://www.youtube.com/embed/xRPjKQtRXR8?autoplay=1&mute=1"
  ],
  [
    "PROPOGATION",
    "https://www.tvcomm.co.uk/g7izu/Autosave/EU_MUF_AutoSave.JPG"
  ],
  [
    "GREY LINE",
    "https://www.timeanddate.com/scripts/sunmap.php?iso=now"
  ],
  [
    "HF PROPAGATION",
    "https://www.hamqsl.com/solar101vhf.php"
  ]
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, tiles will be rotated every 5000 milliseconds (5s)
var tileDelay = [
  11200,
  10000,
  11000,
  10100,
  10200,
  10500,
  10300,
  10600,
  30400,
  60700,
  60900,
  10800
];

// CUT END
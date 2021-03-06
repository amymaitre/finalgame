var GAME_LEVELS = [
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                     %                          ",
   "                                                    xxx                         ",
   "                                                 xx                             ",
   "                                              xx                                ",
   "                              o            xx                                   ",
   "                                        xx                                      ",
   "                        xxxxxxxxxxx                                             ",
   "                      xx                                                        ",
   "                    xx                                                          ",
   "  xx              xx                          o o                             xx",
   "  x             xx                                                             x",
   "  x           xx                             xxxxx                             x",
   "  x          x   o                                                       o     x",
   "  x  @       x                   o                  *                ^         x",
   "  xxxxxxxxxxxxxxxxxxxxxxxxx             xxxxxxxxxxxxxxx            xxxxxxxxxxxxx",
   "                          x     xxx     x             x            x            ",
   "                          x!!!!!!!!!!!!!x             x!!!!!!!!!!!!x            ",
   "                          x!!!!!!!!!!!!!x             x!!!!!!!!!!!!x            ",
   "                          xxxxxxxxxxxxxxx             xxxxxxxxxxxxxx            ",
   "                                                                                ",
   "                                                                                "],
  ["                                      x!!x                                                                        ",
   "                                      x!!x                                                                        ",
   "                                      x!!xxxxxxxxxx                                                               ",
   "                                      xx!!!!!!!!!!xx                                                              ",
   "                                       xxxxxxxxxx!!x                                                              ",
   "                                                xx!x                                                              ",
   "                                                 x!x                                                              ",
   "                                      o          x!x                                                              ",
   "                                                 x!x                                                              ",
   "                     x     xxxxxxxxxxxxxxxxxxxx  x!x                                                              ",
   "                     x     x                     x!x                                         x                    ",
   "                     x    xx                     x!x                                                              ",
   "                     x     x                     x!x                       xxxxxxxxxxxxxxxxxxx                    ",
   "                     xx    x                     x!x                       !!!!!!!!!!!!!!!!!!!                    ",
   "                     x     x                     x!x                       x=                x                    ",
   " o                   x    xx                     x!x                                          xx                  ",
   "                     x     x                     x!x                                           xxxxxxxxxxxxxxxxxxx",
   "xxxxxx               xx    x        xxxxxx       x!x                                                              ",
   "                     x     x        |            x!x                                                            % ",
   "                     x    xx                      v                               o            xxxxxxxxxxxxxxxxxxx",
   "                     x     x                                                                  xx                  ",
   "     @               xx    x                                              ^     xxxxx    xxxxx                    ",
   "    xxxxxxx                x                                             xxx!!!!!!!!!!!!!!!!!!                    ",
   "!!!!x     xx               x o                                           x xxxxxxxxxxxxxxxxxxx                    ",
   "!!!!x      xx              x             |                   *           x                                        ",
   "!!!!x       xx         xxxxxxxx     xxxxxx     xxxxxxxxxxxxxxxxx         x                                        ",
   "!!!!x        xx       xx   x!!!!!!!!!!!!!!!!!!!!!!!x           x!!!!!!!!!x                                        ",
   "!!!!x         xx     xx    x!!!!!!!!!!!!!!!!!!!!!!!x           x!!!!!!!!!x                                        ",
   "!!!!x          xx   xx     xxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxx                                        ",
   "!!!!x           xxxxx                                                                                             "],
  ["xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!            ",
   "  xxx!!!!!xxx!!!!!xxx!!!!!xxx!!!!!xxx!!!!!xxx!!!!!xxx!!!!!xxx!!!!!xxx!!!!!xxxx          ",
   "    xx!!!xx xx!!!xx xx!!!xx xx!!!xx xx!!!xx xx!!!xx xx!!!xx xx!!!xx xx!!!xx   x!x       ",
   "     xxxxx   xx!xx   xx!xx   xx!xx   xx!xx   xx!xx   xx!xx   xx!xx   xx!xx     x!x      ",
   "               v       v       v       v       v       v       v       v        x!x     ",
   "                                                                                 x!x    ",
   "                                           o                       o              x!x   ",
   "                                                                                   x!x  ",
   "                                                                                    x!x ",
   "  x    xx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx!x",
   "  x=         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!x!x",
   "  x          x=                                                                     =x!x",
   "  x          x                                                                       x!x",
   "  x    xx    x                                                                      x!x ",
   "  x         =x                                                                     x!x  ",
   "  x    oo    x                                                                    x!x   ",
   "  x          x                                                                   x!x    ",
   "  x    xx    x*                                                         ^       x!x     ",
   "  x=         xxxxxxx        xxxxxxxxx         xxxxxxxxx         xxxxxxxxx      x!x      ",
   "  x          x     xx                                                         x!x       ",
   "  x          x      xx                                                        x!x       ",
   "  x    xx    x       xx                                                       x!x       ",
   "  x         =x        xx                                                      x!x       ",
   "  x                    xx                                                      x!x      ",
   "  x                     xx                                                      x!x     ",
   "  x    xx                                          o                             x!x    ",
   "  x=         x                                                                    x!x   ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                 xx             x!!!x                   ",
   "                                                xx              x!!!x                   ",
   "                                               xx               x!!!x                   ",
   "                                              xx                x!!!x                   ",
   "                                             xx                 x!!!x                   ",
   "                                            xx                  x!!!x                   ",
   "  xxx                                      xx                   x!!!x                   ",
   "  x x                                     xx                      |                     ",
   "  x                                  xx  xx                                             ",
   "  x                                xxx    xxx                                           ",
   "  x                               xx        xx                                          ",
   "  x                              xx          xx                                         ",
   "  x                            xxx     xx     xx                                        ",
   "  x                o  o        xxx    x  x     x                                        ",
   "  x                                            x                x!!!x                   ",
   "  x                xxxx                                         x!!!x                  o",
   "  x  @         x!!!!!!!!!!x                                     x!!!x                   ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                        ",
   "                                                                                        "],
  ["                                                x!!               !!x",
   "                                                x!!       @       !!x",
   "                                                x!!      xxx      !!x",
   "                                                x!!               !!x",
   "                                                x!!=              !!x",
   "                                                x!!               !!x",
   "                                                x!!               !!x",
   "                                                x!!               !!x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                   x!!      xxx      !!x",
   "                            x                   x!!              =!!x",
   "   x   x                    x                   x!!               !!x",
   "    x x    xxx  x   x       x                   x!!               !!x",
   "     x    x   x x   x       x                   x!!               !!x",
   "     x    x   x x   x       x                   x!!      xxx      !!x",
   "     x     xxx   xxx        x                   x!!=              !!x",
   "                            x                   x!!               !!x",
   "                            x                   x!!               !!x",
   "                            x                   x!!               !!x",
   " x       x  xxxxx  x   x  x x                   x!!               !!x",
   " x   x   x    x    xx  x  x x                   x!!              =!!x",
   " x  x x  x    x    x x x    x                   x!!               !!x",
   "  x    x    xxxxx  x  xx  x x                   x!!               !!x",
   "                            x                   x!!       %       !!x",
   "                            x                   x!!!!!!!!!!!!!!!!!!!x",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxx                   xxxxxxxxxxxxxxxxxxxxx"]
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;

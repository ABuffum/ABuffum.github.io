
/*
All level data in a mostly readable format. This is parsed into objects with
functions in level.js
*/

"use strict";
var levelData = [
    /*
        
    Character Meanings:
    S = Start
    . = Walkable
    # = Wall
    * = Goal
    B = Fuzzed blue (Wall)
    G = Fuzzed green (Walkable)
    R = Fuzzed brown (Walkable)

    Darkness function options:
    fromLeft = Moves in a vertical line from the left side of the map
    fromRight = Moves in a vertical line from the right side of the map
    fromBottom = Moves in a vertical line from the bottom side of the map
    fromTop = Moves in a vertical line from the top side of the map
    fromTopLeft = Moves in a diagonal line from the top left corner of the map
    fromBottomLeft = Moves in a diagonal line from the bottom left corner of the map
    fromLeftAndRight = Moves in a pair of vertical lines from the left and right sides of the map
    none = no darkness
    ...
    */

    {//8x3
        data:[  '# # # # # # # #',
                '. S . . . . * .',
                '# # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x16
        data: ['# # # # # # # # # # # # # # # #',
               '. . # # . . . . . . . . . . . .',
               '. . # # . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . # # . . . # # . .',
               '. . . . . . . # # . . . # # . .',
               '. . . . . . . . . . . . . . . .',
               '. S . . . . . . . . . . . . * .',
               '. . . . . . # # . . . . . . . .',
               '. . . . . . # # . . . . . . . .',
               '. . # # . . . . . . . . . . . .',
               '. . # # . . . . . . . . . . . .',
               '. . . . . . . . . . . . # # . .',
               '. . . . . . . . . . . . # # . .',
               '. . . . . . . . . . . . . . . .',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x10
        data: ['# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . # . . . . . . .',
               '. . . S . . . . # . . . . . * .',
               '. . . . . . . . # . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x12
        data: ['# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . # # . . . . . . .',
               '. . . . . . . # # . . . . . . .',
               '. . . . . . . # # . . # # . . .',
               '. S . # # . . . . . . # # . * .',
               '. . . # # . . # # . . . . . . .',
               '. . . . . . . # # . . . . . . .',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x11
        data: ['# # # # # # # # # # # # # # # #',
                '# # # # # # # # # # # # # # # #',
                '# . . . . S . . . . . . . . . #',
                '# # . # . # # # # # # . . # # #',
                '# # . . . # # # # # # . # # # #',
                '# # # . . # # # # # . . # # # #',
                '# # # # . . # # # . . # # # # #',
                '# # # # # . . # . . # # # # # #',
                '# # # # # # . . . # # # # # # #',
                '# # # # # # # * # # # # # # # #',
                '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -4,
        onLoad: function() {}
    },

    {//16x16
        data: ['# # # # # # # # # # # # # # # #',
                '# # # # # # # # # # # # # # # #',
                '# # # # # # # # # # # # # # # #',
                '# # # # # # # # # # # # # # # #',
                '# # . # . # # . # . . # . # # #',
                '. # . # . # . # # . # . . . # .',
                '. . . . . . . # # . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . S . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . # # . . . . . . .',
                '. . . . . . # . . # # # . . . .',
                '# . . . . # . . . # * # . . . #',
                '# # . . # . . . . . . . . . # #',
                '# # # . . . . . . . . . . # # #',
                '# # # # # # # # # # # # # # # #'],
        darkness: 'fromTop',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x12
        data: ['# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . # . . . .',
               '. . . . . . . . . . # . . . . .',
               '. * . . . . . . . . # # . . . .',
               '. . . . . . . . . . # # . . . .',
               '# # # # # # # . . . # # . . . .',
               '# # # # # # # . . . # . . . . .',
               '. . . . . . . . . . # # . . . .',
               '. S . . . . . . . . # . . . . .',
               '. # . . # . . # . . # . . # . .',
               '# # . # # . # # . # # . # # . #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromRight',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x16
        data: ['# # # # # # # # # # # # # # # #',
               '# S . . . . . . . . . . . . . #',
               '# . # # . # # # . # # . # # . #',
               '# . # . . . . # . # # . # # . #',
               '# . # . # # . # . . . . . . . #',
               '# . # # # # . # # # # # # # # #',
               '# . . . . # . . . . . . . # . #',
               '# # . # . # . # # # # # . # . #',
               '# . . # . # . . . . . # . # . #',
               '# . # # . # # # # # . # . # . #',
               '# . . # . . . . . # . # . # . #',
               '# # . # . # # # . # . # . # . #',
               '# # . # . . . . . # . # . . . #',
               '# # . # # # # # . # . # # # # #',
               '# . . # # . . . . # . . . . * #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromTopLeft',
        statusMessage: "",
        initialDarknessProgress: -1,
        onLoad: function() {}
    },

    {//16x13
        data: ['# # # # # # # # # # # # # # # #',
               '# # # # # # # # # # # # # # # #',
               '# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . . . . .',
               '. # # . . # # . . # # . . # # .',
               '. # # . . # # . . # # . . # # .',
               '. . . . . . . . . . . . . . . .',
               '. S . . . . . . . . . . . . * .',
               '. . . . . . . . . . . . . . . .',
               '. # # . . # # . . # # . . # # .',
               '. # # . . # # . . # # . . # # .',
               '. . . . . . . . . . . . . . . .',
               '# # # # # # # # # # # # # # # #',
               '# # # # # # # # # # # # # # # #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromTopAndBottom',
        statusMessage: "",
        initialDarknessProgress: -5,
        onLoad: function() {}
    },

    {//9x9
        data: [ '# . . . S . . . #',
                '# . . . . . . . #',
                '# . . . . . . . #',
                '# . . . . . . . #',
                '# . . . . . . . #',
                '# . . . . . . . #',
                '# . . . . . . . #',
                '# . . . . . . . #',
                '# . . . * . . . #'],
        darkness: 'fromLeftAndRight',
        statusMessage: "",
        initialDarknessProgress: -3,
        onLoad: function() {}
    },

    {//12x12
        data: [ '# # # # # # # # # # # #',
                '# * # # # # # # # # # #',
                '# . # # # # # # # # # #',
                '# . # # # # # # # # # #',
                '# . # # # # # # # # # #',
                '# . # # # # # # # # # #',
                '# . # # # # # # # # # #',
                '# . # # # # # # # # # #',
                '# . # # # # # # # # # #',
                '# . # # # # # # # # # #',
                '# S . . . . . . . . * #',
                '# # # # # # # # # # # #'],
        darkness: 'fromBottomLeft',
        statusMessage: "",
        initialDarknessProgress: 0,
        onLoad: function() {}
    },

    {//16x3
        data: [ '# # # # # # # # # # # # # # # #',
                '# * . . . . . . . S . . . . * #',
                '# # # # # # # # # # # # # # # #'],
        darkness: 'fromRight',
        statusMessage: "",
        initialDarknessProgress: 0,
        onLoad: function() {}
    },

    {//16x14
        data: [ '# # # # # # # # # # # # # # # #',
                '# # # # # # # # # . . . * # # #',
                '# # # # . . . # # . # # # # # #',
                '# # # . . # . . # . # # # # # #',
                '# # . . # # # . . . # # # # # #',
                '. . . # # # # # . . # # # # # #',
                'S . . # # # # # # . . # # # # #',
                '. . . # # # # # # # . . . . * #',
                '# # . . # # # # # # . # # # # #',
                '# # # . . . # # # # . # # # # #',
                '# # # # # . . . . # . # # # # #',
                '# # # # # # # # . . . # . . * #',
                '# # # # # # # # # # . . . # # #',
                '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -8,
        onLoad: function() {}
    },

    {//16x16
        data: ['# # # # # # # # # # # # # # # #',
               '# * # . . . . . . . . . . . S #',
               '# . # . # . # . # # # # # . . #',
               '# . # . # . # . . . . . . . . #',
               '# . # . # . # . # # # . . # . #',
               '# . # . # # # # # # . . # # . #',
               '# . . . . . * # # . . # # # . #',
               '# . # # # # # # . . # # # # . #',
               '# . . . . # # . . # # # # # . #',
               '# . # # . # . . # # . . . # . #',
               '# . # # . . . # # # . # . # . #',
               '# . # # . . # # # # . # . # . #',
               '# . # . . # # . . . . # . . . #',
               '# . . . # # # . # # . # # # # #',
               '# * . . . . . . . . . . . . * #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromBottomLeft',
        statusMessage: "",
        initialDarknessProgress: -4,
        onLoad: function() {}
    },

    {//16x16
        data: ['# # # # # # # # # # # # # # # #',
               '# # # # # # # # S # # # # # # #',
               '# # . # . . . . . . . . . . . #',
               '# # . # . # # # . # # # . # . #',
               '# # . . . . . . . # . # . # . #',
               '# # . # . # . # . # . . . . . #',
               '# # # # # # . # # # # . # # # #',
               '# # . . . . . . # . . . . . * #',
               '# # . # . # # # # # # # # . # #',
               '# * . # . . . . . . . . # . . #',
               '# # . # # # # # # # . # # # . #',
               '# # . . . . . . . # . # . # . #',
               '# # . # # # # # # # . # . # . #',
               '# # . . . . . . . . . . . . . #',
               '# # # # # # # # * # # # # # # #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromTopAndBottom',
        statusMessage: "",
        initialDarknessProgress: -6,
        onLoad: function() {}
    },

    {//16x11
        data: ['# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '. S . . . . . . . . . . . . * .',
               '. . . . . . . . . . . . . . . .',
               '# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . . . . .',
               '. S . . . . . . . . . . . . * .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x11
        data: ['# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '. S . . . . . . * . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . . . . .',
               '. S . . . . . . . . . . . . * .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x11
        data: ['# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . # . . . . . . . . .',
               '. . . S . . # . . . . * . . . .',
               '. . . . . . # . . . . . . . . .',
               '# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . . . . .',
               '. . . S . . . . . . . . . . * .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//11x3
        data: [ '# # # # # # # # # # #',
                '. S . . . . . S . . *',
                '# # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x11
        data: [ '# # # # # # # # # # # # # # # #',
                '. . . . . . . . . . . . . . . #',
                '. . . . . . . . . . # # # . . #',
                '. S . . . . . . . . . . . # . #',
                '. . . . . . . . . . . . . . # #',
                '. . . . . . . . . . . . * . # #',
                '. . . . . . . . . . . . . . # #',
                '. S . . . . . . . . . . . # . #',
                '. . . . . . . . . . # # # . . #',
                '. . . . . . . . . . . . . . . #',
                '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -3,
        onLoad: function() {}
    },

    {//16x11
        data: ['# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . . . # . . #',
               '. . . . . . . . . . # # . . # .',
               '. . . . S . . . . . # * . # . #',
               '. . . . . . . . . . . # . . . #',
               '# # # # # . # . # # # # # . # #',
               '. . . . . . # . . # . . . # . .',
               '. . . . S . . . . . . . . . * .',
               '. . . . . . . . . . . . . . . .',
               '. . . . . . . . . . . . . . . .',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//11 x 5
        data:  ['. S . S . S . S . S .',
                '. # . # . # . # . # .',
                '. . . . . . . . . . .',
                '. . . . . . . . . . .',
                '. * . * . * . * . * .'],
        darkness: 'fromTop',
        statusMessage: "",
        initialDarknessProgress: -1,
        onLoad: function() {}
    },

    {//16x12
        data:  ['# # # # # # # # # # # # # # # #',
                '. . . . . . . . . . . . . . . .',
                '. # # . . # # . . # # . . # # *',
                '. # # . . # # . . # # . . # # .',
                '. . . . . . . . . . . . . . . S',
                '. . . . . . . . . . . . . . . .',
                '. S . . . . . . . . . . . . * .',
                '. . . . . . . . . . . . . . . .',
                '. # # . . # # . . # # . . # # S',
                '. # # . . # # . . # # . . # # *',
                '. . . . . . . . . . . . . . . .',
                '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x16
        data:  ['. . . . . . . . . . . . . . . .',
                '. . . . . . # * # * # # * # * #',
                '. . . . . . * . . . . . . . . *',
                '. . . . . . # . . . # # . . . #',
                '. . . . . . * . . . . . . . . *',
                '. . . . . . # . . . # # . . . #',
                '. . . . . . * . . . . . . . . *',
                '# # # # # # # . . . # # . * . #',
                '# # * . . . . . . . . . . # . #',
                '# # . # # # # . . . . . . # . #',
                '# . . # . . . S . . . . . # . #',
                '# . # # . . . . . . . . . # . #',
                '# . # . . . . . . . . . . # . #',
                '# . # . . . . . . . . . . # . #',
                '# . # # . . . . . . . . # # . #',
                '* S . # . . . . . . . . # . S *'],
        darkness: 'fromBottom',
        statusMessage: "",
        initialDarknessProgress: 0,
        onLoad: function() {}
    },

    {//16x16
        data:  ['. . . . . . . . . . . . . . . *',
                '. . . . . . . . . . . . . . . *',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . S . . . . . . . .',
                '. . . . . . . . S . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . . .',
                '* . . . . . . . . . . . . . . .'],
        darkness: 'fromTopLeftAndBottomRight',
        statusMessage: "",
        initialDarknessProgress: 0,
        onLoad: function() {}
    },

    {//15x15
        data:  ['. . . . . . . . . . . . # . .',
                '. . . . . . . . . . . . # . .',
                '. . . . . . . . . . . . # . .',
                '. . . . . . . . . . . . # . .',
                '. . . . . . . . . S . # . . .',
                '. . . . . . . . . . . # . . .',
                '. . . . # . . . . . # . . . .',
                '. . . . # . . * . . # . . . .',
                '. . . . # . . . . . # . . . .',
                '. . . . . # . . . # . . . . .',
                '. . . . . . # . . . . . . . .',
                '. . . . . . . # . . . . . . .',
                '. . . . . . . # . . . . . . .',
                '. . . . . . . # S . . . . . .',
                '. . . . . . . # . . . . . . .'],
        darkness: 'fromLeftAndRight',
        statusMessage: "",
        initialDarknessProgress: -7,
        onLoad: function() {}
    },

    {//15x15
        data:  ['. . . . . . . . . . . . . . .',
                '. * . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . .',
                '. . . . . . . . . . . . . . .',
                '. . . . . . . S . . . . . . *',
                '. . . . . . . . S . # * . . .',
                '. . . . . . * . . S . . . . .',
                '. . . . . . . . . . S . # * .',
                '. . . . . . . . * . . S . . .',
                '. . . . . . . . . . # . S . *',
                '. . . . . . . . . . . . . S .',
                '. . . . . . . * . . . . * . S'],
        darkness: 'fromRightAndBottom',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x16
        data: ['# # # # # # # # # # # # # # # #',
               '# . . . . . . . . . . . . . . #',
               '# . # # # # # # # # # # # # . #',
               '# . # # # . . . . . . # # # . #',
               '# . # # # . # . # # . . . . . #',
               '# . # # # . S . # # . # # # . #',
               '# . # # # # # . # # . # # # . #',
               '# . . . . . # . # # . # # # . #',
               '# . . . . . # . . . . . . . * #',
               '# . # # # # # . # # # # # # . #',
               '# . # # # . . . # # # # # # . #',
               '# . # # # . # . # # # # # # . #',
               '# . # # # S . . # # # # # # . #',
               '# . # # # # # # # # # # # # . #',
               '# . . . . . . . . . . . . . . #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -3,
        onLoad: function() {}
    },

    {//14x14
        data: ['# # # # # # # # # # # # # # # #',
               '# # # # # # # # # # # # # # # #',
               '# # # S # # # # # # # # # # S #',
               '# # # . # # # # # # # # # # . #',
               '# # # . # # # # # # # # # # . #',
               '# # # . # # # # # # # # # # . #',
               '# # # . . . . . * * . . . . . #',
               '# # # . # # # # # # # # # # . #',
               '# # # . # # # # # # # * # # . #',
               '# # # . . . . # # # # . . . . #',
               '# # # . # # * # # # # # # # . #',
               '# # # . # # # # # # # # # # . #',
               '# # # . # # # # # # # * # # . #',
               '# # # S # # # # # # # . . . S #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromTopLeft',
        statusMessage: "",
        initialDarknessProgress: -2,
        onLoad: function() {}
    },

    {//14x14
        data: ['# # # # # # # # # # # # # #',
               '# S . . . . . . . . . . S #',
               '# . # # # # # # . # # # . #',
               '# . # # # # # # . # # # . #',
               '# . # # # # # # * # # # . *',
               '# . # # # # # # # # # # . #',
               '# . # # # # # # # # # # . #',
               '# . # # # # # # # # # # . #',
               '# . # # # # # # # # # # . #',
               '# . R # # # # # # # # # . #',
               '# . R R # # # # # # # # . #',
               '# . R # # # # # # * # # . #',
               '# S . . . . . . . . . . S #',
               '# # # # * # # # # # # # # #'],
        darkness: 'fromTopLeft',
        statusMessage: "",
        initialDarknessProgress: 0,
        onLoad: function() {}
    },

    {//16x11
        data: ['B B B # # # # # # # # # # # # #',
               '# B B # # # # # . . . . . S # #',
               '# # # # # # # # . # # # # # # #',
               '# . S . # . . . . . . . . . # #',
               '# . # . # . # . # . # . . . . #',
               '# . # . # . # . . . . . . * . #',
               '# . # . . . # . # . # . . . . #',
               '# . S . . . # . . . . . . . # #',
               '# # # . # # # . # . # # # # # #',
               '# . . . . . . . . . . . . * # #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromTopLeft',
        statusMessage: "",
        initialDarknessProgress: -4,
        onLoad: function() {}
    },

    {//15x16
        data: ['# # # # # # # # # # # # # # #',
               '# . . . . . . . . . . . B B #',
               '# . . . . . . . . . . B B B #',
               '# . . # . S S S S S . # . B #',
               '# . . . . . . . . . . . . . #',
               '# . R # . . . . . . . # R . #',
               '# . . R . . . . . . . . . . #',
               '# . . # . . . . . . . # . . #',
               '# . . R . . . . . . . . . . #',
               '# . . # R . . . . . . # . . #',
               '# . . . . . . . . . . . . . #',
               '# . . # . . . . . . . # R . #',
               '# R . R . . . . . . . R . . #',
               'G G R # R . . * . . . # . . #',
               'G G G G R . . . . . . . . . #',
               '# # G G # # # # # # # # # # #'],
        darkness: 'fromTop',
        statusMessage: "",
        initialDarknessProgress: -3,
        onLoad: function() {}
    },

    {//16x16
        data: ['# # # # # # # # # # # # # # # #',
               '# # # # # # # # # # # # # # # #',
               '# # # # # # # # # # # # # # # #',
               '. . . . . . . . . . R R G G G G',
               '. # # . . # # . . # # R R # # G',
               '. # # . . # # . . # # . R # # G',
               '. S . S . S . . . . . . R G * G',
               '. S . S . S . . . . . R G G * G',
               '. S . S . S . . . . . R G G * G',
               '. # # . . # # . . # # . R # # G',
               '. # # . . # # . . # # R G # # G',
               '. . . . . . . . . . R R G G G G',
               '# # # # # # # # # # # # # # # #',
               '# # # # # # # # # # # # # # # #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'fromLeft',
        statusMessage: "",
        initialDarknessProgress: -5,
        onLoad: function() {}
    },

    {
        data:  ['# # # # # B B # # # # # # B B #',
                '# G G G G R B B G G B B B B B #',
                '# G . . . . B B R R G B B B B #',
                '# G . S . . . B G . . . . B B #',
                '# R . . . . . . . . . . R R R #',
                'B R . B . . . . . . . R G G R B',
                'B . . G G B . . S . . R G R B B',
                'B B . R G B . . . . . . . R B B',
                'B B G . R B . . . . . S . R B B',
                '# B G R . B . . . . . . . G G B',
                '# R G R G B . . . . . . . . G #',
                '# . R . R G . S . . . R . . G #',
                '# . . . . R . . . . . G . B G #',
                '# . . . . . G B . . R G G R G #',
                '# . . . . . . . . . R G G G * #',
                '# # # # # # # # # # # # # # # #'],
        darkness: 'fromTopLeft',
        statusMessage: "",
        initalDarknessProgress: -2,
        onLoad: function() {}
    },

    {//16x16
        data: ['# # # # # # # # # # # # # # # #',
               '# R B B B G G G G G G . S . S #',
               '# R B B B R G G G G G G . S . #',
               '# G R B B B R G G G G G G . S #',
               '# G G R B B R G G G G G G G . #',
               '# G G R B B B R G G G G G G G #',
               '# G G G R B B R G G G G G G G #',
               '# G G G R B B B G G G G G G G #',
               '# G G R . . . . . R G G G G R #',
               '# G G R . . . . . R G G G R B #',
               '# G G G R B B B R G R R R R B #',
               '# G G G R B B B R R B B B B B #',
               '# G G G G R B B B B B B B B B #',
               '# G G G G R B B B B B B B B B #',
               '# G G G R B B B B B B B B B B #',
               '# # # # # # # # # # # # # # # #'],
        darkness: 'none',
        statusMessage: "",
        initialDarknessProgress: 0,
        onLoad: function() {
            PS.audioStop(songChannel);
            //Do something to play the old loop I had maybe? It's a happy thing that'll work out
        }
    },
];


var Grid = (function define_grid() {

    "use strict";

    var proto_grid;

    function resetCell(p_cell) {

        p_cell.occupants = undefined;

    }

    function createCell(P_imbued_value) {

        var proto_cell;

        proto_cell = {};

        resetCell(proto_cell);

        return proto_cell;

    }

    function createColumns(p_amount) {

        var columns = [];
        var i = 0;
        var n = p_amount;

        for ( i; i < n; i += 1 ) {

            columns[i] = createCell(0);

        }

        return columns;

    }

    function createNewGrid(p_width, p_height) {

        var grid;
        var i;
        var n;
        var columns;

        grid = [];

        i = 0;
        n = p_width;

        for ( i; i < n; i += 1 ) {

            columns = createColumns(p_height);

            grid[i] = columns;

        }

        return grid;

    }

    function addOccupant(p_grid, p_x, p_y, p_id) {

        var cell = p_grid[p_x][p_y];

        if (isUndefined(cell.occupants)) {

            cell.occupants = {};

        }

        cell.occupants[p_id] = true;

    }

    function getOccupants(p_grid, p_x, p_y) {

        var cell = p_grid[p_x][p_y];

        return cell.occupants;

    }

    function isOccupied(p_grid, p_x, p_y) {

        var cell = p_grid[p_x][p_y];

        return !isUndefined(cell.occupants);

    }

    function vacate(p_grid, p_x, p_y) {

        var cell = p_grid[p_x][p_y];

        resetCell(cell);

    }

    function resetRow(p_row) {

        var cell;

        var i = 0;
        var n = p_row.length;

        for ( i; i < n; i += 1 ) {

            cell = p_row[i];

            resetCell(cell);

        }

    }

    function resetGrid(p_grid) {

        var row;

        var i = 0;
        var n = p_grid.length;

        for ( i; i < n; i += 1 ) {

            row = p_grid[i];

            resetRow(row);

        }

    }

    proto_grid = {
        "create": createNewGrid,
        "addOccupant": addOccupant,
        "getOccupants": getOccupants,
        "isOccupied": isOccupied,
        "vacate": vacate,
        "reset": resetGrid
    };

    return proto_grid;

}());

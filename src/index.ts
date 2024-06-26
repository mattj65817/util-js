import { flattenValues, validateIn } from "./array-utils";
import { fetchJson } from "./data-utils";
import { isBox, isPath, isPoint } from "./geometry-types";
import {
    cartesianToPolar,
    degreesToRadians,
    intersection,
    polarDistance,
    polarToCartesian,
    radiansToDegrees,
    radianSum,
    scaledPath,
    sortedPath,
} from "./geometry-utils";
import {
    interpolate,
    interpolateBy,
    pickAdjacentBy,
    sortedInterpolate,
    sortedPickAdjacent,
    weightedInterpolate,
} from "./interpolation-utils";
import { scale } from "./number-utils";
import { isKinded, isTimestamped } from "./util-types";

import type { Interpolator, InterpolationTable, WeightedInterpolation } from "./interpolation-types";
import type { Creator, GuardedJsonLoader, Kinded, Timestamped } from "./util-types";
import type { Box, Dimensions, Path, Point } from "./geometry-types";

/* Library exports. */
export {
    Box,
    Creator,
    Dimensions,
    GuardedJsonLoader,
    InterpolationTable,
    Interpolator,
    Kinded,
    Path,
    Point,
    Timestamped,
    WeightedInterpolation,
    cartesianToPolar,
    degreesToRadians,
    fetchJson,
    flattenValues,
    interpolate,
    interpolateBy,
    intersection,
    isBox,
    isKinded,
    isPath,
    isPoint,
    isTimestamped,
    pickAdjacentBy,
    polarDistance,
    polarToCartesian,
    radiansToDegrees,
    radianSum,
    scale,
    scaledPath,
    sortedInterpolate,
    sortedPath,
    sortedPickAdjacent,
    validateIn,
    weightedInterpolate,
};

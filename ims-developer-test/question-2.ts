/**
 * a. berapa output A dan B jika nilai inout A dan B = (3,5)
 * condition 1: A <= 5 true
 * process    : B = 2 + A -> 2 + 3 = 5
 *              A++ -> 4
 * printout   : B   -> printout: 5
 * printout   : B*2 -> printout: 10
 * final value: A = 4 dan B = 5
 *
 * b. berapa output A dan B jika nilai inout A dan B = (7, 8)
 * condition 1: A <= 5 false
 * condition 2: B > A true
 * process    : B = 1,
 * loop       : cond B <= 3? true, printout: B*2 -> 1 * 2 -> printout: 2, B++ -> B = 2
 *              cond B <= 3? true, printout: B*2 -> 2 * 2 -> printout: 4, B++ -> B = 3
 *              cond B <= 3? true, printout: B*2 -> 3 * 2 -> printout: 6, B++ -> B = 4
 *              cond B <= 3? false,
 * printout   : B*2 -> printout: 4 * 2 = 8
 * final value: A = 7 dan B = 4
 */

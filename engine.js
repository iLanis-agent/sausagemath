/* SausageMath engine - pure functions, no DOM. Honest sausage-making math.
   Constants stated in the UI: Prague powder #1 is 6.25% nitrite, 156 ppm in-going
   max for comminuted sausage, salt 1.8-2%, hog casing about 2 ft per lb,
   smoked shrink about 12%, dry-cured about 35%. */
var SausageMath = (function () {
  var LB_G = 453.592;
  function cureG(meatLb, ppm) {
    var nitriteG = meatLb * LB_G * ppm / 1e6;
    return nitriteG / 0.0625;
  }
  function ppmCheck(meatLb, cureGrams) {
    return cureGrams * 0.0625 / (meatLb * LB_G) * 1e6;
  }
  function cureVerdict(ppm) {
    if (ppm <= 0) return 'No cure - fresh sausage only, cook it like any ground meat.';
    if (ppm < 100) return 'Under 100 ppm - light cure; fine for quick-smoked links eaten soon, not for slow ferments.';
    if (ppm <= 156) return 'In the 100-156 ppm band - the standard in-going cure for comminuted sausage.';
    return 'Over 156 ppm - too much cure. Do not eyeball this: weigh the cure on a gram scale.';
  }
  function fatAddLb(leanLb, leanFatPct, targetFatPct) {
    return leanLb * (targetFatPct - leanFatPct) / (100 - targetFatPct);
  }
  function fatVerdict(pct) {
    if (pct < 15) return 'Under 15% fat eats like a burger puck - sausage wants at least 20%.';
    if (pct <= 30) return 'In the 20-30% band - juicy without greasing the pan.';
    return 'Over 30% fat - rich territory; the smoker will drip and the links may crumble.';
  }
  function saltG(blockLb, pct) {
    return blockLb * LB_G * pct / 100;
  }
  function casingFt(blockLb, type) {
    var ftPerLb = type === 'sheep' ? 3 : (type === 'collagen' ? 2.2 : 2);
    return blockLb * ftPerLb;
  }
  function casingVerdict(type) {
    if (type === 'sheep') return 'Sheep casing: breakfast-link diameter, tender snap, delicate to stuff.';
    if (type === 'collagen') return 'Collagen: uniform and forgiving - the beginner casing.';
    return 'Hog casing: the classic brat diameter, about 2 feet per pound of meat.';
  }
  function yieldLb(blockLb, style) {
    var k = style === 'drycured' ? 0.65 : (style === 'smoked' ? 0.88 : 1);
    return blockLb * k;
  }
  function yieldVerdict(style) {
    if (style === 'drycured') return 'Dry-cured keeps 65% - you are trading water for shelf life and flavor.';
    if (style === 'smoked') return 'Smoked drops about 12% in the smoker - plan links accordingly.';
    return 'Fresh keeps every gram but spoils like ground meat - freeze what you will not cook in two days.';
  }
  return {
    cureG: cureG, ppmCheck: ppmCheck, cureVerdict: cureVerdict,
    fatAddLb: fatAddLb, fatVerdict: fatVerdict, saltG: saltG,
    casingFt: casingFt, casingVerdict: casingVerdict, yieldLb: yieldLb, yieldVerdict: yieldVerdict
  };
})();
if (typeof module !== 'undefined') module.exports = SausageMath;

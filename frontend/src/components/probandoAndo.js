class Player {
  firstmove(cakes) {
    if (cakes < 3) return false
    if ((cakes - 6) % 4 === 0) return false
    else return true
  }
  move(cakes, last) {
    if (cakes === 4) {
      if (last === 3) return 2
      else return 3
    }
    if (cakes === 3) return 2
    if ((cakes - 5) % 4 === 0) {
      if (last === 3) return 2
      else return 3
    } else if ((cakes - 4) % 4 === 0) {
      if (last === 2) return 1
      else return 2
    } else if ((cakes - 3) % 4 === 0) {
      return 1
    }
    if (last === 1) return 2
    else return 1
  }
}

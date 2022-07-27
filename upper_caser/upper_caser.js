const UpperCaser = function (words) {
    this.words = words
}

// ATTEMPT 1 _________ ❌ kept returning undefined

UpperCaser.prototype.toUpperCase = function () {
   const upper = this.words.map(word => word.toUpperCase())
}


 

// // ATTEMPT 2 BASIC _________ ✅

// UpperCaser.prototype.toUpperCase = function () {
//     capitals = []
//     const upper = this.words.forEach(word => {
//          capitals.push(word.toUpperCase());
//       });
//    return capitals; 
//  };

// OR 

// UpperCaser.prototype.toUpperCase = function () {
//     capitals = []
//     const upper = this.words.map(word => {
//          capitals.push(word.toUpperCase());
//       });
//    return capitals; 
//  };
 


module.exports = UpperCaser;

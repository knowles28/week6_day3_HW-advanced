const UpperCaser = function (words) {
    this.words = words
}

// ATTEMPT 1 _________ ❌ kept returning undefined

UpperCaser.prototype.toUpperCase = function () {
   const upper = this.words.map(word => {
    return word.toUpperCase()
    });
};


 

// // ATTEMPT 2 BASIC _________ ✅

// UpperCaser.prototype.toUpperCase = function () {
//     capitalised = []
//     const upper = this.words.map(word => {
//          capitalised.push(word.toUpperCase());
//       });
//    return capitalised; 
//  };
 


module.exports = UpperCaser;

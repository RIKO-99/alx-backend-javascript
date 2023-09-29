export default function getNeighborhoodsList() {
  // In ES6, you can use the class field syntax to define properties.
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Use an arrow function to create the 'addNeighborhood' method.
  this.addNeighborhood = (newNeighborhood) => {
    // Since it's an arrow function, 'this' refers to the surrounding lexical context,
    // which is the 'getNeighborhoodsList' function in this case.
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}

import { allMoviesData } from "../../src/MockData"

describe('All movies view', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 200,
      body: allMoviesData,
    });
  })
  it('should visit page and see the main title', () => {
    cy.get('h1').contains('Rancid Tomatillos')
  
  });
  it('should display a collection of movies', () => {
    cy.get('div.movies-container').contains('Mulan');
  }); 

});